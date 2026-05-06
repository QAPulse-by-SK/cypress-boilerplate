// @ts-check
/**
 * A11y Helper - Accessibility Testing Utilities
 * QA Pulse by SK - www.skakarh.com
 */

const IMPACT_ORDER = ["minor", "moderate", "serious", "critical"];

class A11yHelper {
  static assertNoViolations(options = {}) {
    const { tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"], includedImpacts, exclude = [] } = options;
    cy.injectAxe();
    cy.checkA11y(
      exclude.length ? { exclude: exclude.map((s) => [s]) } : undefined,
      { runOnly: { type: "tag", values: tags }, ...(includedImpacts ? { includedImpacts } : {}) },
      A11yHelper.formatViolations,
      false
    );
  }

  static assertNoCriticalViolations(options = {}) {
    A11yHelper.assertNoViolations({ ...options, includedImpacts: ["critical"] });
  }

  static assertNoSeriousViolations(options = {}) {
    A11yHelper.assertNoViolations({ ...options, includedImpacts: ["critical", "serious"] });
  }

  /** @param {string} selector */
  static assertComponentAccessible(selector, options = {}) {
    cy.injectAxe();
    cy.checkA11y(
      selector,
      { runOnly: { type: "tag", values: options.tags || ["wcag2a", "wcag2aa"] } },
      A11yHelper.formatViolations,
      false
    );
  }

  static assertImagesHaveAltText() {
    cy.get("img").each(($img) => {
      const alt = $img.attr("alt");
      const src = $img.attr("src");
      expect(alt, `Image missing alt text: src="${src}"`).to.not.be.undefined;
    });
  }

  static assertFormLabels() {
    cy.get("input:not([type=hidden]):not([type=submit]):not([type=button])").each(($input) => {
      const id = $input.attr("id");
      const ariaLabel = $input.attr("aria-label");
      const ariaLabelledBy = $input.attr("aria-labelledby");
      if (!ariaLabel && !ariaLabelledBy && id) {
        cy.get(`label[for="${id}"]`).should("exist");
      }
    });
  }

  static assertSingleH1() {
    cy.get("h1").should("have.length", 1);
  }

  static assertAriaLandmarks() {
    cy.get("main, [role='main']").should("exist");
    cy.get("nav, [role='navigation']").should("exist");
  }

  /** @param {number} maxTabs */
  static assertKeyboardNavigable(maxTabs = 10) {
    cy.get("body").focus();
    for (let i = 0; i < maxTabs; i++) {
      cy.focused().tab();
      cy.focused().should(($el) => {
        const tag = $el.prop("tagName").toLowerCase();
        const role = $el.attr("role") || "";
        const interactiveTags = ["a", "button", "input", "select", "textarea", "details"];
        const interactiveRoles = ["button", "link", "menuitem", "tab", "checkbox", "radio"];
        const isInteractive = interactiveTags.includes(tag) || interactiveRoles.includes(role);
        expect(isInteractive, `Tab stop ${i + 1} — <${tag}> should be interactive`).to.be.true;
      });
    }
  }

  static formatViolations(violations) {
    const lines = [
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `  ♿ Accessibility Violations — QA Pulse by SK`,
      `  Found: ${violations.length} violation(s)`,
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    ];
    violations.forEach((v, idx) => {
      lines.push(`\n  [${idx + 1}] ${v.id.toUpperCase()} — Impact: ${(v.impact || "").toUpperCase()}`);
      lines.push(`      Description: ${v.description}`);
      lines.push(`      Help: ${v.helpUrl}`);
      v.nodes.slice(0, 2).forEach((node) => lines.push(`        → ${node.html}`));
    });
    lines.push("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.error(lines.join("\n"));
  }
}

module.exports = { A11yHelper };
