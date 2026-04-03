import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Debug and Monitor AI Agent Behavior in Production — Agent Audit Log API',
  description:
    'Add production monitoring to your AI agents. Log tool calls, trace decision chains, and debug agent failures with tamper-proof HMAC audit trails. Built for developers shipping agents to production.',
  keywords: [
    'ai agent debugging api',
    'monitor ai agent production',
    'agent observability api',
    'ai agent logging tool',
    'debug ai agent behavior',
    'agent tool call logging',
    'ai agent tracing api',
    'production agent monitoring',
    'agent error tracking',
    'ai agent devtools',
  ],
  openGraph: {
    title: 'Debug and Monitor AI Agent Behavior in Production',
    description:
      'Production monitoring for AI agents. Log tool calls, trace decisions, and debug failures with tamper-proof audit trails. Free tier available.',
    type: 'website',
  },
};

const RAPIDAPI_URL = 'https://rapidapi.com/lulzasaur9192/api/ai-agent-compliance-logger-api?utm_source=pricetrackr&utm_medium=seo-site&utm_campaign=audit-developers';

const pythonExample = `import requests
import time

HOST = "agent-audit-log.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": HOST,
    "Content-Type": "application/json"
}

class AuditedAgent:
    """Wrapper that adds audit logging to any agent."""

    def __init__(self, agent_id):
        self.agent_id = agent_id

    def log(self, action, details):
        requests.post(f"https://{HOST}/audit/log", headers=headers, json={
            "agentId": self.agent_id,
            "action": action,
            "details": details
        })

    def call_tool(self, tool_name, args):
        start = time.time()
        try:
            result = self._execute_tool(tool_name, args)
            self.log("tool_call", {
                "tool": tool_name,
                "args": args,
                "status": "success",
                "duration_ms": int((time.time() - start) * 1000)
            })
            return result
        except Exception as e:
            self.log("tool_error", {
                "tool": tool_name,
                "args": args,
                "error": str(e),
                "duration_ms": int((time.time() - start) * 1000)
            })
            raise

    def _execute_tool(self, tool_name, args):
        # Your tool execution logic here
        pass

# Debug a production issue — get the full action trace
agent = AuditedAgent("order-processor-prod")
trail = requests.get(
    f"https://{HOST}/audit/trail/{agent.agent_id}",
    headers=headers
)
entries = trail.json()["entries"]

# Find errors in the last 50 actions
errors = [e for e in entries[-50:] if e["action"] == "tool_error"]
print(f"Recent errors: {len(errors)}")
for err in errors:
    print(f"  [{err['timestamp']}] {err['details']['tool']}: {err['details']['error']}")`;

export default function DevelopersPage() {
  return (
    <>
      <section className="text-center py-16 border-b border-gray-100 mb-12">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
          For Developers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Debug and Monitor AI Agent Behavior in Production
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Add <strong>production-grade observability</strong> to your AI agents.
          Log every tool call, trace decision chains, and debug failures with
          <strong> tamper-proof audit trails</strong> you can trust.
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
          What Developers Build With This API
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Tool Call Tracing</h3>
            <p className="text-gray-600 text-sm">
              Log every tool invocation with arguments, results, and duration.
              When an agent misbehaves in production, trace the exact sequence
              of tool calls that led to the issue.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Error Tracking</h3>
            <p className="text-gray-600 text-sm">
              Capture agent failures with full context. Log error details,
              stack traces, and the agent state at the time of failure. Filter
              audit trails by action type to find all errors quickly.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Decision Replay</h3>
            <p className="text-gray-600 text-sm">
              Reconstruct the full decision history of any agent run. See
              every action in order with timestamps and details — the HMAC
              chain guarantees the sequence has not been altered.
            </p>
          </div>
        </div>
      </section>

      <section id="code-examples" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Example: Audited Agent Wrapper in Python
        </h2>
        <CodeBlock language="python" code={pythonExample} />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              How much latency does logging add?
            </h3>
            <p className="text-gray-600 text-sm">
              The logging endpoint is designed to be fast. Fire-and-forget
              POST requests typically complete in under 100ms. For
              latency-sensitive agents, you can log asynchronously in a
              background thread so the audit call does not block your agent
              loop.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Does this integrate with LangChain, CrewAI, or AutoGen?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes. The API is a simple REST endpoint — add a logging call
              wherever your framework exposes tool execution hooks. For
              LangChain, use a callback handler. For CrewAI, wrap your tool
              functions. Any framework that can make HTTP requests works.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Can I query logs by action type or time range?
            </h3>
            <p className="text-gray-600 text-sm">
              Pull the full audit trail for an agent and filter client-side by
              action type, timestamp, or any field in the details object.
              The trail endpoint returns all entries in chronological order
              with complete metadata.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Start Monitoring Your Agents
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
