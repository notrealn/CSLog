"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/prisma/prisma";
import bcrypt from "bcryptjs";

export async function updateAccount(
  userId: number,
  formData: FormData,
): Promise<{ success: true } | { success: false; error: string }> {
  const name = formData.get("name") as string;
  const initials = formData.get("initials") as string;
  const currentPassword = formData.get("currentPassword") as string;
  const newPassword = formData.get("newPassword") as string;
  const confirmNewPassword = formData.get("confirmNewPassword") as string;

  // 1. Mandatory current password check
  if (!currentPassword) {
    return {
      success: false,
      error: "Current password is required to save changes.",
    };
  }

  // Fetch target user record
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return { success: false, error: "User not found." };
  }

  // 2. Verify current password
  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    user.hashedPassword,
  );
  if (!isPasswordCorrect) {
    return { success: false, error: "Incorrect current password." };
  }

  // 3. Handle new password verification (if changing password)
  let updatedHashedPassword = user.hashedPassword;
  if (newPassword || confirmNewPassword) {
    if (newPassword !== confirmNewPassword) {
      return { success: false, error: "New passwords do not match." };
    }
    if (newPassword.length < 6) {
      return {
        success: false,
        error: "New password must be at least 6 characters long.",
      };
    }
    updatedHashedPassword = await bcrypt.hash(newPassword, 10);
  }

  // 4. Ensure name uniqueness if changing name
  if (name !== user.name) {
    const existingUser = await prisma.user.findUnique({ where: { name } });
    if (existingUser) {
      return { success: false, error: "Username is already taken." };
    }
  }

  // 5. Update database record
  await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      initials,
      hashedPassword: updatedHashedPassword,
    },
  });

  revalidatePath("/account");
  return { success: true };
}
