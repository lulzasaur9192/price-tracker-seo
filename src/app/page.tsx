import { MUSIC_GEAR_ITEMS, TRADING_CARDS } from '@/data/seed-items';
import PriceCard from '@/components/PriceCard';

export default function HomePage() {
  const featuredGear = MUSIC_GEAR_ITEMS.slice(0, 4);
  const featuredCards = TRADING_CARDS.slice(0, 4);

  return (
    <>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Free Price Tracker for Music Gear & Trading Cards
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Track used prices from Reverb and TCGPlayer. See market trends, price
          history, and fair market values for guitars, synths, Pokemon cards,
          MTG, and more.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/music-gear"
            className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Music Gear
          </a>
          <a
            href="/trading-cards"
            className="bg-gray-100 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Browse Trading Cards
          </a>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Trending Music Gear
          </h2>
          <a
            href="/music-gear"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGear.map((item) => (
            <PriceCard
              key={item.slug}
              name={item.name}
              avgPrice={item.avgPrice}
              lowPrice={item.lowPrice}
              highPrice={item.highPrice}
              priceHistory={item.priceHistory}
              href={`/music-gear/${item.categorySlug}/${item.slug}`}
              subtitle={item.brand}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Trending Trading Cards
          </h2>
          <a
            href="/trading-cards"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCards.map((card) => (
            <PriceCard
              key={card.slug}
              name={card.name}
              avgPrice={card.avgPrice}
              lowPrice={card.lowPrice}
              highPrice={card.highPrice}
              priceHistory={card.priceHistory}
              href={`/trading-cards/${card.gameSlug}/${card.slug}`}
              subtitle={`${card.game} — ${card.set}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Need price data for your app?
        </h2>
        <p className="text-gray-600 mb-4">
          Access our pricing data via API. Free tier available with 50
          requests/month.
        </p>
        <a
          href="https://rapidapi.com/user/YOUR_RAPIDAPI_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore the API
        </a>
      </section>
    </>
  );
}
