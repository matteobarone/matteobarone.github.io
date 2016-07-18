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
    piu.classList.add("expandPlus");
    circle.classList.toggle("hide");
    bio.classList.toggle("hide");
    versionBox.classList.toggle("hide");
    body.classList.toggle("noBorderBody");
    
    setTimeout(function(){
        goToProjectsPage(); 
    }, 1500);
    
}

function closePiu(){
    piu.classList.remove("expandPlus");
    close.classList.toggle("animate-x");
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
var mobileControllerPlay = document.getElementById("mobile-controller-play");
var mobileControllerPause = document.getElementById("mobile-controller-pause");

var buttonPlay = document.getElementById("controller-play");
var buttonPause = document.getElementById("controller-pause");

if(mobileControllerPlay){
    mobileControllerPlay.addEventListener("click", playVid);
    mobileControllerPause.addEventListener("click", pauseVid);
}

function playVid() {
    mobileAtmVideo.play();
    mobileControllerPlay.classList.add("no-display");
    mobileControllerPause.classList.remove("no-display");
}

function pauseVid() {
    mobileAtmVideo.pause();
    mobileControllerPause.classList.add("no-display");
    mobileControllerPlay.classList.remove("no-display");
}



//Controller for the hover in the about: active/disactive song

var figure = $(".about-img").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    var w = window.innerWidth;
    if(w > 560){
        $(".song").get(0).play(); 
    }
}

function hideVideo(e) {
    var w = window.innerWidth;
    if(w > 560){
        $(".song").get(0).pause(); 
    }
}







window.onscroll = function(e) {
    
    //get brackets
    var bracketTopLeft = document.getElementById("bracket-top-left");
    var bracketTopRight = document.getElementById("bracket-top-right");
    var bracketBottomLeft = document.getElementById("bracket-bottom-left");
    var bracketBottomRight = document.getElementById("bracket-bottom-right");
    
    // Get the pageYOffset
    var pageOffset = window.pageYOffset;
    
    //browser height
    var browserheight = window.innerHeight;
    
    // Page height minus the browser height
    var totalHeightMinusBrowser = document.body.clientHeight - window.innerHeight;
    
    //about offset
    var about = document.getElementById("about");
    var offsetAbout = about.getBoundingClientRect().top;
    
    var offsetBottomBrackets = offsetAbout - browserheight + 55;
    
    
    console.log("browserHeight -> " + browserheight);
    console.log("bottom brackets offset -> " + offsetBottomBrackets);
    
    if(offsetBottomBrackets < 0){
        bracketBottomLeft.classList.add("white-brackets-bottom-left");
        bracketBottomRight.classList.add("white-brackets-bottom-right");
    }else{
        bracketBottomLeft.classList.remove("white-brackets-bottom-left");
        bracketBottomRight.classList.remove("white-brackets-bottom-right");
    }


}












