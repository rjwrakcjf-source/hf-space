const { z } = require('zod');

const validators = {
  isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
  isUrl: (str) => { try { new URL(str); return true; } catch { return false; } },
  isUUID: (str) => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str),
  isVersion: (str) => /^\d+\.\d+\.\d+/.test(str),
  
  schemas: {
    email: z.string().email(),
    id: z.string().cuid(),
    version: z.string().regex(/^\d+\.\d+\.\d+/),
  },
};

module.exports = { validators };
