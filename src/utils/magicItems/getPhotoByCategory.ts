export const getPhotoByCategory = (
  itemCategory: string
  //   categories: {
  //     index: string;
  //     name: string;
  //   }[]
) => {
  //   const names = categories.map((cat) => cat.name);

  switch (itemCategory) {
    case "Armor":
      return "/magic-items/armor.jpeg";
    case "Ammunition":
      return "/magic-items/ammunition.jpeg";
    case "Wondrous Items":
      return "/magic-items/wondurus-item.jpeg";
    case "Weapon":
      return "/magic-items/weapon.png";
    case "Rod":
      return "/magic-items/rod.jpeg";
    case "Potion":
      return "/magic-items/potion.png";
    case "Ring":
      return "/magic-items/ring.jpeg";
    case "Scroll":
      return "/magic-items/scroll.png";
    case "Staff":
      return "/magic-items/staff.jpeg";
    case "Wand":
      return "/magic-items/wand.jpeg";

    default:
      break;
  }
  //   switch (true) {
  //     case names.includes("Armor"):
  //       return "/magic-items/armor.jpeg";
  //     case names.includes("Ammunition"):
  //       return "/magic-items/ammunition.jpeg";
  //     case names.includes("Wondrous Items"):
  //       return "/magic-items/wondurus-item.jpeg";
  //     case names.includes("Weapon"):
  //       return "/magic-items/weapon.png";
  //     case names.includes("Rod"):
  //       return "/magic-items/rod.jpeg";
  //     case names.includes("Potion"):
  //       return "/magic-items/potion.png";
  //     case names.includes("Ring"):
  //       return "/magic-items/ring.jpeg";
  //     case names.includes("Scroll"):
  //       return "/magic-items/scroll.png";
  //     case names.includes("Staff"):
  //       return "/magic-items/staff.jpeg";
  //     case names.includes("Wand"):
  //       return "/magic-items/wand.jpeg";

  //     default:
  //       break;
  //   }
};
