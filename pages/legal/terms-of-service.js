import React from "react";
import LegalPageShell from "../../components/LegalPageShell";

const sectionHeading =
  "border-t border-neutral-200 pt-10 text-lg font-bold tracking-tight text-neutral-900 first:border-t-0 first:pt-0 sm:text-xl";
const body = "mt-4 text-pretty text-[17px] leading-relaxed text-neutral-700";
const list =
  "mt-4 list-disc space-y-2.5 pl-6 text-pretty text-[17px] leading-relaxed text-neutral-700 marker:text-neutral-400";

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      metaTitle="Terms of Service | Complete AI IT Services"
      metaDescription="Terms of Service (Master Service Agreement) for Complete AI IT Services — scope, AI accuracy, QA guarantee, financial terms, and implementation roadmap."
      breadcrumbCurrent="Terms of Service"
      title="Terms of Service"
      subtitle={
        <>
          Master Service Agreement | Complete AI IT Services · Pleasanton, California ·{" "}
          {new Date().getFullYear()}
        </>
      }
      relatedHref="/legal/privacy-policy"
      relatedLabel="Privacy Policy"
    >
      <h2 className={sectionHeading}>1. Scope of Services</h2>
      <p className={body}>
        Complete AI IT Services (&quot;Provider&quot;) provides AI Integration Architecture and
        Intelligent Automation solutions, including but not limited to Digital Workforce Automation
        and Operational Intelligence suites. Workflows are implemented using n8n, Large Language
        Models (LLMs), and Pinecone Vector Databases.
      </p>

      <h2 className={sectionHeading}>2. Nature of AI &amp; Accuracy</h2>
      <p className={body}>
        The Client acknowledges that AI is probabilistic, not deterministic. While high accuracy
        is the primary objective, AI outputs are generated based on the training data and Knowledge
        Base provided by the Client.
      </p>
      <p className={body}>
        The Provider shall not be held liable for &quot;hallucinations&quot; (factually incorrect
        AI statements) if the AI was acting upon the Knowledge Base provided by the Client.
      </p>

      <h2 className={sectionHeading}>3. The QA Guarantee (SLA)</h2>
      <p className={body}>
        As part of the Monthly Retainer, the Provider performs a &quot;Bi-Weekly Logic Audit.&quot;
        This includes:
      </p>
      <ul className={list}>
        <li>Reviewing AI execution logs for consistency.</li>
        <li>Verifying Pinecone retrieval accuracy.</li>
        <li>
          Tuning &quot;System Prompts&quot; to minimize hallucinations and ensure brand alignment.
        </li>
      </ul>

      <h2 className={sectionHeading}>4. Financial Terms &amp; API Costs</h2>
      <p className={body}>
        <strong>Setup Fees:</strong> One-time implementation fees are non-refundable once the
        Knowledge Base Sync has been established and tested.
      </p>
      <p className={body}>
        <strong>Monthly Retainer:</strong> Covers ongoing optimization and the QA Guarantee.
        Termination requires 30 days&apos; written notice.
      </p>
      <p className={body}>
        <strong>API Costs:</strong> Monthly usage-based fees for third-party services (e.g.,
        OpenAI, Pinecone) are billed separately and are the sole responsibility of the Client.
      </p>

      <h2 className={sectionHeading}>5. Implementation Roadmap</h2>
      <p className={body}>
        Service delivery follows a structured 4-step methodology: Discovery &amp; Audit,
        Architecture &amp; Development, QA &amp; Validation, and Deployment &amp; Optimization.
      </p>
    </LegalPageShell>
  );
}
