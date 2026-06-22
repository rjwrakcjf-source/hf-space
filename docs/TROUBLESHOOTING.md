# Troubleshooting

## Common Issues

### `pnpm install` fails

Make sure you have the correct Node.js version installed (18+):
```bash
node --version  # Should be v18+
```

### Build fails with out-of-memory error

Increase Node.js memory:
```bash
export NODE_OPTIONS=--max-old-space-size=4096
pnpm build
```

### Model download fails

Check your internet connection and HF_TOKEN:
```bash
export HF_TOKEN=your_token_here
hf-space model download gpt2
```

### Sandbox permission denied

Check the extension's manifest.json permissions.

## Getting Help

- GitHub Issues: https://github.com/rjwrakcjf-source/hf-space/issues
- Discussions: https://github.com/rjwrakcjf-source/hf-space/discussions
