import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Automate Nurse Credential Verification for Staffing Agencies — Healthcare License Verification API',
  description:
    'Automate RN, LPN, and NP license verification for healthcare staffing agencies. Verify nurse credentials across all 50 states in real time via API. Reduce placement delays by 90%.',
  keywords: [
    'nurse staffing agency license verification',
    'healthcare staffing credential check api',
    'automate nurse license lookup',
    'rn credential verification api',
    'travel nurse license check',
    'staffing agency compliance api',
    'nurse placement verification',
    'bulk nurse license verification',
    'lpn staffing credential api',
    'healthcare staffing automation',
  ],
  openGraph: {
    title: 'Automate Nurse Credential Verification for Staffing Agencies',
    description:
      'Verify nurse licenses across all 50 states in real time. Built for healthcare staffing agencies. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/nurse-license-verification?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=staffing-agencies';

const pythonExample = `import requests
import csv

API_KEY = "YOUR_API_KEY"
HOST = "nurse-license-verification.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Batch of nurse candidates from your ATS
candidates = [
    {"name": "Sarah Johnson", "state": "TX", "profession": "RN"},
    {"name": "Maria Garcia", "state": "CA", "profession": "LPN"},
    {"name": "James Williams", "state": "FL", "profession": "NP"},
    {"name": "Linda Chen", "state": "NY", "profession": "RN"},
]

cleared = []
flagged = []

for nurse in candidates:
    resp = requests.get(
        f"https://{HOST}/verify",
        headers=headers,
        params=nurse,
    )
    data = resp.json()
    results = data.get("results", [])

    if results and results[0].get("status") == "Active":
        cleared.append({**nurse, "expires": results[0]["expirationDate"]})
        print(f"CLEARED: {nurse['name']} ({nurse['state']} {nurse['profession']})")
    else:
        flagged.append(nurse)
        print(f"FLAGGED: {nurse['name']} — needs manual review")

print(f"\\n{len(cleared)} cleared, {len(flagged)} flagged for review")

# Export cleared candidates for placement
with open("cleared_nurses.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "state", "profession", "expires"])
    writer.writeheader()
    writer.writerows(cleared)`;

export default function StaffingAgenciesPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Staffing Agencies
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Automate Nurse Credential Verification
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Stop manually checking state nursing board websites. Verify{' '}
          <strong>RN, LPN, NP, and APRN licenses</strong> across all 50 states
          in a single API call. Clear candidates for placement in seconds
          instead of days.
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
          What Staffing Agencies Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">ATS Integration</h3>
            <p className="text-gray-600 text-sm">
              Plug license verification into your applicant tracking system.
              Auto-verify every nurse candidate at intake so your recruiters
              only see pre-cleared profiles.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Travel Nurse Placement</h3>
            <p className="text-gray-600 text-sm">
              Verify compact licenses and multi-state credentials instantly.
              Know which states a travel nurse can work in before making
              assignment offers.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Expiration Monitoring</h3>
            <p className="text-gray-600 text-sm">
              Run nightly batch checks on your active roster. Get alerts when
              a nurse&apos;s license is about to expire so you can coordinate
              renewals before gaps occur.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Batch Candidate Verification in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How fast can I verify a batch of nurse candidates?
            </h3>
            <p className="text-gray-600 text-sm">
              Each verification takes under 2 seconds. A batch of 25
              candidates can be verified in under a minute. The Pro tier
              gives you 5,000 verifications per month — enough for most
              mid-size staffing agencies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does it check for disciplinary actions?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API returns license status including any flags for
              disciplinary actions, restrictions, or probation. You will
              see active, inactive, expired, suspended, and revoked statuses
              so you can make informed placement decisions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I integrate this with Bullhorn or other staffing CRMs?
            </h3>
            <p className="text-gray-600 text-sm">
              Absolutely. The API is a standard REST endpoint that works with
              any HTTP client. Use webhooks or scheduled jobs to trigger
              verification when a candidate record is created or updated in
              your CRM.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Clear Candidates Faster, Place Nurses Sooner
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
