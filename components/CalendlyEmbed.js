import React from "react";
import clsx from "clsx";

/**
 * Merge Calendly embed query params (avoids duplicating the hub + event chrome / extra logos in some layouts).
 * @param {string} href
 * @param {Record<string, string | undefined>} add
 */
function withCalendlyParams(href, add) {
  try {
    const u = new URL(href);
    for (const [k, v] of Object.entries(add)) {
      if (v == null) continue;
      if (!u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return href;
  }
}

/** Calendly treats embeds as “embedded” when embed_type + embed_domain are set; required for some URL flags to apply. */
function defaultEmbedHost() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://completeaiitservices.ai";
  try {
    return new URL(raw).host;
  } catch {
    return "completeaiitservices.ai";
  }
}

/**
 * Calendly inline embed. Default URL is set on the contact page; override with:
 * NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/completeaiitservices/… (event path if you use a specific event)
 */
export default function CalendlyEmbed({ url, className, iframeClassName }) {
  if (!url || !/^https?:\/\//i.test(String(url).trim())) {
    return (
      <div
        className={clsx(
          "flex min-h-[min(50vh,520px)] w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100/50 px-6 text-center",
          className,
        )}
      >
        <p className="m-0 max-w-sm text-[15px] font-bold uppercase tracking-wider text-slate-500">
          Calendly not configured
        </p>
        <p className="m-0 max-w-md text-[15px] leading-relaxed text-slate-600">
          Set{" "}
          <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[14px] text-slate-800">
            NEXT_PUBLIC_CALENDLY_URL
          </code>{" "}
          to your public Calendly event URL, then rebuild.
        </p>
      </div>
    );
  }

  const clean = withCalendlyParams(String(url).trim(), {
    embed_type: "Inline",
    embed_domain: defaultEmbedHost(),
    // Hides the in-widget cookie/GDPR bar in embeds (avoids a dead “Cookie settings” area / blank strip in iframes).
    // You still need your own cookie notice on the site if your jurisdiction requires it.
    hide_gdpr_banner: "1",
  });

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200/80",
        className,
      )}
    >
      <iframe
        title="Schedule a call — Calendly"
        src={clean}
        className={clsx(
          "block h-[1220px] w-full border-0 sm:h-[1280px] lg:h-[1340px]",
          iframeClassName,
        )}
        allow="payment; geolocation; microphone; camera; fullscreen; autoplay; clipboard-read; clipboard-write; encrypted-media"
        loading="lazy"
      />
    </div>
  );
}
