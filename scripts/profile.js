document.getElementById('username').innerHTML = localStorage.Username
document.getElementById('profile_fname').innerHTML = localStorage.Fname
document.getElementById('profile_lname').innerHTML = localStorage.Lname
document.getElementById('profile_bday').innerHTML = localStorage.Bday
document.getElementById('profile_gender').innerHTML = localStorage.Gender

document.getElementById('profile_email').innerHTML = localStorage.Email
document.getElementById('profile_phone').innerHTML = localStorage.Phone
document.getElementById('profile_address').innerHTML = localStorage.Address

function LogOut() {
    localStorage.Username = ''
}
