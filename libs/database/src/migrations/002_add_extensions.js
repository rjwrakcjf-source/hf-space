exports.up = async (db) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS extensions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      version TEXT NOT NULL,
      installed INTEGER DEFAULT 0,
      enabled INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
};
exports.down = async (db) => { await db.exec('DROP TABLE IF EXISTS extensions;'); };
