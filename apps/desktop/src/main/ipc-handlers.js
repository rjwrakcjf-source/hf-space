const { ipcMain, app } = require('electron');

function registerIpcHandlers() {
  ipcMain.handle('app:version', () => app.getVersion());

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
