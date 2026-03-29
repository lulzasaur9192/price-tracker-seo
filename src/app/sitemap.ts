import { MetadataRoute } from 'next';
import {
  MUSIC_CATEGORIES,
  TCG_GAMES,
  loadMusicGear,
  loadTradingCards,
} from '@/data/items';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pricetrackr.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [musicItems, tradingCards] = await Promise.all([
    loadMusicGear(),
    loadTradingCards(),
  ]);

  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/music-gear`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/trading-cards`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
  ];

  const apiLandingPages: MetadataRoute.Sitemap = [
    'tcgplayer-price-data',
    'psa-card-population-report',
    'nurse-license-verification',
    'sec-edgar-insider-trading',
    'agent-audit-log',
  ].map((slug) => ({
    url: `${BASE_URL}/apis/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Intent-specific subpages for each API
  const apiSubpages: MetadataRoute.Sitemap = [
    // TCGPlayer
    'tcgplayer-price-data/collectors',
    'tcgplayer-price-data/resellers',
    'tcgplayer-price-data/price-alerts',
    'tcgplayer-price-data/store-inventory',
    'tcgplayer-price-data/discord-bots',
    // Nurse License Verification
    'nurse-license-verification/staffing-agencies',
    'nurse-license-verification/hospitals',
    'nurse-license-verification/credentialing',
    'nurse-license-verification/telemedicine',
    // SEC EDGAR Insider Trading
    'sec-edgar-insider-trading/quant-trading',
    'sec-edgar-insider-trading/compliance',
    'sec-edgar-insider-trading/research',
    'sec-edgar-insider-trading/alerts',
    // Agent Audit Log
    'agent-audit-log/enterprise-compliance',
    'agent-audit-log/ai-safety',
    'agent-audit-log/developers',
  ].map((path) => ({
    url: `${BASE_URL}/apis/${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = MUSIC_CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/music-gear/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const gearPages: MetadataRoute.Sitemap = musicItems.map((item) => ({
    url: `${BASE_URL}/music-gear/${item.categorySlug}/${item.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const gamePages: MetadataRoute.Sitemap = TCG_GAMES.map((game) => ({
    url: `${BASE_URL}/trading-cards/${game.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const cardPages: MetadataRoute.Sitemap = tradingCards.map((card) => ({
    url: `${BASE_URL}/trading-cards/${card.gameSlug}/${card.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...apiLandingPages, ...apiSubpages, ...categoryPages, ...gearPages, ...gamePages, ...cardPages];
}
