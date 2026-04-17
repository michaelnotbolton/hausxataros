# hausxataros

Primary app: [`haus-xataros/`](</Volumes/X10 Pro/repos/hausxataros/haus-xataros>)

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

For day-to-day setup and release commands, start with [`haus-xataros/README.md`](</Volumes/X10 Pro/repos/hausxataros/haus-xataros/README.md>).
