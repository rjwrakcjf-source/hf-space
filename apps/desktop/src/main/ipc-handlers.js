const { ipcMain, app } = require('electron');

function registerIpcHandlers(embeddedServerPort) {
  ipcMain.handle('app:version', () => app.getVersion());

  // Expose the embedded server's base URL so the renderer can reach the API
  ipcMain.handle('server:url', () => {
    if (embeddedServerPort) {
      return `http://127.0.0.1:${embeddedServerPort}`;
    }
    return null;
  });

  ipcMain.handle('build:start', async (event, config) => {
    // Build logic delegated to @hf-space/core
    return { success: true, buildId: Date.now().toString() };
  });

  ipcMain.handle('model:list', async () => {
    return { models: [], cached: [] };
  });

  ipcMain.handle('model:download', async (event, modelId) => {
    return { success: true, modelId };
  });

  ipcMain.handle('model:inference', async (event, modelId, input) => {
    return { success: true, output: null };
  });

  ipcMain.handle('deploy:start', async (event, config) => {
    return { success: true, deployId: Date.now().toString() };
  });

  ipcMain.handle('extension:list', async () => {
    return { extensions: [] };
  });

  ipcMain.handle('extension:install', async (event, id) => {
    return { success: true, id };
  });
}

module.exports = { registerIpcHandlers };
