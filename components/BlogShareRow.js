"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

/**
 * Facebook + X share links using the current page URL (client-only).
 */
/**
 * @param {{ title: string; labelClassName?: string }} props
 */
export default function BlogShareRow({ title, labelClassName }) {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const fb = pageUrl
    ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`
    : null;
  const x = pageUrl
    ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(title || "")}`
    : null;

  return (
    <div className="flex flex-wrap items-center gap-4">
      <span
        className={clsx(
          "font-share",
          labelClassName ?? "text-[27px] font-normal text-neutral-700",
        )}
      >
        Share this post:
      </span>
      <div className="flex min-h-[40px] items-center gap-3">
        {fb && x ? (
          <>
            <a
              href={fb}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition hover:opacity-90"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href={x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-sm transition hover:bg-neutral-800"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l12.966 15.644z"
                />
              </svg>
            </a>
          </>
        ) : (
          <span className="text-xs text-neutral-400" aria-live="polite">
            Preparing share links…
          </span>
        )}
      </div>
    </div>
  );
}
