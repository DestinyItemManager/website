/*
Name: FancySelect
Type: jQuery Plugin
*/
(function(){var e;e=window.jQuery||window.Zepto||window.$;e.fn.fancySelect=function(t){var n,r;if(t==null){t={}}r=e.extend({forceiOS:false,includeBlank:false,optionTemplate:function(e){return e.text()},triggerTemplate:function(e){return e.text()}},t);n=!!navigator.userAgent.match(/iP(hone|od|ad)/i);return this.each(function(){var t,i,s,o,u,a,f;o=e(this);if(o.hasClass("fancified")||o[0].tagName!=="SELECT"){return}o.addClass("fancified");o.css({width:1,height:1,display:"block",position:"absolute",top:0,left:0,opacity:0});o.wrap('<div class="fancy-select">');f=o.parent();if(o.data("class")){f.addClass(o.data("class"))}f.append('<div class="trigger">');if(!(n&&!r.forceiOS)){f.append('<ul class="options">')}u=f.find(".trigger");s=f.find(".options");i=o.prop("disabled");if(i){f.addClass("disabled")}a=function(){var e;e=r.triggerTemplate(o.find(":selected"));return u.html(e)};o.on("blur.fs",function(){if(u.hasClass("open")){return setTimeout(function(){return u.trigger("close.fs")},120)}});u.on("close.fs",function(){u.removeClass("open");return s.removeClass("open")});u.on("click.fs",function(){var t,a;if(!i){u.toggleClass("open");if(n&&!r.forceiOS){if(u.hasClass("open")){return o.focus()}}else{if(u.hasClass("open")){a=u.parent();t=a.offsetParent();if(a.offset().top+a.outerHeight()+s.outerHeight()+20>e(window).height()+e(window).scrollTop()){s.addClass("overflowing")}else{s.removeClass("overflowing")}}s.toggleClass("open");if(!n){return o.focus()}}}});o.on("enable",function(){o.prop("disabled",false);f.removeClass("disabled");i=false;return t()});o.on("disable",function(){o.prop("disabled",true);f.addClass("disabled");return i=true});o.on("change.fs",function(e){if(e.originalEvent&&e.originalEvent.isTrusted){return e.stopPropagation()}else{return a()}});o.on("keydown",function(e){var t,n,r;r=e.which;t=s.find(".hover");t.removeClass("hover");if(!s.hasClass("open")){if(r===13||r===32||r===38||r===40){e.preventDefault();return u.trigger("click.fs")}}else{if(r===38){e.preventDefault();if(t.length&&t.index()>0){t.prev().addClass("hover")}else{s.find("li:last-child").addClass("hover")}}else if(r===40){e.preventDefault();if(t.length&&t.index()<s.find("li").length-1){t.next().addClass("hover")}else{s.find("li:first-child").addClass("hover")}}else if(r===27){e.preventDefault();u.trigger("click.fs")}else if(r===13||r===32){e.preventDefault();t.trigger("click.fs")}else if(r===9){if(u.hasClass("open")){u.trigger("close.fs")}}n=s.find(".hover");if(n.length){s.scrollTop(0);return s.scrollTop(n.position().top-12)}}});s.on("click.fs","li",function(t){var r;r=e(this);o.val(r.data("raw-value"));if(!n){o.trigger("blur.fs").trigger("focus.fs")}s.find(".selected").removeClass("selected");r.addClass("selected");return o.val(r.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")});s.on("mouseenter.fs","li",function(){var t,n;n=e(this);t=s.find(".hover");t.removeClass("hover");return n.addClass("hover")});s.on("mouseleave.fs","li",function(){return s.find(".hover").removeClass("hover")});t=function(){var t;a();if(n&&!r.forceiOS){return}t=o.find("option");return o.find("option").each(function(t,n){var i;n=e(n);if(!n.prop("disabled")&&(n.val()||r.includeBlank)){i=r.optionTemplate(n);if(n.prop("selected")){return s.append('<li data-raw-value="'+n.val()+'" class="selected">'+i+"</li>")}else{return s.append('<li data-raw-value="'+n.val()+'">'+i+"</li>")}}})};o.on("update.fs",function(){f.find(".options").empty();return t()});return t()})}}).call(this)



/*
Name: jqSocialSharer
Type: jQuery Plugin
Version: 2.1
Author: Tirumal
Website: www.code-tricks.com
Plugin URL: http://code-tricks.com/customized-jquery-social-sharing-pop-up-window/
Description: jQuery Social Sharer Plugin
License: GNU GENERAL PUBLIC LICENSE V2.0
*/
/*
;;(function ($){$["fn"]["jqSocialSharer"]=function (options){var settings=$["extend"]({"popUpWidth":550,"popUpHeight":450,"popUpTop":100,"useCurrentLocation":false},options);return this["each"](function (index,value){$(this)["bind"]("click",function (evt){evt["preventDefault"]();var social=$(this)["data"]("social"),width=settings["popUpWidth"],height=settings["popUpHeight"],sHeight=screen["height"],sWidth=screen["width"],left=Math["round"]((sWidth/2)-(width/2)),top=settings["popUpTop"],url,useCurrentLoc=settings["useCurrentLocation"],socialURL=(useCurrentLoc)?window["location"]:encodeURIComponent(social["url"]),socialText=social["text"],socialImage=encodeURIComponent(social["image"]);switch(social["type"]){case "facebook":url="https://www.facebook.com/sharer/sharer.php?s=100\x26p[url]="+socialURL+"\x26p[images][0]="+socialImage+"\x26p[title]="+socialText+"\x26p[summary]="+socialText;break ;;case "twitter":url="http://twitter.com/share?url="+socialURL+"\x26text="+socialText;break ;;case "plusone":url="https://plusone.google.com/_/+1/confirm?hl=en\x26url="+socialURL;break ;;case "pinterest":url="http://pinterest.com/pin/create/button/?url="+socialURL+"\x26media="+socialImage+"\x26description="+socialText;break ;;} ;window["open"](url,"","left="+left+" , top="+top+", width="+width+", height="+height+", personalbar=0, toolbar=0, scrollbars=1, resizable=1");} );} );} ;} (jQuery));
*/


/* BackgroundCheck
   http://kennethcachia.com/background-check
   v1.2.2 */
!function(a,b){"function"==typeof define&&define.amd?define(b):a.BackgroundCheck=b(a)}(this,function(){"use strict";function a(a){if(void 0===a||void 0===a.targets)throw"Missing attributes";H.debug=d(a.debug,!1),H.debugOverlay=d(a.debugOverlay,!1),H.targets=g(a.targets),H.images=g(a.images||"img",!0),H.changeParent=d(a.changeParent,!1),H.threshold=d(a.threshold,50),H.minComplexity=d(a.minComplexity,30),H.minOverlap=d(a.minOverlap,50),H.windowEvents=d(a.windowEvents,!0),H.maxDuration=d(a.maxDuration,500),H.mask=d(a.mask,{r:0,g:255,b:0}),H.classes=d(a.classes,{dark:"background--dark",light:"background--light",complex:"background--complex"}),void 0===B&&(h(),B&&(C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.width="100%",C.style.height="100%",window.addEventListener(G,x.bind(null,function(){k(),w()})),window.addEventListener("scroll",x.bind(null,w)),k(),w()))}function b(){B=null,C=null,D=null,H={},E&&clearTimeout(E)}function c(a){z("debug")&&console.log(a)}function d(a,b){return e(a,typeof b),void 0===a?b:a}function e(a,b){if(void 0!==a&&typeof a!==b)throw"Incorrect attribute type"}function f(a){for(var b,d,e=[],f=0;f<a.length;f++)if(b=a[f],e.push(b),"IMG"!==b.tagName){if(d=window.getComputedStyle(b).backgroundImage,d.split(/,url|, url/).length>1)throw"Multiple backgrounds are not supported";if(!d||"none"===d)throw"Element is not an <img> but does not have a background-image";e[f]={img:new Image,el:e[f]},d=d.slice(4,-1),d=d.replace(/"/g,""),e[f].img.src=d,c("CSS Image - "+d)}return e}function g(a,b){var c=a;if("string"==typeof a?c=document.querySelectorAll(a):a&&1===a.nodeType&&(c=[a]),!c||0===c.length||void 0===c.length)throw"Elements not found";return b&&(c=f(c)),c=Array.prototype.slice.call(c)}function h(){C=document.createElement("canvas"),C&&C.getContext?(D=C.getContext("2d"),B=!0):B=!1,i()}function i(){z("debugOverlay")?(C.style.opacity=.5,C.style.pointerEvents="none",document.body.appendChild(C)):C.parentNode&&C.parentNode.removeChild(C)}function j(a){var d=(new Date).getTime()-a;c("Duration: "+d+"ms"),d>z("maxDuration")&&(console.log("BackgroundCheck - Killed"),q(),b())}function k(){F={left:0,top:0,right:document.body.clientWidth,bottom:window.innerHeight},C.width=document.body.clientWidth,C.height=window.innerHeight}function l(a,b,c){var d,e;return-1!==a.indexOf("px")?d=parseFloat(a):-1!==a.indexOf("%")?(d=parseFloat(a),e=d/100,d=e*b,c&&(d-=c*e)):d=b,d}function m(a){var b=window.getComputedStyle(a.el);a.el.style.backgroundRepeat="no-repeat",a.el.style.backgroundOrigin="padding-box";var c=b.backgroundSize.split(" "),d=c[0],e=void 0===c[1]?"auto":c[1],f=a.el.clientWidth/a.el.clientHeight,g=a.img.naturalWidth/a.img.naturalHeight;"cover"===d?f>=g?(d="100%",e="auto"):(d="auto",c[0]="auto",e="100%"):"contain"===d&&(1/g>1/f?(d="auto",c[0]="auto",e="100%"):(d="100%",e="auto")),d="auto"===d?a.img.naturalWidth:l(d,a.el.clientWidth),e="auto"===e?d/a.img.naturalWidth*a.img.naturalHeight:l(e,a.el.clientHeight),"auto"===c[0]&&"auto"!==c[1]&&(d=e/a.img.naturalHeight*a.img.naturalWidth);var h=b.backgroundPosition;"top"===h?h="50% 0%":"left"===h?h="0% 50%":"right"===h?h="100% 50%":"bottom"===h?h="50% 100%":"center"===h&&(h="50% 50%"),h=h.split(" ");var i,j;return 4===h.length?(i=h[1],j=h[3]):(i=h[0],j=h[1]),j=j||"50%",i=l(i,a.el.clientWidth,d),j=l(j,a.el.clientHeight,e),4===h.length&&("right"===h[0]&&(i=a.el.clientWidth-a.img.naturalWidth-i),"bottom"===h[2]&&(j=a.el.clientHeight-a.img.naturalHeight-j)),i+=a.el.getBoundingClientRect().left,j+=a.el.getBoundingClientRect().top,{left:Math.floor(i),right:Math.floor(i+d),top:Math.floor(j),bottom:Math.floor(j+e),width:Math.floor(d),height:Math.floor(e)}}function n(a){var b,c,d;if(a.nodeType){var e=a.getBoundingClientRect();b={left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width,height:e.height},d=a.parentNode,c=a}else b=m(a),d=a.el,c=a.img;d=d.getBoundingClientRect(),b.imageTop=0,b.imageLeft=0,b.imageWidth=c.naturalWidth,b.imageHeight=c.naturalHeight;var f,g=b.imageHeight/b.height;return b.top<d.top&&(f=d.top-b.top,b.imageTop=g*f,b.imageHeight-=g*f,b.top+=f,b.height-=f),b.left<d.left&&(f=d.left-b.left,b.imageLeft+=g*f,b.imageWidth-=g*f,b.width-=f,b.left+=f),b.bottom>d.bottom&&(f=b.bottom-d.bottom,b.imageHeight-=g*f,b.height-=f),b.right>d.right&&(f=b.right-d.right,b.imageWidth-=g*f,b.width-=f),b.imageTop=Math.floor(b.imageTop),b.imageLeft=Math.floor(b.imageLeft),b.imageHeight=Math.floor(b.imageHeight),b.imageWidth=Math.floor(b.imageWidth),b}function o(a){var b=n(a);a=a.nodeType?a:a.img,b.imageWidth>0&&b.imageHeight>0&&b.width>0&&b.height>0?D.drawImage(a,b.imageLeft,b.imageTop,b.imageWidth,b.imageHeight,b.left,b.top,b.width,b.height):c("Skipping image - "+a.src+" - area too small")}function p(a,b,c){var d=a.className;switch(c){case"add":d+=" "+b;break;case"remove":var e=new RegExp("(?:^|\\s)"+b+"(?!\\S)","g");d=d.replace(e,"")}a.className=d.trim()}function q(a){for(var b,c=a?[a]:z("targets"),d=0;d<c.length;d++)b=c[d],b=z("changeParent")?b.parentNode:b,p(b,z("classes").light,"remove"),p(b,z("classes").dark,"remove"),p(b,z("classes").complex,"remove")}function r(a){var b,d,e,f,g=a.getBoundingClientRect(),h=0,i=0,j=0,k=0,l=z("mask");if(g.width>0&&g.height>0){q(a),a=z("changeParent")?a.parentNode:a,d=D.getImageData(g.left,g.top,g.width,g.height).data;for(var m=0;m<d.length;m+=4)d[m]===l.r&&d[m+1]===l.g&&d[m+2]===l.b?k++:(h++,b=.2126*d[m]+.7152*d[m+1]+.0722*d[m+2],e=b-j,i+=e*e,j+=e/h);k<=d.length/4*(1-z("minOverlap")/100)&&(f=Math.sqrt(i/h)/255,j/=255,c("Target: "+a.className+" lum: "+j+" var: "+f),p(a,j<=z("threshold")/100?z("classes").dark:z("classes").light,"add"),f>z("minComplexity")/100&&p(a,z("classes").complex,"add"))}}function s(a,b){return a=(a.nodeType?a:a.el).getBoundingClientRect(),b=b===F?b:(b.nodeType?b:b.el).getBoundingClientRect(),!(a.right<b.left||a.left>b.right||a.top>b.bottom||a.bottom<b.top)}function t(a){for(var b,c=(new Date).getTime(),d=a&&("IMG"===a.tagName||a.img)?"image":"targets",e=a?!1:!0,f=z("targets").length,g=0;f>g;g++)b=z("targets")[g],s(b,F)&&("targets"!==d||a&&a!==b?"image"===d&&s(b,a)&&r(b):(e=!0,r(b)));if("targets"===d&&!e)throw a+" is not a target";j(c)}function u(a){var b=function(a){var b=0;return"static"!==window.getComputedStyle(a).position&&(b=parseInt(window.getComputedStyle(a).zIndex,10)||0,b>=0&&b++),b},c=a.parentNode,d=c?b(c):0,e=b(a);return 1e5*d+e}function v(a){var b=!1;return a.sort(function(a,c){a=a.nodeType?a:a.el,c=c.nodeType?c:c.el;var d=a.compareDocumentPosition(c),e=0;return a=u(a),c=u(c),a>c&&(b=!0),a===c&&2===d?e=1:a===c&&4===d&&(e=-1),e||a-c}),c("Sorted: "+b),b&&c(a),b}function w(a,b,d){if(B){var e=z("mask");c("--- BackgroundCheck ---"),c("onLoad event: "+(d&&d.src)),b!==!0&&(D.clearRect(0,0,C.width,C.height),D.fillStyle="rgb("+e.r+", "+e.g+", "+e.b+")",D.fillRect(0,0,C.width,C.height));for(var f,g,h=d?[d]:z("images"),i=v(h),j=!1,k=0;k<h.length;k++)f=h[k],s(f,F)&&(g=f.nodeType?f:f.img,0===g.naturalWidth?(j=!0,c("Loading... "+f.src),g.removeEventListener("load",w),i?g.addEventListener("load",w.bind(null,null,!1,null)):g.addEventListener("load",w.bind(null,a,!0,f))):(c("Drawing: "+f.src),o(f)));d||j?d&&t(d):t(a)}}function x(a){z("windowEvents")===!0&&(E&&clearTimeout(E),E=setTimeout(a,200))}function y(a,b){if(void 0===H[a])throw"Unknown property - "+a;if(void 0===b)throw"Missing value for "+a;if("targets"===a||"images"===a)try{b=g("images"!==a||b?b:"img","images"===a?!0:!1)}catch(c){throw b=[],c}else e(b,typeof H[a]);q(),H[a]=b,w(),"debugOverlay"===a&&i()}function z(a){if(void 0===H[a])throw"Unknown property - "+a;return H[a]}function A(){for(var a,b=z("images"),c=[],d=0;d<b.length;d++)a=n(b[d]),c.push(a);return c}var B,C,D,E,F,G=void 0!==window.orientation?"orientationchange":"resize",H={};return{init:a,destroy:b,refresh:w,set:y,get:z,getImageData:A}});




// Generated by CoffeeScript 1.6.2
/*
jQuery tppoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("tppoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="tppoints-context-id";p="resize.tppoints";y="scroll.tppoints";v=1;w="tppoints-tppoint-ids";g="tppoint";m="tppoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.tppoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.tppoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.tppoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.tppoints.horizontal)&&n.isEmptyObject(this.tppoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="tppoints"+v++;this.offset=null;this.options=r;e.tppoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.tppoints[this.axis][this.id];return this.context.checkEmpty()};t.gettppointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.gettppointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery tppoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery tppoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.tppoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.tppoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery tppoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","tppoints"],n)}else{return n(t.jQuery)}})(this,function(t){var n,s;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"};s=function(t,n){t.wrap(n.wrapper);return t.parent()};t.tppoints("extendFn","sticky",function(e){var i,r,a;r=t.extend({},t.fn.tppoint.defaults,n,e);i=s(this,r);a=r.handler;r.handler=function(n){var s,e;s=t(this).children(":first");e=n==="down"||n==="right";s.toggleClass(r.stuckClass,e);i.height(e?s.outerHeight():"");if(a!=null){return a.call(this,n)}};i.tppoint(r);return this.data("stuckClass",r.stuckClass)});return t.tppoints("extendFn","unsticky",function(){this.parent().tppoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);




/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * License
 * -------
 * Creative Commons Attribution 2.5 License:
 * http://creativecommons.org/licenses/by/2.5/
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 */
var CanvasImage=function(a){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=a.width,this.height=this.canvas.height=a.height,this.context.drawImage(a,0,0,this.width,this.height)};CanvasImage.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},CanvasImage.prototype.update=function(a){this.context.putImageData(a,0,0)},CanvasImage.prototype.getPixelCount=function(){return this.width*this.height},CanvasImage.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},CanvasImage.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var ColorThief=function(){};/*!


/* quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if(ColorThief.prototype.getColor=function(a,b){var c=this.getPalette(a,5,b),d=c[0];return d},ColorThief.prototype.getPalette=function(a,b,c){"undefined"==typeof b&&(b=10),"undefined"==typeof c&&(c=10);for(var d,e,f,g,h,i=new CanvasImage(a),j=i.getImageData(),k=j.data,l=i.getPixelCount(),m=[],n=0;l>n;n+=c)d=4*n,e=k[d+0],f=k[d+1],g=k[d+2],h=k[d+3],h>=125&&(e>250&&f>250&&g>250||m.push([e,f,g]));var o=MMCQ.quantize(m,b),p=o.palette();return i.removeCanvas(),p},!pv)var pv={map:function(a,b){var c={};return b?a.map(function(a,d){return c.index=d,b.call(c,a)}):a.slice()},naturalOrder:function(a,b){return b>a?-1:a>b?1:0},sum:function(a,b){var c={};return a.reduce(b?function(a,d,e){return c.index=e,a+b.call(c,d)}:function(a,b){return a+b},0)},max:function(a,b){return Math.max.apply(null,b?pv.map(a,b):a)}};var MMCQ=function(){function a(a,b,c){return(a<<2*i)+(b<<i)+c}function b(a){function b(){c.sort(a),d=!0}var c=[],d=!1;return{push:function(a){c.push(a),d=!1},peek:function(a){return d||b(),void 0===a&&(a=c.length-1),c[a]},pop:function(){return d||b(),c.pop()},size:function(){return c.length},map:function(a){return c.map(a)},debug:function(){return d||b(),c}}}function c(a,b,c,d,e,f,g){var h=this;h.r1=a,h.r2=b,h.g1=c,h.g2=d,h.b1=e,h.b2=f,h.histo=g}function d(){this.vboxes=new b(function(a,b){return pv.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())})}function e(b){var c,d,e,f,g=1<<3*i,h=new Array(g);return b.forEach(function(b){d=b[0]>>j,e=b[1]>>j,f=b[2]>>j,c=a(d,e,f),h[c]=(h[c]||0)+1}),h}function f(a,b){var d,e,f,g=1e6,h=0,i=1e6,k=0,l=1e6,m=0;return a.forEach(function(a){d=a[0]>>j,e=a[1]>>j,f=a[2]>>j,g>d?g=d:d>h&&(h=d),i>e?i=e:e>k&&(k=e),l>f?l=f:f>m&&(m=f)}),new c(g,h,i,k,l,m,b)}function g(b,c){function d(a){var b,d,e,f,g,h=a+"1",j=a+"2",k=0;for(i=c[h];i<=c[j];i++)if(o[i]>n/2){for(e=c.copy(),f=c.copy(),b=i-c[h],d=c[j]-i,g=d>=b?Math.min(c[j]-1,~~(i+d/2)):Math.max(c[h],~~(i-1-b/2));!o[g];)g++;for(k=p[g];!k&&o[g-1];)k=p[--g];return e[j]=g,f[h]=e[j]+1,[e,f]}}if(c.count()){var e=c.r2-c.r1+1,f=c.g2-c.g1+1,g=c.b2-c.b1+1,h=pv.max([e,f,g]);if(1==c.count())return[c.copy()];var i,j,k,l,m,n=0,o=[],p=[];if(h==e)for(i=c.r1;i<=c.r2;i++){for(l=0,j=c.g1;j<=c.g2;j++)for(k=c.b1;k<=c.b2;k++)m=a(i,j,k),l+=b[m]||0;n+=l,o[i]=n}else if(h==f)for(i=c.g1;i<=c.g2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.b1;k<=c.b2;k++)m=a(j,i,k),l+=b[m]||0;n+=l,o[i]=n}else for(i=c.b1;i<=c.b2;i++){for(l=0,j=c.r1;j<=c.r2;j++)for(k=c.g1;k<=c.g2;k++)m=a(j,k,i),l+=b[m]||0;n+=l,o[i]=n}return o.forEach(function(a,b){p[b]=n-a}),d(h==e?"r":h==f?"g":"b")}}function h(a,c){function h(a,b){for(var c,d=1,e=0;k>e;)if(c=a.pop(),c.count()){var f=g(i,c),h=f[0],j=f[1];if(!h)return;if(a.push(h),j&&(a.push(j),d++),d>=b)return;if(e++>k)return}else a.push(c),e++}if(!a.length||2>c||c>256)return!1;var i=e(a),j=0;i.forEach(function(){j++});var m=f(a,i),n=new b(function(a,b){return pv.naturalOrder(a.count(),b.count())});n.push(m),h(n,l*c);for(var o=new b(function(a,b){return pv.naturalOrder(a.count()*a.volume(),b.count()*b.volume())});n.size();)o.push(n.pop());h(o,c-o.size());for(var p=new d;o.size();)p.push(o.pop());return p}var i=5,j=8-i,k=1e3,l=.75;return c.prototype={volume:function(a){var b=this;return(!b._volume||a)&&(b._volume=(b.r2-b.r1+1)*(b.g2-b.g1+1)*(b.b2-b.b1+1)),b._volume},count:function(b){var c=this,d=c.histo;if(!c._count_set||b){var e,f,g,h=0;for(e=c.r1;e<=c.r2;e++)for(f=c.g1;f<=c.g2;f++)for(g=c.b1;g<=c.b2;g++)index=a(e,f,g),h+=d[index]||0;c._count=h,c._count_set=!0}return c._count},copy:function(){var a=this;return new c(a.r1,a.r2,a.g1,a.g2,a.b1,a.b2,a.histo)},avg:function(b){var c=this,d=c.histo;if(!c._avg||b){var e,f,g,h,j,k=0,l=1<<8-i,m=0,n=0,o=0;for(f=c.r1;f<=c.r2;f++)for(g=c.g1;g<=c.g2;g++)for(h=c.b1;h<=c.b2;h++)j=a(f,g,h),e=d[j]||0,k+=e,m+=e*(f+.5)*l,n+=e*(g+.5)*l,o+=e*(h+.5)*l;c._avg=k?[~~(m/k),~~(n/k),~~(o/k)]:[~~(l*(c.r1+c.r2+1)/2),~~(l*(c.g1+c.g2+1)/2),~~(l*(c.b1+c.b2+1)/2)]}return c._avg},contains:function(a){var b=this,c=a[0]>>j;return gval=a[1]>>j,bval=a[2]>>j,c>=b.r1&&c<=b.r2&&gval>=b.g1&&gval<=b.g2&&bval>=b.b1&&bval<=b.b2}},d.prototype={push:function(a){this.vboxes.push({vbox:a,color:a.avg()})},palette:function(){return this.vboxes.map(function(a){return a.color})},size:function(){return this.vboxes.size()},map:function(a){for(var b=this.vboxes,c=0;c<b.size();c++)if(b.peek(c).vbox.contains(a))return b.peek(c).color;return this.nearest(a)},nearest:function(a){for(var b,c,d,e=this.vboxes,f=0;f<e.size();f++)c=Math.sqrt(Math.pow(a[0]-e.peek(f).color[0],2)+Math.pow(a[1]-e.peek(f).color[1],2)+Math.pow(a[2]-e.peek(f).color[2],2)),(b>c||void 0===b)&&(b=c,d=e.peek(f).color);return d},forcebw:function(){var a=this.vboxes;a.sort(function(a,b){return pv.naturalOrder(pv.sum(a.color),pv.sum(b.color))});var b=a[0].color;b[0]<5&&b[1]<5&&b[2]<5&&(a[0].color=[0,0,0]);var c=a.length-1,d=a[c].color;d[0]>251&&d[1]>251&&d[2]>251&&(a[c].color=[255,255,255])}},{quantize:h}}();


//Smooth Scroll for Windows & Linux Webkit Browsers
/*if (navigator.appVersion.indexOf("Win") != -1 || navigator.appVersion.indexOf("Linux") != -1) {
	if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
		jQuery.srSmoothscroll();
	}
}*/


// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


var miamiticker = false,
	miamilastscrolltop,
	miamianimframeid,
	mainwin = jQuery(window),
	mainwinh = 0,
	mainwinw = mainwin.width(),
	doc = jQuery(document),
	docheight = doc.height(),
	doctop = doc.scrollTop(),
	parallaxobjects = new Array(),
	parallaxtick = false,
	lastknowndoctop = doctop,
	forcescrolled = false,
	lastknownwinh = mainwinh,
	lastknownwinw = mainwinw;

/*================================================== */
/*		MIAMI SCREEN JS Version 1.0
/*================================================== */


jQuery(document).ready(function() {

	
	
	initDocuMenu();

	/* Smooth Scrolling for PC */
	jQuery(function () {
		var platform = navigator.platform.toLowerCase();
		if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
			if (jQuery.browser.webkit) {
				jQuery.srSmoothscroll({
					// defaults
					step: 150,
					speed: 400,
					ease: 'swing'
				});
			}
		}
	});

	mainwinh = jQuery.tppoints('viewportHeight');

	/* Fancy Select */
	jQuery('select[name=archive-dropdown],  .widget_categories select[name=cat], select[name=monster-widget-just-testing]').fancySelect();


	/* Tooltips */
	jQuery("a[data-rel^='tooltip']").tooltip();
	jQuery("li[data-rel^='tooltip']").tooltip();

	/* DESIGN THE RESPONSIVE MENU */
	designResponsiveMenu();

	/*Menu Background Color Adjuster*/
	initMenuBackgroundColors();

	/* MENU WIDTH ADJUSTER */
	initMenuWidthAdjuster();

	/* MENU STICKY */
	if (jQuery('#header').hasClass("makeitsticky"))
		initStickyMenu();


	/* STICK IMAGES */
	initStickyMainImage();

	/* MEGAMENU PREPARING */
	initMegaMenu();

	/* SEARCH CLICK */
	initSearch();

	/* STICKY HEADER BACKGROUND */
	var hb = jQuery('#header_background');
	if (hb.hasClass("makeitsticky"))
		if (hb.hasClass("withgrid")) {
			var gridc = hb.find('.esg-grid')
			gridc.on('gridisready',function() {
				initStickyHeaderBg();
			});
		} else {
			initStickyHeaderBg();
		}



	/* HEADER PAGE TITLE PARALLAX
	initPageTitleParallax(1);*/

	/* INIT STICKY SIDEBAR */
	initStickySideBar();
	if (hb.hasClass("withgrid")) {
		 var gridc = hb.find('.esg-grid');
		 gridc.on("gridisready",recalculateStickySideBar);
	}
	jQuery('.esg-grid').on('gridisready',recalculateStickySideBar);
	var rssb = setInterval(recalculateStickySideBar, 500)
	setTimeout(function() {
		clearInterval(rssb);
		rssb = setInterval(recalculateStickySideBar, 5000)
	},10000)


	/* SIGN BODY IF PAGE SCROLLED !! */
	jQuery(window).on("scroll",menuLayoutManager);
	menuLayoutManager();

	/* SPACE HOVERING */
	initSpaceHoverFun();




	/* TESTIMONIAL SLIDER */
	testimonialSlider();


	/* INIT SLIDE IN BAR */
	initSlideInBar();


	// START PARALLAX BACKGROUND IMAGES
	initParallaxBg();


	// FitVid
	initFitVid();

	// MAKE FOOTER STICKY
    if (jQuery('body').hasClass('stickyfooter') && !is_mobile() && jQuery('#footer').length>0) stickyFooter();


    // COLOR OVERLAYS ON IMAGES
	imageHovers();


    /* BACKGROUND COLOR BASED NAVIGATION */
    /*BackgroundCheck.init({
	   targets: '.miami-auto, .miami-auto .bullet',
	   classes: {dark:'miami-light',light:'miami-dark', complex:'miami-complex'},
	   images:'.defaultimg'
    });*/

    // PULL SHOWBIZ OUT IN BOXED MODE
    jQuery(window).resize(function() {
	   showBizBoxedTrick();
    });

    showBizBoxedTrick();

	// CREATE AJAX CONTAINER FOR ESSENTIAL GRID TO LOAD CONTENT THERE
	jQuery('.ess_img_preview').html('<img class="img1"><img class="img2">');
	punchgs.TweenLite.set(jQuery('.ess_img_preview img'),{maxHeight:"0%",autoAlpha:0});

	// ONE PAGER FUNCTIONS
	initAnchors();


	// RESIZE AND SCROLL FUNCTIONS
	jQuery(window).on("resize.basics",function() {
		mainwinh = jQuery.tppoints('viewportHeight');
		mainwinw = mainwin.width();
		docheight = doc.height();
		doctop = doc.scrollTop();

		// CALL FUNCTIONS
		parallaxResizing();
	});

	jQuery(window).on("scroll.basics",function() {

		docheight = doc.height();
		doctop = doc.scrollTop();

		//if (forcescrolled) return false;

		// CALL FUNCTIONS
		drawParallaxImages(false);
	});

	//window.requestAnimationFrame(drawParallaxImages);


	

	// CALL FUNCTIONS
	jQuery('.rowbgimage_offset img').waitForImages(function() {
			setTimeout(function() {
					drawParallaxImages(true);
			},200);
	});

	//BUILD

	if ( window.location.pathname=="/kriki-page-load-private" || window.location.pathname=="/kriki" || window.location.pathname=="/kriki-page-load-private/" || window.location.pathname=="/kriki/")
	{

		jQuery('body').append('<div data-effect="tp-effect" class="preloader-wrapper"></div>');
		var prew = jQuery('.preloader-wrapper');
		prew.append('<div class="preloader-leftbox"></div>');
		prew.append('<div class="preloader-rightbox"></div>');
		prew.append('<div class="pre-logo-wrapper"></div>');
		prew.append('<div class="pre-smart-text">Lou Gehrig, “Farewell to Baseball Address”</div>');

		var lbox = prew.find('.preloader-leftbox'),
			rbox = prew.find('.preloader-rightbox'),
			plogo = prew.find('.pre-logo-wrapper'),
			ptext = prew.find('.pre-smart-text'),
			src = "http://www.themepunch.com/wp-content/uploads/2014/11/tplogo_grey.png",	//jQuery('body').find('.mainlogo').attr('src'),
			srcloaded = "http://www.themepunch.com/wp-content/uploads/2014/11/tplogo_red.png";	//jQuery('body').find('.mainlogo').attr('src'),

		plogo.css({width:"163px",height:"50px"});
		plogo.append('<div class="pre-logo-idle"><img src="'+src+'"></div>');
		plogo.append('<div class="pre-logo-loaded"><img  src="'+srcloaded+'"></div>');

		punchgs.TweenLite.set('.pre-smart-text',{marginTop:"60px"});
		punchgs.TweenLite.fromTo('.pre-logo-wrapper',1,{force3D:"true",scale:0.2,autoAlpha:0,top:"100%",transformOrigin:"50% 50%", transformStyle:"flat",rotationX:-90,},{top:"55%",rotationX:0,scale:0.9,autoAlpha:1,ease:punchgs.Power3.easeOut,delay:1});
		punchgs.TweenLite.fromTo('.pre-smart-text',1,{force3D:"true",scale:0.2,autoAlpha:0,top:"120%",transformOrigin:"50% 50%", transformStyle:"flat",rotationX:90,},{top:"55%",rotationX:0,scale:0.9,autoAlpha:1,ease:punchgs.Power3.easeOut,delay:1.1});

		punchgs.TweenLite.to('.pre-logo-wrapper',10,{force3D:"true",top:"45%",z:0.01,ease:punchgs.Power4.easeOut,delay:1.7,scale:1});
		punchgs.TweenLite.to('.pre-smart-text',9,{force3D:"true",top:"45%",z:0.01,ease:punchgs.Power4.easeOut,delay:1.8,scale:1});

		punchgs.TweenLite.to('.pre-logo-loaded',0.5,{width:"100%",ease:punchgs.Power3.easeInOut,delay:0.2});

		setTimeout(function() {
				var prew = jQuery('.preloader-wrapper');

			switch (prew.data('effect')) {
				case "curtain-down":
					punchgs.TweenLite.to('.preloader-leftbox',0.8,{transformOrigin:"100% 100%", rotation:-110});
					punchgs.TweenLite.to('.preloader-rightbox',0.75,{transformOrigin:"0% 100%", rotation:110,onComplete:function() {
						prew.remove();
					}});
				break;
				case "slideright":

					punchgs.TweenLite.to('.preloader-leftbox',0.6,{transformOrigin:"100% 100%", x:"+200%",ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-rightbox',0.6,{transformOrigin:"0% 100%", x:"+100%",ease:punchgs.Power3.easeInOut,onComplete:function() {
						prew.remove();
					}});
				break;
				case "slideleft":
					punchgs.TweenLite.to('.preloader-leftbox',0.6,{transformOrigin:"100% 100%", x:"-100%",ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-rightbox',0.6,{transformOrigin:"0% 100%", x:"-200%",ease:punchgs.Power3.easeInOut,onComplete:function() {
						prew.remove();
					}});
				break;
				case "slideup":
					punchgs.TweenLite.to('.preloader-leftbox',0.6,{transformOrigin:"100% 100%", y:"-100%",ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-rightbox',0.6,{transformOrigin:"0% 100%", y:"-100%",ease:punchgs.Power3.easeInOut,onComplete:function() {
						prew.remove();
					}});
				break;
				case "slidedown":
					punchgs.TweenLite.to('.preloader-leftbox',0.6,{transformOrigin:"100% 100%", y:"+100%",ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-rightbox',0.6,{transformOrigin:"0% 100%", y:"+100%",ease:punchgs.Power3.easeInOut,onComplete:function() {
						prew.remove();
					}});
				break;
				case "foldleft":
					punchgs.TweenLite.to('.preloader-rightbox',0.8,{transformPerspective:600,transformOrigin:"0% 50%", transformStyle:"preserve-3d", rotationY:90,ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-wrapper',0.8,{transformPerspective:600,transformOrigin:"0% 50%", transformStyle:"flat", rotationY:90,ease:punchgs.Power3.easeInOut,delay:0.7,onComplete:function() {
						prew.remove();
					}});
				break;
				case "foldright":
					punchgs.TweenLite.to('.preloader-leftbox',0.8,{transformPerspective:600,transformOrigin:"100% 50%", transformStyle:"preserve-3d", rotationY:-90,ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-wrapper',0.8,{transformPerspective:600,transformOrigin:"100% 50%", transformStyle:"flat", rotationY:-90,ease:punchgs.Power3.easeInOut,delay:0.7,onComplete:function() {
						prew.remove();
					}});
				break;
				case "pressright":
					punchgs.TweenLite.to('.preloader-leftbox',0.6,{transformOrigin:"100% 100%", backgroundColor:"#ddd", z:-30,ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-leftbox',1.2,{x:"+200%",ease:punchgs.Power3.easeInOut,delay:0.6});
					punchgs.TweenLite.to('.preloader-rightbox',0.8,{x:"+100%",ease:punchgs.Power3.easeIn,delay:0.7,onComplete:function() {
						prew.remove();
					}});
				break;
				case "pressleft":
					punchgs.TweenLite.set('.preloader-rightbox',{zIndex:1});
					punchgs.TweenLite.set('.preloader-leftbox',{zIndex:5});
					punchgs.TweenLite.to('.preloader-rightbox',0.6,{transformOrigin:"100% 100%", backgroundColor:"#ddd", z:-30,ease:punchgs.Power3.easeInOut});
					punchgs.TweenLite.to('.preloader-rightbox',1.2,{x:"-200%",ease:punchgs.Power3.easeInOut,delay:0.6});
					punchgs.TweenLite.to('.preloader-leftbox',0.8,{x:"-100%",ease:punchgs.Power3.easeIn,delay:0.7,onComplete:function() {
						prew.remove();
					}});
				break;
				case "tp-effect":
					punchgs.TweenLite.to('.preloader-rightbox',1,{y:"-100%",ease:punchgs.Power3.easeInOut,overwrite:"all"});
					punchgs.TweenLite.to('.preloader-leftbox',1,{y:"-100%",ease:punchgs.Power3.easeInOut,overwrite:"all"});
					punchgs.TweenLite.to('.pre-logo-wrapper',1,{ease:punchgs.Power3.easeOut,autoAlpha:0,delay:0.1,overwrite:"all"});
					punchgs.TweenLite.to('.pre-logo-wrapper',1,{top:"-20%",ease:punchgs.Power2.easeInOut,scale:1,delay:0.1,overwrite:"all"});
					punchgs.TweenLite.to('.pre-smart-text',1,{top:"-20%",marginTop:0,ease:punchgs.Power2.easeInOut,scale:1,delay:0.1,overwrite:"all",onComplete:function() {
						prew.remove();
					}});
				break;


				default:

				break;
			}
		},3500);
	};



	//POLY EFFECTS ON ROWS
	jQuery('.poly-overlay').each(function() {
		var pc = jQuery(this);
		pc.append('<div class="left-poly-side"></div>');
		pc.append('<div class="right-poly-side"></div>');
	});

	if (!is_mobile()) {
		var polyint = setInterval(function() {
			polyCalculates(true);
		},50);

		setTimeout(function() {
			clearInterval(polyint);
		},5000);
	} else {
		var polyint = setInterval(function() {
			polyCalculates(true);
		},250);

		setTimeout(function() {
			clearInterval(polyint);
		},5000);
	}



	// RECALL ON RESIZE THE POLY CONTAINERS
	jQuery(window).resize(function() {
		polyCalculates(true);
	});

	// FIRST LOAD OF PAGE


	// SCROLL EVENTS
	var scevent,
		lastdoctop = doc.scrollTop(),
		polytimer;

	jQuery(window).on("scroll.basics",function() {

		docheight = doc.height();
		doctop = doc.scrollTop();

		//if (forcescrolled) return false;

		// CALL FUNCTIONS
		drawParallaxImages(false);
		if (!is_mobile()) {
			polyCalculates();
			clearTimeout(polytimer);
			polytimer = setTimeout(function() {
				polyCalculates();
			},250);
		};
	});

	jQuery(window).trigger("resize");


	if(jQuery('.esg-filter-wrapper.eg-search-wrapper').length) initFAQSearch();

	
});

function initDocuMenu() {
	jQuery('#menu-revslider-jquery-doc .menu-link,#menu-revslider-wp-doc .menu-link ').addClass("docu-link");

	jQuery('#menu-revslider-jquery-doc ul, #menu-revslider-wp-doc ul').each(function() {
		var ul = jQuery(this),
			li = ul.closest('li');
		li.prepend('<div class="menu-expander"><i class="icon-angle-right"></i></div>')
		li.addClass("docuwithsubmenu")
		var exp = li.find('.menu-expander');
		li.find('>a, >.menu-expander').click(function() {
			var li = jQuery(this).closest('li'),
				exp = li.find('>.menu-expander');
			if (exp.hasClass("opened")) {
				exp.removeClass("opened");
				exp.find('.icon-angle-down').addClass('icon-angle-right').removeClass('icon-angle-down');
				li.find('>ul').slideUp(200);
			} else {
				exp.addClass("opened");
				exp.find('.icon-angle-right').addClass('icon-angle-down').removeClass('icon-angle-right');
				li.find('>ul').slideDown(200);
			}			
			return false;
		});

		ul.hide();
	});
}

/******************************
	-	FAQ SEARCH	-
********************************/



function randomString(string_length) {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;

}


function initFAQSearch() {

	var wr = jQuery('.esg-filter-wrapper.eg-search-wrapper'),
		ip = wr.find('.eg-search-input');
	ip.val("");
	//ip.attr('placeholder','');
	wr.find('.eg-search-clean').css({zIndex:200});
	wr.find('.eg-search-submit').css({zIndex:200});
	wr.parent().append('<div class="search-fake-anim"></div>');
	var sfa = wr.parent().find('.search-fake-anim'),
		tl = new punchgs.TimelineLite();

	tl.pause();
	punchgs.TweenLite.set(wr,{autoAlpha:1,zIndex:100,position:"relative",transformOrigin:"50% 50% -47px",rotationX:0,perspective:1200});
	punchgs.TweenLite.set(sfa,{autoAlpha:0,zIndex:10,rotationX:90,transformOrigin:"50% 50% -47px",perspective:1200});
	tl.from(wr,1.5,{autoAlpha:0,rotationX:-90,ease:punchgs.Power3.easeInOut});
	tl.from(sfa,1.5,{autoAlpha:1,backgroundColor:"rgba(255,255,255,0)",rotationX:0,ease:punchgs.Power3.easeInOut},0);

	

	tl.eventCallback("onComplete",function() {
		var wr = jQuery('.esg-filter-wrapper.eg-search-wrapper'),
		ip = wr.find('.eg-search-input');
		//wr.find('.search-fake-anim').css({display:"none",zIndex:150});
		//ip.attr('placeholder','Search...');
	})


	jQuery(window).on("scroll.faqshow",function() {
		var sfatop = wr.offset().top;
		if (sfatop>doctop && sfatop<(doctop+mainwinh-100)) {
			jQuery(window).unbind("scroll.faqshow");
			tl.play();
		}
	});

	ip.on("searchstarting",function() {

		var wr = jQuery('.esg-filter-wrapper.eg-search-wrapper'),
			ip = wr.find('.eg-search-input'),
			sfa = wr.parent().find('.search-fake-anim'),
			tls = new punchgs.TimelineLite();


		punchgs.TweenLite.to(wr,0.75,{autoAlpha:0,rotationX:-90,ease:punchgs.Power3.easeInOut});
		punchgs.TweenLite.to(sfa,0.75,{autoAlpha:1,backgroundColor:"rgba(255,255,255,0.1)",rotationX:0,ease:punchgs.Power3.easeInOut},0);
		var str = ip.val();
		sfa.html(str);

		var splitoriginal = new punchgs.SplitText(sfa,{type:"chars"});
		punchgs.TweenLite.set(splitoriginal.chars,{autoAlpha:0});

		jQuery.each(splitoriginal.chars,function(index,ch) {
			var och = jQuery(ch).text();
			tls.add(punchgs.TweenLite.to(ch,0.3,{autoAlpha:1,ease:punchgs.Power3.easeInOut,onUpdate:function() { jQuery(ch).html(randomString(1)); }, onComplete:function() {jQuery(ch).html(och);}}),index*0.1);
		});
		tls.eventCallback("onComplete",function() {
			tls.timeScale(3);
			tls.reverse();
		})
		tls.eventCallback("onReverseComplete",function() {
			tls.timeScale(1);
			tls.play();
		});

		wr.data('searchingtl',tl);

	});

	ip.on("searchended",function() {
		var wr = jQuery('.esg-filter-wrapper.eg-search-wrapper'),
			ip = wr.find('.eg-search-input'),
			sfa = wr.parent().find('.search-fake-anim'),
			tls = new punchgs.TimelineLite(),
			mtls = new punchgs.TimelineLite();

		punchgs.TweenLite.to(wr,0.75,{autoAlpha:1,rotationX:0,ease:punchgs.Power3.easeInOut});
		punchgs.TweenLite.to(sfa,0.75,{autoAlpha:0,backgroundColor:"#fff",rotationX:90,ease:punchgs.Power3.easeInOut},0);
		wr.data('searchingtl').kill();

	});



}

/******************************
	-	POLY FUN	-
********************************/
function polyCalculates(colorit) {
	// INITIALISING THE POLY CONTAINERS
	jQuery('.poly-overlay').each(function() {
		var pn = jQuery(this),
			sh = pn.data('bgheight'),
			lw = pn.data('leftwidth'),
			rw = pn.data('rightwidth'),
			bgcol = pn.data('bgcolor'),
			animdir = pn.data('animdirection'),
			ch = sh,
			docdoctop = doctop>0 ? doctop : 0,
			screenpos = pn.offset().top - docdoctop,
			ps;

			if (mainwinw<512) ch = sh = sh/4;
			else
			if (mainwinw<768) ch = sh = sh/3;
			else
			if (mainwinw<1024) ch = sh = sh/2;

		


		if ((screenpos>-50 && screenpos < mainwinh+150) || colorit) {

			// NEGATIVE POLYIES
			if (pn.hasClass("poly-negative")) {
				if (pn.hasClass("poly-bottom")) {
				// BOTTOM POLYIES

					if (animdir=="invers")
						ch = ch - (ch * (((mainwinh-screenpos) / mainwinh)));
					else
						ch = Math.round(ch * ((mainwinh - screenpos) / mainwinh));

					if (ch<0) ch=0;
					if (ch>sh) ch=sh;
					if (is_mobile()) ch=sh;

					pn.find('.left-poly-side').each(function() {
						var ps = jQuery(this);
						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:ch+"px 0px 0px "+((mainwinw*lw)+1)+"px"});
						if (colorit) ps.css({borderColor:"transparent transparent transparent "+bgcol});
					});
					pn.find('.right-poly-side').each(function() {
						var ps = jQuery(this);
						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:"0px 0px "+ch+"px "+(mainwinw*rw)+"px"});
						if (colorit)  ps.css({borderColor:"transparent transparent "+bgcol+" transparent"});
					});
				} else {
				// TOP POLYIES
					if (animdir=="invers")
						ch = ch - (ch * ((screenpos / mainwinh)));
					else
						ch = Math.round(ch * (screenpos / mainwinh));

					if (ch<0) ch=0;
					if (ch>sh) ch=sh;
					if (is_mobile()) ch=sh;

					pn.find('.left-poly-side').each(function() {
						var ps = jQuery(this);
						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:ch+"px "+((mainwinw*lw)+1)+"px 0px 0px"});
						if (colorit) ps.css({borderColor:bgcol+" transparent transparent transparent"});
					});
					pn.find('.right-poly-side').each(function() {
						var ps = jQuery(this);

						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:"0px "+(mainwinw*rw)+"px "+ch+"px 0px"});
						if (colorit)  ps.css({borderColor:"transparent "+bgcol+" transparent transparent"});

					});
				}
			} else {
				if (pn.hasClass("poly-bottom")) {
				// BOTTOM POLYIES
					if (animdir=="invers")
						ch = ch - (ch * (((mainwinh-screenpos) / mainwinh)));
					else
						ch = Math.round(ch * ((mainwinh - screenpos) / mainwinh));
					if (ch<0) ch=0;
					if (ch>sh) ch=sh;
					if (is_mobile()) ch=sh;
					pn.find('.left-poly-side').each(function() {
						var ps = jQuery(this);
						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:"0px 0px "+ch+"px "+((mainwinw*lw)+1)+"px"});
						if (colorit) ps.css({borderColor:"transparent transparent "+bgcol+" transparent"});
					});
					pn.find('.right-poly-side').each(function() {
						var ps = jQuery(this);
						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:ch+"px 0px 0px "+(mainwinw*rw)+"px"});
						if (colorit)  ps.css({borderColor:"transparent transparent transparent "+bgcol});
					});
				} else {
				// TOP POLYIES
					if (animdir=="invers")
						ch = ch - (ch * ((screenpos / mainwinh)));
					else
						ch = Math.round(ch * (screenpos / mainwinh));
					if (ch<0) ch=0;
					if (ch>sh) ch=sh;
					if (is_mobile()) ch=sh;

					pn.find('.left-poly-side').each(function() {
						var ps = jQuery(this);
						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:"0px "+((mainwinw*lw)+1)+"px "+ch+"px 0px"});
						if (colorit) ps.css({borderColor:"transparent "+bgcol+" transparent transparent"});
					});
					pn.find('.right-poly-side').each(function() {
						var ps = jQuery(this);

						punchgs.TweenLite.to(ps,0.6,{overwrite:"all",ease:punchgs.Power3.easeOut,borderWidth:ch+"px "+(mainwinw*rw)+"px 0px 0px"});
						if (colorit)  ps.css({borderColor:bgcol+" transparent transparent transparent"});

					});
				}
			}


		}
	})
}




