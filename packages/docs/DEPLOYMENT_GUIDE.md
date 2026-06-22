# Deployment Guide

Deploy your applications with HF Space.

## Supported Platforms

- **Vercel** - Serverless, great for Next.js
- **Netlify** - Static sites and functions
- **Railway** - Containerized deployments
- **Fly.io** - Global distribution
- **Heroku** - Traditional PaaS
- **Docker** - Self-hosted

## Quick Deploy

```bash
hf-space deploy ./my-app --platform vercel
```

## Configuration

Create `deploy.config.json`:

```json
{
  "platform": "vercel",
  "name": "my-app",
  "env": {
    "API_URL": "https://api.example.com"
  }
}
```
