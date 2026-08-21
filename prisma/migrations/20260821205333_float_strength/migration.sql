/*
  Warnings:

  - You are about to alter the column `apiPerUnit` on the `Substance` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Substance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateAdded" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "apiPerUnit" REAL,
    "expirationDate" DATETIME,
    "receivedDate" DATETIME NOT NULL
);
INSERT INTO "new_Substance" ("apiPerUnit", "dateAdded", "expirationDate", "id", "lotNumber", "materialType", "productName", "receivedDate", "unit") SELECT "apiPerUnit", "dateAdded", "expirationDate", "id", "lotNumber", "materialType", "productName", "receivedDate", "unit" FROM "Substance";
DROP TABLE "Substance";
ALTER TABLE "new_Substance" RENAME TO "Substance";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
