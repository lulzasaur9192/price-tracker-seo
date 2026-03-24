const APIFY_TOKEN = process.env.APIFY_TOKEN || '';
const APIFY_BASE = 'https://api.apify.com/v2';

const ACTOR_IDS = {
  reverb: 'TrMcLws2pAsIrKCyu',
  tcgplayer: 'O0sgde2LgujyWHvNt',
};

export async function fetchActorDataset(
  actorId: string,
  limit?: number
): Promise<Record<string, unknown>[]> {
  if (!APIFY_TOKEN) {
    console.warn('APIFY_TOKEN not set, skipping Apify fetch');
    return [];
  }

  const params = new URLSearchParams({ token: APIFY_TOKEN });
  if (limit) params.set('limit', String(limit));

  const res = await fetch(
    `${APIFY_BASE}/acts/${actorId}/runs/last/dataset/items?${params}`
  );

  if (!res.ok) {
    console.error(`Apify fetch failed for ${actorId}: ${res.status} ${res.statusText}`);
    return [];
  }

  return res.json();
}

export async function fetchReverbListings(limit = 500): Promise<Record<string, unknown>[]> {
  return fetchActorDataset(ACTOR_IDS.reverb, limit);
}

export async function fetchTCGPlayerListings(limit = 500): Promise<Record<string, unknown>[]> {
  return fetchActorDataset(ACTOR_IDS.tcgplayer, limit);
}
