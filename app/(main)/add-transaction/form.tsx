// app/add-transaction/form.tsx
"use client";

import { useState, useActionState, useTransition, useRef } from "react";
import { createCheckoutTransaction, FormState } from "./actions";
import { getContainerCounts } from "@/app/(main)/inventory/actions";

interface ContainerOption {
  id: number;
  substanceName: string;
  lotNumber: string;
  serialNumber?: string | null;
  label?: string | null;
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

interface LocationBalance {
  location: string;
  amount: number;
}

const initialState: FormState = { error: undefined };

export default function TransactionForm({
  containers,
  locations,
  currentUser,
}: Props) {
  const [state, formAction, isPending] = useActionState(
    createCheckoutTransaction,
    initialState,
  );

  const [selectedContainerId, setSelectedContainerId] = useState<string>("");
  const [selectedFromId, setSelectedFromId] = useState<string>("");
  const [amountInput, setAmountInput] = useState<string>("");
  const [barcodeSearch, setBarcodeSearch] = useState<string>("");
  const [scanStatus, setScanStatus] = useState<string | null>(null);

  const [locationBalances, setLocationBalances] = useState<LocationBalance[]>(
    [],
  );
  const [unit, setUnit] = useState<string>("");
  const [isFetchingCounts, startFetchingCounts] = useTransition();

  const amountInputRef = useRef<HTMLInputElement>(null);

  // Helper to trigger container balance fetch
  const selectContainerById = (idNum: number) => {
    const idStr = String(idNum);
    setSelectedContainerId(idStr);
    setSelectedFromId("");
    setLocationBalances([]);

    const matched = containers.find((c) => c.id === idNum);
    if (matched) setUnit(matched.unit);

    startFetchingCounts(async () => {
      try {
        const counts = await getContainerCounts(idNum);
        if (counts) {
          setLocationBalances(counts.locationBalances);
        }
      } catch (err) {
        console.error("Failed to fetch location counts:", err);
      }
    });
  };

  // 1. Manual Dropdown Selection
  const handleContainerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idStr = e.target.value;
    setBarcodeSearch("");
    setScanStatus(null);
    if (!idStr) {
      setSelectedContainerId("");
      return;
    }
    selectContainerById(Number(idStr));
  };

  // 2. Barcode Scan Handler (Triggered on Enter key from scanner or manual blur)
  const handleBarcodeScan = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    // Search by Serial Number, Label, or exact Container ID
    const matched = containers.find(
      (c) =>
        c.serialNumber?.toLowerCase() === trimmed.toLowerCase() ||
        c.label?.toLowerCase() === trimmed.toLowerCase() ||
        String(c.id) === trimmed,
    );

