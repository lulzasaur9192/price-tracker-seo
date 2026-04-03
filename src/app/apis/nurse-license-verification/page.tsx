import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';
import GadsConversion from '@/components/GadsConversion';

export const metadata: Metadata = {
  title: 'Nurse License Verification API — Real-Time License Lookup for All 50 States',
  description:
    'Verify nursing licenses across all 50 states via API. Real-time lookup for RN, LPN, NP, and APRN licenses. Built for staffing agencies, credentialing platforms, and healthcare compliance.',
  keywords: [
    'nurse license verification api',
    'nursing license lookup',
    'healthcare credentialing api',
    'rn license verification',
    'nurse license check api',
    'lpn license verification',
    'nursing board verification api',
    'healthcare staffing api',
  ],
  openGraph: {
    title: 'Nurse License Verification API — All 50 States',
    description:
      'Verify RN, LPN, NP, and APRN licenses across all 50 states in real time. Built for staffing agencies and credentialing platforms. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/nurse-license-verification1?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=nurse-api-page';

const curlExample = `curl -X GET "https://nurse-license-verification.p.rapidapi.com/verify?name=Jane+Smith&state=FL&profession=RN" \\
  -H "X-RapidAPI-Key: YOUR_API_KEY" \\
  -H "X-RapidAPI-Host: nurse-license-verification.p.rapidapi.com"`;

const pythonExample = `import requests

url = "https://nurse-license-verification.p.rapidapi.com/verify"
params = {
    "name": "Jane Smith",
    "state": "FL",
    "profession": "RN"
}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "nurse-license-verification.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=params)
data = response.json()

for result in data["results"]:
    print(f"{result['name']} — {result['licenseType']}")
    print(f"  Status: {result['status']}")
    print(f"  Expires: {result['expirationDate']}")`;

const jsExample = `const response = await fetch(
  "https://nurse-license-verification.p.rapidapi.com/verify?" +
    new URLSearchParams({
      name: "Jane Smith",
      state: "FL",
      profession: "RN",
    }),
  {
    headers: {
      "X-RapidAPI-Key": "YOUR_API_KEY",
      "X-RapidAPI-Host": "nurse-license-verification.p.rapidapi.com",
    },
  }
);

const data = await response.json();
data.results.forEach((r) => {
  console.log(\`\${r.name} — \${r.licenseType}\`);
  console.log(\`  Status: \${r.status}\`);
  console.log(\`  Expires: \${r.expirationDate}\`);
});`;

export default function NurseLicenseVerificationPage() {
  return (
    <>
      <GadsConversion />

      {/* Hero */}
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          REST API
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Nurse License Verification API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Verify nursing licenses across <strong>all 50 states</strong> in
          real time. Supports <strong>RN, LPN, NP, APRN, CNA</strong>, and
          more. Built for staffing agencies, credentialing platforms, and
          healthcare compliance teams.
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
            <div className="text-3xl mb-3">&#x1F3E5;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              All 50 States + DC
            </h3>
            <p className="text-gray-600 text-sm">
              Verify licenses issued by any state nursing board. One unified
              API — no need to integrate with 50 different state systems.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x26A1;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Real-Time Verification
            </h3>
            <p className="text-gray-600 text-sm">
              Live lookups against state boards and NPI registry data.
              Get license status, expiration date, disciplinary actions, and
              NPI number in one call.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F4CB;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Multiple Professions
            </h3>
            <p className="text-gray-600 text-sm">
              RN, LPN, NP, APRN, CNA, and more. Verify any nursing-related
              license type. Batch verification supported for bulk processing.
            </p>
          </div>
        </div>
      </section>

      {/* Supported professions */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Supported License Types
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            'RN — Registered Nurse',
            'LPN — Licensed Practical Nurse',
            'NP — Nurse Practitioner',
            'APRN — Advanced Practice RN',
            'CNA — Certified Nursing Asst.',
            'CNS — Clinical Nurse Specialist',
            'CRNA — Nurse Anesthetist',
            'CNM — Certified Nurse Midwife',
          ].map((prof) => (
            <div
              key={prof}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 text-center"
            >
              {prof}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="mb-16">
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
              title: 'Healthcare Staffing Agencies',
              desc: 'Automate license verification for nurse candidates. Verify RN and LPN licenses in real time before placement instead of manual board lookups.',
            },
            {
              title: 'Credentialing Platforms',
              desc: 'Integrate license checks into your credentialing workflow. Automatically verify and re-verify nursing licenses on schedule.',
            },
            {
              title: 'Hospital & Clinic HR Systems',
              desc: 'Ensure every nurse on staff has an active, valid license. Set up automated expiration alerts and renewal tracking.',
            },
            {
              title: 'Compliance & Audit Teams',
              desc: 'Generate license verification audit trails. Prove compliance with state and federal requirements for nursing staff credentials.',
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
              How does the verification work?
            </h3>
            <p className="text-gray-600 text-sm">
              The API routes verification requests through NPPES (National Plan
              and Provider Enumeration System) NPI registry data and state-level
              board sources. You get license status, type, expiration date,
              NPI number, and any disciplinary flags.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Which states are supported?
            </h3>
            <p className="text-gray-600 text-sm">
              All 50 states plus the District of Columbia. The API provides a
              single unified interface so you do not need to integrate with each
              state nursing board individually.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I verify multiple licenses at once?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The batch endpoint accepts up to 25 license verifications per
              request. This is ideal for staffing agencies that need to verify
              credentials for multiple nurse candidates simultaneously.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is this HIPAA compliant?
            </h3>
            <p className="text-gray-600 text-sm">
              The API only accesses publicly available license verification data
              from state nursing boards and the NPI registry. No protected
              health information (PHI) is transmitted or stored. License
              status data is public record.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is there a free tier?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The free tier includes 200 verifications per month with no
              credit card required. Paid plans start at $9.99/month for 5,000
              requests.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Verifying Nurse Licenses in Minutes
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Sign up for a free API key on RapidAPI. No credit card required.
          200 free verifications per month to get started.
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
