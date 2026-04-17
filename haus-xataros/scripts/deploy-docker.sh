#!/bin/sh

set -eu

IMAGE_NAME="${IMAGE_NAME:-haus-xataros}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
IMAGE_REF="${IMAGE_NAME}:${IMAGE_TAG}"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required to build or push the release image."
  exit 1
fi

npm test
npm run build
docker build -t "$IMAGE_REF" .

if [ "${PUSH_IMAGE:-0}" = "1" ]; then
  docker push "$IMAGE_REF"
fi

echo "Release image ready: $IMAGE_REF"
