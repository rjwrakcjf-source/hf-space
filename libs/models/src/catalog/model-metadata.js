function normalizeMetadata(raw) {
  return {
    id: raw.id || raw.modelId,
    name: raw.name || raw.id,
    type: raw.type || raw.task || 'unknown',
    description: raw.description || '',
    license: raw.license || 'unknown',
    size: raw.size || null,
    tags: raw.tags || [],
    url: raw.url || `https://huggingface.co/${raw.id}`,
    capabilities: raw.capabilities || [],
  };
}

module.exports = { normalizeMetadata };
