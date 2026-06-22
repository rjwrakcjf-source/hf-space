const { getDatabase } = require('../index');
class ModelModel {
  static async create(data) { return getDatabase().model.create({ data }); }
  static async findById(id) { return getDatabase().model.findUnique({ where: { id } }); }
  static async findAll(filter = {}) { return getDatabase().model.findMany({ where: filter }); }
  static async update(id, data) { return getDatabase().model.update({ where: { id }, data }); }
  static async delete(id) { return getDatabase().model.delete({ where: { id } }); }
}
module.exports = { ModelModel };
