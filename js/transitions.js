window.onload = setTimeout(fadeIn, 800);

//fade effect from https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/?ref=lbp
function fadeIn() {
    var fade = document.getElementById("body");
    var opacity = 0;
    var intervalID = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 150);
}

function viewTransition(loc) {
    setTimeout(window.location.href=loc, 2000);
   
}