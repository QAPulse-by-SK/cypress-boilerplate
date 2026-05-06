// @ts-check
const { defineConfig } = require("cypress");
require("dotenv").config();
const fs = require("fs");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  pageLoadTimeout: 30000,
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: { runMode: 2, openMode: 0 },
  video: true,
  videoCompression: 32,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,

  env: {
    BASE_URL:      process.env.BASE_URL      || "https://the-internet.herokuapp.com",
    BRAND_URL:     process.env.BRAND_URL     || "https://www.skakarh.com",
    API_BASE_URL:  process.env.API_BASE_URL  || "https://jsonplaceholder.typicode.com",
    TEST_USERNAME: process.env.TEST_USERNAME || "tomsmith",
    TEST_PASSWORD: process.env.TEST_PASSWORD || "SuperSecretPassword!",
    grep: "",
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },

  e2e: {
    baseUrl: process.env.BASE_URL || "https://the-internet.herokuapp.com",
    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/api/**/*.cy.js",
      "cypress/accessibility/**/*.cy.js",
      "cypress/visual/**/*.cy.js",
    ],
    supportFile: "cypress/support/e2e.js",
    fixturesFolder: "cypress/fixtures",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "mochawesome-report",
      charts: true,
      reportPageTitle: "QA Pulse by SK — Cypress Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      try {
        const allureCypress = require("allure-cypress/reporter");
        allureCypress.allureCypress(on, config, { resultsDir: "allure-results" });
      } catch {
        console.log("Allure reporter not available — skipping");
      }
      require("@cypress/grep/src/plugin")(config);
      on("task", {
        createDir(dir) {
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          return null;
        },
        log(message) {
          console.log(message);
          return null;
        },
      });
      return config;
    },
  },

  component: {
    devServer: { framework: "react", bundler: "vite" },
    specPattern: "cypress/component/**/*.cy.js",
    supportFile: "cypress/support/component.js",
  },
});
