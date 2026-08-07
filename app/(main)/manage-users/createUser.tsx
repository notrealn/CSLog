"use client";

import { useRef, useState, useTransition } from "react";
import { createUser } from "./actions";

export function CreateUserForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError(null);

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Fast client-side check to save an unnecessary network trip
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    startTransition(async () => {
      try {
        await createUser(formData);
        formRef.current?.reset();
        setIsOpen(false);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      }
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="mb-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 transition-colors"
      >
        + Add New User
      </button>
    );
  }

  return (
    <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900 mb-4">
        Create New Account
      </h3>

      {error && (
        <p className="mb-4 text-sm text-red-600 font-medium">⚠️ {error}</p>
      )}

      <form action={handleSubmit} ref={formRef} className="space-y-4">
        {/* Row 1: Profile Info */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              placeholder="e.g. JohnDoe"
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Initials
            </label>
            <input
              name="initials"
              type="text"
              required
              maxLength={4} // Enforce a short max length for tracker initials
              placeholder="e.g. JD"
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Assigned Role
            </label>
            <select
              name="role"
              defaultValue="REVIEWER"
              className="w-full rounded border border-slate-300 bg-white px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="USER">USER</option>
              <option value="REVIEWER">REVIEWER</option>
              <option value="SUPERUSER">SUPERUSER</option>
            </select>
          </div>
        </div>

        {/* Row 2: Double-Entry Passwords */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Password
            </label>
            <input
              name="password"
              type="text"
              required
              placeholder="••••••••"
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="text"
              required
              placeholder="••••••••"
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 disabled:bg-slate-400 transition-colors"
          >
            {isPending ? "Creating..." : "Save User"}
          </button>
        </div>
      </form>
    </div>
  );
}
