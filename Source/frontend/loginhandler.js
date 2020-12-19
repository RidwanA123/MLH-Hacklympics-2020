

var x = 0;



function text() {
    document.getElementById("boomer").innerHTML = "Username recieved is " + document.getElementById("username").value; 
}

function showsignup() {
    document.getElementById("newuser").type = "text"
    document.getElementById("newpass").type = "password"
    document.getElementById("submit").hidden = false
    document.getElementById("signuplink").innerHTML = ""
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
    document.getElementById("signuplink").innerHTML = "Don't have an account?"
    document.getElementById("username").type = "text"
    document.getElementById("Password").type = "password"
    document.getElementById("sign in").hidden = false
    document.getElementById("logintext").hidden = false
    document.getElementById("signuptext").hidden = true
    document.getElementById("signinpage").hidden = true

}

function sendserver() {


}

