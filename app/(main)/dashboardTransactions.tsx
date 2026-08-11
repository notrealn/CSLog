// app/dashboard/dashboardTransactions.tsx
"use client";

import { useState } from "react";
import { verifyAndCloseTransaction } from "./actions";
import { Decimal } from "@prisma/client-runtime-utils";

interface TransactionItem {
  id: number;
  amountCheckedOut: any;
  purpose: string;
  description: string;
  date: Date;
  fromId: string;
  toId: string;
  container: {
    id: number;
    substance: { productName: string; lotNumber: string; unit: string };
    serialNumber?: string | null;
  };
  user: { name: string; id: number };
}

interface Props {
  initialTransactions: TransactionItem[];
  verifierUser: { id: number; name: string };
}

export function DashboardTransactions({
  initialTransactions,
  verifierUser,
}: Props) {
  const [activeTxId, setActiveTxId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {initialTransactions.map((tx) => (
        <div
          key={tx.id}
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-slate-900">
                  {tx.container.substance.productName}
                </h3>
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                  Lot: {tx.container.substance.lotNumber}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Checked out by{" "}
                <strong className="text-slate-700">{tx.user.name}</strong> •{" "}
                {new Date(tx.date).toLocaleString()} • From: {tx.fromId} → To:{" "}
                {tx.toId}
              </p>
            </div>

            <div className="text-right">
              <span className="block text-base font-bold text-slate-900">
                {tx.amountCheckedOut} {tx.container.substance.unit}
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveTxId(activeTxId === tx.id ? null : tx.id)
                }
                className="mt-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                {activeTxId === tx.id ? "Cancel" : "Verify & Reconcile"}
              </button>
            </div>
          </div>

          {/* Verification Form Drawer */}
          {activeTxId === tx.id && (
            <VerificationDrawer
              transaction={tx}
              verifierUser={verifierUser}
              onClose={() => setActiveTxId(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function VerificationDrawer({
  transaction,
  verifierUser,
  onClose,
}: {
  transaction: TransactionItem;
  verifierUser: { id: number; name: string };
  onClose: () => void;
}) {
  const [used, setUsed] = useState("");
  const [lost, setLost] = useState("");
  const [returned, setReturned] = useState("");

  const checkedOut = new Decimal(transaction.amountCheckedOut);
  const u = new Decimal(used || "0");
  const l = new Decimal(lost || "0");
  const r = new Decimal(returned || "0");
  const remaining = checkedOut.minus(u.plus(l).plus(r));
  const isBalanced = remaining.isZero();

  return (
    <form
      action={verifyAndCloseTransaction}
      onSubmit={onClose}
      className="mt-4 pt-4 border-t border-slate-100 space-y-4"
    >
      <input type="hidden" name="transactionId" value={transaction.id} />
      <input type="hidden" name="verifierId" value={verifierUser.id} />

      <div className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded">
        <span>
          Verifier/Witness: <strong>{verifierUser.name}</strong>
        </span>
        <span>
          Target Total:{" "}
          <strong>
            {checkedOut.toString()} {transaction.container.substance.unit}
          </strong>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Amount Used
          </label>
          <input
            type="number"
            step="0.001"
            name="amountUsed"
            value={used}
            onChange={(e) => setUsed(e.target.value)}
            required
            placeholder="0.00"
            className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Testing Loss / Residue
          </label>
          <input
            type="number"
            step="0.001"
            name="amountLost"
            value={lost}
            onChange={(e) => setLost(e.target.value)}
            required
            placeholder="0.00"
            className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Amount Remaining
          </label>
          <input
            type="number"
            step="0.001"
            name="amountRemaining"
            value={returned}
            onChange={(e) => setReturned(e.target.value)}
            required
            placeholder="0.00"
            className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            New Gross Weight (Optional Scale Check)
          </label>
          <input
            type="number"
            step="0.001"
            name="newGross"
            placeholder="Container mass on scale"
            className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Verification Comment
          </label>
          <input
            type="text"
            name="comment"
            placeholder="Optional verification notes"
            className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span
          className={`text-xs font-medium ${isBalanced ? "text-emerald-700" : "text-amber-700"}`}
        >
          {isBalanced
            ? "✓ Quantities balanced"
            : `Difference: ${remaining.toString()} ${transaction.container.substance.unit}`}
        </span>

        <button
          type="submit"
          disabled={!isBalanced}
          className="rounded bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 disabled:bg-slate-300 transition-colors"
        >
          Complete Verification
        </button>
      </div>
    </form>
  );
}
