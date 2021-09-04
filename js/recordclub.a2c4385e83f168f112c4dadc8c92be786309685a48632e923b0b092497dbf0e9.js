!function(t){function e(e){for(var r,l,a=e[0],s=e[1],c=e[2],u=0,f=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(h&&h(e);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},i={5:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/public/";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=s;o.push([135,0]),n()}({135:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(9),l=n.n(o),a=n(1),s=n(6),c=n(13),h=n.n(c),u=n(18),f=n.n(u),m=n(41);const d={SP:b,WORD:b,TEXT:b,HASH:x,AT:v,BOLD:_,CODE:k,ITALICS:b,URL:b};function y({msg:t}){const e=function(t){try{const e=[];for(m.btLexer.setInput(t);;){const t=m.btLexer.lex();if(!t||"EOF"===t)break;e.push(t)}return function(t){const e=[],n=t=>({type:"TEXT",value:t.map(t=>"SP"===t.type?" ":t.value).join("")});let r=[];for(const i of t)"SP"===i.type||"WORD"===i.type?r.push(i):(r.length&&(e.push(n(r)),r=[]),e.push(i));r.length&&e.push(n(r));return e}(e)}catch(e){return console.error("error lexing booltext:",e),[{type:"TEXT",value:t}]}}(t);return i.a.createElement(y.Ctr,null,e.map((t,e)=>{const n=d[t.type]||b;return i.a.createElement(n,{key:e,value:t.value})}))}y.Ctr=a.default.div`
  width: 100%;
`;var p,g=y;function b({value:t}){return i.a.createElement(i.a.Fragment,null,t)}function k({value:t}){return i.a.createElement(k.C,null,t)}function v({value:t}){return i.a.createElement(v.C,null,"@",t)}function _({value:t}){return i.a.createElement(_.C,null,t)}function x({value:t}){return i.a.createElement(x.C,null,"#",t)}k.C=a.default.code`
  color: ${t=>t.theme.colors.fadedBlack};
  background-color: ${t=>t.theme.colors.lighterGray};
  padding: 0.25rem;
  position: relative;
  top: -1px;
  display: inline-block;
`,v.C=a.default.span`
  display: inline-block;
  font-weight: 700;
  color: ${t=>t.theme.colors.lightYellow};
  transition: color 0.25s;

  &:hover {
    color: ${t=>t.theme.colors.salmon};
    cursor: pointer;
  }
`,_.C=a.default.span`
  display: inline-block;
  font-weight: bold;
`,x.C=a.default.span`
  display: inline-block;
  color: ${t=>t.theme.colors.neonGreen};
`,function(t){t.LYRICS="LYRICS"}(p||(p={}));var w=function({msg:t}){return function(t){return void 0!==t.type}(t)?i.a.createElement(E,{smsg:t}):i.a.createElement(g,{msg:t})};function E({smsg:t}){switch(t.type){case p.LYRICS:return i.a.createElement("em",null,t.content);default:console.error("unknown structure message type:",t.type)}return null}var S=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function O(t){var{dim:e="3rem",fontSize:n="1rem",isUppercase:r=!1,initials:o}=t,l=S(t,["dim","fontSize","isUppercase","initials"]);return i.a.createElement(O.Container,{dim:e,fontSize:n,borderColor:l.borderColor,backgroundColor:l.backgroundColor},r?o.toUpperCase():o.toLowerCase())}O.Container=a.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.white};
  font-size: ${t=>t.fontSize};
  border-radius: 100%;
  background-color: ${t=>t.backgroundColor?t.backgroundColor:t.theme.colors.darkGray};
  width: ${t=>t.dim};
  height: ${t=>t.dim};
  border: ${t=>t.borderColor?"2px solid "+t.borderColor:"none"};
`;n(15);function I(t){const e=h()(f()(t.timestamp),"MMM dd, h:mm aaaa");return i.a.createElement(I.Container,null,i.a.createElement(I.Left,null,i.a.createElement(O,{initials:t.author,dim:"2.5rem",fontSize:"0.95rem",backgroundColor:t.color})),i.a.createElement(I.Right,null,t.body.map((t,e)=>i.a.createElement(I.Text,{key:e},i.a.createElement(w,{msg:t}))),i.a.createElement(I.Date,null,e)))}var C=I;I.Container=a.default.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`,I.Left=a.default.div`
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
    border-left: 2px solid ${t=>t.theme.colors.lightGray};
    transform: translate(-50%);
    height: 150%;

    @media (max-width: ${t=>t.theme.br.sm}) {
      left: 29%;
    }
  }

  @media (max-width: ${t=>t.theme.br.sm}) {
    justify-content: flex-start;
  }
`,I.Right=a.default.div`
  width: 80%;
  padding-top: 0.5rem;
`,I.Text=a.default.div`
  background-color: ${t=>t.theme.colors.lightBlue};
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
      border-color: ${t=>t.theme.colors.lightBlue} transparent transparent transparent;
    }
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`,I.Date=a.default.div`
  margin-top: 0.5rem;
  text-align: right;
  color: ${t=>t.theme.colors.darkGray};
  font-size: ${t=>t.theme.size.small};
`;const L={jpb:s.a.colors.pink,sp:s.a.colors.channelOrange,xv:s.a.colors.softPurple,oc:s.a.colors.emerald,tm:s.a.colors.leanPurple};function $(t){const e=h()(f()(t.release),"MMM dd yyyy");return i.a.createElement($.Container,null,i.a.createElement($.Header,null,i.a.createElement($.Left,null,i.a.createElement("a",{href:t.link},i.a.createElement($.Image,{src:t.img}))),i.a.createElement($.Meta,null,i.a.createElement($.Title,null,t.album),i.a.createElement($.Subtitle,null,t.artist),i.a.createElement($.Release,null,e),i.a.createElement($.Authors,null,t.authors.map((t,e)=>i.a.createElement("a",{key:e,href:"/authors/"+t},i.a.createElement(O,{initials:t,backgroundColor:L[t]})))))),i.a.createElement($.Bodies,null,t.messages.map((t,e)=>i.a.createElement(C,Object.assign({key:e},t,{color:L[t.author]})))))}var T=$;$.Container=a.default.div``,$.Header=a.default.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${t=>t.theme.br.sm}) {
    flex-direction: column;
  }
`,$.Meta=a.default.div`
  width: 60%;
  margin-top: 1rem;
  margin-left: 1.5rem;
  @media (max-width: ${t=>t.theme.br.sm}) {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
`,$.Left=a.default.div`
  width: 40%;
  @media (max-width: ${t=>t.theme.br.sm}) {
    width: 100%;
  }
`,$.Image=a.default.img`
  width: 100%;
  height: auto;
`,$.Title=a.default.div`
  color: ${t=>t.theme.colors.fadedBlack};
  font-size: 1.5rem;
`,$.Subtitle=a.default.div`
  color: ${t=>t.theme.colors.darkGreen};
  margin-top: 0.8rem;
  font-size: 1.25rem;
`,$.Release=a.default.div`
  margin-top: 0.35rem;
`,$.Authors=a.default.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6rem;

  & > * {
    margin-right: 0.75rem;
  }
`,$.Bodies=a.default.div`
  margin-top: 2.5rem;
  overflow: hidden;
`,document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("react-root");if(!t)throw new Error("react root not found");const{thread:e}=t.dataset;if(!e)throw new Error("thread data not found");l.a.render(i.a.createElement(a.ThemeProvider,{theme:s.a},i.a.createElement(T,Object.assign({},JSON.parse(e)))),t)})},15:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var r=n(17),i=n.n(r);function o(t){if(!t)return"squad";const e=t.length;return 1===e?t[0]:2===e?`${t[0]} and ${t[1]}`:"squad"}function l(t){if(Array.isArray(t))return t.map(t=>l(t));if("object"==typeof t){const e={};return Object.entries(t).map(([t,e])=>[i()(t),l(e)]).reduce((t,[e,n])=>(t[e]=n,t),e)}return t}},41:function(t,e){var n=function(){function t(t,e){return{type:t,value:e}}return{EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var o in i)this[o]=i[o];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),o=0;o<i.length;o++)if((n=this._input.match(this.rules[i[o]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=o,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,i[o])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,i[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{moduleName:"btLexer"},performAction:function(e,n,r,i){switch(r){case 0:break;case 1:return t("SP","");case 2:e.fragment="",this.begin("MD_CODE");break;case 3:e.fragment="",this.begin("MD_BOLD");break;case 4:e.fragment="",this.begin("MD_ITALIC");break;case 5:return function(e){if(e.startsWith("http"))return t("URL",e);const n=e.length;switch(e[0]){case"@":if(n>1)return t("AT",e.slice(1));case"#":if(n>1)return t("HASH",e.slice(1));default:return t("WORD",e)}}(n.yytext);case 6:return"EOF";case 7:return this.begin("INITIAL"),t("BOLD",e.fragment);case 8:e.fragment+=n.yytext;break;case 9:throw new Error("incomplete bold expression");case 10:return this.begin("INITIAL"),t("ITALIC",e.fragment);case 11:e.fragment+=n.yytext;break;case 12:throw new Error("incomplete italic expression");case 13:return this.begin("INITIAL"),t("CODE",e.fragment);case 14:e.fragment+=n.yytext;break;case 15:throw new Error("incomplete code expression")}},rules:[/^(?:([ \n\t\r]+)$)/,/^(?:([ \n\t\r]+))/,/^(?:([`]))/,/^(?:(\*))/,/^(?:([_]))/,/^(?:([^ \n\t\r*_`]+))/,/^(?:$)/,/^(?:(\*))/,/^(?:[^*]+)/,/^(?:$)/,/^(?:([_]))/,/^(?:[^_]+)/,/^(?:$)/,/^(?:([`]))/,/^(?:[^`]+)/,/^(?:$)/],conditions:{MD_BOLD:{rules:[7,8,9],inclusive:!1},MD_ITALIC:{rules:[10,11,12],inclusive:!1},MD_CODE:{rules:[13,14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}}}();e.btLexer=n},6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}});