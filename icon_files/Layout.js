exports["desktop.Layout"]=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=function(){function t(t){this.registry=t,this.selectors={}}return t.prototype.preInit=function(){this.nodes=new o.default(this.selectors)},t.prototype.init=function(){},t.prototype.onLoad=function(){},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){void 0===e&&(e=null),this.selectors=t,this.nodes={},"string"==typeof e&&(e=$(e)),this.container=e}return t.prototype.get=function(t){var e=this.nodes,n=e[t];return n||(n=this.container?$(this.selectors[t],this.container):$(this.selectors[t]),e[t]=n),n},t}();e.default=o},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.init=function(){},e}(r.default);e.default=i}]);