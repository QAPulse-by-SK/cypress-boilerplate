/**
 * Constants — No magic strings in test code
 * QA Pulse by SK - www.skakarh.com
 *
 * Values come from cypress.env.json or .env file.
 * Override any value in cypress.env.json for local dev.
 */

export const URLS = {
  get BASE()  { return Cypress.env("BASE_URL")     || "https://the-internet.herokuapp.com"; },
  get BRAND() { return Cypress.env("BRAND_URL")    || "https://www.skakarh.com"; },
  get API()   { return Cypress.env("API_BASE_URL") || "https://jsonplaceholder.typicode.com"; },
} as const;

export const ROUTES = {
  HOME:              "/",
  LOGIN:             "/login",
  SECURE:            "/secure",
  DRAG_AND_DROP:     "/drag_and_drop",
  FILE_UPLOAD:       "/upload",
  DROPDOWN:          "/dropdown",
  JAVASCRIPT_ALERTS: "/javascript_alerts",
  DYNAMIC_LOADING:   "/dynamic_loading/1",
  CHECKBOXES:        "/checkboxes",
  HOVERS:            "/hovers",
} as const;

export const CREDENTIALS = {
  get VALID() {
    return {
      username: Cypress.env("TEST_USERNAME") || "tomsmith",
      password: Cypress.env("TEST_PASSWORD") || "SuperSecretPassword!",
    };
  },
  INVALID: {
    username: "wronguser",
    password: "wrongpassword",
  },
} as const;

export const TIMEOUTS = {
  SHORT:     5_000,
  DEFAULT:  10_000,
  LONG:     30_000,
  ANIMATION:  500,
} as const;

export const VIEWPORTS = {
  MOBILE:  { width: 375,  height: 812  },
  TABLET:  { width: 768,  height: 1024 },
  DESKTOP: { width: 1280, height: 720  },
  WIDE:    { width: 1920, height: 1080 },
} as const;

export const MESSAGES = {
  LOGIN_SUCCESS:  "You logged into a secure area!",
  LOGIN_FAILURE:  "Your username is invalid!",
  LOGOUT_SUCCESS: "You logged out of the secure area!",
} as const;
