const RAPIDAPI_URL = 'https://rapidapi.com/user/lulzasaur9192';

interface ApiCTAProps {
  itemName: string;
  category: 'music-gear' | 'trading-cards';
}

export default function ApiCTA({ itemName, category }: ApiCTAProps) {
  const apiLabel =
    category === 'music-gear'
      ? 'Reverb Price Data API'
      : 'TCGPlayer Price Data API';

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Get {itemName} price data via API
      </h3>
      <p className="text-gray-600 mb-4">
        Access real-time pricing, historical trends, and market data
        programmatically. Free tier available — no credit card required.
      </p>
      <a
        href={RAPIDAPI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try {apiLabel} — Free
      </a>
    </div>
  );
}
