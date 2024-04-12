// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Object.prototype.hasOwnProperty;function r(r,t){return null!=r&&e.call(r,t)}var t="function"==typeof Symbol?Symbol:void 0;function n(){return"function"==typeof t&&"symbol"==typeof t("foo")&&r(t,"iterator")&&"symbol"==typeof t.iterator}var i=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function c(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+l(i):l(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var g=Math.abs,d=String.prototype.toLowerCase,y=String.prototype.toUpperCase,b=String.prototype.replace,h=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,m=/^(\d+)e/,_=/\.0$/,j=/\.0*e/,E=/(\..*[^0])0*e/;function S(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!c(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=b.call(t,E,"$1e"),t=b.call(t,j,"e"),t=b.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=b.call(t,h,"e+0$1"),t=b.call(t,v,"e-0$1"),e.alternate&&(t=b.call(t,w,"$1."),t=b.call(t,m,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===y.call(e.specifier)?y.call(t):d.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var k=String.fromCharCode,A=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,o,a,c,l,s,f,g,d,y;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-f.length)<0?f:f=d?f+x(y):x(y)+f)),a+=n.arg||"",c+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var P,B=Object.prototype,R=B.toString,L=B.__defineGetter__,G=B.__defineSetter__,Z=B.__lookupGetter__,W=B.__lookupSetter__;P=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&G&&G.call(e,r,t.set),e};var M=P;function N(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D="function"==typeof t?t.toStringTag:"";var H=z()?function(e){var t,n,i;if(null==e)return q.call(e);n=e[D],t=r(e,D);try{e[D]=void 0}catch(r){return q.call(e)}return i=q.call(e),t?e[D]=n:delete e[D],i}:function(e){return q.call(e)},J=Boolean,K=Boolean.prototype.toString;var Q=z();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ee(e){return U(e)||Y(e)}N(ee,"isPrimitive",U),N(ee,"isObject",Y);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ie="object"==typeof ne?ne:null,oe="object"==typeof globalThis?globalThis:null;var ae=function(e){if(arguments.length){if(!U(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(oe)return oe;if(re)return re;if(te)return te;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ae.document&&ae.document.childNodes,le=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var se,fe=/^\s*function\s*([^(]*)/i;N(ue,"REGEXP",fe),se=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};var pe=se;function ge(e){return null!==e&&"object"==typeof e}var de=function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge);function ye(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=fe.exec(n.toString()))return r[1]}return ge(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}N(ge,"isObjectLikeArray",de);var be="function"==typeof i||"object"==typeof le||"function"==typeof ce?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function he(e){return"function"===be(e)}var ve,we,me=n()?Symbol.iterator:null;n()?ve=function(e){var r;return!function(e){var r=typeof e;return"string"===r||"number"===r||"boolean"===r||"symbol"===r||"bigint"===r||null==e}(e)&&he(r=e[me])&&0===r.length&&function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&he(e.next)}(e[me]())}:(we=!1,ve=function(){return we});var _e=ve;export{_e as default};
//# sourceMappingURL=mod.js.map
