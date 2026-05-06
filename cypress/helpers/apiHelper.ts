/**
 * API Helper - cy.request() wrapper
 * QA Pulse by SK - www.skakarh.com
 */

export class ApiHelper {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com";
    this.headers = { "Content-Type": "application/json", Accept: "application/json" };
  }

  get<T = unknown>(endpoint: string, options?: Partial<Cypress.RequestOptions>) {
    return cy.request<T>({
      method: "GET",
      url: `${this.baseUrl}${endpoint}`,
      headers: this.headers,
      failOnStatusCode: false,
      ...options,
    });
  }

  post<T = unknown>(endpoint: string, body: unknown, options?: Partial<Cypress.RequestOptions>) {
    return cy.request<T>({
      method: "POST",
      url: `${this.baseUrl}${endpoint}`,
      headers: this.headers,
      body,
      failOnStatusCode: false,
      ...options,
    });
  }

  put<T = unknown>(endpoint: string, body: unknown, options?: Partial<Cypress.RequestOptions>) {
    return cy.request<T>({
      method: "PUT",
      url: `${this.baseUrl}${endpoint}`,
      headers: this.headers,
      body,
      failOnStatusCode: false,
      ...options,
    });
  }

  patch<T = unknown>(endpoint: string, body: unknown, options?: Partial<Cypress.RequestOptions>) {
    return cy.request<T>({
      method: "PATCH",
      url: `${this.baseUrl}${endpoint}`,
      headers: this.headers,
      body,
      failOnStatusCode: false,
      ...options,
    });
  }

  delete<T = unknown>(endpoint: string, options?: Partial<Cypress.RequestOptions>) {
    return cy.request<T>({
      method: "DELETE",
      url: `${this.baseUrl}${endpoint}`,
      headers: this.headers,
      failOnStatusCode: false,
      ...options,
    });
  }

  setAuthToken(token: string): this {
    this.headers["Authorization"] = `Bearer ${token}`;
    return this;
  }
}
