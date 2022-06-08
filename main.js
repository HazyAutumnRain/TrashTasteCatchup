function modeSwitch() {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        document.getElementById("modeicon").src = "icons/moon.svg";
        document.getElementById("modeicon").classList.toggle("buttondark");
    } else {
        document.getElementById("modeicon").src = "icons/sun.svg";
        document.getElementById("modeicon").classList.toggle("buttondark");
    }
}

var parent = ['sites.google.com', 'www.gstatic.com', 'plus.destructomc.com', window.location.host];


