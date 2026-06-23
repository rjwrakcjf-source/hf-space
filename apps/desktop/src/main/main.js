const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { setupAutoUpdate } = require('./auto-update');
const { registerIpcHandlers } = require('./ipc-handlers');
const { startEmbeddedServer, stopEmbeddedServer } = require('./embedded-server');

let mainWindow;
let embeddedServerPort = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
    show: false,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../../dist/index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.whenReady().then(async () => {
  // Start embedded Express server before opening the window
  try {
    const { port } = await startEmbeddedServer();
    embeddedServerPort = port;
  } catch (err) {
    console.error('[main] Failed to start embedded server:', err);
  }

  registerIpcHandlers(embeddedServerPort);
  createWindow();
  setupAutoUpdate();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', async () => {
  await stopEmbeddedServer();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
