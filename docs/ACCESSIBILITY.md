# Accessibility Testing Guide
**QA Pulse by SK — Cypress Boilerplate** · www.skakarh.com

## Using A11yHelper
```typescript
import { A11yHelper } from "../helpers/a11yHelper";

A11yHelper.assertNoViolations()
A11yHelper.assertNoCriticalViolations()
A11yHelper.assertNoSeriousViolations()
A11yHelper.assertComponentAccessible("nav")
A11yHelper.assertImagesHaveAltText()
A11yHelper.assertFormLabels()
A11yHelper.assertSingleH1()
A11yHelper.assertAriaLandmarks()
A11yHelper.assertKeyboardNavigable(10)
```

## Using Custom Commands
```typescript
cy.checkA11yFull()
cy.checkA11yCritical()
```

## WCAG Tags
| Tag | Standard |
|-----|----------|
| `wcag2a` | WCAG 2.0 Level A |
| `wcag2aa` | WCAG 2.0 Level AA |
| `wcag21a` | WCAG 2.1 Level A |
| `wcag21aa` | WCAG 2.1 Level AA |
| `cat.color` | Colour contrast |
