export type DiceSides = 2 | 3 | 4 | 6 | 8 | 10 | 12 | 20 | 100;

export interface DiceSelection {
  [key: number]: number;
}

export interface DiceResult {
  sides: DiceSides;
  value: number;
}

export interface DiceColorMap {
  [key: number]: string;
}
