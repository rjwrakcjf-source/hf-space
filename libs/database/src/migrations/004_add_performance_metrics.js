exports.up = async (db) => {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS performance_metrics (
      id TEXT PRIMARY KEY,
      model_id TEXT,
      latency REAL,
      throughput REAL,
      memory_mb REAL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
};
exports.down = async (db) => { await db.exec('DROP TABLE IF EXISTS performance_metrics;'); };
