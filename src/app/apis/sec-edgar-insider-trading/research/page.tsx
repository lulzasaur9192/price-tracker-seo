import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Analyze Insider Trading Patterns for Investment Research — SEC EDGAR API',
  description:
    'Research insider trading patterns with SEC Form 4 data. Identify cluster buys, track CEO purchases, analyze sector-level insider sentiment, and surface high-conviction trades via REST API.',
  keywords: [
    'insider trading analysis api',
    'insider trading research tool',
    'cluster insider buying api',
    'ceo stock purchase tracker',
    'insider trading patterns',
    'investment research insider data',
    'insider sentiment analysis',
    'form 4 research api',
  ],
  openGraph: {
    title: 'Insider Trading Pattern Analysis — SEC EDGAR API',
    description:
      'Analyze Form 4 insider trading patterns for investment research. Cluster buys, CEO purchases, and sector sentiment. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/sec-insider-trading-api?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=sec-research';

const pythonExample = `import requests
from collections import defaultdict

API_KEY = "YOUR_API_KEY"
HOST = "sec-insider-trades.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Pull 7 days of insider trades to find cluster buying
resp = requests.get(
    f"https://{HOST}/trades/recent",
    headers=headers,
    params={"days": 7, "limit": 200},
)
trades = resp.json()["trades"]

# Group trades by ticker and identify cluster buys
ticker_data = defaultdict(lambda: {"buys": 0, "sells": 0, "buyers": set(), "total_bought": 0})

for trade in trades:
    t = ticker_data[trade["ticker"]]
    if trade["transactionType"] == "buy":
        t["buys"] += 1
        t["buyers"].add(trade["filerName"])
        t["total_bought"] += trade["totalValue"]
    else:
        t["sells"] += 1

# Cluster buys: 3+ unique insiders buying the same stock
print("=== Cluster Insider Buying (7d) ===")
print("Tickers with 3+ unique insider buyers:\\n")

clusters = {
    ticker: data for ticker, data in ticker_data.items()
    if len(data["buyers"]) >= 3
}

for ticker, data in sorted(clusters.items(), key=lambda x: -len(x[1]["buyers"])):
    print(f"{ticker}:")
    print(f"  Unique buyers: {len(data['buyers'])}")
    print(f"  Total buys: {data['buys']}, Total sells: {data['sells']}")
    print(f"  Dollar volume bought: \${data['total_bought']:,.0f}")
    print(f"  Buyers: {', '.join(data['buyers'])}")
    print()

# Deep dive: get full filing details for a specific trade
if trades:
    acc = trades[0]["accessionNumber"]
    detail = requests.get(
        f"https://{HOST}/trades/filing/{acc}",
        headers=headers,
    ).json()
    print(f"\\n=== Filing Detail: {acc} ===")
    print(f"Filer: {detail.get('filerName')} ({detail.get('filerTitle')})")
    print(f"Company: {detail.get('ticker')}")
    print(f"Transaction: {detail.get('transactionType')} "
          f"{detail.get('shares', 0):,} shares @ \${detail.get('pricePerShare', 0):.2f}")`;

export default function ResearchPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Investment Researchers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Analyze Insider Trading Patterns for Investment Research
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Surface <strong>high-conviction insider trades</strong> from SEC Form 4
          filings. Identify cluster buying, track CEO purchases, analyze
          sector-level insider sentiment, and generate research reports with
          structured data.
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
          What Researchers Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Cluster Buy Detection</h3>
            <p className="text-gray-600 text-sm">
              Identify stocks where 3+ insiders are buying simultaneously.
              Cluster buying is one of the strongest predictive signals in
              insider trading research.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Sector Sentiment Dashboards</h3>
            <p className="text-gray-600 text-sm">
              Aggregate insider buy/sell ratios by sector to spot where
              corporate insiders are most bullish. Compare insider sentiment
              across tech, healthcare, energy, and financials.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Executive Purchase Tracking</h3>
            <p className="text-gray-600 text-sm">
              Filter for C-suite purchases (CEO, CFO, COO). Executive open-market
              buys carry stronger signal weight than director or 10% holder
              transactions.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Cluster Buy Detection Script
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What makes cluster buying significant for research?
            </h3>
            <p className="text-gray-600 text-sm">
              When multiple insiders at the same company buy stock within a short
              window, it suggests shared confidence in the company&apos;s prospects.
              Studies show cluster buys outperform single-insider purchases in
              terms of subsequent stock returns, especially for small and mid-cap
              companies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I distinguish between open-market purchases and option exercises?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API returns the transaction type for each trade. Open-market
              purchases (where insiders spend their own cash) are generally
              considered more informative than option exercises, which are often
              routine compensation events.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How do I build a recurring research report?
            </h3>
            <p className="text-gray-600 text-sm">
              Set up a weekly cron job that pulls
              <code className="bg-gray-100 px-1 rounded">/trades/recent?days=7</code>,
              aggregates by ticker, detects cluster buys, and outputs a summary
              email or Slack message. The Pro tier (5,000 req/month) is ideal
              for weekly research automation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Your Insider Trading Research
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
