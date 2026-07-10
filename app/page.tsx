import { prisma } from "@/prisma/prisma";
import Link from "next/link";
import { getUser } from "./actions/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  if ((await getUser()) !== "admin") {
    redirect("/login");
  }
  // 1. Fetch substances with their transaction history
  const substances = await prisma.substance.findMany({
    include: {
      transactions: true,
    },
    orderBy: { date: "desc" },
  });

  // 2. Fetch the 10 most recent transactions for the audit trail
  const recentTransactions = await prisma.transaction.findMany({
    include: { substance: true },
    orderBy: { date: "desc" },
    take: 10,
  });

  return (
    <div className="mx-auto max-w-7xl p-6 font-sans">
      {/* Top Header & Navigation Controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Material & Substance Inventory
          </h1>
          <p className="text-sm text-slate-500">
            Track raw bulk weights, item counts, and historical usage logs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/add-substance"
            className="rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
          >
            + Add New Substance
          </Link>
          <Link
            href="/add-transaction"
            className="rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            - Log Usage / Transaction
          </Link>
        </div>
      </div>

      {/* Main Inventory Balance Sheet Table */}
      <div className="mb-10 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50/70 px-6 py-4">
          <h2 className="font-semibold text-slate-800">
            Current Stock Levels & Material Balances
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5">Product Details</th>
                <th className="px-6 py-3.5">Material / Container</th>
                <th className="px-6 py-3.5 text-right">Gross Wt</th>
                <th className="px-6 py-3.5 text-right">Tare Wt</th>
                <th className="px-6 py-3.5 text-right">Initial Net</th>
                <th className="px-6 py-3.5 text-right">Total Consumed</th>
                <th className="px-6 py-3.5 text-right font-bold text-slate-900">
                  Current Balance
                </th>
                <th className="px-6 py-3.5 text-center">Expires</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {substances.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-10 text-center text-slate-400 italic"
                  >
                    No substances logged in the inventory yet.
                  </td>
                </tr>
              ) : (
                substances.map((substance) => {
                  // Calculate dynamic balances using the aggregate array lookup
                  const totalUsed = substance.transactions.reduce(
                    (sum, tx) => sum + tx.used,
                    0,
                  );
                  const remainingBalance = substance.initialNet - totalUsed;

                  return (
                    <tr
                      key={substance.id}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      {/* Product Name & Lot identification */}
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">
                          {substance.productName}
                        </div>
                        <div className="mt-0.5 font-mono text-xs text-slate-400">
                          Lot: {substance.lotNumber}
                        </div>
                      </td>

                      {/* Material Type metadata context */}
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                          {substance.materialType}
                        </span>
                        <div className="mt-1 text-xs text-slate-400 truncate max-w-[120px]">
                          {substance.container}
                        </div>
                      </td>

                      {/* Gross weight parsing logic for items that have it */}
                      <td className="px-6 py-4 text-right font-mono text-xs text-slate-500">
                        {substance.initialGross !== null
                          ? `${substance.initialGross.toFixed(3)} ${substance.unit}`
                          : "—"}
                      </td>

                      {/* Tare weight parsing logic for items that have it */}
                      <td className="px-6 py-4 text-right font-mono text-xs text-slate-500">
                        {substance.initialTare !== null
                          ? `${substance.initialTare.toFixed(3)} ${substance.unit}`
                          : "—"}
                      </td>

                      {/* Always available initial net value column */}
                      <td className="px-6 py-4 text-right font-mono font-medium text-slate-700">
                        {substance.initialNet.toFixed(3)} {substance.unit}
                      </td>

                      {/* Summation of subtable logs */}
                      <td className="px-6 py-4 text-right font-mono text-xs text-amber-600 font-medium">
                        {totalUsed > 0
                          ? `-${totalUsed.toFixed(3)} ${substance.unit}`
                          : `0.000 ${substance.unit}`}
                      </td>

                      {/* Dynamic alerts for depleted or completely exhausted raw material balances */}
                      <td
                        className={`px-6 py-4 text-right font-mono font-bold ${remainingBalance <= 0 ? "text-red-600 bg-red-50/30" : "text-slate-900"}`}
                      >
                        {remainingBalance.toFixed(3)} {substance.unit}
                      </td>

                      {/* Handle items lacking an expiration milestone cleanly without runtime exceptions */}
                      <td className="px-6 py-4 text-center text-xs whitespace-nowrap">
                        {substance.expirationDate ? (
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${new Date(substance.expirationDate) < new Date() ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-700"}`}
                          >
                            {new Date(
                              substance.expirationDate,
                            ).toLocaleDateString()}
                          </span>
                        ) : (
                          <span className="text-slate-400 italic text-xs">
                            No Exp
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Logs Trail Tracker Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50/70 px-6 py-4">
          <h2 className="font-semibold text-slate-800">
            Recent Transaction History & Audit Ledger
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5">Execution Date</th>
                <th className="px-6 py-3.5">Target Material (Lot Reference)</th>
                <th className="px-6 py-3.5">Intended Action / Purpose</th>
                <th className="px-6 py-3.5 text-right">Quantity Drawn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {recentTransactions.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-slate-400 italic"
                  >
                    No consumption logs recorded yet. Use the log button above
                    to issue a transaction.
                  </td>
                </tr>
              ) : (
                recentTransactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-6 py-4 text-xs text-slate-500 font-mono">
                      {new Date(tx.date).toLocaleDateString()}{" "}
                      {new Date(tx.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {tx.substance?.productName || "Deleted Substance"}
                      </div>
                      {tx.substance && (
                        <div className="text-xs text-slate-400 font-mono">
                          Lot: {tx.substance.lotNumber}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium italic">
                      {tx.purpose}
                    </td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-red-600">
                      {tx.used.toFixed(3)} {tx.substance?.unit || ""}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