/******************************
	-	INITIALISE ANCHORS	-
********************************/
function initAnchors() {

	var anchorarray = new Array,
		lastknowheaderheight = jQuery('#header_inner_wrapper').height();

	// ANCHOR AND ITS HIGHLITS
	jQuery('.onepagermenu #navigation .menu-link, .docu-link').each(function(i) {
		var a = jQuery(this),
			obj = new Object();

		if (!a.parent().hasClass("docuwithsubmenu")) {

			obj.button = a;
			obj.href = a.attr("href");

			if(obj.href!=undefined){
				obj.href = obj.href.split("#");
				obj.href = obj.href[obj.href.length-1];
				obj.href = "#"+obj.href;
				obj.fakehref = obj.href.replace("#","#!");			
				if (obj.href!=undefined && obj.href.split("http").length<2) {
					obj.target = jQuery(obj.href);
					obj.offset = obj.target.data('offset') == undefined ? 0 : obj.target.data('offset');
				}

				if (a.hasClass("docu-link")) obj.offset = -75;
				if (obj.target!=undefined && obj.target.length>0)
					anchorarray.push(obj);
			}
		}
	});

	// IF MENU ANCHORS EXISTS
	if (anchorarray.length>0) {
		checkAnchors(anchorarray);


		// RECHECK EVERY 1 SEC
		setInterval(function() {
			checkAnchors(anchorarray);
			lastknowheaderheight = jQuery('#header_inner_wrapper').height();
		}, 1000)

		jQuery(window).on("resize.onpage",function() {
			checkAnchors(anchorarray);
			lastknowheaderheight = jQuery('#header_inner_wrapper').height();
		});

		jQuery(window).on("scroll.onepager",function() {
			if (forcescrolled) return false;
			var lastobj=anchorarray[0];
			jQuery.each(anchorarray,function(index,obj) {
				obj.button.parent().removeClass("current-menu-ancestor");

				if (doctop+lastknowheaderheight>(obj.top+obj.offset)) {
					lastobj = obj;
				}
			});

			

			if (lastobj!=undefined) {
				lastobj.button.parent().addClass("current-menu-ancestor");

			}
		});



		setTimeout(function() {
			jQuery(window).trigger("scroll.onepager");
		},200);
		setTimeout(function() {
			jQuery(window).trigger("scroll.onepager");
		},1200);
		setTimeout(function() {
			jQuery(window).trigger("scroll.onepager");
		},2200);


	}

	jQuery('.onepagermenu #navigation .menu-link, .onepagermenu .onepager-link, .docu-link').each(function(i) {
		var a = jQuery(this);
			
		a.click(function() {
			if (a.parent().hasClass("docuwithsubmenu")) return false;
			var obj = new Object(),
				ypos = 0;
				
				if (a.attr('href') != undefined) {
					obj.href = a.attr("href");
					obj.href=obj.href.split("#");
					
					if (obj.href.length<=1) return true;
					obj.href = "#"+obj.href[obj.href.length-1];
					
					obj.target = jQuery(obj.href);
					if (obj.href!=undefined && obj.target!=undefined && jQuery(obj.target).length>0) {

						if (jQuery(this).closest('li').hasClass("current-menu-ancestor")) return false;
						
						obj.offset = obj.target.data('offset') == undefined ? 0 : obj.target.data('offset');
						if (a.hasClass('docu-link')) obj.offset = -75;
						obj.top = jQuery(obj.target).offset().top;
						ypos = obj.top+obj.offset;
						var counter = {val:doctop};		
						
						if (jQuery('body').data('currenscrollanim')!=undefined)
								jQuery('body').data('currenscrollanim').pause();				
						
						var sanim = punchgs.TweenLite.to(counter,1.5,{val:ypos,ease:punchgs.Power4.easeOut,
								onUpdate:function() {
									forcescrolled = true;									
									punchgs.TweenLite.set(jQuery('body, html'),{scrollTop:counter.val});
								},
								onComplete:function(){
									forcescrolled = false;
									jQuery(window).trigger("scroll.onepager");
								}
						});

						forcescrolled = true;
						jQuery.each(anchorarray,function(index,obj) {
							obj.button.parent().removeClass("current-menu-ancestor");
						});
						a.parent().addClass("current-menu-ancestor");
						jQuery('body').data('currenscrollanim',sanim);
						return false;
					} else {
						return true;
					}
				} else {
					return true;
				}
			

		})
	});

}

