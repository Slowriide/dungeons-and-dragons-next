import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Props {
  monster: DNDMonster;
}

/**
 * MonsterSummary
 *
 * Purpose:
 * - Display the monster's core abilities and combat options
 * - Structure content for readability and SEO
 */
export const MonsterSummary = ({ monster }: Props) => {
  return (
    <article className="mb-10">
      {/* Traits */}
      {monster.special_abilities && monster.special_abilities.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
            Traits
          </h2>
          <ul>
            {monster.special_abilities.map((spec) => (
              <li key={spec.name} className="mb-6">
                <h2 className="font-serif text-xl font-semibold">
                  {spec.name}
                </h2>
                <div className="text-muted-foreground">
                  <p className="mb-4">{spec.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Actions */}
      {monster.actions && monster.actions.length > 0 && (
        <section className="space-y-6 border-b border-red-500 pb-8">
          <h2 className="font-serif text-3xl font-semibold text-red-500">
            Actions
          </h2>

          <ul>
            {monster.actions.map((act) => (
              <li key={act.name}>
                <h3 className="font-serif text-xl font-semibold">{act.name}</h3>
                <div className="text-muted-foreground">
                  <p className="mb-4">{act.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Legendary Actions */}
      {monster.legendary_actions && monster.legendary_actions.length > 0 && (
        <section className="space-y-6 border-b border-red-500 pb-8 mt-8">
          <h2 className="font-serif text-3xl font-semibold text-red-500">
            Legendary Actions
          </h2>

          <ul>
            {monster.legendary_actions.map((act) => (
              <li key={act.name}>
                <h3 className="font-serif text-xl font-semibold">{act.name}</h3>
                <div className="text-muted-foreground">
                  <p className="mb-4">{act.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};
