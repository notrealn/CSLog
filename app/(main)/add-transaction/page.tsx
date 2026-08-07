// app/add-transaction/page.tsx
import { prisma } from "@/prisma/prisma";
import { createTransaction } from "../../actions/db";

export default async function LogTransactionPage() {
  const containers = await prisma.container.findMany({
    include: {
      substance: true,
    },
    orderBy: [{ substance: { productName: "asc" } }, { id: "asc" }],
  });

  const locations = await prisma.location.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto my-8 max-w-xl p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Record Substance Usage
        </h2>

        <form action={createTransaction} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Select Container
            </label>
            <select
              name="containerId"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
            >
              <option value="">-- Choose Container --</option>
              {containers.map((container) => (
                <option key={container.id} value={container.id}>
                  {container.substance.productName} (Lot:{" "}
                  {container.substance.lotNumber})
                  {container.serialNumber ? ` • ${container.serialNumber}` : ``}
                  {container.container ? ` • ${container.container}` : ``}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                From Location
              </label>
              <select
                name="fromId"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              >
                <option value="">-- Select Source --</option>
                {locations.map((location) => (
                  <option key={location.name} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                To Location
              </label>
              <select
                name="toId"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              >
                <option value="">-- Select Destination --</option>
                {locations.map((location) => (
                  <option key={location.name} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Amount Used
            </label>
            <input
              type="number"
              step="0.001"
              name="amount"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Purpose / Experiment Ref
            </label>
            <input
              type="text"
              name="purpose"
              required
              placeholder="e.g., Synthesis Run B"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-600 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Log Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
