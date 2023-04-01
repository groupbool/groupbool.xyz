(()=>{"use strict";var e,t={6987:(e,t,r)=>{var a=r(7294),n=r(3935),s=r(2788),o=r(6869),l=r.n(o);const i={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}};var c=r(2449);function m({stats:e}){const t=Math.round(e.totalDurationMs/36e5),r=(0,c.Z)(new Date(e.startedAt),"MMM yyyy");return a.createElement(m.Container,null,a.createElement("p",null,"we've listened to a total of ",a.createElement("span",null,e.totalArtists.toLocaleString())," unique artists and ",a.createElement("span",null,e.totalTracks.toLocaleString())," unique songs for a total of ",a.createElement("span",null,t.toLocaleString())," hours since ",a.createElement("span",null,r)))}const d=m;function u(e){const{thickness:t,size:r}=e,n=e.popularity/100,o=Math.floor(r/2),l=Math.max(o-10,t),i=2*Math.PI*l,c=e=>n<.25?e.colors.pink:n<.5?e.colors.channelOrange:n<.75?e.colors.lightYellow:e.colors.emerald;return a.createElement(s.ThemeConsumer,null,(e=>a.createElement("svg",{height:r,width:r},a.createElement("circle",{cx:o,cy:o,r:l,strokeWidth:t,stroke:e.colors.lighterGray}),a.createElement(u.Gauge,{cx:o,cy:o,r:l,strokeWidth:t,strokeDasharray:i,strokeDashoffset:i*(1-n),stroke:c(e),paintOrder:"stroke",fill:e.colors.white}))))}m.Container=s.default.div`
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
`,u.defaultProps={size:65,thickness:15},u.Gauge=s.default.circle`
  transform-origin: center;
  transform: rotate(-90deg);
`;const f=u;function h(e){const{tracks:t}=e;return a.createElement(h.Container,null,t.map((e=>a.createElement(h.Track,{key:e.id},a.createElement(h.Song,null,e.name.split(/[(,]/,2)[0]),a.createElement(h.Artist,null,e.artist)))))}const p=h;function g({feed:e}){const t=e.tracks.slice(0,5);return a.createElement(g.Container,null,e.meanPopularity&&a.createElement("div",null,a.createElement(f,{popularity:e.meanPopularity})),t.length>0&&a.createElement(g.Tracks,null,a.createElement(p,{tracks:t})))}h.Container=s.default.div``,h.Song=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${e=>e.theme.br.sm}) {
    display: block;
  }
`,h.Artist=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.colors.gray};

  @media (max-width: ${e=>e.theme.br.sm}) {
    display: block;
  }
`,h.Track=s.default.div`
  height: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${e=>e.theme.br.sm}) {
    height: auto;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`,g.Container=s.default.div`
  display: flex;
  @media (max-width: ${e=>e.theme.br.sm}) {
    flex-direction: column;
  }
`,g.Tracks=s.default.div`
  margin-left: 1.5rem;
  flex-grow: 1;
  @media (max-width: ${e=>e.theme.br.sm}) {
    margin-left: 0;
    margin-top: 1.5rem;
  }
`;const v=g;var E,b=r(8929),y=r.n(b);function k(e){if(Array.isArray(e))return e.map((e=>k(e)));if("object"==typeof e){const t={};return Object.entries(e).map((([e,t])=>[y()(e),k(t)])).reduce(((e,[t,r])=>(e[t]=r,e)),t)}return e}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},w.apply(this,arguments)}const O=function(e){return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",className:"information-circle_svg__h-6 information-circle_svg__w-6",viewBox:"0 0 24 24"},e),E||(E=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"})))};function x({feed:e}){const[t,r]=(0,a.useState)({}),n=e.genres||[],s=e.user.toLowerCase(),o=e=>{r((t=>Object.assign(Object.assign({},t),{[e]:!t[e]})))};return a.createElement("div",{className:"feed-list-item"},a.createElement("div",{className:"feed-user"},a.createElement("a",{href:`/authors/${s}`,className:"feed-user-name"},s),a.createElement("span",{className:"feed-user-genres"},n.join(" • ")),a.createElement(O,{width:"18",className:"user-stats-icon user-stats-icon-dk",onClick:()=>o(s)})),a.createElement("div",{className:"artist-list"},e.artists.map((e=>a.createElement("div",{key:e.id,className:"artist"},a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"artist-link"},null!=e.img?a.createElement("img",{className:"artist-img",src:e.img}):a.createElement(j,{name:e.name})),a.createElement("div",{className:"artist-name"},e.name))))),a.createElement("div",{className:"user-stats-icon-mb"},a.createElement(O,{width:"18",className:"user-stats-icon",onClick:()=>o(s)})),t[s]&&a.createElement("div",{className:"user-stats-container"},a.createElement(v,{feed:e})))}function j(e){const t=e.name.split(/\s+/).map((e=>e.charAt(0))).reduce(((e,t)=>e+t),"");return a.createElement("div",{className:"artist-placeholder"},a.createElement("span",{className:"artist-placeholder-initials"},t))}const N=s.default.div``;class C extends a.Component{constructor(e){super(e),this.state={state:"LOADING",usersFeed:[]}}componentDidMount(){fetch(this.props.feedUrl).then((e=>{if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()})).then((e=>{this.setState({state:"DONE",usersFeed:k(e)})})).catch((e=>{this.setState({state:"ERROR"}),console.error(e)}))}render(){const{state:e,usersFeed:t}=this.state,{stats:r}=this.props;return"ERROR"===e?a.createElement("div",{className:"feed-error"},a.createElement("p",{className:"feed-error-text"},"whoops")):"LOADING"===e?a.createElement("div",{className:"logo-spinner-container"},a.createElement("img",{src:"/images/logo.svg",className:"logo-spinner"})):a.createElement(N,null,a.createElement(d,{stats:r}),a.createElement("div",{className:"feed-list"},t.map((e=>a.createElement(x,{key:e.user,feed:e})))))}}const M=C;document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{stats:t}=e.dataset;if(!t)throw new Error("thread data not found");n.render(a.createElement(s.ThemeProvider,{theme:i},a.createElement(M,{stats:l()(JSON.parse(t)),feedUrl:"https://storage.googleapis.com/gb-feed/feed/feed_preview.json"})),e)}))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e].call(s.exports,s,s.exports,a),s.exports}a.m=t,e=[],a.O=(t,r,n,s)=>{if(!r){var o=1/0;for(m=0;m<e.length;m++){for(var[r,n,s]=e[m],l=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(l=!1,s<o&&(o=s));if(l){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[r,n,s]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=231,(()=>{var e={231:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[o,l,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var m=i(a)}for(t&&t(r);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(m)},r=self.webpackChunkblog_js=self.webpackChunkblog_js||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var n=a.O(void 0,[216],(()=>a(6987)));n=a.O(n)})();