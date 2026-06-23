exports.up = async (db) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS models (
      id TEXT PRIMARY KEY,
      model_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      type TEXT,
      cached INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
};
exports.down = async (db) => { await db.exec('DROP TABLE IF EXISTS models;'); };
