!function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);m.length;)m.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={3:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;o.push([92,0]),r()}({2:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}},92:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),i=r.n(o),l=r(1),s=r(6),c=r.n(s),d=r(28),u=r.n(d);function m(e){return a.a.createElement(m.Container,Object.assign({viewBox:"0 0 24 24",width:"24",height:"24"},e),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.a.createElement("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"}))}m.Container=l.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.gray};
    cursor: pointer;
  }
`;function f(e){return a.a.createElement(f.Container,{onClick:e.onClick,viewBox:"0 0 24 24",width:"24",height:"24"},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}))}f.Container=l.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.pink};
    cursor: pointer;
  }
`;function p({className:e}){return a.a.createElement(p.Container,{className:e},a.a.createElement(p.Ring,{index:2}),a.a.createElement(p.Ring,{index:3}),a.a.createElement(p.Ring,{index:4}),a.a.createElement(p.Ring,{index:1}))}var h=p;p.KeyFrame=l.keyframes`
  0% {
  transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg);
  }
`,p.Container=l.default.div`
  display: flex;
  position: relative;
`,p.Ring=l.default.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: -12px;
  left: -12px;
  width: 20px;
  height: 20px;
  margin: 2px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: ${p.KeyFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  animation-delay: ${e=>-.15*(4-e.index)}s;
`;var g=function(e){return a.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))};var v=function(e){return a.a.createElement("svg",Object.assign({},e,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}),a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))};var b=function(e){return a.a.createElement("svg",Object.assign({},e,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}),a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"}))};const w=Object(l.default)(g)`
  z-index: 2;
  color: white;
  height: 2rem;
  width: 2rem;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
`,y=l.css`
  z-index: 2;
  color: white;
  height: 2rem;
  width: 2rem;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  &:hover {
    cursor: pointer;
  }
`,E=Object(l.default)(v)`
  ${y}
`,k=Object(l.default)(b)`
  ${y}
`;function x({media:e,isPlaying:t,onPlay:r,onPause:o,loadStatus:i,onStatusChange:l},s){const[d,m]=a.a.useState(0),[f,p]=a.a.useState(!1),h=s,g=c()(new Date(e.timestamp),"MMM yyyy");Object(n.useEffect)(()=>{if(!h.current)return;const e=h.current;t?e.play().catch(e=>{l("ERROR"),console.error(e)}):e.pause()},[t,h]),Object(n.useEffect)(()=>{if(!h.current)return;const e=h.current,t=()=>o(),r=()=>l("LOADED"),n=e=>{console.error(e),l("ERROR")};return e.addEventListener("webkitendfullscreen",t),e.addEventListener("canplay",r),e.addEventListener("error",n),()=>{e.removeEventListener("canplay",r),e.removeEventListener("webkitendfullscreen",t),e.removeEventListener("error",n)}},[h]);return a.a.createElement(x.Container,{onMouseEnter:()=>{m(.06),p(!0)},onMouseLeave:()=>{m(0),p(!1)}},a.a.createElement(x.Overlay,null,a.a.createElement(L,{hasError:"ERROR"===i,isLoading:"LOADING"===i,isPlaying:t,isHovering:f,onClick:()=>{if(!h.current)return;h.current.muted=!1,t?o():r()}})),a.a.createElement(x.Label,null,a.a.createElement("h1",null,e.artist),a.a.createElement(x.Location,null,e.location," / ",g),a.a.createElement(x.Description,null,a.a.createElement(u.a,{direction:"left",speed:d,delay:0},e.description))),a.a.createElement(x.Video,{ref:s,loop:!0,muted:!0,playsInline:!0,preload:"none",isLoaded:"LOADED"===i},a.a.createElement("source",{src:e.src,type:"video/mp4"})),a.a.createElement(x.Preview,{src:e.preview,isLoaded:"LOADED"===i}))}var O=a.a.forwardRef(x);function L(e){return e.hasError?a.a.createElement(w,null):e.isLoading?a.a.createElement(h,null):e.isPlaying?e.isHovering?a.a.createElement(k,{onClick:e.onClick}):null:a.a.createElement(E,{onClick:e.onClick})}function j({tiles:e}){const[t,r]=Object(n.useState)(null),o=function(e,t){return e.filter(e=>"VIDEO"===e.type).reduce((e,r)=>(e.set(r.id,t(r)),e),new Map)}(e,()=>Object(n.useRef)(null)),[i,l]=Object(n.useState)({}),s=(e,t)=>{l(r=>Object.assign(Object.assign({},r),{[e]:t}))},c=e=>{switch(e.type){case"VIDEO":return a.a.createElement(O,{key:e.id,media:e,isPlaying:t===e.id,ref:o.get(e.id),onPause:()=>r(null),onPlay:()=>{return t=e.id,i[t]||s(t,"LOADING"),void r(t);var t},loadStatus:i[e.id]||"NOT_LOADED",onStatusChange:t=>s(e.id,t)});default:throw new Error("unknown type: "+e.type)}};return a.a.createElement(j.Container,null,e.map(e=>a.a.createElement(j.Tile,{key:e.id},c(e))))}x.Container=l.default.div`
  position: relative;
`,x.Overlay=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,x.Label=l.default.div`
  color: white;
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  width: 100%;
  z-index: 50;

  h1 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${e=>e.theme.colors.white};
  }
`,x.Location=l.default.div`
  font-size: 0.9rem;
  margin: 0.25rem 0;
  margin-bottom: 0.5rem;
`,x.Description=l.default.div`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  color: ${e=>e.theme.colors.yellow};
  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    font-size: 0.8rem;
  }
`,x.Preview=l.default.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  z-index: -99;
  position: ${e=>e.isLoaded?"absolute":"static"};
  top: 0;
  &:hover {
    cursor: pointer;
  }
`,x.Video=l.default.video`
  display: ${e=>e.isLoaded?"block":"none"};
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &::-webkit-media-controls {
    opacity: 0;
  }
  &::-webkit-media-controls-start-playback-button {
    display: none!important;
    -webkit-appearance: none;
  }
`,j.Container=l.default.div`
  columns: 3 15rem;
  column-gap: 1rem;

  width: 75%;
  margin: 3rem auto 0 auto;
  max-width: 1050px;

  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
    padding: 0 2rem;
  }
`,j.Tile=l.default.div`
  margin: 0 1rem 0.8rem 0;
  display: inline-block;
  width: 100%;
  border: 3px solid ${e=>e.theme.colors.purple};
  padding: 0.5rem;
`;var C=j,z=r(2);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("bool-tiles");if(!e)throw new Error("react root not found");const{tiles:t}=e.dataset;if(!t)throw new Error("booltiles data not found");i.a.render(a.a.createElement(l.ThemeProvider,{theme:z.a},a.a.createElement(C,{tiles:JSON.parse(t)})),e)})}});