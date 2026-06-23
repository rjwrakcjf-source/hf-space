class ComplexityDetector {
  async analyze(description) {
    const indicators = {
      hasDatabase: /database|db|storage|persist/i.test(description),
      hasAuth: /auth|login|user|session/i.test(description),
      hasAPI: /api|rest|endpoint|server/i.test(description),
      hasRealtime: /realtime|websocket|live|socket/i.test(description),
      hasML: /ai|ml|model|inference|predict/i.test(description),
    };
    const score = Object.values(indicators).filter(Boolean).length / Object.keys(indicators).length;
    return { score, indicators };
  }
}

module.exports = { ComplexityDetector };
