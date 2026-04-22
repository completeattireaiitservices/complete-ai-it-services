import React from "react";
import LegalPageShell from "../../components/LegalPageShell";

const sectionHeading =
  "border-t border-neutral-200 pt-10 text-lg font-bold tracking-tight text-neutral-900 first:border-t-0 first:pt-0 sm:text-xl";
const body = "mt-4 text-pretty text-[17px] leading-relaxed text-neutral-700";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      metaTitle="Privacy Policy | Complete AI IT Services"
      metaDescription="Privacy Policy for Complete AI IT Services — data handling, third-party AI services, client responsibilities, and security standards."
      breadcrumbCurrent="Privacy Policy"
      title="Privacy Policy"
      subtitle={
        <>
          Complete AI IT Services | Quality-Assured Automation · Pleasanton, California ·{" "}
          {new Date().getFullYear()}
        </>
      }
      relatedHref="/legal/terms-of-service"
      relatedLabel="Terms of Service"
    >
      <h2 className={sectionHeading}>1. Overview</h2>
      <p className={body}>
        Complete AI IT Services (&quot;Provider&quot;), located in Pleasanton, CA, is committed to
        maintaining the privacy and security of Client data. This policy outlines our practices
        regarding data handling in the context of AI Integration and Automation services.
      </p>

      <h2 className={sectionHeading}>2. Data Handling &amp; Processing</h2>
      <p className={body}>
        We implement &quot;Enterprise-Grade&quot; data handling procedures. Client data is
        processed through our secure n8n instance and OpenAI&apos;s API to facilitate automated
        workflows, including AI Knowledge Assistants and Financial Intelligence systems.
      </p>

      <h2 className={sectionHeading}>3. Third-Party AI Services</h2>
      <p className={body}>
        Our automation infrastructure utilizes OpenAI&apos;s API. Under current OpenAI API terms,
        data submitted via the API is not used to train global models, ensuring that proprietary
        Client data remains private and confidential.
      </p>
      <p className={body}>
        Clients are required to maintain their own active accounts for third-party services, such
        as OpenAI and Pinecone (Vector Databases), ensuring direct control over their primary data
        sources.
      </p>

      <h2 className={sectionHeading}>4. Client Responsibilities</h2>
      <p className={body}>
        The Client is responsible for ensuring that all source documents (PDFs, Airtable records,
        emails) provided for use in the AI Knowledge Base are accurate, up-to-date, and do not
        violate any privacy rights or regulations.
      </p>

      <h2 className={sectionHeading}>5. Security Standards</h2>
      <p className={body}>
        We prioritize brand alignment and data integrity through a rigorous implementation
        methodology, including a dedicated QA &amp; Validation phase to audit AI logic and ensure
        secure data retrieval via Pinecone RAG architecture.
      </p>
    </LegalPageShell>
  );
}
