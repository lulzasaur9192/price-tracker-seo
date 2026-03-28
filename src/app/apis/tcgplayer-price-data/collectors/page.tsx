import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Calculate Your Card Collection Value — TCGPlayer API for Collectors',
  description:
    'Build a card collection valuator with the TCGPlayer Price API. Get real-time market prices for Pokemon, MTG, and Yu-Gi-Oh cards to calculate total collection value.',
  keywords: [
    'card collection value calculator',
    'pokemon collection value api',
    'mtg collection worth',
    'trading card portfolio tracker',
    'tcgplayer collection api',
    'card value lookup api',
    'collection management api',
    'pokemon card value api',
  ],
  openGraph: {
    title: 'Card Collection Value Calculator API',
    description:
      'Real-time TCGPlayer market prices to value your Pokemon, MTG, and Yu-Gi-Oh collection. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/tcgplayer-price-data?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=tcg-collectors';

const pythonExample = `import requests

API_KEY = "YOUR_API_KEY"
HOST = "tcgplayer-price-data.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Your collection
collection = [
    {"name": "Charizard", "game": "pokemon", "qty": 1},
    {"name": "Black Lotus", "game": "mtg", "qty": 1},
    {"name": "Blue-Eyes White Dragon", "game": "yugioh", "qty": 3},
]

total_value = 0
for card in collection:
    resp = requests.get(
        f"https://{HOST}/cards/search",
        headers=headers,
        params={"query": card["name"], "game": card["game"], "limit": 1},
    )
    results = resp.json().get("results", [])
    if results:
        price = results[0].get("marketPrice", 0)
        value = price * card["qty"]
        total_value += value
        print(f"{card['name']} x{card['qty']}: \${value:.2f}")

print(f"\\nTotal Collection Value: \${total_value:.2f}")`;

export default function CollectorsPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Collectors
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Calculate Your Card Collection Value
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Use the TCGPlayer Price API to build a <strong>real-time collection valuator</strong>.
          Get current market prices for every card you own across Pokemon, MTG,
          Yu-Gi-Oh, and Lorcana.
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
          What Collectors Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Portfolio Tracking</h3>
            <p className="text-gray-600 text-sm">
              Track your collection value over time. Know exactly what your
              binder is worth today vs. when you bought each card.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Insurance Documentation</h3>
            <p className="text-gray-600 text-sm">
              Generate collection value reports for insurance purposes. Document
              current market prices with API-sourced data.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Buy/Sell Decisions</h3>
            <p className="text-gray-600 text-sm">
              See which cards have appreciated the most. Identify the best time
              to sell or which cards to pick up while they are undervalued.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Collection Valuator in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I value my entire binder at once?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Loop through your card list and call the API for each card.
              The free tier gives you 200 lookups/month — enough to value a
              small collection. Pro tier gives 5,000/month for larger collections.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What price does "market price" mean?
            </h3>
            <p className="text-gray-600 text-sm">
              Market price is TCGPlayer&apos;s calculated price based on recent
              completed sales. It is the most reliable indicator of what your
              card is actually worth right now.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does it support graded cards?
            </h3>
            <p className="text-gray-600 text-sm">
              The API returns prices by condition (Near Mint, Lightly Played,
              etc.). For PSA/BGS graded card data, check our PSA Population
              Report API.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-50 to-blue-50 border border-amber-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Valuing Your Collection
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