    if (matched) {
      selectContainerById(matched.id);
      setScanStatus(
        `✓ Matched: ${matched.substanceName} (Lot: ${matched.lotNumber})`,
      );
      // Auto-focus the quantity input for smooth scanning workflow
      setTimeout(() => amountInputRef.current?.focus(), 100);
    } else {
      setScanStatus(`❌ No container found matching "${trimmed}"`);
    }
  };

  const handleBarcodeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent accidental form submission
      handleBarcodeScan(barcodeSearch);
    }
  };

  // Find balance for selected "From" location
  const currentFromBalance =
    locationBalances.find((lb) => lb.location === selectedFromId)?.amount ?? 0;

  const isOverdrawing =
    amountInput !== "" && Number(amountInput) > currentFromBalance;

  return (
    <form action={formAction} className="space-y-5">
      {/* Form Error Banner */}
      {state?.error && (
        <div className="rounded-md bg-red-50 p-3 text-xs font-semibold text-red-700 border border-red-200">
          ⚠️ {state.error}
        </div>
      )}

      {/* User Info */}
      <div className="flex items-center justify-between rounded-md bg-slate-100 px-3 py-2 text-xs text-slate-600">
        <span>
          User: <strong className="text-slate-800">{currentUser.name}</strong>
        </span>
        <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          Checkout Step 1
        </span>
      </div>

      {/* --- BARCODE SCANNER INPUT --- */}
      <div className="rounded-md border border-indigo-200 bg-indigo-50/50 p-3 space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center justify-between">
          <span>📷 Scan Barcode / Serial Number</span>
          {/*
          <span className="text-[10px] text-indigo-600 font-normal">
            Ready for USB/BT Scanner
          </span>
          */}
        </label>
        <div className="relative">
          <input
            type="text"
            value={barcodeSearch}
            onChange={(e) => setBarcodeSearch(e.target.value)}
            onKeyDown={handleBarcodeKeyDown}
            placeholder="Scan barcode or type serial/label and press Enter..."
            className="w-full rounded-md border border-indigo-300 bg-white px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
          />
          <button
            type="button"
            onClick={() => handleBarcodeScan(barcodeSearch)}
            className="absolute right-1.5 top-1.5 rounded bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Find
          </button>
        </div>
        {scanStatus && (
          <p
            className={`text-xs font-medium ${
              scanStatus.startsWith("✓") ? "text-emerald-700" : "text-red-600"
            }`}
          >
            {scanStatus}
          </p>
        )}
      </div>

      {/* Container Selection Dropdown */}
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Or Select Container Manually
        </label>
        <select
          name="containerId"
          required
          value={selectedContainerId}
          onChange={handleContainerChange}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">-- Choose Container --</option>
          {containers.map((container) => (
            <option key={container.id} value={container.id}>
              {container.substanceName} (Lot: {container.lotNumber})
              {container.label ? ` • ${container.label}` : ""}
              {container.serialNumber ? ` • ${container.serialNumber}` : ""}
            </option>
          ))}
        </select>
      </div>

      {/* From / To Locations */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            From Location
          </label>
          <select
            name="fromId"
            required
            value={selectedFromId}
            onChange={(e) => setSelectedFromId(e.target.value)}
            disabled={!selectedContainerId || isFetchingCounts}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-slate-100"
          >
            <option value="">
              {isFetchingCounts ? "Loading..." : "-- Select Source --"}
            </option>
            {locations.map((loc) => {
              const locBalance = locationBalances.find(
                (lb) => lb.location === loc.name,
              )?.amount;

              return (
                <option key={loc.name} value={loc.name}>
                  {loc.name}{" "}
                  {locBalance !== undefined ? `(${locBalance} ${unit})` : "(0)"}
                </option>
              );
            })}
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
            {locations
              .filter((loc) => loc.name !== selectedFromId)
              .map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
          </select>
        </div>

        {/* Location Availability Display */}
        {selectedFromId && (
          <div className="mt-1.5 text-xs col-span-2">
            Available at{" "}
            <strong className="text-slate-800">{selectedFromId}:</strong>{" "}
            <span
              className={
                (currentFromBalance ?? 0) > 0
                  ? "font-mono font-bold text-emerald-700"
                  : "font-mono font-bold text-red-600"
              }
            >
              {currentFromBalance ?? 0} {unit}
            </span>
          </div>
        )}
      </div>

      {/* Checkout Quantity */}
      <div className="rounded-md border border-slate-200 bg-slate-50/50 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
            Amount Checked Out
          </label>
          {unit && (
            <span className="text-xs font-mono font-bold text-slate-500">
              unit: {unit}
            </span>
          )}
        </div>
        <input
          ref={amountInputRef}
          type="number"
          step="0.001"
          name="amountCheckedOut"
          required
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
          placeholder="Total quantity removed"
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 ${
            isOverdrawing
              ? "border-red-500 bg-red-50/30 text-red-900 focus:ring-red-500"
              : "border-slate-300 bg-white focus:border-blue-500 focus:ring-blue-500"
          }`}
        />

        {/* Client-Side Overdraw Warning */}
        {isOverdrawing && (
          <p className="text-xs font-semibold text-red-600">
            ⚠️ Requested quantity ({amountInput} {unit}) exceeds available
            balance ({currentFromBalance} {unit}) at {selectedFromId}.
          </p>
        )}
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
        disabled={isPending || isOverdrawing}
        className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 shadow-sm disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        {isPending ? "Processing Checkout..." : "Check Out Material"}
      </button>
    </form>
  );
}
