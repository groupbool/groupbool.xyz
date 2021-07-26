!function(e){function t(t){for(var r,o,l=t[0],i=t[1],c=t[2],m=0,d=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={4:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/public/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([105,0]),a()}({105:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),o=a.n(s),l=a(1),i=a(59),c=a.n(i),u=a(6),m=a(13),d=a.n(m);function f({stats:e}){const t=Math.round(e.totalDurationMs/36e5),a=d()(new Date(e.startedAt),"MMM yyyy");return n.a.createElement(f.Container,null,n.a.createElement("p",null,"we've listened to a total of ",n.a.createElement("span",null,e.totalArtists.toLocaleString())," unique artists and ",n.a.createElement("span",null,e.totalTracks.toLocaleString())," unique songs for a total of ",n.a.createElement("span",null,t.toLocaleString())," hours since ",n.a.createElement("span",null,a)))}var p=f;f.Container=l.default.div`
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
`;const g=l.default.div`
      position: absolute;
      background: linear-gradient(136.8deg, #ff7979 24.21%, #A687F1 57.52%, #3498db 94.39%);
      background-size: 400% 400%;
      animation: gradient 7s ease infinite;

      top: 100%;
      left: 0%;
      width: inherit;
      height: 100%;
      transform-origin: center top;
      transform: rotate(${e=>e.popularity?e.popularity/100*180:0}deg);
      transition: transform 0.2s ease-out;
    `;var h=function(e){return n.a.createElement("div",{className:"gauge"},n.a.createElement("div",{className:"gauge-body"},n.a.createElement(g,{popularity:e.popularity}),n.a.createElement("div",{className:"gauge-cover"},n.a.createElement("a",{href:"/authors/"+e.user,className:""},e.user))))};function b(e){const t=e.genres||[],a=e.user.toLowerCase();return n.a.createElement("div",{className:"feed-list-item"},n.a.createElement("div",{className:"feed-user"},n.a.createElement("span",{className:"feed-popularity-container"},n.a.createElement(h,{user:a,popularity:e.mean_popularity})),n.a.createElement("span",{className:"feed-user-genres"},t.join(" • "))),n.a.createElement("div",{className:"artist-list"},e.artists.map(e=>n.a.createElement("div",{key:e.id,className:"artist"},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"artist-link"},null!=e.img?n.a.createElement("img",{className:"artist-img",src:e.img}):n.a.createElement(E,{name:e.name})),n.a.createElement("div",{className:"artist-name"},e.name)))))}function E(e){const t=e.name.split(/\s+/).map(e=>e.charAt(0)).reduce((e,t)=>e+t,"");return n.a.createElement("div",{className:"artist-placeholder"},n.a.createElement("span",{className:"artist-placeholder-initials"},t))}const v=l.default.div``;class y extends n.a.Component{constructor(e){super(e),this.state={state:"LOADING",usersFeed:[]}}componentDidMount(){fetch(this.props.feedUrl).then(e=>{if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()}).then(e=>{this.setState({state:"DONE",usersFeed:e})}).catch(e=>{this.setState({state:"ERROR"}),console.error(e)})}render(){const{state:e,usersFeed:t}=this.state,{stats:a}=this.props;return"ERROR"===e?n.a.createElement("div",{className:"feed-error"},n.a.createElement("p",{className:"feed-error-text"},"whoops")):"LOADING"===e?n.a.createElement("div",{className:"logo-spinner-container"},n.a.createElement("img",{src:"/images/logo.svg",className:"logo-spinner"})):n.a.createElement(v,null,n.a.createElement(p,{stats:a}),n.a.createElement("div",{className:"feed-list"},t.map(e=>n.a.createElement(b,Object.assign({key:e.user},e)))))}}var w=y;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{stats:t}=e.dataset;if(!t)throw new Error("thread data not found");o.a.render(n.a.createElement(l.ThemeProvider,{theme:u.a},n.a.createElement(w,{stats:c()(JSON.parse(t)),feedUrl:"https://storage.googleapis.com/gb-feed/feed/feed_preview.json"})),e)})},6:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}});