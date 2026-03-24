import { PricePoint } from '@/lib/types';

interface PriceCardProps {
  name: string;
  avgPrice: number;
  lowPrice: number;
  highPrice: number;
  priceHistory: PricePoint[];
  href?: string;
  subtitle?: string;
}

function formatPrice(price: number): string {
  return price >= 1000
    ? `$${price.toLocaleString('en-US')}`
    : `$${price.toFixed(price < 1 ? 2 : 0)}`;
}

export default function PriceCard({
  name,
  avgPrice,
  lowPrice,
  highPrice,
  priceHistory,
  href,
  subtitle,
}: PriceCardProps) {
  const lastTwo = priceHistory.slice(-2);
  const trend =
    lastTwo.length === 2
      ? ((lastTwo[1].price - lastTwo[0].price) / lastTwo[0].price) * 100
      : 0;

  const inner = (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{name}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-3">{subtitle}</p>}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-gray-900">
          {formatPrice(avgPrice)}
        </span>
        <span className="text-sm text-gray-500">avg</span>
        {trend !== 0 && (
          <span
            className={`text-sm font-medium ${
              trend > 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend > 0 ? '+' : ''}
            {trend.toFixed(1)}%
          </span>
        )}
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Low: {formatPrice(lowPrice)}</span>
        <span>High: {formatPrice(highPrice)}</span>
      </div>
      {priceHistory.length > 0 && (
        <div className="mt-3 flex items-end gap-1 h-12">
          {priceHistory.map((point, i) => {
            const max = Math.max(...priceHistory.map((p) => p.price));
            const min = Math.min(...priceHistory.map((p) => p.price));
            const range = max - min || 1;
            const height = ((point.price - min) / range) * 100;
            return (
              <div
                key={i}
                className="flex-1 bg-blue-200 rounded-t"
                style={{ height: `${Math.max(height, 10)}%` }}
                title={`${point.date}: ${formatPrice(point.price)}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );

  if (href) {
    return <a href={href} className="block">{inner}</a>;
  }
  return inner;
}
