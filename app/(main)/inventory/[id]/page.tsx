// app/inventory/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContainerDetails } from "../actions";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ContainerDetailPage({ params }: Props) {
  const { id } = await params;
  const containerId = Number(id);

  if (isNaN(containerId)) {
    notFound();
  }

  const container = await getContainerDetails(containerId);

  if (!container) {
    notFound();
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen text-gray-800">
      {/* Back Button */}
      <div>
        <Link
          href="/inventory"
          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          ← Back to Inventory
        </Link>
      </div>

      {/* Container Header Details */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {container.substance.productName}
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                {container.substance.materialType}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Container ID #{container.id} • Lot:{" "}
              {container.substance.lotNumber} • SN: {container.serialNumber}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs font-semibold text-gray-400 uppercase">
                Initial Net
              </span>
              <p className="text-lg font-bold font-mono text-gray-900">
                {container.initialNet.toFixed(2)} {container.substance.unit}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-gray-400 block font-medium">
              Container Type
            </span>
            <span className="font-semibold text-gray-800">
              {container.containerType}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">Storage Bin</span>
            <span className="font-semibold text-gray-800">{container.bin}</span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">
              Received Date
            </span>
            <span className="font-semibold text-gray-800">
              {new Date(container.substance.receivedDate).toLocaleDateString()}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">
              Expiration Date
            </span>
            <span className="font-semibold text-gray-800">
              {container.substance.expirationDate
                ? new Date(
                    container.substance.expirationDate,
                  ).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Transactions History Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-200 bg-gray-50/50 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">
            Transaction History ({container.transactions.length})
          </h2>
        </div>

        {container.transactions.length === 0 ? (
          <div className="p-12 text-center text-gray-500 text-sm">
            No transactions logged for this container yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3">Date & Time</th>
                  <th className="px-4 py-3">Movement</th>
                  <th className="px-4 py-3 text-right">Checked Out</th>
                  <th className="px-4 py-3 text-right">Used</th>
                  <th className="px-4 py-3 text-right">Lost</th>
                  <th className="px-4 py-3 text-right">Remaining</th>
                  <th className="px-4 py-3">Purpose & Description</th>
                  <th className="px-4 py-3">Operator / Witness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {container.transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap font-mono text-gray-500">
                      {new Date(tx.date).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-800 border border-gray-200">
                        {tx.fromLocation} → {tx.toLocation}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-gray-900">
                      {tx.amountCheckedOut.toFixed(2)}{" "}
                      {container.substance.unit}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-gray-700">
                      {tx.amountUsed !== null
                        ? `${tx.amountUsed.toFixed(2)} ${container.substance.unit}`
                        : "—"}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-amber-700">
                      {tx.amountLost !== null
                        ? `${tx.amountLost.toFixed(2)} ${container.substance.unit}`
                        : "—"}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-emerald-700 font-semibold">
                      {tx.amountRemaining !== null
                        ? `${tx.amountRemaining.toFixed(2)} ${container.substance.unit}`
                        : "—"}
                    </td>
                    <td className="px-4 py-3 max-w-xs">
                      <div className="font-semibold text-gray-800">
                        {tx.purpose}
                      </div>
                      <div className="text-gray-500 truncate">
                        {tx.description}
                      </div>
                      {tx.comment && (
                        <div className="text-[10px] text-gray-400 italic mt-0.5">
                          "{tx.comment}"
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {tx.operatorName}
                      </div>
                      {tx.verifierName ? (
                        <div className="text-[10px] text-emerald-600 font-medium">
                          ✓ Witness: {tx.verifierName}
                        </div>
                      ) : (
                        <div className="text-[10px] text-amber-600 font-medium">
                          ⏳ Pending Verification
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
