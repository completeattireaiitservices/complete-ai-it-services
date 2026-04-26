import React from "react";
import { Share } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { Layers } from "lucide-react";
import clsx from "clsx";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TieredMethodologySection from "../components/TieredMethodologySection";

const servicesShareFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const TIER_PILL = {
  Small: "bg-emerald-100 text-emerald-900 ring-emerald-200/60",
  Medium: "bg-sky-100 text-sky-900 ring-sky-200/60",
  Enterprise: "bg-violet-100 text-violet-900 ring-violet-200/60",
};

const OFFERING_ACCENTS = [
  {
    border: "border-l-indigo-500",
    badge: "from-indigo-600 to-indigo-500",
    glow: "bg-indigo-500/10",
  },
  {
    border: "border-l-violet-500",
    badge: "from-violet-600 to-violet-500",
    glow: "bg-violet-500/10",
  },
  {
    border: "border-l-sky-500",
    badge: "from-sky-600 to-sky-500",
    glow: "bg-sky-500/10",
  },
  {
    border: "border-l-teal-500",
    badge: "from-teal-600 to-teal-500",
    glow: "bg-teal-500/10",
  },
  {
    border: "border-l-rose-500",
    badge: "from-rose-600 to-rose-500",
    glow: "bg-rose-500/10",
  },
  {
    border: "border-l-amber-500",
    badge: "from-amber-600 to-amber-500",
    glow: "bg-amber-500/10",
  },
];

