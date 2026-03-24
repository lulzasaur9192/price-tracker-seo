export interface PricePoint {
  date: string;
  price: number;
  condition: string;
  source: string;
}

export interface MusicGearItem {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  avgPrice: number;
  lowPrice: number;
  highPrice: number;
  priceHistory: PricePoint[];
  description: string;
  imageAlt: string;
}

export interface TradingCard {
  slug: string;
  name: string;
  game: string;
  gameSlug: string;
  set: string;
  rarity: string;
  avgPrice: number;
  lowPrice: number;
  highPrice: number;
  priceHistory: PricePoint[];
  description: string;
  imageAlt: string;
}

export type PriceItem = MusicGearItem | TradingCard;

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  itemCount: number;
}

export interface GameInfo {
  slug: string;
  name: string;
  description: string;
  cardCount: number;
}
