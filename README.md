# HF Space - Electron Desktop App

A powerful desktop application built with Electron that brings AI model inference, app building, and deployment capabilities to your desktop. Built entirely on Hugging Face models and infrastructure.

## 🚀 Quick Start

### Download

Get the latest release for your operating system:

- **Windows**: [Download .exe](https://github.com/rjwrakcjf-source/hf-space/releases) (Windows 7+)
- **macOS**: [Download .dmg](https://github.com/rjwrakcjf-source/hf-space/releases) (macOS 10.13+)
- **Linux**: [Download .AppImage](https://github.com/rjwrakcjf-source/hf-space/releases) (Ubuntu 18+)

### Installation

1. Download the installer for your OS from [Releases](https://github.com/rjwrakcjf-source/hf-space/releases)
2. Run the installer
3. Launch the application from your Applications menu
4. The app will auto-update when new versions are available

## ✨ Features

- 🤖 **Local AI Inference** - Run LLMs, image models, and more locally
- 🛠️ **App Builder** - Generate and scaffold applications with AI assistance
- 🚀 **One-Click Deploy** - Deploy to Vercel, Netlify, Railway, and more
- 📦 **Model Management** - Download, cache, and manage ML models
- 🔌 **Extension System** - Extend functionality with community plugins
- 🔒 **Secure Sandbox** - Run untrusted code safely
- 🎨 **Beautiful UI** - Built with React for a modern experience

## 📋 System Requirements

### Minimum
- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 2GB free space
- **OS**: Windows 7+, macOS 10.13+, Ubuntu 18.04+

### Recommended
- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 10GB+ (for model downloads)
- **GPU**: Optional (NVIDIA/AMD for faster inference)

## 🏗️ Architecture

```
hf-space/
├── apps/
│   ├── desktop/          # Electron main process
│   ├── web/              # React UI
│   ├── server/           # Backend API
│   └── cli/              # Command-line interface
├── libs/
│   ├── api/              # API routes & middleware
│   ├── core/             # Business logic
│   ├── models/           # Model management
│   ├── ai/               # AI/LLM integration
│   ├── extensions/       # Extension system
│   ├── security/         # Security & sandbox
│   └── database/         # Data persistence
└── models/               # ML model catalog
```

## 🔨 Development

### Prerequisites
- Node.js 18+
- pnpm 8+
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/rjwrakcjf-source/hf-space.git
cd hf-space

# Install dependencies
pnpm install

# Build the web app
pnpm build --filter=web

# Run desktop app in development
pnpm dev --filter=desktop

# Build desktop app for all platforms
pnpm build-desktop
```

### Project Structure

- **apps/desktop** - Electron main/preload/ipc handlers
- **apps/web** - React web application (shared with desktop)
- **libs/core** - Core builders, deployers, model management
- **libs/models** - ML model catalog and inference engine
- **libs/ai** - LLM providers and AI agents

## 📦 Building

Builds are automatically created by GitHub Actions on every push to `main`.

### Manual Build

```bash
# Build for all platforms
pnpm build-desktop

# Build for specific platform
pnpm build-desktop -- --linux
pnpm build-desktop -- --win
pnpm build-desktop -- --mac
```

Built files are in `apps/desktop/dist/`

## 🔄 Auto-Updates

The desktop app automatically checks for updates on startup. When a new version is available, users are prompted to download and install it.

Update manifest is hosted on GitHub Releases.

## 📖 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Model Catalog](./docs/MODEL_CATALOG.md)
- [Extension Development](./docs/EXTENSION_DEVELOPMENT.md)
- [Security Model](./docs/SECURITY_MODEL.md)
- [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)
- [API Reference](./docs/API_REFERENCE.md)

## 🔐 Security

- All extensions run in isolated sandboxes
- Network policies enforced
- Code signing for releases
- Regular security audits
- No telemetry or data collection

See [SECURITY_MODEL.md](./docs/SECURITY_MODEL.md) for details.

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- UI powered by [React](https://react.dev/)
- Models from [Hugging Face Hub](https://huggingface.co/)
- Inference with [Transformers.js](https://xenova.github.io/transformers.js/)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/rjwrakcjf-source/hf-space/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rjwrakcjf-source/hf-space/discussions)
- **Documentation**: [docs/](./docs/)

---

**Made with ❤️ by the HF Space team**
