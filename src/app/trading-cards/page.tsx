import type { Metadata } from 'next';
import { TCG_GAMES, loadTradingCards, getTradingCardsByGame } from '@/data/items';
import PriceCard from '@/components/PriceCard';

export const metadata: Metadata = {
  title: 'Trading Card Prices — Pokemon, MTG, Yu-Gi-Oh',
  description:
    'Track trading card prices for Pokemon, Magic: The Gathering, and Yu-Gi-Oh. Real market data from TCGPlayer.',
};

export default async function TradingCardsPage() {
  const allCards = await loadTradingCards();

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Trading Card Price Tracker
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Track card prices for Pokemon, Magic: The Gathering, and Yu-Gi-Oh.
        Market data sourced from TCGPlayer — updated regularly.
      </p>

      {TCG_GAMES.map((game) => {
        const cards = getTradingCardsByGame(game.slug, allCards).slice(0, 4);
        return (
          <section key={game.slug} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {game.name}
                </h2>
                <p className="text-sm text-gray-500">{game.description}</p>
              </div>
              <a
                href={`/trading-cards/${game.slug}`}
                className="text-blue-600 text-sm font-medium hover:underline whitespace-nowrap"
              >
                View all {game.name}
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cards.map((card) => (
                <PriceCard
                  key={card.slug}
                  name={card.name}
                  avgPrice={card.avgPrice}
                  lowPrice={card.lowPrice}
                  highPrice={card.highPrice}
                  priceHistory={card.priceHistory}
                  href={`/trading-cards/${game.slug}/${card.slug}`}
                  subtitle={`${card.set} — ${card.rarity}`}
                />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
