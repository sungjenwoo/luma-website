const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("lumaDesktop", {
  platform: process.platform,
  version: process.versions.electron,
  isDesktop: true,
  ping: () => ipcRenderer.invoke("luma:ping"),
});
