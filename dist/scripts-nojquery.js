/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-cssgrid_cssgridlegacy-flash-formvalidation-objectfit-touchevents-video-videoautoplay-webglextensions-setclasses !*/
!function(A,e,t){function n(A,e){return typeof A===e}function o(){var A,e,t,o,i,r,a;for(var l in E)if(E.hasOwnProperty(l)){if(A=[],e=E[l],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(o=n(e.fn,"function")?e.fn():e.fn,i=0;i<A.length;i++)r=A[i],a=r.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(A){var e=T.className,t=Modernizr._config.classPrefix||"";if(B&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),B?T.className.baseVal=e:T.className=e)}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):B?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function a(){var A=e.body;return A||(A=r(B?"svg":"body"),A.fake=!0),A}function l(A,e){if("object"==typeof A)for(var t in A)x(A,t)&&l(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),i([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function s(A,t,n,o){var i,l,s,c,u="modernizr",d=r("div"),p=a();if(parseInt(n,10))for(;n--;)s=r("div"),s.id=o?o[n]:u+(n+1),d.appendChild(s);return i=r("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=A:i.appendChild(e.createTextNode(A)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),l=t(d,A),p.fake?(p.parentNode.removeChild(p),T.style.overflow=c,T.offsetHeight):d.parentNode.removeChild(d),!!l}function c(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function u(A,e){return!!~(""+A).indexOf(e)}function d(A,e){return function(){return A.apply(e,arguments)}}function p(A,e,t){var o;for(var i in A)if(A[i]in e)return t===!1?A[i]:(o=e[A[i]],n(o,"function")?d(o,t||e):o);return!1}function f(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(e,t,n){var o;if("getComputedStyle"in A){o=getComputedStyle.call(A,e,t);var i=A.console;if(null!==o)n&&(o=o.getPropertyValue(n));else if(i){var r=i.error?"error":"log";i[r].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&e.currentStyle&&e.currentStyle[n];return o}function m(e,n){var o=e.length;if("CSS"in A&&"supports"in A.CSS){for(;o--;)if(A.CSS.supports(f(e[o]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var i=[];o--;)i.push("("+f(e[o])+":"+n+")");return i=i.join(" or "),s("@supports ("+i+") { #modernizr { position: absolute; } }",function(A){return"absolute"==h(A,null,"position")})}return t}function g(A,e,o,i){function a(){s&&(delete P.style,delete P.modElem)}if(i=n(i,"undefined")?!1:i,!n(o,"undefined")){var l=m(A,o);if(!n(l,"undefined"))return l}for(var s,d,p,f,h,g=["modernizr","tspan","samp"];!P.style&&g.length;)s=!0,P.modElem=r(g.shift()),P.style=P.modElem.style;for(p=A.length,d=0;p>d;d++)if(f=A[d],h=P.style[f],u(f,"-")&&(f=c(f)),P.style[f]!==t){if(i||n(o,"undefined"))return a(),"pfx"==e?f:!0;try{P.style[f]=o}catch(v){}if(P.style[f]!=h)return a(),"pfx"==e?f:!0}return a(),!1}function v(A,e,t,o,i){var r=A.charAt(0).toUpperCase()+A.slice(1),a=(A+" "+S.join(r+" ")+r).split(" ");return n(e,"string")||n(e,"undefined")?g(a,e,o,i):(a=(A+" "+Y.join(r+" ")+r).split(" "),p(a,e,t))}function w(A,e,n){return v(A,t,t,e,n)}var y=[],E=[],R={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){E.push({name:A,fn:e,options:t})},addAsyncTest:function(A){E.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=R,Modernizr=new Modernizr;var T=e.documentElement,B="svg"===T.nodeName.toLowerCase();Modernizr.addTest("video",function(){var A=r("video"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e});var b=R._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];R._prefixes=b;var C="CSS"in A&&"supports"in A.CSS,F="supportsCSS"in A;Modernizr.addTest("supports",C||F);var x;!function(){var A={}.hasOwnProperty;x=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),R._l={},R.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},R._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){R.addTest=l}),Modernizr.addAsyncTest(function(){var t,n,o=function(A){T.contains(A)||T.appendChild(A)},i=function(A){A.fake&&A.parentNode&&A.parentNode.removeChild(A)},s=function(A,e){var t=!!A;if(t&&(t=new Boolean(t),t.blocked="blocked"===A),l("flash",function(){return t}),e&&f.contains(e)){for(;e.parentNode!==f;)e=e.parentNode;f.removeChild(e)}};try{n="ActiveXObject"in A&&"Pan"in new A.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(c){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||n),t||B)s(!1);else{var u,d,p=r("embed"),f=a();if(p.type="application/x-shockwave-flash",f.appendChild(p),!("Pan"in p||n))return o(f),s("blocked",p),void i(f);u=function(){return o(f),T.contains(f)?(T.contains(p)?(d=p.style.cssText,""!==d?s("blocked",p):s(!0,p)):s("blocked"),void i(f)):(f=e.body||f,p=r("embed"),p.type="application/x-shockwave-flash",f.appendChild(p),setTimeout(u,1e3))},setTimeout(u,10)}}),Modernizr.addAsyncTest(function(){function A(r){o++,clearTimeout(e);var a=r&&"playing"===r.type||0!==i.currentTime;return!a&&n>o?void(e=setTimeout(A,t)):(i.removeEventListener("playing",A,!1),l("videoautoplay",a),void(i.parentNode&&i.parentNode.removeChild(i)))}var e,t=200,n=5,o=0,i=r("video"),a=i.style;if(!(Modernizr.video&&"autoplay"in i))return void l("videoautoplay",!1);a.position="absolute",a.height=0,a.width=0;try{if(Modernizr.video.ogg)i.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void l("videoautoplay",!1);i.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(s){return void l("videoautoplay",!1)}i.setAttribute("autoplay",""),a.cssText="display:none",T.appendChild(i),setTimeout(function(){i.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)});var G=R.testStyles=s;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in A||A.DocumentTouch&&e instanceof DocumentTouch)t=!0;else{var n=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");G(n,function(A){t=9===A.offsetTop})}return t}),Modernizr.addTest("formvalidation",function(){var e=r("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!A.opera||A.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required="required" /><button></button>',G("#modernizr form{position:absolute;top:-99999em}",function(A){A.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(A){n=!0,A.preventDefault(),A.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),n}),Modernizr.addTest("webgl",function(){var e=r("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in A}),Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=!1,Modernizr.webgl){var A,e,n;try{A=r("canvas"),e=A.getContext("webgl")||A.getContext("experimental-webgl"),n=e.getSupportedExtensions()}catch(o){return}e!==t&&(Modernizr.webglextensions=new Boolean(!0));for(var i=-1,a=n.length;++i<a;)Modernizr.webglextensions[n[i]]=!0;A=t}});var Q="Moz O ms Webkit",S=R._config.usePrefixes?Q.split(" "):[];R._cssomPrefixes=S;var Z=function(e){var n,o=b.length,i=A.CSSRule;if("undefined"==typeof i)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in i)return"@"+e;for(var r=0;o>r;r++){var a=b[r],l=a.toUpperCase()+"_"+n;if(l in i)return"@-"+a.toLowerCase()+"-"+e}return!1};R.atRule=Z;var Y=R._config.usePrefixes?Q.toLowerCase().split(" "):[];R._domPrefixes=Y;var M={elem:r("modernizr")};Modernizr._q.push(function(){delete M.elem});var P={style:M.elem.style};Modernizr._q.unshift(function(){delete P.style}),R.testAllProps=v,R.testAllProps=w,Modernizr.addTest("cssgridlegacy",w("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",w("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return w("filter","blur(2px)");var A=r("a");return A.style.cssText=b.join("filter:blur(2px); "),!!A.style.length&&(e.documentMode===t||e.documentMode>9)});var V=R.prefixed=function(A,e,t){return 0===A.indexOf("@")?Z(A):(-1!=A.indexOf("-")&&(A=c(A)),e?v(A,e,t):v(A,"pfx"))};Modernizr.addTest("objectfit",!!V("objectFit"),{aliases:["object-fit"]}),o(),i(y),delete R.addTest,delete R.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();A.Modernizr=Modernizr}(window,document);
// ------------------------------------ ASYNC ------------------------------------

function async(u,c){var d=document,t='script',o=d.createElement(t),s=d.getElementsByTagName(t)[0];o.src=u;if(c){o.addEventListener('load',function(e){c(null,e);},false);}s.parentNode.insertBefore(o,s);};

window.async = window.async || async;

// ------------------------------------ COOKIES ------------------------------------
function set_cookie(name,value,days) { var d = new Date(); d.setTime(d.getTime() + ((days?days:60)*24*60*60*1000)); var expires = "expires="+ d.toUTCString(); document.cookie = name + "=" + value + ";" + expires + ";path=/"; }
function get_cookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for(var i = 0; i <ca.length; i++) { var c = ca[i]; while (c.charAt(0)==' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length,c.length); } } return ""; }
function get_params() { if ( window.location.href.indexOf('?') == -1 ) { return []; } var vars = [], hash; var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); for(var i = 0; i < hashes.length; i++) { hash = hashes[i].split('='); vars[hash[0]] = hash[1]; } return vars; }
function get_param(name) { var params = get_params(); return ( params[name] ) ? params[name] : false; }

window.set_cookie = window.set_cookie || set_cookie;
window.get_cookie = window.get_cookie || get_cookie;
window.get_params = window.get_params || get_params;
window.get_param = window.get_param || get_param;

// ------------------------------------ CLASSES ------------------------------------
function is_touch(){ return ( 'ontouchstart' in window ); }
$(document).on('ready',function(){ $('html').addClass('ready'); });
$(window).on('load',function(){ $('html').addClass('loaded'); });
$('html').toggleClass('click',!is_touch());
$('html').toggleClass('touch',is_touch());
function updateRatio(){
	var portrait = ( $(window).height() > $(window).width() );
	$('html').toggleClass('portrait',portrait);
	$('html').toggleClass('landscape',!portrait);
}
$(window).resize(updateRatio);
updateRatio();

window.is_touch = window.is_touch || is_touch;

// ------------------------------------ SHOWHIDE ------------------------------------
$(document).on('click','[data-toggle="slide"]',function(){ var targets = $($(this).attr('data-target')); targets.each(function(){ if ( $(this).is(':visible') ) { $(this).hide(); } else { $(this).removeClass('hidden').removeAttr('hidden').show(); } }); return false; });

// ------------------------------------ SCROLLING ------------------------------------
var prevscroll = 0;
function updateScroll(){
	var nextscroll = $(document).scrollTop()
	var winmiddle = nextscroll + $(window).height()/2;
	$('html').toggleClass('page-scrolling',(nextscroll!=0));
	$('html').toggleClass('page-scrolling-down',(nextscroll!=0&&nextscroll>prevscroll));
	$('html').toggleClass('page-scrolling-up',(nextscroll!=0&&nextscroll<prevscroll));
	$('.layer').each(function(){
		var top = $(this).offset().top,
			bottom = top + $(this).outerHeight(),
			middle = ( top + bottom ) / 2,
			offset = winmiddle - middle,
			layer = $(this).data('layer') ? Number($(this).data('layer')) : 0;
		$(this).css('top',(offset*layer*.1));
	});
	prevscroll = nextscroll;
}
$(window).scroll(updateScroll);
$(window).resize(updateScroll);
$(document).ready(updateScroll);

window.updateScroll = window.updateScroll || updateScroll;

// ------------------------------------ SHUFFLE ------------------------------------
(function($){$.fn.shuffle = function() {var allElems = this.get(),getRandom = function(max) {return Math.floor(Math.random() * max);},shuffled = $.map(allElems, function(){var random = getRandom(allElems.length),randEl = $(allElems[random]).clone(true)[0];allElems.splice(random, 1);return randEl;});this.each(function(i){$(this).replaceWith($(shuffled[i]));});return $(shuffled);};})(jQuery);
$(document).ready(function(){ var shuffle = $('[data-shuffle]'); var types = []; shuffle.each(function(){ var type = $(this).attr('data-shuffle'); if ( types.indexOf(type) == -1 ) { types.push(type) } }); for ( var i = 0 ; i < types.length ; i++ ) { $('[data-shuffle="'+types[i]+'"]').shuffle(); } });

// ------------------------------------ FOCUS SET ------------------------------------
$(document).on('click','[data-focus]',function(){ var el = $(this); var timer = setTimeout(function(){ $(el.attr('data-focus')).find('input:visible:first').focus(); },1); });

// ------------------------------------ BACKGROUNDS ------------------------------------
$(document).ready(function(){ $('[data-bg]').each(function(){ var el = $(this), bg = $(this).data('bg'); if ( bg ) { var timer = setTimeout(function(){ el.css('background-image','url('+bg+')'); },1); } }); });

// ------------------------------------ VIDEO WRAPPER ------------------------------------
$(document).ready(function(){ $('iframe[src*=vimeo], iframe[src*=youtube]').each(function(){ if ( !$(this).closest('.video') ) { $(this).wrap('<div class="video" />'); } }); });

// ------------------------------------ FILES ------------------------------------
$(document).on('change','input[type="file"]',function(){
	var btn = $(this).closest('.btn');
	var files = this.files;
	if ( btn.length ) {
		switch ( files.length ) {
			case 0: btn.removeAttr('data-value'); break;
			case 1: btn.attr('data-value',files[0].name); break;
			default: btn.attr('data-value',files.length); break;
		}
	}
});

// ------------------------------------ ALBUM ------------------------------------
$(document).ready(function(){
	$('.album').each(function(){
		var images = $(this).find('.album-image > img'),
			size = $(this).hasClass('album-small') ? 15 : 25;
		images.each(function(){
			var item = $(this).closest('.album-image'),
			width = $(this).attr('width'),
			height = $(this).attr('height'),
			grow = width / height,
			shrink = 1,
			basis = (grow*size)+'vmin'
			item.css('flex',grow +' '+ shrink +' '+ basis);
		});
		$(this).addClass('album-ready');
	});
});

//
// Datepicker
// --------------------------------------------------

function activate_datepicker(element,action) {
	element.datepicker({
		beforeShow: function (input,inst) { var timer = setTimeout( function(){ $('#ui-datepicker-div').addClass('ui-widget-active'); } , 1 ); },
		onClose: function (input,inst) { $('#ui-datepicker-div').removeClass('ui-widget-active'); }
	});
	element.datepicker('show');
}

$(document).on('focus','.form-control[data-toggle="datepicker"]', function(){
	activate_datepicker($(this));
});

$(document).on('click','a[data-toggle="datepicker"]', function(e){
	var target = $($(this).attr('data-target'));
	activate_datepicker(target,'show');
	e.preventDefault();
});

//
// Autocomplete
// --------------------------------------------------
if ($.ui.autocomplete) {
	$.extend($.ui.autocomplete.prototype.options, {
		open: function(event, ui) {
			$(this).autocomplete("widget").css({
				"width": ($(this).outerWidth() + "px")
			});
		}
	});
}

$(document).ready(function(){
	$('[data-toggle="autocomplete"]').each(function(){
		var source = $(this).data('autocomplete-source');
		if ( source ) {
			$(this).autocomplete({ source: eval('('+source+')') });
		}
	});
});

//
// Collapse
// --------------------------------------------------

$(document).on('click','[data-toggle="collapse"]',function(e) {
	e.preventDefault();
});

//
// Tooltips
// --------------------------------------------------

if ( !is_touch() ) {
	$(document).tooltip({
		selector: '[data-toggle="tooltip"]',
		placement: function(tip,element){
			return ( $(element).attr('data-placement') ) ? $(element).attr('data-placement') : 'auto';
		},
		container: 'body'
	});
}

//
// Popover
// --------------------------------------------------
$(document).ready(function(){
	$('[data-toggle=popover]').popover({container: 'body', html: true});
})

//
// Carousels
// --------------------------------------------------
$(document).ready(function(){
	$('[data-carousel]').carousel();
});


$('[data-toggle]').on('click',function(){
	$($(this).attr('data-toggle')).toggleClass('in');
});

$('.menu a').on('click',function(e){
	switch ( true ) {
		case ( $(this).hasClass('menu-tree') ) :
			//$(this).closest('li').siblings().children('a.menu-tree').removeClass('active');
			$(this).toggleClass('active');
			break;
		case ( $(this).hasClass('menu-node') || $(this).hasClass('menu-link') ) :
			$('.menu-node, .menu-link').removeClass('active');
			$(this).addClass('active');
			$('.app-menu').removeClass('in');
			//console.log(e.target.href)
			//console.log(window.location.href)
			if ( window.location.href.replace(e.target.href,'') == '/' ) {
				return false;
			}
			break;
	}
});

$('[data-search]').on('keyup focus blur',function(){
	var val = $(this).val();
	var searching = ( val || $(this).is(':focus') );
	var selector_search = '[data-search-close], [data-search-content]';
	var selector_results = '[data-search-results]';
	var selector_content = '[data-content]';
	$( searching ? selector_search : selector_content ).removeAttr('hidden');
	$( !searching ? selector_search : selector_content ).attr('hidden',true);
	if ( val ) { $(selector_results).removeAttr('hidden'); } else { $(selector_results).attr('hidden',true); }
	$('.menu-node').toggleClass('not-active',(searching?true:false));
	$('[data-search-title]').html(val);
	$('[data-search-count]').html(val?5:0);
});

$('[data-search-close]').on('click',function(){
	$('[data-search]').val('').trigger('keyup');
});
