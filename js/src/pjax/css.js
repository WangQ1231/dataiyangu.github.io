// build time:Sun Aug 04 2019 11:18:52 GMT+0800 (China Standard Time)
define(function(){if(typeof window=="undefined")return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0];var t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0;var n=false;var r=true;if(t[1]||t[7])n=parseInt(t[1])<6||parseInt(t[7])<=9;else if(t[2]||t[8]||"WebkitAppearance"in document.documentElement.style)r=false;else if(t[4])n=parseInt(t[4])<18;var a={};a.pluginBuilder="./css-builder";var i,l;var o=function(){i=document.createElement("style");e.appendChild(i);l=i.styleSheet||i.sheet};var s=0;var u=[];var f;var c=function(e){l.addImport(e);i.onload=function(){d()};s++;if(s==31){o();s=0}};var d=function(){f();var e=u.shift();if(!e){f=null;return}f=e[1];c(e[0])};var v=function(e,t){if(!l||!l.addImport)o();if(l&&l.addImport){if(f){u.push([e,t])}else{c(e);f=t}}else{i.textContent='@import "'+e+'";';var n=setInterval(function(){try{i.sheet.cssRules;clearInterval(n);t()}catch(e){}},10)}};var p=function(t,n){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";if(r)a.onload=function(){a.onload=function(){};setTimeout(n,7)};else var i=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e];if(t.href==a.href){clearInterval(i);return n()}}},10);a.href=t;e.appendChild(a)};a.normalize=function(e,t){if(e.substr(e.length-4,4)==".css")e=e.substr(0,e.length-4);return t(e)};a.load=function(e,t,r,a){(n?v:p)(t.toUrl(e+".css"),r)};return a});
//rebuild by neat 