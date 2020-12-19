const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')


let win

function createWindow() {
    win = new BrowserWindow({ width: 900, height: 600, titleBarStyle: 'hidden' });
    
    
        
     
        
     
   
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    
    setTimeout(() => { win.setProgressBar(10) }, 3000) 
}

app.on('ready', createWindow)