const FETCH_PATTERNS = [
  "tools", // artisan's tools, smith tools, etc.
  "-tools", // ej: tool-artisans-tools
  "vehicle", // vehicles (land, water)
  "instruments", // musical instrument proficiencies
  "armor",
  "vehicles",
  "weapon",
  "gaming",
];

export function getOptionsCategory(optionIndex: string) {
  return FETCH_PATTERNS.some((pattern) =>
    optionIndex.toLowerCase().includes(pattern)
  );
}
