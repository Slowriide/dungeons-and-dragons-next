"use client";

import type { DiceResult, DiceSelection, DiceSides } from "@/interface/Die";
import { getDiceTextColor } from "@/utils/dice/getDiceColor";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { getDiceIcon } from "./DiceSvg";
import { XIcon } from "lucide-react";

export const DiceRoller = () => {
  const [selectedDice, setSelectedDice] = useState<DiceSelection>({});
  const [results, setResults] = useState<DiceResult[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const diceTypes: DiceSides[] = [2, 3, 4, 6, 8, 10, 12, 20, 100];

  const addDie = (sides: DiceSides): void => {
    setSelectedDice((prev) => ({
      ...prev,
      [sides]: (prev[sides] || 0) + 1,
    }));
  };

  const removeDice = (sides: DiceSides): void => {
    setSelectedDice((prev) => {
      const newDice = { ...prev };
      if (newDice[sides] > 1) {
        newDice[sides]--;
      } else {
        delete newDice[sides];
      }
      return newDice;
    });
  };

  const rollDice = (): void => {
    setIsRolling(true);
    const newResults: DiceResult[] = [];
    let sum = 0;
    setTimeout(() => {
      Object.entries(selectedDice).forEach(([sidesKey, countValue]) => {
        const sidesNum = Number(sidesKey);
        const count = Number(countValue);

        if (!Number.isInteger(sidesNum) || sidesNum < 2) return;
        if (!Number.isInteger(count) || count <= 0) return;

        const safeCount = Math.min(count, 1000);

        for (let i = 0; i < safeCount; i++) {
          const roll = Math.floor(Math.random() * sidesNum) + 1;
          newResults.push({ sides: sidesNum as DiceSides, value: roll });
          sum += roll;
        }
      });
      setResults(newResults);
      setTotal(sum);
      setIsRolling(false);
    }, 600); // Duración de la animación
  };

  const clearAll = (): void => {
    setSelectedDice({});
    setResults([]);
    setTotal(0);
  };
  return (
    <>
      {/* Dice selecor */}
      <Card className=" glass-card animate-fade-in p-6 gap-y-2 lg:col-span-4 xl:col-span-3">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Select dice
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:flex lg:flex-row mb-6 gap-x-4">
          {diceTypes.map((sides: DiceSides) => {
            const DiceIcon = getDiceIcon(sides);
            return (
              <div key={sides} className="text-center">
                <button onClick={() => addDie(sides)} className={""}>
                  <DiceIcon
                    className={`${getDiceTextColor(
                      sides,
                    )} w-20 h-20 cursor-pointer transition-all transform hover:scale-105 disabled:scale-100`}
                  />
                  <span className="text-sm">d{sides}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Selected Dices */}
        {Object.keys(selectedDice).length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Selected dice
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(selectedDice).map(
                ([sides, count]: [string, number]) => (
                  <div
                    key={sides}
                    className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2"
                  >
                    <span className="font-semibold text-gray-700">
                      {count}x d{sides}
                    </span>
                    <button
                      onClick={() => removeDice(parseInt(sides) as DiceSides)}
                      className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
                    >
                      <XIcon height={15} width={15} />
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={rollDice}
            disabled={Object.keys(selectedDice).length === 0}
            className={`flex-1 cursor-pointer 
                bg-linear-to-r from-green-500 to-emerald-600 
                hover:from-green-600 hover:to-emerald-700 
                disabled:from-gray-400 disabled:to-gray-500 
                text-white font-bold py-3 rounded-lg 
                transition-all transform 
                hover:scale-[1.02] 
                disabled:scale-100 disabled:cursor-not-allowed
                ${isRolling ? "button-shake" : ""}`}
          >
            {isRolling ? "🎲 Rolling..." : "🎲 Roll Dice!"}
          </button>
          <button
            onClick={clearAll}
            disabled={isRolling}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 cursor-pointer"
          >
            Limpiar
          </button>
        </div>
      </Card>

      {/* Results */}
      {results.length > 0 && !isRolling && (
        <Card className="glass-card animate-fade-in p-4 gap-y-2 lg:col-span-4 xl:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Results</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {results.map((result: DiceResult, index: number) => {
              const DiceIcon = getDiceIcon(result.sides);
              return (
                <div key={index} className={"flex-col justify-items-center"}>
                  <DiceIcon
                    className={`${getDiceTextColor(
                      result.sides,
                    )} w-20 h-20 cursor-pointer transition-all transform hover:scale-105 disabled:scale-100 dice-appear`}
                  />
                  <div className="text-2xl">{result.value}</div>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-4">
            <div className="text-3xl font-bold text-center text-gray-800">
              Total: <span className="text-indigo-600">{total}</span>
            </div>
          </div>
        </Card>
      )}
      {/* Rolling animation placeholder */}
      {isRolling && (
        <Card className="glass-card p-6 gap-y-2">
          <div className="flex items-center justify-center h-40">
            <div className="dice-rolling text-6xl">🎲</div>
          </div>
        </Card>
      )}
    </>
  );
};
