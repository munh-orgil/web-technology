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