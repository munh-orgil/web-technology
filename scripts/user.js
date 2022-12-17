if (localStorage.username && (localStorage.username != null || localStorage.username != '')) {
    let Pic = document.getElementsByClassName('Pic')
    for (let i = 0; i < Pic.length; i++) {
        Pic[i].href = "/profile.html"
    }
    let User = document.getElementsByClassName('User')
    for (let i = 0; i < User.length; i++) {
        User[i].innerHTML = localStorage.username
        User[i].href = "/profile.html"
    }
} else {
    let User = document.getElementsByClassName('User')
    for (let i = 0; i < User.length; i++) {
        User[i].innerHTML = "Login"
        User[i].href = "/login.html"
    }
}

function Search() {
    text = document.getElementsByClassName("search_text")
    for (let i = 0; i < text.length; i++) {
        if (text[i].value != '' && text[i].value != null) {
            localStorage.Search = text[i].value
            break;
        }
    }
}
document.getElementById("Search").innerHTML = `Search results for "` + localStorage.Search + `"`