import { z } from "zod";

export const attributesSchema = z.object({
  strength: z.number().min(1).max(20),
  dexterity: z.number().min(1).max(20),
  constitution: z.number().min(1).max(20),
  intelligence: z.number().min(1).max(20),
  wisdom: z.number().min(1).max(20),
  charisma: z.number().min(1).max(20),
});

export const characterSchema = z.object({
  index: z.uuid().optional().nullable(),
  name: z.string().min(1, "Name is too short"),
  hitPoints: z.number().min(1),
  level: z.number().min(1).max(20),

  race: z.string().min(1, "Select a race"),
  class: z.string().min(1, "Select a class"),

  attributes: attributesSchema,

  skills: z.record(z.string(), z.number()),

  equipment: z.object({
    weapons: z.array(z.string()).optional().nullable(),
    armor: z.string().optional().nullable(),
    items: z.array(z.string()).optional().nullable(),
    gold: z.number().min(0),
  }),
});

export type CharacterSchema = z.infer<typeof characterSchema>;
