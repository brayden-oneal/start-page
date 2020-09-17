window.onload = function() {
    document.getElementById("search-field").focus();
}

function toggleVisibility(id) {
    var elem = document.getElementById(id);
    var input = document.getElementById("search-field");
    if (elem.style.opacity === "1" & input.value === "") {
        elem.style.pointerEvents = "none";
        elem.style.opacity = "0";
    } else {
        elem.style.pointerEvents = "auto";
        elem.style.opacity = "1";
    }
}

function checkEmpty() {
    var input = document.getElementById("search-field");
    if (input.value == "") {
        setClearInvisible();
    } else {
        setClearVisible();
    }
}

function setClearVisible() {
    var btn = document.getElementById("search-clear");
    var input = document.getElementById("search-field");
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
}

function setClearInvisible(id) {
    var btn = document.getElementById(id);
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0";
}