/**
 * E2E Support File — loaded before every E2E spec
 * QA Pulse by SK - www.skakarh.com
 */
import "./commands";
import "@cypress/grep";
import "cypress-axe";
import "allure-cypress";
import "cypress-mochawesome-reporter/register";

before(() => {
  cy.task("createDir", "allure-results");
  cy.task("createDir", "mochawesome-report");
  cy.task("createDir", "test-results");
  Cypress.log({
    name: "QA Pulse",
    message: "🎯 QA Pulse by SK — Test Suite Starting — www.skakarh.com",
  });
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

afterEach(function () {
  if (this.currentTest?.state === "failed") {
    const title = this.currentTest.fullTitle().replace(/[^a-z0-9]/gi, "_").toLowerCase();
    cy.screenshot(`FAILED_${title}`);
  }
});

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("ResizeObserver") ||
    err.message.includes("Script error")
  ) {
    return false;
  }
  return true;
});
