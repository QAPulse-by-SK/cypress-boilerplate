// @ts-check
/**
 * E2E Tests — Home Page
 * QA Pulse by SK - www.skakarh.com
 * Tags: @smoke @regression @e2e
 */
const { HomePage } = require("../../pages/example/HomePage.js");

describe("Home Page @e2e", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the correct heading @smoke @e2e", () => {
    homePage.verifyHeadingContains("Welcome to the-internet");
  });

  it("should display available example links @regression @e2e", () => {
    homePage.getLinkCount().should("be.gt", 0);
  });

  it("should navigate to login page @smoke @critical @e2e", () => {
    homePage.clickLink("Form Authentication");
    cy.url().should("include", "/login");
  });

  it("should navigate to drag and drop page @regression @e2e", () => {
    homePage.clickLink("Drag and Drop");
    cy.url().should("include", "/drag_and_drop");
  });
});
