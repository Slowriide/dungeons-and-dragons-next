// import { Equipment } from "@/mocks/data/equipment";
// import { Backpack, Sword, Shield, Wrench, Package } from "lucide-react";

// interface EquipmentSectionProps {
//   equipment: Equipment[];
// }

// const typeConfig = {
//   weapon: { icon: Sword, color: "text-destructive" },
//   armor: { icon: Shield, color: "text-gold" },
//   tool: { icon: Wrench, color: "text-brown" },
//   item: { icon: Package, color: "text-muted-foreground" },
// };

// export function EquipmentSection({ equipment }: EquipmentSectionProps) {
//   const groupedEquipment = equipment.reduce((acc, item) => {
//     if (!acc[item.type]) {
//       acc[item.type] = [];
//     }
//     acc[item.type].push(item);
//     return acc;
//   }, {} as Record<string, Equipment[]>);

//   const typeOrder: Equipment["type"][] = ["weapon", "armor", "tool", "item"];

//   return (
//     <div className="fantasy-border rounded-lg p-4 bg-card">
//       <h3 className="section-title flex items-center gap-2 mb-3">
//         <Backpack className="w-4 h-4" />
//         Equipment
//       </h3>

//       <div className="space-y-4">
//         {typeOrder.map((type) => {
//           const items = groupedEquipment[type];
//           if (!items || items.length === 0) return null;

//           const config = typeConfig[type];
//           const Icon = config.icon;

//           return (
//             <div key={type}>
//               <div className="flex items-center gap-2 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-2">
//                 <Icon className={`w-3 h-3 ${config.color}`} />
//                 {type === "item" ? "Other Items" : `${type}s`}
//               </div>

//               <div className="space-y-1">
//                 {items.map((item, index) => (
//                   <div
//                     key={`${item.name}-${index}`}
//                     className={`flex items-center justify-between py-1.5 px-2 rounded text-sm ${
//                       item.equipped
//                         ? "bg-gold/10 border border-gold/20"
//                         : "hover:bg-parchment-dark/50"
//                     }`}
//                   >
//                     <div className="flex items-center gap-2">
//                       {item.equipped && (
//                         <span className="w-1.5 h-1.5 rounded-full bg-gold" />
//                       )}
//                       <span
//                         className={
//                           item.equipped
//                             ? "font-medium text-ink"
//                             : "text-muted-foreground"
//                         }
//                       >
//                         {item.name}
//                         {item.quantity > 1 && ` (×${item.quantity})`}
//                       </span>
//                     </div>
//                     {item.description && (
//                       <span className="text-xs text-muted-foreground">
//                         {item.description}
//                       </span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
