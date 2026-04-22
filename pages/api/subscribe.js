import { isValidEmail, trimToMax } from "../../lib/validators";

/**
 * Newsletter / updates signup. Wire to Mailchimp, Resend, etc. via env in production.
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
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }

  const payload = {
    type: "subscribe",
    email,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info("[api/subscribe]", payload);
  }

  const webhook = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (webhook) {
    void fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  return res.status(200).json({
    ok: true,
    message: "You are signed up for updates.",
  });
}
