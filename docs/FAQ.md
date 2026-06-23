# Frequently Asked Questions

## General

**Q: Is HF Space free?**
A: Yes, the core is open source under MIT license.

**Q: What AI models are supported?**
A: See the Model Catalog for the complete list.

## Desktop App

**Q: Does it work offline?**
A: Yes, with locally downloaded models.

**Q: Which OS are supported?**
A: Windows, macOS, and Linux.

## Development

**Q: How do I add a new deployment platform?**
A: Create a new deployer in `libs/core/src/deployment/` extending the base pattern.

**Q: How do I create an extension?**
A: See the Extension Development guide.

## Models

**Q: How are models stored?**
A: Models are cached in `runtime/cache/models/`.

**Q: Can I use private models?**
A: Yes, set your `HF_TOKEN` environment variable.
