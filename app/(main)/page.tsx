// app/dashboard/page.tsx
import { prisma } from "@/prisma/prisma";
import { redirect } from "next/navigation";
import { DashboardTransactions } from "./dashboardTransactions";
import { getUser } from "../actions/session";

export default async function DashboardPage() {
  const verifierUser = await getUser();

  if (!verifierUser) redirect("/login");

  // Query unverified transactions (where amountReturned is null)
  const rawTransactions = await prisma.transaction.findMany({
    where: {
      verifierId: null,
      amountRemaining: null,
    },
    include: {
      container: {
        include: { substance: true },
      },
      user: true,
    },
    orderBy: { date: "desc" },
  });

  // Map to clean client props
  const activeTransactions = rawTransactions.map((tx) => ({
    id: tx.id,
    amountCheckedOut: tx.amountCheckedOut.toString(),
    purpose: tx.purpose,
    description: tx.description,
    date: tx.date,
    fromId: tx.fromId,
    toId: tx.toId,
    container: {
      id: tx.container.id,
      serialNumber: tx.container.serialNumber,
      substance: {
        productName: tx.container.substance.productName,
        lotNumber: tx.container.substance.lotNumber,
        unit: tx.container.substance.unit,
      },
    },
    user: { id: tx.user.id, name: tx.user.name },
  }));

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Active Transactions & Verification
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Reconcile usage, process losses, and returned quantities to verify and
          close pending checkout requests.
        </p>
      </div>

      {activeTransactions.length > 0 ? (
        <DashboardTransactions
          initialTransactions={activeTransactions}
          verifierUser={verifierUser}
        />
      ) : (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No active transactions requiring verification.
        </div>
      )}
    </div>
  );
}
