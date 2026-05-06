/**
 * Advanced E2E Tests
 * QA Pulse by SK - www.skakarh.com
 * Tags: @regression @e2e
 */
import { ROUTES, VIEWPORTS, CREDENTIALS } from "../../constants";

// ─── Network Interception ─────────────────────────────────────────────────────
describe("Network Interception @e2e @regression", () => {
  it("should intercept and mock API response", () => {
    cy.intercept("GET", "**/api/users", {
      statusCode: 200,
      body: [{ id: 1, name: "QA Pulse Mock User" }],
    }).as("getUsers");
    cy.visit("/");
    cy.logStep("Network mock configured ✅");
  });

  it("should spy on JS file requests", () => {
    cy.intercept("GET", "**/*.js").as("jsFiles");
    cy.visit("/");
    cy.get("@jsFiles.all").should("have.length.gt", 0);
  });
});

// ─── Data-Driven Tests ────────────────────────────────────────────────────────
const loginCases = [
  { name: "valid credentials",  username: CREDENTIALS.VALID.username,   password: CREDENTIALS.VALID.password, expectedText: "secure area",       tag: "@smoke"      },
  { name: "invalid username",   username: "baduser",                     password: "badpass",                  expectedText: "username is invalid", tag: "@regression" },
  { name: "invalid password",   username: CREDENTIALS.VALID.username,   password: "wrongpass",                expectedText: "password is invalid", tag: "@regression" },
];

describe("Data-Driven Login @e2e", () => {
  loginCases.forEach((tc) => {
    it(`login with ${tc.name} ${tc.tag}`, () => {
      cy.visit(ROUTES.LOGIN);
      cy.logStep(`Testing: ${tc.name}`);
      cy.get("#username").type(tc.username);
      cy.get("#password").type(tc.password);
      cy.get("button[type='submit']").click();
      cy.get("#flash").should("contain.text", tc.expectedText);
    });
  });
});

// ─── Viewport Tests ───────────────────────────────────────────────────────────
describe("Responsive / Viewport Tests @e2e @regression", () => {
  Object.entries(VIEWPORTS).forEach(([name, size]) => {
    it(`home page renders on ${name} (${size.width}x${size.height})`, () => {
      cy.viewport(size.width, size.height);
      cy.visit("/");
      cy.get("h1").should("be.visible");
      cy.logStep(`✅ ${name} viewport verified`);
    });
  });
});

// ─── JavaScript Alerts ────────────────────────────────────────────────────────
describe("JavaScript Alerts @e2e @regression", () => {
  beforeEach(() => cy.visit(ROUTES.JAVASCRIPT_ALERTS));

  it("should handle JS alert — accept", () => {
    cy.on("window:alert", (text) => {
      expect(text).to.contain("I am a JS Alert");
    });
    cy.get("button[onclick='jsAlert()']").click();
    cy.get("#result").should("contain.text", "You successfully clicked an alert");
  });

  it("should handle JS confirm — accept", () => {
    cy.on("window:confirm", () => true);
    cy.get("button[onclick='jsConfirm()']").click();
    cy.get("#result").should("contain.text", "You clicked: Ok");
  });

  it("should handle JS confirm — dismiss", () => {
    cy.on("window:confirm", () => false);
    cy.get("button[onclick='jsConfirm()']").click();
    cy.get("#result").should("contain.text", "You clicked: Cancel");
  });
});

// ─── Drag and Drop ────────────────────────────────────────────────────────────
describe("Drag and Drop @e2e @regression", () => {
  it("should drag column A to column B", () => {
    cy.visit(ROUTES.DRAG_AND_DROP);
    cy.get("#column-a header").should("contain.text", "A");
    cy.get("#column-a").trigger("mousedown", { button: 0 });
    cy.get("#column-b").trigger("mousemove").trigger("mouseup", { force: true });
    cy.logStep("Drag and drop executed ✅");
  });
});

// ─── Dynamic Loading ──────────────────────────────────────────────────────────
describe("Dynamic Loading @e2e @regression", () => {
  it("should wait for dynamically loaded content", () => {
    cy.visit(ROUTES.DYNAMIC_LOADING);
    cy.get("button").click();
    cy.get("#loading", { timeout: 10000 }).should("be.visible");
    cy.get("#finish", { timeout: 10000 }).should("be.visible");
    cy.get("#finish h4").should("contain.text", "Hello World!");
  });
});

// ─── Checkboxes ───────────────────────────────────────────────────────────────
describe("Checkboxes @e2e @regression", () => {
  it("should check and uncheck checkboxes", () => {
    cy.visit(ROUTES.CHECKBOXES);
    cy.get("input[type='checkbox']").first().check().should("be.checked");
    cy.get("input[type='checkbox']").first().uncheck().should("not.be.checked");
  });
});
