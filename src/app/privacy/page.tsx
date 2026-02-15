import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Exit Insights",
  description: "How Exit Insights collects, uses, and protects your data during knowledge transfer engagements.",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: February 15, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p className="mt-2">
              Exit Insights (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is committed to protecting the privacy and
              security of data entrusted to us. This Privacy Policy describes
              how we collect, use, store, and protect information when you use
              our knowledge transfer consulting services or visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Information We Collect
            </h2>

            <h3 className="mt-3 font-semibold text-gray-800">
              2.1 Contact Information
            </h3>
            <p className="mt-1">
              When you contact us for a consultation, we collect your name,
              email address, company name, and any other information you
              voluntarily provide in your inquiry.
            </p>

            <h3 className="mt-3 font-semibold text-gray-800">
              2.2 Employee Artifact Data
            </h3>
            <p className="mt-1">
              When you engage our Services, you provide us with digital
              artifacts from the departing employee&apos;s work accounts. This
              may include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Documents from shared drives (Google Drive, OneDrive, SharePoint)
              </li>
              <li>
                Chat exports (Slack, Microsoft Teams)
              </li>
              <li>
                Calendar exports (Google Calendar, Outlook)
              </li>
              <li>Email archives</li>
              <li>
                Code repository history and content (GitHub, GitLab, Bitbucket)
              </li>
              <li>Wiki exports (Confluence, Notion)</li>
            </ul>
            <p className="mt-2">
              This data may contain personally identifiable information (PII)
              of the departing employee and other individuals mentioned in the
              artifacts. Our Security Review process identifies PII within
              artifacts and flags it for your review.
            </p>

            <h3 className="mt-3 font-semibold text-gray-800">
              2.3 Website Usage
            </h3>
            <p className="mt-1">
              Our website does not currently use cookies or third-party
              analytics services. We do not track your browsing behavior on our
              site. If we add analytics in the future, we will update this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Respond to your consultation inquiries
              </li>
              <li>
                Process and analyze employee artifacts to generate your
                knowledge transfer package
              </li>
              <li>
                Identify and flag sensitive data (PII, credentials) in the
                Security Review document
              </li>
              <li>
                Deliver your knowledge transfer package and provide the
                consultation call
              </li>
              <li>
                Communicate with you about the engagement
              </li>
            </ul>
            <p className="mt-2 font-medium">
              We do NOT use your artifact data to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Train AI models or machine learning systems</li>
              <li>Build profiles of individuals</li>
              <li>
                Share with third parties for marketing or any other purpose
              </li>
              <li>
                Aggregate with data from other clients
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              4. Data Storage &amp; Retention
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>During processing:</strong> Your artifact data is stored
                on secured infrastructure only for the duration needed to
                generate your package.
              </li>
              <li>
                <strong>After delivery:</strong> All artifact data and generated
                documents are deleted from our systems within 30 days of
                package delivery, unless you request a longer retention period
                in writing.
              </li>
              <li>
                <strong>Contact information:</strong> Your name, email, and
                company name are retained for business correspondence purposes
                and can be deleted upon request.
              </li>
              <li>
                <strong>Engagement records:</strong> We retain basic engagement
                records (date, company name, engagement type) for accounting
                and tax purposes as required by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              5. Data Security
            </h2>
            <p className="mt-2">
              We implement appropriate technical and organizational measures to
              protect your data, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Encryption of data in transit and at rest</li>
              <li>
                Access controls limiting who can view client data to only those
                involved in delivering your engagement
              </li>
              <li>
                Secure deletion of all artifacts and generated documents after
                the retention period
              </li>
              <li>
                No client data is stored in public cloud storage or shared
                environments
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              6. Third-Party Services
            </h2>
            <p className="mt-2">
              Our analysis process may use AI language models to extract and
              synthesize knowledge from your artifacts. When AI services are
              used:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Data sent to AI providers is covered by their enterprise data
                processing agreements which prohibit training on customer data
              </li>
              <li>
                We select AI providers that do not retain input data beyond the
                processing session
              </li>
              <li>
                We can disclose which AI providers are used upon request
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              7. Your Rights
            </h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Access:</strong> Request confirmation of what data we
                hold about you or your engagement
              </li>
              <li>
                <strong>Deletion:</strong> Request immediate deletion of all
                data related to your engagement at any time
              </li>
              <li>
                <strong>Correction:</strong> Request correction of any
                inaccurate information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of the data you
                provided to us in a standard format
              </li>
              <li>
                <strong>Objection:</strong> Object to any processing of your
                data beyond what is necessary to deliver the Services
              </li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:sgharlow@gmail.com"
                className="text-blue-700 hover:underline"
              >
                sgharlow@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              8. Departing Employee Privacy
            </h2>
            <p className="mt-2">
              We recognize that the artifacts we analyze may contain personal
              information about the departing employee and others. Our Security
              Review document identifies PII found in artifacts so you can
              handle it appropriately. We recommend that clients:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Ensure artifact export and sharing complies with your
                organization&apos;s employment policies and applicable laws
              </li>
              <li>
                Consult legal counsel regarding employee notification
                requirements in your jurisdiction
              </li>
              <li>
                Restrict access to confidential documents (Security Review,
                Integrity Report, Access Revocation) to authorized personnel
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              9. International Data Transfers
            </h2>
            <p className="mt-2">
              Our services are operated from the United States. If you are
              located outside the United States, your data may be transferred
              to and processed in the United States. By engaging our Services,
              you consent to this transfer. For EU/EEA clients, we can provide
              a Data Processing Agreement (DPA) upon request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              10. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date. If we make material
              changes to how we handle client data, we will notify active
              clients by email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900">
              11. Contact
            </h2>
            <p className="mt-2">
              For questions about this Privacy Policy or to exercise your data
              rights, contact us at{" "}
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

        <div className="mt-12 flex justify-center gap-6 text-sm text-gray-400">
          <Link href="/terms" className="hover:text-gray-600">
            Terms of Service
          </Link>
          <span>|</span>
          <Link href="/" className="hover:text-gray-600">
            &larr; Back to Exit Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
