/**
 * @typedef {{
 *   slug: string;
 *   date: string;
 *   title: string;
 *   image: string;
 *   showHero?: boolean;
 * }} BlogPostMeta
 */

/** @type {BlogPostMeta[]} */
export const BLOG_POSTS = [
  {
    slug: "designing-ai-knowledge-assistant-seo",
    date: "January 2, 2026",
    title: "Designing a 24/7 AI Knowledge Assistant for Your Website",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "gmail-copilots-governance-seo",
    date: "December 18, 2025",
    title: "Mastering Gmail Copilots: Approvals, Tone, and Audit Trails",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "brand-guardian-playbooks-multi-location-seo",
    date: "December 4, 2025",
    title: "Brand Guardian Playbooks: Managing Multi-Location Reviews at Scale",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "monday-briefings-unified-business-narrative-seo",
    date: "November 20, 2025",
    title: "Monday Briefings: Unifying Ads, CRM, and Billing into One Narrative",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "rag-knowledge-assistant",
    date: "January 8, 2026",
    title: "Why RAG Beats a Generic Chatbot for Regulated Industries",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "quote-to-cash-ai",
    date: "December 12, 2025",
    title: "From Email Thread to Invoice: How to Design a Seamless Quote-to-Cash Automation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "content-engine-seo",
    date: "November 3, 2025",
    title: "Scaling SEO with an Autonomous Content Engine (Safely)",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "biweekly-logic-audit",
    date: "October 15, 2025",
    title: "What We Review in a Bi-Weekly AI Logic Audit: A Checklist for Scalable Confidence",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pinecone-n8n-architecture",
    date: "September 22, 2025",
    title: "Pinecone + n8n: A Practical Architecture for Scalable Client Knowledge Bases",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "api-cost-governance",
    date: "August 30, 2025",
    title: "Governing OpenAI and Vector Spend with Transparent Pass-Through Billing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

/** @param {string} slug */
export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

/**
 * @param {string} excludeSlug
 * @param {number} [limit]
 */
export function getRecentPosts(excludeSlug, limit = 4) {
  return BLOG_POSTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** @param {string} dateLine e.g. "January 2, 2026" */
export function formatShortBlogDate(dateLine) {
  const t = Date.parse(dateLine);
  if (Number.isNaN(t)) return dateLine;
  return new Date(t).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
