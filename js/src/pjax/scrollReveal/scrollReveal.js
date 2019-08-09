// build time:Fri Aug 09 2019 17:39:32 GMT+0800 (China Standard Time)
window.scrollReveal=function(t){"use strict";var e=1;var i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}();function r(t){this.options=this.extend(this.defaults,t);this.docElem=this.options.elem;this.styleBank={};if(this.options.init==true)this.init()}r.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",opacity:0,complete:function(){},viewportFactor:.33,reset:false,init:true,elem:t.document.documentElement},init:function(){this.scrolled=false;var r=this;this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]"));this.elems.forEach(function(t,i){var o=t.getAttribute("data-scroll-reveal-id");if(!o){o=e++;t.setAttribute("data-scroll-reveal-id",o)}if(!r.styleBank[o]){r.styleBank[o]=t.getAttribute("style")}r.update(t)});var o=function(t){if(!r.scrolled){r.scrolled=true;i(function(){r._scrollPage()})}};var s=function(){if(r.resizeTimeout){clearTimeout(r.resizeTimeout)}function t(){r._scrollPage();r.resizeTimeout=null}r.resizeTimeout=setTimeout(t,200)};if(this.docElem==t.document.documentElement){t.addEventListener("scroll",o,false);t.addEventListener("resize",s,false)}else{this.docElem.addEventListener("scroll",o,false)}},_scrollPage:function(){var t=this;this.elems.forEach(function(e,i){t.update(e)});this.scrolled=false},parseLanguage:function(t){var e=t.getAttribute("data-scroll-reveal").split(/[, ]+/),i={};function r(t){var e=[],i=["from","the","and","then","but","with"];t.forEach(function(t,r){if(i.indexOf(t)>-1){return}e.push(t)});return e}e=r(e);e.forEach(function(t,r){switch(t){case"enter":i.enter=e[r+1];return;case"after":i.after=e[r+1];return;case"wait":i.after=e[r+1];return;case"move":i.move=e[r+1];return;case"ease":i.move=e[r+1];i.ease="ease";return;case"ease-in":i.move=e[r+1];i.easing="ease-in";return;case"ease-in-out":i.move=e[r+1];i.easing="ease-in-out";return;case"ease-out":i.move=e[r+1];i.easing="ease-out";return;case"over":i.over=e[r+1];return;default:return}});return i},update:function(t){var e=this;var i=this.genCSS(t);var r=this.styleBank[t.getAttribute("data-scroll-reveal-id")];if(r!=null)r+=";";else r="";if(!t.getAttribute("data-scroll-reveal-initialized")){t.setAttribute("style",r+i.initial);t.setAttribute("data-scroll-reveal-initialized",true)}if(!this.isElementInViewport(t,this.options.viewportFactor)){if(this.options.reset){t.setAttribute("style",r+i.initial+i.reset)}return}if(t.getAttribute("data-scroll-reveal-complete"))return;if(this.isElementInViewport(t,this.options.viewportFactor)){t.setAttribute("style",r+i.target+i.transition+"background:"+$("#canvas").css("background")+"");if(!this.options.reset){setTimeout(function(){if(r!=""){t.setAttribute("style",r)}else{t.removeAttribute("style")}t.setAttribute("data-scroll-reveal-complete",true);e.options.complete(t)},i.totalDuration)}return}},genCSS:function(t){var e=this.parseLanguage(t),i,r;if(e.enter){if(e.enter=="top"||e.enter=="bottom"){i=e.enter;r="y"}if(e.enter=="left"||e.enter=="right"){i=e.enter;r="x"}}else{if(this.options.enter=="top"||this.options.enter=="bottom"){i=this.options.enter;r="y"}if(this.options.enter=="left"||this.options.enter=="right"){i=this.options.enter;r="x"}}if(i=="top"||i=="left"){if(e.move){e.move="-"+e.move}else{e.move="-"+this.options.move}}var o=e.move||this.options.move,s=e.over||this.options.over,n=e.after||this.options.after,a=e.easing||this.options.easing,l=e.opacity||this.options.opacity;var u="-webkit-transition: -webkit-transform "+s+" "+a+" "+n+",  opacity "+s+" "+a+" "+n+";"+"transition: transform "+s+" "+a+" "+n+", opacity "+s+" "+a+" "+n+";"+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;";var f="-webkit-transition: -webkit-transform "+s+" "+a+" 0s,  opacity "+s+" "+a+" "+n+";"+"transition: transform "+s+" "+a+" 0s,  opacity "+s+" "+a+" "+n+";"+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;";var c="-webkit-transform: translate"+r+"("+o+");"+"transform: translate"+r+"("+o+");"+"opacity: "+l+";";var m="-webkit-transform: translate"+r+"(0);"+"transform: translate"+r+"(0);"+"opacity: 1;";return{transition:u,initial:c,target:m,reset:f,totalDuration:(parseFloat(s)+parseFloat(n))*1e3}},getViewportH:function(){var e=this.docElem["clientHeight"],i=t["innerHeight"];if(this.docElem==t.document.documentElement)return e<i?i:e;else return e},getOffset:function(t){var e=0,i=0;do{if(!isNaN(t.offsetTop)){e+=t.offsetTop}if(!isNaN(t.offsetLeft)){i+=t.offsetLeft}}while(t=t.offsetParent);return{top:e,left:i}},isElementInViewport:function(e,i){var r=this.docElem.scrollTop+this.docElem.offsetTop;if(this.docElem==t.document.documentElement)r=t.pageYOffset;var o=r+this.getViewportH(),s=e.offsetHeight,n=this.getOffset(e).top,a=n+s,i=i||0;return n+s*i<=o&&a>=r||(e.currentStyle?e.currentStyle:t.getComputedStyle(e,null)).position=="fixed"},extend:function(t,e){for(var i in e){if(e.hasOwnProperty(i)){t[i]=e[i]}}return t}};return r}(window);
//rebuild by neat 