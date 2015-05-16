"use strict";

import app from "app";
import BrowserWindow from "browser-window";
import Menu from "menu";
import CrashReporter from "crash-reporter";

import path from "path";

import MainMenuTemplate from "./MainMenuTemplate";
import SubMenuTemplate from "./SubMenuTemplate";

CrashReporter.start();

var mainWindow = null;
let filePath = "file://" + path.join(__dirname, "..") + "/";


function createMenu() {
  let quit = new SubMenuTemplate("Quit", "Command+Q", () => { app.quit(); });
  let reload = new SubMenuTemplate("Reload", "Command+R", () => { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); });

  let AppMenu = new MainMenuTemplate("ReadUs", [quit]);
  let ViewMenu = new MainMenuTemplate("View", [reload]);

  return [AppMenu, ViewMenu];
}


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  let menu = Menu.buildFromTemplate(createMenu());
  Menu.setApplicationMenu(menu);

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // mainWindow.loadUrl("https://github.com");
  mainWindow.loadUrl(filePath + "index.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
