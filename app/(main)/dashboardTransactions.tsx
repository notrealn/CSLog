"use client";

import { useState, useTransition } from "react";
import { updateTransaction } from "../actions/db";

type DashboardTransaction = {
  id: number;
  amount: number;
  purpose: string;
  date: Date | string;
  user: {
    name: string;
  };
  substance: {
    productName: string;
    lotNumber: string;
    unit: string;
  };
};

export function DashboardTransactions({
  initialTransactions,
}: {
  initialTransactions: DashboardTransaction[];
}) {
  const [errors, setErrors] = useState<Record<number, string>>({});
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (
    event: React.SubmitEvent<HTMLFormElement>,
    transactionId: number,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setPendingId(transactionId);
    setErrors((prev) => ({ ...prev, [transactionId]: "" }));

    startTransition(async () => {
      const result = await updateTransaction(formData);

      if (!result.success) {
        setErrors((prev) => ({ ...prev, [transactionId]: result.error }));
      }

      setPendingId(null);
    });
  };

  return (
    <div className="space-y-3">
      {initialTransactions.map((trans) => (
        <div
          key={trans.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-900">
                  {trans.user.name}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                  {trans.substance.productName}
                </span>
              </div>
              <div className="text-sm text-slate-600">
                <div>
                  Substance: {trans.substance.productName} · Lot{" "}
                  {trans.substance.lotNumber}
                </div>
                <div>Purpose: {trans.purpose}</div>
                <div>
                  Amount taken: {Number(trans.amount.toFixed(3))}{" "}
                  {trans.substance.unit}
                </div>
                <div>Logged: {new Date(trans.date).toLocaleString()}</div>
              </div>
            </div>

            <form
              onSubmit={(event) => handleSubmit(event, trans.id)}
              className="flex flex-col gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 md:min-w-[320px]"
            >
              <input type="hidden" name="transactionId" value={trans.id} />
              <label className="text-sm font-medium text-slate-700">
                Amount returned (waste, required)
                <input
                  type="number"
                  step="0.001"
                  name="amountReturned"
                  placeholder="0.000"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </label>
              {errors[trans.id] ? (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {errors[trans.id]}
                </div>
              ) : null}
              <button
                type="submit"
                disabled={isPending && pendingId === trans.id}
                className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-emerald-400"
              >
                {isPending && pendingId === trans.id
                  ? "Verifying..."
                  : "Verify transaction"}
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
