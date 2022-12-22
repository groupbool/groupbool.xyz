!function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&f.push(l[o][0]),l[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==l[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},l={2:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/public/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;a.push([95,0]),r()}({2:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}},95:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r.n(n),a=r(5),o=r.n(a),c=r(1),i=r(2),u=r(16),d=r.n(u);var s=function({keys:e,onShortcut:t}){const r=Object(n.useCallback)((e,r)=>{e.preventDefault(),console.debug("handling shortcut:",r),t()},[e,t]);Object(n.useEffect)(()=>(d.a.bind(e,r),()=>{d.a.unbind(e)}))};function f({label:e,children:t}){return l.a.createElement(m.Row,null,l.a.createElement(m.Cell,null,e),l.a.createElement(m.Cell,null,t))}function m(){const[e,t]=Object(n.useState)(!1);return s({keys:"?",onShortcut:()=>t(!e)}),s({keys:"esc",onShortcut:()=>t(!1)}),e?l.a.createElement(m.Container,null,l.a.createElement(m.Modal,null,l.a.createElement(m.Heading,null,"keyboard shortcuts"),l.a.createElement(m.Table,null,l.a.createElement(m.Header,null,l.a.createElement(m.Cell,null,"action"),l.a.createElement(m.Cell,null,"shortcuts")),l.a.createElement(f,{label:"shortcuts"},l.a.createElement(m.Key,null,"shift")," + ",l.a.createElement(m.Key,null,"?")),l.a.createElement(f,{label:"search"},l.a.createElement(m.Key,null,"cmd")," + ",l.a.createElement(m.Key,null,"k"))))):null}var p=m;m.Container=c.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,m.Modal=c.default.div`
  border: 2px solid ${e=>e.theme.colors.pink};
  background: ${e=>e.theme.colors.white};
  box-shadow: 0 8px 8px -10px black;
  min-width: 20rem;
`,m.Heading=c.default.div`
  font-size: ${e=>e.theme.size.headingSm};
  padding: 1rem;
`,m.Table=c.default.div`
  padding-bottom: 1rem;
`,m.Header=c.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${e=>e.theme.colors.lightGray};
  padding: 0.4rem 1rem;
  margin-bottom: 0.5rem;
`,m.Cell=c.default.div`
`,m.Row=c.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.7rem 1rem;
`,m.Key=c.default.span`
  background-color: ${e=>e.theme.colors.lightGray};
  padding: 0.3rem 0.5rem;
  color: ${e=>e.theme.colors.pink};
  border-radius: 3px;
  font-size: ${e=>e.theme.size.small};
`,document.addEventListener("DOMContentLoaded",()=>{!function(){const e=document.querySelector(".header-mobile"),t=document.querySelector(".header-nav"),r=document.querySelector(".header-menu-close");if(!e||!t||!r)return;const n=()=>{e.classList.toggle("header-mobile-hide"),t.classList.toggle("header-nav-show")};e.addEventListener("click",n),r.addEventListener("click",n)}(),function(){const e=document.getElementById("shortcuts-root");if(!e)return;o.a.render(l.a.createElement(c.ThemeProvider,{theme:i.a},l.a.createElement(p,null)),e)}()})}});