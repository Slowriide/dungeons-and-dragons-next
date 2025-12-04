export const classProficiencies = (items: string[]) => {
  const armors: string[] = [];
  const weapons: string[] = [];
  const savingThrows: string[] = [];

  items.forEach((item) => {
    const lower = item.toLowerCase();

    if (lower.includes("armor") || item === "Shields") {
      armors.push(item);
    } else if (lower.includes("weapon")) {
      weapons.push(item);
    } else if (lower.includes("saving throw")) {
      const cleaned = item.replace("Saving Throw: ", "").trim();
      savingThrows.push(cleaned);
    }
  });

  return {
    armors,
    weapons,
    savingThrows,
  };
};
