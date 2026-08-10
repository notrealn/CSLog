// app/add-transaction/actions.ts
"use server";

import { redirect } from "next/navigation";
import { getUser } from "@/app/actions/session"; // Import your auth helper
import { prisma } from "@/prisma/prisma";

export async function createCheckoutTransaction(formData: FormData) {
  // 1. Get authenticated user securely from server session
  const currentUser = await getUser();
  if (!currentUser) throw new Error("Unauthorized");

  const containerId = Number(formData.get("containerId"));
  const fromId = formData.get("fromId") as string;
  const toId = formData.get("toId") as string;
  const amountCheckedOutRaw = formData.get("amountCheckedOut") as string;
  const purpose = formData.get("purpose") as string;
  const description = formData.get("description") as string;
  const commentRaw = formData.get("comment") as string;

  const amountCheckedOut = parseFloat(amountCheckedOutRaw);
  const comment =
    commentRaw && commentRaw.trim() !== "" ? commentRaw.trim() : null;

  await prisma.$transaction(async (tx) => {
    const container = await tx.container.findUnique({
      where: { id: containerId },
    });
    if (!container) throw new Error("Container not found.");

    // Create checkout record with nullable reconciliation fields
    await tx.transaction.create({
      data: {
        containerId,
        fromId,
        toId,
        amountCheckedOut,
        amountUsed: null, // Nullable until verified
        amountLost: null, // Nullable until verified
        amountRemaining: null, // Nullable until verified
        purpose,
        description,
        comment,
        userId: currentUser.id, // Secure server-side user ID
        verifierId: null,
      },
    });
  });

  redirect("/");
}
