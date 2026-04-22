import { isValidEmail, trimToMax } from "../../lib/validators";

const MAX_MESSAGE = 12_000;
const MAX_NAME = 200;

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

  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "A valid email is required." });
  }

  const payload = {
    type: "contact",
    email,
    name: name || undefined,
    message: message || undefined,
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
