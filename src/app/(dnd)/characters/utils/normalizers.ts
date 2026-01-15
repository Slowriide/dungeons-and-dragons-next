export async function resolveEquipmentGroup(group: any): Promise<{
  choose: number;
  options: EquipmentOption[];
}> {
  const options: EquipmentOption[] = [];

  for (const opt of group.from.options) {
    // 🔹 Item directo
    if (opt.option_type === "counted_reference") {
      options.push({
        index: opt.of.index,
        name: opt.of.name,
      });
    }

    // 🔹 Categoría → fetch
    if (opt.option_type === "choice") {
      const from = opt.choice.from;

      if (from.option_set_type === "equipment_category") {
        const res = await fetch(from.equipment_category.url);
        const data = await res.json();

        data.equipment.forEach((item: any) => {
          options.push({
            index: item.index,
            name: item.name,
          });
        });
      }
    }
  }

  return {
    choose: group.choose,
    options,
  };
}

type EquipmentOption = {
  index: string;
  name: string;
};
