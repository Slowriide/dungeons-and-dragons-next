import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Props {
  monster: DNDMonster;
}

export const MonsterSummary = ({ monster }: Props) => {
  return (
    <div className="mb-16">
      {/* Traits */}
      {monster.special_abilities && monster.special_abilities.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
            Traits
          </h2>
          {monster.special_abilities.map((spec) => (
            <div key={spec.name} className="mb-6">
              <h3 className="font-serif text-xl font-semibold">{spec.name}</h3>
              <div className="text-muted-foreground">
                <p className="mb-4">{spec.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Actions */}
      {monster.actions && monster.actions.length > 0 && (
        <section className="space-y-6 border-b border-red-500 pb-8">
          <h2 className="font-serif text-3xl font-semibold text-red-500">
            Actions
          </h2>

          {monster.actions.map((act) => (
            <div key={act.name}>
              <h3 className="font-serif text-xl font-semibold">{act.name}</h3>
              <div className="text-muted-foreground">
                <p className="mb-4">{act.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Legendary Actions */}
      {monster.legendary_actions && monster.legendary_actions.length > 0 && (
        <section className="space-y-6 border-b border-red-500 pb-8 mt-8">
          <h2 className="font-serif text-3xl font-semibold text-red-500">
            Legendary Actions
          </h2>

          {monster.legendary_actions.map((act) => (
            <div key={act.name}>
              <h3 className="font-serif text-xl font-semibold">{act.name}</h3>
              <div className="text-muted-foreground">
                <p className="mb-4">{act.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