/******************************
	-	Check Anchors	-
********************************/
function checkAnchors(aa) {
	jQuery.each(aa,function(index,obj) {
		if (obj && obj!=undefined && obj.target!=undefined && jQuery(obj.target).length>0)
			obj.top = jQuery(obj.target).offset().top;
	});

}

/*****************************************************************
	-	SHOW BIG ITEMS ON CLICK OF A LIGHTBOX ICON IN GRID	-
*****************************************************************/

var showItemInBig = function(obj) {
	var src = obj.attr('href'),
    		eip = jQuery('.ess_img_preview'),
			imga = eip.find('.img1'),
			imgb = eip.find('.img2'),
			cv =  eip.data('imgv')==undefined ? 0 : eip.data('imgv'),
			img = new Image();

			img.onload = function() {
					if (cv==0) {
				    	imga.attr('src',src);
						punchgs.TweenLite.to(imga,0.5,{position:"relative",maxHeight:"100%",autoAlpha:1});
						punchgs.TweenLite.to(imgb,0.5,{position:"absolute",maxHeight:"100%",autoAlpha:0});
						eip.data('imgv',1);
					} else {
				    	imgb.attr('src',src);
						punchgs.TweenLite.to(imga,0.5,{position:"absolute",maxHeight:"100%",autoAlpha:0});
						punchgs.TweenLite.to(imgb,0.5,{position:"relative",maxHeight:"100%",autoAlpha:1});
						eip.data('imgv',0);
					}
		    	var scrollYPos = eip.offset().top;
				punchgs.TweenLite.to(jQuery('body, html'), 2, {scrollTop:scrollYPos, ease:punchgs.Power4.easeOut});
			};
			img.src = src;
}


