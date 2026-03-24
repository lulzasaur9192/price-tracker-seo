import type { Metadata } from 'next';
import { MUSIC_CATEGORIES, loadMusicGear, getMusicGearByCategory } from '@/data/items';
import PriceCard from '@/components/PriceCard';

export const metadata: Metadata = {
  title: 'Music Gear Prices — Guitars, Amps, Pedals, Synths',
  description:
    'Track used prices for guitars, amplifiers, effects pedals, synthesizers, and recording gear. Real market data from Reverb.',
};

export default async function MusicGearPage() {
  const allItems = await loadMusicGear();

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Music Gear Price Tracker
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Track used prices for guitars, amps, pedals, synths, drums, and
        recording gear. Data sourced from the Reverb marketplace — updated
        regularly.
      </p>

      {MUSIC_CATEGORIES.map((cat) => {
        const items = getMusicGearByCategory(cat.slug, allItems).slice(0, 4);
        return (
          <section key={cat.slug} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{cat.name}</h2>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </div>
              <a
                href={`/music-gear/${cat.slug}`}
                className="text-blue-600 text-sm font-medium hover:underline whitespace-nowrap"
              >
                View all {cat.name}
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item) => (
                <PriceCard
                  key={item.slug}
                  name={item.name}
                  avgPrice={item.avgPrice}
                  lowPrice={item.lowPrice}
                  highPrice={item.highPrice}
                  priceHistory={item.priceHistory}
                  href={`/music-gear/${cat.slug}/${item.slug}`}
                  subtitle={item.brand}
                />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
