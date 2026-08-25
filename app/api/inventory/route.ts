import { getInventoryData } from "@/app/(main)/inventory/actions";
import { NextResponse } from "next/server";
import { format } from "fast-csv";

export async function GET() {
  try {
    const data = await getInventoryData();
    const filename = `inventory-export-${new Date().toISOString().slice(0, 10)}.csv`;

    const stream = new ReadableStream({
      start(controller) {
        // Create fast-csv formatting stream
        const csvStream = format({ headers: true });

        // Forward CSV chunks directly to the ReadableStream controller
        csvStream.on("data", (chunk: Buffer | string) => {
          controller.enqueue(
            typeof chunk === "string" ? new TextEncoder().encode(chunk) : chunk,
          );
        });

        csvStream.on("end", () => {
          controller.close();
        });

        csvStream.on("error", (err) => {
          controller.error(err);
        });

        // Write inventory records
        data.inventory.forEach((item) => {
          // const locationBreakdown = item.locationBalances
          //   .map((lb) => `${lb.location}: ${lb.amount} ${item.substance.unit}`)
          //   .join(" | ");

          csvStream.write({
            // "Container ID": item.containerId,
            "Product Name": item.substance.productName,
            "Lot Number": item.substance.lotNumber,
            "Material Type": item.substance.materialType,
            "Serial Number": item.serialNumber,
            Label: item.label,
            Bin: item.bin,
            "Initial Net": `${item.initialNet} ${item.substance.unit}`,
            "Total Remaining": `${item.totalRemaining} ${item.substance.unit}`,
            // "Location Breakdown": locationBreakdown || "None (Fully Used/Lost)",
            ...Object.fromEntries(
              item.locationBalances.map((loc) => [
                loc.location,
                `${loc.amount} ${item.substance.unit}`,
              ]),
            ),
            "Transaction Count": item.transactionCount,
          });
        });

        // Close the fast-csv stream
        csvStream.end();
      },
    });

    return new NextResponse(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Inventory CSV API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
