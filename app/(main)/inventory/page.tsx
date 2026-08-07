import { redirect } from "next/navigation";
import { getUser } from "../../actions/session";
import { formatDate } from "../../util";
import { getInventory } from "@/app/api/inventory/route";
import Link from "next/link";

export default async function InventoryPage() {
  const user = await getUser();

  if (["SUPERUSER", "USER", "REVIEWER"].every((r) => user.role !== r)) {
    redirect("/");
  }

  const inventoryData = await getInventory();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Inventory Tracking
          </h1>
          <p className="text-gray-400">
            Click an entry to view its transactions.
          </p>
        </div>
        <Link
          className="mr-auto bg-slate-400 text-white font-bold p-2 rounded-lg"
          href="/api/inventory"
        >
          Export to CSV
        </Link>
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <span className="text-xs font-medium uppercase text-slate-500">
            Total Substances
          </span>
          <p className="text-xl font-bold text-slate-900">
            {inventoryData.length}
          </p>
        </div>
      </div>

      {/* Main Table Grid Container */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto min-w-2xl">
          {/* Grid Header */}
          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <div className="px-3 py-3.5">Product & Lot</div>
            <div className="px-3 py-3.5">Type & Container</div>
            <div className="px-3 py-3.5">Recieved / Exp.</div>
            <div className="px-3 py-3.5 text-right">Initial Net</div>
            <div className="px-3 py-3.5 text-right">Total Dispensed</div>
            <div className="px-3 py-3.5 text-right">Waste (Returned)</div>
            <div className="px-3 py-3.5 text-right">Current Net</div>
          </div>

          {/* Grid Body */}
          <div className="divide-y divide-slate-200 bg-white text-sm text-slate-600">
            {inventoryData.length === 0 ? (
              <div className="px-3 py-10 text-center text-slate-400">
                No substances recorded in inventory yet.
              </div>
            ) : (
              inventoryData.map((s) => (
                <Link
                  key={s.id}
                  href={`/inventory/${s.id}`}
                  className="grid grid-cols-7 items-center hover:bg-slate-200/80 transition-colors cursor-pointer"
                >
                  {/* Product Name & Lot */}
                  <div className="whitespace-nowrap px-3 py-4">
                    <div className="font-semibold text-slate-900">
                      {s.productName}
                    </div>
                    <div className="text-xs text-slate-500">
                      Lot: <span className="font-mono">{s.lotNumber}</span>
                    </div>
                  </div>

                  {/* Material Type & Container */}
                  <div className="whitespace-nowrap px-3 py-4">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                      {s.materialType}
                    </span>
                    {s.container && (
                      <div className="mt-1 text-xs text-slate-500">
                        {s.container}
                      </div>
                    )}
                  </div>

                  {/* Dates */}
                  <div className="whitespace-nowrap px-3 py-4 text-xs">
                    <div>
                      Rec:{" "}
                      <span className="font-medium text-slate-700">
                        {formatDate(s.recievedDate)}
                      </span>
                    </div>
                    {s.expirationDate ? (
                      <div className="text-slate-500">
                        Exp:{" "}
                        <span className="font-medium text-slate-700">
                          {formatDate(s.expirationDate)}
                        </span>
                      </div>
                    ) : (
                      <div className="text-slate-400">Exp: N/A</div>
                    )}
                  </div>

                  {/* Initial Net */}
                  <div className="whitespace-nowrap px-3 py-4 text-right font-medium text-slate-700">
                    {+s.initialNet.toFixed(4)} {s.unit}
                  </div>

                  {/* Total Dispensed */}
                  <div className="whitespace-nowrap px-3 py-4 text-right font-medium text-slate-600">
                    {+s.totalDispensed.toFixed(4)} {s.unit}
                  </div>

                  {/* Total Waste (Returned) */}
                  <div className="whitespace-nowrap px-3 py-4 text-right">
                    <span
                      className={`font-semibold ${
                        s.totalWaste > 0 ? "text-amber-600" : "text-slate-400"
                      }`}
                    >
                      {+s.totalWaste.toFixed(4)} {s.unit}
                    </span>
                  </div>

                  {/* Current Net Remaining */}
                  <div className="whitespace-nowrap px-3 py-4 text-right">
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ${
                        s.currentNet <= 0
                          ? "bg-red-100 text-red-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {+s.currentNet.toFixed(4)} {s.unit}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
