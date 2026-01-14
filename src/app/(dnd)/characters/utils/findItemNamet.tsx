export function findProficiencyName(index: string, classDetails: any): string {
  const searchInOptions = (options: any[]): string | null => {
    for (const opt of options) {
      // Buscar directamente
      if (opt.item?.index === index) {
        return opt.item.name;
      }

      // Buscar en nested choices
      if (opt.choice?.from?.options) {
        const nestedResult = searchInOptions(opt.choice.from.options);
        if (nestedResult) return nestedResult;
      }
    }
    return null;
  };

  // Buscar en todas las proficiency_choices
  for (const choice of classDetails.proficiency_choices || []) {
    if (choice.from?.options) {
      const result = searchInOptions(choice.from.options);
      if (result) return result;
    }
  }

  // Fallback: formatear el index
  return index
    .replace(/-/g, " ")
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
