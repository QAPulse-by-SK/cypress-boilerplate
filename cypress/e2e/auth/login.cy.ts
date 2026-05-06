/**
 * E2E Tests — Login
 * QA Pulse by SK - www.skakarh.com
 * Tags: @smoke @regression @critical @e2e
 */
import { LoginPage } from "../../pages/example/LoginPage";
import { CREDENTIALS, MESSAGES } from "../../constants";

describe("Login Page @e2e", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("should login with valid credentials @smoke @critical @e2e", () => {
    cy.logStep("Login with valid credentials");
    loginPage
      .login(CREDENTIALS.VALID.username, CREDENTIALS.VALID.password)
      .verifyLoginSuccess();
  });

  it("should show error for invalid username @regression @e2e", () => {
    loginPage
      .login(CREDENTIALS.INVALID.username, CREDENTIALS.INVALID.password)
      .verifyLoginFailure("Your username is invalid");
  });

  it("should show error for invalid password @regression @e2e", () => {
    loginPage
      .login(CREDENTIALS.VALID.username, "wrongpassword")
      .verifyLoginFailure("Your password is invalid");
  });

  it("should logout successfully @smoke @critical @e2e", () => {
    cy.logStep("Login then logout");
    loginPage
      .login(CREDENTIALS.VALID.username, CREDENTIALS.VALID.password)
      .verifyLoggedIn()
      .logout();
    loginPage.flashMessage().should("contain.text", MESSAGES.LOGOUT_SUCCESS);
  });

  it("should demonstrate cy.session() pattern @smoke @e2e", () => {
    cy.logStep("Demonstrating cy.session() auth reuse pattern");

    // cy.session() caches cookies/localStorage so login only runs once
    // across all tests that use the same session key
    cy.session(
      "validUserSession",
      () => {
        // Setup: runs only if session not cached
        cy.visit("/login");
        cy.get("#username").clear().type(CREDENTIALS.VALID.username);
        cy.get("#password").clear().type(CREDENTIALS.VALID.password);
        cy.get("button[type='submit']").click();
        // Verify login succeeded inside the session setup
        cy.get("#flash").should("contain.text", "You logged into a secure area");
      }
    );

    // After session is established, navigate and verify we are logged in
    cy.visit("/login");
    loginPage
      .login(CREDENTIALS.VALID.username, CREDENTIALS.VALID.password)
      .verifyLoginSuccess();
  });
});
