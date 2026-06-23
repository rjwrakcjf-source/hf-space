# HF Space

AI-powered desktop application and monorepo for building and deploying AI applications.

[![Build](https://github.com/rjwrakcjf-source/hf-space/actions/workflows/build.yml/badge.svg)](https://github.com/rjwrakcjf-source/hf-space/actions/workflows/build.yml)
[![Test](https://github.com/rjwrakcjf-source/hf-space/actions/workflows/test.yml/badge.svg)](https://github.com/rjwrakcjf-source/hf-space/actions/workflows/test.yml)

## 🚀 Quick Start

### Download Desktop App

- **Windows**: [Download .exe](https://github.com/rjwrakcjf-source/hf-space/releases)
- **macOS**: [Download .dmg](https://github.com/rjwrakcjf-source/hf-space/releases)
- **Linux**: [Download .AppImage](https://github.com/rjwrakcjf-source/hf-space/releases)

### Development Setup

```bash
# Clone
git clone https://github.com/rjwrakcjf-source/hf-space.git
cd hf-space

# Install dependencies (requires pnpm)
npm install -g pnpm@8.15.6
pnpm install

# Setup development environment
node tools/scripts/setup.js

# Start development
pnpm dev
```

## 🏗️ Project Structure

```
hf-space/
├── apps/
│   ├── web/          # React web frontend (Vite)
│   ├── desktop/      # Electron desktop app
│   ├── server/       # Express.js backend
│   ├── cli/          # Command-line interface
│   └── hf-space/     # Hugging Face Space (Gradio)
├── libs/
│   ├── api/          # Express middleware, routes, controllers
│   ├── core/         # Business logic (builder, deployment)
│   ├── models/       # Model catalog and inference
│   ├── ai/           # AI & LLM integration
│   ├── extensions/   # Extension system
│   ├── security/     # Security & sandbox
│   ├── database/     # Data access & ORM
│   ├── common/       # Shared utilities
│   └── ui/           # Shared React components
├── packages/
│   ├── docs/         # Documentation
│   ├── config/       # Configuration files
│   ├── scripts/      # Build & utility scripts
│   └── templates/    # Project templates
├── models/           # ML model catalog
├── runtime/          # Runtime cache & temp files
├── security/         # Security policies & configs
├── tests/            # Test suites
└── tools/            # Development tools
```

## ✨ Features

- 🤖 **Local AI Inference** - Run LLMs locally via Ollama, LocalAI, and more
- 🛠️ **App Builder** - AI-powered app scaffolding and generation
- 🚀 **One-Click Deploy** - Deploy to Vercel, Netlify, Railway, Fly.io, Heroku, Docker
- 📦 **Model Management** - Download, cache, and manage 100+ ML models
- 🔌 **Extension System** - Sandboxed plugin system with marketplace
- 🔒 **Security** - Sandbox execution, encryption, audit logging
- 🖥️ **Desktop App** - Cross-platform Electron application
- 🌐 **Web App** - React frontend for browser use
- 🐍 **HF Space** - Gradio-based Hugging Face Space

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Contributing](./docs/CONTRIBUTING.md)
- [Model Catalog](./docs/MODEL_CATALOG.md)
- [Extension Development](./docs/EXTENSION_DEVELOPMENT.md)
- [Security Model](./docs/SECURITY_MODEL.md)
- [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)
- [API Reference](./packages/docs/API_REFERENCE.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)

## 🔧 Scripts

```bash
pnpm build          # Build all packages
pnpm dev            # Start development mode
pnpm test           # Run all tests
pnpm lint           # Lint all packages
pnpm build-web      # Build web app only
pnpm build-desktop  # Build desktop app
```

## 🤝 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Made with ❤️ by the HF Space team**
