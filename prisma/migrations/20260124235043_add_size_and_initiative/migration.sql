-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_userId_fkey";

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "backgroundSkills" JSONB,
ADD COLUMN     "classArmorProficiencies" TEXT[],
ADD COLUMN     "classWeaponProficiencies" TEXT[],
ADD COLUMN     "iniciative" INTEGER,
ADD COLUMN     "selectedAbilityBonuses" TEXT[],
ADD COLUMN     "size" TEXT;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
