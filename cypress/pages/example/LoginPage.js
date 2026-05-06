// @ts-check
const { BasePage } = require("../BasePage.js");

/**
 * LoginPage - Page Object for the-internet.herokuapp.com/login
 * QA Pulse by SK - www.skakarh.com
 */
class LoginPage extends BasePage {
  constructor() {
    super("/login");
    this.usernameInput = () => cy.get("#username");
    this.passwordInput = () => cy.get("#password");
    this.loginButton   = () => cy.get("button[type='submit']");
    this.flashMessage  = () => cy.get("#flash");
    this.logoutButton  = () => cy.get("a[href='/logout']");
  }

  visit() { cy.visit("/login"); return this; }

  /**
   * @param {string} username
   * @param {string} password
   */
  login(username, password) {
    this.usernameInput().clear().type(username);
    this.passwordInput().clear().type(password);
    this.loginButton().click();
    return this;
  }

  /**
   * @param {string} username
   * @param {string} password
   */
  loginWithSession(username, password) {
    cy.session([username, password], () => {
      cy.visit("/login");
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get("button[type='submit']").click();
      cy.url().should("include", "/secure");
    });
    return this;
  }

  verifyLoginSuccess() {
    this.flashMessage().should("contain.text", "You logged into a secure area");
    return this;
  }

  /** @param {string} text */
  verifyLoginFailure(text) {
    this.flashMessage().should("contain.text", text);
    return this;
  }

  logout() { this.logoutButton().click(); return this; }

  verifyLoggedIn() { this.logoutButton().should("be.visible"); return this; }
}

module.exports = { LoginPage };
