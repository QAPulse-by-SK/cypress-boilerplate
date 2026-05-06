/**
 * Mochawesome Report Merger
 * QA Pulse by SK - www.skakarh.com
 * Usage: npm run report:mochawesome
 */
const { merge } = require("mochawesome-merge");
const generator = require("mochawesome-report-generator");

async function generateReport() {
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  🎯 QA Pulse by SK — Generating Mochawesome Report");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  try {
    const jsonReport = await merge({ files: ["./mochawesome-report/*.json"] });
    await generator.create(jsonReport, {
      reportDir: "mochawesome-report",
      reportTitle: "QA Pulse by SK — Cypress Test Report",
      reportPageTitle: "QA Pulse by SK — Cypress Report",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    });

    const { stats } = jsonReport;
    console.log(`\n  ✅  Passed  : ${stats.passes}`);
    console.log(`  ❌  Failed  : ${stats.failures}`);
    console.log(`  ⏭️   Pending : ${stats.pending}`);
    console.log(`  📊  Total   : ${stats.tests}`);
    console.log(`  ⏱️   Duration: ${(stats.duration / 1000).toFixed(2)}s`);
    console.log(`\n  📄  Report  : mochawesome-report/index.html`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  } catch (err) {
    console.error("❌ Report generation failed:", err.message);
    process.exit(1);
  }
}

generateReport();
