const remember = document.getElementById("remember"),
    uname = document.getElementById("username");


if (localStorage.checkbox && localStorage.checkbox !== "") {
    remember.setAttribute("checked", "checked");
    uname.value = localStorage.Username;
} else {
    remember.removeAttribute("checked");
    uname.value = "";
}

function Validate() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let ajax = new XMLHttpRequest();
    
    ajax.open('get', 'users.json', true);
    ajax.send();
    ajax.onreadystatechange = function() {
        let res = true
        if (username == "") {
            document.getElementById("error_username").innerHTML = "Username is required"
            res = false
        } else {
            document.getElementById("error_username").innerHTML = ""
        }
        if (password == "") {
            document.getElementById("error_password").innerHTML = "Password is required"
            res = false
        } else {
            document.getElementById("error_password").innerHTML = ""
        }
        if (!res) {
            return
        }
        if(ajax.readyState == 4) {
            let user = JSON.parse(ajax.responseText);
            let len = Object.keys(user).length;
            let found = 0, success = 0;
            for (let i = 0; i < len; i++) {
                if (user[i].username == username) {
                    found = 1;
                    if (user[i].password == password) {
                        success = 1;
                    }
                    break;
                }
            }
            
            if (!found) {
                document.getElementById("error_username").innerHTML = "User not found";
                return
            } else {
                document.getElementById("error_username").innerHTML = ""
            }

            if (!success) {
                document.getElementById("error_password").innerHTML = "Wrong password";
                return
            } else {
                document.getElementById("error_password").innerHTML = ""
            }

            localStorage.username = username
            localStorage.Password = password
            if (remember.checked && uname.value !== "") {
                localStorage.Username = uname.value;
                localStorage.checkbox = remember.value;
            } else {
                localStorage.Username = "";
                localStorage.checkbox = "";
            }
            window.location.replace("/home.html");
        }
    }
}