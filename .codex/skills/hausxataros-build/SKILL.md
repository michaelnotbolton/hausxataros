---
name: hausxataros-build
description: Use when preparing Haus Xataros for release builds, validating the production bundle, or producing the Docker image for the site.
---

# Haus Xataros Build

The shipping target is `haus-xataros/` relative to the repository root.

## Build workflow

1. Run `npm run build`.
2. Confirm the output lands in `dist/`.
3. For a container artifact, run `npm run docker:build`.

## Notes

- The Docker image is a multi-stage static build served by nginx.
- SPA routing is handled by `nginx.conf`, which falls back to `index.html`.
- `npm run docker:run` serves the production image locally on port `8080` for a quick smoke test.
- If Docker is unavailable on the machine, still validate `npm run build` and call out the missing runtime as the blocker.
