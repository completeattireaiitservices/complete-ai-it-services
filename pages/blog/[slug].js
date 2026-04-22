import React from "react";
import Head from "next/head";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BlogArticleLayout from "../../components/BlogArticleLayout";
import DesigningAiKnowledgeAssistantArticleBody from "../../components/blog/DesigningAiKnowledgeAssistantArticleBody";
import GmailCopilotsGovernanceArticleBody from "../../components/blog/GmailCopilotsGovernanceArticleBody";
import BrandGuardianPlaybooksArticleBody from "../../components/blog/BrandGuardianPlaybooksArticleBody";
import MondayBriefingsUnifiedNarrativeArticleBody from "../../components/blog/MondayBriefingsUnifiedNarrativeArticleBody";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRecentPosts,
} from "../../lib/blogPosts";

const ARTICLE_BODIES = {
  "designing-ai-knowledge-assistant-seo": DesigningAiKnowledgeAssistantArticleBody,
  "gmail-copilots-governance-seo": GmailCopilotsGovernanceArticleBody,
  "brand-guardian-playbooks-multi-location-seo": BrandGuardianPlaybooksArticleBody,
  "monday-briefings-unified-business-narrative-seo":
    MondayBriefingsUnifiedNarrativeArticleBody,
};

function ArticlePlaceholder() {
  return (
    <p>
      The full write-up for this topic is on the way. In the meantime, reach out and
      we&apos;ll walk through how it applies to your workflows and data sources.
    </p>
  );
}

export default function BlogArticlePage({ post }) {
  const Body = ARTICLE_BODIES[post.slug] ?? ArticlePlaceholder;
  const recent = getRecentPosts(post.slug, 4);
  const siteUrl =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) || "";

  return (
    <>
      <Head>
        <title>{post.title} | Thought Leadership | Complete AI IT Services</title>
        <meta
          name="description"
          content={`${post.title} — insights from Complete AI IT Services, Pleasanton, CA.`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Share:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {siteUrl ? (
          <link rel="canonical" href={`${siteUrl.replace(/\/$/, "")}/blog/${post.slug}`} />
        ) : null}
      </Head>
      <div className="min-h-screen bg-white font-share text-neutral-900">
        <div className="bg-black text-white">
          <SiteHeader
            endAction="search"
            activeNav="blog"
            hideLogo={true}
          />
        </div>

        <BlogArticleLayout post={post} recent={recent}>
          <Body />
        </BlogArticleLayout>

        <SiteFooter />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: BLOG_POSTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };

  // `next dev` can keep stale serialized props / bundles (especially on Windows + OneDrive).
  // `showHero: false` is no longer in source for Gmail, but old caches still hid the hero.
  let postForProps = post;
  if (post.showHero === false && post.image) {
    postForProps = {
      slug: post.slug,
      date: post.date,
      title: post.title,
      image: post.image,
    };
  }

  return {
    props: { post: postForProps },
    // Lets hosting/CDN serve a cached page but refresh props after edits (hero, dates, titles).
    revalidate: 60,
  };
}
