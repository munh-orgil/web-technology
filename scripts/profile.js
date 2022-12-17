if (localStorage.Username) {
    document.getElementById('username').innerHTML = localStorage.Username
}
if (localStorage.Fname) {
    document.getElementById('profile_fname').innerHTML = localStorage.Fname
}
if (localStorage.Lname) {
    document.getElementById('profile_lname').innerHTML = localStorage.Lname
}
if (localStorage.Bday) {
    document.getElementById('profile_bday').innerHTML = localStorage.Bday
}
if (localStorage.Gender) {
    document.getElementById('profile_gender').innerHTML = localStorage.Gender
}

if (localStorage.Email) {
    document.getElementById('profile_email').innerHTML = localStorage.Email
}
if (localStorage.Phone) {
    document.getElementById('profile_phone').innerHTML = localStorage.Phone
}
if (localStorage.Address) {
    document.getElementById('profile_address').innerHTML = localStorage.Address
}


function LogOut() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
}
