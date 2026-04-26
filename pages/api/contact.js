import { isValidEmail, trimToMax } from "../../lib/validators";

const MAX_MESSAGE = 12_000;
const MAX_NAME = 200;
const MAX_COMPANY = 200;
const MAX_TITLE = 150;
const MAX_INDUSTRY = 200;
const MAX_STACK = 2_000;
const MAX_WORKFLOW = 2_000;
const MAX_SHORT = 40;

/**
 * Accepts contact inquiries. In production, forward to email, CRM, or ticket system
 * (e.g. webhook URL in env). Validates input and returns JSON for the SPA form.
 */
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const raw = req.body;
  const body =
    raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};

  const email = trimToMax(body?.email ?? "", 320);
  const name = trimToMax(body?.name ?? "", MAX_NAME);
  const message = trimToMax(body?.message ?? "", MAX_MESSAGE);
  const company = trimToMax(body?.company ?? "", MAX_COMPANY);
  const jobTitle = trimToMax(body?.jobTitle ?? "", MAX_TITLE);
  const industry = trimToMax(body?.industry ?? "", MAX_INDUSTRY);
  const teamSize = trimToMax(body?.teamSize ?? "", MAX_SHORT);
  const currentStack = trimToMax(body?.currentStack ?? "", MAX_STACK);
  const workflowFocus = trimToMax(body?.workflowFocus ?? "", MAX_WORKFLOW);
  const timeline = trimToMax(body?.timeline ?? "", MAX_SHORT);
  const rawInquiry = String(body?.inquiryType ?? "").toLowerCase().replace(/\s+/g, "_");
  const inquiryType =
    rawInquiry === "enterprise_rfp" || rawInquiry === "enterprise"
      ? "enterprise_rfp"
      : "general";

  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "A valid email is required." });
  }

  const workflow = {
    company: company || undefined,
    jobTitle: jobTitle || undefined,
    industry: industry || undefined,
    teamSize: teamSize || undefined,
    currentStack: currentStack || undefined,
    workflowFocus: workflowFocus || undefined,
    timeline: timeline || undefined,
  };
  const hasWorkflow = Object.values(workflow).some((v) => v !== undefined);
  const workflowSummary = hasWorkflow
    ? [
        company && `Company: ${company}`,
        jobTitle && `Role: ${jobTitle}`,
        industry && `Industry: ${industry}`,
        teamSize && `Team size: ${teamSize}`,
        currentStack && `Tools/systems: ${currentStack}`,
        workflowFocus && `Workflow focus: ${workflowFocus}`,
        timeline && `Timeline: ${timeline}`,
        message && `Notes: ${message}`,
      ]
        .filter(Boolean)
        .join("\n")
    : null;

  const payload = {
    type: "contact",
    inquiryType,
    email,
    name: name || undefined,
    message: message || undefined,
    workflow: hasWorkflow ? workflow : undefined,
    workflowSummary: workflowSummary || undefined,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info("[api/contact]", payload);
  }

  // Hook for production: e.g. await fetch(process.env.CONTACT_WEBHOOK_URL, ...)
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    void fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  return res.status(200).json({
    ok: true,
    message: "Thanks — we received your message and will follow up shortly.",
  });
}