/************************************************
	-	SHOWBIZ BOXED FULLWIDTH CORRECTION	-
************************************************/
/* SHOWBIZ MARGIN CORRECTION IN BOXED LAYOUT */
    function showBizBoxedTrick() {
	    jQuery('.boxed').find('.showbiz-container').each(function() {
	    	var sc = jQuery(this);

			sc.css({marginLeft:"0px",
					marginRight:"0px"
			});


	    	var ciw = jQuery('#content_inner_wrapper');
				mu = (ciw.innerWidth() - sc.innerWidth()) / 2;

			if (mu<50) {
				sc.css({marginLeft:(0-mu)+"px",
						marginRight:(0-mu)+"px"
				});
			}
	    });
	 }

/******************************
	-	COLOR OVERLAYS ON IMAGES	-
********************************/
 function imageHovers() {
				var colorThief = new ColorThief();
			    jQuery('.tp-imghover-wrapper').each(function() {
				    var imgp = jQuery(this),
						img = imgp.find('img'),
						hov = imgp.find('.tp-imghover-hover');

						hov.data('test',Math.round(Math.random()*10000));

				    // IF CANVAS5 SUPPORTED

					var imgl = new Image();
					imgl.onload = function() {
						var imgres = jQuery(this),
							imgcolor = undefined;
							imgClasser(imgp);
					    	if (isCanvasSupported) {
					    		try{
							    	var image = imgres[0],
										imgcolor = colorThief.getColor(image);
										hov.css({background:'rgba('+imgcolor[0]+','+imgcolor[1]+','+imgcolor[2]+',1)'});
										jQuery('canvas').remove();
									} catch(e) {
										jQuery('canvas').remove();
									}
								}
					}

					imgl.onerror = function(e) {
						if (window.console) console.log("Feilure at Calculating Image Hover Colors (Origin Error)");
					}

					imgl.src = img.attr('src');


					punchgs.TweenLite.set(imgp,{perspective:600,force3D:"true",transformStyle:"flat"});
					 // BUILD THE CONTENT OF THE IMAGE CONTAINER
					 var animlib = [
					 					[   "charlie",
					 						['img',0.3,{scale:1.1, xPercent:-5,x:0,transformOrigin:"50% 50%"},{xPercent:0,scale:1.1},0],
					 						['.tp-imghover-hover',0.3,{autoAlpha:0.3},{autoAlpha:0},0],
					 						['.tp-imghover-title',0.3,{autoAlpha:1,x:0,y:10},{x:0,y:0},0],
					 						['.tp-imghover-subtitle',0.15,{x:0,y:20,autoAlpha:0},{autoAlpha:1,x:0,y:0},0.15]
					 					],
					 					[	"buddy",
					 						['img',0.3,{scale:1,x:0,transformOrigin:"80% 30%"},{xPercent:0,scale:1.1},0],
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.7},0],
					 						['.tp-imghover-title',0.3,{color:"#fff",autoAlpha:1,x:0,y:-10},{color:"#fff",x:0,y:-30},0],
					 						['.tp-imghover-subtitle',0.2,{x:0,y:0,autoAlpha:0},{autoAlpha:1,x:0,y:0},0.1]
					 					],
					 					[	"rocky",
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.3},0],
					 						['.tp-imghover-title',0.3,{autoAlpha:1,x:0,y:0},{x:0,y:0},0],
					 						['.tp-imghover-title',0.3,{autoAlpha:0,x:0,y:0,rotationX:-90,transformPerspective:600,transformOrigin:"50% 0%"},{autoAlpha:1,x:0,y:0,rotationX:0},0,true,"words",0.12],
					 						['.tp-imghover-subtitle',0.3,{autoAlpha:1,x:0,y:0},{x:0,y:0},0],
					 						['.tp-imghover-subtitle',0.3,{autoAlpha:1,x:0,y:0,rotationX:90,transformPerspective:600,transformOrigin:"50% 100%"},{autoAlpha:1,x:0,y:0,rotationX:0},0,true,"words",0.01],
					 						['.tp-imghover-bottomline',0.3,{autoAlpha:1,height:0},{autoAlpha:1,height:6},0]
					 					],
					 					[	"cooper",
					 					    ['img',0.3,{scale:1.1, yPercent:-5,x:0,transformOrigin:"50% 50%"},{yPercent:0,scale:1.0},0],
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.7},0],
					 						['.tp-imghover-title',0.3,{autoAlpha:1,x:0,y:-30},{x:0,y:0},0],
					 						['.tp-imghover-subtitle',0.2,{x:0,y:-10,autoAlpha:0},{autoAlpha:1,x:0,y:0},0.1],
					 						['.tp-imghover-topline',0.3,{autoAlpha:0,scaleX:0},{autoAlpha:1,scaleX:1},0.2],
					 						['.tp-imghover-bottomline',0.4,{autoAlpha:0,scaleX:0},{autoAlpha:1,scaleX:1},0.1],
					 						['.tp-imghover-leftline',0.2,{autoAlpha:0,scaleY:0},{autoAlpha:1,scaleY:1},0.3],
					 						['.tp-imghover-rightline',0.35,{autoAlpha:0,scaleY:0},{autoAlpha:1,scaleY:1},0.15]
					 					],
					 					[	"buster",
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.6},0],
					 						['.tp-imghover-title',0.3,{autoAlpha:0,x:0,yPercent:+100},{autoAlpha:1,x:0,y:0,yPercent:0},0],
					 						['.tp-imghover-subtitle',0.3,{autoAlpha:1,x:0,y:0},{x:0,y:0},0],
					 						['.tp-imghover-subtitle',0.3,{autoAlpha:0,x:0,y:-10},{autoAlpha:1,x:0,y:0},0,true,"words",0.005]
					 					],
					 					[	"murphy",
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.7},0],
					 						['.tp-imghover-title',0.2,{autoAlpha:1,x:0,y:0},{x:0,y:-30},0],
					 						['.tp-imghover-subtitle',0.2,{x:0,y:0,autoAlpha:0,scale:0.6},{autoAlpha:1,x:0,y:0,scale:1},0.1],
					 						['.tp-imghover-topline',0.2,{autoAlpha:0,y:0,scale:0.7},{autoAlpha:1,y:0,scale:1},0.1],
					 					],
					 					[	"sam",
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.7},0],
					 						['.tp-imghover-title',0.2,{autoAlpha:1,x:0,y:0},{x:0,y:-15},0],
					 						['.tp-imghover-subtitle',0.2,{x:0,y:60,autoAlpha:0},{autoAlpha:1,x:0,y:0,scale:1},0.1],
					 						['.tp-imghover-topline',0.2,{autoAlpha:0,y:20,scale:1},{autoAlpha:1,y:0,scale:1},0.2],
					 					],
					 					[	"oscar",
					 					    ['img',0.3,{scale:1.1, yPercent:+5,x:0,transformOrigin:"50% 50%"},{yPercent:0,scale:1.0},0],
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.7},0],
					 						['.tp-imghover-title',0.3,{autoAlpha:1,x:0,y:0},{x:0,y:-30},0],
					 						['.tp-imghover-subtitle',0.2,{x:0,y:0,autoAlpha:0,scale:0.6},{autoAlpha:1,x:0,y:0,scale:1},0.1]
					 					],
					 					[	"rusty",
					 					    ['img',0.3,{scale:1.1, xPercent:-5,x:0,transformOrigin:"20% 50%"},{xPercent:0,scale:1.0},0],
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.7},0],
					 						['.tp-imghover-title',0,{autoAlpha:1,x:0,y:0},{x:0,y:0},0],
					 						['.tp-imghover-subtitle',0.2,{x:-30,y:0,autoAlpha:0,scale:1},{autoAlpha:1,x:0,y:0,scale:1},0.1]
					 					],
					 					[	"gizmo",
					 					    ['img',0.3,{scale:1.1, xPercent:-5,x:0,transformOrigin:"20% 50%"},{xPercent:0,scale:1.1},0],
					 						['.tp-imghover-hover',0.2,{autoAlpha:0},{autoAlpha:0.5},0],
					 						['.tp-imghover-title',0,{autoAlpha:1,x:0,y:0},{x:0,y:0},0],
					 						['.tp-imghover-topline',0.2,{autoAlpha:0,scaleX:0,transformOrigin:"0% 50%"},{autoAlpha:1,scaleX:1},0.2],
					 						['.tp-imghover-subtitle',0.2,{xPercent:+100,y:0,autoAlpha:0,scale:1},{autoAlpha:1,xPercent:0,y:0,scale:1},0.1]
					 					],


					 				],
					 	timeline = new punchgs.TimelineLite();


					 timeline.pause(0);

					 if (imgp.hasClass("gizmo")) {
						 imgp.find('.tp-imghover-title').prependTo(imgp.find('.tp-imghover-overlay-inner'));
					 }
					 jQuery.each(animlib,function(index,anim) {
						if (imgp.hasClass(anim[0])) {
							jQuery.each(anim,function(index,obj) {
								if (index>0) {
									var elem = imgp.find(obj[0]);
									if (obj[5]) {
										var splitt = new punchgs.SplitText(elem,{type:obj[6]});
										var subtimeline = new punchgs.TimelineLite();
										jQuery.each(splitt.words,function(index,word) {
											subtimeline.add(punchgs.TweenLite.fromTo(word,obj[1],obj[2],obj[3]),index*obj[7]);
										})
										timeline.add(subtimeline,obj[4]);
									} else
									timeline.add(punchgs.TweenLite.fromTo(elem,obj[1],obj[2],obj[3]),obj[4]);

								}
							});
						}
					 });


					 imgp.data('hover',timeline);
					 imgClasser(imgp);
					 jQuery(window).resize(function(){
						  jQuery('.tp-imghover-wrapper').each(function() {
							  var imgp = jQuery(this);
							  imgClasser(imgp);
							 });
					 });


					 imgp.hover(function() {
					 	var imgp = jQuery(this);
						imgp.data("hover").play(0);
						imgClasser(imgp);

					 },function() {
					 	 var imgp = jQuery(this);
						 imgp.data("hover").reverse();

					 })


			    })
			}

