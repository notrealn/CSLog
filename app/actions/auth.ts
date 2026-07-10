"use server";

import { createSession } from "./session";
import { redirect } from "next/navigation";

export async function signin(formData: FormData) {
  const name = formData.get("name");
  const password = formData.get("password");

  if (name === "admin" && password === "password") {
    await createSession(name);
    redirect("/");
  } else {
    return;
  }
}
