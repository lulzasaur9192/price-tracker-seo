import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'SEC EDGAR Insider Trading API — Real-Time Form 4 Filings & Executive Trades',
  description:
    'Access real-time SEC Form 4 insider trading data via API. Track executive buy/sell transactions, corporate insider activity, and filing details for any public company. Free tier available.',
  keywords: [
    'sec insider trading api',
    'form 4 filing api',
    'insider trading data api',
    'sec edgar api',
    'executive stock trades api',
    'insider buy sell signals',
    'corporate insider trading',
    'sec filing api',
    'insider transaction data',
    'stock insider activity api',
  ],
  openGraph: {
    title: 'SEC EDGAR Insider Trading API — Real-Time Form 4 Data',
    description:
      'Track insider buys, sells, and Form 4 filings for any public company via a simple REST API. Free tier with 200 requests/month.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/sec-insider-trades?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=sec-insider-api-page';

const curlExample = `curl -X GET "https://sec-insider-trades.p.rapidapi.com/trades/recent?days=7&limit=20" \\
  -H "X-RapidAPI-Key: YOUR_API_KEY" \\
  -H "X-RapidAPI-Host: sec-insider-trades.p.rapidapi.com"`;

const pythonExample = `import requests

url = "https://sec-insider-trades.p.rapidapi.com/trades/recent"
params = {"days": 7, "limit": 20}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "sec-insider-trades.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

for trade in data["trades"]:
    direction = "BUY" if trade["transactionType"] == "buy" else "SELL"
    print(f"{trade['filerName']} ({trade['filerTitle']}) "
          f"{direction} {trade['shares']:,} shares of {trade['ticker']} "
          f"@ \${trade['pricePerShare']:.2f} — \${trade['totalValue']:,.0f}")`;

const jsExample = `const response = await fetch(
  "https://sec-insider-trades.p.rapidapi.com/trades/company/AAPL?days=30&limit=50",
  {
    headers: {
      "X-RapidAPI-Key": "YOUR_API_KEY",
      "X-RapidAPI-Host": "sec-insider-trades.p.rapidapi.com",
    },
  }
);

const data = await response.json();
data.trades.forEach((trade) => {
  const dir = trade.transactionType === "buy" ? "BUY" : "SELL";
  console.log(
    \`\${trade.filerName} \${dir} \${trade.shares.toLocaleString()} \` +
    \`shares of \${trade.ticker} @ $\${trade.pricePerShare}\`
  );
});`;

export default function SECEdgarInsiderTradingPage() {
  return (
    <>
      {/* GOOGLE_ADS_CONVERSION_TAG_PLACEHOLDER */}

      {/* Hero */}
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          REST API
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          SEC Insider Trading API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Real-time <strong>Form 4 insider trading data</strong> from SEC EDGAR.
          Track executive buys, sells, and option exercises for any{' '}
          <strong>public company</strong>. Filer names, titles, share counts,
          prices, and filing details in one simple API.
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
            <div className="text-3xl mb-3">&#x1F4C8;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Real-Time Form 4 Data
            </h3>
            <p className="text-gray-600 text-sm">
              Insider buy/sell transactions parsed from SEC EDGAR Form 4
              filings. Updated continuously as new filings are published.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F50D;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Search by Ticker or Filing
            </h3>
            <p className="text-gray-600 text-sm">
              Look up insider trades by company ticker symbol, browse recent
              filings across all companies, or fetch full details for a
              specific accession number.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F4CA;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Rich Transaction Details
            </h3>
            <p className="text-gray-600 text-sm">
              Filer name, title, transaction type, share count, price per share,
              total value, filing date, and accession number for every trade.
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
              title: 'Quantitative Trading Strategies',
              desc: 'Incorporate insider buy/sell signals into algorithmic trading models. Backtest insider sentiment as an alpha factor.',
            },
            {
              title: 'Compliance & Regulatory Monitoring',
              desc: 'Track executive trades in real time for Section 16 compliance, blackout period monitoring, and audit trails.',
            },
            {
              title: 'Investment Research Platforms',
              desc: 'Analyze insider trading patterns, cluster activity by sector, and surface conviction trades for research reports.',
            },
            {
              title: 'Alert Systems & Dashboards',
              desc: 'Build real-time notification systems that fire when insiders buy or sell above threshold amounts.',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Quant Trading Signals', desc: 'Use insider buys/sells as alpha signals in trading models.', href: '/apis/sec-edgar-insider-trading/quant-trading' },
            { title: 'Compliance Monitoring', desc: 'Track executive trades for regulatory compliance reporting.', href: '/apis/sec-edgar-insider-trading/compliance' },
            { title: 'Investment Research', desc: 'Analyze insider patterns to surface high-conviction trades.', href: '/apis/sec-edgar-insider-trading/research' },
            { title: 'Real-Time Alerts', desc: 'Build notification systems for large insider transactions.', href: '/apis/sec-edgar-insider-trading/alerts' },
          ].map((uc) => (
            <a
              key={uc.title}
              href={uc.href}
              className="border border-gray-200 rounded-lg p-5 bg-white hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-indigo-600 mb-1">{uc.title}</h3>
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
              What is a Form 4 filing?
            </h3>
            <p className="text-gray-600 text-sm">
              Form 4 is an SEC filing that corporate insiders (officers, directors,
              and 10%+ shareholders) must submit within two business days of buying
              or selling company stock. This API parses those filings and returns
              structured transaction data.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How quickly are new filings available?
            </h3>
            <p className="text-gray-600 text-sm">
              The API polls SEC EDGAR continuously during market hours. New Form 4
              filings typically appear within minutes of being published on EDGAR.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is there a free tier?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The free tier includes 200 requests per month with no credit card
              required. Upgrade to Pro for 5,000 requests/month at $9.99 for higher
              volume research and production use.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I track insider trades for a specific company?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Use the <code className="bg-gray-100 px-1 rounded">/trades/company/TICKER</code> endpoint
              to get all insider trades for a specific ticker symbol. You can filter
              by date range and limit the number of results.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Tracking Insider Trades in Minutes
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
