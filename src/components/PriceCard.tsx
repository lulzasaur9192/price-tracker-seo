interface PriceCardProps {
  name: string;
  avgPrice: number;
  lowPrice: number;
  highPrice: number;
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
  href,
  subtitle,
}: PriceCardProps) {
  const inner = (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{name}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-3">{subtitle}</p>}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-gray-900">
          {formatPrice(avgPrice)}
        </span>
        <span className="text-sm text-gray-500">avg</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Low: {formatPrice(lowPrice)}</span>
        <span>High: {formatPrice(highPrice)}</span>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{inner}</a>;
  }
  return inner;
}
