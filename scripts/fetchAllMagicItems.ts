import fs from "fs/promises";

const BASE = "https://www.dnd5eapi.co/api/2014";

async function safeFetch<T = any>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}`);
  return res.json() as Promise<T>;
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface MagicItemListItem {
  index: string;
  name: string;
  url: string;
}

interface MagicItemListResponse {
  count: number;
  results: MagicItemListItem[];
}

async function main() {
  console.log("📥 Fetching magic item list...");

  const list = await safeFetch<MagicItemListResponse>(`${BASE}/magic-items`);
  const indexes = list.results.map((x) => x.index);

  console.log(`Found ${indexes.length} magic items`);
  console.log("📥 Fetching magic item details...");

  const results: any[] = [];

  // Evitar rate limit — mismo sistema que equipment
  const CHUNK_SIZE = 5;
  const DELAY = 300;

  for (let i = 0; i < indexes.length; i += CHUNK_SIZE) {
    const chunk = indexes.slice(i, i + CHUNK_SIZE);

    const data = await Promise.all(
      chunk.map((idx: string) => safeFetch(`${BASE}/magic-items/${idx}`))
    );

    results.push(...data);

    console.log(
      `Fetched ${results.length}/${indexes.length} items (${(
        (results.length / indexes.length) *
        100
      ).toFixed(1)}%)`
    );

    await sleep(DELAY);
  }

  // Guardar archivo
  await fs.writeFile(
    "magic-items-cache.json",
    JSON.stringify(results, null, 2)
  );

  console.log("✔ Saved magic-items-cache.json");
}

main().catch((err) => console.error(err));
