import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Exit Insights",
  description: "Terms of Service for Exit Insights knowledge transfer consulting services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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

      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: February 15, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Overview
            </h2>
            <p className="mt-2">
              These Terms of Service (&quot;Terms&quot;) govern your use of Exit
              Insights knowledge transfer consulting services
              (&quot;Services&quot;) provided by Exit Insights
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By engaging
              our Services, you (&quot;Client,&quot; &quot;you&quot;) agree to
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Services Description
            </h2>
            <p className="mt-2">
              Exit Insights provides AI-powered knowledge transfer analysis for
              employee departures. Our Services include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Guidance on exporting digital artifacts from your organization&apos;s
                systems
              </li>
              <li>
                AI-powered analysis of exported artifacts to extract
                institutional knowledge
              </li>
              <li>
                Generation of a 10-document branded knowledge transfer package
              </li>
              <li>
                A 30-minute consultation call to walk through the deliverables
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              3. Client Responsibilities
            </h2>
            <p className="mt-2">You are responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Obtaining all necessary authorization and consent to export and
                share employee digital artifacts with us, including compliance
                with applicable employment laws and company policies
              </li>
              <li>
                Ensuring that you have the legal right to access and share the
                data you provide to us
              </li>
              <li>
                Providing accurate employee information and complete artifact
                exports following our data gathering guide
              </li>
              <li>
                Reviewing the generated package for accuracy and making
                corrections as needed before distributing internally
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              4. Data Handling &amp; Processing
            </h2>
            <p className="mt-2">
              All artifact processing occurs on infrastructure under our
              control. We do not store your data beyond the period necessary to
              deliver the Services. Specifically:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Artifacts you provide are processed solely for the purpose of
                generating your knowledge transfer package
              </li>
              <li>
                We do not use your data to train AI models or for any purpose
                other than delivering your package
              </li>
              <li>
                All client data is deleted within 30 days of package delivery
                unless you request a longer retention period in writing
              </li>
              <li>
                We will not share your data with third parties except as
                required by law
              </li>
            </ul>
            <p className="mt-2">
              For complete details on how we handle your data, see our{" "}
              <Link href="/privacy" className="text-blue-700 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              5. Pricing &amp; Payment
            </h2>
            <p className="mt-2">
              Services are priced at $1,500 per employee departure unless a
              different rate is agreed in writing. Payment is due upon delivery
              of the knowledge transfer package. Volume pricing is available for
              engagements covering 5 or more departures and will be quoted
              separately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              6. Delivery Timeline
            </h2>
            <p className="mt-2">
              We aim to deliver the knowledge transfer package within 48 hours
              of receiving complete artifact exports. This timeline may vary
              based on the volume and complexity of artifacts provided.
              Incomplete or improperly formatted exports may delay delivery. We
              will notify you promptly if we anticipate any delay.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              7. Intellectual Property
            </h2>
            <p className="mt-2">
              The knowledge transfer package we generate is your property. You
              may use, distribute, and modify the deliverables within your
              organization as you see fit. We retain ownership of our
              proprietary analysis methods, templates, and tooling. We may use
              anonymized, aggregated statistics about engagement types (not your
              data) for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              8. Confidentiality
            </h2>
            <p className="mt-2">
              We treat all client data as confidential. Documents marked
              &quot;Confidential&quot; in the output package (Security Review,
              Integrity Report, Access Revocation) contain particularly
              sensitive information and should be distributed only to authorized
              personnel within your organization.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              9. Limitations &amp; Disclaimers
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Our analysis is based solely on the digital artifacts you
                provide. We cannot identify knowledge that exists only in the
                departing employee&apos;s memory and is not reflected in any
                artifact.
              </li>
              <li>
                The Integrity Report contains automated pattern detections, not
                conclusions of wrongdoing. Findings should be reviewed in
                context by qualified personnel.
              </li>
              <li>
                The Security Review identifies potential sensitive data in
                artifacts but is not a substitute for a comprehensive security
                audit.
              </li>
              <li>
                We do not provide legal advice. Consult your legal counsel
                regarding employment law, data privacy, and access revocation
                requirements specific to your jurisdiction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              10. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by law, our total liability for
              any claim arising from the Services is limited to the amount you
              paid for the specific engagement giving rise to the claim. We are
              not liable for indirect, incidental, consequential, or punitive
              damages, including lost profits or data loss.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              11. Termination
            </h2>
            <p className="mt-2">
              Either party may terminate an engagement before delivery by
              providing written notice. If you terminate after we have begun
              processing, a partial fee may apply based on work completed. We
              will delete all client data within 7 days of termination.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              12. Changes to These Terms
            </h2>
            <p className="mt-2">
              We may update these Terms from time to time. Changes will be
              posted on this page with an updated date. Continued use of our
              Services after changes are posted constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              13. Contact
            </h2>
            <p className="mt-2">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:sgharlow@gmail.com"
                className="text-blue-700 hover:underline"
              >
                sgharlow@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600">
            &larr; Back to Exit Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
