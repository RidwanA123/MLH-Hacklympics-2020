appicon = "../bin/Logo.png" //Icon 

const customTitlebar = require('custom-electron-titlebar'); //electron titlebar

let MyTitleBar = new customTitlebar.Titlebar({    //titlebar properties
    backgroundColor: customTitlebar.Color.fromHex('#03a9f4'),
    shadow: true,
    icon: appicon
});

MyTitleBar.updateTitle('SportChat'); //titlebar name
MyTitleBar.setHorizontalAlignment('left');
