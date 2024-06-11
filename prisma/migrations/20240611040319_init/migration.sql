-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tanker" (
    "id" SERIAL NOT NULL,
    "rute" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "schedule" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tanker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
