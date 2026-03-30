import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';
import GadsConversion from '@/components/GadsConversion';

export const metadata: Metadata = {
  title: 'Agent Audit Log API — Tamper-Proof HMAC Audit Trails for AI Agents',
  description:
    'Log and verify AI agent actions with HMAC-SHA256 chained audit trails. Immutable, append-only logs with cryptographic integrity verification. Built for enterprise compliance and AI safety.',
  keywords: [
    'ai agent audit log api',
    'agent audit trail',
    'hmac audit log',
    'ai agent monitoring api',
    'tamper proof agent log',
    'ai compliance audit api',
    'agent action logging',
    'ai safety verification api',
    'cryptographic audit trail',
    'agent behavior monitoring',
  ],
  openGraph: {
    title: 'Agent Audit Log API — Tamper-Proof AI Agent Audit Trails',
    description:
      'HMAC-SHA256 chained audit logs for AI agents. Log actions, verify integrity, and prove compliance with cryptographic audit trails. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/agent-audit-log?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=audit-api-page';

const curlExample = `curl -X POST "https://agent-audit-log.p.rapidapi.com/audit/log" \\
  -H "X-RapidAPI-Key: YOUR_API_KEY" \\
  -H "X-RapidAPI-Host: agent-audit-log.p.rapidapi.com" \\
  -H "Content-Type: application/json" \\
  -d '{"agentId": "agent-47", "action": "tool_call", "details": {"tool": "web_search", "query": "quarterly revenue"}}'`;

const pythonExample = `import requests

HOST = "agent-audit-log.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": HOST,
    "Content-Type": "application/json"
}

# Log an agent action
resp = requests.post(
    f"https://{HOST}/audit/log",
    headers=headers,
    json={
        "agentId": "agent-47",
        "action": "tool_call",
        "details": {"tool": "web_search", "query": "quarterly revenue"}
    }
)
entry = resp.json()
print(f"Logged: {entry['id']} — hash: {entry['hash'][:16]}...")

# Verify the full audit trail
verify = requests.get(
    f"https://{HOST}/audit/verify/agent-47",
    headers=headers
)
result = verify.json()
print(f"Chain integrity: {'VALID' if result['valid'] else 'BROKEN'}")
print(f"Total entries: {result['entryCount']}")`;

const jsExample = `const HOST = "agent-audit-log.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "YOUR_API_KEY",
  "X-RapidAPI-Host": HOST,
  "Content-Type": "application/json",
};

// Log an agent action
const logResp = await fetch(\`https://\${HOST}/audit/log\`, {
  method: "POST",
  headers,
  body: JSON.stringify({
    agentId: "agent-47",
    action: "tool_call",
    details: { tool: "web_search", query: "quarterly revenue" },
  }),
});
const entry = await logResp.json();
console.log(\`Logged: \${entry.id} — hash: \${entry.hash.slice(0, 16)}...\`);

// Verify the full audit trail
const verifyResp = await fetch(
  \`https://\${HOST}/audit/verify/agent-47\`,
  { headers }
);
const result = await verifyResp.json();
console.log(\`Chain integrity: \${result.valid ? "VALID" : "BROKEN"}\`);`;

export default function AgentAuditLogPage() {
  return (
    <>
      <GadsConversion />

      {/* Hero */}
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          REST API
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Agent Audit Log API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          <strong>Tamper-proof audit trails</strong> for AI agents. Every action
          is logged with an <strong>HMAC-SHA256 hash chain</strong> — each entry
          cryptographically links to the previous one, making tampering
          detectable instantly.
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
            <div className="text-3xl mb-3">&#x1F512;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              HMAC-SHA256 Hash Chain
            </h3>
            <p className="text-gray-600 text-sm">
              Every audit entry includes an HMAC hash of the previous entry.
              If any record is modified or deleted, the chain breaks and
              verification fails immediately.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F50D;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Instant Integrity Verification
            </h3>
            <p className="text-gray-600 text-sm">
              One API call verifies your entire audit trail. The verification
              endpoint walks the hash chain and confirms every entry is
              unmodified and in sequence.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="text-3xl mb-3">&#x1F4DD;</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Agent-Scoped Trails
            </h3>
            <p className="text-gray-600 text-sm">
              Each agent gets its own audit trail. Log tool calls, decisions,
              data access, and any action your agent takes — then query and
              verify per agent.
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
              title: 'Enterprise Compliance Teams',
              desc: 'Prove to auditors that your AI agents acted within policy. Cryptographic audit trails satisfy SOC 2, ISO 27001, and internal compliance requirements.',
            },
            {
              title: 'AI Safety Researchers',
              desc: 'Monitor and verify agent behavior in production. Detect when agents deviate from expected action patterns with immutable, tamper-proof logs.',
            },
            {
              title: 'AI Platform Developers',
              desc: 'Add audit logging to your agent framework. Debug issues, trace tool calls, and build accountability into your agent infrastructure.',
            },
            {
              title: 'Regulated Industries',
              desc: 'Financial services, healthcare, and legal firms running AI agents need provable audit trails. HMAC chains provide cryptographic proof of log integrity.',
            },
          ].map((uc) => (
            <div key={uc.title} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{uc.title}</h3>
              <p className="text-gray-600 text-sm">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Case Deep Dives */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Explore Use Cases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Enterprise Compliance', desc: 'SOC 2 and ISO 27001 audit trails for AI agent operations.', href: '/apis/agent-audit-log/enterprise-compliance' },
            { title: 'AI Safety Verification', desc: 'Verify agent actions with tamper-proof cryptographic logs.', href: '/apis/agent-audit-log/ai-safety' },
            { title: 'Developer Monitoring', desc: 'Debug and monitor AI agent behavior in production.', href: '/apis/agent-audit-log/developers' },
          ].map((uc) => (
            <a
              key={uc.title}
              href={uc.href}
              className="border border-gray-200 rounded-lg p-5 bg-white hover:border-purple-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-purple-600 mb-1">{uc.title}</h3>
              <p className="text-gray-600 text-sm">{uc.desc}</p>
            </a>
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
              How does the HMAC chain work?
            </h3>
            <p className="text-gray-600 text-sm">
              Each audit entry is hashed using HMAC-SHA256. The hash includes
              the previous entry&apos;s hash, creating a cryptographic chain.
              If any entry is modified, deleted, or reordered, the chain breaks
              and the verification endpoint reports exactly where the tampering
              occurred.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              What data can I log?
            </h3>
            <p className="text-gray-600 text-sm">
              Each entry takes an agentId, action name, and a freeform details
              object. Log tool calls, API requests, decisions, data access
              events, file operations — anything your agent does. The details
              field accepts any JSON structure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is the log truly immutable?
            </h3>
            <p className="text-gray-600 text-sm">
              The log is append-only. Entries cannot be updated or deleted
              through the API. The HMAC chain provides cryptographic proof that
              no entries have been modified after creation. You can verify the
              full chain at any time with a single API call.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Is there a free tier?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The free tier includes 200 requests per month with no credit
              card required. This covers both logging and verification calls.
              Upgrade to Pro for 5,000 requests/month at $9.99.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Logging Agent Actions in Minutes
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
