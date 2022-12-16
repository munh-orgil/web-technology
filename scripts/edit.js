document.getElementById('fname').value = localStorage.Fname
document.getElementById('lname').value = localStorage.Lname
document.getElementById('bday').value = localStorage.Bday
document.getElementById('gender').value = localStorage.Gender

document.getElementById('email').value = localStorage.Email
document.getElementById('phone').value = localStorage.Phone
document.getElementById('address').value = localStorage.Address

function Basic() {
    localStorage.Fname = document.getElementById("fname").value
    localStorage.Lname = document.getElementById("lname").value
    localStorage.Bday = document.getElementById("bday").value
    localStorage.Gender = document.getElementById("gender").value
}

function Contact() {
    localStorage.Email = document.getElementById("email").value
    localStorage.Phone = document.getElementById("phone").value
    localStorage.Address = document.getElementById("address").value
}

function Password() {
    var Old = document.getElementById("old").value;
    var New = document.getElementById("new").value;
    var Rep = document.getElementById("rep").value;
    if(localStorage.Password != Old) {
        document.getElementById("error").innerHTML = "*Old Password is wrong"
        return false
    }
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)/
    if (New.match(pattern) == null) {
        document.getElementById("error").innerHTML = "*Password must include at least a letter and a number"
        return false
    } 
    if (New != Rep) {
        document.getElementById("error").innerHTML = "*Repeat Password is wrong"
        return false
    } 
    document.getElementById("error").innerHTML = ""
    localStorage.Password = New
    return true
}