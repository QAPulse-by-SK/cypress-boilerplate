/**
 * HomePage - Page Object for the-internet.herokuapp.com
 * QA Pulse by SK - www.skakarh.com
 */
import { BasePage } from "../BasePage";

export class HomePage extends BasePage {
  readonly heading       = () => cy.get("h1.heading");
  readonly subheading    = () => cy.get("h2");
  readonly links         = () => cy.get("ul li a");
  readonly footer        = () => cy.get("div#page-footer");

  constructor() {
    super("/");
  }

  visit(): this {
    cy.visit("/");
    return this;
  }

  getHeadingText(): Cypress.Chainable<string> {
    return this.heading().invoke("text");
  }

  clickLink(linkText: string): this {
    cy.contains("a", linkText).click();
    return this;
  }

  getLinkCount(): Cypress.Chainable<number> {
    return this.links().its("length");
  }

  verifyHeadingContains(text: string): this {
    this.heading().should("contain.text", text);
    return this;
  }
}
