// @ts-check
/**
 * Accessibility Tests — JavaScript
 * QA Pulse by SK - www.skakarh.com
 * Tags: @a11y @regression @smoke
 */
const { A11yHelper } = require("../helpers/a11yHelper.js");

describe("A11y — skakarh.com @a11y", () => {
  beforeEach(() => cy.visit(Cypress.env("BRAND_URL") || "https://www.skakarh.com"));

  it("full WCAG 2.1 AA scan @a11y @regression @critical", () => {
    cy.logStep("Full WCAG 2.1 AA scan");
    A11yHelper.assertNoViolations({ tags: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] });
  });

  it("no critical or serious violations @a11y @smoke @critical", () => {
    A11yHelper.assertNoSeriousViolations();
  });

  it("all images have alt text @a11y @regression", () => { A11yHelper.assertImagesHaveAltText(); });
  it("page has exactly one H1 @a11y @regression", () => { A11yHelper.assertSingleH1(); });
  it("ARIA landmarks present @a11y @regression", () => { A11yHelper.assertAriaLandmarks(); });
});

describe("A11y — Login Page @a11y", () => {
  beforeEach(() => cy.visit("/login"));

  it("no critical violations @a11y @smoke @critical", () => {
    A11yHelper.assertNoCriticalViolations({ tags: ["wcag2a", "wcag2aa"] });
  });

  it("login form inputs have labels @a11y @regression", () => { A11yHelper.assertFormLabels(); });

  it("keyboard Tab order is correct @a11y @regression", () => {
    cy.get("#username").focus();
    cy.focused().should("have.attr", "id", "username");
    cy.tab();
    cy.focused().should("have.attr", "id", "password");
    cy.tab();
    cy.focused().should("have.attr", "type", "submit");
  });

  it("can submit login form with keyboard only @a11y @regression", () => {
    cy.get("#username").focus().type(Cypress.env("TEST_USERNAME") || "tomsmith");
    cy.tab().type(Cypress.env("TEST_PASSWORD") || "SuperSecretPassword!");
    cy.tab().type("{enter}");
    cy.url().should("include", "/secure");
  });
});

describe("A11y — Home Page @a11y", () => {
  beforeEach(() => cy.visit("/"));

  it("no critical violations @a11y @smoke", () => { A11yHelper.assertNoCriticalViolations(); });
  it("home page has a single H1 @a11y @regression", () => { A11yHelper.assertSingleH1(); });
  it("cy.checkA11yCritical command works @a11y @smoke", () => { cy.checkA11yCritical(); });
});
