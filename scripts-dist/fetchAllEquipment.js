"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const BASE = "https://www.dnd5eapi.co/api/2014";
async function safeFetch(url) {
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`Failed ${url}`);
    return res.json();
}
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
async function main() {
    console.log("Fetching equipment list...");
    const list = await safeFetch(`${BASE}/equipment`);
    const indexes = list.results.map((x) => x.index);
    const results = [];
    console.log("Fetching equipment details...");
    for (let i = 0; i < indexes.length; i += 5) {
        const chunk = indexes.slice(i, i + 5);
        const data = await Promise.all(chunk.map((idx) => safeFetch(`${BASE}/equipment/${idx}`)));
        results.push(...data);
        await sleep(300); // evitar 429
    }
    await promises_1.default.writeFile("equipment-cache.json", JSON.stringify(results, null, 2));
    console.log("Saved equipment-cache.json ✔");
}
main();
