import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Verify AI Agent Actions with Tamper-Proof Logs — Agent Audit Log API',
  description:
    'Monitor AI agent behavior with cryptographically verifiable audit logs. Detect unauthorized actions, verify agent safety constraints, and build trustworthy AI systems with HMAC-SHA256 chains.',
  keywords: [
    'ai safety audit log',
    'verify ai agent actions',
    'ai agent behavior monitoring',
    'tamper proof ai logs',
    'ai agent safety api',
    'agent action verification',
    'ai alignment monitoring',
    'agent guardrail logging',
    'ai trust verification',
    'responsible ai audit trail',
  ],
  openGraph: {
    title: 'Verify AI Agent Actions with Tamper-Proof Logs',
    description:
      'Cryptographic audit logs for AI safety. Monitor agent behavior, detect unauthorized actions, and verify safety constraints. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/agent-audit-log?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=audit-ai-safety';

const pythonExample = `import requests

HOST = "agent-audit-log.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": HOST,
    "Content-Type": "application/json"
}

AGENT_ID = "research-agent-v2"
RESTRICTED_ACTIONS = {"delete_file", "send_email", "execute_code", "modify_database"}

# Log agent actions as they happen (in your agent loop)
def log_action(action, details):
    resp = requests.post(f"https://{HOST}/audit/log", headers=headers, json={
        "agentId": AGENT_ID,
        "action": action,
        "details": details
    })
    return resp.json()

# Safety check: audit the trail for unauthorized actions
trail = requests.get(
    f"https://{HOST}/audit/trail/{AGENT_ID}",
    headers=headers
)
entries = trail.json()["entries"]

# Verify chain has not been tampered with
verify = requests.get(
    f"https://{HOST}/audit/verify/{AGENT_ID}",
    headers=headers
)
chain_valid = verify.json()["valid"]

# Flag any restricted actions
violations = [e for e in entries if e["action"] in RESTRICTED_ACTIONS]

print(f"Agent: {AGENT_ID}")
print(f"Chain integrity: {'VALID' if chain_valid else 'TAMPERED'}")
print(f"Total actions: {len(entries)}")
print(f"Safety violations: {len(violations)}")
for v in violations:
    print(f"  [{v['timestamp']}] {v['action']}: {v['details']}")`;

export default function AiSafetyPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For AI Safety
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Verify AI Agent Actions with Tamper-Proof Logs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Monitor agent behavior with <strong>cryptographically verifiable audit logs</strong>.
          Detect unauthorized actions, verify safety constraints, and build
          trustworthy AI systems with <strong>HMAC-SHA256 chain integrity</strong>.
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
          How Safety Teams Use This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Guardrail Verification</h3>
            <p className="text-gray-600 text-sm">
              Log every agent action and audit the trail against your safety
              policy. Detect when agents attempt restricted operations like
              file deletion, code execution, or unauthorized data access.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Tamper Detection</h3>
            <p className="text-gray-600 text-sm">
              The HMAC chain ensures no one — not even a compromised agent —
              can retroactively alter its own audit trail. If logs are
              modified, the cryptographic verification fails immediately.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Behavior Analysis</h3>
            <p className="text-gray-600 text-sm">
              Pull complete action histories for any agent. Analyze patterns,
              identify drift from expected behavior, and build safety metrics
              from production agent activity data.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Safety Violation Scanner in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can an agent tamper with its own audit log?
            </h3>
            <p className="text-gray-600 text-sm">
              No. The log is append-only and entries cannot be updated or
              deleted through the API. Even if an agent were compromised, it
              cannot alter past entries without breaking the HMAC chain. The
              verification endpoint detects any tampering instantly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How do I detect if an agent violated safety constraints?
            </h3>
            <p className="text-gray-600 text-sm">
              Pull the agent&apos;s audit trail and filter by action type.
              Compare against your allowlist of permitted actions. The details
              field contains the full context of each action, so you can
              inspect exactly what the agent did and why.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does this work with any AI agent framework?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API is framework-agnostic — it accepts any agentId,
              action name, and JSON details. Works with LangChain, AutoGen,
              CrewAI, custom agents, or any system that can make HTTP
              requests.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Verifying Agent Safety
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
