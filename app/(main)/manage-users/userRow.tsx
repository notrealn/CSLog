"use client";

import { useTransition } from "react";
import { updateUserRole, deleteUser } from "./actions";

interface UserRowProps {
  user: {
    id: number; // Matches Int type from your schema
    name: string;
    role: string;
  };
  isSelf: boolean;
}

export function UserRow({ user, isSelf }: UserRowProps) {
  const [isPending, startTransition] = useTransition();

  const handleRoleChange = async (newRole: string) => {
    startTransition(async () => {
      await updateUserRole(user.id, newRole);
    });
  };

  const handleDelete = async () => {
    if (
      confirm(
        `Are you sure you want to delete ${user.name}? You really shouldn't do this unless its some sort of test account.`,
      )
    ) {
      startTransition(async () => {
        await deleteUser(user.id);
      });
    }
  };

  return (
    <tr
      className="border-b border-slate-200 transition-colors hover:bg-slate-50"
      style={{ opacity: isPending ? 0.6 : 1 }}
    >
      <td className="px-6 py-4 font-medium text-slate-900">
        {user.name}{" "}
        {isSelf && (
          <span className="text-xs text-blue-500 font-normal">(You)</span>
        )}
      </td>
      <td className="px-6 py-4">
        <select
          defaultValue={user.role}
          disabled={isSelf || isPending}
          onChange={(e) => handleRoleChange(e.target.value)}
          className="rounded border border-slate-300 bg-white px-2 py-1 text-sm text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none disabled:bg-slate-100 disabled:text-slate-400"
        >
          <option value="INACTIVE">INACTIVE</option>
          <option value="REVIEWER">REVIEWER</option>
          <option value="USER">USER</option>
          <option value="SUPERUSER">SUPERUSER</option>
        </select>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={handleDelete}
          disabled={isSelf || isPending}
          className="rounded bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
