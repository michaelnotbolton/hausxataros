# hausxataros

Primary app: [`haus-xataros/`](./haus-xataros/)

This repository now ships from the `haus-xataros/` app directory. The old v1 app has been retired from the working tree, and the current React/Vite app, tests, Storybook setup, and Docker packaging all live there.

## Working Layout

- `haus-xataros/`: shipping app, tests, Storybook, Docker, and deployment scripts
- `.github/workflows/`: CI and GitHub Pages deployment
- `.codex/skills/`: project-specific skills for testing, building, and deployment

## Release Path

1. Work in `haus-xataros/`
2. Verify with the local test/build commands
3. Open a PR from the working branch into `main`
4. Merge to `main`
5. GitHub Pages deploys from `haus-xataros/dist`

## VPS Hosting

If a third party is hosting the app on a VPS, hand them the Docker image rather than the raw source tree when possible. The app README includes:

- a registry-based handoff flow
- a fallback `docker save` image export flow
- a minimal [`haus-xataros/docker-compose.yml`](./haus-xataros/docker-compose.yml) for running the container on a VPS

## Hidden Review Surface

The app also supports a hidden designer review surface:

- app review hub at `/review`
- published Storybook at `/review/storybook/`

These routes are intentionally unlinked from normal site navigation and exist for direct sharing with designers or reviewers.

For day-to-day setup and release commands, start with [`haus-xataros/README.md`](./haus-xataros/README.md).
