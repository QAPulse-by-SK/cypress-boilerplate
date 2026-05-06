/**
 * BasePage - Abstract base class for all Page Objects
 * QA Pulse by SK - www.skakarh.com
 */
export abstract class BasePage {
  protected baseUrl: string;

  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }

  abstract visit(): this;

  getTitle(): Cypress.Chainable<string> {
    return cy.title();
  }

  waitForPageLoad(): this {
    cy.document().should("have.property", "readyState", "complete");
    return this;
  }

  getByTestId(testId: string): Cypress.Chainable<JQuery> {
    return cy.get(`[data-testid="${testId}"]`);
  }

  getByDataCy(value: string): Cypress.Chainable<JQuery> {
    return cy.get(`[data-cy="${value}"]`);
  }

  screenshot(name: string): this {
    cy.screenshot(name);
    return this;
  }
}
