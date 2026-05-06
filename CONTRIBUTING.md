# Contributing to QA Pulse by SK — Cypress Boilerplate
🌐 www.skakarh.com

## How to Contribute
1. Fork the repo
2. Create branch: `git checkout -b feat/your-feature`
3. Make changes + run `npm run lint`
4. Commit: `git commit -m "feat: description"`
5. Push + open PR ✅

## Commit Format
- `feat:` — new feature
- `fix:` — bug fix
- `test:` — adding tests
- `docs:` — documentation
- `chore:` — maintenance

## Rules
- All custom commands must have type declarations in `cypress/support/index.d.ts`
- All new tests must have at least one tag (`@smoke`, `@regression`, etc.)
- TypeScript → PR to `master` | JavaScript → PR to `javascript`
