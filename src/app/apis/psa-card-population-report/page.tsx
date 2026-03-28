import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'PSA Card Population Report API — Graded Card Population Data',
  description:
    'Access PSA population report data via API. Get grade breakdowns from Auth through PSA 10 for entire sets or single cards. Bulk population data for Pokemon, MTG, sports cards, and more.',
  keywords: [
    'psa pop report api',
    'psa population data',
    'card grading data api',
    'psa population report',
    'graded card data api',
    'psa 10 population',
    'card grading population api',
    'sports card population data',
  ],
  openGraph: {
    title: 'PSA Card Population Report API — Grade Breakdown Data',
    description:
      'Bulk PSA population data for entire sets or single cards. Grade breakdowns from Auth through PSA 10. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/psa-card-population-report?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=psa-api-page';

const curlExample = `curl -X GET "https://psa-card-population-report.p.rapidapi.com/population?set=base-set&game=pokemon" \\
  -H "X-RapidAPI-Key: YOUR_API_KEY" \\
  -H "X-RapidAPI-Host: psa-card-population-report.p.rapidapi.com"`;

const pythonExample = `import requests

url = "https://psa-card-population-report.p.rapidapi.com/population"
params = {"set": "base-set", "game": "pokemon"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "psa-card-population-report.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

for card in data["cards"]:
    psa10 = card["grades"].get("10", 0)
    total = card["totalGraded"]
    print(f"{card['name']} — PSA 10: {psa10} / {total} total")`;

const jsExample = `const response = await fetch(
  "https://psa-card-population-report.p.rapidapi.com/population?set=base-set&game=pokemon",
  {
    headers: {
      "X-RapidAPI-Key": "YOUR_API_KEY",
      "X-RapidAPI-Host": "psa-card-population-report.p.rapidapi.com",
    },
  }
);

const data = await response.json();
data.cards.forEach((card) => {
  const psa10 = card.grades["10"] || 0;
  console.log(\`\${card.name} — PSA 10: \${psa10} / \${card.totalGraded} total\`);
});`;

export default function PSAPopulationReportPage() {
  return (
    <>
      {/* GOOGLE_ADS_CONVERSION_TAG_PLACEHOLDER */}

      {/* Hero */}
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          REST API
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          PSA Card Population Report API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Bulk PSA population data for entire sets or individual cards. Get full
          grade breakdowns from <strong>Auth through PSA 10</strong> for
          Pokemon, MTG, sports cards, and every other PSA-graded category.
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
            <div className="text-3xl mb-3">&#x1F4CA;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Full Grade Breakdowns
            </h3>
            <p className="text-gray-600 text-sm">
              Population counts for every grade: Auth, 1, 1.5, 2, all the way
              through 10. See exactly how many PSA 10s exist for any card.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F4E6;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Bulk Set Data
            </h3>
            <p className="text-gray-600 text-sm">
              Pull population data for an entire set in one request. Get every
              card in Base Set, 1st Edition, Topps Chrome, or any PSA-tracked set.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F50D;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Single Card Lookup
            </h3>
            <p className="text-gray-600 text-sm">
              Look up population data for a specific card by name, number, or
              PSA cert number. Perfect for valuation and rarity analysis.
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
              title: 'Card Investors & Flippers',
              desc: 'Identify low-population gem mint cards before the market catches on. Find PSA 10 scarcity gaps across sets.',
            },
            {
              title: 'Pricing & Valuation Tools',
              desc: 'Combine population data with market prices to calculate rarity-adjusted valuations for graded cards.',
            },
            {
              title: 'Collection Management Apps',
              desc: 'Show users how rare their graded cards are by displaying population counts alongside their collection.',
            },
            {
              title: 'Market Research & Analytics',
              desc: 'Track grading trends over time. See which sets are getting submitted more, and identify emerging demand.',
            },
          ].map((uc) => (
            <div key={uc.title} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{uc.title}</h3>
              <p className="text-gray-600 text-sm">{uc.desc}</p>
            </div>
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
              What is a PSA population report?
            </h3>
            <p className="text-gray-600 text-sm">
              A PSA population report shows how many cards of a specific type
              have been graded by PSA and what grades they received. For example,
              it tells you exactly how many PSA 10 Gem Mint copies of a
              1st Edition Base Set Charizard exist. This data is critical for
              understanding card rarity and fair market value.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What card categories are covered?
            </h3>
            <p className="text-gray-600 text-sm">
              Every category that PSA grades: Pokemon, Magic: The Gathering,
              Yu-Gi-Oh, sports cards (baseball, basketball, football, hockey),
              non-sport cards, and more. If PSA has a population report for it,
              this API can retrieve it.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I pull an entire set at once?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The bulk set endpoint returns population data for every card
              in a set in a single API call. This is significantly faster than
              looking up cards one by one.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How often is the data updated?
            </h3>
            <p className="text-gray-600 text-sm">
              Population data is refreshed regularly to reflect new PSA
              submissions and grade results. The data tracks PSA's own
              population report system.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Pulling Population Data in Minutes
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
