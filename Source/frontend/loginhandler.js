

appicon = "../bin/Logo.png" //Icon

const customTitlebar = require('custom-electron-titlebar'); //electron titlebar

let MyTitleBar = new customTitlebar.Titlebar({    //titlebar properties
    backgroundColor: customTitlebar.Color.fromHex('#03a9f4'),
    shadow: true,
    icon: appicon
});

MyTitleBar.updateTitle('SportChat'); //titlebar name
MyTitleBar.setHorizontalAlignment('left');
function text() {                      //login
    
}

function showsignup() {
    document.getElementById("newuser").type = "text"
    document.getElementById("newpass").type = "password"
    document.getElementById("submit").hidden = false
    document.getElementById("signuplink").hidden = true
    document.getElementById("username").type = "hidden"
    document.getElementById("Password").type = "hidden"
    document.getElementById("sign in").hidden = true
    document.getElementById("logintext").hidden = true
    document.getElementById("signuptext").hidden = false
    document.getElementById("signinpage").hidden = false
}
function backtologin() {
    document.getElementById("newuser").type = "hidden"
    document.getElementById("newpass").type = "hidden"
    document.getElementById("submit").hidden = true
    document.getElementById("signuplink").hidden = false
    document.getElementById("username").type = "text"
    document.getElementById("Password").type = "password"
    document.getElementById("sign in").hidden = false
    document.getElementById("logintext").hidden = false
    document.getElementById("signuptext").hidden = true
    document.getElementById("signinpage").hidden = true

}

function sendserver() {


}

