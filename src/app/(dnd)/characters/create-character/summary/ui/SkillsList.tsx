// import { BookOpen } from "lucide-react";

// interface SkillsListProps {
//   skills: Skill[];
// }

// export function SkillsList({ skills }: SkillsListProps) {
//   const formatModifier = (mod: number) => {
//     return mod >= 0 ? `+${mod}` : `${mod}`;
//   };

//   return (
//     <div className="fantasy-border rounded-lg p-4 bg-card">
//       <h3 className="section-title flex items-center gap-2 mb-3">
//         <BookOpen className="w-4 h-4" />
//         Skills
//       </h3>

//       <div className="space-y-1">
//         {skills.map((skill) => (
//           <div
//             key={skill.name}
//             className={`flex items-center gap-2 py-1 px-2 rounded transition-colors ${
//               skill.proficient ? "bg-gold/10" : "hover:bg-parchment-dark/50"
//             }`}
//           >
//             <div
//               className={`proficiency-dot ${skill.proficient ? "active" : ""}`}
//             />
//             <span className="font-medium text-sm w-8 font-fantasy text-ink">
//               {formatModifier(skill.modifier)}
//             </span>
//             <span
//               className={`text-sm flex-1 ${
//                 skill.proficient
//                   ? "text-ink font-medium"
//                   : "text-muted-foreground"
//               }`}
//             >
//               {skill.name}
//             </span>
//             <span className="text-[10px] text-muted-foreground uppercase">
//               {skill.ability}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
