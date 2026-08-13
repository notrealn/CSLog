// app/admin/verifyButton.tsx
"use client";

import { useActionState } from "react";
import { verifyTransaction, FormState } from "./actions";

interface Props {
  transactionId: number;
}

const initialState: FormState = {};

export function VerifyButton({ transactionId }: Props) {
  const [state, formAction, isPending] = useActionState(
    verifyTransaction,
    initialState,
  );

  return (
    <form action={formAction} className="inline-block">
      <input type="hidden" name="transactionId" value={transactionId} />
      {state?.error && (
        <span className="block mb-1 text-[10px] font-semibold text-red-600">
          {state.error}
        </span>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow-sm disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        {isPending ? "Verifying..." : "✓ Approve"}
      </button>
    </form>
  );
}
