module.exports = {
  providers: {
    openai: { enabled: !!process.env.OPENAI_API_KEY, defaultModel: 'gpt-4o' },
    anthropic: { enabled: !!process.env.ANTHROPIC_API_KEY, defaultModel: 'claude-3-5-sonnet-20241022' },
    huggingface: { enabled: !!process.env.HF_TOKEN, defaultModel: 'microsoft/DialoGPT-medium' },
    ollama: { enabled: true, baseUrl: 'http://localhost:11434', defaultModel: 'llama3' },
    groq: { enabled: !!process.env.GROQ_API_KEY, defaultModel: 'llama3-8b-8192' },
  },
  fallbackChain: ['openai', 'anthropic', 'groq', 'ollama', 'huggingface'],
};
