# Haus Xataros Digital Hub

Haus Xataros is the shipping web app for the studio's public site. This folder is the canonical app path for local development, testing, container packaging, and GitHub Pages deployment.

## What Lives Here

- React 19 + TypeScript app built with Vite
- Vitest component tests
- Playwright BDD coverage driven by Gherkin feature files
- Storybook for live component views
- Docker packaging for a static nginx-served build

## Start Here

Run all app commands from this directory:

```bash
cd haus-xataros
```

Install dependencies:

```bash
npm ci
```

Start the app locally:

```bash
npm run dev
```

Useful local URLs:

- App dev server: [http://127.0.0.1:5173](http://127.0.0.1:5173)
- Storybook: [http://127.0.0.1:6006](http://127.0.0.1:6006)
- Docker preview: [http://127.0.0.1:8080](http://127.0.0.1:8080)

## Daily Commands

```bash
npm test
npm run build
npm run test:e2e
npm run storybook
npm run build-storybook
```

What each command does:

- `npm test`: fast unit and component verification with Vitest
- `npm run build`: TypeScript check plus production bundle
- `npm run test:e2e`: generates Playwright BDD tests from `features/` and runs the browser suite
- `npm run storybook`: launches component live views for visual review
- `npm run build-storybook`: produces a static Storybook build for CI validation

## Shipping Target

The shipping target is this app directory, `haus-xataros/`, relative to the repository root.

That means:

- GitHub Pages builds from `haus-xataros/`
- CI verifies `haus-xataros/`
- Docker packaging is built from `haus-xataros/`
- Project-specific skills assume commands are run from `haus-xataros/`

## Docker Workflow

The Docker image packages the built static site behind nginx with SPA fallback routing from [`nginx.conf`](./nginx.conf).

Build the local image:

```bash
npm run docker:build
```

Run the image locally:

```bash
npm run docker:run
```

That serves the built site on [http://127.0.0.1:8080](http://127.0.0.1:8080).

If you want a tagged release image:

```bash
IMAGE_NAME=ghcr.io/your-org/haus-xataros IMAGE_TAG=latest npm run deploy:docker
```

If you want to push after a successful verified build:

```bash
PUSH_IMAGE=1 IMAGE_NAME=ghcr.io/your-org/haus-xataros IMAGE_TAG=latest npm run deploy:docker
```

What `npm run deploy:docker` does:

- runs `npm test`
- runs `npm run build`
- builds the Docker image with the requested tag
- optionally pushes it when `PUSH_IMAGE=1`

What to do with the container:

- Use `npm run docker:run` for a quick local production-like smoke test
- Tag with your registry path when you want a real release artifact
- Push only after local tests and build are green and the target registry is confirmed
- Treat Docker as the deployable artifact for container hosting, separate from GitHub Pages

## GitHub Pages

The repo deploys GitHub Pages from `main` using [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).

The Pages build:

- installs dependencies with npm
- runs `npm test`
- builds with `VITE_BASE_PATH=/hausxataros/`
- copies `dist/index.html` to `dist/404.html` for SPA fallback
- publishes `haus-xataros/dist`

## Storybook and Component Work

Storybook is set up so visual elements can be reviewed in isolation instead of only through the full app. Stories and component-scoped styles live next to the components under [`src/components`](./src/components).

Use Storybook when you want to:

- inspect a component in isolation
- check visual states before wiring a page together
- create a clean review surface for future visual regression work

## Testing Notes

- Feature files live in [`features/`](./features/)
- Playwright step definitions live in [`step-definitions/`](./step-definitions/)
- Vitest coverage lives in [`src/test/`](./src/test/)

### Gherkin Workflow

The app uses Gherkin feature files as the behavior contract for the user-facing site. The goal is to describe what the site should do in plain language first, then implement the browser automation behind those behaviors.

How the pieces fit together:

- `features/*.feature`: human-readable requirements for pages and shared UI
- `step-definitions/*.steps.ts`: Playwright-backed implementations of those steps
- `npm run test:e2e`: generates the runnable test layer and executes the browser suite

When adding or changing behavior:

1. Update or add the relevant `.feature` file first.
2. Add or adjust the matching step definition.
3. Add or update Vitest coverage when the change also benefits from isolated component testing.
4. If the change affects a component, visual state, or extensibility seam, review it in Storybook.
5. Run `npm run test:e2e` to confirm the behavior works end to end.

## Review Checklist

Use this order before calling a feature ready:

1. Gherkin changed first.
2. Step definitions and tests were updated from the Gherkin.
3. Storybook was reviewed if a component or extensibility surface changed.
4. Implementation was updated to satisfy the Gherkin and tests.
5. `npm test` passed.
6. `npm run test:e2e` passed.
7. `npm run build` passed.
8. Docker verification status is known if container shipping matters.
9. The PR summary includes Gherkin, tests, Storybook, build, and deploy status.

Current feature coverage includes:

- `home.feature`
- `work.feature`
- `drag-queens-guide.feature`
- `studio-notes.feature`
- `hire-us.feature`
- `wiki.feature`
- `support.feature`
- `contact.feature`
- `header.feature`
- `footer.feature`

Example shape:

```gherkin
Feature: Home Page

  Scenario: Hero section is visible with a statement of purpose
    Then I should see the hero section
    And the hero should contain a statement of purpose
```

Current expected baseline:

- `npm test` should pass
- `npm run build` should pass
- `npm run test:e2e` should pass
- `npm run build-storybook` should pass

If Docker is unavailable locally, that is an environment limitation rather than an app failure. In that case, validate the build and test suite first, then verify the image on a machine with Docker installed.

## Ignore Rules

The repo ignores macOS metadata and generated test/build artifacts, including:

- `._*`
- `.DS_Store`
- `storybook-static/`
- `playwright-report/`
- `test-results/`
- `.features-gen/`

If those files appear, they are cleanup issues, not source files.
