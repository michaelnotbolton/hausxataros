---
name: hausxataros-test
description: Use when working on Haus Xataros and you need the required feature workflow for the active app: update Gherkin first, update tests from Gherkin, validate component changes in Storybook, and report verification clearly.
---

# Haus Xataros Test

The active app is `haus-xataros/` relative to the repository root.

## Required workflow

1. Update the relevant Gherkin file in `features/` first so behavior changes are written down before implementation.
2. Update Playwright step definitions and any Vitest coverage to match the Gherkin behavior.
3. Run `npm run test:e2e:generate` so `.features-gen/` is updated before changing implementation.
4. If the change touches a component, visual state, or extensibility seam, review it in Storybook with `npm run storybook` before finalizing implementation.
5. Make or refine the app changes until the tests and intended Storybook state agree with the Gherkin.
6. Run `npm test`, `npm run test:e2e:check-generated`, and `npm run test:e2e:run`.
7. Report results in the same order: Gherkin updated, generated tests refreshed, Storybook checked if relevant, verification results.

## Test mapping

- `features/*.feature`: behavior contract
- `step-definitions/*.steps.ts`: browser behavior implementation
- `.features-gen/`: committed generated Playwright test layer
- `src/test/**/*.test.tsx`: isolated component and UI tests
- Storybook stories under `src/components/**`: live visual review surface

## Guardrails

- Run commands from `haus-xataros/`.
- Prefer changing the `.feature` file before changing step definitions or implementation unless the task is a pure refactor.
- If Storybook is relevant, treat it as part of validation rather than an optional extra.
- Ignore macOS resource-fork files such as `._*`; the repo config already excludes them, so do not debug them as app failures.
- Generated artifacts such as `storybook-static/`, `playwright-report/`, and `test-results/` are disposable, but `.features-gen/` is intentionally committed so generation drift can be reviewed in PRs.
- If Playwright cannot start a local server because the environment blocks port binding, explain that the app code may still be healthy and note that the limitation is environmental.

## Reporting

- Lead with whether the Gherkin was updated, whether `.features-gen/` was regenerated, and whether Storybook review was relevant.
- Then report whether `npm test`, `npm run test:e2e:check-generated`, `npm run build`, and `npm run test:e2e:run` passed.
- If E2E is blocked by environment, say that explicitly and separate it from product defects.
