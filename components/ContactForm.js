"use client";

import React, { useState } from "react";
import clsx from "clsx";

const fieldClass =
  "w-full min-h-[44px] rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-[17px] leading-normal text-slate-800 shadow-sm placeholder:text-slate-500 focus:border-indigo-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 sm:text-[18px]";

const fieldClassEmbedded =
  "w-full min-h-[44px] rounded-xl border-0 bg-slate-200/50 px-3.5 py-2.5 text-[17px] leading-normal text-slate-800 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/70 placeholder:text-slate-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/30 sm:text-[18px]";

const labelClass = "mb-1.5 block text-[15px] font-bold uppercase tracking-wider text-slate-600 sm:text-sm";

const labelClassEmbedded = "mb-1.5 block text-[13px] font-bold uppercase tracking-wider text-slate-500 sm:text-[12px]";

const INQUIRY_OPTIONS = [
  { value: "general", label: "General question" },
  { value: "enterprise_rfp", label: "Larger or custom project" },
];

const TEAM_SIZE_OPTIONS = [
  { value: "", label: "Select" },
  { value: "solo", label: "Solo / just me" },
  { value: "2-10", label: "2–10 people" },
  { value: "11-50", label: "11–50 people" },
  { value: "51+", label: "51+ people" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select" },
  { value: "asap", label: "ASAP / this month" },
  { value: "1-3mo", label: "1–3 months" },
  { value: "3-6mo", label: "3–6 months" },
  { value: "exploring", label: "Exploring / no fixed date" },
];

/**
 * @param {{ fClass: string; lClass: string }} props
 */
function ProjectFormFields({ fClass, lClass }) {
  return (
    <>
      <div>
        <label htmlFor="contact-industry" className={lClass}>
          Industry
        </label>
        <input
          id="contact-industry"
          name="industry"
          type="text"
          placeholder="e.g. Professional services, manufacturing"
          className={fClass}
        />
      </div>
      <div>
        <label htmlFor="contact-team" className={lClass}>
          Team size
        </label>
        <select
          id="contact-team"
          name="teamSize"
          className={clsx(fClass, "min-h-[48px] cursor-pointer py-2")}
        >
          {TEAM_SIZE_OPTIONS.map((opt) => (
            <option key={opt.value || "empty"} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-stack" className={lClass}>
          Tools &amp; systems today
        </label>
        <textarea
          id="contact-stack"
          name="currentStack"
          rows={3}
          placeholder="e.g. HubSpot, QuickBooks, Gmail, Airtable, data warehouse, spreadsheets"
          className={clsx(fClass, "min-h-[5.5rem] resize-y sm:min-h-[6rem]")}
        />
      </div>
      <div>
        <label htmlFor="contact-workflow" className={lClass}>
          Workflow to improve
        </label>
        <textarea
          id="contact-workflow"
          name="workflowFocus"
          rows={3}
          placeholder="What process is manual, slow, or error-prone? (e.g. lead intake, quoting, handoffs)"
          className={clsx(fClass, "min-h-[5.5rem] resize-y sm:min-h-[6rem]")}
        />
      </div>
      <div>
        <label htmlFor="contact-timeline" className={lClass}>
          Timeline
        </label>
        <select
          id="contact-timeline"
          name="timeline"
          className={clsx(fClass, "min-h-[48px] cursor-pointer py-2")}
        >
          {TIMELINE_OPTIONS.map((opt) => (
            <option key={opt.value || "t-empty"} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className={lClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Anything else: goals, constraints, compliance, or links."
          className={clsx(fClass, "min-h-[100px] resize-y sm:min-h-[120px]")}
        />
      </div>
    </>
  );
}

/**
 * @param {{ hideIntro?: boolean; variant?: "default" | "embedded" }} props
 */
export default function ContactForm({ hideIntro = false, variant = "default" } = {}) {
  const fClass = variant === "embedded" ? fieldClassEmbedded : fieldClass;
  const lClass = variant === "embedded" ? labelClassEmbedded : labelClass;
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      inquiryType: String(fd.get("inquiryType") || "").trim() || "general",
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      jobTitle: String(fd.get("jobTitle") || ""),
      industry: String(fd.get("industry") || ""),
      teamSize: String(fd.get("teamSize") || ""),
      currentStack: String(fd.get("currentStack") || ""),
      workflowFocus: String(fd.get("workflowFocus") || ""),
      timeline: String(fd.get("timeline") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("idle");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("idle");
      setError("Network error. Check your connection and try again.");
    }
  }

  const embeddedGroupTitle = "m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500";

  return (
    <form
      className="mt-0 space-y-4 text-slate-800"
      onSubmit={onSubmit}
      noValidate
    >
      {hideIntro ? null : (
        <p className="m-0 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
          Ask anything or tell us about your project. We usually reply within 1–2 business days.
        </p>
      )}

      {variant === "embedded" ? (
        <p className={clsx(embeddedGroupTitle, "mb-0")}>About you</p>
      ) : null}

      <div
        className={clsx(
          variant === "embedded"
            ? "space-y-3.5 rounded-2xl border border-slate-200/50 bg-white/50 p-3.5 sm:p-4"
            : "space-y-4",
        )}
      >
      <div>
        <label htmlFor="contact-inquiry" className={lClass}>
          This is about
        </label>
        <select
          id="contact-inquiry"
          name="inquiryType"
          className={clsx(fClass, "min-h-[48px] cursor-pointer py-2")}
          defaultValue="general"
          required
        >
          {INQUIRY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-name" className={lClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name or team lead"
          className={fClass}
        />
      </div>
      <div>
        <label htmlFor="contact-company" className={lClass}>
          Company or organization
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Business name"
          className={fClass}
        />
      </div>
      <div>
        <label htmlFor="contact-job" className={lClass}>
          Role
        </label>
        <input
          id="contact-job"
          name="jobTitle"
          type="text"
          autoComplete="organization-title"
          placeholder="e.g. Owner, Ops, IT"
          className={fClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={lClass}>
          Work email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className={fClass}
        />
      </div>
      </div>

      {variant === "embedded" ? (
        <div className="space-y-3.5 rounded-2xl border border-slate-200/50 bg-slate-50/40 p-3.5 sm:p-4" role="group" aria-label="Project and timeline">
          <p className={clsx(embeddedGroupTitle, "m-0")}>Project &amp; timeline</p>
          <div className="space-y-3.5">
            <ProjectFormFields fClass={fClass} lClass={lClass} />
          </div>
        </div>
      ) : (
        <ProjectFormFields fClass={fClass} lClass={lClass} />
      )}

      {error ? (
        <p className="text-[16px] leading-normal text-red-700 sm:text-[17px]" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p
          className="rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-[16px] leading-normal text-emerald-900 sm:text-[17px]"
          role="status"
        >
          Thanks — we received your message and will follow up shortly.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className={clsx(
          "w-full min-h-[48px] rounded-xl px-5 py-3 text-[16px] font-bold uppercase tracking-wide text-white transition disabled:cursor-not-allowed disabled:opacity-60",
          "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-600/25 hover:from-indigo-700 hover:to-violet-700",
          variant === "embedded" && "ring-1 ring-indigo-500/20",
        )}
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
