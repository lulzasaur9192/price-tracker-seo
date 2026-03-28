import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'TCG Store Inventory Pricing Integration — API for Card Shops',
  description:
    'Integrate TCGPlayer market prices into your card shop inventory system. Automatically price your singles based on real-time market data. Built for LGS and online stores.',
  keywords: [
    'tcg store inventory api',
    'card shop pricing api',
    'lgs inventory pricing',
    'trading card store api',
    'auto price card inventory',
    'tcgplayer store integration',
    'card shop management api',
    'singles pricing api',
  ],
  openGraph: {
    title: 'TCG Store Inventory Pricing API',
    description:
      'Auto-price your card shop inventory with real-time TCGPlayer market data. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/tcgplayer-price-data?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=tcg-store-inventory';

const jsExample = `// Auto-price your store inventory against TCGPlayer market
const API_KEY = "YOUR_API_KEY";
const HOST = "tcgplayer-price-data.p.rapidapi.com";

// Your store inventory
const inventory = [
  { sku: "PKM-001", name: "Charizard ex", game: "pokemon", qty: 4 },
  { sku: "MTG-042", name: "Sheoldred", game: "mtg", qty: 2 },
];

async function updatePrices(inventory) {
  for (const item of inventory) {
    const resp = await fetch(
      \`https://\${HOST}/cards/search?query=\${encodeURIComponent(item.name)}&game=\${item.game}&limit=1\`,
      { headers: { "X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST } }
    );
    const data = await resp.json();
    const card = data.results?.[0];
    if (card) {
      // Price at 95% of market (competitive but profitable)
      const storePrice = (card.marketPrice * 0.95).toFixed(2);
      console.log(\`\${item.sku} \${item.name}: Market \$\${card.marketPrice} -> Store \$\${storePrice}\`);
      // TODO: Update your POS/inventory system here
    }
  }
}

updatePrices(inventory);`;

export default function StoreInventoryPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Card Shops
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          TCG Store Inventory Pricing Integration
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          <strong>Automatically price your singles</strong> based on real-time
          TCGPlayer market data. Perfect for local game stores and online card
          shops that want competitive, market-aligned pricing.
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
          How Card Shops Use This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Auto-Price Inventory</h3>
            <p className="text-gray-600 text-sm">
              Set your store prices as a percentage of TCGPlayer market price.
              Run nightly updates to stay competitive without manual lookups.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Buylist Pricing</h3>
            <p className="text-gray-600 text-sm">
              Generate buylist prices automatically. Offer customers a
              percentage of market value when they sell cards to your shop.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Display Prices In-Store</h3>
            <p className="text-gray-600 text-sm">
              Show live market prices on screens or labels in your shop. Build
              customer trust with transparent, data-backed pricing.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Auto-Price Inventory
        </h2>
        <CodeBlock language="javascript" code={jsExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How many cards can I price per month?
            </h3>
            <p className="text-gray-600 text-sm">
              Free: 200/month. Pro ($9.99): 5,000/month — enough for daily
              updates of a 150-card inventory. Ultra ($29.99): 25,000/month
              for larger stores.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I integrate with my POS system?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API returns JSON data that you can feed into any system
              — BinderPOS, Crystal Commerce, Shopify, WooCommerce, or a custom
              solution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does it support condition-based pricing?
            </h3>
            <p className="text-gray-600 text-sm">
              The API returns market price (Near Mint baseline) and lowest
              listing price. You can apply your own condition multipliers
              for LP, MP, HP, and Damaged cards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Auto-Pricing Your Inventory
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
