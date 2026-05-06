/**
 * Visual Regression Tests
 * QA Pulse by SK - www.skakarh.com
 *
 * Uses Cypress built-in cy.screenshot() for baseline comparisons.
 * Update baselines: delete __snapshots__ folder and re-run.
 * Tags: @visual @regression
 */

describe("Visual Regression — skakarh.com @visual", () => {
  it("homepage screenshot baseline @visual @regression", () => {
    cy.visit(Cypress.env("BRAND_URL") || "https://www.skakarh.com");
    cy.waitForNetworkIdle();
    cy.screenshot("skakarh-homepage-full", { capture: "fullPage" });
  });
});

describe("Visual Regression — the-internet @visual", () => {
  it("home page screenshot @visual @regression", () => {
    cy.visit("/");
    cy.waitForNetworkIdle();
    cy.screenshot("internet-homepage", { capture: "fullPage" });
  });

  it("login page screenshot @visual @regression", () => {
    cy.visit("/login");
    cy.waitForNetworkIdle();
    cy.screenshot("internet-login-page", { capture: "fullPage" });
  });

  it("login form element screenshot @visual @regression", () => {
    cy.visit("/login");
    cy.get("#login").screenshot("login-form-element");
  });
});
