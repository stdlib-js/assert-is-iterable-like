// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isIterableLike=e()}(this,(function(){"use strict";function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e=Object.prototype.hasOwnProperty;var r=function(t,r){return null!=t&&e.call(t,r)},n=r;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&n(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator};var u=function(t){return function(){return t}};var i=function(t){var e=typeof t;return"string"===e||"number"===e||"boolean"===e||"symbol"===e||"bigint"===e||null==t},f=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=function(){try{return a({},"x",{}),!0}catch(t){return!1}},c=Object.defineProperty,y=Object.prototype,p=y.toString,b=y.__defineGetter__,s=y.__defineSetter__,v=y.__lookupGetter__,d=y.__lookupSetter__;var m=function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===p.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(v.call(t,e)||d.call(t,e)?(n=t.__proto__,t.__proto__=y,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&b&&b.call(t,e,r.get),i&&s&&s.call(t,e,r.set),t},_=c,j=m,g=l()?_:j;var w=function(t,e,r){g(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},h=w;var S=function(t){return"boolean"==typeof t};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return O&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,A=P;var T=function(t){return A.call(t)},x="function"==typeof Symbol?Symbol.toStringTag:"",B=r,k=x,G=P;var L=T,V=function(t){var e,r,n;if(null==t)return G.call(t);r=t[k],e=B(t,k);try{t[k]=void 0}catch(e){return G.call(t)}return n=G.call(t),e?t[k]=r:delete t[k],n},C=E()?V:L,M=Boolean.prototype.toString;var F=C,I=function(t){try{return M.call(t),!0}catch(t){return!1}},R=E();var X=function(t){return"object"==typeof t&&(t instanceof Boolean||(R?I(t):"[object Boolean]"===F(t)))},z=S,D=X;var N=h,U=function(t){return z(t)||D(t)},q=X;N(U,"isPrimitive",S),N(U,"isObject",q);var H=U;var J=function(){return new Function("return this;")()},K="object"==typeof self?self:null,Q="object"==typeof window?window:null,W="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof W?W:null;module.exports=Y;var Z=H.isPrimitive,$=J,tt=K,et=Q,rt=t(Object.freeze({__proto__:null}));var nt=function(t){if(arguments.length){if(!Z(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return $()}if(tt)return tt;if(et)return et;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")},ot=nt(),ut=ot.document&&ot.document.childNodes,it=Int8Array,ft=f,at=ut,lt=it;var ct=function(){return"function"==typeof ft||"object"==typeof lt||"function"==typeof at};var yt=function(){return/^\s*function\s*([^(]*)/i},pt=yt;h(pt,"REGEXP",yt());var bt=pt,st=C;var vt=Array.isArray?Array.isArray:function(t){return"[object Array]"===st(t)};var dt=function(t){return null!==t&&"object"==typeof t};h(dt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!vt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(dt));var mt=dt;var _t=C,jt=bt.REGEXP,gt=function(t){return mt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var wt=function(t){var e,r,n;if(("Object"===(r=_t(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=jt.exec(n.toString()))return e[1]}return gt(t)?"Buffer":r},ht=wt;var St=wt;var Ot=function(t){var e;return null===t?"null":"object"===(e=typeof t)?ht(t).toLowerCase():e},Et=function(t){return St(t).toLowerCase()},Pt=ct()?Et:Ot;var At=function(t){return"function"===Pt(t)},Tt=o()?Symbol.iterator:null,xt=At;var Bt,kt=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&xt(t.next)};return Bt=o()?function(t){var e;return!i(t)&&(e=t[Tt],At(e)&&0===e.length&&kt(t[Tt]()))}:u(!1),Bt}));
//# sourceMappingURL=index.js.map