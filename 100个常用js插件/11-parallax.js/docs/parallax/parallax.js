!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=11)}([function(t,n,e){t.exports=!e(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(1),o=e(2),i=e(19),u=e(21),s=function(t,n,e){var c,f,a,l=t&s.F,p=t&s.G,h=t&s.S,d=t&s.P,v=t&s.B,m=t&s.W,y=p?o:o[n]||(o[n]={}),g=y.prototype,_=p?r:h?r[n]:(r[n]||{}).prototype;p&&(e=n);for(c in e)(f=!l&&_&&void 0!==_[c])&&c in y||(a=f?_[c]:e[c],y[c]=p&&"function"!=typeof _[c]?e[c]:v&&f?i(a,r):m&&_[c]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):d&&"function"==typeof a?i(Function.call,a):a,d&&((y.virtual||(y.virtual={}))[c]=a,t&s.R&&g&&!g[c]&&u(g,c,a)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(22),o=e(23),i=e(25),u=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(8),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){t.exports=e(12)},function(t,n,e){"use strict";e(13),e(14)},function(t,n){},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(15),i=r(o),u=e(42),s=r(u),c=e(43),f=r(c),a=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".parallax",e=arguments[1];(0,s.default)(this,t),this.options=(0,i.default)({},t.DEFAULTS,e),this.config={el:n,pause:!1,update:!1,posY:0,screenY:0,transformProp:this._transformProp(),screenHeight:window.innerHeight||0,elems:[],elemsInit:[]},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),this.options.speed=this._clamp(this.options.speed),this._animate=this._animate.bind(this),this._update=this._update.bind(this),this._init()}return(0,f.default)(t,[{key:"_init",value:function(){this._elemsInit(),this._eventBind()}},{key:"_elemsInit",value:function(){var t=document.querySelectorAll(this.config.el);if(!(t.length>0))throw new Error("The elements("+el+") you're trying to select don't exist.");this.config.elems=[].slice.call(t);for(var n=0;n<this.config.elems.length;n++){var e=this._createInit(this.config.elems[n]);this.config.elemsInit.push(e)}}},{key:"_createInit",value:function(t){var n=t.getAttribute("data-parallax-speed");return{speed:n?this._clamp(+n):this.options.speed,top:t.getBoundingClientRect().top,height:t.clientHeight||t.offsetHeight||t.scrollHeight||0,style:this.config.update?"":t.style.cssText}}},{key:"_eventBind",value:function(){this._setPosition(),window.addEventListener("resize",this._animate),this._update(),this._animate()}},{key:"_setPosition",value:function(){var t=this.config.posY;return this.config.posY=this._screenY(),t!=this.config.posY}},{key:"_screenY",value:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},{key:"_animate",value:function(){for(var t=0;t<this.config.elemsInit.length;t++){var n=this.config.elemsInit[t],e=(this.config.screenY-this.config.posY)*(1+.1*n.speed)+this.config.posY,r="translate3d(0, "+e+"px, 0)";this.config.elems[t].style[this.config.transformProp]=r}}},{key:"_update",value:function(){this._setPosition()&&!1===this.config.pause&&this._animate(),window.requestAnimFrame(this._update)}},{key:"update",value:function(){this.config.update=!0,this.config.elemsInit=[],this._init()}},{key:"destory",value:function(){window.removeEventListener("resize",this._animate);for(var t=0;t<this.config.elems.length;t++)this.config.elems[t].style.cssText=this.config.elemsInit[t].style;this.config.pause=!0}},{key:"_transformProp",value:function(){return window.transformProp||function(){var t=document.createElement("div");if(null==t.style.transform){var n=["Webkit","Moz","ms"];for(var e in n)if(void 0!==t.style[n[e]+"Transform"])return n[e]+"Transform"}return"transform"}()}},{key:"_clamp",value:function(t){var n=this.options.interval[0],e=this.options.interval[1];return t<=n?n:t>=e?e:t}}],[{key:"DEFAULTS",get:function(){return{speed:-2,interval:[-10,10]}}}]),t}();window.Parallax=a,t.exports=a},function(t,n,e){"use strict";n.__esModule=!0;var r=e(16),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=o.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},function(t,n,e){t.exports={default:e(17),__esModule:!0}},function(t,n,e){e(18),t.exports=e(2).Object.assign},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(27)})},function(t,n,e){var r=e(20);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(6),o=e(26);t.exports=e(0)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(0)&&!e(4)(function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var r=e(28),o=e(39),i=e(40),u=e(41),s=e(8),c=Object.assign;t.exports=!c||e(4)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=u(t),c=arguments.length,f=1,a=o.f,l=i.f;c>f;)for(var p,h=s(arguments[f++]),d=a?r(h).concat(a(h)):r(h),v=d.length,m=0;v>m;)l.call(h,p=d[m++])&&(e[p]=h[p]);return e}:c},function(t,n,e){var r=e(29),o=e(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(30),o=e(7),i=e(32)(!1),u=e(35)("IE_PROTO");t.exports=function(t,n){var e,s=o(t),c=0,f=[];for(e in s)e!=u&&r(s,e)&&f.push(e);for(;n.length>c;)r(s,e=n[c++])&&(~i(f,e)||f.push(e));return f}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(7),o=e(33),i=e(34);t.exports=function(t){return function(n,e,u){var s,c=r(n),f=o(c.length),a=i(u,f);if(t&&e!=e){for(;f>a;)if((s=c[a++])!=s)return!0}else for(;f>a;a++)if((t||a in c)&&c[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(10),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(36)("keys"),o=e(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var r=e(44),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){t.exports={default:e(45),__esModule:!0}},function(t,n,e){e(46);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(5);r(r.S+r.F*!e(0),"Object",{defineProperty:e(6).f})}]);