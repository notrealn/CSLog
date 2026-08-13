// app/admin/actions.ts
"use server";

import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { getUser } from "@/app/actions/session";

export type FormState = {
  error?: string;
  success?: boolean;
};

export async function verifyTransaction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const currentUser = await getUser();

  if (!currentUser || currentUser.role !== "SUPERUSER") {
    return { error: "Unauthorized session." };
  }

  const transactionIdRaw = formData.get("transactionId");
  if (!transactionIdRaw) {
    return { error: "Missing transaction ID." };
  }

  const transactionId = Number(transactionIdRaw);

  try {
    await prisma.transaction.update({
      where: { id: transactionId },
      data: {
        adminVerified: true,
      },
    });

    revalidatePath("/dea-dashboard");
    return { success: true };
  } catch (error) {
    console.error("Failed to verify transaction:", error);
    return { error: "Database error updating verification status." };
  }
}
