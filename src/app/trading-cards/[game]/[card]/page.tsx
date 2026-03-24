import type { Metadata } from 'next';
import { TCG_GAMES, loadTradingCards, getTradingCard } from '@/data/items';
import ApiCTA from '@/components/ApiCTA';

interface Props {
  params: { game: string; card: string };
}

export async function generateStaticParams() {
  const cards = await loadTradingCards();
  return cards.map((card) => ({
    game: card.gameSlug,
    card: card.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cards = await loadTradingCards();
  const card = getTradingCard(params.game, params.card, cards);
  if (!card) return {};
  return {
    title: `${card.name} Price — ${card.game} ${card.set} Market Value`,
    description: `${card.name} (${card.set}, ${card.rarity}) price: avg $${card.avgPrice.toLocaleString()}, low $${card.lowPrice.toLocaleString()}, high $${card.highPrice.toLocaleString()}. ${card.description}`,
    openGraph: {
      title: `${card.name} Price Guide`,
      description: card.description,
    },
  };
}

function formatPrice(price: number): string {
  return price >= 1000
    ? `$${price.toLocaleString('en-US')}`
    : `$${price.toFixed(price < 1 ? 2 : 0)}`;
}

export default async function CardPage({ params }: Props) {
  const cards = await loadTradingCards();
  const card = getTradingCard(params.game, params.card, cards);
  const game = TCG_GAMES.find((g) => g.slug === params.game);

  if (!card || !game) {
    return <p>Card not found.</p>;
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/trading-cards" className="hover:text-blue-600">
          Trading Cards
        </a>{' '}
        /{' '}
        <a
          href={`/trading-cards/${params.game}`}
          className="hover:text-blue-600"
        >
          {game.name}
        </a>{' '}
        / <span className="text-gray-900">{card.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {card.name} Price Guide
      </h1>
      <p className="text-gray-600 mb-1">{card.description}</p>
      <p className="text-sm text-gray-500 mb-8">
        {card.game} — {card.set} — {card.rarity}
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-1">Average Price</p>
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(card.avgPrice)}
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-1">Low</p>
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(card.lowPrice)}
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-1">High</p>
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(card.highPrice)}
          </p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Price History
        </h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Date
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Price
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Condition
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {card.priceHistory.map((point, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="px-4 py-3">{point.date}</td>
                  <td className="px-4 py-3 font-medium">
                    {formatPrice(point.price)}
                  </td>
                  <td className="px-4 py-3">{point.condition}</td>
                  <td className="px-4 py-3 text-gray-500">{point.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          About {card.name}
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            The {card.name} from the {card.set} set ({card.rarity}) currently
            has an average market price of {formatPrice(card.avgPrice)} on
            TCGPlayer. Prices range from {formatPrice(card.lowPrice)} for
            lightly played copies to {formatPrice(card.highPrice)} for near
            mint or graded examples.
          </p>
          <p>
            This {card.game} price guide is updated regularly using real
            transaction data. Use it to determine fair market value before
            buying or selling.
          </p>
        </div>
      </section>

      <ApiCTA itemName={card.name} category="trading-cards" />
    </>
  );
}
