(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{70:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(10),c=n.n(a),s=n(49),d=n.n(s);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("album-root");if(!e)throw new Error("react root not found");const{album:t}=e.dataset;if(!t)throw new Error("album data not found");const n=JSON.parse(t);n.tracks=n.tracks.map(e=>(e.url||(e.url=function(e,t){switch(e){case"GOOGLE_DRIVE":return"https://docs.google.com/uc?id="+t;default:throw new Error("unexpected source: "+e)}}(n.source,e.id)),e)),c.a.render(r.a.createElement("div",{className:"album-container"},r.a.createElement(d.a,Object.assign({},n))),e)})}},[[70,0]]]);