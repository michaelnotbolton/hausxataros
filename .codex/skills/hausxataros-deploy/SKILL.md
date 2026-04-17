---
name: hausxataros-deploy
description: Use when releasing Haus Xataros as a Docker image, preparing an image tag, or pushing a verified build to a container registry.
---

# Haus Xataros Deploy

Work from `haus-xataros/` relative to the repository root.

## Release flow

1. Run `npm test`.
2. Run `npm run build`.
3. Smoke test the production container locally with `npm run docker:build` and `npm run docker:run` when Docker is available.
4. Build the tagged release image with `IMAGE_NAME=<registry/repo> IMAGE_TAG=<tag> npm run deploy:docker`.
5. Set `PUSH_IMAGE=1` when the image should be pushed after a successful build.

## Expectations

- Confirm the target image name and tag before pushing if the user has not specified them.
- Explain what will happen to the image after build: local smoke test only, or push to a real registry.
- If Docker is not installed or registry credentials are missing, stop after the verified local build and state exactly what is still needed.
- Prefer keeping deployment separate from feature work unless the user asks to publish immediately.
