import React from "react";
import { Share } from "next/font/google";
import Head from "next/head";
import { Sparkles } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactUsHubSection from "../components/ContactUsHubSection";
import clsx from "clsx";

const pageFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

/** Public scheduling: https://calendly.com/completeaiitservices — override in env if needed. */
const DEFAULT_CALENDLY_URL =
  "https://calendly.com/completeaiitservices?embed_type=Inline";

export default function ContactPage() {
  const defaultCalendlyUrl =
    (process.env.NEXT_PUBLIC_CALENDLY_URL || "").trim() || DEFAULT_CALENDLY_URL;
  /** Event-specific URL for 30 min (e.g. …/30min) so the embed opens that event after the button. */
  const thirtyMinCalendlyUrl = (process.env.NEXT_PUBLIC_CALENDLY_30MIN_URL || "").trim();

  return (
    <>
      <Head>
        <title>Contact Us | Complete AI IT Services</title>
        <meta
          name="description"
          content="Get in touch with Complete AI IT Services—book a call or send a message. We help business owners with AI and automation."
        />
      </Head>
      <div
        className={clsx(
          "min-h-screen bg-slate-50 font-sans text-slate-800",
          pageFont.className,
        )}
      >
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="contact" />
        </div>

        <div className="relative overflow-hidden border-b border-slate-200/60 bg-slate-50">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(99,102,241,0.16),transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(20,184,166,0.09),transparent_45%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.08),transparent_40%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-12 md:px-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-600 shadow-sm shadow-slate-200/50 backdrop-blur sm:text-sm">
              <Sparkles
                className="h-3.5 w-3.5 text-indigo-600"
                strokeWidth={2.25}
                aria-hidden
              />
              <span>Get in touch</span>
            </div>
            <h1
              className="m-0 text-balance font-bold text-slate-900 sm:leading-tight"
              style={{ fontSize: "clamp(1.5rem, 2.2vw + 0.4rem, 2.1rem)", lineHeight: 1.2 }}
            >
              You run the business.{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
                We help it run smarter.
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
              Book a quick call or send a message—no jargon, no pressure.
            </p>
          </div>
        </div>

        <ContactUsHubSection
          defaultCalendlyUrl={defaultCalendlyUrl}
          thirtyMinCalendlyUrl={thirtyMinCalendlyUrl}
        />

        <SiteFooter />
      </div>
    </>
  );
}
