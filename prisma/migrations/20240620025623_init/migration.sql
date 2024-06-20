/*
  Warnings:

  - You are about to drop the column `schedule` on the `Tanker` table. All the data in the column will be lost.
  - Added the required column `endsAt` to the `Tanker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Tanker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tanker" DROP COLUMN "schedule",
ADD COLUMN     "endsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL;
