const { getDatabase } = require('../index');
class BuildModel {
  static async create(data) { return getDatabase().build.create({ data }); }
  static async findById(id) { return getDatabase().build.findUnique({ where: { id } }); }
  static async findAll(filter = {}) { return getDatabase().build.findMany({ where: filter }); }
  static async update(id, data) { return getDatabase().build.update({ where: { id }, data }); }
  static async delete(id) { return getDatabase().build.delete({ where: { id } }); }
}
module.exports = { BuildModel };
