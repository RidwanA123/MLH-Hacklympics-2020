const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')


let win

function createWindow() {
    win = new BrowserWindow({ width: 1000, height: 800, frame: false});
    
    
        
     
        
     
   
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    
    setTimeout(() => { win.setProgressBar(10) }, 3000) 
}

app.on('ready', createWindow)
