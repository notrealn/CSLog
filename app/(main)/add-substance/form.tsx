// app/add-substance/substance-form.tsx
"use client";

import { useState, useActionState } from "react";
import { createSubstance } from "./actions";

interface ContainerField {
  id: string; // Internal key for rendering list items
}

export default function SubstanceForm() {
  const [state, formAction, isPending] = useActionState(
    createSubstance,
    undefined,
  );

  const [containers, setContainers] = useState<ContainerField[]>([
    { id: crypto.randomUUID() },
  ]);

  const addContainer = () => {
    setContainers((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  const removeContainer = (id: string) => {
    if (containers.length === 1) return; // Retain at least one container
    setContainers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <form action={formAction} className="space-y-6">
      {/* Error Display Banner */}
      {state && (
        <div className="rounded-md bg-red-50 p-3.5 text-xs font-semibold text-red-700 border border-red-200">
          ⚠️ {state}
        </div>
      )}

      {/* --- Substance Level Details --- */}
      <div className="space-y-4 rounded-md border border-slate-200 bg-slate-50/50 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
          Substance Details
        </h3>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Received Date
            </label>
            <input
              type="date"
              name="receivedDate"
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Expiration Date
          </label>
          <input
            type="date"
            name="expirationDate"
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* --- Dynamic Containers Section --- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">
            Containers ({containers.length})
          </h3>
          <button
            type="button"
            onClick={addContainer}
            className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200"
          >
            + Add Another Container
          </button>
        </div>

        {containers.map((item, index) => (
          <div
            key={item.id}
            className="relative space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-500">
                Container #{index + 1}
              </span>
              {containers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeContainer(item.id)}
                  className="text-xs font-medium text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Type
                </label>
                <input
                  type="text"
                  name={`containers[${index}][container]`}
                  required
                  placeholder="e.g., Vial, Box"
                  className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Serial Number (unique)
                </label>
                <input
                  type="text"
                  name={`containers[${index}][serialNumber]`}
                  placeholder="Optional ID"
                  className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Label
                </label>
                <input
                  type="text"
                  name={`containers[${index}][label]`}
                  placeholder="Optional Label"
                  className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Storage Bin
                </label>
                <input
                  type="text"
                  name={`containers[${index}][bin]`}
                  placeholder="Optional Bin"
                  className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="rounded-md bg-slate-50 p-3 space-y-3">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Option A: Direct Quantity (Net)
                </label>
                <input
                  type="number"
                  step="0.001"
                  name={`containers[${index}][initialNet]`}
                  placeholder="Printed label weight or item count"
                  className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm font-medium text-blue-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <span className="relative bg-slate-50 px-2 text-[10px] font-bold text-slate-400">
                  OR
                </span>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Option B: Weighing
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-500">
                      Gross Weight
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      name={`containers[${index}][initialGross]`}
                      placeholder="Total scale weight"
                      className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-500">
                      Tare Weight
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      name={`containers[${index}][initialTare]`}
                      placeholder="Empty container"
                      className="w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {isPending ? "Saving Record..." : "Save Inventory Record"}
      </button>
    </form>
  );
}
