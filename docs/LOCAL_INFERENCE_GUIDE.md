# Local Inference Guide

See [packages/docs/LOCAL_INFERENCE.md](../packages/docs/LOCAL_INFERENCE.md) for full documentation.

## Quick Start

```bash
# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a model
ollama pull llama3

# Configure HF Space to use Ollama
export OLLAMA_BASE_URL=http://localhost:11434
```
