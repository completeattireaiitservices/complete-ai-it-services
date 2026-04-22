/**
 * Starts `next dev` from the project root. Optional --clean removes `.next`
 * and `node_modules/.cache` first (helps OneDrive + Windows readlink issues).
 * Avoids `&&` in npm scripts so `npm run ...` works even when npm uses
 * Windows PowerShell 5 as script-shell (no `&&` support).
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const args = process.argv.slice(2);

let port = 3000;
let clean = false;
let hostname = null;

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--clean") {
    clean = true;
    continue;
  }
  if (a === "--port" && args[i + 1]) {
    port = Number(args[++i]);
    continue;
  }
  if (a === "--hostname" && args[i + 1]) {
    hostname = args[++i];
    continue;
  }
}

if (clean) {
  for (const rel of [".next", path.join("node_modules", ".cache")]) {
    const target = path.join(root, rel);
    try {
      fs.rmSync(target, { recursive: true, force: true });
      console.log("[next-dev] removed", rel);
    } catch (e) {
      console.warn("[next-dev] could not remove", rel, e && e.message);
    }
  }
}

const nextBin = require.resolve("next/dist/bin/next");
const nextArgs = [nextBin, "dev", "-p", String(port)];
if (hostname) {
  nextArgs.push("--hostname", hostname);
}

const result = spawnSync(process.execPath, nextArgs, {
  stdio: "inherit",
  cwd: root,
  env: process.env,
});

process.exit(result.status === null ? 1 : result.status);
