const swup = new Swup();

function modeSwitch() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        document.getElementById("modeicon").src = "icons/sun.svg";
        document.getElementById("modeicon").classList.toggle("buttondark");
    } else {
        document.getElementById("modeicon").src = "icons/moon.svg";
        document.getElementById("modeicon").classList.toggle("buttondark");
    }
}

swup.on('contentReplaced', function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
});

var parent = ['sites.google.com', 'www.gstatic.com', 'plus.destructomc.com', window.location.host];


