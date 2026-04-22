import React from "react";
import Link from "next/link";
import SafeImg from "./SafeImg";
import BlogShareRow from "./BlogShareRow";
import { BlogArticleFallbackCss } from "./CssChunkFallback";
import { formatShortBlogDate } from "../lib/blogPosts";

/**
 * Blog post layout: back link, then two columns (~2/3 + ~1/3) with a vertical rule,
 * main title + date + hero + body + share, and a “Recent Posts” sidebar with thumbnails.
 *
 * @param {{ post: { slug: string; title: string; date: string; image: string; showHero?: boolean }; recent: Array<{ slug: string; title: string; date: string; image: string }>; children: React.ReactNode; titleClassName?: string; kickerClassName?: string; recentPostTitleClassName?: string; recentPostDateClassName?: string }} props
 * Pass `kickerClassName` (non-empty) to render the optional “Thought Leadership” line above the back link.
 */
export default function BlogArticleLayout({
  post,
  recent,
  children,
  titleClassName,
  kickerClassName,
  recentPostTitleClassName,
  recentPostDateClassName,
}) {
  const showHero = post.showHero !== false && Boolean(post.image);
  return (
    <main className="caits-blog-main font-share w-full bg-white text-left text-neutral-900">
      <BlogArticleFallbackCss />
      <div className="caits-blog-shell mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pt-10 md:px-10 lg:max-w-6xl lg:px-12 lg:pt-12">
        {kickerClassName ? (
          <p className={kickerClassName}>Thought Leadership</p>
        ) : null}

        <Link
          href="/blog"
          className={`inline-flex items-center gap-1 text-[18px] font-normal leading-none text-neutral-600 transition hover:text-neutral-900 ${kickerClassName ? "mt-6 sm:mt-8" : "mt-0"}`}
        >
          <span aria-hidden className="text-[18px] leading-none">
            &lt;
          </span>
          All Posts
        </Link>

        <div className="caits-blog-grid mt-6 flex flex-col gap-10 lg:mt-8 lg:grid lg:grid-cols-12 lg:gap-x-0 lg:gap-y-0">
          <article className="caits-blog-article min-w-0 lg:col-span-8 lg:pr-8 xl:pr-10">
            <h1
              className={
                titleClassName ??
                "m-0 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.125rem] lg:leading-snug"
              }
            >
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-neutral-500 sm:text-base">{post.date}</p>

            {showHero ? (
              <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden bg-neutral-200 sm:mt-8">
                <SafeImg
                  src={post.image}
                  alt={post.title}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : null}

            <div className="caits-blog-measure mt-6 w-full max-w-3xl border-t border-neutral-200 pt-8 text-left text-[17px] leading-relaxed text-neutral-800 sm:mt-8 sm:pt-10 sm:text-[18px]">
              <div className="space-y-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {children}
              </div>
            </div>

            <div className="caits-blog-measure mt-8 w-full max-w-3xl border-t border-neutral-200 pt-8 sm:mt-10 sm:pt-10">
              <BlogShareRow
                title={post.title}
                labelClassName="text-base font-semibold text-neutral-900"
              />
            </div>
          </article>

          <aside
            className="caits-blog-aside min-w-0 border-t border-neutral-200 pt-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:border-neutral-200 lg:pl-8 lg:pt-0 xl:pl-10"
            aria-label="Recent posts"
          >
            <h2
              id="recent-posts-heading"
              className="m-0 text-lg font-bold leading-snug text-neutral-900 sm:text-xl"
            >
              Recent Posts
            </h2>
            <nav className="mt-5" aria-labelledby="recent-posts-heading">
              <ul className="space-y-5 sm:space-y-6">
                {recent.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex gap-3 text-left"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-neutral-200 sm:h-16 sm:w-16">
                        <SafeImg
                          src={r.image}
                          alt=""
                          decoding="async"
                          aria-hidden
                          className="absolute inset-0 h-full w-full object-cover transition group-hover:opacity-90"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={
                            recentPostTitleClassName ??
                            "text-base font-semibold leading-snug text-neutral-900 group-hover:underline sm:text-[17px]"
                          }
                        >
                          {r.title}
                        </p>
                        <p
                          className={
                            recentPostDateClassName ??
                            "mt-1 text-sm text-neutral-500"
                          }
                        >
                          {formatShortBlogDate(r.date)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
