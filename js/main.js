"use strict";$(document).ready(function(){function t(){var e=$(window).outerWidth();$(window).outerHeight();e<600&&$(".body-slider").slick({dots:!0,infinite:!0,speed:300,arrows:!1})}function i(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(a.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}$(window).outerWidth(),$(window).outerHeight();var e=window.navigator.userAgent,a=(e.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}});(-1<(e=navigator.userAgent).indexOf("MSIE ")||-1<e.indexOf("Trident/"))&&$("body").addClass("ie"),a.any()&&$("body").addClass("touch"),$(".header-menu__icon").click(function(e){$(this).toggleClass("active"),$(".header-menu").toggleClass("active")}),$(window).resize(function(e){t()}),t(),$(".pl").click(function(e){var t,i,n=$(this).attr("href").replace("#",""),o=$(this).data("vid");return t=n,i=o,$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),a.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=i&&null!=i&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+i+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+t).find(".slick-slider").length&&$(".popup-"+t).find(".slick-slider").slick("setPosition"),!1}),$(".popup-close,.popup__close").click(function(e){return i(),!1}),$(".popup").click(function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return i(),!1}),$(document).on("keydown",function(e){27==e.which&&i()}),$.each($(".spoller.active"),function(e,t){$(this).next().show()}),$("body").on("click",".spoller",function(e){return $(this).hasClass("mob")&&!a.any()||($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),function(e,t){$(this).removeClass("active"),$(this).next().slideUp(300)}),$(this).toggleClass("active").next().slideToggle(300,function(e,t){0<$(this).parent().find(".slick-slider").length&&$(this).parent().find(".slick-slider").slick("setPosition")})),!1}),function(){function e(e){for(var t=0;t<m.length;t++){var i=m[t],n=i.element,o=i.destination,a=i.place,r="_dynamic_adapt_"+i.breakpoint;if(v[t].matches){if(!n.classList.contains(r)){var s=void 0;s="first"==a?$(o)[0]:"last"==a?$(o)[$(o).length]:$(o)[a],o.insertBefore(n,o.children[s]),n.classList.add(r)}}else n.classList.contains(r)&&(p=u=void 0,d=(l=n).getAttribute("data-da-index"),c=f[d],u=c.parent,p=c.index,h=$(u,!0)[p],u.insertBefore(l,u.children[h]),n.classList.remove(r))}var l,d,c,u,p,h;Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function $(e,t){for(var i=e.children,n=[],o=0;o<i.length;o++){var a=i[o];t?n.push(o):null==a.getAttribute("data-da")&&n.push(o)}return n}var t,i,f=[],n=document.querySelectorAll("[data-da]"),m=[],v=[];if(0<n.length){for(var o=0,a=0;a<n.length;a++){var r=n[a],s=r.getAttribute("data-da").split(",");3==s.length&&(r.setAttribute("data-da-index",o),f[o]={parent:r.parentNode,index:(i=r,Array.prototype.slice.call(i.parentNode.children).indexOf(i))},m[o]={element:r,destination:document.querySelector("."+s[0].trim()),place:s[1].trim(),breakpoint:s[2].trim()},o++)}(t=m).sort(function(e,t){return e.breakpoint>t.breakpoint?-1:1}),t.sort(function(e,t){return e.place>t.place?1:-1});for(var l=0;l<m.length;l++){var d=m[l].breakpoint;v.push(window.matchMedia("(max-width: "+d+"px)")),v[l].addListener(e)}}e(),document.querySelector(".click").addEventListener("click",function(e){alert("Все ок ;)")})}(),$(window).scroll(function(e){var t,i=$(this).scrollTop();t=i,$(window).outerWidth(),$(window).outerHeight(),130<t?$(".header").addClass("scroll"):$(".header").removeClass("scroll")}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(e){$("body,html").animate({scrollTop:0},300)}),$(".goto").click(function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,function(){}),$(".header-menu__mobile").hasClass("active")&&($(".header-menu__mobile,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),$(".video-play").click(function(){$("#video").get(0).play(),$(this).fadeOut(),$(".video__poster").fadeOut()});var n=document.querySelectorAll(".price-content__price-count");n.forEach(function(o){!function e(){var t=+o.getAttribute("data-target"),i=+Math.round(o.innerText),n=Math.round(t/130);i<t?(o.innerText=i+n,setTimeout(e,10)):o.innerText=t}()}),$(".section-slider").slick({dots:!0,infinite:!0,speed:300,arrows:!1})});