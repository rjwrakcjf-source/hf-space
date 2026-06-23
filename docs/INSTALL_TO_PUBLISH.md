# Install to Publish Guide

## Publishing to Hugging Face Spaces

1. Create a HF account at https://huggingface.co
2. Create a new Space
3. Set up secrets in GitHub repository settings:
   - `HF_TOKEN` - Your Hugging Face API token
   - `HF_REPO_ID` - Your Space repository ID (e.g., `username/hf-space`)

4. Push to main branch - the deploy workflow will handle the rest

## Publishing Desktop App

1. Create a GitHub release tag: `git tag v1.0.0 && git push --tags`
2. GitHub Actions will build installers for all platforms
3. A release will be created with download links

## Publishing npm Packages

1. Ensure `NPM_TOKEN` is set in GitHub secrets
2. Create a release tag - packages are automatically published
