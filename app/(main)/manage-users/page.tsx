import { redirect } from "next/navigation";
import { prisma } from "@/prisma/prisma";
import { UserRow } from "./userRow";
import { CreateUserForm } from "./createUser"; // Import new form
import { getUser } from "../../actions/session";

export default async function ManageUsersPage() {
  const currentUser = await getUser();
  if (currentUser.role !== "SUPERUSER") redirect("/");

  const allUsers = await prisma.user.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Manage Users
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Overview of all platform users. Modify administrative clearances or
          create/delete user profiles completely.
        </p>
      </div>

      {/* Render the interactive Creation Form right here */}
      <CreateUserForm />

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Role Access</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {allUsers.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                isSelf={user.id === currentUser.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
