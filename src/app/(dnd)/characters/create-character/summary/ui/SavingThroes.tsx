// import { ShieldCheck } from "lucide-react";
// import { SavingThrow } from '@/types/character';

// interface SavingThrowsProps {
//   savingThrows: SavingThrow[];
// }

// export function SavingThrows({ savingThrows }: SavingThrowsProps) {
//   const formatModifier = (mod: number) => {
//     return mod >= 0 ? `+${mod}` : `${mod}`;
//   };

//   return (
//     <div className="fantasy-border rounded-lg p-4 bg-card">
//       <h3 className="section-title flex items-center gap-2 mb-3">
//         <ShieldCheck className="w-4 h-4" />
//         Saving Throws
//       </h3>

//       <div className="space-y-1.5">
//         {savingThrows.map((save) => (
//           <div
//             key={save.ability}
//             className="flex items-center gap-2 py-1 px-2 rounded hover:bg-parchment-dark/50 transition-colors"
//           >
//             <div
//               className={`proficiency-dot ${save.proficient ? "active" : ""}`}
//             />
//             <span className="font-medium text-sm w-8 font-fantasy text-ink">
//               {formatModifier(save.modifier)}
//             </span>
//             <span className="text-sm text-muted-foreground">
//               {save.ability}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
