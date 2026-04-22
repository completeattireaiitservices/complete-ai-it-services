/**
 * Remove `.next` and `node_modules/.cache` without starting the dev server.
 * Use when Next reports missing files under `.next\server\...` (ENOENT).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

for (const rel of [".next", path.join("node_modules", ".cache")]) {
  const target = path.join(root, rel);
  try {
    fs.rmSync(target, { recursive: true, force: true });
    console.log("[clean-next] removed", rel);
  } catch (e) {
    console.warn("[clean-next] could not remove", rel, e && e.message);
  }
}
