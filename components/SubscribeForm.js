"use client";

import React, { useState } from "react";

/**
 * @param {{ titleFontClassName?: string }} props
 * When `titleFontClassName` is set (Squada One from `next/font`), the heading
 * sits in one row with the email field and button (reference layout).
 */
export default function SubscribeForm({ titleFontClassName }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("loading");

    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("idle");
        setError(data.error || "Could not sign up. Try again.");
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
    <div className="mx-auto w-full max-w-5xl">
      <form
        className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5"
        onSubmit={onSubmit}
        noValidate
      >
        {titleFontClassName ? (
          <h2
            id="subscribe-heading"
            className={`${titleFontClassName} shrink-0 text-left text-2xl font-bold uppercase leading-none tracking-wide text-neutral-900 sm:text-[28px]`}
          >
            Subscribe
          </h2>
        ) : null}
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Email Address"
          className="min-h-[48px] min-w-0 flex-1 border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-3 border border-neutral-300 bg-white px-5 text-xs font-bold uppercase tracking-[0.12em] text-neutral-900 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="h-px w-6 shrink-0 bg-neutral-300 sm:w-8" aria-hidden />
          {status === "loading" ? "Signing up…" : "Sign up"}
          <span className="h-px w-6 shrink-0 bg-neutral-300 sm:w-8" aria-hidden />
        </button>
      </form>
      {error ? (
        <p className="mt-3 text-center text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="mt-3 text-center text-sm text-green-800" role="status">
          You are signed up for updates.
        </p>
      ) : null}
    </div>
  );
}
