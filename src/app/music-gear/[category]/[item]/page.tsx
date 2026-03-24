import type { Metadata } from 'next';
import {
  MUSIC_CATEGORIES,
  MUSIC_GEAR_ITEMS,
  getMusicGearItem,
} from '@/data/seed-items';
import ApiCTA from '@/components/ApiCTA';

interface Props {
  params: { category: string; item: string };
}

export function generateStaticParams() {
  return MUSIC_GEAR_ITEMS.map((item) => ({
    category: item.categorySlug,
    item: item.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getMusicGearItem(params.category, params.item);
  if (!item) return {};
  return {
    title: `${item.name} Price Guide — Used ${item.name} Market Value`,
    description: `${item.name} used price: avg $${item.avgPrice.toLocaleString()}, low $${item.lowPrice.toLocaleString()}, high $${item.highPrice.toLocaleString()}. ${item.description}`,
    openGraph: {
      title: `${item.name} Price Guide`,
      description: item.description,
    },
  };
}

function formatPrice(price: number): string {
  return price >= 1000
    ? `$${price.toLocaleString('en-US')}`
    : `$${price.toFixed(0)}`;
}

export default function ItemPage({ params }: Props) {
  const item = getMusicGearItem(params.category, params.item);
  const cat = MUSIC_CATEGORIES.find((c) => c.slug === params.category);

  if (!item || !cat) {
    return <p>Item not found.</p>;
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/music-gear" className="hover:text-blue-600">
          Music Gear
        </a>{' '}
        /{' '}
        <a
          href={`/music-gear/${params.category}`}
          className="hover:text-blue-600"
        >
          {cat.name}
        </a>{' '}
        / <span className="text-gray-900">{item.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {item.name} Price Guide
      </h1>
      <p className="text-gray-600 mb-8">{item.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-1">Average Price</p>
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(item.avgPrice)}
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-1">Low</p>
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(item.lowPrice)}
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center">
          <p className="text-sm text-gray-600 mb-1">High</p>
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(item.highPrice)}
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
              {item.priceHistory.map((point, i) => (
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
          About the {item.name}
        </h2>
        <div className="prose prose-gray max-w-none">
          <p>
            The {item.name} by {item.brand} currently has an average used market
            price of {formatPrice(item.avgPrice)} based on recent sales on the
            Reverb marketplace. Prices range from {formatPrice(item.lowPrice)} for
            items in good condition to {formatPrice(item.highPrice)} for mint or
            collector-grade examples.
          </p>
          <p>
            This {item.category.toLowerCase()} price guide is updated regularly
            using real transaction data. Use it to determine fair market value
            before buying or selling your {item.name}.
          </p>
        </div>
      </section>

      <ApiCTA itemName={item.name} category="music-gear" />
    </>
  );
}