/****************************************************
	-	CHANGE IMAGE CLASS BASED ON ITS SIZE	-
****************************************************/

function imgClasser(imgp) {
	var	img=jQuery(this).find('img'),
 	 	ww = imgp.width(),
 	 	hh = imgp.height();


	 if (ww>390)
		 	 imgp.removeClass("mediumimage").removeClass("smallimage");
 	 else
	 if (ww>270)
		 	 imgp.addClass("mediumimage").removeClass("smallimage");
 	 else
		 	 imgp.removeClass("mediumimage").addClass("smallimage");
}

/***************************************
	-	CANVAS SUPPORT DETECTION	-
****************************************/

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  var support = !!(elem.getContext && elem.getContext('2d'));
  elem.remove();
  return support;
}

	/******************************
		-	STICKY FOOTER-
	********************************/
	function stickyFooter() {



		setMBBottom();

		// SET SIZE OF MARGIN REGULARY NEW, SINCE CONTENT CAN BE LOADED INTO THE FOOTER LATER
		setInterval(function() {
			setMBBottom();
		},1000);

		// SET MARGIN BOTTOM OF ALLWRAPPER AFTER RESIZE
		jQuery(window).on("resize.stickyfooter",function() {
			setMBBottom();
		})

		jQuery(window).on("scroll.stickyfooter",stickyFooterDraw);
		var stickyfooter = setInterval(stickyFooterDraw, 300)

		function stickyFooterDraw() {
			var opa = (docheight- mainwinh) - doctop;
			opa = opa / jQuery('#footer').height();
			opa = 1- opa;
			if (mainwinw<=768) opa = 1;
			punchgs.TweenLite.set(jQuery('#footer .footer-inner .widgetslot .footer_widget, #footer .footer-inner .widgetslot .sidebar_widget'),{opacity:opa});
		}
	}

	function setMBBottom() {
		var enabled;
		if (mainwinw<=768) {
				jQuery('#footer').css({position:'relative',bottom:'0px',zIndex:0});
				enabled = false;
			} else {
				jQuery('#footer').css({position:'fixed',bottom:'0px',zIndex:0});
				enabled = true;
			}

		if (enabled)
			jQuery('#bodywrapper').css({marginBottom:(Math.round(jQuery('#footer').height())-1)+"px"});
		else
			jQuery('#bodywrapper').css({marginBottom:"0px"});
	}

