// @ts-check
/**
 * API Helper - cy.request() wrapper
 * QA Pulse by SK - www.skakarh.com
 */
class ApiHelper {
  /** @param {string} [baseUrl] */
  constructor(baseUrl) {
    this.baseUrl = baseUrl || Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com";
    this.headers = { "Content-Type": "application/json", Accept: "application/json" };
  }

  get(endpoint, options = {}) {
    return cy.request({ method: "GET", url: `${this.baseUrl}${endpoint}`, headers: this.headers, failOnStatusCode: false, ...options });
  }

  post(endpoint, body, options = {}) {
    return cy.request({ method: "POST", url: `${this.baseUrl}${endpoint}`, headers: this.headers, body, failOnStatusCode: false, ...options });
  }

  put(endpoint, body, options = {}) {
    return cy.request({ method: "PUT", url: `${this.baseUrl}${endpoint}`, headers: this.headers, body, failOnStatusCode: false, ...options });
  }

  patch(endpoint, body, options = {}) {
    return cy.request({ method: "PATCH", url: `${this.baseUrl}${endpoint}`, headers: this.headers, body, failOnStatusCode: false, ...options });
  }

  delete(endpoint, options = {}) {
    return cy.request({ method: "DELETE", url: `${this.baseUrl}${endpoint}`, headers: this.headers, failOnStatusCode: false, ...options });
  }

  /** @param {string} token */
  setAuthToken(token) { this.headers["Authorization"] = `Bearer ${token}`; return this; }
}

module.exports = { ApiHelper };
