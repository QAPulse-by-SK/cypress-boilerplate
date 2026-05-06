/**
 * LoginPage - Page Object for the-internet.herokuapp.com/login
 * QA Pulse by SK - www.skakarh.com
 */
import { BasePage } from "../BasePage";

export class LoginPage extends BasePage {
  readonly usernameInput  = () => cy.get("#username");
  readonly passwordInput  = () => cy.get("#password");
  readonly loginButton    = () => cy.get("button[type='submit']");
  readonly flashMessage   = () => cy.get("#flash");
  readonly logoutButton   = () => cy.get("a[href='/logout']");

  constructor() {
    super("/login");
  }

  visit(): this {
    cy.visit("/login");
    return this;
  }

  login(username: string, password: string): this {
    this.usernameInput().clear().type(username);
    this.passwordInput().clear().type(password);
    this.loginButton().click();
    return this;
  }

  verifyLoginSuccess(): this {
    this.flashMessage().should("contain.text", "You logged into a secure area");
    return this;
  }

  verifyLoginFailure(text: string): this {
    this.flashMessage().should("contain.text", text);
    return this;
  }

  logout(): this {
    this.logoutButton().click();
    return this;
  }

  verifyLoggedIn(): this {
    this.logoutButton().should("be.visible");
    return this;
  }
}
