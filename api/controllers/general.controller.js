const { ipcMain, dialog } = require("electron");

module.exports = async win => {
  ipcMain.on("msg", (_, message) => {
    console.log(message);
    dialog
      .showMessageBox(win, {
        title: "Message Sent",
        message: "Message Sent Successfuly ",
        type: "info",
        detail: `your message has been sent successfuly ${message.name}, and we will respond to you as soon as we can`
      })
      .then(() => {
        win.webContents.send("data", { success: true });
      });
  });
};
