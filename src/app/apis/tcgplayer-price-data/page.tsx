import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'TCGPlayer Price Data API — Real-Time Pokemon, MTG & Yu-Gi-Oh Card Prices',
  description:
    'Access real-time trading card prices from TCGPlayer via API. Get market prices, lowest listings, and card details for Pokemon, Magic: The Gathering, Yu-Gi-Oh, and Lorcana. Free tier available.',
  keywords: [
    'trading card price api',
    'pokemon card price api',
    'mtg price api',
    'tcgplayer api',
    'yugioh price api',
    'lorcana price api',
    'tcg market price data',
    'card price lookup api',
  ],
  openGraph: {
    title: 'TCGPlayer Price Data API — Real-Time Trading Card Prices',
    description:
      'Get real-time market prices for Pokemon, MTG, Yu-Gi-Oh, and Lorcana cards via a simple REST API. Free tier with 200 requests/month.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/tcgplayer-price-data?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=tcg-api-page';

const curlExample = `curl -X GET "https://tcgplayer-price-data.p.rapidapi.com/cards/search?query=charizard&game=pokemon" \\
  -H "X-RapidAPI-Key: YOUR_API_KEY" \\
  -H "X-RapidAPI-Host: tcgplayer-price-data.p.rapidapi.com"`;

const pythonExample = `import requests

url = "https://tcgplayer-price-data.p.rapidapi.com/cards/search"
params = {"query": "charizard", "game": "pokemon"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "tcgplayer-price-data.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

for card in data["results"]:
    print(f"{card['name']} — Market: \${card['marketPrice']}")`;

const jsExample = `const response = await fetch(
  "https://tcgplayer-price-data.p.rapidapi.com/cards/search?query=charizard&game=pokemon",
  {
    headers: {
      "X-RapidAPI-Key": "YOUR_API_KEY",
      "X-RapidAPI-Host": "tcgplayer-price-data.p.rapidapi.com",
    },
  }
);

const data = await response.json();
data.results.forEach((card) => {
  console.log(\`\${card.name} — Market: \$\${card.marketPrice}\`);
});`;

export default function TCGPlayerPriceDataPage() {
  return (
    <>
      {/* GOOGLE_ADS_CONVERSION_TAG_PLACEHOLDER */}

      {/* Hero */}
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          REST API
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          TCGPlayer Price Data API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Real-time marketplace pricing for <strong>Pokemon</strong>,{' '}
          <strong>Magic: The Gathering</strong>, <strong>Yu-Gi-Oh</strong>, and{' '}
          <strong>Lorcana</strong> trading cards. Market prices, lowest listings,
          and full card details in one simple API.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={RAPIDAPI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get Free API Key
          </a>
          <a
            href="#code-examples"
            className="bg-gray-100 text-gray-800 font-medium px-8 py-3.5 rounded-lg hover:bg-gray-200 transition-colors text-lg"
          >
            View Code Examples
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          What You Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F4B0;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Real-Time Market Prices
            </h3>
            <p className="text-gray-600 text-sm">
              Current market prices, lowest listings, and price trends pulled
              directly from TCGPlayer marketplace data.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F3B4;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              4 Major TCGs Supported
            </h3>
            <p className="text-gray-600 text-sm">
              Pokemon, Magic: The Gathering, Yu-Gi-Oh, and Disney Lorcana.
              Search by card name, set, or product ID.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x26A1;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Card Details & Metadata
            </h3>
            <p className="text-gray-600 text-sm">
              Card images, set info, rarity, condition-based pricing, and
              number of listings — everything you need for price tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Free', price: '$0', requests: '200/mo', highlight: false },
            { name: 'Pro', price: '$9.99', requests: '5,000/mo', highlight: true },
            { name: 'Ultra', price: '$29.99', requests: '25,000/mo', highlight: false },
            { name: 'Mega', price: '$99.99', requests: '100,000/mo', highlight: false },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-5 text-center ${
                tier.highlight
                  ? 'bg-blue-600 text-white ring-2 ring-blue-600'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className={`text-sm font-medium mb-1 ${tier.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                {tier.name}
              </div>
              <div className={`text-2xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                {tier.price}
              </div>
              <div className={`text-sm ${tier.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                {tier.requests}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Built For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Price Tracking Apps',
              desc: 'Build a card price tracker that monitors market values and alerts users to price drops or spikes.',
            },
            {
              title: 'Collection Managers',
              desc: 'Let users value their collections in real time by pulling current market prices for every card they own.',
            },
            {
              title: 'Marketplace Bots & Arbitrage',
              desc: 'Compare TCGPlayer prices against eBay, CardMarket, or local shops to find underpriced cards.',
            },
            {
              title: 'Content Creators & Analysts',
              desc: 'Generate market reports, set reviews, and investment analysis with programmatic price data.',
            },
          ].map((uc) => (
            <div key={uc.title} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{uc.title}</h3>
              <p className="text-gray-600 text-sm">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Case Deep Dives */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Explore Use Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Collection Valuator', desc: 'Calculate what your binder is worth with real-time prices.', href: '/apis/tcgplayer-price-data/collectors' },
            { title: 'Card Arbitrage', desc: 'Find underpriced cards and cross-platform margins.', href: '/apis/tcgplayer-price-data/resellers' },
            { title: 'Store Inventory Pricing', desc: 'Auto-price your card shop singles against market data.', href: '/apis/tcgplayer-price-data/store-inventory' },
            { title: 'Discord Price Bot', desc: 'Add /price commands to your Discord server.', href: '/apis/tcgplayer-price-data/discord-bots' },
            { title: 'Price Drop Alerts', desc: 'Get notified when cards hit your target price.', href: '/apis/tcgplayer-price-data/price-alerts' },
          ].map((uc) => (
            <a
              key={uc.title}
              href={uc.href}
              className="border border-gray-200 rounded-lg p-5 bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-blue-600 mb-1">{uc.title}</h3>
              <p className="text-gray-600 text-sm">{uc.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Code Examples
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">cURL</h3>
            <CodeBlock language="bash" code={curlExample} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Python</h3>
            <CodeBlock language="python" code={pythonExample} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">JavaScript (Fetch)</h3>
            <CodeBlock language="javascript" code={jsExample} />
          </div>
        </div>
      </section>

      {/* FAQ / SEO Content */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What trading card games are supported?
            </h3>
            <p className="text-gray-600 text-sm">
              The API supports Pokemon, Magic: The Gathering (MTG), Yu-Gi-Oh,
              and Disney Lorcana. Data is sourced from TCGPlayer marketplace
              listings and updated regularly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How accurate are the prices?
            </h3>
            <p className="text-gray-600 text-sm">
              Prices reflect current TCGPlayer marketplace data including market
              price (median of recent sales), lowest listing price, and average
              listing price across conditions (Near Mint, Lightly Played, etc.).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is there a free tier?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The free tier includes 200 requests per month with no credit
              card required. Upgrade to Pro for 5,000 requests/month at $9.99.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I use this to build a Pokemon card price tracker?
            </h3>
            <p className="text-gray-600 text-sm">
              Absolutely. The API provides everything you need: card search by
              name, set, and number; market prices; lowest listings; card images;
              and rarity data. Many developers use it to build price tracking
              apps, collection valuators, and market analysis tools.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Pulling Card Prices in Minutes
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Sign up for a free API key on RapidAPI. No credit card required.
          200 free requests per month to get started.
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
