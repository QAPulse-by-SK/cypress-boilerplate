# Architecture Guide
**QA Pulse by SK — Cypress Boilerplate** · www.skakarh.com

## Layer Structure
```
┌────────────────────────────────────────────┐
│         TEST SPECS (.cy.ts)                │
│  e2e | api | visual | a11y | component     │
└──────────────────┬─────────────────────────┘
                   │ uses
┌──────────────────▼─────────────────────────┐
│         CUSTOM COMMANDS                    │
│   cypress/support/commands.ts              │
└──────┬────────────────────┬─────────────────┘
       │                    │
┌──────▼──────┐   ┌─────────▼───────┐
│ PAGE OBJECTS│   │   API HELPER    │
│ BasePage    │   │   ApiHelper     │
│ HomePage    │   └─────────────────┘
│ LoginPage   │
└──────┬──────┘
       │ uses
┌──────▼──────────────────────────────────────┐
│         HELPERS & UTILITIES                  │
│  A11yHelper | randomData | logger            │
└──────────────────────────────────────────────┘
       │ uses
┌──────▼──────────────────────────────────────┐
│         CONSTANTS & TYPES                    │
│  cypress/constants/index.ts                  │
│  cypress/types/index.ts                      │
└──────────────────────────────────────────────┘
```
