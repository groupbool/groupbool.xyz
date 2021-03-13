(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,t,r){"use strict";r.r(t);var a,n=r(0),o=r.n(n),l=r(11),i=r.n(l),d=r(1),m=r(9);!function(e){e.LYRICS="LYRICS"}(a||(a={}));var c=function({msg:e}){return function(e){return void 0!==e.type}(e)?o.a.createElement(s,{smsg:e}):o.a.createElement(o.a.Fragment,null,e)};function s({smsg:e}){switch(e.type){case a.LYRICS:return o.a.createElement(u,{msg:e.content});default:console.error("unknown structure message type:",e.type)}return null}function u({msg:e}){return o.a.createElement("em",null,e)}var f=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function h(e){var{dim:t="3rem",fontSize:r="1rem",isUppercase:a=!1,initials:n}=e,l=f(e,["dim","fontSize","isUppercase","initials"]);return o.a.createElement(h.Container,{dim:t,fontSize:r,borderColor:l.borderColor,backgroundColor:l.backgroundColor},a?n.toUpperCase():n.toLowerCase())}h.Container=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.colors.white};
  font-size: ${e=>e.fontSize};
  border-radius: 100%;
  background-color: ${e=>e.backgroundColor?e.backgroundColor:e.theme.colors.darkGray};
  width: ${e=>e.dim};
  height: ${e=>e.dim};
  border: ${e=>e.borderColor?"2px solid "+e.borderColor:"none"};
`;r(55),r(56),r(17);var p=r(107),g=r(106);function b(e){const t=Object(p.a)(Object(g.a)(e.timestamp),"MMM dd, h:mm aaaa");return o.a.createElement(b.Container,null,o.a.createElement(b.Left,null,o.a.createElement(h,{initials:e.author,dim:"2.5rem",fontSize:"0.95rem",backgroundColor:e.color})),o.a.createElement(b.Right,null,e.body.map((e,t)=>o.a.createElement(b.Text,{key:t},o.a.createElement(c,{msg:e}))),o.a.createElement(b.Date,null,t)))}var w=b;b.Container=d.default.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`,b.Left=d.default.div`
  width: 20%;
  display: flex;
  position: relative;
  justify-content: center;

  &:after {
    content:"";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 2px solid ${e=>e.theme.colors.lightGray};
    transform: translate(-50%);
    height: 150%;

    @media (max-width: ${e=>e.theme.br.sm}) {
      left: 29%;
    }
  }

  @media (max-width: ${e=>e.theme.br.sm}) {
    justify-content: flex-start;
  }
`,b.Right=d.default.div`
  width: 80%;
  padding-top: 0.5rem;
`,b.Text=d.default.div`
  background-color: ${e=>e.theme.colors.lightBlue};
  padding: 0.7rem 1rem;
  color: white;
  border-radius: 7px;
  line-height: 1.5;
  position: relative;

  &:first-child {
    &:before {
      content: '';
      z-index: -1;
      position: absolute;
      width: 0;
      height: 0;
      left: -15px;
      top: 0;
      right: auto;
      bottom: auto;
      border: 20px solid;
      border-color: ${e=>e.theme.colors.lightBlue} transparent transparent transparent;
    }
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`,b.Date=d.default.div`
  margin-top: 0.5rem;
  text-align: right;
  color: ${e=>e.theme.colors.darkGray};
  font-size: ${e=>e.theme.size.small};
`;const y={jpb:m.a.colors.pink,sp:m.a.colors.channelOrange,xv:m.a.colors.softPurple,oc:m.a.colors.emerald,tm:m.a.colors.leanPurple};function E(e){const t=Object(p.a)(Object(g.a)(e.release),"MMM dd yyyy");return o.a.createElement(E.Container,null,o.a.createElement(E.Header,null,o.a.createElement(E.Left,null,o.a.createElement("a",{href:e.link},o.a.createElement(E.Image,{src:e.img}))),o.a.createElement(E.Meta,null,o.a.createElement(E.Title,null,e.album),o.a.createElement(E.Subtitle,null,e.artist),o.a.createElement(E.Release,null,t),o.a.createElement(E.Authors,null,e.authors.map((e,t)=>o.a.createElement("a",{key:t,href:"/authors/"+e},o.a.createElement(h,{initials:e,backgroundColor:y[e]})))))),o.a.createElement(E.Bodies,null,e.messages.map((e,t)=>o.a.createElement(w,Object.assign({key:t},e,{color:y[e.author]})))))}var v=E;E.Container=d.default.div``,E.Header=d.default.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${e=>e.theme.br.sm}) {
    flex-direction: column;
  }
`,E.Meta=d.default.div`
  width: 60%;
  margin-top: 1rem;
  margin-left: 1.5rem;
  @media (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
`,E.Left=d.default.div`
  width: 40%;
  @media (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
  }
`,E.Image=d.default.img`
  width: 100%;
  height: auto;
`,E.Title=d.default.div`
  color: ${e=>e.theme.colors.fadedBlack};
  font-size: 1.5rem;
`,E.Subtitle=d.default.div`
  color: ${e=>e.theme.colors.darkGreen};
  margin-top: 0.8rem;
  font-size: 1.25rem;
`,E.Release=d.default.div`
  margin-top: 0.35rem;
`,E.Authors=d.default.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6rem;

  & > * {
    margin-right: 0.75rem;
  }
`,E.Bodies=d.default.div`
  margin-top: 2.5rem;
  overflow: hidden;
`,document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{thread:t}=e.dataset;if(!t)throw new Error("thread data not found");i.a.render(o.a.createElement(d.ThemeProvider,{theme:m.a},o.a.createElement(v,Object.assign({},JSON.parse(t)))),e)})},17:function(e,t,r){"use strict";function a(e){if(!e)return"squad";const t=e.length;return 1===t?e[0]:2===t?`${e[0]} and ${e[1]}`:"squad"}r.d(t,"a",(function(){return a}))},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const a={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[103,0]]]);