import React from "react";
import Head from "next/head";
import { Share, Squada_One } from "next/font/google";
import SafeImage from "../components/SafeImage";
import Link from "next/link";
import clsx from "clsx";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ThoughtLeadershipSection from "../components/ThoughtLeadershipSection";
import SubscribeForm from "../components/SubscribeForm";
import {
  Layers,
  Workflow,
  Clock,
  Zap,
  ShieldCheck,
  ClipboardCheck,
  Star,
} from "lucide-react";

const heroTitleFont = Squada_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Reviews heading: 48px Squada One, sans-serif stack (design spec). */
const reviewsHeadingFont = Squada_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

const heroSubtitleFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const aboutUsColumnTitleFont = Share({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

/**
 * “SOCIAL” heading only: 27px + Share with explicit stack (avoids next/font’s
 * size-adjusted “Share Fallback” label in devtools; use with inline fontSize).
 */
const socialHeaderFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const HERO_IMAGE = "/images/complete-ai-hero-conference-tv-team.png";

function SocialIconLink({ href, label, children, sizeClassName }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        "flex items-center justify-center rounded-full bg-white text-[#1c1c1c] transition hover:bg-neutral-200",
        sizeClassName ?? "h-12 w-12",
      )}
    >
      {children}
    </a>
  );
}

