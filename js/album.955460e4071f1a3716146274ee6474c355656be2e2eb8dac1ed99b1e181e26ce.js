!function(e){function t(t){for(var n,a,c=t[0],l=t[1],i=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={1:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/public/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=l;u.push([101,0]),r()}({101:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(9),a=r.n(u),c=r(57),l=r.n(c);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("album-root");if(!e)throw new Error("react root not found");const{album:t}=e.dataset;if(!t)throw new Error("album data not found");const r=JSON.parse(t);r.tracks=r.tracks.map(e=>(e.url||(e.url=function(e,t){switch(e){case"GOOGLE_DRIVE":return"https://docs.google.com/uc?id="+t;default:throw new Error("unexpected source: "+e)}}(r.source,e.id)),e)),a.a.render(o.a.createElement("div",{className:"album-container"},o.a.createElement(l.a,Object.assign({},r))),e)})}});