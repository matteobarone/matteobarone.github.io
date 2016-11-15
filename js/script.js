// Script to open and close the PLUS section - No JQuery ////

// Store objects in variables
var piu = document.getElementById("piu");
var close = document.getElementById("closeX");
var circle = document.getElementById("circle");
var bio = document.getElementById("bio");
var versionBox = document.getElementById("versionBox");

var wrapperProjectsAbout = document.getElementById("wrapper-projects-about");

var projects = document.getElementById("projects");
var about = document.getElementById("about");
var aboutTitle = document.getElementById("about-title");
var body = document.getElementsByTagName("BODY")[0];

// Add the event listener
piu.addEventListener("click", openPiu);
if(close){
    close.addEventListener("click", closePiu);
}

function openPiu(e){
    e.preventDefault();
    piu.classList.add("expandPlus");
    circle.classList.toggle("hide");
    bio.classList.toggle("hide");
    versionBox.classList.toggle("hide");
    body.classList.toggle("noBorderBody");
    
    setTimeout(function(){
        goToProjectsPage(); 
    }, 1500);
    
}

function closePiu(e){
    e.preventDefault();
    piu.classList.remove("expandPlus");
    close.classList.toggle("animate-x");
    wrapperProjectsAbout.classList.remove("show");
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



//Video Controller play/pause in the single project page

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
var aboutImg = document.getElementById("about-img");
var song = document.getElementById("song");
if(aboutImg){
    aboutImg.addEventListener("mouseover", hoverVideo);
    aboutImg.addEventListener("mouseout", hideVideo);
}

function hoverVideo() {
    //alert("hover");
    var w = window.innerWidth;
    if(w > 560){
        song.play();
    }
}

function hideVideo() {
    
    //alert("out");
    var w = window.innerWidth;
    if(w > 560){
        song.pause();
    }
}



// Only for about page, when the brackets in the corner of the page reach the About section (blue section), its become white
if(about){

    window.onscroll = function(e) {

        //about offset
        var offsetAbout = about.getBoundingClientRect().top;

        //get brackets
        var bracketTopLeft = document.getElementById("bracket-top-left");
        var bracketTopRight = document.getElementById("bracket-top-right");
        var bracketBottomLeft = document.getElementById("bracket-bottom-left");
        var bracketBottomRight = document.getElementById("bracket-bottom-right");
        //get x
        var x = document.getElementById("closeX");

        // Get the pageYOffset
        var pageOffset = window.pageYOffset;

        //browser height
        var browserheight = window.innerHeight;

        // Page height minus the browser height
        var totalHeightMinusBrowser = document.body.clientHeight - window.innerHeight;

        //calculation of the offset for brackets and x
        var offsetBottomBrackets = offsetAbout - browserheight + 35;
        var offsetTopBrackets = offsetAbout - 20;
        var offsetX = offsetAbout - 50;

        //console.log("browserHeight -> " + browserheight);
        //console.log("top brackets offset -> " + offsetTopBrackets);
        //console.log("offsetX -> " + offsetX);

        if(offsetBottomBrackets < 0){
            bracketBottomLeft.classList.add("white-brackets");
            bracketBottomRight.classList.add("white-brackets");
        }else{
            bracketBottomLeft.classList.remove("white-brackets");
            bracketBottomRight.classList.remove("white-brackets");
        }
        
        if(offsetTopBrackets < 0){
            bracketTopLeft.classList.add("white-brackets");
            bracketTopRight.classList.add("white-brackets");
        }else{
            bracketTopLeft.classList.remove("white-brackets");
            bracketTopRight.classList.remove("white-brackets");
        }
        
        if(offsetX < 0){
            x.classList.add("x-white");
        }else{
            x.classList.remove("x-white");
        }
        
    }
    
}














