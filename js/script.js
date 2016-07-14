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
if(close){
    close.addEventListener("click", closePiu);
}

function openPiu(){
    piu.classList.toggle("expandPlus");
    //close.classList.toggle("animate-x");
    circle.classList.toggle("hide");
    bio.classList.toggle("hide");
    versionBox.classList.toggle("hide");
    //projects.classList.toggle("showProjects");
    body.classList.toggle("noBorderBody");
    
    setTimeout(function(){
        goToProjectsPage(); 
    }, 1500);
    
}

function closePiu(){
    piu.classList.toggle("expandPlus");
    close.classList.toggle("animate-x");
    //circle.classList.toggle("hide");
    //bio.classList.toggle("hide");
    //versionBox.classList.toggle("hide");
    projects.classList.toggle("showProjects");
    body.classList.toggle("noBorderBody");
    body.classList.toggle("heightAuto");
    
    setTimeout(function(){
        goToHomePage(); 
    }, 1500);
}

function goToProjectsPage(){
    window.location.href = 'projects.html';
}

function goToHomePage(){
    window.location.href = 'index.html';
}



//Video Controller

var mobileAtmVideo = document.getElementById("mobile-atm-video");
var mobileAtmController = document.getElementById("mobile-atm-controller");

if(mobileAtmController){
    mobileAtmController.addEventListener("click", playVid);
}

function playVid() {
    mobileAtmVideo.play();
    mobileAtmController.classList.add("hide");
}



//Video about controller with hover
var figure = $(".about-img").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $(".song").get(0).play(); 
}

function hideVideo(e) {
    $(".song").get(0).pause(); 
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