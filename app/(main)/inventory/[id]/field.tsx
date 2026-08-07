"use client";

import { useState, useTransition } from "react";
import { updateSubstanceField } from "./actions";

interface EditableFieldProps {
  substanceId: number;
  fieldName: string;
  value: string | number | null;
  isSuperuser: boolean;
  type?: "text" | "number" | "date";
  unit?: string;
  placeholder?: string;
}

export function EditableField({
  substanceId,
  fieldName,
  value,
  isSuperuser,
  type = "text",
  unit,
  placeholder = "—",
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(
    // value instanceof Date
    //   ? value.toISOString().split("T")[0]
    //   :
    value?.toString() ?? "",
  );
  const [isPending, startTransition] = useTransition();

  if (!isSuperuser) {
    return (
      <span className="font-medium text-slate-800">
        {value !== null && value !== ""
          ? `${value}${unit ? ` ${unit}` : ""}`
          : placeholder}
      </span>
    );
  }

  const handleSave = () => {
    let parsedValue: any = inputValue;

    if (type === "number") {
      parsedValue = inputValue === "" ? null : parseFloat(inputValue);
    } else if (type === "date") {
      parsedValue = inputValue === "" ? null : new Date(inputValue);
    }

    startTransition(async () => {
      try {
        await updateSubstanceField(substanceId, fieldName, parsedValue);
        setIsEditing(false);
      } catch (err) {
        console.error("Failed to update field:", err);
      }
    });
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-1.5 mt-1">
        <input
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isPending}
          className="rounded border border-slate-300 px-2 py-0.5 text-xs text-slate-800 focus:border-slate-500 focus:outline-none"
          autoFocus
        />
        <button
          onClick={handleSave}
          disabled={isPending}
          className="rounded bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white hover:bg-emerald-500 disabled:opacity-50"
        >
          {isPending ? "..." : "Save"}
        </button>
        <button
          onClick={() => setIsEditing(false)}
          disabled={isPending}
          className="rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 hover:bg-slate-300"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="group inline-flex items-center gap-2">
      <span className="font-medium text-slate-800">
        {value !== null && value !== ""
          ? `${value}${unit ? ` ${unit}` : ""}`
          : placeholder}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-400 hover:text-slate-700 underline"
      >
        Edit
      </button>
    </div>
  );
}
