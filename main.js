var Names =
    ["Me", "My Mother", "My Father", "My Brother","My GrandParents"];

var Images =
    ["http://127.0.0.1:5500/Me%20Clipart.png",
        "http://127.0.0.1:5500/Mom%20Clipart.jpeg",
        "http://127.0.0.1:5500/Dad%20Clipart.jpeg",
        "http://127.0.0.1:5500/Brother%20Clipart.jpeg",
        "http://127.0.0.1:5500/Grandparents.png"];

var i = 0;
function Update() {
    i++;
    if (i > 4) {
        i = 0;
    }
    var NewImage = Images[i];
    var NewName = Names[i];
    document.getElementById("Picture").src = NewImage;
    document.getElementById("Relation").innerHTML = NewName;
}