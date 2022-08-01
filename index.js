// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isIterableLike=e()}(this,(function(){"use strict";var t=Object.prototype.hasOwnProperty;function e(e,r){return null!=e&&t.call(e,r)}function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&e(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var n=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,u=Object.defineProperty,f=Object.prototype,l=f.toString,c=f.__defineGetter__,a=f.__defineSetter__,y=f.__lookupGetter__,p=f.__lookupSetter__;i=function(){try{return o({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(y.call(t,e)||p.call(t,e)?(n=t.__proto__,t.__proto__=f,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&c&&c.call(t,e,r.get),u&&a&&a.call(t,e,r.set),t};var b=i;function s(t,e,r){b(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function d(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return v&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=m()?function(t){var r,n,o;if(null==t)return _.call(t);n=t[g],r=e(t,g);try{t[g]=void 0}catch(e){return _.call(t)}return o=_.call(t),r?t[g]=n:delete t[g],o}:function(t){return _.call(t)},w=Boolean.prototype.toString;var h=m();function S(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function O(t){return d(t)||S(t)}function A(){return new Function("return this;")()}s(O,"isPrimitive",d),s(O,"isObject",S);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var x=function(t){if(arguments.length){if(!d(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(T)return T;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),k=x.document&&x.document.childNodes,L=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var C,G=/^\s*function\s*([^(]*)/i;s(V,"REGEXP",G),C=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var F=C;function I(t){return null!==t&&"object"==typeof t}var M=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!F(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(I);function N(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=G.exec(n.toString()))return e[1]}return I(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(I,"isObjectLikeArray",M);var R="function"==typeof n||"object"==typeof L||"function"==typeof k?function(t){return N(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?N(t).toLowerCase():e};function U(t){return"function"===R(t)}var X,q,z=r()?Symbol.iterator:null;return r()?X=function(t){var e;return!function(t){var e=typeof t;return"string"===e||"number"===e||"boolean"===e||"symbol"===e||"bigint"===e||null==t}(t)&&U(e=t[z])&&0===e.length&&function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&U(t.next)}(t[z]())}:(q=!1,X=function(){return q}),X}));
//# sourceMappingURL=index.js.map
