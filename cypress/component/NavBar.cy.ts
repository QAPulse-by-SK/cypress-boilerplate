/**
 * Component Tests — NavBar
 * QA Pulse by SK - www.skakarh.com
 * Tags: @component @regression
 */
describe("NavBar Component @component", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BRAND_URL") || "https://www.skakarh.com");
  });

  it("navbar should be visible on page load @component @smoke", () => {
    cy.get("nav, header").first().should("be.visible");
  });

  it("navbar should contain navigation links @component @regression", () => {
    cy.get("nav a, header a").should("have.length.gt", 0);
  });

  it("navbar links should have non-empty text @component @regression", () => {
    cy.get("nav a, header a").each(($a) => {
      expect($a.text().trim()).to.not.be.empty;
    });
  });
});
