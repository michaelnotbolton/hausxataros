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
- Hidden review route: [http://127.0.0.1:5173/review](http://127.0.0.1:5173/review)

## Daily Commands

```bash
npm test
npm run build
npm run test:e2e:generate
npm run test:e2e:check-generated
npm run test:e2e:run
npm run test:e2e
npm run storybook
npm run build-storybook
npm run build-storybook:pages
```

What each command does:

- `npm test`: fast unit and component verification with Vitest
- `npm run build`: TypeScript check plus production bundle
- `npm run test:e2e:generate`: regenerates the committed Playwright test layer in `.features-gen/`
- `npm run test:e2e:check-generated`: fails if the generated Playwright test layer is out of sync
- `npm run test:e2e:run`: runs the generated Playwright browser suite
- `npm run test:e2e`: regenerates the Playwright test layer and runs the browser suite
- `npm run storybook`: launches component live views for visual review
- `npm run build-storybook`: produces a static Storybook build for CI validation
- `npm run build-storybook:pages`: builds Storybook into the GitHub Pages artifact under `dist/review/storybook`

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

## VPS Handoff

If someone else is hosting the app on a VPS, the cleanest handoff is the Docker image plus one run command or compose file.

Preferred handoff:

1. Push the image to a registry such as GHCR.
2. Give the host the image name and tag.
3. Have them run the container directly or with [`docker-compose.yml`](./docker-compose.yml).

Example direct run:

```bash
docker run -d \
  --name haus-xataros \
  --restart unless-stopped \
  -p 80:80 \
  ghcr.io/your-org/haus-xataros:latest
```

Example compose launch:

```bash
IMAGE_NAME=ghcr.io/your-org/haus-xataros:latest HOST_PORT=80 docker compose up -d
```

If the host cannot pull from a registry yet, export the local image instead:

```bash
docker save haus-xataros:local | gzip > haus-xataros-image.tar.gz
```

Then the host can load it with:

```bash
gunzip -c haus-xataros-image.tar.gz | docker load
IMAGE_NAME=haus-xataros:local HOST_PORT=80 docker compose up -d
```

The host only needs to know:

- the image name and tag
- that the app serves HTTP on container port `80`
- that the container already includes SPA fallback routing through nginx
- whether they should put a reverse proxy like Caddy, nginx, or Traefik in front for HTTPS and domain handling

## GitHub Pages

The repo deploys GitHub Pages from `main` using [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).

The Pages build:

- installs dependencies with npm
- runs `npm test`
- verifies the generated Playwright test layer is in sync
- builds with `VITE_BASE_PATH=/hausxataros/`
- copies `dist/index.html` to `dist/404.html` for SPA fallback
- builds Storybook into `dist/review/storybook`
- publishes `haus-xataros/dist`

Hidden designer review URLs after deploy:

- app review hub: `https://michaelnotbolton.github.io/hausxataros/review`
- Storybook review surface: `https://michaelnotbolton.github.io/hausxataros/review/storybook/`

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
- `.features-gen/`: generated Playwright test files committed to the repo so CI can catch stale generation
- `npm run test:e2e:generate`: refreshes the runnable Playwright test layer from the features and step definitions
- `npm run test:e2e:run`: executes the generated browser suite

When adding or changing behavior:

1. Update or add the relevant `.feature` file first.
2. Add or adjust the matching step definition.
3. Run `npm run test:e2e:generate` so the committed Playwright test layer reflects the new behavior.
4. Add or update Vitest coverage when the change also benefits from isolated component testing.
5. If the change affects a component, visual state, or extensibility seam, review it in Storybook.
6. Make implementation changes to satisfy the generated Playwright tests and component checks.
7. Run `npm run test:e2e:check-generated`, `npm run test:e2e:run`, and `npm test`.

## Review Checklist

Use this order before calling a feature ready:

1. Gherkin changed first.
2. Step definitions changed to match the Gherkin.
3. `npm run test:e2e:generate` was run and the resulting `.features-gen/` changes were reviewed.
4. Storybook was reviewed if a component or extensibility surface changed.
5. Implementation was updated to satisfy the Gherkin and tests.
6. `npm test` passed.
7. `npm run test:e2e:check-generated` passed.
8. `npm run test:e2e:run` passed.
9. `npm run build` passed.
10. Docker verification status is known if container shipping matters.
11. The PR summary includes Gherkin, generated test sync, Storybook, build, and deploy status.

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
- `npm run build-storybook:pages` should pass

If Docker is unavailable locally, that is an environment limitation rather than an app failure. In that case, validate the build and test suite first, then verify the image on a machine with Docker installed.

## Ignore Rules

The repo ignores macOS metadata and generated test/build artifacts, including:

- `._*`
- `.DS_Store`
- `storybook-static/`
- `playwright-report/`
- `test-results/`

If those files appear, they are cleanup issues, not source files.
