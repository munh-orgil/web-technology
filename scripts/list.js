load('DVD.json', 0, 'dvd')
load('Blu-Ray.json', 0, 'blu-ray')
load('CD.json', 0, 'cd')
load('DVD.json', 1, 'home_dvd')
load('Blu-Ray.json', 1, 'home_blu-ray')
load('CD.json', 1, 'home_cd')
load('DVD.json', 2, 'search_dvd')
load('Blu-Ray.json', 2, 'search_blu-ray')
load('CD.json', 2, 'search_cd')

function load(url, path, direction) {
    let ajax = new XMLHttpRequest();
    ajax.open('get', url, true);
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4) {
            let content = JSON.parse(ajax.responseText);
            console.log(content)
            if (path == 2) {
                content = content.filter(function (entry) {
                    return entry.title.toLowerCase() == localStorage.Search.toLowerCase()
                })
            }
            let len = Object.keys(content).length;
            let arr = url.split(".");
            let type = arr[0]
            let html = "";
            let Open = `<tr class="cl">`
            let Close = `</tr>`
            if (path) {
                len = Math.min(len, 5);
                Open = ""
                Close = ""
            }
            rep = Math.floor(len / 5) + 1;
            r = len % 5;
            
            if (!path) {
                html='<tr><td></td><td></td><td></td><td></td><td></td></tr>'
                let h = Math.ceil(len / 5)
                document.getElementById(type + "_wrapper").style.height = h * 350 + 100 +"px";
            }
            
            for (let i = 0; i < rep - 1; i++) {
                html += Open
                for (let j = 0; j < 5; j++) {
                    html += "<td>\n"
                    html += "<div>\n"
                    html += `<a href="watch.html"><img class="content_img" src=` + content[i * 5 + j].image + `></a>\n`;
                    html += `<p class="content_type">` + type + `</p>\n`
                    html += `<p class="content_title">` + content[i * 5 + j].title + `</p>\n`
                    html += `<p class="content_year">` + content[i * 5 + j].year + `</p>\n`
                    html += `<p class="content_duration">` + content[i * 5 + j].duration + `</p>\n`
                    html += `<p class="content_genre">` + content[i * 5 + j].genre + `</p>\n`
                    html += `<p class="content_IMDB">IMDB:` + content[i * 5 + j].imdb + `</p>\n`
                    html += `<p class="content_cost">` + content[i * 5 + j].cost + `</p>\n`
                    html += "</div>\n"
                    html += "</td>\n"
                }
                html += Close
            }
            if (r) {
                html += Open
                for (let j = 0; j < r; j++) {
                    html += "<td>\n"
                    html += "<div>\n"
                    html += `<a href="watch.html"><img class="content_img" src=` + content[(rep - 1) * 5 + j].image + `></a>\n`;
                    html += `<p class="content_type">` + type + `</p>\n`
                    html += `<p class="content_title">` + content[(rep - 1) * 5 + j].title + `</p>\n`
                    html += `<p class="content_year">` + content[(rep - 1) * 5 + j].year + `</p>\n`
                    html += `<p class="content_duration">` + content[(rep - 1) * 5 + j].duration + `</p>\n`
                    html += `<p class="content_genre">` + content[(rep - 1) * 5 + j].genre + `</p>\n`
                    html += `<p class="content_IMDB">IMDB:` + content[(rep - 1) * 5 + j].imdb + `</p>\n`
                    html += `<p class="content_cost">` + content[(rep - 1) * 5 + j].cost + `</p>\n`
                    html += "</div>\n"
                    html += "</td>\n"
                }
                html += Close
            }
            document.getElementById(direction).innerHTML = html
        }
    }
    ajax.send();
}