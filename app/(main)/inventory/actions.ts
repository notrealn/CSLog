"use server";

import {
  Container,
  Location,
  Substance,
  Transaction,
  User,
} from "@/prisma/generated";
import { prisma } from "@/prisma/prisma";

export interface LocationBalance {
  location: string;
  amount: number;
}

export type SerializedContainer = Omit<
  Container,
  "initialNet" | "initialGross" | "initialTare" | "transactions"
> & {
  initialNet: string;
  initialGross: string | null;
  initialTare: string | null;
  transactions: SerializedTransaction[];
};

export interface SerializedTransaction extends Omit<
  Transaction,
  | "amountCheckedOut"
  | "amountUsed"
  | "amountLost"
  | "amountRemaining"
  | "newGross"
> {
  amountCheckedOut: string;
  amountUsed: string | null;
  amountLost: string | null;
  amountRemaining: string | null;
  newGross: string | null;

  from: Location;
  to: Location;

  user: string;
  userInitials: string;
  verifier?: string;
  verifierInitials?: string;
}

export interface ContainerInventoryItem extends SerializedContainer {
  substance: Substance;
  totalRemaining: number;
  locationBalances: LocationBalance[];
  transactionCount: number;
}

export interface InventorySummary {
  exportedAt: string;
  summary: {
    totalSubstances: number;
    totalContainers: number;
    locationBreakdown: Record<string, number>;
  };
  inventory: ContainerInventoryItem[];
}

export interface SerializedUser {
  name: string;
  initials?: string;
}

export async function getInventoryData(): Promise<InventorySummary> {
  try {
    const substances = await prisma.substance.findMany({
      include: {
        containers: {
          include: {
            transactions: {
              include: {
                user: true,
                verifier: true,
                from: true,
                to: true,
              },
              orderBy: { date: "asc" },
            },
          },
        },
      },
    });

    const inventoryItems: ContainerInventoryItem[] = substances.flatMap(
      (substance) => {
        return substance.containers.map((container) =>
          combineTransactions(container, substance),
        );
      },
    );

    // Summary of total units across all locations in storage
    const locationBreakdown: Record<string, number> = {};
    inventoryItems.forEach((item) => {
      item.locationBalances.forEach((lb) => {
        locationBreakdown[lb.location] =
          (locationBreakdown[lb.location] ?? 0) + lb.amount;
      });
    });

    return {
      exportedAt: new Date().toISOString(),
      summary: {
        totalSubstances: substances.length,
        totalContainers: inventoryItems.length,
        locationBreakdown,
      },
      inventory: inventoryItems,
    };
  } catch (error) {
    console.error("Error generating inventory:", error);
    throw new Error("Unable to retrieve inventory data.");
  }
}

function combineTransactions(
  container: {
    transactions: (Transaction & {
      from: Location;
      to: Location;
      user: SerializedUser;
      verifier: SerializedUser | null;
    })[];
  } & Container,
  substance: Substance,
) {
  const initialNet = Number(container.initialNet);

  // Track running balances across locations, defaulting initialNet to "Cage"
  const balancesByLocation: Record<string, number> = {
    Cage: initialNet,
  };

  container.transactions.forEach((tx) => {
    const fromLoc = tx.fromId || "Cage";
    const toLoc = tx.toId;
    const checkedOut = Number(tx.amountCheckedOut ?? 0);

    // Deduct checked-out amount from source location
    balancesByLocation[fromLoc] =
      (balancesByLocation[fromLoc] ?? 0) - checkedOut;

    // Compute remaining amount at target location
    let remainingAtDestination = Number(tx.amountRemaining);
    if (tx.amountRemaining === null) {
      const used = Number(tx.amountUsed ?? 0);
      const lost = Number(tx.amountLost ?? 0);
      remainingAtDestination = Math.max(0, checkedOut - (used + lost));
    }

    // Add remaining units to destination location
    balancesByLocation[toLoc] =
      (balancesByLocation[toLoc] ?? 0) + remainingAtDestination;
  });

  // Retain only positive location balances
  const locationBalances: LocationBalance[] = Object.entries(balancesByLocation)
    .filter(([_, amount]) => amount > 0)
    .map(([location, amount]) => ({ location, amount }));

  const totalRemaining = locationBalances.reduce((sum, b) => sum + b.amount, 0);

  Object.assign(container, {
    initialNet: initialNet.toString(),
    initialGross: container.initialGross?.toString() ?? null,
    initialTare: container.initialTare?.toString() ?? null,
  });

  container.transactions.forEach((trans) =>
    Object.assign(trans, {
      amountCheckedOut: trans.amountCheckedOut.toString(),
      amountUsed: trans.amountUsed?.toString() ?? null,
      amountLost: trans.amountLost?.toString() ?? null,
      amountRemaining: trans.amountRemaining?.toString() ?? null,
      newGross: trans.newGross?.toString() ?? null,
      user: trans.user.name,
      userInitials: trans.user.initials,
      verifier: trans.verifier?.name,
      verifierInitials: trans.verifier?.initials,
    }),
  );

  return {
    ...(container as unknown as SerializedContainer),
    substance,
    totalRemaining,
    locationBalances,
    transactionCount: container.transactions.length,
  };
}

async function getContainer(containerId: number) {
  return await prisma.container.findUnique({
    where: { id: containerId },
    include: {
      substance: true,
      transactions: {
        include: {
          user: { select: { name: true, initials: true } },
          verifier: { select: { name: true, initials: true } },
          from: true,
          to: true,
        },
        orderBy: { date: "desc" }, // Show newest transactions first
      },
    },
  });
}

export async function getContainerCounts(containerId: number) {
  const c = await getContainer(containerId);

  if (!c) return null;

  return combineTransactions(c, c.substance);
}
