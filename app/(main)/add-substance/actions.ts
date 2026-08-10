// app/add-substance/actions.ts
"use server";

import { prisma } from "@/prisma/prisma"; // or @prisma/client if using default location
// import { Decimal } from "@prisma/client/runtime/library";
import { redirect } from "next/navigation";

export async function createSubstance(formData: FormData) {
  const productName = formData.get("productName") as string;
  const lotNumber = formData.get("lotNumber") as string;
  const unit = formData.get("unit") as string;
  const materialType = formData.get("materialType") as string;
  const receivedDateRaw = formData.get("receivedDate") as string;
  const expirationDateRaw = formData.get("expirationDate") as string;

  const receivedDate = new Date(receivedDateRaw);
  const expirationDate = expirationDateRaw ? new Date(expirationDateRaw) : null;

  // Extract container array indices from form keys
  // Container fields follow the naming pattern: containers[index][fieldName]
  const containerIndices = Array.from(
    new Set(
      Array.from(formData.keys())
        .filter((key) => key.startsWith("containers["))
        .map((key) => key.match(/^containers\[(\d+)\]/)?.[1])
        .filter((idx): idx is string => idx !== undefined),
    ),
  );

  if (containerIndices.length === 0) {
    throw new Error("At least one container must be provided.");
  }

  // Execute nested creation in a single transaction
  await prisma.$transaction(async (tx) => {
    const substance = await tx.substance.create({
      data: {
        productName,
        lotNumber,
        unit,
        materialType,
        receivedDate,
        expirationDate,
      },
    });

    for (const index of containerIndices) {
      const containerType = formData.get(
        `containers[${index}][container]`,
      ) as string;
      const serialNumberRaw = formData.get(
        `containers[${index}][serialNumber]`,
      ) as string;
      const serialNumber = serialNumberRaw.trim()
        ? serialNumberRaw.trim()
        : null;
      const binRaw = formData.get(`containers[${index}][bin]`) as string;
      const bin = binRaw.trim() ? binRaw.trim() : null;

      const directNetRaw = formData.get(
        `containers[${index}][initialNet]`,
      ) as string;
      const grossRaw = formData.get(
        `containers[${index}][initialGross]`,
      ) as string;
      const tareRaw = formData.get(
        `containers[${index}][initialTare]`,
      ) as string;

      let initialNet;
      let initialGross: number | null = null;
      let initialTare: number | null = null;

      if (directNetRaw && directNetRaw.trim() !== "") {
        initialNet = parseFloat(directNetRaw);
      } else if (grossRaw && tareRaw) {
        initialGross = parseFloat(grossRaw);
        initialTare = parseFloat(tareRaw);
        initialNet = initialGross - initialTare;
      } else {
        throw new Error(
          `Container ${Number(index) + 1} must provide either Direct Net OR Gross & Tare.`,
        );
      }

      await tx.container.create({
        data: {
          substanceId: substance.id,
          container: containerType,
          serialNumber,
          bin,
          initialNet,
          initialGross,
          initialTare,
        },
      });
    }
  });

  redirect("/");
}
