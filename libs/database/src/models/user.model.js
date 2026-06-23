const { getDatabase } = require('../index');

class UserModel {
  static async create(data) {
    const db = getDatabase();
    return db.user.create({ data });
  }
  static async findById(id) {
    const db = getDatabase();
    return db.user.findUnique({ where: { id } });
  }
  static async findByEmail(email) {
    const db = getDatabase();
    return db.user.findUnique({ where: { email } });
  }
  static async update(id, data) {
    const db = getDatabase();
    return db.user.update({ where: { id }, data });
  }
  static async delete(id) {
    const db = getDatabase();
    return db.user.delete({ where: { id } });
  }
}

module.exports = { UserModel };
