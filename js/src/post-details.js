// build time:Fri Apr 05 2019 22:08:47 GMT+0800 (China Standard Time)
$(document).ready(function(){t();function t(){var t=".post-toc";var a=$(t);var e=".active-current";a.on("activate.bs.scrollspy",function(){var e=$(t+" .active").last();i();e.addClass("active-current");a.scrollTop(e.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",i);$("body").scrollspy({target:t});function i(){$(t+" "+e).removeClass(e.substring(1))}}});$(document).ready(function(){var t=$("html");var a=200;var e=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var i="sidebar-nav-active";var o="sidebar-panel-active";if(t.hasClass(i)){return}var s=$("."+o);var r=$("."+t.data("target"));e?s.velocity("transition.slideUpOut",a,function(){r.velocity("stop").velocity("transition.slideDownIn",a).addClass(o)}):s.animate({opacity:0},a,function(){s.hide();r.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){s.removeClass(o);r.addClass(o)})});t.siblings().removeClass(i);t.addClass(i)});$(".post-toc a").on("click",function(a){a.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href"));var o=$(i).offset().top;e?t.velocity("stop").velocity("scroll",{offset:o+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:o},500)});function i(){var t=navigator.userAgent;var a=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];var e=false;for(var i=0;i<a.length;i++){if(t.indexOf(a[i])>0){e=true;break}}var o=window.screen.width;var s=window.screen.height;if(o<500&&s<800){e=true}return e}var i=i();console.log(i);var o=$(".post-toc-content");var s=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var r=o.length>0&&o.html().trim().length>0;if(s&&r&&!i){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 