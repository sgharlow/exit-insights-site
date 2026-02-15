import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Output — Exit Insights",
  description:
    "See what an Exit Insights knowledge transfer package looks like. Sample documents from a fictional employee departure.",
};

function SampleBanner() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
      <strong>Sample Output</strong> — All names, companies, and data below are
      fictional. This demonstrates the format and depth of an actual Exit
      Insights package.
    </div>
  );
}

function DocSection({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {badge && (
          <span className="rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
            {badge}
          </span>
        )}
      </div>
      <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
    </section>
  );
}

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Exit Insights
          </Link>
          <a
            href="mailto:sgharlow@gmail.com?subject=Exit%20Insights%20—%20Consultation%20Request"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Get Started
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sample Knowledge Transfer Package
        </h1>
        <p className="mt-3 text-gray-600">
          Below are excerpts from a complete Exit Insights package generated for
          a fictional departure — Jane Martinez, Senior Platform Engineer at
          Acme Corp, voluntary resignation with a March 1, 2026 last day.
        </p>

        <div className="mt-6">
          <SampleBanner />
        </div>

        {/* Table of Contents */}
        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">
            Package Contents (10 Documents)
          </h2>
          <div className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
            <a href="#executive-summary" className="text-blue-700 hover:underline">
              1. Executive Summary
            </a>
            <a href="#handoff-package" className="text-blue-700 hover:underline">
              2. Knowledge Transfer Package
            </a>
            <a href="#knowledge-gaps" className="text-blue-700 hover:underline">
              3. Knowledge Gap Analysis
            </a>
            <a href="#security-review" className="text-blue-700 hover:underline">
              4. Security Review
            </a>
            <a href="#relationship-map" className="text-blue-700 hover:underline">
              5. Relationship Map
            </a>
            <a href="#interview-guide" className="text-blue-700 hover:underline">
              6. Interview Guide
            </a>
            <a href="#transfer-matrix" className="text-blue-700 hover:underline">
              7. Transfer Matrix
            </a>
            <a href="#access-revocation" className="text-blue-700 hover:underline">
              8. Access Revocation
            </a>
            <a href="#first-30-days" className="text-blue-700 hover:underline">
              9. First 30 Days Plan
            </a>
            <span className="text-gray-500">
              10. Processing Manifest (JSON)
            </span>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-10 space-y-8">
          {/* 1. Executive Summary */}
          <div id="executive-summary">
            <DocSection title="1. Executive Summary">
              <div className="mb-4 rounded border border-gray-100 bg-gray-50 p-4 text-xs text-gray-500">
                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  <div>
                    <strong>Employee:</strong> Jane Martinez (EMP-4521)
                  </div>
                  <div>
                    <strong>Department:</strong> Engineering
                  </div>
                  <div>
                    <strong>Title:</strong> Senior Platform Engineer
                  </div>
                  <div>
                    <strong>Manager:</strong> David Chen
                  </div>
                  <div>
                    <strong>Tenure:</strong> 4 years, 11 months
                  </div>
                  <div>
                    <strong>Last Day:</strong> March 1, 2026
                  </div>
                </div>
              </div>

              <h3>Critical Handoff Items</h3>
              <ol>
                <li>
                  <strong>Alpha Migration Phase 3-5</strong> — Jane is sole
                  architect. Cutover window March 15-23 with no backup lead
                  assigned.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: architecture.md, status-update.md]
                  </span>
                </li>
                <li>
                  <strong>RDS Connection Pool Configuration</strong> — Hard
                  limit of 150 connections divided across 4 services.
                  Undocumented allocation known only to Jane.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: On-Call-Playbook, Slack #project-alpha, email]
                  </span>
                </li>
                <li>
                  <strong>DataSync Corp vendor relationship</strong> — Jane is
                  primary contact for $85K/year contract renewal due April 15.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: calendar, email-archive]
                  </span>
                </li>
                <li>
                  <strong>Beta Analytics Dashboard</strong> — Spec complete but
                  implementation blocked on security review.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: dashboard-spec.md]
                  </span>
                </li>
                <li>
                  <strong>QBR Process Ownership</strong> — Jane runs quarterly
                  business reviews; next one scheduled March 20.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: quarterly-review-process.md, calendar]
                  </span>
                </li>
              </ol>

              <h3>Knowledge Risk Assessment</h3>
              <ul>
                <li>
                  <strong>Overall Risk:</strong> HIGH
                </li>
                <li>
                  <strong>Bus Factor:</strong> 7 systems/processes where Jane is
                  sole expert
                </li>
                <li>
                  <strong>Active Projects at Risk:</strong> 2 (Alpha Migration,
                  Beta Dashboard)
                </li>
                <li>
                  <strong>Undocumented Areas:</strong> 13 knowledge gaps
                  identified
                </li>
                <li>
                  <strong>Tribal Knowledge Items:</strong> 9 items tagged HIGH
                  priority
                </li>
              </ul>

              <h3>Recommended Actions</h3>
              <ol>
                <li>
                  Assign Alpha Migration backup lead by Feb 21 — cutover cannot
                  proceed without handoff
                </li>
                <li>
                  Schedule 3 x 60-min knowledge transfer sessions using the
                  Interview Guide (32 questions prepared)
                </li>
                <li>
                  Transfer DataSync Corp relationship to Priya Sharma before
                  contract renewal date
                </li>
              </ol>

              <h3>Pre-Departure Transition Timeline</h3>
              <p className="text-xs font-semibold uppercase text-gray-500">
                2+ Weeks Before (by Feb 14)
              </p>
              <ul className="text-sm">
                <li>Assign backup lead for Alpha Migration</li>
                <li>Begin knowledge transfer sessions (Session 1)</li>
                <li>Notify DataSync Corp of contact change</li>
              </ul>
              <p className="text-xs font-semibold uppercase text-gray-500">
                1 Week Before (by Feb 22)
              </p>
              <ul className="text-sm">
                <li>Complete Sessions 2 and 3</li>
                <li>Transfer QBR process documentation</li>
                <li>Begin credential rotation for shared accounts</li>
              </ul>
              <p className="text-xs font-semibold uppercase text-gray-500">
                Last Day (Mar 1)
              </p>
              <ul className="text-sm">
                <li>Execute access revocation checklist (27 accounts)</li>
                <li>Confirm all transfer matrix items assigned</li>
                <li>Archive Jane&apos;s communication channels</li>
              </ul>
            </DocSection>
          </div>

          {/* 2. Handoff Package (excerpt) */}
          <div id="handoff-package">
            <DocSection title="2. Knowledge Transfer Package (Excerpt)">
              <p className="italic text-gray-500">
                Showing 2 of 9 sections from the full 24-page document.
              </p>

              <h3>Active Projects</h3>

              <h4>Alpha Migration (Phase 3-5)</h4>
              <p>
                <strong>Status:</strong> Phase 3 of 5 (70% complete) — At Risk
              </p>
              <p>
                The Alpha Migration moves the legacy monolith to microservices
                on EKS. Jane architected the service decomposition and owns the
                cutover plan. Phases 1-2 (auth service and user service
                extraction) completed in Q3 2025. Phase 3 (order service) is
                in-progress with the cutover window scheduled for March 15-23.{" "}
                <span className="text-xs text-gray-400">
                  [Source: architecture.md, status-update.md]
                </span>
              </p>

              <div className="my-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-4">Item</th>
                      <th className="pb-2 pr-4">Status</th>
                      <th className="pb-2">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Order service API contracts</td>
                      <td className="py-2 pr-4">Complete</td>
                      <td className="py-2">architecture.md</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Data migration scripts</td>
                      <td className="py-2 pr-4">In Progress (60%)</td>
                      <td className="py-2">code-repo, Slack</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Load testing</td>
                      <td className="py-2 pr-4">Not Started</td>
                      <td className="py-2">status-update.md</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Rollback procedure</td>
                      <td className="py-2 pr-4">Documented</td>
                      <td className="py-2">Alpha-Migration-Runbook</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Tribal Knowledge (Excerpt — 3 of 9 items)</h3>

              <div className="rounded border-l-4 border-amber-400 bg-amber-50 p-3 text-sm">
                <p className="font-semibold">
                  RDS Connection Pool Limits{" "}
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-700">
                    HIGH
                  </span>
                </p>
                <p className="mt-1">
                  The shared RDS instance has a hard limit of 150 connections
                  divided across 4 services: Alpha API (50), Beta Analytics
                  (30), Internal Tools (20), Migration Worker (50), with 10
                  reserved for DBA access. Do NOT increase max_connections — the
                  db.r5.large instance cannot handle more without upgrading. Use
                  read replica for ad-hoc queries during peak hours.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: architecture.md, On-Call-Playbook, Slack, email — 6
                    sources]
                  </span>
                </p>
              </div>

              <div className="mt-3 rounded border-l-4 border-amber-400 bg-amber-50 p-3 text-sm">
                <p className="font-semibold">
                  Batch Size for Data Migration{" "}
                  <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-700">
                    HIGH
                  </span>
                </p>
                <p className="mt-1">
                  BATCH_SIZE must stay at 500 for the migration worker. Jane
                  tested 1,000 and 2,000 in staging — both caused OOM kills on
                  the t3.medium worker nodes. The 500 limit is not documented
                  anywhere except a Slack thread from October 2025.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: Slack #project-alpha, code-repo config]
                  </span>
                </p>
              </div>

              <div className="mt-3 rounded border-l-4 border-yellow-300 bg-yellow-50 p-3 text-sm">
                <p className="font-semibold">
                  Vendor Procurement Threshold{" "}
                  <span className="rounded bg-yellow-100 px-1.5 py-0.5 text-xs text-yellow-700">
                    MEDIUM
                  </span>
                </p>
                <p className="mt-1">
                  Any vendor purchase over $50K requires VP sign-off and a
                  3-vendor comparison. Jane handles this for DataSync and
                  CloudWatch contracts. The process is in
                  vendor-evaluation-template.md but the approval routing (who
                  signs what) is only in Jane&apos;s head.{" "}
                  <span className="text-xs text-gray-400">
                    [Source: vendor-evaluation-template.md, email-archive]
                  </span>
                </p>
              </div>
            </DocSection>
          </div>

          {/* 3. Knowledge Gaps */}
          <div id="knowledge-gaps">
            <DocSection title="3. Knowledge Gap Analysis (Excerpt)">
              <p className="text-sm text-gray-500">
                13 gaps identified: 4 HIGH, 5 MEDIUM, 4 LOW. Showing top 3.
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded border border-red-100 bg-red-50/50 p-4">
                  <h4 className="text-sm font-bold">
                    GAP-001: Staging Environment Setup Guide —{" "}
                    <span className="text-red-700">HIGH</span>
                  </h4>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <strong>Area:</strong> Infrastructure / Shared
                      environments
                    </p>
                    <p>
                      <strong>Evidence:</strong> Jane shared staging gotchas in
                      Slack #general but committed to writing a formal guide
                      &quot;this sprint&quot; — never created.{" "}
                      <span className="text-xs text-gray-400">
                        [Source: Slack #general messages 8-11]
                      </span>
                    </p>
                    <p>
                      <strong>Business Impact:</strong> New engineers will hit
                      avoidable 2-3 day delays setting up staging
                    </p>
                    <p>
                      <strong>Recommended Action:</strong> Consolidate
                      Jane&apos;s Slack messages into a staging setup guide
                    </p>
                    <p>
                      <strong>Suggested Owner:</strong> Raj Patel
                      (post-departure)
                    </p>
                  </div>
                </div>

                <div className="rounded border border-red-100 bg-red-50/50 p-4">
                  <h4 className="text-sm font-bold">
                    GAP-002: Alpha Cutover Rollback Decision Tree —{" "}
                    <span className="text-red-700">HIGH</span>
                  </h4>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <strong>Area:</strong> Migration / Disaster Recovery
                    </p>
                    <p>
                      <strong>Evidence:</strong> Runbook covers happy-path
                      rollback but not partial failure scenarios. Jane discussed
                      &quot;what to do if only 2 of 4 services cut over&quot; in
                      a 1:1 with David Chen — no written record.{" "}
                      <span className="text-xs text-gray-400">
                        [Source: Alpha-Migration-Runbook, calendar]
                      </span>
                    </p>
                    <p>
                      <strong>Business Impact:</strong> Partial cutover failure
                      without decision tree could cause 4-8 hour outage
                    </p>
                    <p>
                      <strong>Recommended Action:</strong> Document partial
                      failure scenarios before March 15 cutover window
                    </p>
                    <p>
                      <strong>Suggested Owner:</strong> Jane Martinez
                      (pre-departure)
                    </p>
                  </div>
                </div>

                <div className="rounded border border-amber-100 bg-amber-50/50 p-4">
                  <h4 className="text-sm font-bold">
                    GAP-003: QBR Slide Deck Template Location —{" "}
                    <span className="text-amber-700">MEDIUM</span>
                  </h4>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <strong>Area:</strong> Process / Business Operations
                    </p>
                    <p>
                      <strong>Evidence:</strong> quarterly-review-process.md
                      describes the process but doesn&apos;t link to the actual
                      slide template. Jane creates slides from scratch each
                      quarter from a personal template.{" "}
                      <span className="text-xs text-gray-400">
                        [Source: quarterly-review-process.md]
                      </span>
                    </p>
                    <p>
                      <strong>Business Impact:</strong> Successor will spend
                      3-4 hours recreating slide format each quarter
                    </p>
                    <p>
                      <strong>Recommended Action:</strong> Save current QBR
                      template to shared drive
                    </p>
                    <p>
                      <strong>Suggested Owner:</strong> Jane Martinez
                      (pre-departure)
                    </p>
                  </div>
                </div>
              </div>
            </DocSection>
          </div>

          {/* 4. Security Review */}
          <div id="security-review">
            <DocSection title="4. Security Review (Excerpt)" badge="Confidential">
              <p className="text-sm text-gray-500">
                5 findings: 1 CRITICAL, 2 HIGH, 2 MEDIUM. Showing top 3.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-3">#</th>
                      <th className="pb-2 pr-3">Type</th>
                      <th className="pb-2 pr-3">Source File</th>
                      <th className="pb-2 pr-3">Location</th>
                      <th className="pb-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-red-50">
                      <td className="py-2 pr-3 font-bold text-red-700">C1</td>
                      <td className="py-2 pr-3">API Key</td>
                      <td className="py-2 pr-3">
                        code-repo/config/production.json
                      </td>
                      <td className="py-2 pr-3">
                        Line 42, cloudAnalyticsApiKey
                      </td>
                      <td className="py-2 font-medium text-red-700">
                        REDACT + Rotate
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-3 font-bold text-amber-700">H1</td>
                      <td className="py-2 pr-3">Database Password</td>
                      <td className="py-2 pr-3">
                        code-repo/config/production.json
                      </td>
                      <td className="py-2 pr-3">Line 8, db_password</td>
                      <td className="py-2 font-medium text-amber-700">
                        REDACT + Rotate
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-3 font-bold text-amber-700">H2</td>
                      <td className="py-2 pr-3">Personal Email</td>
                      <td className="py-2 pr-3">
                        email-archive/vendor-contract.eml
                      </td>
                      <td className="py-2 pr-3">
                        Body, jane.m.personal@gmail.com
                      </td>
                      <td className="py-2 font-medium text-amber-700">
                        REDACT
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded bg-gray-50 p-3 text-xs text-gray-600">
                <strong>Summary:</strong> 5 sensitive data instances found
                across 3 files. 1 requires immediate credential rotation. 3 have
                been automatically redacted in the handoff package. 1 requires
                human review.
              </div>
            </DocSection>
          </div>

          {/* 5. Relationship Map */}
          <div id="relationship-map">
            <DocSection title="5. Relationship Map (Excerpt)">
              <p className="text-sm text-gray-500">
                14 contacts mapped (9 internal, 5 external). Showing key
                contacts.
              </p>

              <h4 className="mt-3 text-sm font-semibold">Internal Contacts</h4>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-3">Name</th>
                      <th className="pb-2 pr-3">Role</th>
                      <th className="pb-2 pr-3">Relationship</th>
                      <th className="pb-2 pr-3">Projects</th>
                      <th className="pb-2">Handoff?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-3 font-medium">David Chen</td>
                      <td className="py-2 pr-3">Eng Manager</td>
                      <td className="py-2 pr-3">Direct manager</td>
                      <td className="py-2 pr-3">All</td>
                      <td className="py-2">N/A</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-3 font-medium">Raj Patel</td>
                      <td className="py-2 pr-3">Platform Engineer</td>
                      <td className="py-2 pr-3">Peer, closest collaborator</td>
                      <td className="py-2 pr-3">Alpha, On-Call</td>
                      <td className="py-2 text-green-700">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-3 font-medium">Priya Sharma</td>
                      <td className="py-2 pr-3">Senior Engineer</td>
                      <td className="py-2 pr-3">Cross-team partner</td>
                      <td className="py-2 pr-3">Beta Dashboard</td>
                      <td className="py-2 text-green-700">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium">Lisa Park</td>
                      <td className="py-2 pr-3">VP Engineering</td>
                      <td className="py-2 pr-3">Skip-level, QBR sponsor</td>
                      <td className="py-2 pr-3">QBR</td>
                      <td className="py-2 text-green-700">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="mt-4 text-sm font-semibold">
                External Contacts
              </h4>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-3">Name</th>
                      <th className="pb-2 pr-3">Organization</th>
                      <th className="pb-2 pr-3">Meetings (12mo)</th>
                      <th className="pb-2 pr-3">Frequency</th>
                      <th className="pb-2">Handoff Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-3 font-medium">Sarah Jones</td>
                      <td className="py-2 pr-3">DataSync Corp</td>
                      <td className="py-2 pr-3">18</td>
                      <td className="py-2 pr-3">Bi-weekly</td>
                      <td className="py-2 font-medium text-red-700">HIGH</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium">Mike Torres</td>
                      <td className="py-2 pr-3">CloudWatch Solutions</td>
                      <td className="py-2 pr-3">6</td>
                      <td className="py-2 pr-3">Monthly</td>
                      <td className="py-2 font-medium text-amber-700">
                        MEDIUM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DocSection>
          </div>

          {/* 6. Interview Guide */}
          <div id="interview-guide">
            <DocSection title="6. Interview Guide (Excerpt)">
              <p className="text-sm text-gray-500">
                32 questions across 3 sessions. Showing Session 1.
              </p>

              <div className="mt-3 rounded bg-blue-50 p-3 text-sm text-blue-800">
                <strong>Session Format:</strong> 3 sessions x 60 min each.
                Priority 1-2 in Session 1, Priority 3-4 in Session 2, Priority
                4-5 + Closing in Session 3.
              </div>

              <h4 className="mt-4 text-sm font-semibold">
                Session 1: Critical Knowledge Gaps &amp; Project Alpha
              </h4>

              <div className="mt-3 space-y-3 text-sm">
                <div className="rounded border border-gray-200 p-3">
                  <p className="font-medium">
                    1. Walk me through how you set up the staging environment
                    from scratch — what are the gotchas that aren&apos;t
                    documented?
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    [Context: GAP-001 — staging guide was promised but never
                    written]
                  </p>
                </div>
                <div className="rounded border border-gray-200 p-3">
                  <p className="font-medium">
                    2. If the Alpha cutover partially fails — say 2 of 4
                    services migrate but 2 don&apos;t — what&apos;s the decision
                    tree?
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    [Context: GAP-002 — rollback runbook only covers full
                    rollback, not partial failure]
                  </p>
                </div>
                <div className="rounded border border-gray-200 p-3">
                  <p className="font-medium">
                    3. What&apos;s the ONE thing that would go wrong first if no
                    one was watching the Alpha migration?
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    [Context: Identifies highest-risk unmonitored dependency]
                  </p>
                </div>
                <div className="rounded border border-gray-200 p-3">
                  <p className="font-medium">
                    4. You mentioned the RDS connection pool is divided across 4
                    services with specific allocations. How did you arrive at
                    those numbers, and what happens if we need to add a 5th
                    service?
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    [Context: Tribal knowledge — 6 sources mention this but with
                    inconsistent values]
                  </p>
                </div>
              </div>
            </DocSection>
          </div>

          {/* 7. Transfer Matrix */}
          <div id="transfer-matrix">
            <DocSection title="7. Transfer Matrix (Excerpt)">
              <p className="text-sm text-gray-500">
                26 items requiring transfer. Showing Active Projects section.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-2">#</th>
                      <th className="pb-2 pr-3">Item</th>
                      <th className="pb-2 pr-3">Role</th>
                      <th className="pb-2 pr-3">Status</th>
                      <th className="pb-2 pr-3">Proposed Owner</th>
                      <th className="pb-2 pr-3">Transfer By</th>
                      <th className="pb-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-red-50">
                      <td className="py-2 pr-2">1</td>
                      <td className="py-2 pr-3 font-medium">
                        Alpha Migration
                      </td>
                      <td className="py-2 pr-3">Lead, Architect</td>
                      <td className="py-2 pr-3">At Risk (70%)</td>
                      <td className="py-2 pr-3 italic text-gray-500">
                        [TBD — Manager Decision]
                      </td>
                      <td className="py-2 pr-3">Feb 21</td>
                      <td className="py-2">
                        Critical: cutover Mar 15-23
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-2">2</td>
                      <td className="py-2 pr-3 font-medium">
                        Beta Dashboard
                      </td>
                      <td className="py-2 pr-3">Spec Author</td>
                      <td className="py-2 pr-3">Blocked</td>
                      <td className="py-2 pr-3">Priya Sharma</td>
                      <td className="py-2 pr-3">Feb 28</td>
                      <td className="py-2">
                        Awaiting security review
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-2">3</td>
                      <td className="py-2 pr-3 font-medium">
                        DataSync Relationship
                      </td>
                      <td className="py-2 pr-3">Primary Contact</td>
                      <td className="py-2 pr-3">Active</td>
                      <td className="py-2 pr-3">Priya Sharma</td>
                      <td className="py-2 pr-3">Feb 21</td>
                      <td className="py-2">
                        $85K renewal Apr 15
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-2">4</td>
                      <td className="py-2 pr-3 font-medium">QBR Process</td>
                      <td className="py-2 pr-3">Owner, Presenter</td>
                      <td className="py-2 pr-3">Recurring</td>
                      <td className="py-2 pr-3 italic text-gray-500">
                        [TBD — Manager Decision]
                      </td>
                      <td className="py-2 pr-3">Feb 28</td>
                      <td className="py-2">Next QBR Mar 20</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-2">5</td>
                      <td className="py-2 pr-3 font-medium">On-Call Rotation</td>
                      <td className="py-2 pr-3">Participant</td>
                      <td className="py-2 pr-3">Recurring</td>
                      <td className="py-2 pr-3">Raj Patel</td>
                      <td className="py-2 pr-3">Mar 1</td>
                      <td className="py-2">
                        Remove from PagerDuty
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded bg-gray-50 p-3 text-xs">
                <strong>Transfer Summary:</strong> 26 items requiring transfer.
                18 have proposed owners (69%). 8 require manager decision. 3
                critical items with deadline within 2 weeks.
              </div>
            </DocSection>
          </div>

          {/* 8. Access Revocation */}
          <div id="access-revocation">
            <DocSection
              title="8. Access Revocation (Excerpt)"
              badge="Confidential"
            >
              <p className="text-sm text-gray-500">
                27 accounts across 6 categories. Showing Code &amp; Development.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-2">#</th>
                      <th className="pb-2 pr-3">System</th>
                      <th className="pb-2 pr-3">Account</th>
                      <th className="pb-2 pr-3">Access Level</th>
                      <th className="pb-2 pr-3">Priority</th>
                      <th className="pb-2">Revoked?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-2">1</td>
                      <td className="py-2 pr-3">GitHub</td>
                      <td className="py-2 pr-3">jane.martinez</td>
                      <td className="py-2 pr-3">Owner/Maintainer</td>
                      <td className="py-2 pr-3 font-bold text-red-700">P1</td>
                      <td className="py-2">&#9744;</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-2">2</td>
                      <td className="py-2 pr-3">AWS Console</td>
                      <td className="py-2 pr-3">jane.martinez@acme</td>
                      <td className="py-2 pr-3">PowerUser</td>
                      <td className="py-2 pr-3 font-bold text-red-700">P1</td>
                      <td className="py-2">&#9744;</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-3">3</td>
                      <td className="py-2 pr-3">Jira</td>
                      <td className="py-2 pr-3">jane.martinez</td>
                      <td className="py-2 pr-3">Project Admin</td>
                      <td className="py-2 pr-3 font-bold text-amber-700">P2</td>
                      <td className="py-2">&#9744;</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-2">4</td>
                      <td className="py-2 pr-3">
                        DataSync Portal
                      </td>
                      <td className="py-2 pr-3">jane@acme.com</td>
                      <td className="py-2 pr-3">Admin</td>
                      <td className="py-2 pr-3 font-bold text-amber-700">P2</td>
                      <td className="py-2">&#9744;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 rounded bg-gray-50 p-3 text-xs">
                <strong>Summary:</strong> 27 accounts to revoke. P1 (same-day):
                8. P2 (within 1 week): 12. P3 (within 2 weeks): 7. Credential
                rotations needed: 3.
              </div>
            </DocSection>
          </div>

          {/* 9. First 30 Days */}
          <div id="first-30-days">
            <DocSection title="9. First 30 Days Plan (Excerpt)">
              <p className="text-sm text-gray-500">
                4-week successor action plan. Showing Week 1.
              </p>

              <h4 className="mt-3 text-sm font-semibold">
                Week 1: Orientation &amp; Immediate Handoff (Mar 1-7)
              </h4>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Day 1-2: Access &amp; Context
                  </p>
                  <ul className="mt-1 space-y-1">
                    <li>&#9744; Get access to all systems in access-revocation.md (27 accounts)</li>
                    <li>&#9744; Read executive-summary.md and handoff-package.md end-to-end</li>
                    <li>&#9744; Meet with David Chen (manager) for context briefing</li>
                    <li>&#9744; Join Slack channels: #project-alpha, #beta-dashboard, #platform-eng</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Day 3-4: Project Alpha Immersion
                  </p>
                  <ul className="mt-1 space-y-1">
                    <li>&#9744; Review architecture.md and Alpha-Migration-Runbook</li>
                    <li>&#9744; Set up local development environment using staging guide</li>
                    <li>&#9744; Shadow Raj Patel on current Alpha tasks</li>
                    <li>&#9744; Review data migration scripts (60% complete)</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Day 5: Immediate Risks
                  </p>
                  <ul className="mt-1 space-y-1">
                    <li>&#9744; Confirm cutover window (Mar 15-23) is still feasible</li>
                    <li>&#9744; Intro call with Sarah Jones at DataSync Corp</li>
                    <li>&#9744; Review knowledge-gaps.md and prioritize gap remediation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded bg-gray-50 p-3 text-xs">
                <strong>Key Metrics to Track:</strong> Alpha migration
                completion % (target: 85% by Week 2), Knowledge gaps closed
                (target: all HIGH gaps by Week 3), Vendor relationships
                transitioned (target: all HIGH by Week 2).
              </div>
            </DocSection>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold">
            Ready to protect your institutional knowledge?
          </h2>
          <p className="mt-2 text-gray-600">
            Every package is customized to your departing employee&apos;s actual
            digital artifacts — not generic templates.
          </p>
          <a
            href="mailto:sgharlow@gmail.com?subject=Exit%20Insights%20—%20Consultation%20Request"
            className="mt-6 inline-block rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition hover:bg-gray-700"
          >
            Schedule a Consultation — $1,500 per departure
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600">
            &larr; Back to Exit Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
