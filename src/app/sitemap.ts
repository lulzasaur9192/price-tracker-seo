import { MetadataRoute } from 'next';
import {
  MUSIC_CATEGORIES,
  MUSIC_GEAR_ITEMS,
  TCG_GAMES,
  TRADING_CARDS,
} from '@/data/seed-items';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pricetrackr.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/music-gear`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/trading-cards`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
  ];

  const categoryPages: MetadataRoute.Sitemap = MUSIC_CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/music-gear/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const gearPages: MetadataRoute.Sitemap = MUSIC_GEAR_ITEMS.map((item) => ({
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

  const cardPages: MetadataRoute.Sitemap = TRADING_CARDS.map((card) => ({
    url: `${BASE_URL}/trading-cards/${card.gameSlug}/${card.slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...gearPages, ...gamePages, ...cardPages];
}
