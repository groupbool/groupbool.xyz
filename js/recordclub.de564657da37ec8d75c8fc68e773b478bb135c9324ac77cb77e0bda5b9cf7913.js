!function(e){function t(t){for(var n,l,i=t[0],d=t[1],c=t[2],m=0,s=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&s.push(a[l][0]),a[l]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);for(u&&u(t);s.length;)s.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var d=r[i];0!==a[d]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={5:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/public/";var i=window.webpackJsonp=window.webpackJsonp||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=d;o.push([101,0]),r()}({101:function(e,t,r){"use strict";r.r(t);var n,a=r(0),o=r.n(a),l=r(9),i=r.n(l),d=r(1),c=r(7),u=r(13),m=r.n(u),s=r(16),f=r.n(s);!function(e){e.LYRICS="LYRICS"}(n||(n={}));var p=function({msg:e}){return function(e){return void 0!==e.type}(e)?o.a.createElement(h,{smsg:e}):o.a.createElement(o.a.Fragment,null,e)};function h({smsg:e}){switch(e.type){case n.LYRICS:return o.a.createElement(g,{msg:e.content});default:console.error("unknown structure message type:",e.type)}return null}function g({msg:e}){return o.a.createElement("em",null,e)}d.default.code`
  color: ${e=>e.theme.colors.fadedBlack};
`;var b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function y(e){var{dim:t="3rem",fontSize:r="1rem",isUppercase:n=!1,initials:a}=e,l=b(e,["dim","fontSize","isUppercase","initials"]);return o.a.createElement(y.Container,{dim:t,fontSize:r,borderColor:l.borderColor,backgroundColor:l.backgroundColor},n?a.toUpperCase():a.toLowerCase())}y.Container=d.default.div`
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
`;r(18);function v(e){const t=m()(f()(e.timestamp),"MMM dd, h:mm aaaa");return o.a.createElement(v.Container,null,o.a.createElement(v.Left,null,o.a.createElement(y,{initials:e.author,dim:"2.5rem",fontSize:"0.95rem",backgroundColor:e.color})),o.a.createElement(v.Right,null,e.body.map((e,t)=>o.a.createElement(v.Text,{key:t},o.a.createElement(p,{msg:e}))),o.a.createElement(v.Date,null,t)))}var w=v;v.Container=d.default.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`,v.Left=d.default.div`
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
`,v.Right=d.default.div`
  width: 80%;
  padding-top: 0.5rem;
`,v.Text=d.default.div`
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
`,v.Date=d.default.div`
  margin-top: 0.5rem;
  text-align: right;
  color: ${e=>e.theme.colors.darkGray};
  font-size: ${e=>e.theme.size.small};
`;const x={jpb:c.a.colors.pink,sp:c.a.colors.channelOrange,xv:c.a.colors.softPurple,oc:c.a.colors.emerald,tm:c.a.colors.leanPurple};function E(e){const t=m()(f()(e.release),"MMM dd yyyy");return o.a.createElement(E.Container,null,o.a.createElement(E.Header,null,o.a.createElement(E.Left,null,o.a.createElement("a",{href:e.link},o.a.createElement(E.Image,{src:e.img}))),o.a.createElement(E.Meta,null,o.a.createElement(E.Title,null,e.album),o.a.createElement(E.Subtitle,null,e.artist),o.a.createElement(E.Release,null,t),o.a.createElement(E.Authors,null,e.authors.map((e,t)=>o.a.createElement("a",{key:t,href:"/authors/"+e},o.a.createElement(y,{initials:e,backgroundColor:x[e]})))))),o.a.createElement(E.Bodies,null,e.messages.map((e,t)=>o.a.createElement(w,Object.assign({key:t},e,{color:x[e.author]})))))}var k=E;E.Container=d.default.div``,E.Header=d.default.div`
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
`,document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{thread:t}=e.dataset;if(!t)throw new Error("thread data not found");i.a.render(o.a.createElement(d.ThemeProvider,{theme:c.a},o.a.createElement(k,Object.assign({},JSON.parse(t)))),e)})},18:function(e,t,r){"use strict";function n(e){if(!e)return"squad";const t=e.length;return 1===t?e[0]:2===t?`${e[0]} and ${e[1]}`:"squad"}r.d(t,"a",(function(){return n}))},7:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}});