-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Substance" (
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
INSERT INTO "new_Substance" ("container", "date", "expirationDate", "id", "initialGross", "initialNet", "initialTare", "lotNumber", "materialType", "productName", "recievedDate", "unit") SELECT "container", "date", "expirationDate", "id", "initialGross", "initialNet", "initialTare", "lotNumber", "materialType", "productName", "recievedDate", "unit" FROM "Substance";
DROP TABLE "Substance";
ALTER TABLE "new_Substance" RENAME TO "Substance";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
