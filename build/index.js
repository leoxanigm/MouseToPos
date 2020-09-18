/*!
 * 
 *   @hodgef/js-library-boilerplate-basic v1.4.11
 *   https://github.com/hodgef/js-library-boilerplate-basic
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MyLibrary=e():n.MyLibrary=e()}(window,(function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";e.a="data:image/png;base64,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"},function(n,e,t){"use strict";t.r(e);t(4);e.default=function n(){var e,t,o;(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")})(this,n),o=function(){console.log("Library method fired")},(t="myMethod")in(e=this)?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,console.log("Library constructor loaded")}},function(n,e,t){var o=t(5),r=t(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],u=e.base?i[0]+e.base:i[0],s=t[u]||0,f="".concat(u," ").concat(s);t[u]=s+1;var A=c(f),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==A?(a[A].references++,a[A].updater(l)):a.push({identifier:f,updater:p(l,e),references:1}),o.push(f)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,A=(f=[],function(n,e){return f[n]=e,f.filter(Boolean).join("\n")});function l(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=A(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,C=0;function p(n,e){var t,o,r;if(e.singleton){var i=C++;t=g||(g=s(e)),o=l.bind(null,t,i,!1),r=l.bind(null,t,i,!0)}else t=s(e),o=d.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=u(n,e),s=0;s<t.length;s++){var f=c(t[s]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(1),a=t.n(i),c=t(2),u=r()(!0),s=a()(c.a);u.push([n.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("+s+") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n","",{version:3,sources:["webpack://src/index.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,oEAA6C;EAC7C,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB",sourcesContent:['html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("image.png") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n'],sourceRoot:""}]),e.default=u}])}));
//# sourceMappingURL=index.js.map