import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";
import * as csv from "fast-csv";
import { Readable } from "node:stream";

export async function getInventory() {
  const substances = await prisma.substance.findMany({
    include: {
      transactions: true,
    },
    orderBy: { lotNumber: "asc" },
  });

  return substances.map((substance) => {
    // Total used across all transactions
    const totalDispensed = substance.transactions.reduce(
      (sum, tx) => sum + (tx.amount || 0),
      0,
    );

    // Total amount returned / waste across all transactions
    const totalWaste = substance.transactions.reduce(
      (sum, tx) => sum + (tx.amountReturned || 0),
      0,
    );

    // Net remaining = initialNet - net standard usage + returned amounts
    // (Amount checked out decreases stock; amount returned adds back to usable or is tracked as waste)
    const currentNet = substance.initialNet - totalDispensed + totalWaste;

    return {
      ...substance,
      totalDispensed,
      totalWaste,
      currentNet,
    };
  });
}

export async function GET() {
  // Sample object data
  const data = (await getInventory()).map((s) => ({
    ...s,
    transactions: JSON.stringify(s.transactions),
  }));

  // Create a fast-csv write stream
  const csvStream = csv.format({ headers: true });

  // Pipe data through fast-csv into a Node readable stream
  const nodeStream = Readable.from(
    (async function* () {
      for (const row of data) {
        yield row;
      }
    })(),
  ).pipe(csvStream);

  // Convert Node.js Readable stream into a Web ReadableStream for Next.js response
  const webStream = new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk) => controller.enqueue(chunk));
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
  });

  return new NextResponse(webStream, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="inventory-${new Date().toLocaleString()}.csv"`,
    },
  });
}
