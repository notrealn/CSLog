// app/actions.ts
"use server";

import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUser } from "./session";

// Action: Add Substance
export async function createSubstance(formData: FormData) {
  const productName = formData.get("productName") as string;
  const lotNumber = formData.get("lotNumber") as string;
  const materialType = formData.get("materialType") as string;
  const unit = formData.get("unit") as string;
  const container = formData.get("container") as string;

  const rawGross = formData.get("initialGross") as string;
  const rawTare = formData.get("initialTare") as string;
  const rawNet = formData.get("initialNet") as string;
  const rawExpiration = formData.get("expirationDate") as string;

  // Parse optional inputs. If empty string, pass undefined so Prisma sets it to NULL
  const initialGross = rawGross ? parseFloat(rawGross) : null;
  const initialTare = rawTare ? parseFloat(rawTare) : null;
  const expirationDate = rawExpiration ? new Date(rawExpiration) : null;

  const recievedDate = formData.get("recievedDate")
    ? new Date(formData.get("recievedDate") as string)
    : new Date();

  // Core Net calculation logic based on your fields
  let initialNet = 0;
  if (rawNet) {
    initialNet = parseFloat(rawNet);
  } else if (initialGross !== null && initialTare !== null) {
    initialNet = initialGross - initialTare;
  }

  await prisma.substance.create({
    data: {
      productName,
      lotNumber,
      materialType,
      unit,
      container,
      initialGross, // Saves as NULL in DB if empty
      initialTare, // Saves as NULL in DB if empty
      initialNet, // Always required
      expirationDate, // Saves as NULL in DB if empty
      recievedDate,
    },
  });

  revalidatePath("/");
  redirect("/");
}

// Action: Record Transaction
export async function createTransaction(formData: FormData) {
  const substanceId = parseInt(formData.get("substanceId") as string);
  const purpose = formData.get("purpose") as string;
  const amount = parseFloat(formData.get("amount") as string) || 0;

  await prisma.transaction.create({
    data: {
      userId: (await getUser()).id,
      substanceId,
      purpose,
      amount,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function updateTransaction(
  formData: FormData,
): Promise<{ success: true } | { success: false; error: string }> {
  const transactionId = Number(formData.get("transactionId"));
  const rawAmountReturned = formData.get("amountReturned") as string | null;
  const amountReturned =
    rawAmountReturned?.trim() !== ""
      ? parseFloat(rawAmountReturned ?? "0")
      : null;

  if (
    !transactionId ||
    amountReturned === null ||
    Number.isNaN(amountReturned)
  ) {
    return {
      success: false,
      error: "Please enter an amount returned value before verifying.",
    };
  }

  const currentUser = await getUser();
  const transaction = await prisma.transaction.findUnique({
    where: { id: transactionId },
    select: { userId: true },
  });

  if (!transaction) {
    return { success: false, error: "Transaction not found." };
  }

  if (transaction.userId === currentUser.id) {
    return { success: false, error: "You cannot verify your own transaction." };
  }

  await prisma.transaction.update({
    where: { id: transactionId },
    data: {
      verifierId: currentUser.id,
      amountReturned,
    },
  });

  revalidatePath("/");
  redirect("/");
  return { success: true };
}
