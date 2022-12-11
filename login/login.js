function Validate() {
    // alert(document.getElementById("username").value)
    if (document.getElementById("username").value == "") {
        document.getElementById("error_username").innerHTML = "Username is required"
    }
}