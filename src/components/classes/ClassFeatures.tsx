import { getClassesFeatures } from "@/actions/classes/getClassesFeatures";
import { getClassFeaturesDetails } from "@/actions/classes/getClassFeaturesDetails";

interface Props {
  classIndex: string;
}

export const ClassFeatures = async ({ classIndex }: Props) => {
  const featuresList = await getClassesFeatures({ classIndex });

  const features = featuresList.classFeatures;

  return (
    <div className="space-y-6">
      <h1 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
        Features
      </h1>
      {features.map((feature) => (
        <div key={feature.index}>
          <h3 className="font-serif text-xl font-semibold mb-2">
            Level {feature.level}: {feature.name}
          </h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};