/******************************
	-	SLIDE IN BAR 	-
********************************/

function initSlideInBar() {
		jQuery('#sidewidgetpanel.dark .sidebar_widget').removeClass('sidebar_widget').addClass('footer_widget');

		punchgs.TweenLite.set(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),{transformOrigin:"50% 50%", force3D:"auto",scaleX:0,autoAlpha:0});

		jQuery('.theplusbutton').click(function() {

			var bw = jQuery('#bodywrapper'),
				swp = jQuery('#sidewidgetpanel'),
				tpb = jQuery(this);

			if (swp.hasClass("opened")) {

				tpb = jQuery('.theplusbutton');
				punchgs.TweenLite.to(tpb,0.5,{rotationZ:0,ease:punchgs.Power2.easeOut});

				punchgs.TweenLite.to(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),0.3,{autoAlpha:0,onComplete:function() {
					punchgs.TweenLite.set(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),{scaleX:0});
				}});

				punchgs.TweenLite.fromTo(swp,0.5,{autoAlpha:1,x:0},{autoAlpha:0,x:300,ease:punchgs.Power3.easeOut, onComplete:function(){
					punchgs.TweenLite.set(swp,{autoAlpha:0,clearProps:"transform"});
				}});
				swp.removeClass("opened");
			} else {

				tpb = jQuery('.theplusbutton');
				punchgs.TweenLite.to(tpb,0.5,{rotationZ:-90,ease:punchgs.Power2.easeOut});
				punchgs.TweenLite.to(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),0.3,{autoAlpha:1});
				punchgs.TweenLite.set(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),{scaleX:1});

				punchgs.TweenLite.fromTo(swp,0.5,{autoAlpha:1,x:300},{autoAlpha:1,x:0,ease:punchgs.Power3.easeOut, onComplete:function(){
					punchgs.TweenLite.set(swp,{autoAlpha:1,clearProps:"transform"});
				}});
				swp.addClass("opened");
			}
		});

		jQuery('.sidewidgetpanel_closer').click(function() {
			var bw = jQuery('#bodywrapper'),
				swp = jQuery('#sidewidgetpanel');
				tpb = jQuery('.theplusbutton');
				punchgs.TweenLite.to(tpb,0.5,{rotationZ:0,ease:punchgs.Power2.easeOut});
				punchgs.TweenLite.fromTo(swp,0.5,{autoAlpha:1,x:0},{autoAlpha:1,x:300,ease:punchgs.Power3.easeOut, onComplete:function(){
					punchgs.TweenLite.set(swp,{autoAlpha:0,clearProps:"transform"});
				}});
				punchgs.TweenLite.to(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),0.3,{autoAlpha:0,onComplete:function() {
					punchgs.TweenLite.set(jQuery('#sidewidgetpanel .footer_widget, #sidewidgetpanel .sidebar_widget'),{scaleX:0});
				}});
				swp.removeClass("opened");
		});

	}

/**************************************
	-	SHARE ME BUTTONS ON POSTS	-
***************************************/

function initShareMe(id) {
	/* SHARE ME BUTTONS */
	//jQuery(".shareme").jqSocialSharer();
	//jQuery(".sharemainbutton").each(function() {


		var mb = jQuery(id),
			foundit = false,
			interv = setInterval(function() {
				var	  smc = mb.closest('.sharemecollector'),
					  sh = smc.find('.shareshowonhover');

				if (sh.find('.shareme').first().height()>0 && !foundit) {
				  		foundit = true;
				  		clearInterval(interv);
				  		setShareMeHovers(smc,sh);
					};
			},100);
	//})

}

function setShareMeHovers(smc,sh) {
		var tween = new punchgs.TimelineLite(),
			tweensm = new punchgs.TimelineLite(),
			ar = new Array();
			maxh = 0,
			count = 0,
			tr = {},

		sh.find('.shareme').each(function() {
			count++;
			maxh += jQuery(this).outerHeight();
			ar.unshift(jQuery(this));
		});

		sh.find('.sharemask').height(maxh+5);

		tween.fromTo(sh,(count*0.2),{height:0},{height:maxh+10,ease:punchgs.Power3.easeInOut});
		tweensm.staggerFromTo(ar,0.5,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power2.easeInOut,delay:0.2},0.2);

		tween.stop();
		tweensm.stop();

		smc.hover(function() {
			clearTimeout(tr);
				tween.play();
				tweensm.play();
		}, function() {
			clearTimeout(tr);
			tr = setTimeout(function() {
				tween.reverse();
			},100);
				tweensm.reverse();

		});
}

/**********************************************
	-	START PARALLAX BACKGROUND IMAGES	-
**********************************************/

function drawParallaxImages(force) {

	if (doctop!=lastknowndoctop || force) {
		lastknowndoctop = doctop;
		parallaxBGPosition();

		jQuery.each(parallaxobjects,function(index,pobj) {
			//if (pobj.visible!="hidden")
				punchgs.TweenLite.set(pobj.bgparoff,{force3D:"auto",y:pobj.offs});
			/*else
				punchgs.TweenLite.set(pobj.bgparoff,{visibility:"hidden"});*/
		});
	}
	//window.requestAnimationFrame(drawParallaxImages);
}

function parallaxBGPosition() {
	var doc = jQuery(document);

		jQuery.each(parallaxobjects,function(index,pobj) {

			pobj.bgh = pobj.bgpar.height();
			pobj.oftop = pobj.bgpar.offset().top,
			pobj.reltop = mainwinh - (pobj.oftop - doctop),
			pobj.hdif = (pobj.bgimg.height() - pobj.bgh) / 2,
			pobj.stage = mainwinh+pobj.bgh;
			pobj.visible = "visible";

			// VIDEO START/STOP
			if (pobj.isvideo && (pobj.oftop - doctop-mainwinh)<-200 && (pobj.oftop - doctop+pobj.bgh)>-200) {
				if (!pobj.bgimg.hasClass("videovisible")) {
					pobj.bgimg.addClass("videovisible");
					try{
						 pobj.video.play();
					} catch(e) {}
				}
			} else {

				if (pobj.bgimg.hasClass("videovisible")) {
					pobj.bgimg.removeClass("videovisible");
					try{
						 pobj.video.pause();
					} catch(e) { }
				}
			}

			if (pobj.reltop<0) {
				pobj.reltop =0;
				pobj.visible="hidden";
			}
			if (pobj.reltop-pobj.bgh>mainwinh) {
				pobj.reltop = pobj.stage;
				pobj.visible="hidden";
			}
			var way = pobj.reltop / pobj.stage,
				offs = -(pobj.hdif/2) + pobj.hdif * way;
			if (pobj.hbg.length==1) {
				way = doctop / pobj.stage;
				offs =  pobj.hdif * way;
			}
			if (pobj.bgh==0) offs=0;
			if (pobj.bgimg.data('parallaxoff')=="on") offs=0;
			pobj.lastoffs = pobj.offs;
			pobj.offs = offs;
		});

}

function parallaxSizeCalculation() {
		jQuery.each(parallaxobjects,function(index,pobj) {
				factor = 1;
				pobj.bgh = pobj.bgpar.height();
				pobj.bgw = pobj.bgpar.width();
				var hr = pobj.bgw/pobj.ww,
					vr = pobj.bgh/pobj.hh;

				if (hr>vr) {
					vr = (pobj.hh*hr)/pobj.bgh;
					hr=1000; //Math.ceil(hr*100);
					vr=Math.ceil(vr*100);
				} else {
					hr = (pobj.ww*vr)/pobj.bgw;
					vr = Math.ceil(vr*100);
					hr = 1000;//Math.ceil(hr*100);
				}
				hr = hr * factor;
				vr = vr * factor;
			punchgs.TweenLite.to(pobj.bgimg,1,{maxWidth:hr+"%", maxHeight:vr+"%",overwrite:"all"});
		});
}

function initParallaxBg() {
	if (is_mobile()) return false;

	// BUILD PARALLAX ARRAY
	jQuery('.parallaxbg .rowbgimage').each(function(i) {
			pobj = new Object();
			pobj.bgimg = jQuery(this);
			pobj.bgpar = pobj.bgimg.closest('.rowbgimage_outter');
			pobj.hbg = pobj.bgimg.closest('#header_background');
			pobj.bgparoff = pobj.bgpar.find('.rowbgimage_offset');
			pobj.ww = pobj.bgimg.data('ww');
			pobj.hh = pobj.bgimg.data('hh');
			pobj.offs = 0;
			parallaxobjects.push(pobj);
			if (pobj.bgimg.hasClass("video")) {
				pobj.bgimg.addClass("miami-bg-video");
				pobj.isvideo=true;
				pobj.video=pobj.bgimg[0]
				try{
					pobj.video.pause();
				} catch(e) {}
			}
		});

	parallaxSizeCalculation();

	var sti = setInterval(function() {
		parallaxBGPosition();
	},200);

	setTimeout(function() {
		clearInterval(sti);
	},2000);
}

function parallaxResizing() {
	jQuery.each(parallaxobjects,function(index,pobj) {
		if (pobj.isvideo) {
			if (pobj.bgimg.hasClass("videovisible"))
				try{
					if (pobj.video.paused) pobj.video.play();
				} catch(e) {}
			else
				try{
					// pobj.video.pause();
				} catch(e) {}

		}
	});
	parallaxSizeCalculation();

}




/******************************
	-	Init Space Hover Fun	-
********************************/

function initSpaceHoverFun() {
	jQuery('.space_hoover').each(function() {
		var sh = jQuery(this);
		punchgs.TweenLite.set(sh.parent(),{backfaceVisibility:"hidden",force3D:"true"});
		sh.mouseenter(function(event) {
									var sh = jQuery(this),
										t = sh.parent().offset().top,
										l = sh.parent().offset().left,
										ex = (event.pageX-l),
										ey =  (event.pageY-t);
										sh.data("enterx",ex);
										sh.data("entery",ey);

		});

		sh.find('a').append('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;background:transparent;z-index:10"></div>');
		punchgs.TweenLite.set(sh.find("img"),{scale:0.98,rotationX:0,rotationY:0,x:0,y:0,transformPerspective:1200,ease:punchgs.Power3.easeOut,overwrite:"all"});

		sh.on('mousemove.hoverdir, mouseleave.hoverdir',function(event) {

							switch (event.type) {

								case "mousemove":

										var	t = sh.offset().top,
											l = sh.offset().left,
											mh = sh.width()/2,
											mv = sh.height()/2,
											diffh = (event.pageX - l) - mh,
											diffv = (event.pageY - t) - mh;



										sh.find("img").each(function() {
											var pc = jQuery(this),
												pl = 0.05,
												offsh =	diffh * pl,
												offsv =	diffv * pl;


											punchgs.TweenLite.to(pc,0.4,{scale:0.98,rotationX:(0-offsv*2),rotationY:(offsh*2),x:offsh,y:offsv,transformPerspective:1200,ease:punchgs.Power3.easeOut,overwrite:"all"});
										})

								break;
								case "mouseleave":
										sh.find("img").each(function() {
											var pc = jQuery(this);
											punchgs.TweenLite.to(pc,0.7,{scale:1,rotationX:0, rotationY:0,x:0,y:0,ease:punchgs.Bounce.easeOut});
										})
								break;
							}
						});
	})
}




