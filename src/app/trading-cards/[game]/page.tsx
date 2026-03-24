import type { Metadata } from 'next';
import { TCG_GAMES, getTradingCardsByGame } from '@/data/seed-items';
import PriceCard from '@/components/PriceCard';
import ApiCTA from '@/components/ApiCTA';

interface Props {
  params: { game: string };
}

export function generateStaticParams() {
  return TCG_GAMES.map((game) => ({ game: game.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const game = TCG_GAMES.find((g) => g.slug === params.game);
  if (!game) return {};
  return {
    title: `${game.name} Card Prices — ${game.name} Price Guide`,
    description: game.description,
  };
}

export default function GamePage({ params }: Props) {
  const game = TCG_GAMES.find((g) => g.slug === params.game);
  const cards = getTradingCardsByGame(params.game);

  if (!game) {
    return <p>Game not found.</p>;
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/trading-cards" className="hover:text-blue-600">
          Trading Cards
        </a>{' '}
        / <span className="text-gray-900">{game.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {game.name} Price Guide
      </h1>
      <p className="text-gray-600 mb-8">{game.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cards.map((card) => (
          <PriceCard
            key={card.slug}
            name={card.name}
            avgPrice={card.avgPrice}
            lowPrice={card.lowPrice}
            highPrice={card.highPrice}
            priceHistory={card.priceHistory}
            href={`/trading-cards/${params.game}/${card.slug}`}
            subtitle={`${card.set} — ${card.rarity}`}
          />
        ))}
      </div>

      <ApiCTA itemName={game.name} category="trading-cards" />
    </>
  );
}
