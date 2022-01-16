// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, dialog, Menu } = require('electron')
const path = require('path');
const fs = require('fs');
const isDev = require('electron-is-dev');
const { click } = require('@testing-library/user-event/dist/click');

const createWindow = () => {
  // Create the browser window.

  //Function to Open folder 
  const showFolderWindow = () => {
    const folderDir = dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
      filters:[{
        name: 'videos', extensions: ['mkv', 'avi', 'mp4','flv','webm']
      }]
    });
    
    if(!folderDir) return;
  }

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  const { app, Menu } = require('electron')

  const isMac = process.platform === 'darwin'

  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: 'Folder',
      submenu: [
        {
          label: 'Open Folder',
          accelerator: process.platform === 'darwin' ? 'Cmd+B' : 'Ctrl+B',
          click() {
            showFolderWindow();
          }
        },
        isMac ? { role: 'close' } : { role: 'quit' },
      ]
    },
    // { role: 'editMenu' }    
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


