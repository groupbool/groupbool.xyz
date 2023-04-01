(()=>{"use strict";var e,t={7335:(e,t,r)=>{var n=r(7294),o=r(3935),i=r(2788),a=r(2449),l=r(8850),s=r.n(l);function d({className:e}){return n.createElement(d.Container,{className:e},n.createElement(d.Ring,{index:2}),n.createElement(d.Ring,{index:3}),n.createElement(d.Ring,{index:4}),n.createElement(d.Ring,{index:1}))}i.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.gray};
    cursor: pointer;
  }
`,i.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.pink};
    cursor: pointer;
  }
`;const c=d;d.KeyFrame=i.keyframes`
  0% {
  transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg);
  }
`,d.Container=i.default.div`
  display: flex;
  position: relative;
`,d.Ring=i.default.div`
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
  animation: ${d.KeyFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  animation-delay: ${e=>-.15*(4-e.index)}s;
`;const u=(0,i.default)((function(e){return n.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}))`
  z-index: 2;
  color: white;
  height: 2rem;
  width: 2rem;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
`,m=i.css`
  z-index: 2;
  color: white;
  height: 2rem;
  width: 2rem;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  &:hover {
    cursor: pointer;
  }
`,f=(0,i.default)((function(e){return n.createElement("svg",Object.assign({},e,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}))`
  ${m}
`,p=(0,i.default)((function(e){return n.createElement("svg",Object.assign({},e,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"}))}))`
  ${m}
`;function h({media:e,isPlaying:t,onPlay:r,onPause:o,loadStatus:i,onStatusChange:l},d){const[c,u]=n.useState(0),[m,f]=n.useState(!1),p=d,g=(0,a.Z)(new Date(e.timestamp),"MMM yyyy");return(0,n.useEffect)((()=>{if(!p.current)return;const e=p.current;t?e.play().catch((e=>{l("ERROR"),console.error(e)})):e.pause()}),[t,p]),(0,n.useEffect)((()=>{if(!p.current)return;const e=p.current,t=()=>o(),r=()=>l("LOADED"),n=e=>{console.error(e),l("ERROR")};return e.addEventListener("webkitendfullscreen",t),e.addEventListener("canplay",r),e.addEventListener("error",n),()=>{e.removeEventListener("canplay",r),e.removeEventListener("webkitendfullscreen",t),e.removeEventListener("error",n)}}),[p]),n.createElement(h.Container,{onMouseEnter:()=>{u(.06),f(!0)},onMouseLeave:()=>{u(0),f(!1)}},n.createElement(h.Overlay,null,n.createElement(v,{hasError:"ERROR"===i,isLoading:"LOADING"===i,isPlaying:t,isHovering:m,onClick:()=>{p.current&&(p.current.muted=!1,t?o():r())}})),n.createElement(h.Label,null,n.createElement("h1",null,e.artist),n.createElement(h.Location,null,e.location," / ",g),n.createElement(h.Description,null,n.createElement(s(),{direction:"left",speed:c,delay:0},e.description))),n.createElement(h.Video,{ref:d,loop:!0,muted:!0,playsInline:!0,preload:"none",isLoaded:"LOADED"===i},n.createElement("source",{src:e.src,type:"video/mp4"})),n.createElement(h.Preview,{src:e.preview,isLoaded:"LOADED"===i}))}const g=n.forwardRef(h);function v(e){return e.hasError?n.createElement(u,null):e.isLoading?n.createElement(c,null):e.isPlaying?e.isHovering?n.createElement(p,{onClick:e.onClick}):null:n.createElement(f,{onClick:e.onClick})}function b({tiles:e}){const[t,r]=(0,n.useState)(null),o=function(e,t){return e.filter((e=>"VIDEO"===e.type)).reduce(((e,t)=>(e.set(t.id,(0,n.useRef)(null)),e)),new Map)}(e),[i,a]=(0,n.useState)({}),l=(e,t)=>{a((r=>Object.assign(Object.assign({},r),{[e]:t})))};return n.createElement(b.Container,null,e.map((e=>n.createElement(b.Tile,{key:e.id},(e=>{if("VIDEO"===e.type)return n.createElement(g,{key:e.id,media:e,isPlaying:t===e.id,ref:o.get(e.id),onPause:()=>r(null),onPlay:()=>{return t=e.id,i[t]||l(t,"LOADING"),void r(t);var t},loadStatus:i[e.id]||"NOT_LOADED",onStatusChange:t=>l(e.id,t)});throw new Error("unknown type: "+e.type)})(e)))))}h.Container=i.default.div`
  position: relative;
`,h.Overlay=i.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,h.Label=i.default.div`
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
`,h.Location=i.default.div`
  font-size: 0.9rem;
  margin: 0.25rem 0;
  margin-bottom: 0.5rem;
`,h.Description=i.default.div`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  color: ${e=>e.theme.colors.yellow};
  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    font-size: 0.8rem;
  }
`,h.Preview=i.default.img`
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
`,h.Video=i.default.video`
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
`,b.Container=i.default.div`
  columns: 3 15rem;
  column-gap: 1rem;

  width: 75%;
  margin: 3rem auto 0 auto;
  max-width: 1050px;

  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
    padding: 0 2rem;
  }
`,b.Tile=i.default.div`
  margin: 0 1rem 0.8rem 0;
  display: inline-block;
  width: 100%;
  border: 3px solid ${e=>e.theme.colors.purple};
  padding: 0.5rem;
`;const w=b,y={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}};document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("bool-tiles");if(!e)throw new Error("react root not found");const{tiles:t}=e.dataset;if(!t)throw new Error("booltiles data not found");o.render(n.createElement(i.ThemeProvider,{theme:y},n.createElement(w,{tiles:JSON.parse(t)})),e)}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=980,(()=>{var e={980:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,d=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkblog_js=self.webpackChunkblog_js||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var o=n.O(void 0,[216],(()=>n(7335)));o=n.O(o)})();