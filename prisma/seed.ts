import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.upsert({
    where: { name: "admin" },
    update: {},
    create: {
      name: "admin",
      initials: "ADMIN",
      hashedPassword: await bcrypt.hash(
        process.env.ADMIN_PASSWORD ?? "password",
        10,
      ),
      role: "SUPERUSER",
    },
  });
}

main();
