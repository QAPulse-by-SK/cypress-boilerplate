# Custom Commands Guide
**QA Pulse by SK — Cypress Boilerplate** · www.skakarh.com

## Authentication
```typescript
cy.loginAs("admin")                              // Login as preset role via cy.session()
cy.loginWithCredentials("username", "password")  // Login with explicit credentials
cy.logout()                                      // Click logout link
```

## API Commands
```typescript
cy.apiGet("/posts")
cy.apiPost("/posts", { title: "Test" })
cy.apiPut("/posts/1", { title: "Updated" })
cy.apiDelete("/posts/1")
```

## Accessibility
```typescript
cy.checkA11yFull()                          // Full WCAG 2.1 AA scan
cy.checkA11yFull({ tags: ["wcag2a"] })      // Custom tags
cy.checkA11yCritical()                      // Critical violations only
```

## Network
```typescript
cy.interceptApi("GET", "**/posts", "posts")  // Intercept + stub with fixture
cy.waitForNetworkIdle()                      // Wait 500ms for requests to settle
```

## Selectors
```typescript
cy.dataCy("submit-button")                  // [data-cy="submit-button"]
cy.getByRole("button", { name: "Submit" })  // ARIA role
```

## Utilities
```typescript
cy.clearAllCookiesAndStorage()              // Clear all browser state
cy.logStep("My step description")           // Log to Cypress + terminal
```
