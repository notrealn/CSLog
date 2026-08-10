"use server";

import { prisma } from "@/prisma/prisma";

export interface LocationBalance {
  location: string;
  amount: number;
}

export interface ContainerInventoryItem {
  containerId: number;
  serialNumber: string;
  bin: string;
  productName: string;
  lotNumber: string;
  materialType: string;
  unit: string;
  initialNet: number;
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

export async function getInventoryData(): Promise<InventorySummary> {
  try {
    const substances = await prisma.substance.findMany({
      include: {
        containers: {
          include: {
            transactions: {
              orderBy: { date: "asc" },
            },
          },
        },
      },
    });

    const inventoryItems: ContainerInventoryItem[] = substances.flatMap(
      (substance) => {
        return substance.containers.map((container) => {
          const initialNet = Number(container.initialNet ?? 0);

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
          const locationBalances: LocationBalance[] = Object.entries(
            balancesByLocation,
          )
            .filter(([_, amount]) => amount > 0)
            .map(([location, amount]) => ({ location, amount }));

          const totalRemaining = locationBalances.reduce(
            (sum, b) => sum + b.amount,
            0,
          );

          return {
            containerId: container.id,
            serialNumber: container.serialNumber ?? "N/A",
            bin: container.bin ?? "N/A",
            productName: substance.productName,
            lotNumber: substance.lotNumber,
            materialType: substance.materialType,
            unit: substance.unit,
            initialNet,
            totalRemaining,
            locationBalances,
            transactionCount: container.transactions.length,
          };
        });
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
