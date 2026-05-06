<div align="center">

<img src="https://img.shields.io/badge/QA%20Pulse%20by%20SK-Cypress%20Boilerplate-22c55e?style=for-the-badge&logo=cypress&logoColor=white" alt="QA Pulse by SK" height="40"/>

# 🌲 QA Pulse by SK — Cypress Boilerplate

**A production-grade, community-ready Cypress 13 test automation framework**
**Fork it. Clone it. Ship quality code faster.**

<br/>

[![Cypress Tests](https://github.com/QAPulse-by-SK/cypress-boilerplate/actions/workflows/cypress.yml/badge.svg)](https://github.com/QAPulse-by-SK/cypress-boilerplate/actions/workflows/cypress.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-22c55e?logo=node.js&logoColor=white)](https://nodejs.org)
[![Cypress](https://img.shields.io/badge/Cypress-13-22c55e?logo=cypress&logoColor=white)](https://cypress.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5%2B-3b82f6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-a78bfa.svg)](./CONTRIBUTING.md)

<br/>

🌐 **[www.skakarh.com](https://www.skakarh.com)** &nbsp;|&nbsp; 🏢 **[QAPulse-by-SK](https://github.com/QAPulse-by-SK)** &nbsp;|&nbsp; ⭐ **Star this repo if it helped you!**

</div>

---

## 🌿 Choose Your Language

| Branch | Language | Clone Command |
|--------|----------|---------------|
| ✅ [`master`](https://github.com/QAPulse-by-SK/cypress-boilerplate/tree/master) ← **You are here** | **TypeScript** | `git clone https://github.com/QAPulse-by-SK/cypress-boilerplate.git` |
| 🟡 [`javascript`](https://github.com/QAPulse-by-SK/cypress-boilerplate/tree/javascript) | **JavaScript** | `git clone -b javascript https://github.com/QAPulse-by-SK/cypress-boilerplate.git` |

> ⚠️ Parallel branches — never merged. See [BRANCHES.md](./BRANCHES.md)

---

## ✨ Features At A Glance

| Category | What's Included |
|---|---|
| 🏗️ **Architecture** | Page Object Model · BasePage · 12 Custom Commands |
| 🌐 **E2E Testing** | Chrome · Firefox · Edge · Electron |
| 🔌 **API Testing** | `ApiHelper` class + `cy.apiGet/Post/Put/Delete` |
| 📸 **Visual Regression** | Screenshot baselines · full-page + element |
| ♿ **Accessibility** | `cypress-axe` · `A11yHelper` · WCAG 2.1 AA · keyboard · ARIA · labels · contrast |
| 🧩 **Component Testing** | Cypress CT with React support |
| 📊 **Reporting** | Mochawesome + Allure + JSON + Custom Terminal Summary |
| 🏷️ **Test Tags** | `cypress-grep` · `@smoke` `@regression` `@sanity` `@critical` `@e2e` `@api` `@visual` `@a11y` |
| 🔁 **CI/CD** | GitHub Actions (multi-browser + Pages + PR comments) · Jenkins · Azure DevOps |
| 🔐 **Auth** | `cy.session()` — login once, reuse across all tests |
| 🌐 **Network** | `cy.intercept()` · API mocking · request spying |
| 🛡️ **Code Quality** | ESLint · Prettier · TypeScript strict |
| 🪵 **Logging** | `cy.logStep()` + structured logger |

---

## 📁 Project Structure

```
cypress-boilerplate/
├── 📂 .github/workflows/cypress.yml    # Multi-browser CI + GitHub Pages
├── 📂 ci/
│   ├── Jenkinsfile
│   └── azure-pipelines.yml
├── 📂 cypress/
│   ├── e2e/
│   │   ├── auth/login.cy.ts
│   │   ├── home/home.cy.ts
│   │   └── advanced/advanced.cy.ts     # Intercepts, data-driven, alerts, drag-drop
│   ├── api/posts.cy.ts
│   ├── accessibility/home.a11y.cy.ts
│   ├── visual/home.visual.cy.ts
│   ├── component/NavBar.cy.ts
│   ├── pages/
│   │   ├── BasePage.ts
│   │   └── example/
│   │       ├── HomePage.ts
│   │       └── LoginPage.ts
│   ├── support/
│   │   ├── commands.ts                 # 12 custom commands
│   │   ├── e2e.ts
│   │   ├── component.ts
│   │   └── index.d.ts                  # TypeScript declarations
│   ├── helpers/
│   │   ├── a11yHelper.ts               # 9 accessibility methods
│   │   ├── apiHelper.ts
│   │   └── randomData.ts
│   ├── constants/index.ts
│   ├── types/index.ts
│   ├── utils/logger.ts
│   └── fixtures/
│       ├── users.json
│       └── posts.json
├── 📂 docs/
│   ├── ARCHITECTURE.md
│   ├── REPORTING.md
│   ├── ACCESSIBILITY.md
│   └── CUSTOM-COMMANDS.md
├── 📂 reporters/
│   ├── mergeMochawesome.js
│   └── jsonSummary.js
├── cypress.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/QAPulse-by-SK/cypress-boilerplate.git
cd cypress-boilerplate
npm install
cp .env.example .env
npm test
```

---

## 🧪 Running Tests

```bash
npm run cy:open          # Open Cypress UI
npm test                 # Run all (Chrome)

# By browser
npm run test:chrome
npm run test:firefox
npm run test:edge

# By type
npm run test:e2e
npm run test:api
npm run test:visual
npm run test:a11y

# By tag (cypress-grep)
npm run test:smoke
npm run test:regression
npm run test:critical

npm run test:headed      # Watch in browser
```

---

## 🔧 Custom Commands

```typescript
cy.loginAs("admin")                           // Session-based login
cy.loginWithCredentials("user", "pass")       // Explicit credentials
cy.logout()

cy.apiGet("/posts")                           // API commands
cy.apiPost("/posts", { title: "Test" })
cy.apiPut("/posts/1", { title: "Updated" })
cy.apiDelete("/posts/1")

cy.checkA11yFull()                            // Full WCAG 2.1 AA scan
cy.checkA11yCritical()                        // Critical only

cy.interceptApi("GET", "**/posts", "posts")   // Network mock
cy.waitForNetworkIdle()

cy.dataCy("my-element")                       // Selector helpers
cy.getByRole("button", { name: "Submit" })

cy.clearAllCookiesAndStorage()
cy.logStep("My step description")
```

See [docs/CUSTOM-COMMANDS.md](./docs/CUSTOM-COMMANDS.md) for full reference.

---

## 📊 Reporting

```bash
npm run report:mochawesome   # Beautiful HTML report
npm run report:allure        # Allure dashboard
npm run report:json          # Terminal summary
```

---

## ♿ Accessibility

```typescript
import { A11yHelper } from "../helpers/a11yHelper";

A11yHelper.assertNoViolations()
A11yHelper.assertNoCriticalViolations()
A11yHelper.assertComponentAccessible("nav")
A11yHelper.assertImagesHaveAltText()
A11yHelper.assertFormLabels()
A11yHelper.assertSingleH1()
A11yHelper.assertAriaLandmarks()
A11yHelper.assertKeyboardNavigable()
```

---

## ⚙️ Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `https://the-internet.herokuapp.com` | E2E target |
| `BRAND_URL` | `https://www.skakarh.com` | Visual/a11y site |
| `API_BASE_URL` | `https://jsonplaceholder.typicode.com` | API base |
| `TEST_USERNAME` | `tomsmith` | Login username |
| `TEST_PASSWORD` | `SuperSecretPassword!` | Login password |

---

## 🔁 CI/CD

- **GitHub Actions** — Multi-browser · GitHub Pages · PR comments
- **Jenkins** — `ci/Jenkinsfile`
- **Azure DevOps** — `ci/azure-pipelines.yml`

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) · [BRANCHES.md](./BRANCHES.md)

---

## 📄 License

MIT © [QA Pulse by SK](https://www.skakarh.com)

---

<div align="center">

**Built with ❤️ by [QA Pulse by SK](https://www.skakarh.com)**

🌐 [skakarh.com](https://www.skakarh.com) &nbsp;·&nbsp; 🏢 [QAPulse-by-SK](https://github.com/QAPulse-by-SK) &nbsp;·&nbsp; ⭐ Star if it helped!

*Created by QA Pulse by SK · skakarh.com*

</div>
