(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=n(1),d=n(48),c=n.n(d),s=n(50);function m(e){const t=r.a.useRef(null),[n,a]=r.a.useState(!1),[i,o]=r.a.useState(0),[l,d]=r.a.useState(!1),[p,f]=r.a.useState(!1),[h,g]=r.a.useState(!1),b=Object(s.a)(new Date(e.timestamp),"MMM yyyy");r.a.useEffect(()=>{if(!t.current)return;const e=()=>a(!1),n=()=>{g(!1),f(!0)};return t.current.addEventListener("webkitendfullscreen",e),t.current.addEventListener("canplay",n),()=>{t.current&&(t.current.removeEventListener("webkitendfullscreen",e),t.current.removeEventListener("canplay",n))}});return r.a.createElement(m.Container,{onMouseEnter:()=>{o(.06),d(!0)},onMouseLeave:()=>{o(0),d(!1)}},r.a.createElement(m.Overlay,null,r.a.createElement(u,{isLoading:h,isPlaying:n,isHovering:l,onClick:()=>{t.current?(p||g(!0),n?t.current.pause():t.current.play(),a(!n)):console.debug("invalid vid ref")}})),r.a.createElement(m.Label,null,r.a.createElement("h1",null,e.artist),r.a.createElement(m.Location,null,e.location," / ",b),r.a.createElement(m.Description,null,r.a.createElement(c.a,{direction:"left",speed:i,delay:0},e.description))),r.a.createElement(m.Video,{ref:t,loop:!0,preload:"none",isLoaded:p},r.a.createElement("source",{src:e.src,type:"video/mp4"})),r.a.createElement(m.Preview,{src:e.preview,isLoaded:p}))}function u(e){return e.isLoading?r.a.createElement(b,null):e.isPlaying?e.isHovering?r.a.createElement(h,{onClick:e.onClick}):null:r.a.createElement(f,{onClick:e.onClick})}m.Container=l.default.div`
  position: relative;
`,m.Overlay=l.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,m.Label=l.default.div`
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
`,m.Location=l.default.div`
  font-size: 0.9rem;
  margin: 0.25rem 0;
  margin-bottom: 0.5rem;
`,m.Description=l.default.div`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  color: ${e=>e.theme.colors.yellow};
  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    font-size: 0.8rem;
  }
`,m.Preview=l.default.img`
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
`,m.Video=l.default.video`
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
`;var p=m;function f(e){return r.a.createElement(g,{viewBox:"0 0 24 24",onClick:e.onClick},r.a.createElement("path",{d:"M8 5v14l11-7z"}))}function h(e){return r.a.createElement(g,{viewBox:"0 0 24 24",onClick:e.onClick},r.a.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}))}const g=l.default.svg`
  z-index: 99;
  fill: white;
  height: 3rem;
  width: auto;
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  &:hover {
  cursor: pointer;
  }
`;function b(){return r.a.createElement(b.Container,null,r.a.createElement(b.Ring,{index:2}),r.a.createElement(b.Ring,{index:3}),r.a.createElement(b.Ring,{index:4}),r.a.createElement(b.Ring,{index:1}))}function w(e){return r.a.createElement(w.Container,null,e.tiles.map(e=>r.a.createElement(E,{key:e.id,tile:e})))}b.KeyFrame=l.keyframes`
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
`;var v=w;function E(e){const t=(e=>{switch(e){case"VIDEO":return p;case"IMAGE":default:throw new Error("invalid type: "+e)}})(e.tile.type);return r.a.createElement(E.Container,null,r.a.createElement(t,Object.assign({},e.tile)))}E.Container=l.default.div`
  margin: 0 1rem 0.8rem 0;
  display: inline-block;
  width: 100%;
  border: 3px solid ${e=>e.theme.colors.purple};
  padding: 0.5rem;
`;var y=n(9);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("bool-tiles");if(!e)throw new Error("react root not found");const{tiles:t}=e.dataset;if(!t)throw new Error("booltiles data not found");o.a.render(r.a.createElement(l.ThemeProvider,{theme:y.a},r.a.createElement(v,{tiles:JSON.parse(t)})),e)})},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[73,0]]]);