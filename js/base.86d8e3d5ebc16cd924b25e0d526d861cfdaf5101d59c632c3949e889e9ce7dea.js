(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{13:function(e,t,n){"use strict";function a(e){if(!e)return"squad";const t=e.length;return 1===t?e[0]:2===t?`${e[0]} and ${e[1]}`:"squad"}function r(e){if("localhost"===window.location.hostname)return!0;const t=new URLSearchParams(window.location.search);return console.debug(t),t.has(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),l=n.n(o),i=n(1),c=n(13),d=n(9),s=n(46),u=n.n(s),m=n(75),h=n(77),f=n(76);function p(e){return r.a.createElement(p.Container,{onClick:e.onClick,viewBox:"0 0 24 24",width:"24",height:"24"},r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"}))}p.Container=i.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.gray};
    cursor: pointer;
  }
`;var g=p;function b(e){return r.a.createElement(b.Container,{onClick:e.onClick,viewBox:"0 0 24 24",width:"24",height:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}))}b.Container=i.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.pink};
    cursor: pointer;
  }
`;var y=b;function v(e){const t=Object(a.useRef)(null);return Object(a.useEffect)(()=>{e.autoFocus&&t.current&&t.current.focus()},[t]),r.a.createElement(v.Container,null,r.a.createElement(v.Top,null,r.a.createElement(v.Input,{ref:t,type:"search",value:e.currentRefinement,onChange:t=>e.refine(t.target.value),placeholder:e.placeholder?e.placeholder:"bool search",marginRight:e.onClose?"0.5rem":"",width:e.fullWidth?"100%":""}),e.onClose&&r.a.createElement(y,{onClick:e.onClose})),e.currentRefinement&&r.a.createElement(v.Results,null,e.hits.map(e=>r.a.createElement(v.Result,{key:e.objectID,href:e.Url},r.a.createElement("span",null,e.Title),r.a.createElement("span",null,Object(c.a)(e.Authors)),r.a.createElement("span",null,e.Type)))))}var E=Object(f.a)(v);v.Container=i.default.div`
  position: relative
`,v.Top=i.default.div`
  display: flex;
  align-items: center;
`,v.Input=i.default.input`
  border: 2px solid ${e=>e.theme.colors.darkGray};
  padding: 0.7rem;
  transition: border 0.25s;
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 1rem;
  font-family: inherit;
  margin-right: ${e=>e.marginRight};
  width: ${e=>e.width};

  &:focus {
    border: 2px solid ${e=>e.theme.colors.purple};
  }

  @media screen and (max-width: ${e=>e.theme.br.sm}) {
    width: 100%;
  }
`,v.Results=i.default.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 3rem;
`,v.Result=i.default.a`
  border: 1px solid ${e=>e.theme.colors.darkGray};
  transition: all 0.1s;
  text-decoration: none;
  color: ${e=>e.theme.colors.gray};

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.theme.colors.lightGray};
  }
  &:active {
    background-color: ${e=>e.theme.colors.medGray};
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  padding: 0.7rem;
  display: flex;
  flex-direction: row;

  span:not(:last-child) {
    &:first-child {
      color: ${e=>e.theme.colors.fadedBlack};
    }
    margin-right: 0.5rem;
    &::after {
      color: ${e=>e.theme.colors.darkGray};
      content: '|';
      margin-left: 0.5rem;
    }
  }
`;var k=function(e){const t=Object(a.useMemo)(()=>u()(e.appId,e.apiKey),[]);return r.a.createElement(m.a,{indexName:e.indexName,searchClient:t},r.a.createElement(E,{onClose:e.onClose,fullWidth:e.fullWidth,placeholder:e.placeholder,autoFocus:e.autoFocus}),r.a.createElement(h.a,{hitsPerPage:3,analytics:!1,enablePersonalization:!0,distinct:!0}))};function w(e){const[t,n]=Object(a.useState)(!1);return r.a.createElement(w.Container,null,!t&&r.a.createElement(g,{onClick:()=>n(!0)}),t&&r.a.createElement(w.Input,null,r.a.createElement(k,{apiKey:e.apiKey,appId:e.appId,indexName:e.indexName,onClose:()=>n(!1),autoFocus:!0})))}w.Container=i.default.div`
  margin-bottom: 2.5rem;
`,w.Input=i.default.div``;var C=w;document.addEventListener("DOMContentLoaded",()=>{!function(){const e=document.querySelector(".header-mobile"),t=document.querySelector(".header-nav"),n=document.querySelector(".header-menu-close");if(!e||!t||!n)return;const a=()=>{e.classList.toggle("header-mobile-hide"),t.classList.toggle("header-nav-show")};e.addEventListener("click",a),n.addEventListener("click",a)}(),function(){const e=document.getElementById("site-search-root");if(!e)return;const{appId:t,apiKey:n,indexName:a}=e.dataset;if(!t||!n||!a)return;if(!Object(c.b)("search"))return;l.a.render(r.a.createElement(i.ThemeProvider,{theme:d.a},r.a.createElement(C,{apiKey:n,appId:t,indexName:a})),e)}(),function(){const e=document.getElementById("site-search-home-root");if(!e)return;const{appId:t,apiKey:n,indexName:a,placeholder:o}=e.dataset;if(!t||!n||!a)return;if(!Object(c.b)("search"))return;l.a.render(r.a.createElement(i.ThemeProvider,{theme:d.a},r.a.createElement(k,{apiKey:n,appId:t,indexName:a,fullWidth:!0,placeholder:o})),e)}()})},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[71,0]]]);