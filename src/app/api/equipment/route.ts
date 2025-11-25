import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET() {
  const data = await fs.readFile("equipment-cache.json", "utf-8");
  const json = JSON.parse(data);

  return NextResponse.json({ equipment: json });
}
