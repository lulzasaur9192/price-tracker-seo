import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Card Price Drop Alerts & Notifications — TCGPlayer API',
  description:
    'Build price drop alerts for trading cards using the TCGPlayer Price API. Get notified when Pokemon, MTG, or Yu-Gi-Oh cards drop below your target price.',
  keywords: [
    'card price drop alert',
    'pokemon price alert api',
    'tcgplayer price notification',
    'mtg price drop alert',
    'card price monitoring api',
    'trading card price tracker',
    'price drop notification api',
    'card price watch api',
  ],
  openGraph: {
    title: 'Card Price Drop Alerts & Notifications API',
    description:
      'Monitor trading card prices and get alerts when they drop. Build with TCGPlayer Price API. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/tcgplayer-price-data?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=tcg-price-alerts';

const pythonExample = `import requests
import smtplib
from email.message import EmailMessage

API_KEY = "YOUR_API_KEY"
HOST = "tcgplayer-price-data.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Cards to watch
watchlist = [
    {"name": "Charizard ex", "game": "pokemon", "target": 25.00},
    {"name": "Sheoldred, the Apocalypse", "game": "mtg", "target": 40.00},
    {"name": "Ash Blossom", "game": "yugioh", "target": 8.00},
]

alerts = []
for card in watchlist:
    resp = requests.get(
        f"https://{HOST}/cards/search",
        headers=headers,
        params={"query": card["name"], "game": card["game"], "limit": 1},
    )
    results = resp.json().get("results", [])
    if results:
        price = results[0].get("lowestPrice", 999)
        if price <= card["target"]:
            alerts.append(
                f"{card['name']}: \${price:.2f} (target: \${card['target']:.2f})"
            )

if alerts:
    print("ALERTS:\\n" + "\\n".join(alerts))
    # Send email, push notification, Discord webhook, etc.`;

export default function PriceAlertsPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Price Alerts
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Card Price Drop Alerts & Notifications
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Build a <strong>price monitoring system</strong> for trading cards.
          Get notified via email, Discord, or push when Pokemon, MTG, or
          Yu-Gi-Oh cards drop below your target price.
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
          Alert System Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Personal Watchlist</h3>
            <p className="text-gray-600 text-sm">
              Track cards you want to buy. Set a target price and get alerted
              when the lowest listing hits your number.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">SaaS Price Tracker</h3>
            <p className="text-gray-600 text-sm">
              Build a consumer-facing price tracking service. Let users sign up
              and set alerts — monetize with freemium tiers.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Market Spike Detection</h3>
            <p className="text-gray-600 text-sm">
              Monitor for sudden price spikes (new meta, tournament results).
              Alert when a card jumps 50%+ in a day to catch early trends.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Price Alert Script
        </h2>
        <CodeBlock language="python" code={pythonExample} />
        <p className="text-gray-500 text-sm mt-3">
          Run this on a cron schedule (e.g., every 30 minutes) to check prices
          and trigger notifications.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How often should I check prices?
            </h3>
            <p className="text-gray-600 text-sm">
              Every 30-60 minutes is typical. With the free tier (200 req/month),
              you can check ~6 cards every hour. Pro tier (5,000 req/month) lets
              you check 100+ cards every 30 minutes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I track price history?
            </h3>
            <p className="text-gray-600 text-sm">
              The API returns current prices. To track history, store each
              check in your own database. Over time you will build a complete
              price history for every card on your watchlist.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What notification methods work best?
            </h3>
            <p className="text-gray-600 text-sm">
              Discord webhooks are the easiest to set up. Email via SMTP, push
              notifications via Firebase, or even SMS via Twilio all work well
              depending on your use case.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Tracking Card Prices
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
