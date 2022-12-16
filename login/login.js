function Validate() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var ajax = new XMLHttpRequest();
    ajax.open('get', 'users.json', true);
    ajax.onreadystatechange = function() {
    
        var ret = true
    
        if (username == "") {
            document.getElementById("error_username").innerHTML = "Username is required"
            ret = false
        }
        if (password == "") {
            document.getElementById("error_password").innerHTML = "Password is required"
            ret = false;
        }
        if(!ret) return false
        if(ajax.readyState == 4) {
            var user = JSON.parse(ajax.responseText);
            var len = Object.keys(user).length;
            var found = 0, success = 0;
            for (var i = 0; i < len; i++) {
                if (user[i].username == username) {
                    found = 1;
                    if (user[i].password == password) {
                        success = 1;
                    }
                    i = len;
                }
            }
            
            if (!found) {
                document.getElementById("error_username").innerHTML = "User not found";
                ret = false;
            }

            if (!success) {
                document.getElementById("error_password").innerHTML = "Wrong password";
                ret = false;
            }
        }
        
    }
    ajax.send();
    return ret
}