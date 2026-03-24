import type { Metadata } from 'next';
import { MUSIC_CATEGORIES, getMusicGearByCategory } from '@/data/seed-items';
import PriceCard from '@/components/PriceCard';
import ApiCTA from '@/components/ApiCTA';

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return MUSIC_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = MUSIC_CATEGORIES.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `${cat.name} Prices — Used ${cat.name} Price Guide`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = MUSIC_CATEGORIES.find((c) => c.slug === params.category);
  const items = getMusicGearByCategory(params.category);

  if (!cat) {
    return <p>Category not found.</p>;
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/music-gear" className="hover:text-blue-600">
          Music Gear
        </a>{' '}
        / <span className="text-gray-900">{cat.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {cat.name} Price Guide
      </h1>
      <p className="text-gray-600 mb-8">{cat.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {items.map((item) => (
          <PriceCard
            key={item.slug}
            name={item.name}
            avgPrice={item.avgPrice}
            lowPrice={item.lowPrice}
            highPrice={item.highPrice}
            priceHistory={item.priceHistory}
            href={`/music-gear/${params.category}/${item.slug}`}
            subtitle={item.brand}
          />
        ))}
      </div>

      <ApiCTA itemName={cat.name} category="music-gear" />
    </>
  );
}