const SERVICE_OFFERINGS = [
  {
    num: 1,
    title: "AI Knowledge Assistant (Your 24/7 Website Expert)",
    blurb:
      "Convert visitors immediately with accurate, hallucination-free answers grounded securely in your proprietary data.",
    tiers: [
      {
        size: "Small",
        scope:
          "Basic RAG: Internal Knowledge Base (up to 100 PDFs/Docs) + Airtable sync. Single-channel deployment (Website widget).",
        investment: "Setup: $1,500 – $2,500  ·  Retainer: $375/mo",
      },
      {
        size: "Medium",
        scope:
          "Advanced RAG: Full CRM integration (HubSpot/Salesforce) + internal ticketing system. Multi-channel deployment (Website, Slack, Discord).",
        investment: "Setup: $3,000 – $5,500  ·  Retainer: $600/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Full Data Warehouse sync (Snowflake/BigQuery), real-time API lookups, high-volume redundancy, complex permissions management.",
        investment: "Setup: $6,000+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 2,
    title: "Autonomous Content Engine",
    blurb:
      "Scale organic traffic 10x without a full content team. Automated research, branded image generation, and direct SEO-optimized publishing.",
    tiers: [
      {
        size: "Small",
        scope:
          "4 Long-form SEO articles + 4 branded images per month. Automated keyword research (low-competition focus).",
        investment: "Setup: $3,500 – $4,500  ·  Retainer: $900/mo",
      },
      {
        size: "Medium",
        scope:
          "12 Long-form SEO articles + 12 branded images per month. Automated technical SEO audits + competitor content gap analysis.",
        investment: "Setup: $5,000 – $8,500  ·  Retainer: $1,500/mo",
      },
      {
        size: "Enterprise",
        scope:
          "High-volume daily publishing (30+ articles/mo). Automated translation, localization, complex topic clustering, and backlink analysis.",
        investment: "Setup: $10,000+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 3,
    title: "AI-Powered Gmail Automation",
    blurb:
      "Ensure no critical lead waits. AI reads mail, pulls context from your knowledge base, and drafts personalized replies (Human-in-the-Loop approval).",
    tiers: [
      {
        size: "Small",
        scope:
          "Handles up to 250 inbound messages/mo. Accesses internal PDFs/Docs. Basic intent classification (e.g., Support vs. Sales).",
        investment: "Setup: $2,500 – $3,500  ·  Retainer: $650/mo",
      },
      {
        size: "Medium",
        scope:
          "Handles up to 1,000 inbound messages/mo. Full HubSpot/Salesforce integration for personalized context. Advanced multi-stage routing.",
        investment: "Setup: $4,000 – $7,000  ·  Retainer: $1,200/mo",
      },
      {
        size: "Enterprise",
        scope:
          "High-volume (5,000+ messages/mo). Real-time order lookup (ERP sync), sentiment-driven prioritization, automated ticket creation (Zendesk).",
        investment: "Setup: $8,000+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 4,
    title: "Automated Quote-to-Cash Intelligence",
    blurb:
      "Don’t let admin slow down revenue. AI extracts billing details from conversations and generates accurate invoices.",
    tiers: [
      {
        size: "Small",
        scope:
          "Processes up to 50 invoices/mo from primary client emails. QuickBooks Online or Xero integration.",
        investment: "Setup: $2,000 – $3,000  ·  Retainer: $400/mo",
      },
      {
        size: "Medium",
        scope:
          "Processes up to 250 invoices/mo. Handles complex billing (milestone payments, multi-line items). Integrates with payment processors (Stripe).",
        investment: "Setup: $3,500 – $6,000  ·  Retainer: $800/mo",
      },
      {
        size: "Enterprise",
        scope:
          "High-volume invoicing (1,000+/mo). Full NetSuite or SAP integration. Automated invoice reconciliation and accounts receivable matching.",
        investment: "Setup: $7,500+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 5,
    title: "Autonomous Brand Guardian",
    blurb:
      "Protect your reputation around the clock. AI monitors all platforms, analyzes sentiment, and drafts factual, on-brand responses.",
    tiers: [
      {
        size: "Small",
        scope:
          "Monitors primary platforms (Google Reviews, G2). Processes up to 50 feedback alerts/mo. Human-in-the-loop review.",
        investment: "Setup: $1,500 – $2,500  ·  Retainer: $350/mo",
      },
      {
        size: "Medium",
        scope:
          "Monitors 5+ platforms including social (Twitter, LinkedIn). Sentiment analysis driven routing. Alerts for high-risk topics.",
        investment: "Setup: $3,000 – $5,000  ·  Retainer: $700/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Real-time cross-platform monitoring. Integrates with existing support stack. Predictive crisis management dashboard and trend analysis.",
        investment: "Setup: $6,000+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 6,
    title: "The Monday Morning Executive Briefing",
    blurb:
      "Make data-driven decisions with a concise, automated weekly summary of all critical data.",
    tiers: [
      {
        size: "Small",
        scope:
          "Core data aggregation (Stripe, HubSpot, Google Analytics). Summary of key metrics (Revenue, Leads, Traffic).",
        investment: "Setup: $3,000 – $4,000  ·  Retainer: $600/mo",
      },
      {
        size: "Medium",
        scope:
          "5+ data sources (adds Advertising platforms, ERP). Comparative analysis (Week-over-Week). Executive summaries generated by AI.",
        investment: "Setup: $5,000 – $8,000  ·  Retainer: $1,000/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Global data consolidation across departments. Custom KPIs (e.g., Churn prediction, LTV modeling). Drill-down interactive visualization layer.",
        investment: "Setup: $9,000+  ·  Retainer: Custom",
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What does the monthly retainer include for QA?",
    a: "As part of the retainer we perform a bi-weekly logic audit: reviewing AI execution logs, verifying vector retrieval accuracy, and tuning system prompts to reduce hallucinations and keep outputs aligned with your brand.",
  },
  {
    q: "Who pays for OpenAI, Pinecone, and other API usage?",
    a: "Clients maintain active billing on those platforms. Usage-based API fees are your responsibility and are billed at cost—transparent pass-through, separate from implementation and retainer pricing.",
  },
  {
    q: "How do you handle data privacy with LLMs?",
    a: "We implement enterprise-grade handling through our n8n orchestration and provider APIs. Under current OpenAI API terms, data submitted via the API is not used to train global models, helping keep proprietary information private.",
  },
  {
    q: "What is your termination and refund policy?",
    a: "Either party may end the monthly retainer with 30 days written notice. Implementation fees are non-refundable once the knowledge base sync has been established and tested successfully.",
  },
];

function TierTable({ rows }) {
  return (
    <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/40 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] ring-1 ring-slate-200/50">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-left text-[16px] leading-relaxed sm:text-[17px]">
          <thead>
            <tr className="bg-slate-900/95 text-white">
              <th className="w-[7.5rem] px-4 py-3.5 font-bold tracking-wide sm:px-5">
                Size
              </th>
              <th className="px-4 py-3.5 font-bold sm:px-5">
                Scope &amp; Capabilities
              </th>
              <th className="w-[14rem] min-w-[12rem] px-4 py-3.5 font-bold sm:px-5">
                Investment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((r, i) => (
              <tr
                key={r.size}
                className={clsx(
                  "border-t border-slate-100",
                  i % 2 === 0 ? "bg-white" : "bg-slate-50/70",
                )}
              >
                <td className="whitespace-nowrap align-top sm:px-5 sm:py-4 sm:pl-4">
                  <span
                    className={clsx(
                      "inline-flex rounded-full px-3 py-1 text-sm font-bold ring-1 ring-inset",
                      TIER_PILL[r.size] || "bg-slate-100 text-slate-800 ring-slate-200/80",
                    )}
                  >
                    {r.size}
                  </span>
                </td>
                <td className="align-top text-slate-700 sm:px-4 sm:py-4 sm:pl-0">
                  {r.scope}
                </td>
                <td className="align-top font-medium text-slate-800 sm:pr-5 sm:py-4 sm:pl-0">
                  {r.investment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ServiceOfferingCard({ item, index }) {
  const accent = OFFERING_ACCENTS[index % OFFERING_ACCENTS.length];
  const { num, title, blurb, tiers } = item;

  return (
    <article
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white pl-0 shadow-sm transition-shadow duration-300 hover:shadow-md",
        "border-l-[5px]",
        accent.border,
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-50 blur-3xl transition group-hover:opacity-70",
          accent.glow,
        )}
        aria-hidden
      />
      <div className="relative px-5 py-6 sm:px-7 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div
            className={clsx(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold text-white shadow-sm sm:h-14 sm:w-14 sm:text-base",
              accent.badge,
            )}
            aria-hidden
          >
            {String(num).padStart(2, "0")}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-[1.2rem] font-bold leading-snug text-slate-900 sm:text-[1.35rem]">
              {title}
            </h2>
            <p className="mt-2 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]">
              {blurb}
            </p>
            <TierTable rows={tiers} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Complete AI IT Services</title>
        <meta
          name="description"
          content="High-performance AI scaled to your business: tiered RAG assistants, content engines, Gmail automation, quote-to-cash, brand guardian, and executive briefings. Pleasanton, CA."
        />
      </Head>
      <div
        className={clsx(
          "min-h-screen bg-slate-50 font-sans text-slate-800",
          servicesShareFont.className,
        )}
      >
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="services" />
        </div>

        <main className="text-[18px] font-normal leading-relaxed text-slate-800 sm:text-[19px]">
          <section
            className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50"
            aria-labelledby="services-hero"
          >
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
              <div className="absolute -right-24 top-20 h-56 w-56 rounded-full bg-violet-200/25 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 pt-14 pb-5 text-center sm:px-6 sm:pt-16 sm:pb-6 md:px-10 md:pt-20 md:pb-7">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 shadow-md shadow-slate-300/25 ring-1 ring-white/60 backdrop-blur-sm sm:px-5 sm:text-xs">
                <Layers className="h-3.5 w-3.5 shrink-0 text-indigo-600 sm:h-4 sm:w-4" strokeWidth={2.25} aria-hidden />
                <span>Tiered AI implementation</span>
              </div>

              <h1
                id="services-hero"
                className="mx-auto mt-6 max-w-4xl text-balance font-extrabold uppercase leading-[1.12] tracking-tight text-slate-900 sm:leading-[1.1]"
                style={{ fontSize: "clamp(1.35rem, 2.1vw + 0.35rem, 2rem)" }}
              >
                <span className="block">High-Performance AI,</span>
                <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent sm:mt-1.5">
                  Scaled to Your Business Size
                </span>
              </h1>

              <div className="mx-auto mt-6 w-full max-w-5xl rounded-[1.25rem] border border-slate-200/80 bg-white/85 px-6 pt-6 pb-4 text-left shadow-[0_22px_55px_-28px_rgba(15,23,42,0.18)] ring-1 ring-white/70 backdrop-blur-sm sm:mt-7 sm:px-8 sm:pt-8 sm:pb-5 md:px-10 md:pt-8 md:pb-6">
                <p className="m-0 w-full text-left text-[17px] font-normal leading-relaxed text-slate-700 sm:text-[18px] md:text-[19px]">
                  <span className="font-semibold text-slate-800">Generic AI fails</span> when it meets business complexity. We build sophisticated,{" "}
                  <span className="font-medium text-slate-800">private RAG architectures</span>—powered by n8n orchestration and vector knowledge bases—that grow as you do.{" "}
                  <span className="font-bold tracking-tight text-slate-900 sm:text-[18px] md:text-[19px]">
                    Choose your tier, scale your operations, and upgrade whenever you’re ready
                  </span>
                </p>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-5xl space-y-8 px-4 pb-12 pt-4 sm:space-y-10 sm:px-6 sm:pb-14 sm:pt-5 md:px-10 md:pb-16 md:pt-6">
            {SERVICE_OFFERINGS.map((o, i) => (
              <React.Fragment key={o.num}>
                <ServiceOfferingCard item={o} index={i} />
                {o.num === 6 ? (
                  <div
                    className="mx-auto max-w-3xl rounded-2xl border border-amber-200/60 bg-amber-50/90 px-5 py-4 text-left text-[16px] text-amber-950 shadow-sm sm:text-[17px]"
                    role="note"
                  >
                    <strong className="font-bold text-amber-950">Note on usage fees: </strong>
                    Tier definitions are based on our setup and maintenance complexity.
                    Usage-based API fees (OpenAI, Pinecone, data platforms) are separate and
                    remain a direct pass-through billed at cost.
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          <TieredMethodologySection
            headingId="services-methodology-heading"
            showCta
            ctaHref="/contact-us#inquiries-rfp"
            ctaLabel="Start with a message"
          />

          <section
            className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 md:px-10 md:py-20"
            aria-labelledby="faq-heading"
          >
            <div className="mx-auto max-w-3xl">
              <h2
                id="faq-heading"
                className="text-center text-[1.25rem] font-bold uppercase tracking-wide text-slate-900"
              >
                Frequently asked questions
              </h2>
              <p className="mt-2 text-center text-[16px] text-slate-600 sm:text-[17px]">
                Clear answers on retainers, usage, privacy, and engagement.
              </p>
              <ul className="mt-10 space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <li
                    key={item.q}
                    className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 transition hover:border-slate-300/90 hover:bg-slate-50 sm:p-6"
                  >
                    <h3 className="text-[17px] font-bold leading-snug text-slate-900 sm:text-[18px]">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
                      {item.a}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
