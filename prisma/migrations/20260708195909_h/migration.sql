-- CreateTable
CREATE TABLE "Substance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "initialGross" REAL NOT NULL,
    "initialTare" REAL NOT NULL,
    "initialNet" REAL NOT NULL,
    "container" TEXT NOT NULL,
    "expirationDate" DATETIME NOT NULL,
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
