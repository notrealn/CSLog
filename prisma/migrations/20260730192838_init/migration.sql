-- CreateTable
CREATE TABLE "Substance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "initialGross" REAL,
    "initialTare" REAL,
    "initialNet" REAL NOT NULL,
    "container" TEXT,
    "expirationDate" DATETIME,
    "recievedDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "substanceId" INTEGER,
    "purpose" TEXT NOT NULL,
    "used" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Transaction_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "Substance" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "initials" TEXT NOT NULL DEFAULT '',
    "hashedPassword" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'REVIEWER'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
