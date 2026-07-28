"use server";

import { prisma } from "@/prisma/prisma";
import { createSession } from "./session";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function signin(formData: FormData) {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({ where: { name } });

  if (
    user &&
    user.hashedPassword &&
    (await bcrypt.compare(password, user.hashedPassword))
  ) {
    await createSession(name);
    redirect("/");
  } else {
    return;
  }
}
