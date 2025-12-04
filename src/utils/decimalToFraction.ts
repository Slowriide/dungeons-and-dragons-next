export function decimalToFraction(decimal: number): string {
  if (Number.isInteger(decimal)) return decimal.toString();

  const tolerance = 1e-10;
  let numerator = 1;
  let denominator = 1;

  while (Math.abs(numerator / denominator - decimal) > tolerance) {
    if (numerator / denominator < decimal) numerator++;
    else denominator++;
  }

  return `${numerator}/${denominator}`;
}
