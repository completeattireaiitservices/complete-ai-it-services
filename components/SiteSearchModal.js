"use client";

import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  LayoutGrid,
  Scale,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { filterSiteSearch } from "../lib/siteSearchIndex";

const GROUP_ORDER = ["Site", "Blog", "Legal"];

const GROUP_CONFIG = {
  Site: { label: "Pages", Icon: LayoutGrid, accent: "text-indigo-600 bg-indigo-50" },
  Blog: { label: "Blog", Icon: BookOpen, accent: "text-teal-600 bg-teal-50" },
  Legal: { label: "Legal", Icon: Scale, accent: "text-violet-600 bg-violet-50" },
};

/**
 * @param {{ open: boolean; onClose: () => void }} props
 */
export default function SiteSearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(/** @type {HTMLInputElement | null} */ (null));
  const titleId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const results = useMemo(() => filterSiteSearch(query), [query]);
  const totalCount = results.length;
  const hasQuery = query.trim().length > 0;

  const grouped = useMemo(() => {
    const map = new Map();
    for (const r of results) {
      if (!map.has(r.group)) map.set(r.group, []);
      map.get(r.group).push(r);
    }
    return GROUP_ORDER.filter((g) => map.has(g)).map((g) => [g, map.get(g)]);
  }, [results]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = prev;
      cancelAnimationFrame(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onBackdropDown = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (!mounted || !open) return null;

  const el = (
    <div
      className="caits-site-search fixed inset-0 z-[200] flex min-h-0 items-center justify-center overflow-hidden px-3 py-6 sm:px-4 sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 z-0 h-full w-full cursor-default border-0 bg-[#0a0a0a]/60 p-0 backdrop-blur-sm"
        aria-label="Close search"
        onMouseDown={onBackdropDown}
      />
      <div
        className="caits-site-search-panel relative z-10 max-h-[min(85vh,640px)] w-full max-w-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.04)]">
          <div className="relative border-b border-neutral-100/90 bg-gradient-to-br from-neutral-50 via-white to-indigo-50/30 px-4 pb-3 pt-4 sm:px-5 sm:pt-5">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-500 to-teal-500" aria-hidden />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm">
                    <Search className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                  </div>
                  <h2
                    id={titleId}
                    className="m-0 text-left text-lg font-bold tracking-tight text-neutral-900 sm:text-xl"
                  >
                    Search the site
                  </h2>
                </div>
                <p className="ml-[44px] mt-1 text-left text-sm text-neutral-500 sm:text-[15px]">
                  {hasQuery
                    ? `${totalCount} result${totalCount === 1 ? "" : "s"}${
                        totalCount > 0 ? " — pick a page or article" : ""
                      }`
                    : "Suggested links and all articles. Type to filter."}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-xl border border-neutral-200/80 bg-white/80 p-2 text-neutral-500 shadow-sm transition hover:border-neutral-300 hover:text-neutral-900"
                aria-label="Close search"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="relative mt-4">
              <label htmlFor="site-search-input" className="sr-only">
                Search query
              </label>
              <div className="pointer-events-none absolute left-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-neutral-400">
                <Search className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
              </div>
              <input
                id="site-search-input"
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="n8n, RAG, contact, quote-to-cash…"
                autoComplete="off"
                className="h-12 w-full rounded-xl border border-neutral-200/90 bg-white pl-12 pr-4 text-base text-neutral-900 shadow-inner shadow-neutral-100/50 placeholder:text-neutral-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div
            className="min-h-0 max-h-[min(48vh,400px)] overflow-y-auto overscroll-contain bg-neutral-50/40 px-1 py-1 sm:max-h-[min(52vh,440px)]"
            id="site-search-results"
          >
            {grouped.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center gap-2 px-4 py-12 text-center"
                role="status"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-200/80 text-neutral-500">
                  <Search className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="m-0 max-w-sm text-sm font-medium text-neutral-700">
                  No matches for that search.
                </p>
                <p className="m-0 max-w-sm text-xs text-neutral-500">
                  Try a shorter word, a topic like &ldquo;automation&rdquo;, or browse the
                  suggestions when the field is empty.
                </p>
              </div>
            ) : (
              <ul className="space-y-1 py-2">
                {grouped.map(([group, items]) => {
                  const config = GROUP_CONFIG[group] ?? {
                    label: group,
                    Icon: LayoutGrid,
                    accent: "text-neutral-600 bg-neutral-100",
                  };
                  const GroupIcon = config.Icon;
                  return (
                    <li key={group} className="px-2 sm:px-3">
                      <div className="flex items-center gap-2 py-1.5 pl-0.5">
                        <span
                          className={`inline-flex h-6 items-center justify-center gap-1.5 rounded-full px-2 text-[10px] font-bold uppercase tracking-[0.12em] ${config.accent}`}
                        >
                          <GroupIcon className="h-3.5 w-3.5" strokeWidth={2} />
                          {config.label}
                        </span>
                      </div>
                      <ul className="space-y-0.5 pb-2" role="list">
                        {items.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="group flex items-start gap-2.5 rounded-xl border border-transparent bg-white px-2.5 py-2.5 text-left transition hover:border-indigo-200/80 hover:bg-white hover:shadow-sm"
                            >
                              <span
                                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition group-hover:bg-indigo-100 group-hover:text-indigo-700"
                                aria-hidden
                              >
                                <ChevronRight
                                  className="h-4 w-4 -translate-x-px"
                                  strokeWidth={2}
                                />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-[15px] font-semibold leading-snug text-neutral-900 group-hover:text-indigo-950">
                                  {item.title}
                                </span>
                                {item.description ? (
                                  <span className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                                    {item.description}
                                  </span>
                                ) : null}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-100 bg-white px-4 py-2.5 sm:px-5">
            <p className="m-0 flex items-center gap-1.5 text-[11px] text-neutral-400">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" strokeWidth={2} />
              <span>Tip: use several words to narrow results</span>
            </p>
            <p className="m-0 hidden text-[11px] text-neutral-400 sm:block">
              <kbd className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-sans text-[10px] text-neutral-600">
                Esc
              </kbd>{" "}
              to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(el, document.body);
}
