export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-notify stakeholders of<br />
          <span className="text-[#58a6ff]">relevant changelog updates</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor changelog feeds, parse impact areas with AI, and send targeted
          notifications to the right people via email or Slack — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $14/mo
        </a>
        <ul className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-left">
          {[
            ["RSS & Webhook Ingestion", "Connect any changelog feed in seconds."],
            ["AI Impact Parsing", "Extracts affected teams and keywords automatically."],
            ["Email & Slack Alerts", "Stakeholders only see what matters to them."]
          ].map(([title, desc]) => (
            <li key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="font-semibold text-white mb-1">{title}</p>
              <p className="text-[#8b949e]">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited changelog sources",
              "AI-powered impact extraction",
              "Email + Slack notifications",
              "Notification rules dashboard",
              "Changelog history & audit log"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Which changelog formats are supported?",
              "We support RSS/Atom feeds and incoming webhooks (JSON). If your tool can send a webhook or publish an RSS feed, it works."
            ],
            [
              "How does the AI decide who to notify?",
              "You define keyword rules and team assignments in the dashboard. The AI parses each changelog entry and matches it against your rules to route notifications."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] ml-4">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Changelog Stakeholder Notifier. All rights reserved.
      </footer>
    </main>
  );
}
