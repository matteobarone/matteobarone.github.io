(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Function for smooth scrool

var Smooth = (function() {

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

    return{
        smoothScrollTo: smoothScrollTo
    }
})();

module.exports = Smooth;
},{}],2:[function(require,module,exports){
var Util = (function() {

    function element(selector) {
        return document.querySelector(selector);
    }

    function elements(selectors) {
        return document.querySelectorAll(selectors);
    }

    function create(elem) {
        return document.createElement(elem)
    }

    return {
        el: element,
        els: elements,
        create: create
    }
})();

module.exports = Util;
},{}],3:[function(require,module,exports){
/*!
  hey, [be]Lazy.js - v1.7.0 - 2016.10.10
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
 (function(n,h){"function"===typeof define&&define.amd?define(h):"object"===typeof exports?module.exports=h():n.Blazy=h()})(this,function(){function n(b){var c=b._util;c.elements=B(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){m(a,"scroll",c.validateT)}),m(window,"resize",c.saveViewportOffsetT),m(window,"resize",c.validateT),m(window,"scroll",c.validateT));h(b)}function h(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],f=d.getBoundingClientRect();if(f.right>=e.left&&f.bottom>=e.top&&f.left<=e.right&&f.top<=e.bottom||p(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function v(b,c,a){if(!p(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(q)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[w&&1<c.length?1:0],f=b.getAttribute(a.srcset),x="img"===b.nodeName.toLowerCase(),e=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(x||void 0===b.src){var g=new Image,t=function(){a.error&&a.error(b,"invalid");r(b,a.errorClass);k(g,"error",t);k(g,"load",h)},h=function(){x?e||y(b,d,f):b.style.backgroundImage='url("'+d+'")';u(b,a);k(g,"load",h);k(g,"error",t)};e&&(g=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,f=b.getAttribute(c);f&&(b.srcset=f,b.removeAttribute(c))}));m(g,"error",t);m(g,"load",h);y(g,d,f)}else b.src=d,u(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,f=b.getAttribute(c);f&&(b.src=f,b.removeAttribute(c))}),b.load(),u(b,a)):(a.error&&a.error(b,"missing"),r(b,a.errorClass))}function u(b,c){r(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function y(b,c,a){a&&(b.srcset=a);b.src=c}function p(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function r(b,c){p(b,c)||(b.className+=" "+c)}function B(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function z(b){e.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;e.right=(window.innerWidth||document.documentElement.clientWidth)+b}function m(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function A(b,c,a){var d=0;return function(){var f=+new Date;f-d<c||(d=f,b.apply(a,arguments))}}var q,e,w;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,g,e){e=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(g=e.length;g--;)e[g].currentStyle.k&&b.push(e[g]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.container=a.options.container?document.querySelectorAll(a.options.container):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=q=a.options.src||"data-src";w=1<window.devicePixelRatio;e={};e.top=0-a.options.offset;e.left=0-a.options.offset;a.revalidate=function(){n(this)};a.load=function(a,b){var c=this.options;void 0===a.length?v(a,b,c):l(a,function(a){v(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=A(function(){h(a)},a.options.validateDelay,a);d.saveViewportOffsetT=A(function(){z(a.options.offset)},a.options.saveViewportOffsetDelay,a);z(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return q=a.src,!1});setTimeout(function(){n(a)})}});

},{}],4:[function(require,module,exports){
'use strict';

var Util = require('./Util.js');
var Scroll = require('./SmoothScrool.js');
window.Blazy = require('./blazy.js');

//GLOBAL VARIABLES

var description = Util.el('.description');
var heightWind = document.documentElement.clientHeight;

var elementsToLoad = Util.els('.content section article');
var imagesLoaded   = 0;

//Scrolling homepage

window.addEventListener('scroll', function(){

	if(window.pageYOffset >= 100){
		Util.el('header ul').classList.add('side');
	}else{
		Util.el('header ul').classList.remove('side');
	}

	if (description != null) {
		if(description.getBoundingClientRect().top < heightWind/2){
			Util.el('body').classList.add('dark');
			Util.el('header ul li:first-child').classList.remove('selected');
			Util.el('header ul li:last-child').classList.add('selected');
		}else{
			Util.el('body').classList.remove('dark');
			Util.el('header ul li:first-child').classList.add('selected');
			Util.el('header ul li:last-child').classList.remove('selected');
		}
	}

});


//Smooth scroll
var worksLink = Util.el("#works-link");
var aboutLink = Util.el("#about-link");
if (description != null) {
    worksLink.addEventListener('click', function(e){
        Scroll.smoothScrollTo(0, document.body, 10);
    });
    aboutLink.addEventListener('click', function(e){
        Scroll.smoothScrollTo(description.offsetTop, document.body, 10);
    });
}


// Blazy in action in homepage
if(elementsToLoad.length != 0){

	var bLazy = new Blazy({
	    success: function(element){
	        if ( imagesLoaded < elementsToLoad.length - 1 ) {
	            imagesLoaded ++;
	            bLazy.load(elementsToLoad[imagesLoaded], false);
	        }
	    }
	});
	// load the first image if in home
	bLazy.load(elementsToLoad[0], false);

}








},{"./SmoothScrool.js":1,"./Util.js":2,"./blazy.js":3}]},{},[4]);
