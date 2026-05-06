/**
 * Custom Command Type Declarations
 * QA Pulse by SK - www.skakarh.com
 */
declare namespace Cypress {
  interface Chainable {
    // ── Auth ────────────────────────────────────────────────────────────────
    loginAs(role: "admin" | "user" | "guest"): void;
    loginWithCredentials(username: string, password: string): void;
    logout(): void;

    // ── API ─────────────────────────────────────────────────────────────────
    apiGet(endpoint: string, options?: Partial<RequestOptions>): Chainable<Response<unknown>>;
    apiPost(endpoint: string, body: unknown, options?: Partial<RequestOptions>): Chainable<Response<unknown>>;
    apiPut(endpoint: string, body: unknown, options?: Partial<RequestOptions>): Chainable<Response<unknown>>;
    apiDelete(endpoint: string, options?: Partial<RequestOptions>): Chainable<Response<unknown>>;

    // ── Accessibility ────────────────────────────────────────────────────────
    checkA11yFull(options?: { tags?: string[] }): void;
    checkA11yCritical(): void;

    // ── Network ─────────────────────────────────────────────────────────────
    interceptApi(method: string, url: string, fixture: string): void;
    waitForNetworkIdle(): void;

    // ── Selectors ───────────────────────────────────────────────────────────
    dataCy(value: string): Chainable<JQuery>;
    getByRole(role: string, options?: { name?: string }): Chainable<JQuery>;

    // ── Utilities ───────────────────────────────────────────────────────────
    clearAllCookiesAndStorage(): void;
    logStep(message: string): void;

    // ── Component Testing ───────────────────────────────────────────────────
    mount: typeof import("cypress/react18").mount;
  }

  interface AccessibilityViolation {
    id: string;
    impact?: string;
    description: string;
    helpUrl: string;
    nodes: Array<{ html: string; failureSummary?: string }>;
  }
}
