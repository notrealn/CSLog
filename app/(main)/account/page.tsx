import { AccountForm } from "./form";
import { getUser, logout } from "../../actions/session";

export default async function AccountPage() {
  const user = await getUser();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Account Settings
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Manage your account profile details, tracker initials, and password
          settings.
        </p>
      </div>
      <button
        className="mb-2 rounded-md bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-colors"
        onClick={logout}
      >
        Logout
      </button>
      <AccountForm user={user} />
    </div>
  );
}
