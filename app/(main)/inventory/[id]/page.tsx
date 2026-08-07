import { prisma } from "@/prisma/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "../../../util";
import { getUser } from "../../../actions/session";
import { EditableField } from "./field";

export default async function Page(props: PageProps<"/inventory/[id]">) {
  const { id } = await props.params;
  const substanceId = parseInt(id, 10);

  if (isNaN(substanceId)) {
    notFound();
  }

  const user = await getUser();
  const isSuperuser = user?.role === "SUPERUSER";

  const substance = await prisma.substance.findUnique({
    where: { id: substanceId },
    include: {
      transactions: {
        orderBy: { date: "desc" },
        include: {
          user: true,
          verifier: true,
        },
      },
    },
  });

  if (!substance) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">
          Substance Not Found
        </h2>
        <p className="mt-2 text-slate-500">
          No substance exists with ID #{id}.
        </p>
        <Link
          href="/inventory"
          className="mt-4 inline-block rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          ← Back to Inventory
        </Link>
      </div>
    );
  }

  // Calculate transaction totals
  const totalDispensed = substance.transactions.reduce(
    (acc, t) => acc + t.amount,
    0,
  );
  const totalReturned = substance.transactions.reduce(
    (acc, t) => acc + (t.amountReturned ?? 0),
    0,
  );
  const currentNet = substance.initialNet - totalDispensed + totalReturned;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/inventory"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-800"
          >
            ← Back to Inventory
          </Link>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            <EditableField
              substanceId={substance.id}
              fieldName="productName"
              value={substance.productName}
              isSuperuser={isSuperuser}
            />
          </h1>
          <div className="text-sm text-slate-500 flex items-center gap-1">
            Lot Number:{" "}
            <span className="font-mono font-medium">
              <EditableField
                substanceId={substance.id}
                fieldName="lotNumber"
                value={substance.lotNumber}
                isSuperuser={isSuperuser}
              />
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="text-xs font-medium uppercase text-slate-500">
              Initial Net
            </span>
            <div className="text-xl font-bold text-slate-900">
              <EditableField
                substanceId={substance.id}
                fieldName="initialNet"
                value={substance.initialNet}
                isSuperuser={isSuperuser}
                type="number"
                unit={substance.unit}
              />
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="text-xs font-medium uppercase text-slate-500">
              Current Net
            </span>
            <div
              className={`text-xl font-bold ${
                currentNet <= 0 ? "text-red-600" : "text-emerald-600"
              }`}
            >
              {+currentNet.toFixed(4)} {substance.unit}
            </div>
          </div>
        </div>
      </div>

      {/* Substance Details Card */}
      <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Substance Details
        </h2>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-4 text-sm">
          <div>
            <dt className="text-xs text-slate-400">Material Type</dt>
            <dd>
              <EditableField
                substanceId={substance.id}
                fieldName="materialType"
                value={substance.materialType}
                isSuperuser={isSuperuser}
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Container</dt>
            <dd>
              <EditableField
                substanceId={substance.id}
                fieldName="container"
                value={substance.container}
                isSuperuser={isSuperuser}
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Received Date</dt>
            <dd className="font-medium text-slate-800">
              {formatDate(substance.recievedDate)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Expiration Date</dt>
            <dd className="font-medium text-slate-800">
              {substance.expirationDate
                ? formatDate(substance.expirationDate)
                : "N/A"}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Initial Gross Weight</dt>
            <dd>
              <EditableField
                substanceId={substance.id}
                fieldName="initialGross"
                value={substance.initialGross}
                isSuperuser={isSuperuser}
                type="number"
                unit={substance.unit}
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Initial Tare Weight</dt>
            <dd>
              <EditableField
                substanceId={substance.id}
                fieldName="initialTare"
                value={substance.initialTare}
                isSuperuser={isSuperuser}
                type="number"
                unit={substance.unit}
              />
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Total Dispensed</dt>
            <dd className="font-medium text-slate-800">
              {+totalDispensed.toFixed(4)} {substance.unit}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Total Returned / Waste</dt>
            <dd className="font-medium text-amber-600">
              {+totalReturned.toFixed(4)} {substance.unit}
            </dd>
          </div>
        </dl>
      </div>

      {/* Transactions Table */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <h2 className="text-lg font-bold text-slate-900">
            Transaction History ({substance.transactions.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th scope="col" className="px-4 py-3.5">
                  Date
                </th>
                <th scope="col" className="px-4 py-3.5">
                  Purpose
                </th>
                <th scope="col" className="px-4 py-3.5">
                  Performed By
                </th>
                <th scope="col" className="px-4 py-3.5">
                  Verified By
                </th>
                <th scope="col" className="px-4 py-3.5 text-right">
                  Dispensed
                </th>
                <th scope="col" className="px-4 py-3.5 text-right">
                  Returned
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {substance.transactions.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-10 text-center text-slate-400"
                  >
                    No transactions logged for this substance.
                  </td>
                </tr>
              ) : (
                substance.transactions.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="whitespace-nowrap px-4 py-4 text-xs font-medium text-slate-700">
                      {formatDate(t.date)}
                    </td>
                    <td className="px-4 py-4 text-slate-900 font-medium">
                      {t.purpose}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-xs">
                      {t.user.initials}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">
                      {t.verifier ? t.verifier.initials : "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right font-medium text-slate-700">
                      -{+t.amount.toFixed(4)} {substance.unit}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right">
                      {t.amountReturned && t.amountReturned > 0 ? (
                        <span className="font-semibold text-amber-600">
                          +{+t.amountReturned.toFixed(4)} {substance.unit}
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          0 {substance.unit}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
