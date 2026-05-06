# Reporting Guide
**QA Pulse by SK — Cypress Boilerplate** · www.skakarh.com

## Available Reporters

| Reporter | Output | Command |
|----------|--------|---------|
| Mochawesome | `mochawesome-report/index.html` | `npm run report:mochawesome` |
| Allure | `allure-report/` | `npm run report:allure` |
| JSON Summary | Terminal | `npm run report:json` |

## Mochawesome
```bash
npm test && npm run report:mochawesome
```

## Allure
```bash
npm install -g allure-commandline
npm run report:allure
```

## CI — GitHub Pages
Reports auto-publish to GitHub Pages on every push to master.
