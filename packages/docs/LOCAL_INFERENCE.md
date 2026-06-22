# Local Inference Guide

Run AI models locally with HF Space.

## Prerequisites

- Node.js 18+
- 4GB+ RAM (8GB+ for larger models)

## Quick Start

```bash
# Download a model
hf-space model download microsoft/DialoGPT-medium

# Run inference
hf-space model infer --model microsoft/DialoGPT-medium --input "Hello!"
```

## Supported Backends

- Transformers.js (browser/Node.js)
- Ollama (local server)
- LocalAI (OpenAI-compatible)
- ONNX Runtime

## Performance Tips

- Use quantized models (Q4_0) for faster inference
- Enable GPU if available
- Use the model router for automatic model selection
