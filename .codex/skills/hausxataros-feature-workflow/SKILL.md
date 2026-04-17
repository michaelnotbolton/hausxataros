---
name: hausxataros-feature-workflow
description: Use when implementing or reviewing a Haus Xataros feature from start to finish and you need the canonical order of operations: Gherkin first, tests next, Storybook for component or extensibility work, implementation after validation targets exist, then build, review, and PR publication.
---

# Haus Xataros Feature Workflow

Work from `haus-xataros/` relative to the repository root.

## Canonical order

1. Update the relevant Gherkin in `features/` first.
2. Update the Playwright step definitions to match the Gherkin.
3. Run `npm run test:e2e:generate` so `.features-gen/` reflects the new behavior before implementation.
4. If the change affects a component, visual state, or extensibility surface, review it in Storybook.
5. Make implementation changes to satisfy the Gherkin, generated Playwright tests, and Storybook expectations.
6. Run build and verification commands.
7. Review the work by confirming the earlier steps really happened in order.
8. Publish or update the PR with a summary of the workflow and verification status.

## Step details

### 1. Gherkin first

- Treat `features/*.feature` as the behavior contract.
- Prefer changing the feature file before changing code unless the task is a pure refactor with no behavior change.
- Keep the behavior readable by non-engineers.

### 2. Tests from Gherkin

- Update `step-definitions/*.steps.ts` to implement the browser behavior.
- Regenerate `.features-gen/` with `npm run test:e2e:generate` before changing app code.
- Update `src/test/**/*.test.tsx` when component-level coverage is useful.
- Make the tests prove the behavior written in Gherkin, not a different interpretation.

### 3. Storybook for component work

- If a component API, visual state, or extensibility seam changes, check it in Storybook.
- Use `npm run storybook` for live review.
- Add or update stories when the new behavior should be inspectable in isolation.

### 4. Implementation after targets exist

- Change the app code only after the behavior and validation targets are clear.
- Prefer implementation that satisfies the feature file, automated tests, and Storybook state with the smallest clean change.

### 5. Build and verify

Run the relevant commands:

- `npm test`
- `npm run test:e2e:check-generated`
- `npm run test:e2e:run`
- `npm run build`
- `npm run build-storybook` when Storybook changes matter
- `npm run build-storybook:pages` when the published review surface changes matter
- `npm run docker:build` and `npm run docker:run` when container verification matters

### 6. Review checklist

Before calling the work complete, confirm:

1. Gherkin changed first.
2. Step definitions changed to match the Gherkin.
3. `.features-gen/` was regenerated before implementation and is committed in sync.
4. Storybook was reviewed if component or extensibility work was involved.
5. Implementation satisfied those checks.
6. Build and test results are known.
7. Any Docker or environment blockers are stated clearly.

### 7. PR publication

When opening or updating a PR, summarize:

- Gherkin changes
- generated test sync status
- test changes
- Storybook review status
- implementation changes
- build status
- deploy or Docker status

## Companion skills

- Use `hausxataros-test` for test-specific execution and reporting.
- Use `hausxataros-build` for production build and container verification.
- Use `hausxataros-deploy` for release image and PR publication handoff.
