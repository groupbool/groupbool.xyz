(()=>{"use strict";var e,t={4891:(e,t,r)=>{var l=r(7294),n=r(3935),a=r(2788);const o={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}};var d=r(2441),i=r.n(d);const c=function({keys:e,onShortcut:t}){const r=(0,l.useCallback)(((e,r)=>{e.preventDefault(),console.debug("handling shortcut:",r),t()}),[e,t]);(0,l.useEffect)((()=>(i().bind(e,r),()=>{i().unbind(e)})))};function u({label:e,children:t}){return l.createElement(s.Row,null,l.createElement(s.Cell,null,e),l.createElement(s.Cell,null,t))}function s(){const[e,t]=(0,l.useState)(!1);return c({keys:"?",onShortcut:()=>t(!e)}),c({keys:"esc",onShortcut:()=>t(!1)}),e?l.createElement(s.Container,null,l.createElement(s.Modal,null,l.createElement(s.Heading,null,"keyboard shortcuts"),l.createElement(s.Table,null,l.createElement(s.Header,null,l.createElement(s.Cell,null,"action"),l.createElement(s.Cell,null,"shortcuts")),l.createElement(u,{label:"shortcuts"},l.createElement(s.Key,null,"shift")," + ",l.createElement(s.Key,null,"?")),l.createElement(u,{label:"search"},l.createElement(s.Key,null,"cmd")," + ",l.createElement(s.Key,null,"k"))))):null}const m=s;s.Container=a.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,s.Modal=a.default.div`
  border: 2px solid ${e=>e.theme.colors.pink};
  background: ${e=>e.theme.colors.white};
  box-shadow: 0 8px 8px -10px black;
  min-width: 20rem;
`,s.Heading=a.default.div`
  font-size: ${e=>e.theme.size.headingSm};
  padding: 1rem;
`,s.Table=a.default.div`
  padding-bottom: 1rem;
`,s.Header=a.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${e=>e.theme.colors.lightGray};
  padding: 0.4rem 1rem;
  margin-bottom: 0.5rem;
`,s.Cell=a.default.div`
`,s.Row=a.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.7rem 1rem;
`,s.Key=a.default.span`
  background-color: ${e=>e.theme.colors.lightGray};
  padding: 0.3rem 0.5rem;
  color: ${e=>e.theme.colors.pink};
  border-radius: 3px;
  font-size: ${e=>e.theme.size.small};
`,document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector(".header-mobile"),t=document.querySelector(".header-nav"),r=document.querySelector(".header-menu-close");if(!e||!t||!r)return;const l=()=>{e.classList.toggle("header-mobile-hide"),t.classList.toggle("header-nav-show")};e.addEventListener("click",l),r.addEventListener("click",l)}(),function(){const e=document.getElementById("shortcuts-root");e&&n.render(l.createElement(a.ThemeProvider,{theme:o},l.createElement(m,null)),e)}()}))}},r={};function l(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,r,n,a)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],d=!0,i=0;i<r.length;i++)(!1&a||o>=a)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(d=!1,a<o&&(o=a));if(d){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=348,(()=>{var e={348:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,d,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in d)l.o(d,n)&&(l.m[n]=d[n]);if(i)var u=i(l)}for(t&&t(r);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},r=self.webpackChunkblog_js=self.webpackChunkblog_js||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l.nc=void 0;var n=l.O(void 0,[216],(()=>l(4891)));n=l.O(n)})();