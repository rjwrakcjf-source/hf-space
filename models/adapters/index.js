const { HuggingFaceAdapter } = require('./huggingface-adapter');
const { ONNXAdapter } = require('./onnx-adapter');
const { TensorFlowLiteAdapter } = require('./tensorflow-lite-adapter');
const { GGMLAdapter } = require('./ggml-adapter');

module.exports = { HuggingFaceAdapter, ONNXAdapter, TensorFlowLiteAdapter, GGMLAdapter };
