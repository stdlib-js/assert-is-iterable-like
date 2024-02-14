// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Object.prototype.hasOwnProperty;function r(r,t){return null!=r&&e.call(r,t)}var t="function"==typeof Symbol?Symbol:void 0;function i(){return"function"==typeof t&&"symbol"==typeof t("foo")&&r(t,"iterator")&&"symbol"==typeof t.iterator}var n=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty;function c(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+s(n):s(n)+e,i&&(e="-"+e)),e}var p=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!c(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function g(e){return"string"==typeof e}var d=Math.abs,h=String.prototype.toLowerCase,b=String.prototype.toUpperCase,w=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,m=/^(\d+)$/,_=/^(\d+)e/,E=/\.0$/,k=/\.0*e/,x=/(\..*[^0])0*e/;function S(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!c(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":d(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=w.call(t,x,"$1e"),t=w.call(t,k,"e"),t=w.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,y,"e+0$1"),t=w.call(t,v,"e-0$1"),e.alternate&&(t=w.call(t,m,"$1."),t=w.call(t,_,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function V(e,r,t){var i=r-e.length;return i<0?e:e=t?e+j(i):j(i)+e}var T=String.fromCharCode,$=isNaN,A=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,n,a,o,c,s,p;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(g(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=F(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=f(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$(a)?String(i.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=S(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=l(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=V(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,i,n;for(t=[],n=0,i=C.exec(e);i;)(r=e.slice(n,C.lastIndex-i[0].length)).length&&t.push(r),t.push(O(i)),n=C.lastIndex,i=C.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function P(e){return"string"==typeof e}function Z(e){var r,t;if(!P(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[R(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var G,L=Object.prototype,W=L.toString,B=L.__defineGetter__,N=L.__defineSetter__,U=L.__lookupGetter__,X=L.__lookupSetter__;G=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(U.call(e,r)||X.call(e,r)?(i=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&B&&B.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var M=G;function z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(e){return"boolean"==typeof e}function D(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var H=D();function J(){return H&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString,Q="function"==typeof t?t.toStringTag:"",Y=J()?function(e){var t,i,n;if(null==e)return K.call(e);i=e[Q],t=r(e,Q);try{e[Q]=void 0}catch(r){return K.call(e)}return n=K.call(e),t?e[Q]=i:delete e[Q],n}:function(e){return K.call(e)},ee=Boolean,re=Boolean.prototype.toString,te=J();function ie(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function ne(e){return q(e)||ie(e)}function ae(){return new Function("return this;")()}z(ne,"isPrimitive",q),z(ne,"isObject",ie);var oe="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null,le=function(e){if(arguments.length){if(!q(e))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(se)return se;if(oe)return oe;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=le.document&&le.document.childNodes,ue=Int8Array,fe=D(),ge=Object.prototype.toString,de="function"==typeof t?t.toStringTag:"",he=fe&&"symbol"==typeof Symbol.toStringTag?function(e){var t,i,n;if(null==e)return ge.call(e);i=e[de],t=r(e,de);try{e[de]=void 0}catch(r){return ge.call(e)}return n=ge.call(e),t?e[de]=i:delete e[de],n}:function(e){return ge.call(e)},be="function"==typeof Object.defineProperty?Object.defineProperty:null,we=Object.defineProperty;function ye(e){return"number"==typeof e}function ve(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function me(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ve(n):ve(n)+e,i&&(e="-"+e)),e}var _e=String.prototype.toLowerCase,Ee=String.prototype.toUpperCase;function ke(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=me(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=me(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ee.call(e.specifier)?Ee.call(t):_e.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xe(e){return"string"==typeof e}var Se=Math.abs,je=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase,Te=String.prototype.replace,$e=/e\+(\d)$/,Ae=/e-(\d)$/,Fe=/^(\d+)$/,Ie=/^(\d+)e/,Ce=/\.0$/,Oe=/\.0*e/,Re=/(\..*[^0])0*e/;function Pe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Se(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Te.call(t,Re,"$1e"),t=Te.call(t,Oe,"e"),t=Te.call(t,Ce,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Te.call(t,$e,"e+0$1"),t=Te.call(t,Ae,"e-0$1"),e.alternate&&(t=Te.call(t,Fe,"$1."),t=Te.call(t,Ie,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):je.call(t)}function Ze(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ge(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ze(i):Ze(i)+e}var Le=String.fromCharCode,We=isNaN,Be=Array.isArray;function Ne(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ue(e){var r,t,i,n,a,o,c,s,l;if(!Be(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(xe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ne(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,We(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,We(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ke(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!We(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=We(a)?String(i.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Pe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=me(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ge(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Xe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Me(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ze(e){var r,t,i,n;for(t=[],n=0,i=Xe.exec(e);i;)(r=e.slice(n,Xe.lastIndex-i[0].length)).length&&t.push(r),t.push(Me(i)),n=Xe.lastIndex,i=Xe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function qe(e){return"string"==typeof e}function De(e){var r,t;if(!qe(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ze(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ue.apply(null,r)}var He,Je=Object.prototype,Ke=Je.toString,Qe=Je.__defineGetter__,Ye=Je.__defineSetter__,er=Je.__lookupGetter__,rr=Je.__lookupSetter__;He=function(){try{return be({},"x",{}),!0}catch(e){return!1}}()?we:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ke.call(e))throw new TypeError(De("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ke.call(t))throw new TypeError(De("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(er.call(e,r)||rr.call(e,r)?(i=e.__proto__,e.__proto__=Je,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Qe&&Qe.call(e,r,t.get),o&&Ye&&Ye.call(e,r,t.set),e};var tr=He;function ir(){return/^\s*function\s*([^(]*)/i}var nr=/^\s*function\s*([^(]*)/i;!function(e,r,t){tr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(ir,"REGEXP",nr);var ar="function"==typeof Object.defineProperty?Object.defineProperty:null,or=Object.defineProperty;function cr(e){return"number"==typeof e}function sr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function lr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+sr(n):sr(n)+e,i&&(e="-"+e)),e}var pr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase;function fr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!cr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=lr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=lr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ur.call(e.specifier)?ur.call(t):pr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function gr(e){return"string"==typeof e}var dr=Math.abs,hr=String.prototype.toLowerCase,br=String.prototype.toUpperCase,wr=String.prototype.replace,yr=/e\+(\d)$/,vr=/e-(\d)$/,mr=/^(\d+)$/,_r=/^(\d+)e/,Er=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Sr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!cr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":dr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=wr.call(t,xr,"$1e"),t=wr.call(t,kr,"e"),t=wr.call(t,Er,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=wr.call(t,yr,"e+0$1"),t=wr.call(t,vr,"e-0$1"),e.alternate&&(t=wr.call(t,mr,"$1."),t=wr.call(t,_r,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===br.call(e.specifier)?br.call(t):hr.call(t)}function jr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Vr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+jr(i):jr(i)+e}var Tr=String.fromCharCode,$r=isNaN,Ar=Array.isArray;function Fr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ir(e){var r,t,i,n,a,o,c,s,l;if(!Ar(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(gr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Fr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$r(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$r(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=fr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$r(a)?String(i.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Sr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=lr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Vr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Cr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Or(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Rr(e){var r,t,i,n;for(t=[],n=0,i=Cr.exec(e);i;)(r=e.slice(n,Cr.lastIndex-i[0].length)).length&&t.push(r),t.push(Or(i)),n=Cr.lastIndex,i=Cr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Pr(e){return"string"==typeof e}function Zr(e){var r,t;if(!Pr(e))throw new TypeError(Zr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Rr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ir.apply(null,r)}var Gr,Lr=Object.prototype,Wr=Lr.toString,Br=Lr.__defineGetter__,Nr=Lr.__defineSetter__,Ur=Lr.__lookupGetter__,Xr=Lr.__lookupSetter__;Gr=function(){try{return ar({},"x",{}),!0}catch(e){return!1}}()?or:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Wr.call(e))throw new TypeError(Zr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Wr.call(t))throw new TypeError(Zr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Ur.call(e,r)||Xr.call(e,r)?(i=e.__proto__,e.__proto__=Lr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Br&&Br.call(e,r,t.get),o&&Nr&&Nr.call(e,r,t.set),e};var Mr,zr=Gr;Mr=Array.isArray?Array.isArray:function(e){return"[object Array]"===he(e)};var qr=Mr;function Dr(e){return null!==e&&"object"==typeof e}var Hr=function(e){if("function"!=typeof e)throw new TypeError(Zr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!qr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Dr);function Jr(e){var r,t,i,n;if(("Object"===(t=he(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=nr.exec(i.toString()))return r[1]}return Dr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}!function(e,r,t){zr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Dr,"isObjectLikeArray",Hr);var Kr="function"==typeof n||"object"==typeof ue||"function"==typeof pe?function(e){return Jr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Jr(e).toLowerCase():r};function Qr(e){return"function"===Kr(e)}var Yr,et,rt=i()?Symbol.iterator:null;return i()?Yr=function(e){var r;return!function(e){var r=typeof e;return"string"===r||"number"===r||"boolean"===r||"symbol"===r||"bigint"===r||null==e}(e)&&Qr(r=e[rt])&&0===r.length&&function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Qr(e.next)}(e[rt]())}:(et=!1,Yr=function(){return et}),Yr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isIterableLike=r();
//# sourceMappingURL=browser.js.map
