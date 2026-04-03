import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Build Real-Time Insider Trading Alert Systems — SEC EDGAR API',
  description:
    'Build automated insider trading alert systems with SEC Form 4 data. Get notified when executives buy or sell stock above threshold amounts. Slack, email, and webhook integrations via REST API.',
  keywords: [
    'insider trading alerts api',
    'sec filing notification system',
    'insider buy alert',
    'real-time insider trading notifications',
    'form 4 alert webhook',
    'insider trading monitoring api',
    'stock insider alert bot',
    'executive trade notifications',
  ],
  openGraph: {
    title: 'Real-Time Insider Trading Alert Systems — SEC EDGAR API',
    description:
      'Build automated alerts for insider buys and sells above your threshold. Slack, email, and webhook integrations. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/sec-insider-trading-api?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=sec-alerts';

const pythonExample = `import requests
import json
from datetime import datetime

API_KEY = "YOUR_API_KEY"
HOST = "sec-insider-trades.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Configuration
WATCHLIST = ["AAPL", "MSFT", "NVDA", "GOOGL", "TSLA", "META"]
MIN_VALUE = 100_000   # Only alert on trades >= $100K
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def check_insider_trades():
    """Poll for recent insider trades and send alerts."""
    alerts = []

    for ticker in WATCHLIST:
        resp = requests.get(
            f"https://{HOST}/trades/company/{ticker}",
            headers=headers,
            params={"days": 1, "limit": 20},
        )
        trades = resp.json().get("trades", [])

        for trade in trades:
            if trade["totalValue"] >= MIN_VALUE:
                alerts.append(trade)

    if not alerts:
        print(f"[{datetime.now()}] No significant insider trades found.")
        return

    # Format and send Slack notification
    for trade in alerts:
        direction = "BUY" if trade["transactionType"] == "buy" else "SELL"
        emoji = ":chart_with_upwards_trend:" if direction == "BUY" else ":chart_with_downwards_trend:"

        message = {
            "text": (
                f"{emoji} *Insider {direction}*: "
                f"{trade['filerName']} ({trade['filerTitle']})\\n"
                f"*{trade['ticker']}* | "
                f"{trade['shares']:,} shares @ \${trade['pricePerShare']:.2f} "
                f"= *\${trade['totalValue']:,.0f}*\\n"
                f"Filed: {trade['filingDate'][:10]} | "
                f"Accession: {trade['accessionNumber']}"
            )
        }

        requests.post(SLACK_WEBHOOK, json=message)
        print(f"Alert sent: {trade['filerName']} {direction} "
              f"\${trade['totalValue']:,.0f} of {trade['ticker']}")

# Run as a cron job (e.g., every 15 minutes during market hours)
check_insider_trades()`;

export default function AlertsPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Developers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Build Real-Time Insider Trading Alert Systems
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Build automated <strong>insider trading notification systems</strong>{' '}
          that fire when executives buy or sell above threshold amounts. Push
          alerts to Slack, email, Discord, or any webhook endpoint.
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
          What Developers Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Slack / Discord Alert Bots</h3>
            <p className="text-gray-600 text-sm">
              Build a bot that monitors a watchlist of tickers and posts to a
              Slack channel or Discord server when a significant insider trade
              is filed. Filter by dollar amount, filer title, or trade type.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Email Digest Systems</h3>
            <p className="text-gray-600 text-sm">
              Generate daily or weekly email digests summarizing all insider
              trades for tracked companies. Include transaction details, links
              to SEC filings, and net insider sentiment scores.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Dashboard Integrations</h3>
            <p className="text-gray-600 text-sm">
              Feed insider trade data into Grafana, Retool, or custom
              dashboards. Visualize trade volumes, track watchlist activity,
              and set threshold-based visual alerts.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Slack Alert Bot for Insider Trades
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How often should I poll for new trades?
            </h3>
            <p className="text-gray-600 text-sm">
              For near-real-time alerts, poll
              <code className="bg-gray-100 px-1 rounded">/trades/recent?days=1</code> every
              15-30 minutes during market hours. The Pro tier (5,000 req/month)
              supports polling every 15 minutes for a 20-stock watchlist
              throughout the trading day.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I filter to only see large trades?
            </h3>
            <p className="text-gray-600 text-sm">
              The API returns all trades with full details including
              <code className="bg-gray-100 px-1 rounded">totalValue</code>,
              <code className="bg-gray-100 px-1 rounded">shares</code>, and
              <code className="bg-gray-100 px-1 rounded">pricePerShare</code>.
              Apply your own threshold filter (e.g., trades over $100K) on the
              client side to only trigger alerts for significant transactions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What is the best architecture for an alert system?
            </h3>
            <p className="text-gray-600 text-sm">
              Use a cron job or scheduled Lambda function that polls the API,
              compares results against previously seen accession numbers (stored
              in a simple database or file), and sends alerts for new filings.
              This approach is reliable and easy to maintain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Build Your Insider Trading Alert System
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
