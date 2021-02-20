(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{14:function(e,t,r){"use strict";function a(e){if(!e)return"squad";const t=e.length;return 1===t?e[0]:2===t?`${e[0]} and ${e[1]}`:"squad"}r.d(t,"a",(function(){return a}))},72:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(10),l=r.n(n),i=r(1),d=r(9),m=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};function c(e){var{dim:t="3rem",fontSize:r="1rem",isUppercase:a=!1,initials:n}=e,l=m(e,["dim","fontSize","isUppercase","initials"]);return o.a.createElement(c.Container,{dim:t,fontSize:r,borderColor:l.borderColor,backgroundColor:l.backgroundColor},a?n.toUpperCase():n.toLowerCase())}c.Container=i.default.div`
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
`;var s=r(50),u=r(47);r(14);function f(e){const t=Object(s.a)(Object(u.a)(e.timestamp),"MMM dd, h:mm aaaa");return o.a.createElement(f.Container,null,o.a.createElement(f.Left,null,o.a.createElement(c,{initials:e.author,dim:"2.5rem",fontSize:"0.95rem",backgroundColor:e.color})),o.a.createElement(f.Right,null,e.body.map((e,t)=>o.a.createElement(f.Text,{key:t},e)),o.a.createElement(f.Date,null,t)))}var h=f;f.Container=i.default.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`,f.Left=i.default.div`
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
`,f.Right=i.default.div`
  width: 80%;
  padding-top: 0.5rem;
`,f.Text=i.default.div`
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
`,f.Date=i.default.div`
  margin-top: 0.5rem;
  text-align: right;
  color: ${e=>e.theme.colors.darkGray};
  font-size: ${e=>e.theme.size.small};
`;const p={jpb:d.a.colors.pink,sp:d.a.colors.channelOrange,xv:d.a.colors.softPurple,oc:d.a.colors.emerald,tm:d.a.colors.leanPurple};function b(e){const t=Object(s.a)(Object(u.a)(e.release),"MMM dd yyyy");return o.a.createElement(b.Container,null,o.a.createElement(b.Header,null,o.a.createElement(b.Left,null,o.a.createElement("a",{href:e.link},o.a.createElement(b.Image,{src:e.img}))),o.a.createElement(b.Meta,null,o.a.createElement(b.Title,null,e.album),o.a.createElement(b.Subtitle,null,e.artist),o.a.createElement(b.Release,null,t),o.a.createElement(b.Authors,null,e.authors.map((e,t)=>o.a.createElement("a",{key:t,href:"/authors/"+e},o.a.createElement(c,{initials:e,backgroundColor:p[e]})))))),o.a.createElement(b.Bodies,null,e.messages.map((e,t)=>o.a.createElement(h,Object.assign({key:t},e,{color:p[e.author]})))))}var g=b;b.Container=i.default.div``,b.Header=i.default.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${e=>e.theme.br.sm}) {
    flex-direction: column;
  }
`,b.Meta=i.default.div`
  width: 60%;
  margin-top: 1rem;
  margin-left: 1.5rem;
  @media (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
`,b.Left=i.default.div`
  width: 40%;
  @media (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
  }
`,b.Image=i.default.img`
  width: 100%;
  height: auto;
`,b.Title=i.default.div`
  color: ${e=>e.theme.colors.fadedBlack};
  font-size: 1.5rem;
`,b.Subtitle=i.default.div`
  color: ${e=>e.theme.colors.darkGreen};
  margin-top: 0.8rem;
  font-size: 1.25rem;
`,b.Release=i.default.div`
  margin-top: 0.35rem;
`,b.Authors=i.default.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6rem;

  & > * {
    margin-right: 0.75rem;
  }
`,b.Bodies=i.default.div`
  margin-top: 2.5rem;
  overflow: hidden;
`,document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{thread:t}=e.dataset;if(!t)throw new Error("thread data not found");l.a.render(o.a.createElement(i.ThemeProvider,{theme:d.a},o.a.createElement(g,Object.assign({},JSON.parse(t)))),e)})},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const a={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[72,0]]]);