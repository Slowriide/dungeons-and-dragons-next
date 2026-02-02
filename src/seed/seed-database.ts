import "dotenv/config";
import prisma from "@/lib/prisma";
import { seedCharacters } from "./seed";

async function main() {
  if (process.env.NODE_ENV === "production") return;

  await prisma.character.deleteMany();

  const characters = seedCharacters;

  await prisma.character.createMany({
    data: characters,
  });

  console.log("Seed ejecutado correctamente");
}

if (process.env.NODE_ENV !== "production") {
  main();
}
