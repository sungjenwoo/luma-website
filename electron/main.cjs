const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("node:path");

const isDev = !app.isPackaged;

ipcMain.handle("luma:ping", () => "pong");

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1024,
    minHeight: 680,
    backgroundColor: "#e4e1de",
    title: "Luma Studio",
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  window.once("ready-to-show", () => window.show());
  window.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });

  const indexPath = path.join(__dirname, "..", "dist", "public", "index.html");
  window.loadFile(indexPath, { hash: "studio" });
  if (isDev) window.webContents.openDevTools({ mode: "detach" });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
