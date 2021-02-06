(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,a){"use strict";function r(e){if(!e)return"squad";const t=e.length;return 1===t?e[0]:2===t?`${e[0]} and ${e[1]}`:"squad"}a.d(t,"a",(function(){return r}))},71:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(10),o=a.n(l),i=a(1),c=a(9),d=a(46),s=a.n(d),u=a(75),m=a(77),h=a(76),p=a(14);function f(e){return n.a.createElement(f.Container,{onClick:e.onClick,viewBox:"0 0 24 24",width:"24",height:"24"},n.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.a.createElement("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"}))}f.Container=i.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.gray};
    cursor: pointer;
  }
`;var g=f;function b(e){return n.a.createElement(b.Container,{onClick:e.onClick,viewBox:"0 0 24 24",width:"24",height:"24"},n.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}))}b.Container=i.default.svg`
  fill: ${e=>e.theme.colors.darkGray};
  transition: fill 0.25s;

  &:hover {
    fill: ${e=>e.theme.colors.pink};
    cursor: pointer;
  }
`;var y=b;function v(e){const t=Object(r.useRef)(null);return Object(r.useEffect)(()=>{e.autoFocus&&t.current&&t.current.focus()},[t]),n.a.createElement(v.Container,null,n.a.createElement(v.Top,null,n.a.createElement(v.Input,{ref:t,type:"search",value:e.currentRefinement,onChange:t=>e.refine(t.target.value),placeholder:e.placeholder?e.placeholder:"bool search",marginRight:e.onClose?"0.5rem":"",width:e.fullWidth?"100%":""}),e.onClose&&n.a.createElement(y,{onClick:e.onClose})),e.currentRefinement&&n.a.createElement(v.Results,null,e.hits.map(e=>n.a.createElement(v.Result,{key:e.objectID,href:e.Url},n.a.createElement("span",null,e.Title),n.a.createElement("span",null,Object(p.a)(e.Authors)),n.a.createElement("span",null,e.Type)))))}var E=Object(h.a)(v);v.Container=i.default.div`
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
  /* box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.25); */

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
  align-items: center;
  flex-direction: row;

  span:not(:last-child) {
    &:first-child {
      color: ${e=>e.theme.colors.fadedBlack};
    }
    border-right: 1.75px solid ${e=>e.theme.colors.darkGray};
    padding-right: 1rem;
    margin-right: 1rem;
  }
`;var k=function(e){const t=Object(r.useMemo)(()=>s()(e.appId,e.apiKey),[]);return n.a.createElement(u.a,{indexName:e.indexName,searchClient:t},n.a.createElement(E,{onClose:e.onClose,fullWidth:e.fullWidth,placeholder:e.placeholder,autoFocus:e.autoFocus}),n.a.createElement(m.a,{hitsPerPage:3,analytics:!1,enablePersonalization:!0,distinct:!0}))};function x(e){const[t,a]=Object(r.useState)(!1);return n.a.createElement(x.Container,null,!t&&n.a.createElement(g,{onClick:()=>a(!0)}),t&&n.a.createElement(x.Input,null,n.a.createElement(k,{apiKey:e.apiKey,appId:e.appId,indexName:e.indexName,onClose:()=>a(!1),autoFocus:!0})))}x.Container=i.default.div`
  margin-bottom: 2.5rem;
`,x.Input=i.default.div``;var C=x;document.addEventListener("DOMContentLoaded",()=>{!function(){const e=document.querySelector(".header-mobile"),t=document.querySelector(".header-nav"),a=document.querySelector(".header-menu-close");if(!e||!t||!a)return;const r=()=>{e.classList.toggle("header-mobile-hide"),t.classList.toggle("header-nav-show")};e.addEventListener("click",r),a.addEventListener("click",r)}(),function(){const e=document.getElementById("site-search-root");if(!e)return;const{appId:t,apiKey:a,indexName:r}=e.dataset;if(!t||!a||!r)return;o.a.render(n.a.createElement(i.ThemeProvider,{theme:c.a},n.a.createElement(C,{apiKey:a,appId:t,indexName:r})),e)}(),function(){const e=document.getElementById("site-search-home-root");if(!e)return;const{appId:t,apiKey:a,indexName:r,placeholder:l}=e.dataset;if(!t||!a||!r)return;o.a.render(n.a.createElement(i.ThemeProvider,{theme:c.a},n.a.createElement(k,{apiKey:a,appId:t,indexName:r,fullWidth:!0,placeholder:l})),e)}()})},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[71,0]]]);