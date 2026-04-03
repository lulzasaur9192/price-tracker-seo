import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Integrate License Verification into Your Credentialing Platform — Healthcare License Verification API',
  description:
    'Add real-time nurse license verification to your credentialing software. API-first integration for primary source verification across all 50 states. Supports RN, LPN, NP, APRN, and 18 more professions.',
  keywords: [
    'credentialing platform license api',
    'primary source verification api',
    'nurse credentialing automation',
    'healthcare credentialing software api',
    'credvo alternative api',
    'provider credentialing api',
    'license verification integration',
    'caqh alternative api',
    'nursing credential verification',
    'credentialing workflow automation',
  ],
  openGraph: {
    title: 'Integrate License Verification into Your Credentialing Platform',
    description:
      'API-first nurse license verification for credentialing platforms. Primary source verification across all 50 states. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/nurse-license-verification1?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=credentialing';

const pythonExample = `import requests
from datetime import datetime

API_KEY = "YOUR_API_KEY"
HOST = "nurse-license-verification.p.rapidapi.com"
headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": HOST}

def verify_credential(provider: dict) -> dict:
    """
    Primary source verification for a single provider.
    Call this from your credentialing workflow when a new
    application is submitted or a re-verification is due.
    """
    # Step 1: Verify license by name + state
    resp = requests.get(
        f"https://{HOST}/verify",
        headers=headers,
        params={
            "name": provider["name"],
            "state": provider["state"],
            "profession": provider["profession"],
        },
    )
    results = resp.json().get("results", [])

    if not results:
        return {"verified": False, "reason": "No matching license found"}

    license_info = results[0]

    # Step 2: Cross-reference via NPI if available
    npi_data = None
    if provider.get("npi"):
        npi_resp = requests.get(
            f"https://{HOST}/npi/{provider['npi']}",
            headers=headers,
        )
        if npi_resp.status_code == 200:
            npi_data = npi_resp.json()

    # Step 3: Build verification record for your credentialing DB
    return {
        "verified": license_info["status"] == "Active",
        "licenseType": license_info["licenseType"],
        "licenseStatus": license_info["status"],
        "expirationDate": license_info["expirationDate"],
        "npiMatch": npi_data is not None,
        "verifiedAt": datetime.utcnow().isoformat(),
        "source": "nurse-license-verification-api",
    }

# Example: New credentialing application received
application = {
    "name": "Jennifer Martinez",
    "state": "CA",
    "profession": "NP",
    "npi": "1234567890",
}

result = verify_credential(application)
print(f"Verified: {result['verified']}")
print(f"License: {result['licenseType']} — {result['licenseStatus']}")
print(f"Expires: {result['expirationDate']}")
print(f"NPI Cross-Reference: {'Match' if result['npiMatch'] else 'No match'}")
print(f"Timestamp: {result['verifiedAt']}")`;

export default function CredentialingPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Credentialing Platforms
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Integrate License Verification into Your Credentialing Platform
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Add <strong>primary source license verification</strong> to your
          credentialing software with a single API integration. Verify nurse
          licenses across all 50 states, cross-reference NPI data, and build
          audit-ready verification records automatically.
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
          What Credentialing Platforms Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Primary Source Verification</h3>
            <p className="text-gray-600 text-sm">
              Replace manual state board lookups with automated API calls.
              Verify license type, status, expiration, and disciplinary
              history programmatically as part of your intake workflow.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">NPI Cross-Reference</h3>
            <p className="text-gray-600 text-sm">
              Look up providers by NPI number to cross-reference identity and
              credentials. Confirm that the NPI, name, and license all match
              before issuing credentialing approval.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Re-Verification Automation</h3>
            <p className="text-gray-600 text-sm">
              Schedule periodic re-verification checks. Automatically flag
              providers whose license status has changed since their last
              credentialing cycle, triggering review workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Credentialing Verification Workflow in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does this count as primary source verification?
            </h3>
            <p className="text-gray-600 text-sm">
              The API queries NPPES (the federal NPI registry) and state board
              data sources. NPPES is a CMS-maintained primary source for NPI
              and provider taxonomy data. For state-level license verification,
              the API provides real-time data that can support your primary
              source verification documentation requirements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How many profession types does the API support?
            </h3>
            <p className="text-gray-600 text-sm">
              The API supports 22 healthcare professions including RN, LPN,
              NP, APRN, CNA, MD, DO, PT, PTA, OT, OTA, SLP, PSYCH, RPH,
              PHARMD, DDS, DMD, PA, DC, OD, DPM, and CF. This means your
              credentialing platform can use a single API for nursing and
              allied health verification.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I build a white-label verification product on top of this?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API is designed for integration. Use the Mega tier
              (100,000 requests/month) for high-volume credentialing platforms
              that serve multiple healthcare organizations. There are no
              restrictions on building commercial products using the API data.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Ship License Verification in Your Next Sprint
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
