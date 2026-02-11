import { DNDMonster } from "@/interface/monsters/DnDMonster";
import fs from "fs/promises";

const BASE = "https://www.dnd5eapi.co/api/2014";

async function safeFetch<T = any>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}`);
  return res.json() as Promise<T>;
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface MonsterListItem {
  index: string;
  name: string;
  url: string;
}

interface MonsterListResponse {
  count: number;
  results: MonsterListItem[];
}

async function main() {
  console.log("Fetching monster list...");

  const list = await safeFetch<MonsterListResponse>(`${BASE}/monsters`);

  console.log(`Found ${list.count} monsters`);

  const indexes = list.results.map((x: MonsterListItem) => x.index);

  const results: DNDMonster[] = [];

  console.log("Fetching monster details...");

  // Process in chunks of 5 to avoid rate limiting
  for (let i = 0; i < indexes.length; i += 5) {
    const chunk = indexes.slice(i, i + 5);

    console.log(
      `Processing monsters ${i + 1}-${Math.min(i + 5, indexes.length)} of ${indexes.length}...`,
    );

    const data = await Promise.all(
      chunk.map((idx: string) =>
        safeFetch<DNDMonster>(`${BASE}/monsters/${idx}`),
      ),
    );

    results.push(...data);

    // Wait 300ms between batches to avoid 429 errors
    await sleep(300);
  }

  // Save to JSON file
  await fs.writeFile("monsters-cache.json", JSON.stringify(results, null, 2));

  console.log(`✔ Saved ${results.length} monsters to monsters-cache.json`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
