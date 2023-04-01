(()=>{var t,e={6315:(t,e,n)=>{"use strict";var i=n(7294),r=n(3935),o=n(2788);const l={colors:{lighterGray:"#f6f8fa",lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",lightYellow:"#ffda79",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76",salmon:"#fab1a0",neonGreen:"lime"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}};var s=n(2449),a=n(3855),c=n(9098);const h={SP:d,WORD:d,TEXT:d,HASH:g,AT:y,BOLD:p,CODE:f,ITALICS:d,URL:d};function u({msg:t}){const e=function(t){try{const e=[];for(c.a.setInput(t);;){const t=c.a.lex();if(!t||"EOF"===t)break;e.push(t)}return function(t){const e=[],n=t=>({type:"TEXT",value:t.map((t=>"SP"===t.type?" ":t.value)).join("")});let i=[];for(const r of t)"SP"===r.type||"WORD"===r.type?i.push(r):(i.length&&(e.push(n(i)),i=[]),e.push(r));return i.length&&e.push(n(i)),e}(e)}catch(e){return console.error("error lexing booltext:",e),[{type:"TEXT",value:t}]}}(t);return i.createElement(u.Ctr,null,e.map(((t,e)=>{const n=h[t.type]||d;return i.createElement(n,{key:e,value:t.value})})))}u.Ctr=o.default.div`
  width: 100%;
`;const m=u;function d({value:t}){return i.createElement(i.Fragment,null,t)}function f({value:t}){return i.createElement(f.C,null,t)}function y({value:t}){return i.createElement(y.C,null,"@",t)}function p({value:t}){return i.createElement(p.C,null,t)}function g({value:t}){return i.createElement(g.C,null,"#",t)}var b;f.C=o.default.code`
  color: ${t=>t.theme.colors.fadedBlack};
  background-color: ${t=>t.theme.colors.lighterGray};
  padding: 0.25rem;
  position: relative;
  top: -1px;
  display: inline-block;
`,y.C=o.default.span`
  display: inline-block;
  font-weight: 700;
  color: ${t=>t.theme.colors.lightYellow};
  transition: color 0.25s;

  &:hover {
    color: ${t=>t.theme.colors.salmon};
    cursor: pointer;
  }
`,p.C=o.default.span`
  display: inline-block;
  font-weight: bold;
`,g.C=o.default.span`
  display: inline-block;
  color: ${t=>t.theme.colors.neonGreen};
`,function(t){t.LYRICS="LYRICS"}(b||(b={}));const k=function({msg:t}){return function(t){return void 0!==t.type}(t)?i.createElement(v,{smsg:t}):i.createElement(m,{msg:t})};function v({smsg:t}){return t.type===b.LYRICS?i.createElement("em",null,t.content):(console.error("unknown structure message type:",t.type),null)}var _=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n};function x(t){var{dim:e="3rem",fontSize:n="1rem",isUppercase:r=!1,initials:o}=t,l=_(t,["dim","fontSize","isUppercase","initials"]);return i.createElement(x.Container,{dim:e,fontSize:n,borderColor:l.borderColor,backgroundColor:l.backgroundColor},r?o.toUpperCase():o.toLowerCase())}function E(t){const e=(0,s.Z)((0,a.Z)(t.timestamp),"MMM dd, h:mm aaaa");return i.createElement(E.Container,null,i.createElement(E.Left,null,i.createElement(x,{initials:t.author,dim:"2.5rem",fontSize:"0.95rem",backgroundColor:t.color})),i.createElement(E.Right,null,t.body.map(((t,e)=>i.createElement(E.Text,{key:e},i.createElement(k,{msg:t})))),i.createElement(E.Date,null,e)))}x.Container=o.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.white};
  font-size: ${t=>t.fontSize};
  border-radius: 100%;
  background-color: ${t=>t.backgroundColor?t.backgroundColor:t.theme.colors.darkGray};
  width: ${t=>t.dim};
  height: ${t=>t.dim};
  border: ${t=>t.borderColor?`2px solid ${t.borderColor}`:"none"};
`,n(8929);const w=E;E.Container=o.default.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`,E.Left=o.default.div`
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
`,E.Right=o.default.div`
  width: 80%;
  padding-top: 0.5rem;
`,E.Text=o.default.div`
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
`,E.Date=o.default.div`
  margin-top: 0.5rem;
  text-align: right;
  color: ${t=>t.theme.colors.darkGray};
  font-size: ${t=>t.theme.size.small};
`;const S={jpb:l.colors.pink,sp:l.colors.channelOrange,xv:l.colors.softPurple,oc:l.colors.emerald,tm:l.colors.leanPurple};function O(t){const e=(0,s.Z)((0,a.Z)(t.release),"MMM dd yyyy");return i.createElement(O.Container,null,i.createElement(O.Header,null,i.createElement(O.Left,null,i.createElement("a",{href:t.link},i.createElement(O.Image,{src:t.img}))),i.createElement(O.Meta,null,i.createElement(O.Title,null,t.album),i.createElement(O.Subtitle,null,t.artist),i.createElement(O.Release,null,e),i.createElement(O.Authors,null,t.authors.map(((t,e)=>i.createElement("a",{key:e,href:`/authors/${t}`},i.createElement(x,{initials:t,backgroundColor:S[t]}))))))),i.createElement(O.Bodies,null,t.messages.map(((t,e)=>i.createElement(w,Object.assign({key:e},t,{color:S[t.author]}))))))}const C=O;O.Container=o.default.div``,O.Header=o.default.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${t=>t.theme.br.sm}) {
    flex-direction: column;
  }
`,O.Meta=o.default.div`
  width: 60%;
  margin-top: 1rem;
  margin-left: 1.5rem;
  @media (max-width: ${t=>t.theme.br.sm}) {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
`,O.Left=o.default.div`
  width: 40%;
  @media (max-width: ${t=>t.theme.br.sm}) {
    width: 100%;
  }
`,O.Image=o.default.img`
  width: 100%;
  height: auto;
`,O.Title=o.default.div`
  color: ${t=>t.theme.colors.fadedBlack};
  font-size: 1.5rem;
`,O.Subtitle=o.default.div`
  color: ${t=>t.theme.colors.darkGreen};
  margin-top: 0.8rem;
  font-size: 1.25rem;
`,O.Release=o.default.div`
  margin-top: 0.35rem;
`,O.Authors=o.default.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6rem;

  & > * {
    margin-right: 0.75rem;
  }
`,O.Bodies=o.default.div`
  margin-top: 2.5rem;
  overflow: hidden;
`,document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("react-root");if(!t)throw new Error("react root not found");const{thread:e}=t.dataset;if(!e)throw new Error("thread data not found");r.render(i.createElement(o.ThemeProvider,{theme:l},i.createElement(C,Object.assign({},JSON.parse(e)))),t)}))},9098:(t,e)=>{var n=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var o in r)this[o]=r[o];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),o=0;o<r.length;o++)if((n=this._input.match(this.rules[r[o]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=o,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[o])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{moduleName:"btLexer"},performAction:function(t,n,i,r){switch(i){case 0:break;case 1:return e("SP","");case 2:t.fragment="",this.begin("MD_CODE");break;case 3:t.fragment="",this.begin("MD_BOLD");break;case 4:t.fragment="",this.begin("MD_ITALIC");break;case 5:return function(t){if(t.startsWith("http"))return e("URL",t);const n=t.length;switch(t[0]){case"@":if(n>1)return e("AT",t.slice(1));case"#":if(n>1)return e("HASH",t.slice(1));default:return e("WORD",t)}}(n.yytext);case 6:return"EOF";case 7:return this.begin("INITIAL"),e("BOLD",t.fragment);case 8:case 11:case 14:t.fragment+=n.yytext;break;case 9:throw new Error("incomplete bold expression");case 10:return this.begin("INITIAL"),e("ITALIC",t.fragment);case 12:throw new Error("incomplete italic expression");case 13:return this.begin("INITIAL"),e("CODE",t.fragment);case 15:throw new Error("incomplete code expression")}},rules:[/^(?:([ \n\t\r]+)$)/,/^(?:([ \n\t\r]+))/,/^(?:([`]))/,/^(?:(\*))/,/^(?:([_]))/,/^(?:([^ \n\t\r*_`]+))/,/^(?:$)/,/^(?:(\*))/,/^(?:[^*]+)/,/^(?:$)/,/^(?:([_]))/,/^(?:[^_]+)/,/^(?:$)/,/^(?:([`]))/,/^(?:[^`]+)/,/^(?:$)/],conditions:{MD_BOLD:{rules:[7,8,9],inclusive:!1},MD_ITALIC:{rules:[10,11,12],inclusive:!1},MD_CODE:{rules:[13,14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};function e(t,e){return{type:t,value:e}}return t}();e.a=n}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,i),o.exports}i.m=e,t=[],i.O=(e,n,r,o)=>{if(!n){var l=1/0;for(h=0;h<t.length;h++){for(var[n,r,o]=t[h],s=!0,a=0;a<n.length;a++)(!1&o||l>=o)&&Object.keys(i.O).every((t=>i.O[t](n[a])))?n.splice(a--,1):(s=!1,o<l&&(l=o));if(s){t.splice(h--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[n,r,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.j=858,(()=>{var t={858:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,[l,s,a]=n,c=0;if(l.some((e=>0!==t[e]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(a)var h=a(i)}for(e&&e(n);c<l.length;c++)o=l[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(h)},n=self.webpackChunkblog_js=self.webpackChunkblog_js||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var r=i.O(void 0,[216],(()=>i(6315)));r=i.O(r)})();