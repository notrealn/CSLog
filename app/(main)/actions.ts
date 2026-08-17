// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { getUser } from "../actions/session";
import { prisma } from "@/prisma/prisma";
import { Decimal } from "@prisma/client-runtime-utils";

export type FormState = {
  error?: string;
  success?: boolean;
};

export async function verifyAndCloseTransaction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const verifierUser = await getUser();
  if (!verifierUser) {
    return { error: "Unauthorized session." };
  }

  const transactionIdRaw = formData.get("transactionId");
  if (!transactionIdRaw) {
    return { error: "Missing transaction ID." };
  }

  const transactionId = Number(transactionIdRaw);
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

  try {
    await prisma.$transaction(async (tx) => {
      const transaction = await tx.transaction.findUnique({
        where: { id: transactionId },
        include: { container: true },
      });

      if (!transaction) {
        throw new Error("Transaction record not found.");
      }

      if (transaction.userId === verifierUser.id) {
        throw new Error("You cannot verify your own transaction.");
      }

      const totalReconciled = amountUsed.plus(amountLost).plus(amountRemaining);
      if (!transaction.amountCheckedOut.equals(totalReconciled)) {
        throw new Error(
          `Reconciliation mismatch: Used (${amountUsed}) + Lost (${amountLost}) + Remaining (${amountRemaining}) must equal Checked Out (${transaction.amountCheckedOut}).`,
        );
      }

      await tx.transaction.update({
        where: { id: transactionId },
        data: {
          amountUsed,
          amountLost,
          amountRemaining,
          newGross,
          verifierId: verifierUser.id,
          comment: commentRaw
            ? `${transaction.comment || ""}\nVerification Note: ${commentRaw}`.trim()
            : transaction.comment,
        },
      });

      if (newGross) {
        await tx.container.update({
          where: { id: transaction.containerId },
          data: { initialGross: newGross },
        });
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Failed to process verification due to a database error." };
  }

  revalidatePath("/dashboard");
  return { success: true };
}
