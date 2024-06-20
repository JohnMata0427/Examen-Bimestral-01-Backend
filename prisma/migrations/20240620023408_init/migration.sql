/*
  Warnings:

  - The `rute` column on the `Tanker` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tanker" DROP COLUMN "rute",
ADD COLUMN     "rute" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT;
