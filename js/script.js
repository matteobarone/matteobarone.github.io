//// Script to open and close the PLUS section - No JQuery ////

// Store objects in variables
var piu = document.getElementById("piu");
var close = document.getElementById("closeX");
var circle = document.getElementById("circle");
var bio = document.getElementById("bio");
var versionBox = document.getElementById("versionBox");
var projects = document.getElementById("projects");
var body = document.getElementsByTagName("BODY")[0];

// Add the event listener
piu.addEventListener("click", openPiu);
close.addEventListener("click", closePiu);

function openPiu(){
    piu.classList.toggle("expandPlus");
    close.classList.toggle("animate-x");
    circle.classList.toggle("hide");
    bio.classList.toggle("hide");
    versionBox.classList.toggle("hide");
    projects.classList.toggle("showProjects");
    body.classList.toggle("noBorderBody");
}

function closePiu(){
    piu.classList.toggle("expandPlus");
    close.classList.toggle("animate-x");
    circle.classList.toggle("hide");
    bio.classList.toggle("hide");
    versionBox.classList.toggle("hide");
    projects.classList.toggle("showProjects");
    body.classList.toggle("noBorderBody");
}



//Video Controller

var mobileAtmVideo = document.getElementById("mobile-atm-video");
var mobileAtmController = document.getElementById("mobile-atm-controller");

mobileAtmController.addEventListener("click", playVid);

function playVid() {
    mobileAtmVideo.play();
    mobileAtmController.classList.add("hide");
} 
















//Script to manage the changing version (White/Blue)
function loadjscssfile(filename, filetype){
    if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

data = new Date();

ora = data.getHours();
minuti = data.getMinutes();



if(ora >= 8 || ora < 20){
    //alert("Ora attuale: " + ora + ":" + (minuti< 10 ? "0"+minuti : minuti));
    var oreMancanti = 19 - ora;
    var minutiMancanti = 60 - minuti;
    //alert("Mancano: " + oreMancanti + ":" + minutiMancanti + " al cambio di versione");
}

//loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file