"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function()
{
  if (process.platform != 'darwin')
  {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function()
{
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({width: 800, height: 700, minWidth: 800,
    maxWidth: 800, minHeight: 700, maxHeight: 700, center: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});//
