import React from "react";
import { Share } from "next/font/google";
import SafeImage from "../components/SafeImage";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

/** Share 20px stack for all services page copy (title uses same family at 27px). */
const servicesShareFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const SERVICE_ROWS = [
  {
    title: "AI Knowledge Assistant (website chatbot)",
    body: "RAG-based assistant grounded in your PDFs, Airtable, and internal documentation—accurate, real-time answers for visitors and customers. One-time setup from $1,500; monthly retainer from $375. OpenAI and vector database usage billed at cost.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Team presenting at a conference table with screens",
    imageLeft: true,
  },
  {
    title: "Autonomous Content Engine",
    body: "Automates keyword research, article writing, branded images, and SEO-optimized publishing so organic traffic scales without a full content team. One-time setup from $3,500; monthly retainer from $900. API usage billed at cost.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Developer workspace with code on multiple monitors",
    imageLeft: false,
  },
  {
    title: "Gmail AI Auto-Responder",
    body: "Reads incoming mail, queries your company knowledge base, and drafts professional replies in Gmail for approval—faster, more consistent responses. One-time setup from $2,500; monthly retainer from $650. API usage billed at cost.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Professional working at a laptop",
    imageLeft: true,
  },
  {
    title: "AI Financial Intelligence (quote-to-cash)",
    body: "Extracts billing details from email threads and conversations, then generates draft invoices in QuickBooks or Xero to accelerate your revenue cycle. One-time setup from $2,000; monthly retainer from $400. API usage billed at cost.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Analytics charts and financial data on a laptop",
    imageLeft: false,
  },
  {
    title: "Brand Guardian (reputation management)",
    body: "Monitors reviews and social platforms, applies sentiment analysis, and drafts factual, on-brand responses to protect and improve trust. One-time setup from $1,500; monthly retainer from $350. API usage billed at cost.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Business analytics and growth charts",
    imageLeft: true,
  },
  {
    title: "Monday Morning Executive Briefing",
    body: "Aggregates Stripe, HubSpot, and advertising data into a concise weekly executive summary so decisions stay data-driven. One-time setup from $3,000; monthly retainer from $600. API usage billed at cost.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Server room and network infrastructure",
    imageLeft: false,
  },
];

const APPOINTMENT_CARDS = [
  {
    title: "Discovery & Audit",
    meta: "Systems, workflows & data sources",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=640&q=80",
    imageAlt: "Team meeting at a conference table",
  },
  {
    title: "Architecture & Development",
    meta: "Pinecone brain + n8n workflows",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=640&q=80",
    imageAlt: "Laptop screen showing software code and development work",
  },
  {
    title: "QA, Go-Live & Retainer",
    meta: "Bi-weekly logic audits included",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80",
    imageAlt: "Team gathered around a laptop reviewing work together",
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

const FAQ_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80";

function ServiceRow({ title, body, image, imageAlt, imageLeft }) {
  const imageBlock = (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
      <SafeImage
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center px-1 py-2 md:px-6 lg:px-10">
      <h2 className="text-[20px] font-bold leading-snug text-neutral-900">
        {title}
      </h2>
      <p className="mt-3 text-[20px] font-normal leading-relaxed text-neutral-700">
        {body}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{textBlock}</div>
          <div className="order-1 md:order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Complete AI IT Services</title>
        <meta
          name="description"
          content="Complete AI IT Services — AI knowledge assistants, autonomous content, Gmail copilots, quote-to-cash, brand guardian, and executive briefings. Pleasanton, CA."
        />
      </Head>
      <div className="min-h-screen bg-white font-sans text-neutral-800">
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="services" />
        </div>

        <main
          className={`${servicesShareFont.className} text-[20px] font-normal leading-relaxed text-neutral-800`}
        >
          <h1
            className="px-4 pb-10 pt-12 text-center font-bold uppercase leading-snug text-neutral-900 sm:px-6 sm:pb-12 sm:pt-16 md:pb-16 md:pt-20"
            style={{ fontSize: "27px", lineHeight: 1.2 }}
          >
            Our Services
          </h1>

          <div className="mx-auto max-w-5xl space-y-14 px-4 pb-16 sm:space-y-16 sm:px-6 sm:pb-20 md:space-y-24 md:px-10 md:pb-28">
            {SERVICE_ROWS.map((row) => (
              <ServiceRow key={row.title} {...row} />
            ))}
          </div>

          <section
            className="bg-[#2d2d2d] px-6 py-14 text-white sm:px-8 md:py-20 lg:px-12 xl:px-16"
            aria-labelledby="appointments-heading"
          >
            <h2
              id="appointments-heading"
              className="text-center text-[26px] font-semibold uppercase tracking-wide text-white"
            >
              Implementation methodology
            </h2>
            <div className="mx-auto mt-10 grid w-full max-w-5xl gap-6 md:mt-14 md:grid-cols-3 md:gap-6 lg:max-w-6xl lg:gap-8 xl:max-w-7xl">
              {APPOINTMENT_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col bg-white text-left text-neutral-900"
                >
                  <div className="relative aspect-[16/11] w-full bg-neutral-200 lg:aspect-[16/10]">
                    <SafeImage
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5 lg:px-7 lg:pb-7">
                    <h3 className="text-[20px] font-bold leading-snug text-black">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[20px] font-normal leading-snug text-neutral-600">
                      {card.meta}
                    </p>
                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-block bg-black px-5 py-2.5 text-[18px] font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-800"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="grid grid-cols-1 md:grid-cols-2"
            aria-labelledby="faq-heading"
          >
            <div className="flex flex-col justify-center bg-white px-8 py-14 md:px-12 md:py-20 lg:px-16">
              <h2
                id="faq-heading"
                className="text-[20px] font-bold uppercase tracking-wide text-neutral-900"
              >
                Frequently asked questions
              </h2>
              <dl className="mt-8">
                {FAQ_ITEMS.map((item, i) => (
                  <React.Fragment key={item.q}>
                    <dt
                      className={clsx(
                        "text-[20px] font-bold leading-snug text-black",
                        i > 0 && "mt-8",
                      )}
                    >
                      {item.q}
                    </dt>
                    <dd className="mt-2 text-[20px] font-normal leading-relaxed text-neutral-800">
                      {item.a}
                    </dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
            <div className="relative min-h-[280px] w-full md:min-h-[520px]">
              <SafeImage
                src={FAQ_IMAGE}
                alt="Overhead view of a desk with laptop, notes, and work materials"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
