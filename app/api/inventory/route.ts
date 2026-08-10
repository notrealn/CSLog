import { getInventoryData } from "@/app/(main)/inventory/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getInventoryData();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="inventory-export-${new Date()
          .toISOString()
          .slice(0, 10)}.json"`,
      },
    });
  } catch (error) {
    console.error("Inventory API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
