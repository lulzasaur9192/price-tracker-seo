const APIFY_TOKEN = process.env.APIFY_TOKEN || '';
const APIFY_BASE = 'https://api.apify.com/v2';

const ACTOR_IDS = {
  reverb: 'WVThUlOvpGz8JTCOr',
  tcgplayer: process.env.TCGPLAYER_ACTOR_ID || '',
};

interface ApifyRunResult {
  items: Record<string, unknown>[];
}

export async function fetchActorDataset(
  actorId: string,
  params?: Record<string, string>
): Promise<Record<string, unknown>[]> {
  if (!APIFY_TOKEN) {
    console.warn('APIFY_TOKEN not set, returning empty dataset');
    return [];
  }

  const query = new URLSearchParams({ token: APIFY_TOKEN, ...params });
  const res = await fetch(
    `${APIFY_BASE}/acts/${actorId}/runs/last/dataset/items?${query}`
  );

  if (!res.ok) {
    console.error(`Apify fetch failed: ${res.status} ${res.statusText}`);
    return [];
  }

  return res.json();
}

export async function fetchReverbPrices(query: string) {
  return fetchActorDataset(ACTOR_IDS.reverb, { search: query });
}

export async function fetchTCGPrices(query: string) {
  return fetchActorDataset(ACTOR_IDS.tcgplayer, { search: query });
}
