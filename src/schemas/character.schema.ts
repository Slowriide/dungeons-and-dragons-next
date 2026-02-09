import { DNDClass } from "@/interface/classes/DnDClass";
import z from "zod";

// Schema en StepBasic
const createClassSchema = (classDetails: DNDClass | null) => {
  const baseSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    class: z.string().min(1, "Debes seleccionar una clase"),
    level: z.number().int().min(1).max(20),
  });

  // Si no hay clase seleccionada, solo validamos lo básico
  if (!classDetails) return baseSchema;

  // Schema dinámico según la clase seleccionada
  const requiredSkills = classDetails.proficiency_choices[0]?.choose || 0;

  return baseSchema.extend({
    skills: z
      .array(z.string())
      .length(
        requiredSkills,
        `Debes seleccionar exactamente ${requiredSkills} habilidades`,
      ),
    instruments:
      classDetails.name === "Bard"
        ? z
            .array(z.string())
            .length(classDetails.proficiency_choices[1]?.choose || 0)
        : z.array(z.string()).optional(),
    tools:
      classDetails.name === "Monk"
        ? z
            .array(z.string())
            .length(1, "Debes seleccionar 1 herramienta o instrumento")
        : z.array(z.string()).optional(),
  });
};
