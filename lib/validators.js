/** @param {unknown} v */
export function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

/** @param {unknown} v */
export function isValidEmail(v) {
  if (!isNonEmptyString(v)) return false;
  const s = String(v).trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

/**
 * @param {unknown} v
 * @param {number} max
 */
export function trimToMax(v, max) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}
