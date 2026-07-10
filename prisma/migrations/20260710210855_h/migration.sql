-- CreateTable
CREATE TABLE "Substance" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "initialGross" DOUBLE PRECISION,
    "initialTare" DOUBLE PRECISION,
    "initialNet" DOUBLE PRECISION NOT NULL,
    "container" TEXT,
    "expirationDate" TIMESTAMP(3),
    "recievedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Substance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "substanceId" INTEGER,
    "purpose" TEXT NOT NULL,
    "used" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_substanceId_fkey" FOREIGN KEY ("substanceId") REFERENCES "Substance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
