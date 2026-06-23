'use strict';

const express = require('express');
const cors = require('cors');
const http = require('http');
const net = require('net');

let serverInstance = null;
let serverPort = null;

/**
 * Find a free TCP port starting from `start`.
 * @param {number} start - Preferred starting port.
 * @returns {Promise<number>}
 */
function findFreePort(start = 3000) {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on('error', () => {
      findFreePort(start + 1).then(resolve, reject);
    });
    srv.listen(start, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

/**
 * Start the embedded Express server that provides the backend API
 * inside the packaged Electron app.
 *
 * @returns {Promise<{port: number, server: http.Server}>}
 */
async function startEmbeddedServer() {
  if (serverInstance) {
    return { port: serverPort, server: serverInstance };
  }

  const app = express();

  // Allow requests from the Electron renderer (file:// origin or localhost dev server)
  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      embedded: true,
      timestamp: new Date().toISOString(),
    });
  });

  // Mount the full API router when available (workspace package)
  try {
    const { apiRouter } = require('@hf-space/api');
    app.use('/api', apiRouter);
    console.log('[embedded-server] Full API router loaded');
  } catch (err) {
    console.warn('[embedded-server] API router unavailable, using stub routes:', err.message);

    // Minimal stub router so the app still starts without the full API lib
    const stub = express.Router();
    stub.get('/status', (req, res) =>
      res.json({ status: 'embedded-stub', offline: true })
    );
    app.use('/api', stub);
  }

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({ error: { message: 'Not found' } });
  });

  // Global error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error('[embedded-server]', err.stack || err.message);
    res.status(err.status || 500).json({
      error: { message: err.message || 'Internal Server Error' },
    });
  });

  const port = await findFreePort(3000);

  return new Promise((resolve, reject) => {
    serverInstance = http.createServer(app);
    serverInstance.listen(port, '127.0.0.1', () => {
      serverPort = port;
      console.log(`[embedded-server] Listening on http://127.0.0.1:${port}`);
      resolve({ port, server: serverInstance });
    });
    serverInstance.on('error', (err) => {
      serverInstance = null;
      serverPort = null;
      reject(err);
    });
  });
}

/**
 * Gracefully shut down the embedded server.
 * @returns {Promise<void>}
 */
function stopEmbeddedServer() {
  return new Promise((resolve) => {
    if (!serverInstance) {
      resolve();
      return;
    }
    serverInstance.close(() => {
      serverInstance = null;
      serverPort = null;
      console.log('[embedded-server] Stopped');
      resolve();
    });
  });
}

/** Return the port the server is currently listening on, or null. */
function getServerPort() {
  return serverPort;
}

module.exports = { startEmbeddedServer, stopEmbeddedServer, getServerPort };
