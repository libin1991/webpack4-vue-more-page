!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,s=r.length;i<s;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},function(e,t,n){"use strict";var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(r=n(0))&&r.__esModule?r:{default:r},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.options=o({},t.DEFAULTS,e),n.targetEl=n.options.target instanceof Element?n.options.target:document.querySelector(n.options.target),n.triggerEl=n.options.trigger instanceof Element?n.options.trigger:document.querySelector(n.options.trigger),n._event=n._event.bind(n),n.triggerEl.addEventListener("click",n._event,!1),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),i(t,[{key:"_event",value:function(){this.originalSelectedText=this._selectedText()||"",this.selectedText="function"==typeof this.options.beforecopy?this.options.beforecopy({text:this.originalSelectedText,target:this.targetEl,trigger:this.triggerEl}):this.originalSelectedText,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.contain="strict",this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.selectedText,document.body.appendChild(this.fakeElem),this.fakeElem.select(),this.fakeElem.selectionStart=0,this.fakeElem.selectionEnd=this.selectedText.length;var e=void 0;try{e=document.execCommand("copy")}catch(t){e=!1}this._handleResult(e)}},{key:"_selectedText",value:function(){var e=void 0,t=this.targetEl,n=t.nodeName;return"SELECT"===n||"INPUT"===n||"TEXTAREA"===n?(t.focus(),e=t.value):e=this.targetEl.textContent,e}},{key:"_handleResult",value:function(e){document.body.removeChild(this.fakeElem);var t={text:this.selectedText,target:this.targetEl,trigger:this.triggerEl};e?"function"==typeof this.options.success?this.options.success(t):this.emit("success",t):"function"==typeof this.options.error?this.options.error(t):this.emit("error",t)}},{key:"destroy",value:function(){this.triggerEl.removeEventListener("click",this._event,!1)}}],[{key:"DEFAULTS",get:function(){return{target:"",trigger:"",beforecopy:null,success:null,error:null}}}]),t}();window.Clipboard=l,e.exports=l}])});