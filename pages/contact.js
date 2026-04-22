import React from "react";
import { Share } from "next/font/google";
import SafeImage from "../components/SafeImage";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SocialBrandRow from "../components/SocialBrandRow";
import ContactForm from "../components/ContactForm";

const socialHeaderFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const HERO_TRIPTYCH = [
  {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    alt: "Hands using a tablet at a desk with coffee",
  },
  {
    src: "/images/contact-hero-center-hd.png",
    alt: "Bright workspace: person using a tablet at a light wood desk with coffee, high-key professional photo",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Team meeting with laptops showing charts",
  },
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Complete AI IT Services</title>
        <meta
          name="description"
          content="Contact Complete AI IT Services in Pleasanton, California for AI integration, automation, and managed retainer engagements."
        />
      </Head>
      <div className="min-h-screen bg-white font-sans text-neutral-900">
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="contact" />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-3" aria-label="Highlights">
          {HERO_TRIPTYCH.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[5/4] w-full min-h-[200px] sm:aspect-auto sm:min-h-[220px] md:min-h-[280px]"
            >
              <SafeImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority
              />
            </div>
          ))}
        </section>

        <section
          className="border-b border-neutral-200 bg-white px-6 py-12 md:py-16"
          aria-labelledby="social-heading"
        >
          <h2
            id="social-heading"
            className={`${socialHeaderFont.className} m-0 text-center font-normal uppercase leading-normal tracking-wide text-neutral-700`}
            style={{ fontSize: "27px", lineHeight: 1.2 }}
          >
            Social
          </h2>
          <div className="mt-8">
            <SocialBrandRow />
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-20"
          aria-labelledby="get-in-touch-heading"
        >
          <h2
            id="get-in-touch-heading"
            className="text-center text-[27px] font-normal uppercase tracking-normal text-neutral-900 font-share"
          >
            Get in touch
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-[20px] font-share leading-normal text-neutral-800">
              <h3 className="text-[20px] font-bold font-share leading-normal text-neutral-800">
                Contact us
              </h3>
              <ContactForm />
              <p className="mt-6 text-[20px] font-share leading-relaxed text-neutral-800">
                This site is protected by reCAPTCHA and our{" "}
                <Link
                  href="/legal/privacy-policy"
                  className="underline underline-offset-2 hover:text-neutral-600"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/terms-of-service"
                  className="underline underline-offset-2 hover:text-neutral-600"
                >
                  Terms of Service
                </Link>{" "}
                apply.
              </p>
            </div>

            <div className="text-[20px] font-share leading-relaxed text-neutral-800 lg:pt-1">
              <p>
                Tell us about your workflows, data sources, and goals—we design
                n8n orchestration, RAG knowledge bases, and LLM automations with a
                QA-backed delivery model. We will respond with next steps for a
                discovery audit.
              </p>
              <p className="mt-8 text-[20px] font-bold font-share leading-normal text-neutral-800">
                Complete AI IT Services
              </p>
              <p className="mt-2 text-[20px] font-share text-neutral-800">
                Pleasanton, California, United States
              </p>
              <p className="mt-2">
                <a
                  href="tel:+15103049589"
                  className="text-[20px] font-share text-neutral-800 hover:underline"
                >
                  (510) 304-9589
                </a>
              </p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
