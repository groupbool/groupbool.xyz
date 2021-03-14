(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(11),l=a.n(s),o=a(1),c=a(59),i=a.n(c),m=a(9),d=a(108);function u({stats:e}){const t=Math.round(e.totalDurationMs/36e5),a=Object(d.a)(new Date(e.startedAt),"MMM yyyy");return n.a.createElement(u.Container,null,n.a.createElement("p",null,"we've listened to a total of ",n.a.createElement("span",null,e.totalArtists.toLocaleString())," unique artists and ",n.a.createElement("span",null,e.totalTracks.toLocaleString())," unique songs for a total of ",n.a.createElement("span",null,t.toLocaleString())," hours since ",n.a.createElement("span",null,a)))}var f=u;function p(e){const t=e.genres||[],a=e.user.toLowerCase();return n.a.createElement("div",{className:"feed-list-item"},n.a.createElement("div",{className:"feed-user"},n.a.createElement("a",{href:"/authors/"+a,className:""},a),n.a.createElement("span",{className:"feed-user-genres"},t.join(" • "))),n.a.createElement("div",{className:"artist-list"},e.artists.map(e=>n.a.createElement("div",{key:e.id,className:"artist"},n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"artist-link"},null!=e.img?n.a.createElement("img",{className:"artist-img",src:e.img}):n.a.createElement(h,{name:e.name})),n.a.createElement("div",{className:"artist-name"},e.name)))))}function h(e){const t=e.name.split(/\s+/).map(e=>e.charAt(0)).reduce((e,t)=>e+t,"");return n.a.createElement("div",{className:"artist-placeholder"},n.a.createElement("span",{className:"artist-placeholder-initials"},t))}u.Container=o.default.div`
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
`;const g=o.default.div``;class E extends n.a.Component{constructor(e){super(e),this.state={state:"LOADING",usersFeed:[]}}componentDidMount(){fetch(this.props.feedUrl).then(e=>{if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()}).then(e=>{this.setState({state:"DONE",usersFeed:e})}).catch(e=>{this.setState({state:"ERROR"}),console.error(e)})}render(){const{state:e,usersFeed:t}=this.state,{stats:a}=this.props;return"ERROR"===e?n.a.createElement("div",{className:"feed-error"},n.a.createElement("p",{className:"feed-error-text"},"whoops")):"LOADING"===e?n.a.createElement("div",{className:"logo-spinner-container"},n.a.createElement("img",{src:"/images/logo.svg",className:"logo-spinner"})):n.a.createElement(g,null,n.a.createElement(f,{stats:a}),n.a.createElement("div",{className:"feed-list"},t.map(e=>n.a.createElement(p,Object.assign({key:e.user},e)))))}}var w=E;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("react-root");if(!e)throw new Error("react root not found");const{stats:t}=e.dataset;if(!t)throw new Error("thread data not found");l.a.render(n.a.createElement(o.ThemeProvider,{theme:m.a},n.a.createElement(w,{stats:i()(JSON.parse(t)),feedUrl:"https://storage.googleapis.com/gb-feed/feed/feed_preview.json"})),e)})},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}},[[106,0]]]);