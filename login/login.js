function Validate() {
    let username = document.getElementById("username").value

    let ret = true

    if (username == "") {
        document.getElementById("error_username").innerHTML = "Username is required"
        ret = false
    }
    if (username) {
        document.getElementById("error_username").innerHTML = "User not found"
        ret = false;
    }

    let password = document.getElementById("password").value

    if (password == "") {
        document.getElementById("error_password").innerHTML = "Password is required"
        ret = false;
    }
    if (password) {
        document.getElementById("error_password").innerHTML = "Wrong password"
        ret = false;
    }
    return ret
}