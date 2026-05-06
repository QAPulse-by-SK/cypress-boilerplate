// @ts-check
const { BasePage } = require("../BasePage.js");

/**
 * HomePage - Page Object for the-internet.herokuapp.com
 * QA Pulse by SK - www.skakarh.com
 */
class HomePage extends BasePage {
  constructor() {
    super("/");
    this.heading    = () => cy.get("h1.heading");
    this.subheading = () => cy.get("h2");
    this.links      = () => cy.get("ul li a");
    this.footer     = () => cy.get("div#page-footer");
  }

  visit() { cy.visit("/"); return this; }

  getHeadingText() { return this.heading().invoke("text"); }

  /** @param {string} linkText */
  clickLink(linkText) { cy.contains("a", linkText).click(); return this; }

  getLinkCount() { return this.links().its("length"); }

  /** @param {string} text */
  verifyHeadingContains(text) {
    this.heading().should("contain.text", text);
    return this;
  }
}

module.exports = { HomePage };
