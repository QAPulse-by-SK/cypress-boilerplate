# Changelog — QA Pulse by SK Cypress Boilerplate

## [1.0.0] - 2024-05-05

### Added
- Cypress 13 + TypeScript strict mode
- Page Object Model (BasePage + HomePage + LoginPage)
- 12 Custom Commands (loginAs, apiGet/Post/Put/Delete, checkA11y, interceptApi, dataCy, logStep, etc.)
- API testing layer (ApiHelper class + cy.request commands)
- Visual regression (cy.screenshot baseline comparisons)
- Accessibility testing (cypress-axe + A11yHelper — 9 methods)
- Advanced tests — intercepts, data-driven, viewport, alerts, drag-drop, dynamic loading
- 3 reporters — Mochawesome + Allure + JSON custom summary
- GitHub Actions (multi-browser + GitHub Pages + PR comments)
- Jenkins declarative pipeline
- Azure DevOps multi-browser pipeline
- cy.session() auth state management
- cypress-grep for test tagging (@smoke, @regression, @critical, etc.)
- Constants, Types, Logger utility
- ESLint + Prettier
- Docs — ARCHITECTURE, REPORTING, ACCESSIBILITY, CUSTOM-COMMANDS
- MIT License

*Created by QA Pulse by SK · www.skakarh.com*
