import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Cross-State License Verification for Telemedicine Platforms — Healthcare License Verification API',
  description:
    'Verify nurse and provider licenses across state lines for telemedicine. Automate multi-state credential checks for telehealth platforms. Ensure providers are licensed in the patient state before every session.',
  keywords: [
    'telemedicine license verification api',
    'telehealth provider credentialing',
    'cross-state nursing license check',
    'nurse compact license verification',
    'telehealth compliance api',
    'multi-state license verification',
    'telemedicine credentialing automation',
    'virtual care license check',
    'telehealth provider verification',
    'interstate nursing license api',
  ],
  openGraph: {
    title: 'Cross-State License Verification for Telemedicine Platforms',
    description:
      'Verify that telehealth providers are licensed in the patient state before every session. All 50 states, real-time. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/nurse-license-verification1?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=telemedicine';

const pythonExample = `import requests

API_KEY = "YOUR_API_KEY"
HOST = "nurse-license-verification.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

def can_provider_see_patient(provider: dict, patient_state: str) -> dict:
    """
    Pre-session check: verify the provider holds an active license
    in the patient's state before allowing a telehealth session.
    """
    resp = requests.get(
        f"https://{HOST}/verify",
        headers=headers,
        params={
            "name": provider["name"],
            "state": patient_state,
            "profession": provider["profession"],
        },
    )
    results = resp.json().get("results", [])

    if results and results[0]["status"] == "Active":
        return {
            "allowed": True,
            "licenseState": patient_state,
            "licenseType": results[0]["licenseType"],
            "expires": results[0]["expirationDate"],
        }
    return {"allowed": False, "reason": f"No active {provider['profession']} license in {patient_state}"}

# Telehealth session request
provider = {"name": "Dr. Rachel Nguyen", "profession": "NP", "home_state": "VA"}
patient_state = "TX"

check = can_provider_see_patient(provider, patient_state)

if check["allowed"]:
    print(f"SESSION APPROVED: {provider['name']} licensed in {patient_state}")
    print(f"  License: {check['licenseType']}, expires {check['expires']}")
    # start_telehealth_session(provider, patient_state)
else:
    print(f"SESSION BLOCKED: {check['reason']}")
    # suggest_alternative_provider(patient_state)

# Bulk: check which states a provider can practice in
print(f"\\nMulti-state coverage for {provider['name']}:")
states_to_check = ["TX", "CA", "NY", "FL", "OH", "PA", "IL", "GA", "NC", "MI"]
licensed_states = []

for state in states_to_check:
    result = can_provider_see_patient(provider, state)
    status = "Licensed" if result["allowed"] else "Not licensed"
    print(f"  {state}: {status}")
    if result["allowed"]:
        licensed_states.append(state)

print(f"\\nProvider can see patients in {len(licensed_states)}/{len(states_to_check)} checked states")`;

export default function TelemedicinePage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Telemedicine Platforms
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Cross-State License Verification for Telemedicine
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Telehealth providers must be licensed in the <strong>patient&apos;s
          state</strong>, not just their own. Verify cross-state credentials
          in real time before every session. Support{' '}
          <strong>Nurse Compact, multi-state licenses</strong>, and all 50
          state boards through a single API.
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
          What Telemedicine Platforms Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Pre-Session Gate Check</h3>
            <p className="text-gray-600 text-sm">
              Automatically verify that the provider holds an active license
              in the patient&apos;s state before the video call starts. Block
              sessions that would violate state practice laws.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Provider Coverage Maps</h3>
            <p className="text-gray-600 text-sm">
              Build a map of which states each provider can serve patients in.
              Use this to route patient appointment requests to providers who
              are licensed in their state, improving match rates.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Compact License Detection</h3>
            <p className="text-gray-600 text-sm">
              Identify providers with Nurse Licensure Compact (NLC) privileges
              who can practice across 40+ member states. Maximize your
              provider network&apos;s geographic reach without additional licensing.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Telehealth Pre-Session Verification in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Why do telehealth platforms need cross-state license checks?
            </h3>
            <p className="text-gray-600 text-sm">
              Most states require healthcare providers to hold a license in
              the state where the patient is located, not where the provider
              is physically sitting. A nurse practitioner in Virginia seeing
              a patient in Texas must hold a Texas NP license (or a valid
              compact privilege). Failing to verify this exposes the platform
              to regulatory penalties and malpractice liability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does the API detect Nurse Licensure Compact privileges?
            </h3>
            <p className="text-gray-600 text-sm">
              The API returns license data from each state. For compact states,
              you can verify whether a nurse holds a multistate license issued
              by their home state, which grants practice privilege in all NLC
              member states. Check the license type field for &quot;Compact&quot; or
              &quot;Multistate&quot; designations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How many API calls does a typical telehealth platform need?
            </h3>
            <p className="text-gray-600 text-sm">
              A platform running 50 telehealth sessions per day needs about
              1,500 verifications per month (one pre-session check each).
              The free tier covers low-volume pilots. The Pro tier at
              $9.99/month handles up to 170 sessions per day. Cache results
              for 24 hours to reduce redundant checks for repeat visits.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Ensure Every Telehealth Session Is Compliant
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
