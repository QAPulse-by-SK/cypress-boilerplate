/**
 * Custom Cypress Commands
 * QA Pulse by SK - www.skakarh.com
 *
 * Commands:
 *   cy.loginAs(role)
 *   cy.loginWithCredentials(username, password)
 *   cy.logout()
 *   cy.apiGet/Post/Put/Delete(endpoint, ...)
 *   cy.checkA11yFull(options?)
 *   cy.checkA11yCritical()
 *   cy.interceptApi(method, url, fixture)
 *   cy.waitForNetworkIdle()
 *   cy.dataCy(value)
 *   cy.getByRole(role, options?)
 *   cy.clearAllCookiesAndStorage()
 *   cy.logStep(message)
 */

import "cypress-axe";
import { A11yHelper } from "../helpers/a11yHelper";

// ── Authentication ────────────────────────────────────────────────────────────
Cypress.Commands.add("loginAs", (role: "admin" | "user" | "guest") => {
  const credentials: Record<string, { username: string; password: string }> = {
    admin: { username: Cypress.env("TEST_USERNAME") || "tomsmith", password: Cypress.env("TEST_PASSWORD") || "SuperSecretPassword!" },
    user:  { username: Cypress.env("TEST_USERNAME") || "tomsmith", password: Cypress.env("TEST_PASSWORD") || "SuperSecretPassword!" },
    guest: { username: "guest", password: "guest" },
  };
  const creds = credentials[role];
  cy.session([role], () => {
    cy.visit("/login");
    cy.get("#username").type(creds.username);
    cy.get("#password").type(creds.password);
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/secure");
  });
});

Cypress.Commands.add("loginWithCredentials", (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.visit("/login");
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/secure");
  });
});

Cypress.Commands.add("logout", () => {
  cy.get("a[href='/logout']").click();
});

// ── API Commands ──────────────────────────────────────────────────────────────
Cypress.Commands.add("apiGet", (endpoint: string, options?: Partial<Cypress.RequestOptions>) => {
  return cy.request({
    method: "GET",
    url: `${Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com"}${endpoint}`,
    headers: { "Content-Type": "application/json" },
    failOnStatusCode: false,
    ...options,
  });
});

Cypress.Commands.add("apiPost", (endpoint: string, body: unknown, options?: Partial<Cypress.RequestOptions>) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com"}${endpoint}`,
    headers: { "Content-Type": "application/json" },
    body,
    failOnStatusCode: false,
    ...options,
  });
});

Cypress.Commands.add("apiPut", (endpoint: string, body: unknown, options?: Partial<Cypress.RequestOptions>) => {
  return cy.request({
    method: "PUT",
    url: `${Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com"}${endpoint}`,
    headers: { "Content-Type": "application/json" },
    body,
    failOnStatusCode: false,
    ...options,
  });
});

Cypress.Commands.add("apiDelete", (endpoint: string, options?: Partial<Cypress.RequestOptions>) => {
  return cy.request({
    method: "DELETE",
    url: `${Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com"}${endpoint}`,
    headers: { "Content-Type": "application/json" },
    failOnStatusCode: false,
    ...options,
  });
});

// ── Accessibility ─────────────────────────────────────────────────────────────
Cypress.Commands.add("checkA11yFull", (options?: { tags?: string[] }) => {
  cy.injectAxe();
  cy.checkA11y(
    undefined,
    { runOnly: { type: "tag", values: options?.tags || ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } },
    A11yHelper.formatViolations,
    false
  );
});

Cypress.Commands.add("checkA11yCritical", () => {
  cy.injectAxe();
  cy.checkA11y(
    undefined,
    { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] }, includedImpacts: ["critical"] },
    A11yHelper.formatViolations,
    false
  );
});

// ── Network ───────────────────────────────────────────────────────────────────
Cypress.Commands.add("interceptApi", (method: string, url: string, fixture: string) => {
  cy.intercept(method as Cypress.HttpMethod, url, { fixture }).as(`intercepted_${fixture}`);
});

Cypress.Commands.add("waitForNetworkIdle", () => {
  cy.window().then(() => {
    return new Cypress.Promise((resolve) => setTimeout(resolve, 500));
  });
});

// ── Selectors ─────────────────────────────────────────────────────────────────
Cypress.Commands.add("dataCy", (value: string) => {
  return cy.get(`[data-cy="${value}"]`);
});

Cypress.Commands.add("getByRole", (role: string, options?: { name?: string }) => {
  if (options?.name) return cy.get(`[role="${role}"]`).contains(options.name);
  return cy.get(`[role="${role}"]`);
});

// ── Utilities ─────────────────────────────────────────────────────────────────
Cypress.Commands.add("clearAllCookiesAndStorage", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => win.sessionStorage.clear());
});

Cypress.Commands.add("logStep", (message: string) => {
  cy.log(`🎯 **STEP:** ${message}`);
  cy.task("log", `▶️  ${message}`);
});