/******************************
	-	TESTIMONIAL SLIDER	-
********************************/
function testimonialSlider() {
	/* TESTIMONIAL SLIDER */
	jQuery('.testimonial_slider').each(function() {
		var ts = jQuery(this);

		// ADDING BULLET WRAPPER CONTAINER
		ts.append('<div class="testimonial-bullets"></div>');
		var bwrap = ts.find('.testimonial-bullets');

		// PREPARING BULLETS
		ts.find('li').each(function(i) {

			var cs = "",
				li = jQuery(this);

			if (i==0) cs="first selected";
			if (i==ts.find('li').length-1) cs="last";
			bwrap.append('<div class="justadded bullet '+cs+'"></div>');
			bwrap.find('.bullet.justadded').data('li',li).removeClass("justadded");

			punchgs.TweenLite.set(li,{force3D:true,transformPerspective:1200,transformStyle:"flat"});

		});

		// PREPARING CLICKS AND ANIMATIONS
		ts.find('.bullet').each(function() {
			var b = jQuery(this);
			var trans = ts.data('transition');
			b.click(function() {
				var b = jQuery(this),
					ts=b.closest('.testimonial_slider'),
					sb = ts.find('.bullet.selected'),
					old_slide = sb.data('li'),
					new_slide = b.data('li'),
					ryt=0,
					ryf=0,
					xt=0,
					xf=0,
					yt=0,
					yf=0,
					sf=1,
					st=1;

				switch (trans) {
					case "turn":
						if (b.index()<sb.index()) {
							ryt=-40;
							ryf=40;
							xt=50;
							xf=-50;
						} else {
							ryt=40;
							ryf=-40;
							xt=-50;
							xf=50;
						}
					break;
					case "fade":
					break;
					case "slidevertical":
						if (b.index()<sb.index()) {
							yt=50;
							yf=-50;
						} else {
							yt=-50;
							yf=50;
						}
					break;
					case "slidehorizontal":
						if (b.index()<sb.index()) {
							xt=50;
							xf=-50;
						} else {
							xt=-50;
							xf=50;
						}
					break;
					case "zoom":
							st=0.3;
							sf=0.3;
					break;

				}


				sb.removeClass("selected");
				b.addClass("selected");


				punchgs.TweenLite.to(old_slide,0.5,{autoAlpha:0,rotationY:ryt,x:xt,y:yt,scale:st});
				punchgs.TweenLite.fromTo(new_slide,0.5,{autoAlpha:0,rotationY:ryf,x:xf,y:yf,scale:sf},{scale:1,x:0,y:0,rotationY:0,autoAlpha:1,rotationX:0,delay:0.3});

				punchgs.TweenLite.to(ts.find('ul'),0.5,{height:new_slide.height()});
			})
		});

	});


		jQuery(window).resize(function() {
			jQuery('.testimonial_slider').each(function() {
				var ts = jQuery(this),
					b = ts.find('.bullet.selected'),
					new_slide = b.data('li');
				if (ts.find('ul').length>0 && new_slide!=undefined)
					punchgs.TweenLite.to(ts.find('ul'),0.5,{height:new_slide.height()});
			});

		});

}

function menuLayoutManager() {
	var hiw = jQuery('#header_inner_wrapper'),
				head = jQuery('#header');
				bod = jQuery('body');

	if (doctop >5)
		bod.addClass("pagescrolled")
	else
		bod.removeClass("pagescrolled")

	if (hiw.hasClass("gradient")) {
		if (head.hasClass("stuck") && bod.hasClass("pagescrolled")) {
			hiw.removeClass("gradientactive")
		} else {
			hiw.addClass("gradientactive");
		}
	}

	if (hiw.hasClass("transparent")) {
		if (head.hasClass("stuck") && bod.hasClass("pagescrolled")) {
			hiw.removeClass("transparentactive")
		} else {
			hiw.addClass("transparentactive");
		}
	}
}

/*******************************************
	-	INIT PAGE TITLE PARALLAX EFFECT	-
*******************************************/
function initPageTitleParallax(divider) {

		jQuery(window).on("scroll.pagetitleparallax",function() {
			if (mainwinw>767)
				punchgs.TweenLite.to(jQuery('#pagetitle'),0.01,{bottom:(0+(doctop/divider))});
			else
				punchgs.TweenLite.to(jQuery('#pagetitle'),0.01,{bottom:0});
		});



}


/********************************************
	-	ADJUST MENU BACKGROUND COLORS	-
*********************************************/
function initMenuBackgroundColors() {
	jQuery('#navigation li').each(function() {
		var li = jQuery(this);


			if (li.hasClass("megamenu"))
				li.find('ul').first().css({backgroundColor:li.data('backgroundcolor')});
			else
				li.find('ul').css({backgroundColor:li.data('backgroundcolor')});

	})
}


/******************************
	-	MEGAMENU	-
********************************/
function initMegaMenu() {
	// PREPARING
	jQuery('#navigation>ul>li').hover(function() {
		jQuery(this).css({zIndex:5});
	},function() {
		jQuery(this).css({zIndex:2});
	});

	jQuery('#navigation .megamenu').each(function() {
			shortHandleMegamenuUl(jQuery(this),"set");
	})


	// HOVER EFFECT
	jQuery('#navigation .megamenu').hover(function() {
		shortHandleMegamenuUl(jQuery(this),"show");
	},function() {
		shortHandleMegamenuUl(jQuery(this),"hide");
	})

	jQuery(window).resize(function() {
		jQuery('#navigation .megamenu').each(function() {
			shortHandleMegamenuUl(jQuery(this),"set");
		})
	});


}


function shortHandleMegamenuUl(li,handler) {

			var hiw = jQuery('#header_inner_wrapper'),
				hiw_w = hiw.outerWidth(),
				hiw_l = hiw.offset().left,
				ul = li.find('>ul'),
				inside = ul.find('>li'),
				minheight = new Array(),
				minheightIndex = 0,
				lastlipos = 1000,
				lastli = new Object();

			for (var i=0;i<10;i++) minheight[i] = 0;

			ul.find('>li').each(function() {
				var li=jQuery(this);
				li.css({minHeight:"0px"});
				li.removeClass("norightborder");
			});



			ul.find('>li').each(function() {
				var li=jQuery(this);
				if (li.position().left<lastlipos) {
				 	minheightIndex++;
				 	if (lastli != undefined && lastli.length>0)
					 	lastli.addClass("norightborder");
				}
				if (li.height() > minheight[minheightIndex])
					minheight[minheightIndex] = li.height();
				lastlipos = li.position().left;
				lastli = li;
			});

			minheightIndex = 0;
			lastlipos = 1000;
			setTimeout(function() {
					ul.find('>li').each(function() {
						var li=jQuery(this);
						if (li.position().left<lastlipos)
						 	minheightIndex++;


						li.css({minHeight:minheight[minheightIndex]});
						lastlipos = li.position().left;

					})


					if (minheightIndex>1)
						li.addClass("leftoriented");
					else
						li.removeClass("leftoriented");


					switch (handler) {

						case "set":
							punchgs.TweenLite.set(inside,{autoAlpha:0});
							ul.css({width:hiw_w+"px", left:((0-li.offset().left)+hiw_l)+"px"});
							punchgs.TweenLite.set(ul,{autoAlpha:0,transformOrigin:"50% 0%"});
							punchgs.TweenLite.set(ul.find('.footer_widget, .sidebar_widget'),{scaleY:0});
						break;
						case "show":
							punchgs.TweenLite.set(inside,{autoAlpha:0});
							punchgs.TweenLite.set(ul.find('.footer_widget, .sidebar_widget'),{scaleY:1,clearProps:"transform"});
							ul.css({width:hiw_w+"px",left:((0-li.offset().left)+hiw_l)+"px",clearProps:"transform"});
							punchgs.TweenLite.to(inside,0.01,{autoAlpha:1,ease:punchgs.Power2.easeOut,clearProps:"transform"});
							punchgs.TweenLite.to(ul,0.01,{autoAlpha:1,ease:punchgs.Power2.easeOut,clearProps:"transform"});
						break;
						case "hide":
							punchgs.TweenLite.to(inside,0.1,{autoAlpha:0,ease:punchgs.Power3.easeOut});
							punchgs.TweenLite.to(ul,0.1,{ease:punchgs.Power3.easeIn,onComplete:function() {
								punchgs.TweenLite.set(ul,{autoAlpha:0});
								punchgs.TweenLite.set(ul.find('.footer_widget, .sidebar_widget'),{scaleY:0});
								}
							});
						break;
					}

					if (minheightIndex>1)
						li.addClass("leftoriented");
					else
						li.removeClass("leftoriented");
			},19)
}

/******************************
	-	INIT FITVID	-
********************************/
function initFitVid(){
	jQuery(".fitvid").each(function(){
		jQuery(this).fitVids();
	});
}


/******************************
	-	INIT SEARCH	-

	<textarea id="message" name="comment" rows="3" title="Enter your comment here..." onfocus="if(this.value == 'Enter your comment here *') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Enter your comment here *'; }" value="Enter your comment here *">Enter your comment here *</textarea>
********************************/
function initSearch() {
	jQuery('.searchbutton').click(function() {
		var counter = {val:doctop};
		punchgs.TweenLite.to(counter,0.5,{val:0,ease:punchgs.Power4.easeOut,
				onUpdate:function() {
					forcescrolled = true;
					punchgs.TweenLite.set(jQuery('body, html'),{scrollTop:counter.val});
				},
				onComplete:function(){
					forcescrolled = false;
				}
		});

		forcescrolled = true;

		jQuery('body').append('<div id="search_bg"></div><div id="search_wrapper"></div>');
		var sw = jQuery('#search_wrapper'),
			sb = jQuery('#search_bg'),
			onfocus = "if(this.value == 'Enter your search') { this.value = ''; }",
			onblur = "if(this.value == '') { this.value = 'Enter your search'; }",
			ivalue = "Enter your search";

		sw.append('<div class="searchcontainer" style="position:relative; width:100%; "></div>');
		var cont = sw.find('.searchcontainer');
		cont.append('<div id="big_search_wrapper" style=""><div id="big_search_fake_txt">Enter your search</div><input class="bigsearchfield" name="bigsearchfield" type="text"></input></div><div class="big_search_close"><i class="icon-cancel"></i></div>');
		cont.append('<div class="searchresult_title"></div>');

		var bsft = jQuery('#big_search_fake_txt'),
			myst = new punchgs.SplitText(bsft,{type:"words,chars"}),
			mytl = new punchgs.TimelineLite();
		mytl.pause(0);

		mytl.add(punchgs.TweenLite.to(bsft,0.4,{x:30,ease:punchgs.Power2.easeOut}));
		jQuery.each(myst.chars,function(index,chars) {
			mytl.add(punchgs.TweenLite.to(chars,0.2,{autoAlpha:0,scale:0.8,ease:punchgs.Power2.easeOut}),(Math.random()*0.2));
		});


		var inp = cont.find('input');
		setTimeout(function() {
			inp.focus();
		},450);

		inp.on('keyup',function(e) {
			if (inp.val().length==0)
				mytl.reverse();
			else
				mytl.play();

		});
		inp.on('keypress',function(e) {
			if (inp.val().length==0)
				mytl.reverse();
			else
				mytl.play();

			if (e.keyCode==13) {
				cont.find('.searchresult').remove();
				var objData = {
				     search: inp.val()
				    };
				jQuery.ajax({
				     type:'post',
				     url: tp_search.search_php ,
				     //url:'http://www.themepunch.com/miami/wp-content/themes/miami/framework/theme_get_search_result.php',
				     data:objData
				    }).success(function(data,status,arg3) {
						jQuery('#search_wrapper .searchcontainer').append("<div class='searchresult'>"+data+"</div>");
					}).error(function(arg1, arg2, arg3) {
						jQuery('#search_wrapper .searchcontainer').html("<div class='searchresult'><p class='futyi'>FAILURE: "+arg2+"   "+arg3+"</p></div>");
					});

			}
		});

		punchgs.TweenLite.fromTo(sw,0.4,{x:0,y:0,scale:0.7,autoAlpha:0,transformOrigin:"50% 0%"},{scale:1,autoAlpha:1,x:0,ease:punchgs.Power3.easeOut,delay:0.1});
		punchgs.TweenLite.fromTo(sb,0.4,{x:0,y:0,scale:0.9,autoAlpha:0,transformOrigin:"50% 0%"},{scale:1,autoAlpha:1,x:0,ease:punchgs.Power3.easeOut});
		var bgs =  jQuery('.big_search_close');
		bgs.hover(function() {
			punchgs.TweenLite.to(bgs,0.4,{rotation:180});
		},function() {
			punchgs.TweenLite.to(bgs,0.4,{rotation:0});
		})
		bgs.click(function() {
			punchgs.TweenLite.to(sw,0.4,{x:0,y:0,scale:0.8,autoAlpha:0,ease:punchgs.Power3.easeOut,onComplete:function(){
				sw.remove();
				//kill everythign from essential !!!!
			}});
			punchgs.TweenLite.to(sb,0.4,{x:0,y:0,scale:0.9,delay:0.1,autoAlpha:0,ease:punchgs.Power3.easeOut,onComplete:function(){
				sb.remove();

			}});
		});
	});


}

/******************************
	-	INIT STICKY MENU	-
********************************/
function initStickyMenu(recall) {
	var sh = jQuery('#header.stickyheader'),
		offs = parseInt(jQuery('#header').css("paddingTop"),0);

	if (jQuery('#header #subheader').length>0)
		offs = offs+jQuery('#header #subheader').outerHeight();


	//if (jQuery(window).width()>767)
		sh.tppoint('sticky',{
			offset:(-60-offs),
			wrapper:'<div class="sticky-wrapper-header" />',
			handler:function(direction) {
				if (direction =="down") {
					sh.css({display:"none"});
					punchgs.TweenLite.fromTo(sh,0.5,{y:-60},{y:0,delay:0.3,display:"block"});

				}

				if (direction =="up")
					punchgs.TweenLite.to(sh,0.0001,{y:0,overwrite:"all",display:"block"});

			}
		}).removeClass("unsticked");

	if (!recall) {
		jQuery(window).resize(function() {
			//if (jQuery(window).width()<768) {
				//if (jQuery('#header.stickyheader').parent().hasClass('sticky-wrapper-header'))
				//	jQuery('#header.stickyheader').tppoint("unsticky").addClass("unsticked");
			//} else {
				if (jQuery('#header.stickyheader').hasClass("unsticked"))
				 initStickyMenu(true);
			//}
		});


	}

}

