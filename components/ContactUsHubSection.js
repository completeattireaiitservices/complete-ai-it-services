"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Building2, Calendar, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import CalendlyEmbed from "./CalendlyEmbed";
import SocialBrandRow from "./SocialBrandRow";
import clsx from "clsx";

/**
 * @param {{ defaultCalendlyUrl: string; thirtyMinCalendlyUrl: string }} props
 */
export default function ContactUsHubSection({ defaultCalendlyUrl, thirtyMinCalendlyUrl }) {
  const has30MinEvent =
    Boolean(thirtyMinCalendlyUrl) && String(thirtyMinCalendlyUrl).trim().length > 0;

  const [activeTab, setActiveTab] = useState(/** @type {"quote" | "schedule"} */ ("quote"));

  const activeCalendlyUrl = has30MinEvent
    ? String(thirtyMinCalendlyUrl).trim()
    : defaultCalendlyUrl;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const { hash } = window.location;
    if (hash === "#inquiries-rfp") setActiveTab("quote");
    if (hash === "#discovery-call") setActiveTab("schedule");
  }, []);

  const onTabListKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = activeTab === "quote" ? "schedule" : "quote";
      setActiveTab(next);
      requestAnimationFrame(() =>
        document.getElementById(next === "quote" ? "tab-quote" : "tab-schedule")?.focus(),
      );
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = activeTab === "schedule" ? "quote" : "schedule";
      setActiveTab(next);
      requestAnimationFrame(() =>
        document.getElementById(next === "quote" ? "tab-quote" : "tab-schedule")?.focus(),
      );
    }
    if (e.key === "Home") {
      e.preventDefault();
      setActiveTab("quote");
      requestAnimationFrame(() => document.getElementById("tab-quote")?.focus());
    }
    if (e.key === "End") {
      e.preventDefault();
      setActiveTab("schedule");
      requestAnimationFrame(() => document.getElementById("tab-schedule")?.focus());
    }
  }, [activeTab]);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16"
      aria-labelledby="contact-hub-heading"
    >
      <div
        id="contact-hub-tabs"
        className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/40"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(99,102,241,0.09),transparent_50%)]"
          aria-hidden
        />
        <div
          className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-500"
          aria-hidden
        />
        <div className="relative border-b border-slate-200/60 bg-gradient-to-b from-white to-slate-50/50 px-6 py-8 text-center sm:px-8 sm:py-10">
          <h2
            id="contact-hub-heading"
            className="m-0 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl sm:tracking-[-0.02em]"
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
              touch
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-[15px] leading-[1.65] text-slate-600 sm:mt-4 sm:text-[17px] sm:leading-[1.6]">
            Choose a path:{" "}
            <span className="font-semibold text-slate-800">Get a Free Quote</span> for a written
            follow-up, or <span className="font-semibold text-slate-800">Schedule</span> to pick a
            slot on the calendar. Either way, you’re one step from moving your workflows forward.
          </p>
        </div>

        <div
          className="relative"
          role="region"
          aria-label="Get a quote or schedule a meeting"
        >
          <div
            className="border-b border-slate-200/80 bg-gradient-to-b from-slate-100/95 via-slate-100 to-slate-200/50 px-3 py-3 sm:px-6 sm:py-4"
            role="tablist"
            aria-label="Contact options"
            onKeyDown={onTabListKeyDown}
          >
            <p className="mx-auto mb-2.5 max-w-2xl text-center text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500 sm:mb-3 sm:text-xs">
              Choose one
            </p>
            <div className="relative mx-auto max-w-2xl rounded-[1.125rem] bg-slate-300/40 p-1 shadow-[inset_0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-slate-300/35">
              <div
                className={clsx(
                  "pointer-events-none absolute inset-y-1 left-1 z-0 w-[calc((100%-0.75rem)/2)] rounded-[0.875rem] bg-gradient-to-b shadow-[0_6px_24px_-8px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 transition-[transform,background-image] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]",
                  activeTab === "quote"
                    ? "from-indigo-50/95 via-white to-white ring-indigo-200/50"
                    : "translate-x-[calc(100%+0.25rem)] from-teal-50/95 via-white to-white ring-teal-200/50",
                )}
                aria-hidden
              />
              <div className="relative z-10 flex gap-1">
                <button
                  type="button"
                  role="tab"
                  id="tab-quote"
                  aria-selected={activeTab === "quote"}
                  aria-controls="inquiries-rfp"
                  tabIndex={activeTab === "quote" ? 0 : -1}
                  onClick={() => setActiveTab("quote")}
                  className={clsx(
                    "group flex min-h-[3.25rem] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-[0.875rem] px-2 py-2 outline-none transition-colors duration-200 sm:min-h-[3.5rem] sm:flex-row sm:items-center sm:justify-start sm:gap-2.5 sm:px-4 sm:py-2.5",
                    "focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100/80",
                    activeTab === "quote"
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-700 active:text-slate-800",
                  )}
                >
                  <span
                    className={clsx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition sm:h-9 sm:w-9",
                      activeTab === "quote"
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                        : "bg-slate-200/70 text-slate-500 group-hover:bg-slate-200",
                    )}
                  >
                    <Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="min-w-0 text-center sm:text-left">
                    <span className="block text-[13px] font-bold leading-tight sm:text-[15px]">Get a Free Quote</span>
                    <span
                      className={clsx(
                        "mt-0.5 block max-w-[11rem] truncate text-[10px] font-medium leading-snug sm:max-w-none sm:whitespace-normal sm:text-[11px] sm:leading-tight",
                        activeTab === "quote" ? "text-slate-600" : "text-slate-500",
                      )}
                    >
                      Email follow-up
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-schedule"
                  aria-selected={activeTab === "schedule"}
                  aria-controls="discovery-call"
                  tabIndex={activeTab === "schedule" ? 0 : -1}
                  onClick={() => setActiveTab("schedule")}
                  className={clsx(
                    "group flex min-h-[3.25rem] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-[0.875rem] px-2 py-2 outline-none transition-colors duration-200 sm:min-h-[3.5rem] sm:flex-row sm:items-center sm:justify-start sm:gap-2.5 sm:px-4 sm:py-2.5",
                    "focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100/80",
                    activeTab === "schedule"
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-700 active:text-slate-800",
                  )}
                >
                  <span
                    className={clsx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition sm:h-9 sm:w-9",
                      activeTab === "schedule"
                        ? "bg-teal-600 text-white shadow-md shadow-teal-600/25"
                        : "bg-slate-200/70 text-slate-500 group-hover:bg-slate-200",
                    )}
                  >
                    <Calendar className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="min-w-0 text-center sm:text-left">
                    <span className="block text-[13px] font-bold leading-tight sm:text-[15px]">Schedule</span>
                    <span
                      className={clsx(
                        "mt-0.5 block max-w-[11rem] truncate text-[10px] font-medium leading-snug sm:max-w-none sm:whitespace-normal sm:text-[11px] sm:leading-tight",
                        activeTab === "schedule" ? "text-slate-600" : "text-slate-500",
                      )}
                    >
                      Calendar invite · meeting link
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div
            id="inquiries-rfp"
            role="tabpanel"
            aria-labelledby="tab-quote"
            hidden={activeTab !== "quote"}
            className="relative border-b border-slate-200/40 bg-gradient-to-b from-slate-50/40 to-white p-5 sm:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.08),transparent_50%)]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div>
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600/90 sm:text-[11px]">
                    Free quote
                  </p>
                  <h3 className="m-0 mt-1.5 flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200/80">
                      <Mail className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                    </span>
                    Project details
                  </h3>
                </div>
                <p className="m-0 max-w-sm text-left text-xs leading-relaxed text-slate-500 sm:mb-0.5 sm:text-right sm:text-[13px]">
                  Replies in <span className="font-semibold text-slate-700">1–2 business days</span>.
                </p>
              </div>
              <div className="mt-5 sm:mt-6">
                <ContactForm hideIntro variant="embedded" />
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-6 text-center shadow-sm ring-1 ring-slate-200/30 sm:mt-10 sm:px-6 sm:py-7">
                <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
                  <Building2 className="h-3.5 w-3.5 shrink-0 text-indigo-600" strokeWidth={2.25} aria-hidden />
                  <span>Business details</span>
                </div>
                <p className="m-0 text-pretty text-[14px] leading-relaxed text-slate-600 sm:text-[15px] sm:leading-[1.65]">
                  We’ll help you map the highest-ROI automations for your business and recommend a simple
                  next step.
                </p>
                <div
                  className="mx-auto my-4 h-px w-[min(100%,14rem)] max-w-full bg-gradient-to-r from-transparent via-slate-300/90 to-transparent sm:my-5"
                  aria-hidden
                />
                <p className="m-0 text-[15px] font-extrabold tracking-tight text-slate-900 sm:text-[16px]">
                  Complete AI IT Services
                </p>
                <div className="mt-4 flex flex-col items-stretch gap-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 text-[14px] font-medium text-slate-700 shadow-sm sm:min-h-[46px] sm:px-5">
                    <MapPin className="h-4 w-4 shrink-0 text-teal-600" strokeWidth={2} aria-hidden />
                    Pleasanton, CA
                  </span>
                  <a
                    href="mailto:info@completeaiitservices.ai"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/95 to-white px-4 py-3 text-[14px] font-bold text-indigo-800 shadow-sm transition hover:border-indigo-300 hover:from-indigo-50 hover:text-indigo-950 sm:px-5"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-indigo-600" strokeWidth={2} aria-hidden />
                    <span className="break-all">info@completeaiitservices.ai</span>
                  </a>
                </div>

                <div
                  className="mx-auto my-6 h-px w-[min(100%,18rem)] max-w-full bg-gradient-to-r from-transparent via-slate-200/90 to-transparent"
                  aria-hidden
                />
                <div className="mx-auto max-w-3xl">
                  <SocialBrandRow />
                </div>
              </div>
            </div>
          </div>

          <div
            id="discovery-call"
            role="tabpanel"
            aria-labelledby="tab-schedule"
            hidden={activeTab !== "schedule"}
            className="relative bg-slate-50/50 p-5 sm:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(20,184,166,0.07),transparent_50%)]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-4xl">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div>
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600/90 sm:text-[11px]">
                    Online calendar
                  </p>
                  <h3
                    id="appointments-embed"
                    className="m-0 mt-1.5 flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-700 ring-1 ring-teal-200/80">
                      <Calendar className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                    </span>
                    Book a time
                  </h3>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-teal-100/80 bg-gradient-to-br from-teal-50/80 via-white to-slate-50/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:mt-5 sm:p-4">
                <p className="m-0 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
                  Pick a time—you’ll get a calendar invite with the meeting link. Need a written scope
                  first?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("quote")}
                    className="font-bold text-indigo-600 underline decoration-indigo-300 decoration-2 underline-offset-2 transition hover:decoration-indigo-500"
                  >
                    Get a free quote
                  </button>{" "}
                  on the other tab.
                </p>
              </div>
              <div className="mt-4 w-full overflow-hidden rounded-2xl ring-1 ring-slate-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:mt-5">
                <CalendlyEmbed key={activeCalendlyUrl} url={activeCalendlyUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
