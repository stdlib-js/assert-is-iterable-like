"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(p,a){
var n=require('@stdlib/assert-is-primitive/dist'),o=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),v=require('@stdlib/assert-is-iterator-like/dist');function q(e){var r;return n(e)?!1:(r=e[t],o(r)&&r.length===0&&v(e[t]()))}a.exports=q
});var c=require('@stdlib/assert-has-iterator-symbol-support/dist'),f=require('@stdlib/utils-constant-function/dist'),l=s(),i;c()?i=l:i=f(!1);module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
