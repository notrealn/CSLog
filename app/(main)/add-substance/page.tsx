// app/add-substance/page.tsx
import SubstanceForm from "./form";

export default function AddSubstancePage() {
  return (
    <div className="mx-auto my-8 max-w-xl p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-1 text-xl font-semibold text-slate-900">
          Log New Inventory Substance
        </h2>
        <p className="mb-6 text-xs text-slate-500">
          Log a substance and attach one or more physical containers in a single
          shipment record.
        </p>

        <SubstanceForm />
      </div>
    </div>
  );
}
