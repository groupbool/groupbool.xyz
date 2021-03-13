(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),l=n(1),d=n(57),c=n.n(d),s=n(107);function u({media:e,isPlaying:t,onPlay:n,onPause:i,loadStatus:o,onStatusChange:l},d){const[m,f]=r.a.useState(0),[h,g]=r.a.useState(!1),b=d,w=Object(s.a)(new Date(e.timestamp),"MMM yyyy");return Object(a.useEffect)(()=>{if(!b.current)return;const e=b.current;t?e.play():e.pause()}),Object(a.useEffect)(()=>{if(!b.current)return;const e=b.current,t=()=>i(),n=()=>l("LOADED");return e.addEventListener("webkitendfullscreen",t),e.addEventListener("canplay",n),()=>{e.removeEventListener("canplay",n),e.removeEventListener("webkitendfullscreen",t)}}),r.a.createElement(u.Container,{onMouseEnter:()=>{f(.06),g(!0)},onMouseLeave:()=>{f(0),g(!1)}},r.a.createElement(u.Overlay,null,r.a.createElement(p,{isLoading:"LOADING"===o,isPlaying:t,isHovering:h,onClick:t?i:n})),r.a.createElement(u.Label,null,r.a.createElement("h1",null,e.artist),r.a.createElement(u.Location,null,e.location," / ",w),r.a.createElement(u.Description,null,r.a.createElement(c.a,{direction:"left",speed:m,delay:0},e.description))),r.a.createElement(u.Video,{ref:d,loop:!0,preload:"none",isLoaded:"LOADED"===o},r.a.createElement("source",{src:e.src,type:"video/mp4"})),r.a.createElement(u.Preview,{src:e.preview,isLoaded:"LOADED"===o}))}var m=r.a.forwardRef(u);function p(e){return e.isLoading?r.a.createElement(b,null):e.isPlaying?e.isHovering?r.a.createElement(h,{onClick:e.onClick}):null:r.a.createElement(f,{onClick:e.onClick})}function f(e){return r.a.createElement(g,{viewBox:"0 0 24 24",onClick:e.onClick},r.a.createElement("path",{d:"M8 5v14l11-7z"}))}function h(e){return r.a.createElement(g,{viewBox:"0 0 24 24",onClick:e.onClick},r.a.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}))}u.Container=l.default.div`
  position: relative;
`,u.Overlay=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,u.Label=l.default.div`
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
`,u.Location=l.default.div`
  font-size: 0.9rem;
  margin: 0.25rem 0;
  margin-bottom: 0.5rem;
`,u.Description=l.default.div`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  color: ${e=>e.theme.colors.yellow};
  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    font-size: 0.8rem;
  }
`,u.Preview=l.default.img`
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
`,u.Video=l.default.video`
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
`;const g=l.default.svg`
  z-index: 99;
  fill: white;
  height: 3rem;
  width: auto;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  &:hover {
  cursor: pointer;
  }
`;function b(){return r.a.createElement(b.Container,null,r.a.createElement(b.Ring,{index:2}),r.a.createElement(b.Ring,{index:3}),r.a.createElement(b.Ring,{index:4}),r.a.createElement(b.Ring,{index:1}))}function w({tiles:e}){const[t,n]=Object(a.useState)(null),i=function(e,t){return e.filter(e=>"VIDEO"===e.type).reduce((e,n)=>(e.set(n.id,t(n)),e),new Map)}(e,()=>Object(a.useRef)(null)),[o,l]=Object(a.useState)({}),d=e=>{switch(e.type){case"VIDEO":return r.a.createElement(m,{key:e.id,media:e,isPlaying:t===e.id,ref:i.get(e.id),onPause:()=>n(null),onPlay:()=>n(e.id),loadStatus:o[e.id]||"NOT_LOADED",onStatusChange:t=>((e,t)=>{l(Object.assign(Object.assign({},o),{[e]:t}))})(e.id,t)});default:throw new Error("unknown type: "+e.type)}};return r.a.createElement(w.Container,null,e.map(e=>r.a.createElement(w.Tile,{key:e.id},d(e))))}b.KeyFrame=l.keyframes`
  0% {
  transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg);
  }
`,b.Container=l.default.div`
  display: flex;
  position: relative;
`,b.Ring=l.default.div`
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
  animation: ${b.KeyFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  animation-delay: ${e=>-.15*(4-e.index)}s;
`,w.Container=l.default.div`
  columns: 3 15rem;
  column-gap: 1rem;

  width: 75%;
  margin: 3rem auto 0 auto;
  max-width: 1050px;

  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
    padding: 0 2rem;
  }
`,w.Tile=l.default.div`
  margin: 0 1rem 0.8rem 0;
  display: inline-block;
  width: 100%;
  border: 3px solid ${e=>e.theme.colors.purple};
  padding: 0.5rem;
`;var E=w,y=n(9);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("bool-tiles");if(!e)throw new Error("react root not found");const{tiles:t}=e.dataset;if(!t)throw new Error("booltiles data not found");o.a.render(r.a.createElement(l.ThemeProvider,{theme:y.a},r.a.createElement(E,{tiles:JSON.parse(t)})),e)})},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[104,0]]]);