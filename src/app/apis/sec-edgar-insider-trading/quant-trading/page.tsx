import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Track Insider Buy/Sell Signals for Quantitative Trading — SEC EDGAR API',
  description:
    'Use SEC Form 4 insider trading data as alpha signals in quantitative trading models. Backtest insider sentiment, cluster buys by sector, and build signal pipelines with a simple REST API.',
  keywords: [
    'insider trading signals api',
    'quant trading insider data',
    'insider buy signal backtest',
    'sec form 4 quant strategy',
    'insider sentiment indicator',
    'algorithmic trading insider trades',
    'insider alpha signal api',
    'insider trading factor model',
  ],
  openGraph: {
    title: 'Insider Trading Signals for Quant Trading — SEC EDGAR API',
    description:
      'Incorporate Form 4 insider buy/sell data into algorithmic trading strategies. Free tier with 200 requests/month.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/sec-insider-trades?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=sec-quant-trading';

const pythonExample = `import requests
import pandas as pd

API_KEY = "YOUR_API_KEY"
HOST = "sec-insider-trades.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Fetch recent insider trades across all companies
resp = requests.get(
    f"https://{HOST}/trades/recent",
    headers=headers,
    params={"days": 7, "limit": 100},
)
trades = resp.json()["trades"]

# Build a DataFrame for signal analysis
df = pd.DataFrame(trades)
df["totalValue"] = df["totalValue"].astype(float)
df["signal"] = df["transactionType"].map({"buy": 1, "sell": -1})

# Aggregate net insider sentiment per ticker
signals = (
    df.groupby("ticker")
    .agg(
        net_signal=("signal", "sum"),
        total_bought=("totalValue", lambda x: x[df.loc[x.index, "signal"] == 1].sum()),
        total_sold=("totalValue", lambda x: x[df.loc[x.index, "signal"] == -1].sum()),
        num_trades=("signal", "count"),
    )
    .sort_values("net_signal", ascending=False)
)

# Top 10 tickers with strongest insider buying
print("=== Strongest Insider Buy Signals (7d) ===")
for ticker, row in signals.head(10).iterrows():
    print(f"{ticker}: net={row['net_signal']:+d} trades, "
          f"bought=\${row['total_bought']:,.0f}, "
          f"sold=\${row['total_sold']:,.0f}")`;

export default function QuantTradingPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Quant Traders
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Insider Buy/Sell Signals for Quantitative Trading
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Use SEC Form 4 insider trading data as an{' '}
          <strong>alpha signal</strong> in your trading models. Aggregate net
          insider sentiment per ticker, backtest conviction trades, and build
          automated signal pipelines.
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
          What Quant Traders Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Insider Sentiment Signals</h3>
            <p className="text-gray-600 text-sm">
              Aggregate insider buy/sell activity into a net sentiment score per
              ticker. Cluster buys signal conviction, isolated sells signal
              routine diversification.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Factor Model Integration</h3>
            <p className="text-gray-600 text-sm">
              Add insider trading as a factor alongside momentum, value, and
              quality. Weight by transaction size, filer title (CEO vs. director),
              or trade frequency.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Backtest Pipelines</h3>
            <p className="text-gray-600 text-sm">
              Pull historical Form 4 data by ticker or date range and run
              backtests. Measure alpha from insider buys vs. benchmark returns
              over 30/60/90-day windows.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Insider Sentiment Signal Pipeline
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is insider buying actually a useful trading signal?
            </h3>
            <p className="text-gray-600 text-sm">
              Academic research consistently shows that insider purchases
              (especially cluster buys by multiple insiders) tend to precede
              positive stock returns. The signal is strongest for small-cap
              stocks and when executives use their own capital rather than
              exercising options.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I distinguish between routine and informative trades?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API returns filer title, transaction type, share count,
              and dollar value. You can filter for open-market purchases (most
              informative), exclude option exercises, and weight by transaction
              size relative to the filer&apos;s typical trading pattern.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How much history is available?
            </h3>
            <p className="text-gray-600 text-sm">
              You can query recent trades up to 90 days back using the
              <code className="bg-gray-100 px-1 rounded">days</code> parameter
              on the <code className="bg-gray-100 px-1 rounded">/trades/recent</code> and
              <code className="bg-gray-100 px-1 rounded">/trades/company</code> endpoints.
              For backtesting, pull data regularly and store it locally.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Add Insider Signals to Your Trading Model
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
