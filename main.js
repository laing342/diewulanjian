const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1024,
    height: 640,
    resizable: true,
    fullscreenable: true,
    title: '蝶舞岚间',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.setMinimumSize(640, 400);
  win.loadFile('index.html');
  win.setTitle('蝶舞岚间 - 送给蝶蝶');
});

app.on('window-all-closed', () => app.quit());
