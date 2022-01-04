!function(e){function t(t){for(var a,o,l=t[0],i=t[1],c=t[2],m=0,f=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={4:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/public/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([137,0]),r()}({137:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(9),o=r.n(s),l=r(1),i=r(63),c=r.n(i),u=r(6),m=r(13),f=r.n(m);function d({stats:e}){const t=Math.round(e.totalDurationMs/36e5),r=f()(new Date(e.startedAt),"MMM yyyy");return n.a.createElement(d.Container,null,n.a.createElement("p",null,"we've listened to a total of ",n.a.createElement("span",null,e.totalArtists.toLocaleString())," unique artists and ",n.a.createElement("span",null,e.totalTracks.toLocaleString())," unique songs for a total of ",n.a.createElement("span",null,t.toLocaleString())," hours since ",n.a.createElement("span",null,r)))}var p=d;function h(e){const{thickness:t,size:r}=e,a=e.popularity/100,s=Math.floor(r/2),o=Math.max(s-10,t),i=2*Math.PI*o,c=e=>a<.25?e.colors.pink:a<.5?e.colors.channelOrange:a<.75?e.colors.lightYellow:e.colors.emerald;return n.a.createElement(l.ThemeConsumer,null,e=>n.a.createElement("svg",{height:r,width:r},n.a.createElement("circle",{cx:s,cy:s,r:o,strokeWidth:t,stroke:e.colors.lighterGray}),n.a.createElement(h.Gauge,{cx:s,cy:s,r:o,strokeWidth:t,strokeDasharray:i,strokeDashoffset:i*(1-a),stroke:c(e),paintOrder:"stroke",fill:e.colors.white})))}d.Container=l.default.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  p {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  span {
    font-weight: bold;
    color: ${e=>e.theme.colors.purple};
    font-size: 1.6rem;
  }

  @media (max-width: ${e=>e.theme.br.sm}) {
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 1.3rem;
    }
  }
`,h.defaultProps={size:65,thickness:15},h.Gauge=l.default.circle`
  transform-origin: center;
  transform: rotate(-90deg);
`;var g=h;function v({feed:e}){return n.a.createElement(v.Container,null,e.meanPopularity&&n.a.createElement("div",null,n.a.createElement(g,{popularity:e.meanPopularity})))}v.Container=l.default.div`
  display: flex;
  @media (max-width: ${e=>e.theme.br.sm}) {
    flex-direction: column;
  }
`,v.Tracks=l.default.div`
  margin-left: 1.5rem;
  flex-grow: 1;
  @media (max-width: ${e=>e.theme.br.sm}) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;var E,b=v,y=r(15);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var k=function(e){return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",className:"information-circle_svg__h-6 information-circle_svg__w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),E||(E=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})))};function O({feed:e}){const[t,r]=Object(a.useState)({}),s=e.genres||[],o=e.user.toLowerCase(),l=e=>{r(t=>Object.assign(Object.assign({},t),{[e]:!t[e]}))};return n.a.createElement("div",{className:"feed-list-item"},n.a.createElement("div",{className:"feed-user"},n.a.createElement("a",{href:"/authors/"+o,className:"feed-user-name"},o),n.a.createElement("span",{className:"feed-user-genres"},s.join(" • ")),n.a.createElement(k,{width:"18",className:"user-stats-icon user-stats-icon-dk",onClick:()=>l(o)})),n.a.createElement("div",{className:"artist-list"},e.artists.map(e=>n.a.createElement("div",{key:e.id,className:"artist"},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"artist-link"},null!=e.img?n.a.createElement("img",{className:"artist-img",src:e.img}):n.a.createElement(N,{name:e.name})),n.a.createElement("div",{className:"artist-name"},e.name)))),n.a.createElement("div",{className:"user-stats-icon-mb"},n.a.createElement(k,{width:"18",className:"user-stats-icon",onClick:()=>l(o)})),t[o]&&n.a.createElement("div",{className:"user-stats-container"},n.a.createElement(b,{feed:e})))}function N(e){const t=e.name.split(/\s+/).map(e=>e.charAt(0)).reduce((e,t)=>e+t,"");return n.a.createElement("div",{className:"artist-placeholder"},n.a.createElement("span",{className:"artist-placeholder-initials"},t))}const j=l.default.div``;class x extends n.a.Component{constructor(e){super(e),this.state={state:"LOADING",usersFeed:[]}}componentDidMount(){fetch(this.props.feedUrl).then(e=>{if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()}).then(e=>{this.setState({state:"DONE",usersFeed:Object(y.a)(e)})}).catch(e=>{this.setState({state:"ERROR"}),console.error(e)})}render(){const{state:e,usersFeed:t}=this.state,{stats:r}=this.props;return"ERROR"===e?n.a.createElement("div",{className:"feed-error"},n.a.createElement("p",{className:"feed-error-text"},"whoops")):"LOADING"===e?n.a.createElement("div",{className:"logo-spinner-container"},n.a.createElement("img",{src:"/images/logo.svg",className:"logo-spinner"})):n.a.createElement(j,null,n.a.createElement(p,{stats:r}),n.a.createElement("div",{className:"feed-list"},t.map(e=>n.a.createElement(O,{key:e.user,feed:e}))))}}var P=x;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{stats:t}=e.dataset;if(!t)throw new Error("thread data not found");o.a.render(n.a.createElement(l.ThemeProvider,{theme:u.a},n.a.createElement(P,{stats:c()(JSON.parse(t)),feedUrl:"https://storage.googleapis.com/gb-feed/feed/feed_preview.json"})),e)})},15:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return o}));var a=r(17),n=r.n(a);function s(e){if(!e)return"squad";const t=e.length;return 1===t?e[0]:2===t?`${e[0]} and ${e[1]}`:"squad"}function o(e){if(Array.isArray(e))return e.map(e=>o(e));if("object"==typeof e){const t={};return Object.entries(e).map(([e,t])=>[n()(e),o(t)]).reduce((e,[t,r])=>(e[t]=r,e),t)}return e}},6:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const a={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}});