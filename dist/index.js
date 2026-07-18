"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var s=n(function(b,a){
var o=require('@stdlib/assert-is-primitive/dist'),v=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/assert-is-iterator-like/dist');function c(e){var r;return o(e)?!1:(r=e[t],v(r)&&r.length===0&&q(e[t]()))}a.exports=c
});var f=require('@stdlib/assert-has-iterator-symbol-support/dist'),l=require('@stdlib/utils-constant-function/dist'),I=s(),i;f()?i=I:i=l(!1);module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
