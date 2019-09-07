const { ipcMain } = require("electron");
const { getAll } = require("../services/products.service");

module.exports = ({ webContents: contents }) => {
  ipcMain.on("getProducts", () => {
    contents.send("data", getAll());
  });
};
