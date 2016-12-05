// Script to open and close the PLUS section - No JQuery ////

// Store objects in variables
var circle = document.getElementById("circle");
var bio = document.getElementById("bio");
var versionBox = document.getElementById("versionBox");

var wrapperProjectsAbout = document.getElementById("wrapper-projects-about");

var projects = document.getElementById("projects");
var about = document.getElementById("about");
var aboutTitle = document.getElementById("about-title");
var body = document.getElementsByTagName("BODY")[0];

var description = document.querySelector('.description');
var heightWind = document.documentElement.clientHeight;

var elementsToLoad = document.querySelectorAll('.projects article .project');
var imagesLoaded   = 0;



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


//Scrolling homepage

window.addEventListener('scroll', function(){

    if(window.pageYOffset >= 100){
        document.querySelector('header ul').classList.add('side');
    }else{
        document.querySelector('header ul').classList.remove('side');
    }

    if (description != null) {
        if(description.getBoundingClientRect().top < heightWind/2){
            document.querySelector('body').classList.add('dark');
            document.querySelector('header ul li:first-child').classList.remove('selected');
            document.querySelector('header ul li:last-child').classList.add('selected');
        }else{
            document.querySelector('body').classList.remove('dark');
            document.querySelector('header ul li:first-child').classList.add('selected');
            document.querySelector('header ul li:last-child').classList.remove('selected');
        }
    }

});

//Smooth scroll
var worksLink = document.querySelector("#works-link");
var aboutLink = document.querySelector("#about-link");
if (description != null) {
    worksLink.addEventListener('click', function(e){
        smoothScrollTo(0, document.body, 20);
    });
    aboutLink.addEventListener('click', function(e){
        smoothScrollTo(description.offsetTop, document.body, 20);
    });
}

// Blazy in action in homepage
if(elementsToLoad.length != 0){

    console.log(elementsToLoad);

    var bLazy = new Blazy({
        success: function(element){
            console.log("fatt");
            elementsToLoad[imagesLoaded].classList.remove('animation-bg');
            elementsToLoad[imagesLoaded].nextElementSibling.classList.add('no-display');
            if ( imagesLoaded < elementsToLoad.length - 1 ) {
                imagesLoaded ++;
                bLazy.load(elementsToLoad[imagesLoaded], false);
            }

        }
    });
    // load the first image if in home
    bLazy.load(elementsToLoad[0], false);

}


// FUNCTION FOR SMOOTH SCROLL

function smoothScrollTo(destination, parent, time) {
    var scroll = init();
    requestAnimationFrame(shouldScroll);

    function init() {
        var start = parent.scrollTop;
        var ticks = time || 30;
        var i = 0;
        return {
            positionY: function () {
                return (destination - start) * i / ticks + start;
            }, 
            isFinished: function () {
                return i++ >= ticks;
            }
        };
    }

    function shouldScroll() {
        if(scroll.isFinished()) return;
        parent.scrollTop = scroll.positionY();
        requestAnimationFrame(shouldScroll);
    }
}

function selected(elem, parent) {
    for(var i = 0; i < parent.children.length; i++) {
        parent.children[i].classList.remove('is-selected');
    }
    elem.classList.add('is-selected');
    return elem;
}











