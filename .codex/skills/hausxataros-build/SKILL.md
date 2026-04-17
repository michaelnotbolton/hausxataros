---
name: hausxataros-build
description: Use when preparing Haus Xataros for release builds after the Gherkin, test, Storybook, and implementation steps are complete, including production build validation and Docker packaging.
---

# Haus Xataros Build

The shipping target is `haus-xataros/` relative to the repository root.

## Required workflow

1. Confirm the behavior change already followed the sequence: Gherkin first, step definitions next, `npm run test:e2e:generate`, Storybook review if relevant, then implementation.
2. Run `npm run build`.
3. Confirm the output lands in `dist/`.
4. Run `npm run build-storybook:pages` when the published review surface is in scope.
5. For a container artifact, run `npm run docker:build`.
6. If local production smoke testing matters, run `npm run docker:run`.

## Notes

- The Docker image is a multi-stage static build served by nginx.
- SPA routing is handled by `nginx.conf`, which falls back to `index.html`.
- `npm run docker:run` serves the production image locally on port `8080` for a quick smoke test.
- `.features-gen/` should already be in sync before build validation starts.
- If Docker is unavailable on the machine, still validate `npm run build` and call out the missing runtime as the blocker.

## Review handoff

Before calling build work complete, verify and report:

1. Gherkin was updated first.
2. Step definitions and `.features-gen/` were updated to match the Gherkin.
3. Storybook was reviewed if components or visual states changed.
4. App changes were made to satisfy those checks.
5. Build verification passed, and Docker verification status is clear.
