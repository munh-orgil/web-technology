function Validate() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let rep_password = document.getElementById("rep_password").value
    let username_len = username.length
    let password_len = password.length

    let ret = true

    
    if (username_len < 6 || username_len > 30) {
        document.getElementById("error_username").innerHTML = "Username consists of 6 to 30 characters"
        ret = false;
    } else {
        var pattern = /\W/
        if (username.match(pattern) != null) {
            document.getElementById("error_username").innerHTML = "Username can only contain characters and underscores"
            ret = false;
        } else {
            document.getElementById("error_username").innerHTML = ""
        }
    }

    if (password_len < 8) {
        document.getElementById("error_password").innerHTML = "Password must include at least 8 characters"
        ret = false;
    } else {
        var pattern = /^(?=.*[A-Za-z])(?=.*\d)/
        if (password.match(pattern) == null) {
            document.getElementById("error_password").innerHTML = "Password must include at least a letter and a number"
            ret = false;
        } else {
            document.getElementById("error_password").innerHTML = ""
        }
    }

    if (rep_password != password) {
        document.getElementById("error_rep_password").innerHTML = "The passwords do not match"
        ret = false;
    } else {
        document.getElementById("error_rep_password").innerHTML = ""
    }
    return ret
}