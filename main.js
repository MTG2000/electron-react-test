const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { app, BrowserWindow } = electron;

let mainWindow;
let contents;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 780,
    webPreferences: { nodeIntegration: true, devTools: isDev }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "client/build/index.html")}`
  );
  contents = mainWindow.webContents;
  contents.openDevTools();
  mainWindow.on("closed", () => (mainWindow = null));
  //Loading Controllers
  require("./api/controllers")(mainWindow);
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
