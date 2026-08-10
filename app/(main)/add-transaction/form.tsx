// app/add-transaction/transaction-form.tsx
"use client";

import { createCheckoutTransaction } from "./actions";

interface ContainerOption {
  id: number;
  substanceName: string;
  lotNumber: string;
  serialNumber?: string | null;
  unit: string;
}

interface LocationOption {
  name: string;
}

interface CurrentUser {
  id: number;
  name: string;
}

interface Props {
  containers: ContainerOption[];
  locations: LocationOption[];
  currentUser: CurrentUser;
}

export default function TransactionForm({
  containers,
  locations,
  currentUser,
}: Props) {
  return (
    <form action={createCheckoutTransaction} className="space-y-5">
      <input type="hidden" name="userId" value={currentUser.id} />

      {/* Operator Info */}
      <div className="flex items-center justify-between rounded-md bg-slate-100 px-3 py-2 text-xs text-slate-600">
        <span>
          Operator:{" "}
          <strong className="text-slate-800">{currentUser.name}</strong>
        </span>
        <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          Checkout Step 1
        </span>
      </div>

      {/* Container Selection */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Select Container
        </label>
        <select
          name="containerId"
          required
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">-- Choose Container --</option>
          {containers.map((container) => (
            <option key={container.id} value={container.id}>
              {container.substanceName} (Lot: {container.lotNumber})
              {container.serialNumber ? ` • ${container.serialNumber}` : ""}
            </option>
          ))}
        </select>
      </div>

      {/* From / To Locations */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            From Location
          </label>
          <select
            name="fromId"
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">-- Select Source --</option>
            {locations.map((loc) => (
              <option key={loc.name} value={loc.name}>
                {loc.name}
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
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">-- Select Destination --</option>
            {locations.map((loc) => (
              <option key={loc.name} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Checkout Quantity */}
      <div className="rounded-md border border-slate-200 bg-slate-50/50 p-4 space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
          Amount Checked Out
        </label>
        <input
          type="number"
          step="0.001"
          name="amountCheckedOut"
          required
          placeholder="Total mass or count removed for testing/use"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Purpose / Ref
          </label>
          <input
            type="text"
            name="purpose"
            required
            placeholder="e.g., Assay Batch #102"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Action Description
          </label>
          <input
            type="text"
            name="description"
            required
            placeholder="e.g., Aliquot for testing"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Comments / Notes
        </label>
        <textarea
          name="comment"
          rows={2}
          placeholder="Optional notes"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 shadow-sm"
      >
        Check Out Material
      </button>
    </form>
  );
}
