/**
 * JSON Summary Reporter
 * QA Pulse by SK - www.skakarh.com
 * Usage: npm run report:json
 */
const fs = require("fs");
const path = require("path");

const files = [
  path.join(__dirname, "../mochawesome-report/mochawesome.json"),
  path.join(__dirname, "../test-results/results.json"),
];

const resultsFile = files.find(fs.existsSync);

if (!resultsFile) {
  console.error("❌ No results file found. Run tests first: npm test");
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsFile, "utf-8"));
const stats = results.stats || {};
const passed   = stats.passes   ?? 0;
const failed   = stats.failures ?? 0;
const pending  = stats.pending  ?? 0;
const total    = stats.tests    ?? passed + failed + pending;
const duration = ((stats.duration ?? 0) / 1000).toFixed(2);
const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : "0.0";

console.log("\n");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  🎯  QA Pulse by SK — Cypress Test Summary");
console.log("  🌐  www.skakarh.com");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`  ✅  Passed  : ${passed}`);
console.log(`  ❌  Failed  : ${failed}`);
console.log(`  ⏭️   Pending : ${pending}`);
console.log(`  📊  Total   : ${total}`);
console.log(`  📈  Pass %  : ${passRate}%`);
console.log(`  ⏱️   Duration: ${duration}s`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  📄 Mochawesome : mochawesome-report/index.html");
console.log("  📊 Allure      : npm run report:allure");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
