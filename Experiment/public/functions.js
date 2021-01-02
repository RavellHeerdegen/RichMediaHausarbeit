function showHideButton(text) {
    var x = document.getElementById(text);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showHideButtonOpacity(text) {
    var x = document.getElementById(text);
    if (x.style.opacity == 0) {
        x.style.opacity = 100;
        x.style.display = "block";
    } else {
        x.style.opacity = 0;
        x.style.display = "none";
    }
}