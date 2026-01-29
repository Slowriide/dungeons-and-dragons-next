type Attributes = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export function getPrincipalAttribute(attributes: Attributes) {
  return Object.entries(attributes).reduce(
    (max, [key, value]) =>
      value > max.value ? { key: key as keyof Attributes, value } : max,
    { key: "strength" as keyof Attributes, value: attributes.strength }, //initial value
  );
}
