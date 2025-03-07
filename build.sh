#!/bin/bash

# Print Node.js and yarn versions
echo "Node version: $(node -v)"
echo "Yarn version: $(yarn --version)"

# Install dependencies with yarn, skipping problematic parts
yarn install --ignore-engines --ignore-optional --ignore-scripts --ignore-platform

# Set environment variables for the build
export CI=false
export SKIP_PREFLIGHT_CHECK=true
export NODE_OPTIONS=--openssl-legacy-provider

# Run the build
yarn build
