// app/add-transaction/page.tsx
import { prisma } from "@/prisma/prisma";
import TransactionForm from "./form";

export default async function LogTransactionPage() {
  const rawContainers = await prisma.container.findMany({
    include: { substance: true },
    orderBy: [{ substance: { productName: "asc" } }, { id: "asc" }],
  });

  const rawLocations = await prisma.location.findMany({
    orderBy: { name: "asc" },
  });

  // Fetch logged in user from session/auth (mocked to ID 1 for demonstration)
  const currentUser = await prisma.user.findFirstOrThrow({
    where: { id: 1 },
    select: { id: true, name: true },
  });

  const containers = rawContainers.map((c) => ({
    id: c.id,
    substanceName: c.substance.productName,
    lotNumber: c.substance.lotNumber,
    serialNumber: c.serialNumber,
    unit: c.substance.unit,
  }));

  const locations = rawLocations.map((l) => ({ name: l.name }));

  return (
    <div className="mx-auto my-8 max-w-xl p-4">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          Record Substance Usage
        </h2>
        <p className="mb-6 text-xs text-slate-500">
          Log usage, process loss, or transfers for a controlled substance
          container.
        </p>

        <TransactionForm
          containers={containers}
          locations={locations}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}
