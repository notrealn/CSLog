// app/manage-users/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/prisma/prisma"; // Adjust path to your Prisma client instance
import bcrypt from "bcryptjs";

export async function updateUserRole(userId: number, role: string) {
  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  revalidatePath("/manage-users");
}

export async function deleteUser(userId: number) {
  await prisma.user.delete({
    where: { id: userId },
  });

  revalidatePath("/manage-users");
}

export async function createUser(formData: FormData) {
  const name = formData.get("username") as string;
  const initials = formData.get("initials") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  // Simple runtime validation
  if (!name || !initials || !password || !role) {
    throw new Error("All fields are required.");
  }

  // Prevent duplicate usernames
  const existingUser = await prisma.user.findUnique({ where: { name } });
  if (existingUser) {
    throw new Error("Username is already taken.");
  }

  // Hash the plain-text password safely before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      initials,
      hashedPassword,
      role,
    },
  });

  revalidatePath("/manage-users");
}
