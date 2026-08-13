// app/admin/page.tsx
import { prisma } from "@/prisma/prisma";
import { VerifyButton } from "./verifyButton";

export default async function AdminDashboardPage() {
  const unverifiedRaw = await prisma.transaction.findMany({
    where: {
      adminVerified: false,
    },
    include: {
      container: {
        include: {
          substance: true,
        },
      },
      user: {
        select: { name: true, initials: true },
      },
      verifier: {
        select: { name: true, initials: true },
      },
    },
    orderBy: { date: "desc" },
  });

  // Deeply serialize Decimals and Dates into JSON primitives
  const unverifiedTransactions = JSON.parse(JSON.stringify(unverifiedRaw));

  return (
    <div className="bg-slate-50 size-full">
      <div className="mx-auto max-w-fit p-8 space-y-6 min-h-screen text-slate-800 font-sans">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Admin Verification Queue
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Review and sign off on pending operator checkout and
              reconciliation transactions.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs text-amber-800 font-medium">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            {unverifiedTransactions.length} Pending Review(s)
          </div>
        </div>

        {/* Unverified Transactions Table */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {unverifiedTransactions.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm">
              All transactions have been verified by an administrator.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600 border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4">Date & Time</th>
                    <th className="py-3 px-4">Product / Lot #</th>
                    <th className="py-3 px-4">Movement</th>
                    <th className="py-3 px-4 text-right">Checked Out</th>
                    <th className="py-3 px-4 text-right">Used / Lost</th>
                    <th className="py-3 px-4 text-right">Returned</th>
                    <th className="py-3 px-4">Operator / Witness</th>
                    <th className="py-3 px-4">Purpose</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {unverifiedTransactions.map((tx: any) => {
                    const unit = tx.container.substance.unit;

                    return (
                      <tr
                        key={tx.id}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">
                          {new Date(tx.date).toLocaleString()}
                        </td>

                        <td className="py-3 px-4">
                          <div className="font-semibold text-slate-900">
                            {tx.container.substance.productName}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            Lot: {tx.container.substance.lotNumber}
                            {tx.container.serialNumber
                              ? ` • SN: ${tx.container.serialNumber}`
                              : ""}
                          </div>
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-800 border border-slate-200">
                            {tx.fromId} → {tx.toId}
                          </span>
                        </td>

                        <td className="py-3 px-4 text-right font-mono font-bold text-slate-900 whitespace-nowrap">
                          {tx.amountCheckedOut} {unit}
                        </td>

                        <td className="py-3 px-4 text-right font-mono whitespace-nowrap">
                          {tx.amountUsed !== null ? (
                            <span className="text-slate-700">
                              {tx.amountUsed} {unit}
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                          {tx.amountLost && Number(tx.amountLost) > 0 && (
                            <div className="text-[10px] text-red-600 font-semibold">
                              Lost: {tx.amountLost} {unit}
                            </div>
                          )}
                        </td>

                        <td className="py-3 px-4 text-right font-mono text-emerald-700 font-semibold whitespace-nowrap">
                          {tx.amountRemaining !== null ? (
                            `${tx.amountRemaining} ${unit}`
                          ) : (
                            <span className="text-amber-600 text-[10px]">
                              Pending Verification
                            </span>
                          )}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="font-medium text-slate-900">
                            {tx.user?.name || `User #${tx.userId}`}
                          </div>
                          {tx.verifier ? (
                            <div className="text-[10px] text-emerald-600 font-medium">
                              ✓ Witness: {tx.verifier.name}
                            </div>
                          ) : (
                            <div className="text-[10px] text-slate-400">
                              Unwitnessed
                            </div>
                          )}
                        </td>

                        <td className="py-3 px-4 max-w-xs">
                          <div className="font-semibold text-slate-800 truncate">
                            {tx.purpose}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {tx.description}
                          </div>
                        </td>

                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <VerifyButton transactionId={tx.id} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