function SocialMediaIcons({ compact = false }) {
  const ring = compact ? "h-10 w-10" : "h-12 w-12";
  const ico = (className) =>
    clsx(className, compact ? "h-4 w-4" : "h-5 w-5");

  return (
    <>
      <SocialIconLink
        href="https://www.facebook.com"
        label="Facebook"
        sizeClassName={ring}
      >
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink href="https://twitter.com" label="X" sizeClassName={ring}>
        <svg className={ico("h-4 w-4")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l12.966 15.644z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink href="https://www.yelp.com" label="Yelp" sizeClassName={ring}>
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041zm2.86 3.742a.8523.8523 0 0 1-.111.4236c-.074.132-.178.2377-.3115.3172a.8428.8428 0 0 1-.4385.119.847.847 0 0 1-.4373-.1179.8526.8526 0 0 1-.3125-.3171.8548.8548 0 0 1-.111-.4248c0-.1526.038-.2958.1143-.4294a.8405.8405 0 0 1 .315-.3159.849.849 0 0 1 .4315-.1156.8514.8514 0 0 1 .4294.1144.84.84 0 0 1 .316.3148.8494.8494 0 0 1 .1156.4317zm-.1202 0c0-.1328-.0332-.256-.0996-.3698s-.1564-.2038-.2702-.2702a.7125.7125 0 0 0-.371-.1007.7204.7204 0 0 0-.3698.0996.7487.7487 0 0 0-.2713.2702.7181.7181 0 0 0-.0996.3709c0 .132.0332.2557.0996.371a.7355.7355 0 0 0 .2713.2713.7354.7354 0 0 0 .3698.0985.7205.7205 0 0 0 .3698-.0996.7423.7423 0 0 0 .2702-.2691.7186.7186 0 0 0 .1008-.3721zm-.577.0584.2724.4522h-.1922l-.237-.4052h-.1546v.4052h-.1695v-1.02h.2988c.1268 0 .2195.0247.2783.0744.0595.0496.0892.1252.0892.2267a.2785.2785 0 0 1-.0492.1625c-.032.0466-.0775.0813-.1362.1042zm-.0412-.1408a.1532.1532 0 0 0 .056-.1214c0-.0573-.0164-.0981-.0491-.1225-.0329-.0251-.0847-.0377-.1557-.0377h-.1214v.3285h.1237c.061 0 .1098-.0157.1465-.047z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink
        href="https://www.youtube.com"
        label="YouTube"
        sizeClassName={ring}
      >
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      </SocialIconLink>
    </>
  );
}

const GALLERY_IMAGES = [
  "/images/tech-gallery/complete-ai-gallery-01-workflows.png",
  "/images/tech-gallery/complete-ai-gallery-02-rag-vectors.png",
  "/images/tech-gallery/complete-ai-gallery-03-servers.png",
  "/images/tech-gallery/complete-ai-gallery-04-code-editor.png",
  "/images/tech-gallery/complete-ai-gallery-05-ai-software-metrics.png",
  "/images/tech-gallery/complete-ai-gallery-06-qa-security.png",
  "/images/tech-gallery/complete-ai-gallery-07-ai-compute-hardware.png",
  "/images/tech-gallery/complete-ai-gallery-08-network-cloud.png",
];

const GALLERY_ALT = [
  "Abstract workflow orchestration diagram representing AI pipelines and integrations",
  "Concept art for retrieval-augmented generation with vectors and knowledge retrieval",
  "Close-up of data center server hardware with status indicator lights",
  "Dark-themed code editor showing automation-oriented software development",
  "Dark-mode AI operations dashboard with KPIs, throughput metrics, and charts in cyan and blue",
  "Cybersecurity and quality assurance visualization with shield and checklist motifs",
  "Macro close-up of AI compute hardware on a circuit board with cool blue and cyan lighting",
  "Abstract network topology illustrating cloud APIs and system connectivity",
];

const REVIEWS_BG = "/images/tech-gallery/complete-ai-gallery-05-dashboard.png";

const REVIEWS = [
  {
    initial: "M",
    title: "Knowledge assistant",
    body: "Our site chatbot pulls from our PDFs and Airtable—customers get accurate answers 24/7 and our team spends far less time on first-line questions.",
    attribution: "Marketing lead - 2026",
  },
  {
    initial: "F",
    title: "Quote-to-cash",
    body: "Invoices draft in QuickBooks from email threads and call notes. Billing cycles are faster with fewer manual line-item mistakes.",
    attribution: "Finance director - 2026",
  },
  {
    initial: "O",
    title: "Executive briefing",
    body: "Monday morning one-pager from Stripe, HubSpot, and Ads keeps leadership aligned. Clear narrative instead of spreadsheet archaeology.",
    attribution: "Operations - 2026",
  },
];

function StarRating() {
  return (
    <div
      className="flex justify-center gap-0.5 text-amber-400"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 stroke-amber-500"
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Complete AI IT Services | AI-Powered Automation</title>
        <meta
          name="description"
          content="Complete AI IT Services in Pleasanton, CA — custom AI architecture, n8n workflows, RAG knowledge assistants, and QA-backed automation for business growth."
        />
      </Head>
      <div className="font-sans text-gray-800">
      {/* Hero: nav + image + CTA (reference layout) */}
      <section className="bg-[#1c1c1c] text-white">
        <SiteHeader activeNav="home" />

        <div className="relative aspect-[16/9] w-full min-h-[200px] max-h-[min(70vh,560px)] sm:min-h-[260px] md:aspect-[21/9] md:min-h-[300px] lg:min-h-[320px]">
          <SafeImage
            src={HERO_IMAGE}
            alt="Team in a conference room reviewing a presentation on a wall-mounted TV screen"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="px-4 py-10 text-center sm:px-6 sm:py-12 md:px-8 md:py-16">
          <h1
            className={`${heroTitleFont.className} mx-auto max-w-4xl text-[30px] font-normal uppercase leading-[1.08] text-neutral-200 sm:text-[34px] md:text-[38px] lg:text-[42px]`}
          >
            AI-Powered Automation for Business Growth
          </h1>
          <p
            className={`${heroSubtitleFont.className} mx-auto mt-4 max-w-3xl text-[20px] font-normal leading-relaxed text-neutral-300`}
          >
            Less manual. More growth.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className={`${heroSubtitleFont.className} inline-flex items-center gap-4 border border-white px-6 py-3 text-[18px] font-normal uppercase text-white transition hover:bg-white/10 md:px-10`}
            >
              <span className="h-px w-6 bg-white md:w-10" aria-hidden />
              Book online
              <span className="h-px w-6 bg-white md:w-10" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us — three columns (reference layout) */}
      <section
        id="about"
        className="scroll-mt-20 bg-white px-4 py-14 text-gray-900 sm:px-6 sm:py-16 md:py-20"
      >
        <h2
          className={`${aboutUsColumnTitleFont.className} mx-auto w-fit text-center text-[25px] font-bold tracking-normal text-black`}
        >
          ABOUT US
        </h2>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-y-10 sm:gap-y-12 md:mt-16 md:grid-cols-3 md:justify-items-stretch md:gap-x-6 md:gap-y-0 lg:gap-x-10">
          <article className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h3
              className={`${aboutUsColumnTitleFont.className} w-full text-center text-[20px] text-gray-900`}
            >
              AI Architecture &amp; Workflows
            </h3>
            <div
              className="relative mt-6 flex h-24 w-24 items-center justify-center self-center text-gray-900"
              aria-hidden
            >
              <Layers className="absolute h-20 w-20" strokeWidth={1.15} />
              <Workflow
                className="relative h-9 w-9 translate-y-0.5"
                strokeWidth={1.25}
              />
            </div>
            <p
              className={`${heroSubtitleFont.className} mt-6 text-[18px] font-normal leading-relaxed text-gray-700`}
            >
              We design and deploy custom AI systems using n8n orchestration,
              large language models, and vector databases (e.g. Pinecone) with
              retrieval-augmented generation (RAG) so answers stay grounded in
              your PDFs, Airtable bases, and internal documentation.
            </p>
          </article>

          <article className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h3
              className={`${aboutUsColumnTitleFont.className} w-full text-center text-[20px] text-gray-900`}
            >
              10+ Hours Back Weekly
            </h3>
            <div
              className="relative mt-6 flex h-24 w-24 items-center justify-center self-center text-gray-900"
              aria-hidden
            >
              <Clock className="h-16 w-16 opacity-90" strokeWidth={1.1} />
              <Zap
                className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-white p-0.5"
                strokeWidth={1.2}
              />
            </div>
            <p
              className={`${heroSubtitleFont.className} mt-6 text-[18px] font-normal leading-relaxed text-gray-700`}
            >
              Our automations are engineered to reclaim substantial time each
              week—from inbox triage and quote-to-cash billing to SEO content
              and executive reporting—so your team can focus on growth instead of
              repetitive manual work.
            </p>
          </article>

          <article className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h3
              className={`${aboutUsColumnTitleFont.className} w-full text-center text-[20px] text-gray-900`}
            >
              QA-Guaranteed Delivery
            </h3>
            <div
              className="relative mt-6 flex h-24 w-24 items-center justify-center self-center text-gray-900"
              aria-hidden
            >
              <ShieldCheck className="h-16 w-16 opacity-90" strokeWidth={1.1} />
              <ClipboardCheck
                className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-white"
                strokeWidth={1.2}
              />
            </div>
            <p
              className={`${heroSubtitleFont.className} mt-6 text-[18px] font-normal leading-relaxed text-gray-700`}
            >
              Every engagement follows a clear roadmap: discovery audit,
              architecture build, QA testing for brand alignment, then go-live
              with a managed retainer that includes a bi-weekly logic audit of AI
              execution logs, retrieval accuracy, and system prompts.
            </p>
          </article>
        </div>
      </section>

      {/* Social */}
      <section
        id="social"
        className="bg-[#1c1c1c] px-4 py-12 text-white sm:px-6 sm:py-14 md:py-16"
        aria-labelledby="social-heading"
      >
        <h2
          id="social-heading"
          className={`${socialHeaderFont.className} m-0 text-center font-normal uppercase leading-normal tracking-wide text-white antialiased`}
          style={{ fontSize: "27px", lineHeight: 1.2 }}
        >
          Social
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <SocialMediaIcons />
        </div>
      </section>

      <section className="bg-black" aria-label="Technology gallery">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] w-full md:aspect-[5/4]"
            >
              <SafeImage
                src={src}
                alt={GALLERY_ALT[i] ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </section>

      <ThoughtLeadershipSection />

      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:py-16"
        aria-labelledby="subscribe-heading"
      >
        <SubscribeForm titleFontClassName={heroTitleFont.className} />
        <p className="mx-auto mt-6 max-w-5xl text-center text-sm text-neutral-500">
          Get 10% off your initial visit when you sign up for our newsletter!
        </p>
      </section>

      <section
        className="relative min-h-[420px] overflow-hidden py-12 sm:min-h-[480px] sm:py-14 md:min-h-[520px] md:py-20"
        aria-labelledby="reviews-heading"
      >
        <SafeImage
          src={REVIEWS_BG}
          alt=""
          fill
          className="object-cover blur-md brightness-[0.35]"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="reviews-heading"
            className={`${reviewsHeadingFont.className} m-0 text-center font-normal uppercase leading-tight tracking-normal text-white`}
            style={{ fontSize: "48px", lineHeight: 1.1 }}
          >
            Reviews
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-5">
            {REVIEWS.map((review) => (
              <article
                key={review.title}
                className="flex flex-col bg-white px-6 py-8 text-center shadow-sm"
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 text-xl font-semibold text-neutral-600"
                  aria-hidden
                >
                  {review.initial}
                </div>
                <div className="mt-4">
                  <StarRating />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900">
                  {review.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-800">
                  {review.body}
                </p>
                <p className="mt-5 text-[11px] text-neutral-500">
                  {review.attribution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
    </>
  );
}
