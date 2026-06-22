# Extension Development Guide

Build extensions for HF Space.

## Extension Structure

```
my-extension/
├── package.json
├── manifest.json
├── src/
│   └── index.js
└── README.md
```

## manifest.json

```json
{
  "id": "my-extension",
  "name": "My Extension",
  "version": "1.0.0",
  "main": "src/index.js",
  "permissions": ["storage", "network"],
  "contributes": {
    "commands": [
      { "id": "my-extension.hello", "title": "Hello World" }
    ]
  }
}
```

## Publishing

```bash
hf-space extension publish
```
