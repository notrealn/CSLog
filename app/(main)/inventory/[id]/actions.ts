"server-only";
"use server";

import { prisma } from "@/prisma/prisma";
import { getUser } from "../../../actions/session"; // Adjust import to your session action
import { revalidatePath } from "next/cache";

export async function updateSubstanceField(
  substanceId: number,
  fieldName: string,
  newValue: any,
) {
  const user = await getUser();

  if (user?.role !== "SUPERUSER") {
    throw new Error("Unauthorized: Only SUPERUSER can edit substance fields.");
  }

  // Fetch current state for logging changes
  const existing = await prisma.substance.findUnique({
    where: { id: substanceId },
  });

  if (!existing) {
    throw new Error("Substance not found.");
  }

  const oldValue = (existing as Record<string, any>)[fieldName];

  // Perform update
  const updated = await prisma.substance.update({
    where: { id: substanceId },
    data: {
      [fieldName]: newValue,
    },
  });

  // Audit Logging (Console)
  console.log(
    `[AUDIT LOG] User ${user.id} (${user.role}) updated Substance #${substanceId} field "${fieldName}":`,
    { oldValue, newValue },
  );

  revalidatePath(`/inventory/${substanceId}`);
  return updated;
}
