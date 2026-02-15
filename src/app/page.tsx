export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            Exit Insights
          </span>
          <a
            href="#pricing"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Stop Losing Institutional Knowledge
          <br />
          <span className="text-gray-400">When Employees Leave</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Exit Insights uses AI to extract undocumented expertise from digital
          artifacts and delivers a structured knowledge transfer package — before
          your departing employee walks out the door.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition hover:bg-gray-700"
          >
            Schedule a Consultation
          </a>
          <a
            href="#how-it-works"
            className="rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 transition hover:border-gray-400"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">42%</div>
              <p className="mt-2 text-sm text-gray-600">
                of institutional knowledge is unique to the departing employee
                and undocumented
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">$45K</div>
              <p className="mt-2 text-sm text-gray-600">
                average cost of replacing an employee — much of it spent
                re-learning what they already knew
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">6 mo</div>
              <p className="mt-2 text-sm text-gray-600">
                average time before a successor reaches the productivity level
                of the person they replaced
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          What You Get
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          A complete, branded knowledge transfer package — 10 professional
          documents generated from your employee&apos;s actual digital artifacts.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Executive Summary",
              desc: "One-page manager briefing with key risks and action items",
            },
            {
              title: "Knowledge Transfer Package",
              desc: "Comprehensive successor handoff with project context and tribal knowledge",
            },
            {
              title: "Knowledge Gap Analysis",
              desc: "Missing documentation ranked by business impact",
            },
            {
              title: "Security Review",
              desc: "PII and credential findings from code and documents",
              badge: "Confidential",
            },
            {
              title: "Integrity Report",
              desc: "Git history pattern analysis for anomaly detection",
              badge: "Confidential",
            },
            {
              title: "Relationship Map",
              desc: "Contact network and communication frequency analysis",
            },
            {
              title: "Interview Guide",
              desc: "Targeted questions for the exit knowledge transfer session",
            },
            {
              title: "Transfer Matrix",
              desc: "Ownership reassignment checklist for every responsibility",
            },
            {
              title: "Access Revocation",
              desc: "System-by-system access removal checklist",
              badge: "Confidential",
            },
            {
              title: "First 30 Days Plan",
              desc: "Week-by-week successor action plan",
            },
          ].map((doc) => (
            <div
              key={doc.title}
              className="rounded-lg border border-gray-200 p-5 transition hover:border-gray-300 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                {doc.badge && (
                  <span className="ml-2 rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                    {doc.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-600">{doc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-y border-gray-100 bg-gray-50 py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Export Artifacts",
                desc: "We guide you through exporting documents, emails, chat logs, calendar, and code from your departing employee's accounts.",
              },
              {
                step: "2",
                title: "AI Analysis",
                desc: "Our AI engine processes every artifact to extract undocumented knowledge, relationships, risks, and tribal expertise.",
              },
              {
                step: "3",
                title: "Generate Package",
                desc: "10 professional documents are generated and delivered as branded PDFs ready for stakeholder distribution.",
              },
              {
                step: "4",
                title: "Transfer & Close",
                desc: "Use the interview guide and transfer matrix to conduct a focused knowledge transfer before the employee's last day.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Why Exit Insights
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Automated Artifact Extraction",
              desc: "No manual interviews required upfront. We analyze actual work product — documents, code, emails, and chats — to surface knowledge that employees often can't articulate.",
            },
            {
              title: "Works for Any Departure Type",
              desc: "Voluntary resignation, layoff, retirement, or internal transfer. The process adapts to the timeline and context of each departure.",
            },
            {
              title: "Security & Compliance Built In",
              desc: "PII detection, credential scanning, and access revocation checklists are generated automatically. Confidential documents are clearly marked.",
            },
            {
              title: "Actionable, Not Theoretical",
              desc: "Every document includes specific action items, owner assignments, and deadlines. The First 30 Days plan gives successors a week-by-week roadmap.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Departure Types */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Every Departure Type, Covered
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 font-semibold text-gray-900">
                    Departure Type
                  </th>
                  <th className="pb-3 font-semibold text-gray-900">
                    Typical Notice
                  </th>
                  <th className="pb-3 font-semibold text-gray-900">
                    Key Challenge
                  </th>
                  <th className="pb-3 font-semibold text-gray-900">
                    How We Help
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  {
                    type: "Voluntary Resignation",
                    notice: "2 weeks",
                    challenge: "Short timeline, employee mentally checked out",
                    help: "AI extracts knowledge from artifacts before the exit interview",
                  },
                  {
                    type: "Layoff / RIF",
                    notice: "Same day",
                    challenge: "Zero cooperation, immediate access loss",
                    help: "Works entirely from existing digital artifacts — no employee participation needed",
                  },
                  {
                    type: "Retirement",
                    notice: "1-3 months",
                    challenge: "Decades of tribal knowledge, no documentation habit",
                    help: "Surfaces 20+ years of undocumented expertise from email and document history",
                  },
                  {
                    type: "Internal Transfer",
                    notice: "2-4 weeks",
                    challenge: "Often skipped entirely — 'they're still in the company'",
                    help: "Structured handoff prevents the 'just Slack me' antipattern",
                  },
                ].map((row) => (
                  <tr key={row.type} className="border-b border-gray-100">
                    <td className="py-3 font-medium text-gray-900">
                      {row.type}
                    </td>
                    <td className="py-3">{row.notice}</td>
                    <td className="py-3">{row.challenge}</td>
                    <td className="py-3">{row.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Pricing
        </h2>
        <div className="mx-auto mt-10 max-w-md rounded-xl border border-gray-200 p-8 text-center shadow-sm">
          <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Per Employee Departure
          </div>
          <div className="mt-4 text-5xl font-bold text-gray-900">$1,500</div>
          <p className="mt-4 text-sm text-gray-600">
            Includes data collection guidance, AI analysis, 10-document branded
            PDF package, and a 30-minute consultation call.
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm text-gray-600">
            {[
              "Full 10-document knowledge transfer package",
              "Branded PDF export ready for stakeholders",
              "Security review with PII and credential detection",
              "30-minute walkthrough call with your team",
              "Delivered within 48 hours of receiving artifacts",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="mailto:sgharlow@gmail.com?subject=Exit%20Insights%20—%20Consultation%20Request"
            className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition hover:bg-gray-700"
          >
            Schedule a Consultation
          </a>
          <p className="mt-4 text-xs text-gray-400">
            Volume pricing available for 5+ departures.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-8">
            {[
              {
                q: "What artifacts do you need from us?",
                a: "We provide a step-by-step data gathering guide covering exports from Google Drive, OneDrive, Slack, Teams, email, calendar, code repositories, and wiki platforms. Most exports take 15-30 minutes total.",
              },
              {
                q: "Does the departing employee need to participate?",
                a: "No. Exit Insights works entirely from existing digital artifacts. However, we generate an Interview Guide document that helps you conduct a focused knowledge transfer session if the employee is available.",
              },
              {
                q: "How is sensitive data handled?",
                a: "All processing happens locally on your infrastructure — no data is sent to external servers. The Security Review document identifies any PII or credentials found in the artifacts so you can address them.",
              },
              {
                q: "How long does the process take?",
                a: "Once we receive the exported artifacts, the analysis and document generation is completed within 48 hours. The entire process from kickoff to delivery typically takes 3-5 business days.",
              },
              {
                q: "What if the employee has already left?",
                a: "Exit Insights works as long as the digital artifacts are still accessible. We recommend running the analysis within 90 days of departure, before accounts are deprovisioned.",
              },
              {
                q: "Do you offer volume pricing?",
                a: "Yes. For organizations planning 5 or more knowledge transfers, we offer volume pricing and can set up a recurring engagement. Contact us for details.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-gray-400">
        <p>&copy; 2026 Exit Insights. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="mailto:sgharlow@gmail.com"
            className="text-gray-500 transition hover:text-gray-700"
          >
            sgharlow@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
