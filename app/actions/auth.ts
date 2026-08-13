"use server";

import { prisma } from "@/prisma/prisma";
import { createSession } from "./session";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function signin(
  _prev: string | undefined,
  formData: FormData,
): Promise<string | undefined> {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  if (!name || !password) {
    return "Please provide both name and password.";
  }

  const user = await prisma.user.findUnique({ where: { name } });

  if (
    user &&
    user.hashedPassword &&
    (await bcrypt.compare(password, user.hashedPassword))
  ) {
    await createSession(name);
    redirect("/");
  }

  return "Invalid name or password.";
}
