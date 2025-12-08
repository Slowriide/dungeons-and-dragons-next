import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Props {
  monster: DNDMonster;
}

export const MonsterSummary = async ({ monster }: Props) => {
  return (
    <div className="mb-16">
      {/* Traits */}
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
          Traits
        </h2>
        {monster.special_abilities &&
          monster.special_abilities.map((spec) => (
            <div>
              <h3 className="font-serif text-xl font-semibold">{spec.name}</h3>
              <div className="text-muted-foreground">
                <p className="mb-4">{spec.desc}</p>
              </div>
            </div>
          ))}
      </section>

      {/* Actions */}
      <section className="space-y-6 border-b border-red-500 pb-8">
        <h2 className=" font-serif text-3xl font-semibold text-red-500 ">
          Actions
        </h2>

        {monster.actions &&
          monster.actions.map((act) => (
            <div>
              <h3 className="font-serif text-xl font-semibold">{act.name}</h3>
              <div className="text-muted-foreground">
                <p className="mb-4">{act.desc}</p>
              </div>
            </div>
          ))}
      </section>

      {/* Legendary Actions */}
      <section className="space-y-6 border-b border-red-500 pb-8 mt-8">
        <h2 className=" font-serif text-3xl font-semibold text-red-500 ">
          Legendary Actions
        </h2>

        {monster.legendary_actions &&
          monster.legendary_actions.map((act) => (
            <div>
              <h3 className="font-serif text-xl font-semibold">{act.name}</h3>
              <div className="text-muted-foreground">
                <p className="mb-4">{act.desc}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};
