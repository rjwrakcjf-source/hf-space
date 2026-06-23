const { getDatabase } = require('../index');
class ExtensionModel {
  static async create(data) { return getDatabase().extension.create({ data }); }
  static async findById(id) { return getDatabase().extension.findUnique({ where: { id } }); }
  static async findAll(filter = {}) { return getDatabase().extension.findMany({ where: filter }); }
  static async update(id, data) { return getDatabase().extension.update({ where: { id }, data }); }
  static async delete(id) { return getDatabase().extension.delete({ where: { id } }); }
}
module.exports = { ExtensionModel };
