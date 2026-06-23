const { PrismaClient } = require('@prisma/client');

let prisma;

function getDatabase() {
  if (!prisma) {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL || 'file:./runtime/sqlite/embedded.db',
        },
      },
    });
  }
  return prisma;
}

module.exports = { getDatabase };
