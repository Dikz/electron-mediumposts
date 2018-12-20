const { BrowserWindow } = require('electron').remote;

exports.basic = () => {
  $('#min').click(() => {
    BrowserWindow.getFocusedWindow().minimize();
  });
  $('#max').click(() => {
    BrowserWindow.getFocusedWindow().isMaximized()
      ? BrowserWindow.getFocusedWindow().restore()
      : BrowserWindow.getFocusedWindow().maximize();
  });
  $('#close').click(() => {
    BrowserWindow.getFocusedWindow().close();
  });
};
