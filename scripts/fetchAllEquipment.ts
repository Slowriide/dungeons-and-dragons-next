import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import fs from "fs/promises";

const BASE = "https://www.dnd5eapi.co/api/2014";

async function safeFetch<T = any>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}`);
  return res.json() as Promise<T>;
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface EquipmentListItem {
  index: string;
  name: string;
  url: string;
}

interface EquipmentListResponse {
  count: number;
  results: EquipmentListItem[];
}

async function main() {
  console.log("Fetching equipment list...");

  const list = await safeFetch<EquipmentListResponse>(`${BASE}/equipment`);

  const indexes = list.results.map((x: EquipmentListItem) => x.index);

  const results: DNDEquipment[] = [];

  console.log("Fetching equipment details...");

  for (let i = 0; i < indexes.length; i += 5) {
    const chunk = indexes.slice(i, i + 5);

    const data = await Promise.all(
      chunk.map((idx: string) =>
        safeFetch<DNDEquipment>(`${BASE}/equipment/${idx}`)
      )
    );

    results.push(...data);

    await sleep(300); // evitar 429
  }

  await fs.writeFile("equipment-cache.json", JSON.stringify(results, null, 2));

  console.log("Saved equipment-cache.json ✔");
}

main();
