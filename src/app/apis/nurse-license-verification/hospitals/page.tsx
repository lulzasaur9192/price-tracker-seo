import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Hospital Staff License Compliance Automation — Healthcare License Verification API',
  description:
    'Automate nursing license compliance for hospitals and health systems. Continuously monitor RN, LPN, and NP license status across your entire staff. Prevent compliance gaps before they happen.',
  keywords: [
    'hospital nurse license compliance',
    'nursing staff credential monitoring',
    'hospital license verification api',
    'nurse compliance automation',
    'jcaho license verification',
    'hospital credentialing api',
    'nursing license expiration alerts',
    'health system compliance api',
    'cms conditions of participation',
    'hospital hr license check',
  ],
  openGraph: {
    title: 'Hospital Staff License Compliance Automation',
    description:
      'Continuously monitor nursing license status for your entire hospital staff. Automated alerts for expirations and disciplinary actions. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/nurse-license-verification1?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=hospitals';

const pythonExample = `import requests
from datetime import datetime, timedelta

API_KEY = "YOUR_API_KEY"
HOST = "nurse-license-verification.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

# Active nursing staff roster from your HR system
staff_roster = [
    {"name": "Emily Davis", "state": "OH", "profession": "RN", "department": "ICU"},
    {"name": "Robert Kim", "state": "OH", "profession": "NP", "department": "ER"},
    {"name": "Angela Torres", "state": "OH", "profession": "LPN", "department": "Med-Surg"},
    {"name": "David Patel", "state": "OH", "profession": "APRN", "department": "Oncology"},
]

expiring_soon = []
non_compliant = []
ALERT_WINDOW = timedelta(days=90)

for nurse in staff_roster:
    resp = requests.get(
        f"https://{HOST}/verify",
        headers=headers,
        params={"name": nurse["name"], "state": nurse["state"], "profession": nurse["profession"]},
    )
    results = resp.json().get("results", [])

    if not results or results[0]["status"] != "Active":
        non_compliant.append(nurse)
        print(f"NON-COMPLIANT: {nurse['name']} ({nurse['department']})")
        continue

    exp_date = datetime.strptime(results[0]["expirationDate"], "%Y-%m-%d")
    if exp_date - datetime.now() < ALERT_WINDOW:
        expiring_soon.append({**nurse, "expires": results[0]["expirationDate"]})
        print(f"EXPIRING SOON: {nurse['name']} — {results[0]['expirationDate']}")
    else:
        print(f"COMPLIANT: {nurse['name']} ({nurse['department']})")

print(f"\\nSummary: {len(non_compliant)} non-compliant, {len(expiring_soon)} expiring within 90 days")

# Send alerts to department managers
for nurse in non_compliant + expiring_soon:
    # send_alert_email(nurse["department"], nurse)  # your notification system
    pass`;

export default function HospitalsPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Hospitals
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Hospital Staff License Compliance Automation
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Continuously monitor <strong>every nurse&apos;s license status</strong>{' '}
          across your health system. Catch expirations, suspensions, and
          disciplinary actions <strong>before they become compliance gaps</strong>{' '}
          that put your accreditation at risk.
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
          What Hospitals Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Continuous License Monitoring</h3>
            <p className="text-gray-600 text-sm">
              Run automated nightly or weekly scans of your entire nursing
              roster. Get alerted the moment a license status changes from
              active to expired, suspended, or restricted.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Expiration Alerting</h3>
            <p className="text-gray-600 text-sm">
              Set up 90-day, 60-day, and 30-day expiration warnings. Push
              alerts to department managers and HR so renewal reminders go
              out well before licenses lapse.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Audit-Ready Reports</h3>
            <p className="text-gray-600 text-sm">
              Generate point-in-time license verification snapshots for Joint
              Commission and CMS audits. Document that every nurse on staff
              held a valid license on any given date.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Staff Compliance Monitor in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How does this help with Joint Commission accreditation?
            </h3>
            <p className="text-gray-600 text-sm">
              The Joint Commission requires hospitals to verify that all
              licensed staff hold current, valid credentials. This API lets
              you automate that verification on a schedule and generate
              audit trails showing continuous compliance. No more manual
              spreadsheet tracking.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I monitor licenses for nurses across multiple facilities?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API covers all 50 states, so a multi-facility health
              system can verify nurses licensed in different states from a
              single integration. Group results by facility or department in
              your own reporting layer.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What volume do hospitals typically need?
            </h3>
            <p className="text-gray-600 text-sm">
              A 500-bed hospital with 1,200 nurses running weekly checks
              needs about 5,000 verifications per month, which fits the Pro
              tier at $9.99/month. Larger health systems with 5,000+ nurses
              should consider the Ultra ($29.99) or Mega ($99.99) tier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Never Miss a License Expiration Again
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
