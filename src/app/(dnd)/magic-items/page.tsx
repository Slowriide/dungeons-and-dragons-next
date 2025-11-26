import { EquipmentGrid } from "@/components/equipment/EquipmentGrid";
import { SideEquipmentFilters } from "@/components/equipment/SideEquipmentFilters";
import { MagicItemsGrid } from "@/components/magic-items/MagicItemsGrid";
import { SideMagicItemsFilters } from "@/components/magic-items/SideMagicItemsFilters";
import { geisCinzel } from "@/config/fonts";
import { Wand2Icon } from "lucide-react";

export default function MagicItemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <Wand2Icon className="size-14 text-fuchsia-600 " />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Magic Items
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideMagicItemsFilters />
          <MagicItemsGrid />
        </div>
      </div>
    </div>
  );
}
