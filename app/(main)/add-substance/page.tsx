// app/add-substance/page.tsx
import { createSubstance } from "../../actions/db";

export default function AddSubstancePage() {
  return (
    <div className="mx-auto my-8 max-w-xl p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          Log New Inventory Substance
        </h2>
        <p className="mb-6 text-xs text-slate-500">
          Provide either the direct Net amount (from a label/count) OR enter
          Gross & Tare to auto-calculate it.
        </p>

        <form action={createSubstance} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Lot Number
              </label>
              <input
                type="text"
                name="lotNumber"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Unit
              </label>
              <input
                type="text"
                name="unit"
                placeholder="e.g., g, ml, syringes"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Material Type
              </label>
              <input
                type="text"
                name="materialType"
                required
                placeholder="e.g., RL, DP"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Container Type
              </label>
              <input
                type="text"
                name="container"
                required
                placeholder="e.g., Tin, Box, Amber Bottle"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <hr className="border-slate-100 my-2" />

          {/* Core Quantity Section */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-800">
              Option A: Direct Quantity (Net)
            </label>
            <input
              type="number"
              step="0.001"
              name="initialNet"
              placeholder="Enter printed label weight or item count (e.g., 500)"
              className="w-full rounded-md border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium text-blue-900 placeholder:text-slate-400"
            />
          </div>

          <div className="relative flex py-1 items-center">
            <div className="grow border-t border-slate-200"></div>
            <span className="shrink mx-4 text-xs uppercase font-bold text-slate-400 tracking-wider">
              OR
            </span>
            <div className="grow border-t border-slate-200"></div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-800">
              Option B: Calculate via Weighing
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Gross Weight
                </label>
                <input
                  type="number"
                  step="0.001"
                  name="initialGross"
                  placeholder="Total weight on scale"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Tare Weight
                </label>
                <input
                  type="number"
                  step="0.001"
                  name="initialTare"
                  placeholder="Empty container weight"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100 my-2" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Received Date
              </label>
              <input
                type="date"
                name="recievedDate"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Expiration Date
              </label>
              <input
                type="date"
                name="expirationDate"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            Save Item to Inventory
          </button>
        </form>
      </div>
    </div>
  );
}
