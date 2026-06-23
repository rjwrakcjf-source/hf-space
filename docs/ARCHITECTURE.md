# Architecture Guide

## Overview

HF Space is a monorepo containing multiple applications and shared libraries for AI-powered app building and deployment.

## Monorepo Structure

```
hf-space/
├── apps/          # Deployable applications
├── libs/          # Shared libraries
├── packages/      # Config, scripts, templates
├── models/        # ML model catalog
├── runtime/       # Runtime data
├── security/      # Security configs
├── tests/         # Test suites
└── tools/         # Dev tools
```

## Key Design Principles

1. **Separation of Concerns** - Each library has a single responsibility
2. **Security First** - All untrusted code runs in sandboxes
3. **Offline Capable** - Local inference support
4. **Extensible** - Plugin system for community extensions

## Data Flow

```
User Input → Web UI → API Server → Core Builder → AI Agent → Code Generation
                                        ↓
                              Deployment Manager → Target Platform
```

## Technology Stack

- **Frontend**: React + Vite
- **Desktop**: Electron
- **Backend**: Express.js
- **Database**: SQLite (embedded) / PostgreSQL (production)
- **AI**: Multiple LLM providers + local inference
- **Build**: Turborepo + pnpm workspaces