/******************************
	-	INIT STICKY HEADER BG	-
********************************/
function initStickyHeaderBg(recall) {
	    var hb = jQuery('#header_background');
		//if (jQuery(window).width()>767)
			hb.tppoint('sticky');

		if (!recall)
			jQuery(window).resize(function() {
				/*if (jQuery(window).width()<768) {
					if (jQuery('#header_background').hasClass("stuck"))
					   jQuery('#header_background').tppoint("unsticky").addClass("unsticked");
				} else {
				*/
					if (hb.hasClass("stuck"))
					   hb.tppoint("unsticky").addClass("unsticked");

					//if (jQuery('#header_background').hasClass("unsticked"))
					 initStickyHeaderBg(true);
				//}
			});

}


/******************************
	-	INIT STICKY SIDEBAR	-
********************************/
function initStickySideBar(recall) {


	if (jQuery('#sidebar-container .stickyfromhere').length==0) return false;

	if (!recall && jQuery('#sb-inner-wrap').length==0)
		jQuery('#sidebar-container').wrapInner('<div id="sb-inner-wrap"></div>');


	var sb = jQuery('#sb-inner-wrap'),
		sfh = sb.find('.stickyfromhere'),
		offb = sfh.length>0 ? (40-sfh.position().top) : 40;

	var offs = offb + jQuery('#header').height(),
		fh = jQuery('#footer').height(),
		dif =  -10+mainwinh - offs - fh;




	if (jQuery('#header #subheader').length>0)
		offs = offs+jQuery('#header #subheader').outerHeight();


	if (mainwinw>767 && dif >=(sb.outerHeight())) {

		if (sb.closest('.sticky-wrapper').length==0)

			sb.tppoint('sticky',{
				offset:function() {

					var offb = sfh.length>0 ? (40-sfh.position().top) : 40;
					var offs = offb + jQuery('#header').height();
					offs = offs+jQuery('#header #subheader').outerHeight();
					return offs;
				},
				handler:function() {
					var offb = sfh.length>0 ? (40-sfh.position().top) : 40;
					var offs = offb + jQuery('#header').height();
					offs = offs+jQuery('#header #subheader').outerHeight();

					if (jQuery('#sb-inner-wrap').hasClass("stuck"))
						jQuery('#sb-inner-wrap').css({top:offs-10})
					else {
						jQuery('#sb-inner-wrap').css({top:"auto"})

					}
				}
			}).removeClass("unsticked");

	}



	if (!recall) {
			// ON WINDOW RESIZE WE NEED TO CHECK HOW TO STUCK THE SIDEBAR
			jQuery(window).resize(recalculateStickySideBar);
	}
}

function recalculateStickySideBar() {
	if (mainwinh!=jQuery(window).data('miamilastknownwindowheight') ||
		jQuery('#bodywrapper').height()!=jQuery('#bodywrapper').data('miamilastknownbodyheight')) {

		jQuery('#bodywrapper').data('miamilastknownbodyheight',jQuery('#bodywrapper').height());
		jQuery(window).data('miamilastknownwindowheight',mainwinh);
		var sb = jQuery('#sb-inner-wrap'),
			sfh = sb.find('.stickyfromhere'),
			offb = sfh.length>0 ? (40-sfh.position().top) : 40;
		var offs = offb + jQuery('#header').height(),
			fh = jQuery('#footer').height(),
			dif =  -10+mainwinh - offs - fh;



		if (mainwinw<768 || dif<sb.outerHeight()) {
			if (sb.closest('.sticky-wrapper').length>0)
				sb.tppoint("unsticky").addClass("unsticked");
			jQuery('#sb-inner-wrap').css({top:"auto"})
		} else {

				if (sb.closest('.sticky-wrapper').length>0) {
					 sb.tppoint("unsticky").addClass("unsticked");
					 jQuery('#sb-inner-wrap').css({top:"auto"})
				}
				initStickySideBar(true);

		}
	}
}


/******************************
	-	INIT STICKY MENU	-
********************************/
function initStickyMainImage() {
	jQuery('.stickyimage').each(function() {
		var img = jQuery(this),
			offs = parseInt(img.css("paddingTop"),0);

		img.tppoint('sticky',{
			offset:(0-offs),
		});
	})
}


/******************************
	-	MENU WIDTH ADJUSTER	-
********************************/
function initMenuWidthAdjuster() {

	var ti;
	jQuery(window).on("resize.menuwidthadjust",function() {
			checkMenuWidth();
			clearInterval(ti);
			ti = setInterval(function() {
				if (checkMenuWidth()>0)
				 clearInterval(ti);
			},250)
	});


	jQuery('#navigation').data('lkw',0);
	jQuery('#header_widgets_wrapper').data('lkw',0);
	jQuery('#header_search').data('lkw',0);

	var inte = setInterval(function() {
		var cmw = checkMenuWidth();

		if ( cmw>0 && jQuery('#navigation').data('canbestopped')==1)
			clearInterval(inte);

	},100);

	setTimeout(function() {
		if (!is_mobile()) jQuery('#navigation').css({visibility:"visible",height:"auto"});
		if (is_mobile()) jQuery('#navigation').css({height:"auto"});
		jQuery('#header_widgets_wrapper').css({visibility:"visible",height:"auto"});
		jQuery('#header_search').css({visibility:"visible",height:"auto"});

	},200)


	setTimeout(function() {
		jQuery('#navigation').data('canbestopped',1);
		jQuery('#navigation').addClass("adjusted");
	},2500);


	// PUT MENU ON LEFT OR RIGHT BASED ON THE SUBMENU POSITION !
	jQuery('#menu-miami-menu>li .menu-item-has-children').hover(function() {
		var mi = jQuery(this),
			ul = mi.find('>ul'),
			ulw = ul.outerWidth(),
			ull = ul.offset().left,
			rs = (mainwinw-ull-ulw);

			if (rs<0)
				ul.addClass("totheleft")
			else
				ul.removeClass("totheleft")
	});
	if (!is_mobile() && mainwinw>992) {
				jQuery('#navigation').addClass("adjusted");
	}

}

function checkMenuWidth() {
		var	nav = jQuery('#navigation');
			navw = nav.outerWidth(),
			hw = jQuery('#header .row').width(),
			headerww = jQuery('#header_widgets_wrapper'),
			hww = headerww.length>0 ? headerww.css("display")=="none" ? 0 : headerww.outerWidth() : 0,
			headersw = jQuery('#header_search'),
			hsw = headersw.length>0 ? headersw.css("display")=="none" ? 0 : headersw.outerWidth(true) : 0,
			headerpl = jQuery('#header_plus'),
			hpw = headerpl.length>0 ? headerpl.css("display")=="none" ? 0 : headerpl.outerWidth(true) : 0,
			logow = jQuery('#logo_wrapper img').length>0 ? jQuery('#logo_wrapper img').outerWidth(true) : 0,
			place = hw - (hww+hsw+hpw+logow);



			// SHOW ELEMENTS AGAIN BASED ON WINDOW SIZE
			if (headerww.data('lkw') + navw<=(place-20) && headerww.css("display")=="none" && !nav.hasClass("showmobile"))
				headerww.css({display:"block"});

			if (headersw.data('lkw') + navw <=(place-50) && headersw.css("display")=="none" && !nav.hasClass("showmobile"))
				headersw.css({display:"block"});

			if (nav.data('lkw')<=(place-20) && nav.hasClass("showmobile")) {
				nav.removeClass("showmobile")
				jQuery('#header_plus').css({visibility:"visible"});
			}

			if (place-20 < navw && !nav.hasClass("showmobile")) {

				// CHECK IF WIDGET STILL VISIBLE
				if (headerww.length>0 && headerww.css("display")!="none") {
					headerww.data('lkw',hww);
					headerww.css({display:"none"});

				}

				else

				if (headersw.length>0 && headersw.css("display") != "none") {
					headersw.data('lkw',hsw);
					headersw.css({display:"none"});

				}

				else {
					nav.data('lkw',navw);
					nav.addClass("showmobile");
					jQuery('#header_plus').css({visibility:"hidden"});
				}
			}
		return place;
}





/* #Menu Handler
================================================== */

function designResponsiveMenu() {

	var defpar = jQuery('#navigation .navigation').parents().length,
		rm = jQuery('#responsivemenu'),
		lastpar = -1,
		fullappend = '';

	jQuery('#navigation .navigation a').each(function(i) {
		var a=jQuery(this),
			target = a.attr('target')==undefined ? "_self" : a.attr('target'),
			href = a.attr('href'),
			par= (a.parents().length-defpar -2) / 2,
			prep = a.html();



		if (a.hasClass('menu-link') && !a.hasClass('wpmenucart-contents')) {
			prep = prep.split('>');
			prep = prep.length>1 ? prep[prep.length-1] : prep[0];
			var atext = prep.toLowerCase();
			atext = atext.substr(0,1).toUpperCase() + atext.substr(1,atext.length);
			switch (par) {
				case 0:

					if (lastpar == 0)
						fullappend = fullappend + "</div>";
					if (lastpar == 1)
						fullappend = fullappend + "</div></div>";
					if (lastpar == 2)
						fullappend = fullappend + "</div></div></div>";
					if (lastpar == 3)
						fullappend = fullappend + "</div></div></div></div>";
				break;
				case 1:

					if (lastpar == 1)
						fullappend = fullappend + "</div>";
					if (lastpar == 2)
						fullappend = fullappend + "</div></div>";
					if (lastpar == 3)
						fullappend = fullappend + "</div></div></div>";
				break;
				case 2:

					if (lastpar == 2)
						fullappend = fullappend + "</div>";
					if (lastpar == 3)
						fullappend = fullappend + "</div></div>";
				break;
				case 3:

					if (lastpar == 3)
						fullappend = fullappend + "</div>";
				break;
				default:

				break;
			}
			fullappend =fullappend +  '<div class="respmenuelement nav-level'+par+'"><a href="'+href+'" target="'+target+'" class="resp-nav-text">'+atext+'</a>';
			lastpar = par;

		}
	});
	rm.append(fullappend);
	rm.find('.nav-level0').each(function() {
		var lev = jQuery(this);
		lev.find('.nav-level1').each(function() {
			var lev = jQuery(this);
			lev.find('.nav-level1').each(function() {
				var lev = jQuery(this);
				lev.find('.nav-level1').each(function() {
					var lev = jQuery(this);
					lev.find('.nav-level1').each(function() {
						var lev = jQuery(this);
						lev.find('>.respmenuelement').wrapAll('<div class="respmenu-inner-wrapper"></div>');

					})
					lev.find('>.respmenuelement').wrapAll('<div class="respmenu-inner-wrapper"></div>');

				})
				lev.find('>.respmenuelement').wrapAll('<div class="respmenu-inner-wrapper"></div>');

			})
			lev.find('>.respmenuelement').wrapAll('<div class="respmenu-inner-wrapper"></div>');

		})
		lev.find('>.respmenuelement').wrapAll('<div class="respmenu-inner-wrapper"></div>');

	})

	jQuery('.respmenuelement').each(function() {
		var el = jQuery(this);
		if (el.find('.respmenu-inner-wrapper').length>0) {
			el.addClass("hassubmenu");
			el.find('>a').addClass("respmenu-clickable");
			el.find('.respmenu-clickable').click(function() {
				var el = jQuery(this).parent(),
					riw = el.find('>.respmenu-inner-wrapper');
				if (riw.css("display") != "none") {
					el.removeClass("nowopen");
					riw.slideUp(200);
				} else {
					el.addClass("nowopen");
					riw.slideDown(200);


				}
				return false;
			})
		}
	})
	var lstknoww = mainwinw;
	jQuery(window).on("resize.menuwidth",function() {
		if (lstknoww!=mainwinw) {
			lstknoww = mainwinw;
			responsiveMenuWidth()
		}
	});

	responsiveMenuWidth();

	jQuery('#responsivemenu').css({width:jQuery('#header_inner_wrapper').outerWidth()});

	jQuery('#mobile-navigation').click(function() {
		var rep = jQuery('#responsivemenu'),
			repw = jQuery('.responsivemenuwrapper');

		if (rep.css("display")=="none") {
			var ot = jQuery('#header_inner_wrapper').offset().top;
			repw.css({top:jQuery('#header_inner_wrapper').outerHeight()+ot,zIndex:500});
			rep.slideDown(200);
			jQuery('#mobile-navigation').addClass("opened");
			jQuery(window).on("scroll.responsivemenu",function() {
				var ott = parseInt(jQuery('#header_inner_wrapper').offset().top,0),
					oh =  parseInt(jQuery('#header_inner_wrapper').outerHeight(),0),
					ot = ott+oh,
					repw = jQuery('.responsivemenuwrapper'),
					reph = parseInt(jQuery('.responsivemenuwrapper').height(),0),
					repo = parseInt(repw.offset().top,0);
				if (repo+reph<ot || repo>ot+mainwinh) {
					rep.slideUp(200);
					jQuery('#mobile-navigation').removeClass("opened");
					jQuery(window).unbind("scroll.responsivemenu");
					jQuery('#responsivemenu').find('.nowopen .respmenu-clickable').click();
				}



			});
		} else {
			rep.slideUp(200);
			jQuery('#mobile-navigation').removeClass("opened");
			jQuery(window).unbind("scroll.responsivemenu");
					jQuery('#responsivemenu').find('.nowopen .respmenu-clickable').click();
		}
	})
	jQuery('.responsivemenuwrapper').appendTo(jQuery('#bodywrapper'));
}

function responsiveMenuWidth() {
		var rep = jQuery('#responsivemenu');
		if (rep.css("display")!="none") {
			rep.slideUp(200);
			jQuery('#mobile-navigation').removeClass("opened");
		}

}

/* #Check Mobile
================================================== */
	function is_mobile() {
	      var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
	   var ismobile=false;
	      for(i in agents) {

	       if (navigator.userAgent.split(agents[i]).length>1) {
	              ismobile = true;

	            }
	      }
	      return ismobile;
	  }