const { getDatabase } = require('../index');
class DeploymentModel {
  static async create(data) { return getDatabase().deployment.create({ data }); }
  static async findById(id) { return getDatabase().deployment.findUnique({ where: { id } }); }
  static async findAll(filter = {}) { return getDatabase().deployment.findMany({ where: filter }); }
  static async update(id, data) { return getDatabase().deployment.update({ where: { id }, data }); }
  static async delete(id) { return getDatabase().deployment.delete({ where: { id } }); }
}
module.exports = { DeploymentModel };
