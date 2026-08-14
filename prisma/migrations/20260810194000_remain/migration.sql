/*
  Warnings:

  - You are about to drop the column `amountReturned` on the `Transaction` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "amountCheckedOut" DECIMAL NOT NULL,
    "amountUsed" DECIMAL,
    "amountLost" DECIMAL,
    "amountRemaining" DECIMAL,
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
INSERT INTO "new_Transaction" ("amountCheckedOut", "amountLost", "amountUsed", "comment", "containerId", "date", "description", "fromId", "id", "newGross", "purpose", "toId", "userId", "verifierId") SELECT "amountCheckedOut", "amountLost", "amountUsed", "comment", "containerId", "date", "description", "fromId", "id", "newGross", "purpose", "toId", "userId", "verifierId" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
