function playVid(){mobileAtmVideo.play(),mobileControllerPlay.classList.add("no-display"),mobileControllerPause.classList.remove("no-display")}function pauseVid(){mobileAtmVideo.pause(),mobileControllerPause.classList.add("no-display"),mobileControllerPlay.classList.remove("no-display")}function smoothScrollTo(e,t,o){function n(){s.isFinished()||(t.scrollTop=s.positionY(),requestAnimationFrame(n))}var s=function(){var t=window.scrollY,n=o||30,s=0;return{positionY:function(){return(e-t)*s/n+t},isFinished:function(){return s++>=n}}}();window.requestAnimationFrame(n)}function selected(e,t){for(var o=0;o<t.children.length;o++)t.children[o].classList.remove("is-selected");return e.classList.add("is-selected"),e}!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.Blazy=t()}(this,function(){function e(e){var o=e._util;o.elements=l(e.options),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,e.options.container&&u(e.options.container,function(e){c(e,"scroll",o.validateT)}),c(window,"resize",o.saveViewportOffsetT),c(window,"resize",o.validateT),c(window,"scroll",o.validateT)),t(e)}function t(e){for(var t=e._util,o=0;o<t.count;o++){var n=t.elements[o],s=n.getBoundingClientRect();(s.right>=f.left&&s.bottom>=f.top&&s.left<=f.right&&s.top<=f.bottom||i(n,e.options.successClass))&&(e.load(n),t.elements.splice(o,1),t.count--,o--)}0===t.count&&e.destroy()}function o(e,t,o){if(!i(e,o.successClass)&&(t||o.loadInvisible||0<e.offsetWidth&&0<e.offsetHeight))if(t=e.getAttribute(p)||e.getAttribute(o.src)){var l=(t=t.split(o.separator))[v&&1<t.length?1:0],a=e.getAttribute(o.srcset),m="img"===e.nodeName.toLowerCase(),f=(t=e.parentNode)&&"picture"===t.nodeName.toLowerCase();if(m||void 0===e.src){var y=new Image,h=function(){o.error&&o.error(e,"invalid"),r(e,o.errorClass),d(y,"error",h),d(y,"load",g)},g=function(){m?f||s(e,l,a):e.style.backgroundImage='url("'+l+'")',n(e,o),d(y,"load",g),d(y,"error",h)};f&&(y=e,u(t.getElementsByTagName("source"),function(e){var t=o.srcset,n=e.getAttribute(t);n&&(e.srcset=n,e.removeAttribute(t))})),c(y,"error",h),c(y,"load",g),s(y,l,a)}else e.src=l,n(e,o)}else"video"===e.nodeName.toLowerCase()?(u(e.getElementsByTagName("source"),function(e){var t=o.src,n=e.getAttribute(t);n&&(e.src=n,e.removeAttribute(t))}),e.load(),n(e,o)):(o.error&&o.error(e,"missing"),r(e,o.errorClass))}function n(e,t){r(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),e.removeAttribute(t.srcset),u(t.breakpoints,function(t){e.removeAttribute(t.src)})}function s(e,t,o){o&&(e.srcset=o),e.src=t}function i(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function r(e,t){i(e,t)||(e.className+=" "+t)}function l(e){for(var t=[],o=(e=e.root.querySelectorAll(e.selector)).length;o--;t.unshift(e[o]));return t}function a(e){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,f.right=(window.innerWidth||document.documentElement.clientWidth)+e}function c(e,t,o){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,o):e.addEventListener(t,o,{capture:!1,passive:!0})}function d(e,t,o){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,o):e.removeEventListener(t,o,{capture:!1,passive:!0})}function u(e,t){if(e&&t)for(var o=e.length,n=0;n<o&&!1!==t(e[n],n);n++);}function m(e,t,o){var n=0;return function(){var s=+new Date;s-n<t||(n=s,e.apply(o,arguments))}}var p,f,v;return function(n){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(e,t,o,n,i){for(i=document.all,t=[],o=(e=e.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(s.addRule(e[o],"k:v"),n=i.length;n--;)i[n].currentStyle.k&&t.push(i[n]);s.removeRule(0)}return t}}var i=this,r=i._util={};r.elements=[],r.destroyed=!0,i.options=n||{},i.options.error=i.options.error||!1,i.options.offset=i.options.offset||100,i.options.root=i.options.root||document,i.options.success=i.options.success||!1,i.options.selector=i.options.selector||".b-lazy",i.options.separator=i.options.separator||"|",i.options.container=!!i.options.container&&document.querySelectorAll(i.options.container),i.options.errorClass=i.options.errorClass||"b-error",i.options.breakpoints=i.options.breakpoints||!1,i.options.loadInvisible=i.options.loadInvisible||!1,i.options.successClass=i.options.successClass||"b-loaded",i.options.validateDelay=i.options.validateDelay||25,i.options.saveViewportOffsetDelay=i.options.saveViewportOffsetDelay||50,i.options.srcset=i.options.srcset||"data-srcset",i.options.src=p=i.options.src||"data-src",v=1<window.devicePixelRatio,(f={}).top=0-i.options.offset,f.left=0-i.options.offset,i.revalidate=function(){e(this)},i.load=function(e,t){var n=this.options;void 0===e.length?o(e,t,n):u(e,function(e){o(e,t,n)})},i.destroy=function(){var e=this._util;this.options.container&&u(this.options.container,function(t){d(t,"scroll",e.validateT)}),d(window,"scroll",e.validateT),d(window,"resize",e.validateT),d(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},r.validateT=m(function(){t(i)},i.options.validateDelay,i),r.saveViewportOffsetT=m(function(){a(i.options.offset)},i.options.saveViewportOffsetDelay,i),a(i.options.offset),u(i.options.breakpoints,function(e){if(e.width>=window.screen.width)return p=e.src,!1}),setTimeout(function(){e(i)})}});var projects=document.getElementById("projects"),about=document.getElementById("about"),body=document.getElementsByTagName("BODY")[0],scrollNode=document.scrollingElement||document.documentElement,description=document.querySelector(".description"),heightWind=document.documentElement.clientHeight,elementsToLoad=document.querySelectorAll(".projects article .project"),imagesLoaded=0,mobileAtmVideo=document.getElementById("mobile-atm-video"),mobileControllerPlay=document.getElementById("mobile-controller-play"),mobileControllerPause=document.getElementById("mobile-controller-pause");mobileControllerPlay&&(mobileControllerPlay.addEventListener("click",playVid),mobileControllerPause.addEventListener("click",pauseVid)),window.addEventListener("scroll",function(){window.pageYOffset>=100?document.querySelector("header ul").classList.add("side"):document.querySelector("header ul").classList.remove("side"),null!==description&&(description.getBoundingClientRect().top<heightWind/2?(document.querySelector("body").classList.add("dark"),document.querySelector("header ul li:first-child").classList.remove("selected"),document.querySelector("header ul li:last-child").classList.add("selected")):(document.querySelector("body").classList.remove("dark"),document.querySelector("header ul li:first-child").classList.add("selected"),document.querySelector("header ul li:last-child").classList.remove("selected")))});var worksLink=document.querySelector("#works-link"),aboutLink=document.querySelector("#about-link");if(null!==description&&(worksLink.addEventListener("click",function(){smoothScrollTo(0,scrollNode)}),aboutLink.addEventListener("click",function(){smoothScrollTo(description.offsetTop,scrollNode)})),0!==elementsToLoad.length){var bLazy=new Blazy({success:function(){elementsToLoad[imagesLoaded].classList.remove("animation-bg"),elementsToLoad[imagesLoaded].nextElementSibling.classList.add("no-display"),imagesLoaded<elementsToLoad.length-1&&(imagesLoaded++,bLazy.load(elementsToLoad[imagesLoaded],!1))}});bLazy.load(elementsToLoad[0],!1)}var footerEl=document.querySelector(".footer");footerEl.innerHTML="Matteo Barone | © "+(new Date).getFullYear();