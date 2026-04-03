import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'AI Agent Audit Trails for Enterprise Compliance — SOC 2 & ISO 27001 Ready',
  description:
    'Cryptographic audit trails for AI agents that satisfy SOC 2, ISO 27001, and regulatory compliance. HMAC-SHA256 hash chains prove log integrity to auditors. Built for enterprise compliance teams.',
  keywords: [
    'ai agent compliance audit',
    'soc 2 ai audit trail',
    'iso 27001 agent logging',
    'enterprise ai compliance api',
    'ai agent governance',
    'regulatory ai audit log',
    'tamper proof compliance log',
    'ai agent accountability',
    'enterprise agent monitoring',
    'compliance audit trail api',
  ],
  openGraph: {
    title: 'AI Agent Audit Trails for Enterprise Compliance',
    description:
      'HMAC-SHA256 audit trails that prove AI agent compliance to auditors. SOC 2 and ISO 27001 ready. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/ai-agent-compliance-logger-api?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=audit-enterprise-compliance';

const pythonExample = `import requests
import json
from datetime import datetime

HOST = "agent-audit-log.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": HOST,
    "Content-Type": "application/json"
}

# Log a compliance-relevant agent action
requests.post(f"https://{HOST}/audit/log", headers=headers, json={
    "agentId": "finance-bot-prod",
    "action": "data_access",
    "details": {
        "resource": "customer_pii_database",
        "records_accessed": 142,
        "justification": "quarterly_fraud_review",
        "initiated_by": "compliance_team"
    }
})

# Generate a compliance report — verify chain integrity
verify = requests.get(
    f"https://{HOST}/audit/verify/finance-bot-prod",
    headers=headers
)
result = verify.json()

# Pull the full audit trail for the compliance report
trail = requests.get(
    f"https://{HOST}/audit/trail/finance-bot-prod",
    headers=headers
)
entries = trail.json()["entries"]

print(f"=== Compliance Audit Report ===")
print(f"Agent: finance-bot-prod")
print(f"Generated: {datetime.now().isoformat()}")
print(f"Chain integrity: {'PASSED' if result['valid'] else 'FAILED'}")
print(f"Total logged actions: {result['entryCount']}")
print(f"\\nRecent actions:")
for entry in entries[-5:]:
    print(f"  [{entry['timestamp']}] {entry['action']} — {json.dumps(entry['details'])}")`;

export default function EnterpriseCompliancePage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Compliance Teams
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          AI Agent Audit Trails for Enterprise Compliance
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Prove to auditors that your AI agents acted within policy.
          <strong> HMAC-SHA256 hash chains</strong> provide cryptographic proof
          that audit logs have not been tampered with — satisfying SOC 2,
          ISO 27001, and regulatory requirements.
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
            <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Audit Evidence</h3>
            <p className="text-gray-600 text-sm">
              Generate tamper-proof logs of every AI agent action. Auditors can
              independently verify chain integrity to confirm no records were
              modified, deleted, or reordered after the fact.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Policy Enforcement Trails</h3>
            <p className="text-gray-600 text-sm">
              Log every tool call, data access, and decision your agents make.
              Demonstrate to regulators that agents operated within approved
              boundaries and followed your governance policies.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Incident Investigation</h3>
            <p className="text-gray-600 text-sm">
              When something goes wrong, trace the exact sequence of agent
              actions. The immutable chain ensures the investigation record
              is trustworthy and has not been altered post-incident.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Compliance Audit Report in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does the HMAC chain satisfy SOC 2 audit log requirements?
            </h3>
            <p className="text-gray-600 text-sm">
              The HMAC-SHA256 chain provides cryptographic proof of log
              integrity — a key requirement for SOC 2 Trust Service Criteria
              (CC7.2, CC7.3). Each entry is immutably linked to the previous
              one, and any tampering is detectable via the verification
              endpoint. Auditors can independently confirm chain validity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I generate compliance reports from the API?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. Pull the full audit trail for any agent, verify chain
              integrity, and format the results into your compliance report.
              The API returns timestamps, action types, details, and hash
              values — everything you need for regulatory documentation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How many agents can I monitor?
            </h3>
            <p className="text-gray-600 text-sm">
              There is no limit on the number of agents. Each agent gets its
              own independent audit trail and hash chain. The request quota
              applies across all agents — Free tier gives 200 requests/month,
              Pro gives 5,000, Ultra gives 25,000, Mega gives 100,000.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Building Compliance Audit Trails
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
