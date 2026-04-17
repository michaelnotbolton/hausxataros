---
name: hausxataros-deploy
description: Use when releasing Haus Xataros after the Gherkin, test, Storybook, implementation, build, and review steps are done, including Docker image publication and PR handoff instructions.
---

# Haus Xataros Deploy

Work from `haus-xataros/` relative to the repository root.

## Required release flow

1. Confirm the change followed the required order:
   Gherkin updated first, step definitions updated from Gherkin, `.features-gen/` regenerated before implementation, Storybook reviewed if component work was involved, implementation updated to satisfy the checks.
2. Run `npm test`.
3. Run `npm run test:e2e:check-generated`.
4. Run `npm run build`.
5. Build the published review surface with `npm run build-storybook:pages` when it is in scope.
6. Smoke test the production container locally with `npm run docker:build` and `npm run docker:run` when Docker is available.
7. Build the tagged release image with `IMAGE_NAME=<registry/repo> IMAGE_TAG=<tag> npm run deploy:docker`.
8. Set `PUSH_IMAGE=1` when the image should be pushed after a successful build.

## Expectations

- Confirm the target image name and tag before pushing if the user has not specified them.
- Explain what will happen to the image after build: local smoke test only, or push to a real registry.
- If Docker is not installed or registry credentials are missing, stop after the verified local build and state exactly what is still needed.
- Prefer keeping deployment separate from feature work unless the user asks to publish immediately.

## Review checklist

Before recommending publish or merge, verify:

1. Gherkin reflects the shipped behavior.
2. Step definitions and `.features-gen/` reflect the Gherkin.
3. Storybook was used where visual or extensibility work mattered.
4. `npm test` passed.
5. `npm run test:e2e:check-generated` passed.
6. `npm run build` passed.
7. Docker validation status is known.

## PR publish instructions

When the work is ready for review:

1. Stage only the intended source changes, not generated artifacts.
2. Commit with a message that describes the feature or fix clearly.
3. Push the branch.
4. Open or update the PR with a summary of:
   Gherkin changes, generated test sync status, test updates, Storybook review, implementation changes, build results, and deploy status.
5. Call out any remaining environment-specific blockers such as missing Docker or registry credentials.
