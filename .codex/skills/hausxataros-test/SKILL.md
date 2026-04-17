---
name: hausxataros-test
description: Use when working on Haus Xataros and you need the project-specific testing workflow for the active app, including unit tests, Playwright BDD tests, artifact-file gotchas, and how to report blockers clearly.
---

# Haus Xataros Test

The active app is `haus-xataros/` relative to the repository root.

## Default workflow

1. Run `npm test` for the fast unit/component suite.
2. Run `npm run test:e2e` for Playwright BDD coverage when browser/server startup is available.
3. If both are needed, prefer `npm run test:all`.

## Guardrails

- Run commands from `haus-xataros/`.
- Ignore macOS resource-fork files such as `._*`; the repo config already excludes them, so do not debug them as app failures.
- Generated artifacts such as `storybook-static/`, `playwright-report/`, `test-results/`, and `.features-gen/` are disposable and should not be treated as source changes.
- If Playwright cannot start a local server because the environment blocks port binding, explain that the app code may still be healthy and note that the limitation is environmental.

## Reporting

- Lead with whether `npm test`, `npm run build`, and `npm run test:e2e` passed.
- If E2E is blocked by environment, say that explicitly and separate it from product defects.
