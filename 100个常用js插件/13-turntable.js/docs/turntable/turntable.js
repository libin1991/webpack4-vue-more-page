!function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=11)}([function(t,n,e){t.exports=!e(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var o=e(1),i=e(2),r=e(19),u=e(21),c=function(t,n,e){var s,f,a,l=t&c.F,p=t&c.G,h=t&c.S,d=t&c.P,g=t&c.B,m=t&c.W,v=p?i:i[n]||(i[n]={}),y=v.prototype,w=p?o:h?o[n]:(o[n]||{}).prototype;p&&(e=n);for(s in e)(f=!l&&w&&void 0!==w[s])&&s in v||(a=f?w[s]:e[s],v[s]=p&&"function"!=typeof w[s]?e[s]:g&&f?r(a,o):m&&w[s]==a?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):d&&"function"==typeof a?r(Function.call,a):a,d&&((v.virtual||(v.virtual={}))[s]=a,t&c.R&&y&&!y[s]&&u(y,s,a)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var o=e(22),i=e(23),r=e(25),u=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(o(t),n=r(n,!0),o(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var o=e(8),i=e(9);t.exports=function(t){return o(i(t))}},function(t,n,e){var o=e(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},function(t,n,e){t.exports=e(12)},function(t,n,e){"use strict";e(13),e(14)},function(t,n){},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=e(15),r=o(i),u=e(42),c=o(u),s=e(43),f=o(s),a=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".turntable",e=arguments[1];(0,c.default)(this,t),this.options=(0,r.default)({},t.DEFAULTS,e),this.config={el:n instanceof Element?n:document.querySelector(n),elLeft:0,eltop:0,elWidth:0,elHeidth:0,triggerType:["hover","scroll"],className:"__turntable__",play:!1},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.cancelAnimationFrame=function(){return window.cancelAnimationFrame||Window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),this._eventBind=this._eventBind.bind(this),this._eventHover=this._eventHover.bind(this),this._eventScroll=this._eventScroll.bind(this),this._init()}return(0,f.default)(t,[{key:"_init",value:function(){this._creatDom()}},{key:"_creatDom",value:function(){var t=this;this.config.el.classList.add(this.config.className),this.config.elLeft=this.config.el.getBoundingClientRect().left,this.config.elTop=this.config.el.getBoundingClientRect().top,this.config.elWidth=+this._getStyle(this.config.el,"width").replace(/px/,""),this.config.elHeidth=+this._getStyle(this.config.el,"height").replace(/px/,""),this.options.images.map(function(n){t._preload(n)})}},{key:"_preload",value:function(t){var n=this,e=new Image;e.src=t,e.onload=function(){n._throttle(n._eventBind,n.options.throttle)}}},{key:"_eventBind",value:function(){if("hover"===this.options.trigger)this._setImg(this.options.images[0]),this.config.el.addEventListener("mousemove",this._eventHover);else{if("scroll"!==this.options.trigger)throw new TypeError("Turntable required trigger attributes: "+this.config.triggerType.join(","));this._eventScroll(),window.addEventListener("scroll",this._eventScroll)}}},{key:"_eventHover",value:function(t){var n=Math.floor((t.clientX-this.config.elLeft)/(this.config.elWidth/this.options.images.length));n<=this.options.images.length-1&&this._setImg(this.options.images[n])}},{key:"_eventScroll",value:function(){var t=Math.floor(this._screenY()/((document.body.offsetHeight-window.innerHeight)/this.options.images.length));t<=this.options.images.length-1&&this._setImg(this.options.images[t])}},{key:"_setImg",value:function(t){this.config.imgDom?this.config.imgDom.src=t:(this.config.el.insertAdjacentHTML("beforeend",'<img class="'+this.config.className+'img" src="'+t+'">'),this.config.imgDom=this.config.el.querySelector("."+this.config.className+"img"))}},{key:"destory",value:function(){this.options.images=[],this.config.el.classList.remove(this.config.className),this.config.imgDom.parentNode.removeChild(this.config.imgDom),"hover"===this.options.trigger?this.config.el.removeEventListener("mousemove",this._eventHover):"scroll"===this.options.trigger&&window.removeEventListener("scroll",this._eventScroll)}},{key:"play",value:function(){if(!this.config.play){this.config.play=!0;var t=this,n=0,e=void 0;window.cancelAnimationFrame(e),e=window.requestAnimFrame(function o(){n>=t.options.images.length?(window.cancelAnimationFrame(e),t.config.play=!1):(t._setImg(t.options.images[n++]),e=window.requestAnimationFrame(o))})}}},{key:"_throttle",value:function(t,n){clearTimeout(t.tId),t.tId=setTimeout(function(){t()},n)}},{key:"_getStyle",value:function(t,n){return t&&t.currentStyle?t.currentStyle[n]:window.getComputedStyle(t)[n]}},{key:"_screenY",value:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}}],[{key:"DEFAULTS",get:function(){return{images:[""],trigger:"hover",throttle:500}}}]),t}();window.Turntable=a,t.exports=a},function(t,n,e){"use strict";n.__esModule=!0;var o=e(16),i=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=i.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(t,n,e){t.exports={default:e(17),__esModule:!0}},function(t,n,e){e(18),t.exports=e(2).Object.assign},function(t,n,e){var o=e(5);o(o.S+o.F,"Object",{assign:e(27)})},function(t,n,e){var o=e(20);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,i){return t.call(n,e,o,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var o=e(6),i=e(26);t.exports=e(0)?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var o=e(3);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(0)&&!e(4)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var o=e(3),i=e(1).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,n,e){var o=e(3);t.exports=function(t,n){if(!o(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!o(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!o(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!o(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var o=e(28),i=e(39),r=e(40),u=e(41),c=e(8),s=Object.assign;t.exports=!s||e(4)(function(){var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=o})?function(t,n){for(var e=u(t),s=arguments.length,f=1,a=i.f,l=r.f;s>f;)for(var p,h=c(arguments[f++]),d=a?o(h).concat(a(h)):o(h),g=d.length,m=0;g>m;)l.call(h,p=d[m++])&&(e[p]=h[p]);return e}:s},function(t,n,e){var o=e(29),i=e(38);t.exports=Object.keys||function(t){return o(t,i)}},function(t,n,e){var o=e(30),i=e(7),r=e(32)(!1),u=e(35)("IE_PROTO");t.exports=function(t,n){var e,c=i(t),s=0,f=[];for(e in c)e!=u&&o(c,e)&&f.push(e);for(;n.length>s;)o(c,e=n[s++])&&(~r(f,e)||f.push(e));return f}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var o=e(7),i=e(33),r=e(34);t.exports=function(t){return function(n,e,u){var c,s=o(n),f=i(s.length),a=r(u,f);if(t&&e!=e){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var o=e(10),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,n,e){var o=e(10),i=Math.max,r=Math.min;t.exports=function(t,n){return t=o(t),t<0?i(t+n,0):r(t,n)}},function(t,n,e){var o=e(36)("keys"),i=e(37);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,n,e){var o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var o=e(9);t.exports=function(t){return Object(o(t))}},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var o=e(44),i=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}()},function(t,n,e){t.exports={default:e(45),__esModule:!0}},function(t,n,e){e(46);var o=e(2).Object;t.exports=function(t,n,e){return o.defineProperty(t,n,e)}},function(t,n,e){var o=e(5);o(o.S+o.F*!e(0),"Object",{defineProperty:e(6).f})}]);