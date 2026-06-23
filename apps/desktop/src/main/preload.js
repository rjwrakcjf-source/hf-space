const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Server URL (embedded backend)
  getServerUrl: () => ipcRenderer.invoke('server:url'),

  // Build operations
  buildApp: (config) => ipcRenderer.invoke('build:start', config),
  onBuildProgress: (callback) => ipcRenderer.on('build:progress', (_, data) => callback(data)),

  // Model operations
  downloadModel: (modelId) => ipcRenderer.invoke('model:download', modelId),
  runInference: (modelId, input) => ipcRenderer.invoke('model:inference', modelId, input),
  listModels: () => ipcRenderer.invoke('model:list'),

  // Deployment
  deploy: (config) => ipcRenderer.invoke('deploy:start', config),

  // Extension operations
  installExtension: (id) => ipcRenderer.invoke('extension:install', id),
  listExtensions: () => ipcRenderer.invoke('extension:list'),

  // App info
  getVersion: () => ipcRenderer.invoke('app:version'),
  platform: process.platform,
});
