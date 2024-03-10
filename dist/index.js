"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(w,i){
var f=require('@stdlib/assert-is-object/dist'),o=require('@stdlib/assert-is-function/dist'),v=require('@stdlib/assert-has-own-property/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e,a){var n;if(!f(r))throw new TypeError(t('null3L',r));if(!o(e))throw new TypeError(t('null2H',e));for(n in r)if(v(r,n)&&!e.call(a,r[n],n,r))return!1;return!0}i.exports=m
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
