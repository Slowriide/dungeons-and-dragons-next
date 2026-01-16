interface SavingThrow {
  ability: string;
  proficient: boolean;
  modifier: number;
}

type Attributtes = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export function buildSavingThrows({
  attributes,
  savingThrowProficiencies,
  proficiencyBonus,
}: {
  attributes: Attributtes;
  savingThrowProficiencies: string[]; // ["str", "con"]
  proficiencyBonus: number;
}): SavingThrow[] {
  return Object.entries(attributes).map(([key, value]) => {
    const short = key.slice(0, 3); // str, dex, wis, etc

    const isProficient = savingThrowProficiencies.includes(
      `saving-throw-${short}`
    );

    const baseMod = Math.floor((value - 10) / 2);

    return {
      ability: key.charAt(0).toUpperCase() + key.slice(1),
      proficient: isProficient,
      modifier: baseMod + (isProficient ? proficiencyBonus : 0),
    };
  });
}
