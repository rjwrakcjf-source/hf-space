function parseJSON(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

function safeStringify(obj, indent = 0) {
  try {
    return JSON.stringify(obj, null, indent);
  } catch {
    return String(obj);
  }
}

module.exports = { parseJSON, safeStringify };
