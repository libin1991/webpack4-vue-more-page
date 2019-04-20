!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function o(e){for(var t=e.length,n=[],o=0;o<t;o+=1)n.push(e[o]);return n}e.exports={select:function(e){return document.querySelector(e)},selectAll:function(e){return o((arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(e))},find:function(e,t){return o(e.querySelectorAll(t))},removeClass:function(e,t){e.classList.remove(t)},addClass:function(e,t){e.classList.add(t)},hasClass:function(e,t){return e.classList.contains(t)},removeElement:function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},closest:function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e&&!n.call(e,t);)e=e.parentElement;return e},getStyle:function(e,t,n){var o=window.getComputedStyle(e,null).getPropertyValue(t);return n?Number.parseFloat(o,10):o},blur:function(){document.activeElement&&document.activeElement.blur()},insertHtml:function(e,t,n){var o=["beforebegin","afterbegin","beforeend","afterend"];if(!o.includes(t))throw new TypeError("'position' must be one of them: "+o.join("、"));e.insertAdjacentHTML(t,n)},setAttributes:function(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})},setStyles:function(e,t){Object.keys(t).forEach(function(n){e.style[n]=t[n]})}}},,function(e,t,n){},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};n(2);var i,c=(i=n(0))&&i.__esModule?i:{default:i},l={},u={target:"body",position:"bottom",size:"300px",zIndex:99},s=["log","warn","error","info","debug"],a=void 0,f=void 0,d=void 0;l.creat=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e=r({},u,e),!document.querySelector(".consola-container"))return a=document.querySelector(e.target),c.default.insertHtml(a,"beforeend",'<div class="consola-container '+e.position+'" style="z-index: '+e.zIndex+"; "+("bottom"===e.position?"height":"width")+": "+e.size+'">\n      <div class="consola-tools">\n        <div class="consola-count">Console <span>0</span></div>\n        <div class="consola-clean">Clean</div>\n      </div>\n      <div class="consola-wrap"></div>\n    </div>'),f=a.querySelector(".consola-wrap"),d=a.querySelector(".consola-count span"),a.querySelector(".consola-clean").addEventListener("click",l.clean),function(e,t,n){var o=function(t){var o=e[t];e[t]=function(){o.apply(this,arguments),n(t,[].concat(Array.prototype.slice.call(arguments)))}},r=!0,i=!1,c=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){o(l.value)}}catch(e){i=!0,c=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw c}}}(window.console,s,function(e,t){c.default.insertHtml(f,"beforeend",'<div data-method="'+e+'" class="method method-'+e+'">\n        <div class="method-icon"></div>\n        <div class="method-text">'+function(e){var t=document.createElement("div");e=e.map(function(e){return"object"===(void 0===e?"undefined":o(e))?function e(t,n){if(null==t)return String(t);switch(void 0===t?"undefined":o(t)){case"string":return'"'+t+'"';case"function":return t.toString();case"object":var r=Array.isArray(t);return"{["[+r]+Object.keys(t).map(function(o){return o+": "+e(t[o],(n||1)+1)}).join(",")+"}]"[+r];default:return t.toString()}}(e):e}),null!=t.textContent?t.textContent=e:t.innerText=e;var n=t.innerHTML;return t=null,n}(t)+"</div>\n      </div>"),d.innerHTML=f.children.length,f.scrollTo(0,f.scrollHeight)}),l},l.clean=function(){return f.innerHTML="",d.innerHTML="0",l},window.consola=l,e.exports=l}])});