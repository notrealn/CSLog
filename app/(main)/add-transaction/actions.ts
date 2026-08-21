// app/add-transaction/actions.ts
"use server";

import { redirect } from "next/navigation";
import { getUser } from "@/app/actions/session";
import { prisma } from "@/prisma/prisma";
import { Decimal } from "@prisma/client-runtime-utils";
import { getContainerCounts } from "@/app/(main)/inventory/actions";

export type FormState = {
  error?: string;
};

export async function createCheckoutTransaction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const currentUser = await getUser();
  if (!currentUser) return { error: "Unauthorized session." };

  const containerIdRaw = formData.get("containerId");
  const fromId = formData.get("fromId") as string;
  const toId = formData.get("toId") as string;
  const amountCheckedOutRaw = formData.get("amountCheckedOut") as string;
  const purpose = formData.get("purpose") as string;
  const description = formData.get("description") as string;
  const commentRaw = formData.get("comment") as string;

  if (!containerIdRaw || !fromId || !toId || !amountCheckedOutRaw) {
    return { error: "Please fill out all required fields." };
  }

  if (fromId === toId) {
    return { error: "Source and Destination locations must be different." };
  }

  const containerId = Number(containerIdRaw);
  const amountCheckedOut = new Decimal(amountCheckedOutRaw);

  if (amountCheckedOut.isNegative() || amountCheckedOut.isZero()) {
    return { error: "Checkout amount must be greater than zero." };
  }

  // --- SERVER-SIDE OVERDRAW CHECK ---
  const containerCounts = await getContainerCounts(containerId);
  if (!containerCounts) {
    return { error: "Selected container not found." };
  }

  const sourceBalanceItem = containerCounts.locationBalances.find(
    (lb) => lb.location === fromId,
  );
  const availableAtSource = sourceBalanceItem ? sourceBalanceItem.amount : 0;

  if (amountCheckedOut.greaterThan(availableAtSource)) {
    return {
      error: `Overdraw error: Location "${fromId}" only has ${availableAtSource} ${containerCounts.substance.unit} available (requested ${amountCheckedOut.toString()}).`,
    };
  }

  const comment =
    commentRaw && commentRaw.trim() !== "" ? commentRaw.trim() : null;

  try {
    await prisma.transaction.create({
      data: {
        containerId,
        fromId,
        toId,
        amountCheckedOut,
        amountUsed: null,
        amountLost: null,
        amountRemaining: null,
        purpose,
        description,
        comment,
        userId: currentUser.id,
        verifierId: null,
      },
    });
  } catch (error) {
    console.error("Failed to create transaction:", error);
    return { error: "Database error creating transaction." };
  }

  redirect("/");
}
