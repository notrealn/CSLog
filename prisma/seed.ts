import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/client";
import bcrypt from "bcryptjs";
import "dotenv/config";
import { createReadStream } from "fs";
import path from "path";
import { parse } from "fast-csv";

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

  const locations = ["Cage", "Waste Shelf", "Waste Bin", "Lab", "Safe", "Out"];

  await Promise.all(
    locations.map((name) =>
      prisma.location.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );

  createReadStream(path.resolve(__dirname, "data", "data.csv"))
    .pipe(parse({ headers: true }))
    .on("error", (err) => console.error(err))
    .on("data", (data) => {
      prisma.$transaction(async (tx) => {
        const existing = await tx.substance.findFirst({
          where: {
            lotNumber: data.lotNumber as string,
            dateAdded: parseDate(data.dateAdded),
          },
        });

        if (existing) return;

        await tx.substance.create({
          data: {
            lotNumber: data.lotNumber,
            materialType: data.materialType,
            productName: data.productName,
            receivedDate: parseDate(data.receivedDate),
            unit: data.unit,
            dateAdded: new Date(),
            expirationDate: data.expirationDate,
          },
        });
      });
    })
    .on("end", (rows: number) => console.log(`parsed ${rows} rows.`));
}

const months: { [month: string]: number } = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseDate(date: string) {
  const [d, m, y] = date.split(" ");

  const pd = parseInt(d);
  const pm = months[m];
  const py = parseInt(y);

  return new Date(py, pm, pd);
}

main();
