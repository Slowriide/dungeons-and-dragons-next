export function getArmorClass(armor: string | undefined, dex: number) {
  const modifier = Math.floor((dex - 10) / 2);

  const cappedModifier = Math.min(modifier, 2);

  if (!armor) {
    return 10;
  }

  if (armor.includes("leather")) {
    return 11 + cappedModifier; //+dex max 2
  }
  if (armor.includes("chain-shirt")) {
    return 13 + cappedModifier; //+dex max 2
  }
  if (armor.includes("chain-mail")) {
    return 16 + cappedModifier;
  }
  if (armor.includes("studded-shirt")) {
    return 12 + cappedModifier; //+dex max 2
  }

  return 10;
}
