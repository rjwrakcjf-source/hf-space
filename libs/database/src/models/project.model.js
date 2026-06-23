const { getDatabase } = require('../index');
class ProjectModel {
  static async create(data) { return getDatabase().project.create({ data }); }
  static async findById(id) { return getDatabase().project.findUnique({ where: { id } }); }
  static async findAll(filter = {}) { return getDatabase().project.findMany({ where: filter }); }
  static async update(id, data) { return getDatabase().project.update({ where: { id }, data }); }
  static async delete(id) { return getDatabase().project.delete({ where: { id } }); }
}
module.exports = { ProjectModel };
