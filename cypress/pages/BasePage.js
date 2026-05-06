// @ts-check
/**
 * BasePage - Base class for all Page Objects
 * QA Pulse by SK - www.skakarh.com
 */
class BasePage {
  /** @param {string} baseUrl */
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }

  visit() { throw new Error("visit() must be implemented"); }

  getTitle() { return cy.title(); }

  waitForPageLoad() {
    cy.document().should("have.property", "readyState", "complete");
    return this;
  }

  /** @param {string} testId */
  getByTestId(testId) { return cy.get(`[data-testid="${testId}"]`); }

  /** @param {string} value */
  getByDataCy(value) { return cy.get(`[data-cy="${value}"]`); }

  /** @param {string} name */
  screenshot(name) { cy.screenshot(name); return this; }
}

module.exports = { BasePage };
