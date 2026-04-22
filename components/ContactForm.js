"use client";

import React, { useState } from "react";

const fieldClass =
  "min-h-[44px] w-full border border-neutral-300 bg-white px-3 py-2.5 text-[20px] font-share leading-normal text-neutral-800 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400";

const labelClass = "mb-1 block text-[20px] font-share leading-normal text-neutral-800";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
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

  return (
    <form className="mt-6 space-y-4 text-[20px] font-share leading-normal text-neutral-800" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Email*"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Project details
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell us about workflows you want automated (email, billing, content, reporting)"
          className={`${fieldClass} min-h-[160px] resize-y`}
        />
      </div>
      {error ? (
        <p className="text-[20px] font-share leading-normal text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-[20px] font-share leading-normal text-green-800" role="status">
          Thanks — we received your message and will follow up shortly.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-[48px] w-full border border-black bg-white py-3 text-[20px] font-share font-bold leading-normal tracking-normal text-neutral-800 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "— Send —"}
      </button>
    </form>
  );
}
