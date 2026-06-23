const { getDatabase } = require('../index');
class AuditLogModel {
  static async create(data) { return getDatabase().auditLog.create({ data }); }
  static async findById(id) { return getDatabase().auditLog.findUnique({ where: { id } }); }
  static async findAll(filter = {}) { return getDatabase().auditLog.findMany({ where: filter }); }
  static async update(id, data) { return getDatabase().auditLog.update({ where: { id }, data }); }
  static async delete(id) { return getDatabase().auditLog.delete({ where: { id } }); }
}
module.exports = { AuditLogModel };
