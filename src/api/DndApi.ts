// lib/dndClient.ts

const BASE_URL = "https://www.dnd5eapi.co/api/2014";

function buildQuery(params?: Record<string, any>) {
  if (!params) return "";

  const qs = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    // 🟡 Si es array → agregar cada valor
    if (Array.isArray(value)) {
      value.forEach((v) => qs.append(key, String(v)));
      return;
    }

    // 🔵 si no es array → caso normal
    qs.append(key, String(value));
  });

  return qs.size ? `?${qs.toString()}` : "";
}

export const dndFetch = {
  async get<T>(endpoint: string, options?: { params?: Record<string, any> }) {
    const url = `${BASE_URL}${endpoint}${buildQuery(options?.params)}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`D&D API Error: ${res.status}`);
    }

    return (await res.json()) as T;
  },
};
