import { prisma } from "@/prisma/prisma";
import { redirect } from "next/navigation";
import { DashboardTransactions } from "./dashboardTransactions";
import { getUsername } from "../actions/session";

export default async function DashboardPage() {
  const username = await getUsername();
  if (!username) redirect("/login");

  const activeTransactions = await prisma.transaction.findMany({
    where: {
      verifier: null,
      amountReturned: null,
    },
    include: { substance: true, user: true },
    orderBy: { date: "desc" },
  });

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Active transactions
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Review each request and close it once it has been verified.
        </p>
      </div>

      {activeTransactions.length > 0 ? (
        <DashboardTransactions initialTransactions={activeTransactions} />
      ) : (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          No active transactions.
        </div>
      )}
    </div>
  );
}
