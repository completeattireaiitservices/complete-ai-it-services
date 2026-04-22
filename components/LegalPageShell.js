import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

/**
 * Shared layout for legal documents: header, breadcrumb, title band, content card, related link.
 *
 * @param {{
 *   metaTitle: string;
 *   metaDescription: string;
 *   breadcrumbCurrent: string;
 *   title: string;
 *   subtitle: React.ReactNode;
 *   relatedHref: string;
 *   relatedLabel: string;
 *   children: React.ReactNode;
 * }} props
 */
export default function LegalPageShell({
  metaTitle,
  metaDescription,
  breadcrumbCurrent,
  title,
  subtitle,
  relatedHref,
  relatedLabel,
  children,
}) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="min-h-screen bg-neutral-50 font-share text-neutral-900">
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="home" />
        </div>

        <main className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:max-w-[52rem]">
          <nav
            className="flex flex-wrap items-center gap-x-1 gap-y-1 text-[15px] text-neutral-600"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="rounded-md px-2 py-1 font-medium text-neutral-800 transition hover:bg-neutral-200/80 hover:text-neutral-900"
            >
              Home
            </Link>
            <span className="text-neutral-300" aria-hidden>
              /
            </span>
            <span className="rounded-md px-2 py-1 text-neutral-500">{breadcrumbCurrent}</span>
          </nav>

          <header className="mt-8 rounded-2xl border border-neutral-200/90 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-[2rem] sm:leading-tight">
              {title}
            </h1>
            <p className="mt-5 border-t border-neutral-100 pt-5 text-[15px] leading-relaxed text-neutral-600 sm:text-base">
              {subtitle}
            </p>
          </header>

          <article className="mt-6 rounded-2xl border border-neutral-200/90 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12 [&_strong]:font-semibold [&_strong]:text-neutral-900">
            {children}
          </article>

          <nav
            className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-neutral-200 bg-white/80 px-4 py-6 text-center sm:flex-row sm:gap-6"
            aria-label="Related legal documents"
          >
            <span className="text-sm text-neutral-500">Related</span>
            <Link
              href={relatedHref}
              className="text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
            >
              {relatedLabel}
            </Link>
            <span className="hidden text-neutral-300 sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href="/contact"
              className="text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900"
            >
              Contact us
            </Link>
          </nav>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
