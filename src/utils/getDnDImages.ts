export const getDnDImages = (image: string) => {
  if (!image) return "/placeholder.sbc";
  const imageUrl = `https://www.dnd5eapi.co${image}`;

  return imageUrl;
};
