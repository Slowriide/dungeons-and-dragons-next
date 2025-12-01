export const CR_LIST = [
  "1/8",
  "1/4",
  "1/2",
  ...Array.from({ length: 30 }, (_, i) => `${i + 1}`),
];

export const parseCR = (cr: string): string => {
  if (!cr.includes("/")) return String(cr);

  const [a, b] = cr.split("/");
  return (Number(a) / Number(b)).toString();
};
