const catalog = require('../../../../models/catalog.json');

class ModelCatalog {
  constructor() {
    this.models = catalog.models || [];
  }

  getAll() { return this.models; }
  
  getById(id) { return this.models.find(m => m.id === id) || null; }
  
  getByCategory(category) {
    return this.models.filter(m => m.category === category);
  }
  
  search(query) {
    const q = query.toLowerCase();
    return this.models.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.description?.toLowerCase().includes(q)
    );
  }
}

module.exports = { ModelCatalog };
