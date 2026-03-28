import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Card Arbitrage & Price Comparison API — TCGPlayer for Resellers',
  description:
    'Find underpriced trading cards and arbitrage opportunities with the TCGPlayer Price API. Compare market prices across Pokemon, MTG, and Yu-Gi-Oh listings.',
  keywords: [
    'card arbitrage api',
    'tcgplayer price comparison',
    'pokemon card reselling api',
    'mtg arbitrage tool',
    'card flipping api',
    'underpriced cards finder',
    'tcg price comparison api',
    'trading card reseller tool',
  ],
  openGraph: {
    title: 'Card Arbitrage & Price Comparison API for Resellers',
    description:
      'Find underpriced cards and arbitrage opportunities across TCGPlayer. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/tcgplayer-price-data?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=tcg-resellers';

const pythonExample = `import requests

API_KEY = "YOUR_API_KEY"
HOST = "tcgplayer-price-data.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Find cards where lowest listing is significantly below market price
resp = requests.get(
    f"https://{HOST}/cards/search",
    headers=headers,
    params={"query": "pikachu", "game": "pokemon", "limit": 20},
)

for card in resp.json().get("results", []):
    market = card.get("marketPrice", 0)
    lowest = card.get("lowestPrice", 0)
    if market and lowest and lowest < market * 0.75:
        margin = ((market - lowest) / lowest) * 100
        print(f"DEAL: {card['name']}")
        print(f"  Lowest: \${lowest:.2f} | Market: \${market:.2f} | Margin: {margin:.0f}%")
        print(f"  {card.get('url', '')}\\n")`;

export default function ResellersPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Resellers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Card Arbitrage & Price Comparison API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Find <strong>underpriced cards</strong> on TCGPlayer. Compare lowest
          listings against market prices to spot arbitrage opportunities across
          Pokemon, MTG, Yu-Gi-Oh, and Lorcana.
        </p>
        <a
          href={RAPIDAPI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Get Free API Key
        </a>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          How Resellers Use This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Spot Underpriced Cards</h3>
            <p className="text-gray-600 text-sm">
              Compare the lowest listing price against the market median. Cards
              listed 25%+ below market are arbitrage candidates.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform Arbitrage</h3>
            <p className="text-gray-600 text-sm">
              Pull TCGPlayer prices and compare against eBay, CardMarket, or
              your local shop prices to find cross-platform margins.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Automated Price Scanning</h3>
            <p className="text-gray-600 text-sm">
              Build a daily scanner that checks hundreds of cards and alerts
              you when margins exceed your threshold.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Find Underpriced Cards
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How often are prices updated?
            </h3>
            <p className="text-gray-600 text-sm">
              Prices reflect current TCGPlayer marketplace data. Market price
              is based on recent completed sales; lowest price shows the
              cheapest current listing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I scan entire sets?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Search by set name to get all cards in a set with their
              current prices. The Pro tier (5,000 req/month) is ideal for
              scanning multiple sets daily.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does it include listing counts?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Each result includes total listings, which helps you assess
              liquidity. Cards with many listings and low prices may move
              faster than rare singles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Finding Card Deals
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Free API key. 200 requests/month. No credit card.
        </p>
        <a
          href={RAPIDAPI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Get Free API Key
        </a>
      </section>
    </>
  );
}
