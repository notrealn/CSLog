-- CreateTable
CREATE TABLE "Location" (
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Substance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateAdded" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "expirationDate" DATETIME,
    "receivedDate" DATETIME NOT NULL,
    "bin" TEXT
);

-- CreateTable
CREATE TABLE "Container" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "substanceId" INTEGER NOT NULL,
    "serialNumber" TEXT,
    "opened" BOOLEAN NOT NULL DEFAULT false,
    "initialGross" DECIMAL,
    "initialTare" DECIMAL,
    "initialNet" DECIMAL NOT NULL,
    "container" TEXT,
    CONSTRAINT "Container_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "Substance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
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

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "initials" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'REVIEWER'
);

-- CreateIndex
CREATE UNIQUE INDEX "Container_serialNumber_key" ON "Container"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
