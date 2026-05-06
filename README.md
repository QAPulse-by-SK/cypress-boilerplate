<div align="center">

<img src="https://img.shields.io/badge/QA%20Pulse%20by%20SK-Cypress%20Boilerplate-22c55e?style=for-the-badge&logo=cypress&logoColor=white" alt="QA Pulse by SK" height="40"/>

# 🌲 QA Pulse by SK — Cypress Boilerplate (JavaScript)

**A production-grade, community-ready Cypress 13 test automation framework**
**Fork it. Clone it. Ship quality code faster.**

> 📌 This is the **JavaScript** branch. For TypeScript, switch to [`master`](https://github.com/QAPulse-by-SK/cypress-boilerplate/tree/master).

<br/>

[![Cypress Tests](https://github.com/QAPulse-by-SK/cypress-boilerplate/actions/workflows/cypress.yml/badge.svg)](https://github.com/QAPulse-by-SK/cypress-boilerplate/actions/workflows/cypress.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-22c55e?logo=node.js&logoColor=white)](https://nodejs.org)
[![Cypress](https://img.shields.io/badge/Cypress-13-22c55e?logo=cypress&logoColor=white)](https://cypress.io)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-a78bfa.svg)](./CONTRIBUTING.md)

<br/>

🌐 **[www.skakarh.com](https://www.skakarh.com)** &nbsp;|&nbsp; 🏢 **[QAPulse-by-SK](https://github.com/QAPulse-by-SK)** &nbsp;|&nbsp; ⭐ **Star this repo if it helped you!**

</div>

---

## 🌿 Branches

| Branch | Language | Clone Command |
|--------|----------|---------------|
| [`master`](https://github.com/QAPulse-by-SK/cypress-boilerplate/tree/master) | **TypeScript** | `git clone https://github.com/QAPulse-by-SK/cypress-boilerplate.git` |
| ✅ [`javascript`](https://github.com/QAPulse-by-SK/cypress-boilerplate/tree/javascript) ← **You are here** | **JavaScript** | `git clone -b javascript https://github.com/QAPulse-by-SK/cypress-boilerplate.git` |

> ⚠️ Parallel branches — never merged. See [BRANCHES.md](./BRANCHES.md)

---

## 🚀 Quick Start

```bash
git clone -b javascript https://github.com/QAPulse-by-SK/cypress-boilerplate.git
cd cypress-boilerplate
npm install
cp .env.example .env
npm test
```

---

## ✨ Features

- **Page Object Model** — `BasePage` + page objects with JSDoc types
- **12 Custom Commands** — `cy.loginAs`, `cy.apiGet/Post/Put/Delete`, `cy.checkA11yFull`, etc.
- **API Testing** — `ApiHelper` class + custom cy commands
- **Visual Regression** — screenshot baselines
- **Accessibility** — `A11yHelper` class + `cypress-axe` (WCAG 2.1 AA)
- **Component Testing** — Cypress CT support
- **3 Reporters** — Mochawesome + Allure + JSON custom summary
- **Test Tags** — `cypress-grep` · `@smoke` `@regression` `@critical` `@e2e` `@api` `@visual` `@a11y`
- **CI/CD** — GitHub Actions + Jenkins + Azure DevOps
- **Auth** — `cy.session()` — login once, reuse across tests

---

## 🧪 Running Tests

```bash
npm run cy:open          # Open Cypress UI
npm test                 # Run all (Chrome)
npm run test:chrome
npm run test:firefox
npm run test:e2e
npm run test:api
npm run test:a11y
npm run test:smoke
npm run test:regression
npm run test:critical
```

---

## 📊 Reporting

```bash
npm run report:mochawesome
npm run report:allure
npm run report:json
```

---

## 📄 License

MIT © [QA Pulse by SK](https://www.skakarh.com)

---

<div align="center">

**Built with ❤️ by [QA Pulse by SK](https://www.skakarh.com)**

🌐 [skakarh.com](https://www.skakarh.com) &nbsp;·&nbsp; 🏢 [QAPulse-by-SK](https://github.com/QAPulse-by-SK) &nbsp;·&nbsp; ⭐ Star if it helped!

*Created by QA Pulse by SK · skakarh.com*

</div>
