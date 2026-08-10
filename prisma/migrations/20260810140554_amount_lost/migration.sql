/*
  Warnings:

  - You are about to drop the column `opened` on the `Container` table. All the data in the column will be lost.
  - You are about to drop the column `bin` on the `Substance` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `amountCheckedOut` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountLost` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountReturned` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountUsed` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Container" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "substanceId" INTEGER NOT NULL,
    "bin" TEXT,
    "serialNumber" TEXT,
    "initialGross" DECIMAL,
    "initialTare" DECIMAL,
    "initialNet" DECIMAL NOT NULL,
    "container" TEXT,
    CONSTRAINT "Container_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "Substance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Container" ("container", "id", "initialGross", "initialNet", "initialTare", "serialNumber", "substanceId") SELECT "container", "id", "initialGross", "initialNet", "initialTare", "serialNumber", "substanceId" FROM "Container";
DROP TABLE "Container";
ALTER TABLE "new_Container" RENAME TO "Container";
CREATE UNIQUE INDEX "Container_serialNumber_key" ON "Container"("serialNumber");
CREATE TABLE "new_Substance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateAdded" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "expirationDate" DATETIME,
    "receivedDate" DATETIME NOT NULL
);
INSERT INTO "new_Substance" ("dateAdded", "expirationDate", "id", "lotNumber", "materialType", "productName", "receivedDate", "unit") SELECT "dateAdded", "expirationDate", "id", "lotNumber", "materialType", "productName", "receivedDate", "unit" FROM "Substance";
DROP TABLE "Substance";
ALTER TABLE "new_Substance" RENAME TO "Substance";
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "amountCheckedOut" DECIMAL NOT NULL,
    "amountUsed" DECIMAL NOT NULL,
    "amountLost" DECIMAL NOT NULL,
    "amountReturned" DECIMAL NOT NULL,
    "newGross" DECIMAL,
    "purpose" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "comment" TEXT,
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "verifierId" INTEGER,
    CONSTRAINT "Transaction_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "Location" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_toId_fkey" FOREIGN KEY ("toId") REFERENCES "Location" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("containerId", "date", "fromId", "id", "purpose", "toId", "userId", "verifierId") SELECT "containerId", "date", "fromId", "id", "purpose", "toId", "userId", "verifierId" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
