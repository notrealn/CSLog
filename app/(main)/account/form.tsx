"use client";

import { useState, useTransition, useRef } from "react";
import { updateAccount } from "./actions";

interface AccountFormProps {
  user: {
    id: number;
    name: string;
    initials: string;
    role: string;
  };
}

export function AccountForm({ user }: AccountFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError(null);
    setSuccess(null);

    const newPassword = formData.get("newPassword") as string;
    const confirmNewPassword = formData.get("confirmNewPassword") as string;

    if (newPassword && newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    startTransition(async () => {
      const result = await updateAccount(user.id, formData);

      if (!result.success) {
        setError(result.error);
        return;
      }

      setSuccess("Account settings updated successfully.");
      // Clear password inputs after save
      const passwordInputs =
        formRef.current?.querySelectorAll<HTMLInputElement>(
          'input[type="password"]',
        );
      passwordInputs?.forEach((input) => (input.value = ""));
    });
  };

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm font-medium text-red-700 border border-red-200">
          ⚠️ {error}
        </div>
      )}

      {success && (
        <div className="rounded-md bg-emerald-50 p-4 text-sm font-medium text-emerald-700 border border-emerald-200">
          ✅ {success}
        </div>
      )}

      {/* Account Info Section */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-3">
          Profile Details
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Username
            </label>
            <input
              name="name"
              type="text"
              required
              defaultValue={user.name}
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Initials
            </label>
            <input
              name="initials"
              type="text"
              required
              maxLength={4}
              defaultValue={user.initials}
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none uppercase"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
            Role (Read Only)
          </label>
          <input
            type="text"
            disabled
            value={user.role}
            className="w-full rounded border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-500 cursor-not-allowed font-medium"
          />
        </div>
      </div>

      {/* Password Change Section */}
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-3">
          Change Password
        </h2>
        <p className="text-xs text-slate-500">
          Leave these blank if you do not wish to change your password.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              New Password
            </label>
            <input
              name="newPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
              Confirm New Password
            </label>
            <input
              name="confirmNewPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Security Verification Section */}
      <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-amber-900 border-b border-amber-200/60 pb-3">
          Security Verification
        </h2>
        <p className="text-xs text-amber-800">
          You must enter your current password to confirm and authorize any
          changes to your profile.
        </p>

        <div>
          <label className="block text-xs font-semibold uppercase text-amber-900 mb-1">
            Current Password
          </label>
          <input
            name="currentPassword"
            type="password"
            required
            placeholder="••••••••"
            className="w-full rounded border border-amber-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 disabled:bg-slate-400 transition-colors"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
