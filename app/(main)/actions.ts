// app/dashboard/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { getUser } from "../actions/session"; // Import your auth helper
import { prisma } from "@/prisma/prisma";
import { Decimal } from "@prisma/client-runtime-utils";

export async function verifyAndCloseTransaction(formData: FormData) {
  // 1. Get verifier securely from server session
  const verifierUser = await getUser();
  if (!verifierUser) throw new Error("Unauthorized");

  const transactionId = Number(formData.get("transactionId"));

  const amountUsedRaw = formData.get("amountUsed") as string;
  const amountLostRaw = formData.get("amountLost") as string;
  const amountRemainingRaw = formData.get("amountRemaining") as string;
  const newGrossRaw = formData.get("newGross") as string;
  const commentRaw = formData.get("comment") as string;

  const amountUsed = new Decimal(amountUsedRaw || "0");
  const amountLost = new Decimal(amountLostRaw || "0");
  const amountRemaining = new Decimal(amountRemainingRaw || "0");
  const newGross =
    newGrossRaw && newGrossRaw.trim() !== "" ? new Decimal(newGrossRaw) : null;

  await prisma.$transaction(async (tx) => {
    const transaction = await tx.transaction.findUnique({
      where: { id: transactionId },
      include: { container: true },
    });

    if (!transaction) throw new Error("Transaction record not found.");

    // Disallow self-verification if your compliance rules require a separate witness
    if (transaction.userId === verifierUser.id) {
      throw new Error("You cannot verify your own transaction.");
    }

    // Strict validation
    const totalReconciled = amountUsed.plus(amountLost).plus(amountRemaining);
    if (!transaction.amountCheckedOut.equals(totalReconciled)) {
      throw new Error(
        `Reconciliation error: Used (${amountUsed}) + Lost (${amountLost}) + Returned (${amountRemaining}) must equal Checked Out (${transaction.amountCheckedOut}).`,
      );
    }

    // Populate the nullable fields upon verification
    await tx.transaction.update({
      where: { id: transactionId },
      data: {
        amountUsed,
        amountLost,
        amountRemaining,
        newGross,
        verifierId: verifierUser.id, // Secure server-side verifier ID
        comment: commentRaw
          ? `${transaction.comment || ""}\nVerification Note: ${commentRaw}`.trim()
          : transaction.comment,
      },
    });

    await tx.container.update({
      where: { id: transaction.containerId },
      data: {
        ...(newGross ? { initialGross: newGross } : {}),
      },
    });
  });

  revalidatePath("/dashboard");
}
