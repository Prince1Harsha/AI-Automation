const fs = require("fs");
const path = require("path");
const p = path.resolve(process.cwd(), "playwright-report", "results.json");
if (!fs.existsSync(p)) {
  console.error("results.json not found");
  process.exit(2);
}
const raw = fs.readFileSync(p, "utf8");
let j;
try {
  j = JSON.parse(raw);
} catch (e) {
  console.error("Failed to parse JSON:", e.message);
  process.exit(1);
}
const out = {
  project: "N/A",
  total: 0,
  passed: 0,
  failed: 0,
  skipped: 0,
  tests: [],
};
if (j && j.suites) {
  out.project = (j.suites[0] && j.suites[0].title) || "N/A";
  const tests = [];
  for (const suite of j.suites || []) {
    for (const spec of suite.specs || []) {
      for (const t of spec.tests || []) {
        const status =
          (t.results && t.results.length && t.results[0].status) ||
          t.status ||
          "unknown";
        tests.push({ name: t.title, status });
      }
    }
  }
  out.total = tests.length;
  out.passed = tests.filter((x) => x.status === "passed").length;
  out.failed = tests.filter((x) => x.status === "failed").length;
  out.skipped = tests.filter((x) => x.status === "skipped").length;
  out.tests = tests;
}
fs.writeFileSync(
  path.resolve(process.cwd(), "test-summary.json"),
  JSON.stringify(out, null, 2),
  "utf8"
);
console.log("Wrote test-summary.json");
console.log(JSON.stringify(out, null, 2));
