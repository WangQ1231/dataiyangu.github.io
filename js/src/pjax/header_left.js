// build time:Thu Mar 28 2019 14:30:59 GMT+0800 (China Standard Time)
function header_left(){var e=false;$(".header_sidebar").click(function(){var a="80px";if(e==false){$(".header_left_inner ").animate({width:"80px",opacity:"show"},{duration:500,easing:"easeInOutQuart",complete:function(){}});$(".header_left_inner .site-nav").css("display","block");$("body").animate({paddingLeft:"80px"},{duration:500,easing:"easeInOutBack",complete:function(){}});e=true}else{$(".header_left_inner").animate({width:"0px",opacity:"hide"},{duration:500,easing:"easeInOutQuart",complete:function(){}});$("body").animate({paddingLeft:"0px"},{duration:500,easing:"easeInOutBack",complete:function(){}});e=false}})}header_left();
//rebuild by neat 