/*
  Warnings:

  - You are about to drop the column `class` on the `Character` table. All the data in the column will be lost.
  - Added the required column `baseAttributes` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterClass` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "class",
ADD COLUMN     "abilityBonuses" JSONB,
ADD COLUMN     "alignment" TEXT,
ADD COLUMN     "armorClass" INTEGER,
ADD COLUMN     "background" TEXT,
ADD COLUMN     "backgroundLanguages" TEXT[],
ADD COLUMN     "backgroundSelections" JSONB,
ADD COLUMN     "backgroundTrait" JSONB,
ADD COLUMN     "baseAttributes" JSONB NOT NULL,
ADD COLUMN     "characterClass" TEXT NOT NULL,
ADD COLUMN     "classFeatures" JSONB,
ADD COLUMN     "classProficiencies" JSONB,
ADD COLUMN     "equipment" JSONB,
ADD COLUMN     "experiencePoints" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "gold" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "hitDie" INTEGER,
ADD COLUMN     "hitPoints" INTEGER,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "proficiencies" TEXT[],
ADD COLUMN     "proficiencyBonus" INTEGER,
ADD COLUMN     "raceLanguages" TEXT[],
ADD COLUMN     "raceTraits" JSONB,
ADD COLUMN     "selectedEquipmentOption" TEXT,
ADD COLUMN     "selectedProficiencies" TEXT[],
ADD COLUMN     "selectedTraits" JSONB,
ADD COLUMN     "skills" JSONB,
ADD COLUMN     "speed" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "level" SET DEFAULT 1;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Character_userId_idx" ON "Character"("userId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
