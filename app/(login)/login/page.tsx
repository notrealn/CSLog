// app/login/page.tsx
"use client";

import { useActionState } from "react";
import { signin } from "../../actions/auth";

export default function Login() {
  const [state, formAction, isPending] = useActionState(signin, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            Enter your credentials below to access the inventory dashboard.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          {/* Error Banner */}
          {state && (
            <div className="rounded-md bg-red-50 p-3 text-xs font-medium text-red-700 border border-red-200">
              {state}
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm placeholder:text-slate-300 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="flex w-full justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-950 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {isPending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
