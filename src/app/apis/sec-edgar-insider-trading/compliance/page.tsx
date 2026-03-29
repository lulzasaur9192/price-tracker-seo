import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Monitor Executive Trades for Compliance Reporting — SEC EDGAR API',
  description:
    'Build compliance monitoring tools with SEC Form 4 insider trading data. Track executive transactions, detect blackout period violations, and generate audit-ready reports via REST API.',
  keywords: [
    'insider trading compliance api',
    'section 16 compliance monitoring',
    'executive trade monitoring',
    'form 4 compliance reporting',
    'insider trading audit trail',
    'blackout period monitoring api',
    'sec compliance automation',
    'corporate insider compliance',
  ],
  openGraph: {
    title: 'Executive Trade Compliance Monitoring — SEC EDGAR API',
    description:
      'Automate Section 16 compliance monitoring with real-time Form 4 insider trading data. Free tier with 200 requests/month.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/sec-insider-trades?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=sec-compliance';

const pythonExample = `import requests
from datetime import datetime, timedelta

API_KEY = "YOUR_API_KEY"
HOST = "sec-insider-trades.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Monitor insider trades for a watchlist of companies
watchlist = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"]

# Define blackout period (e.g., 14 days before earnings)
BLACKOUT_DAYS = 14
earnings_dates = {
    "AAPL": "2026-04-25", "MSFT": "2026-04-22",
    "GOOGL": "2026-04-28", "AMZN": "2026-04-30",
    "TSLA": "2026-04-20",
}

print("=== Compliance Report: Executive Trade Monitor ===\\n")

for ticker in watchlist:
    resp = requests.get(
        f"https://{HOST}/trades/company/{ticker}",
        headers=headers,
        params={"days": 30, "limit": 50},
    )
    trades = resp.json().get("trades", [])

    earnings = datetime.strptime(earnings_dates[ticker], "%Y-%m-%d")
    blackout_start = earnings - timedelta(days=BLACKOUT_DAYS)

    for trade in trades:
        filing_date = datetime.strptime(trade["filingDate"][:10], "%Y-%m-%d")
        in_blackout = blackout_start <= filing_date <= earnings

        flag = " ** BLACKOUT VIOLATION **" if in_blackout else ""
        print(
            f"[{trade['filingDate'][:10]}] {ticker} | "
            f"{trade['filerName']} ({trade['filerTitle']}) | "
            f"{trade['transactionType'].upper()} {trade['shares']:,} shares "
            f"@ \${trade['pricePerShare']:.2f}{flag}"
        )

    if not trades:
        print(f"  {ticker}: No insider trades in last 30 days")
    print()`;

export default function CompliancePage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Compliance Teams
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Monitor Executive Trades for Compliance Reporting
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Automate <strong>Section 16 compliance monitoring</strong> with
          real-time Form 4 data. Track insider transactions, detect blackout
          period violations, and generate audit-ready reports for your
          compliance team.
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
          What Compliance Teams Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Blackout Period Monitoring</h3>
            <p className="text-gray-600 text-sm">
              Cross-reference insider trade dates against corporate blackout
              windows. Flag transactions that occur during restricted periods
              before earnings announcements.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Audit Trail Generation</h3>
            <p className="text-gray-600 text-sm">
              Generate structured logs of all insider transactions with filer
              name, title, transaction type, accession number, and filing date.
              Export to CSV or feed into GRC platforms.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Section 16 Reporting</h3>
            <p className="text-gray-600 text-sm">
              Track which officers and directors are filing on time. Identify
              late filers and generate summary reports for board-level
              compliance reviews.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Blackout Period Compliance Monitor
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can this replace our compliance software?
            </h3>
            <p className="text-gray-600 text-sm">
              The API provides the raw data feed of insider transactions. You
              can integrate it into existing GRC platforms (ServiceNow, LogicGate,
              etc.) or build lightweight monitoring scripts. It complements
              enterprise compliance tools by providing real-time SEC filing data.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does the API include the accession number for each filing?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Every trade record includes the SEC accession number, which
              you can use to link back to the original Form 4 filing on EDGAR
              or retrieve full filing details via the
              <code className="bg-gray-100 px-1 rounded">/trades/filing</code> endpoint.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How do I monitor multiple companies at once?
            </h3>
            <p className="text-gray-600 text-sm">
              Loop through your watchlist of tickers and call
              <code className="bg-gray-100 px-1 rounded">/trades/company/TICKER</code> for
              each one. For broad monitoring, use
              <code className="bg-gray-100 px-1 rounded">/trades/recent</code> to get all
              filings across all companies within a date range.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Automate Your Compliance Monitoring
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
