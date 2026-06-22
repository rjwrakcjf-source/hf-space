const { OpenAIProvider } = require('./providers/openai-provider');
const { AnthropicProvider } = require('./providers/anthropic-provider');
const { HuggingFaceProvider } = require('./providers/huggingface-provider');
const { OllamaProvider } = require('./providers/ollama-provider');
const { GroqProvider } = require('./providers/groq-provider');
const { BuilderAgent } = require('./agents/builder-agent');
const { CodeAgent } = require('./agents/code-agent');
const { DeploymentAgent } = require('./agents/deployment-agent');

module.exports = {
  providers: { OpenAIProvider, AnthropicProvider, HuggingFaceProvider, OllamaProvider, GroqProvider },
  agents: { BuilderAgent, CodeAgent, DeploymentAgent },
};
