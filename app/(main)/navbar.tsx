import Link from "next/link";
import { getUser } from "../actions/session";

export async function Navbar() {
  const user = await getUser();

  return (
    <nav className="flex">
      {/* Top Header & Navigation Controls */}
      <div className="flex items-center gap-3 p-4 border-gray-300 border-b-2 rounded-xl overflow-x-auto w-full">
        <Link
          href="/"
          className="h-full aspect-square w-auto rounded-md bg-black p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            {/* <!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
            <path
              fill="#fff"
              d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"
            />
          </svg>
        </Link>
        <Link
          href="/add-substance"
          className="rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
        >
          + Add New Substance
        </Link>
        <Link
          href="/add-transaction"
          className="rounded-md bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 transition-colors"
        >
          - Log Usage / Transaction
        </Link>
        <Link
          href="/inventory"
          className="rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors"
        >
          Inventory
        </Link>
        <Link
          href="/account"
          className="rounded-md bg-slate-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
        >
          My Account
        </Link>
        {user.role === "SUPERUSER" && (
          <Link
            href="/manage-users"
            className="rounded-md bg-gray-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors"
          >
            Manage Users
          </Link>
        )}
      </div>
    </nav>
  );
}
