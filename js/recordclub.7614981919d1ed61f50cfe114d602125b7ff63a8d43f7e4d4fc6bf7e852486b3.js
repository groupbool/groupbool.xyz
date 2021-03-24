!function(t){function e(e){for(var r,s,l=e[0],a=e[1],c=e[2],u=0,f=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(h&&h(e);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={5:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/public/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var h=a;o.push([102,0]),n()}({102:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(9),s=n.n(o),l=n(1),a=n(7),c=n(13),h=n.n(c),u=n(16),f=n.n(u),m=n(55);const y={TEXT:b,AUTHOR_REF:v,BOLD:b,CODE:_,ITALICS:b,URL:b};function d({msg:t}){const e=function(t){try{return Object(m.parse)(t)}catch(e){return console.error("error parsing booltext:",e),[{type:"TEXT",value:t}]}}(t);return i.a.createElement(d.Ctr,null,e.map((t,e)=>{const n=y[t.type]||b;return i.a.createElement(n,{key:e,value:t.value})}))}d.Ctr=l.default.div``;var p,g=d;function b({value:t}){return i.a.createElement(i.a.Fragment,null,t)}function _({value:t}){return i.a.createElement(_.C,null,t)}function v({value:t}){return i.a.createElement(v.C,null,"@",t)}_.C=l.default.code`
  color: ${t=>t.theme.colors.lightBlack};
  margin-right: 0.5rem;
  padding: 0.25rem;
  position: relative;
  top: -1px;
`,v.C=l.default.span`
  font-weight: 700;
  color: ${t=>t.theme.colors.nectarine};
`,function(t){t.LYRICS="LYRICS"}(p||(p={}));var k=function({msg:t}){return function(t){return void 0!==t.type}(t)?i.a.createElement(x,{smsg:t}):i.a.createElement(g,{msg:t})};function x({smsg:t}){switch(t.type){case p.LYRICS:return i.a.createElement("em",null,t.content);default:console.error("unknown structure message type:",t.type)}return null}var E=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function w(t){var{dim:e="3rem",fontSize:n="1rem",isUppercase:r=!1,initials:o}=t,s=E(t,["dim","fontSize","isUppercase","initials"]);return i.a.createElement(w.Container,{dim:e,fontSize:n,borderColor:s.borderColor,backgroundColor:s.backgroundColor},r?o.toUpperCase():o.toLowerCase())}w.Container=l.default.div`
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
`;n(18);function O(t){const e=h()(f()(t.timestamp),"MMM dd, h:mm aaaa");return i.a.createElement(O.Container,null,i.a.createElement(O.Left,null,i.a.createElement(w,{initials:t.author,dim:"2.5rem",fontSize:"0.95rem",backgroundColor:t.color})),i.a.createElement(O.Right,null,t.body.map((t,e)=>i.a.createElement(O.Text,{key:e},i.a.createElement(k,{msg:t}))),i.a.createElement(O.Date,null,e)))}var S=O;O.Container=l.default.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`,O.Left=l.default.div`
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
`,O.Right=l.default.div`
  width: 80%;
  padding-top: 0.5rem;
`,O.Text=l.default.div`
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
`,O.Date=l.default.div`
  margin-top: 0.5rem;
  text-align: right;
  color: ${t=>t.theme.colors.darkGray};
  font-size: ${t=>t.theme.size.small};
`;const $={jpb:a.a.colors.pink,sp:a.a.colors.channelOrange,xv:a.a.colors.softPurple,oc:a.a.colors.emerald,tm:a.a.colors.leanPurple};function C(t){const e=h()(f()(t.release),"MMM dd yyyy");return i.a.createElement(C.Container,null,i.a.createElement(C.Header,null,i.a.createElement(C.Left,null,i.a.createElement("a",{href:t.link},i.a.createElement(C.Image,{src:t.img}))),i.a.createElement(C.Meta,null,i.a.createElement(C.Title,null,t.album),i.a.createElement(C.Subtitle,null,t.artist),i.a.createElement(C.Release,null,e),i.a.createElement(C.Authors,null,t.authors.map((t,e)=>i.a.createElement("a",{key:e,href:"/authors/"+t},i.a.createElement(w,{initials:t,backgroundColor:$[t]})))))),i.a.createElement(C.Bodies,null,t.messages.map((t,e)=>i.a.createElement(S,Object.assign({key:e},t,{color:$[t.author]})))))}var I=C;C.Container=l.default.div``,C.Header=l.default.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${t=>t.theme.br.sm}) {
    flex-direction: column;
  }
`,C.Meta=l.default.div`
  width: 60%;
  margin-top: 1rem;
  margin-left: 1.5rem;
  @media (max-width: ${t=>t.theme.br.sm}) {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
`,C.Left=l.default.div`
  width: 40%;
  @media (max-width: ${t=>t.theme.br.sm}) {
    width: 100%;
  }
`,C.Image=l.default.img`
  width: 100%;
  height: auto;
`,C.Title=l.default.div`
  color: ${t=>t.theme.colors.fadedBlack};
  font-size: 1.5rem;
`,C.Subtitle=l.default.div`
  color: ${t=>t.theme.colors.darkGreen};
  margin-top: 0.8rem;
  font-size: 1.25rem;
`,C.Release=l.default.div`
  margin-top: 0.35rem;
`,C.Authors=l.default.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.6rem;

  & > * {
    margin-right: 0.75rem;
  }
`,C.Bodies=l.default.div`
  margin-top: 2.5rem;
  overflow: hidden;
`,document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("react-root");if(!t)throw new Error("react root not found");const{thread:e}=t.dataset;if(!e)throw new Error("thread data not found");s.a.render(i.a.createElement(l.ThemeProvider,{theme:a.a},i.a.createElement(I,Object.assign({},JSON.parse(e)))),t)})},18:function(t,e,n){"use strict";function r(t){if(!t)return"squad";const e=t.length;return 1===e?t[0]:2===e?`${t[0]} and ${t[1]}`:"squad"}n.d(e,"a",(function(){return r}))},55:function(t,e,n){var r=function(){var t=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},e=[1,15],n=[1,10],r=[1,11],i=[1,12],o=[1,13],s=[1,14],l=[5,13,14,15,16,17,18],a={trace:function(){},yy:{},symbols_:{error:2,booltext:3,args:4,EOF:5,arg:6,text:7,bold:8,italics:9,author_ref:10,code:11,url:12,URL:13,TEXT:14,"*":15,_:16,AUTHOR_REF:17,"`":18,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",13:"URL",14:"TEXT",15:"*",16:"_",17:"AUTHOR_REF",18:"`"},productions_:[0,[3,2],[4,1],[4,2],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[12,1],[7,1],[8,3],[9,3],[10,1],[11,3]],performAction:function(t,e,n,r,i,o,s){var l=o.length-1;switch(i){case 1:return o[l-1];case 2:this.$=[o[l]];break;case 3:this.$=o[l-1].concat(o[l]);break;case 10:this.$=c("URL",t);break;case 11:this.$=c("TEXT",t);break;case 12:this.$=c("BOLD",o[l-1]);break;case 13:this.$=c("ITALICS",o[l-1]);break;case 14:this.$=c("AUTHOR_REF",t.slice(1));break;case 15:this.$=c("CODE",o[l-1])}},table:[{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:e,14:n,15:r,16:i,17:o,18:s},{1:[3]},{5:[1,16],6:17,7:4,8:5,9:6,10:7,11:8,12:9,13:e,14:n,15:r,16:i,17:o,18:s},t(l,[2,2]),t(l,[2,4]),t(l,[2,5]),t(l,[2,6]),t(l,[2,7]),t(l,[2,8]),t(l,[2,9]),t(l,[2,11]),{14:[1,18]},{14:[1,19]},t(l,[2,14]),{14:[1,20]},t(l,[2,10]),{1:[2,1]},t(l,[2,3]),{15:[1,21]},{16:[1,22]},{18:[1,23]},t(l,[2,12]),t(l,[2,13]),t(l,[2,15])],defaultActions:{16:[2,1]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],r=[null],i=[],o=this.table,s="",l=0,a=0,c=0,h=2,u=1,f=i.slice.call(arguments,1),m=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);m.setInput(t,y.yy),y.yy.lexer=m,y.yy.parser=this,void 0===m.yylloc&&(m.yylloc={});var p=m.yylloc;i.push(p);var g=m.options&&m.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,_,v,k,x,E,w,O,S,$=function(){var t;return"number"!=typeof(t=m.lex()||u)&&(t=e.symbols_[t]||t),t},C={};;){if(v=n[n.length-1],this.defaultActions[v]?k=this.defaultActions[v]:(null==b&&(b=$()),k=o[v]&&o[v][b]),void 0===k||!k.length||!k[0]){var I="";for(E in S=[],o[v])this.terminals_[E]&&E>h&&S.push("'"+this.terminals_[E]+"'");I=m.showPosition?"Parse error on line "+(l+1)+":\n"+m.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(l+1)+": Unexpected "+(b==u?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(I,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:p,expected:S})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+b);switch(k[0]){case 1:n.push(b),r.push(m.yytext),i.push(m.yylloc),n.push(k[1]),b=null,_?(b=_,_=null):(a=m.yyleng,s=m.yytext,l=m.yylineno,p=m.yylloc,c>0&&c--);break;case 2:if(w=this.productions_[k[1]][1],C.$=r[r.length-w],C._$={first_line:i[i.length-(w||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(w||1)].first_column,last_column:i[i.length-1].last_column},g&&(C._$.range=[i[i.length-(w||1)].range[0],i[i.length-1].range[1]]),void 0!==(x=this.performAction.apply(C,[s,a,l,y.yy,k[1],r,i].concat(f))))return x;w&&(n=n.slice(0,-1*w*2),r=r.slice(0,-1*w),i=i.slice(0,-1*w)),n.push(this.productions_[k[1]][0]),r.push(C.$),i.push(C._$),O=o[n[n.length-2]][n[n.length-1]],n.push(O);break;case 3:return!0}}return!0}};function c(t,e){return{type:t,value:e}}var h={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var o in i)this[o]=i[o];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),o=0;o<i.length;o++)if((n=this._input.match(this.rules[i[o]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=o,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,i[o])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,i[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,r){switch(n){case 0:case 1:break;case 2:return 15;case 3:return 16;case 4:return 18;case 5:return 17;case 6:return 14;case 7:return 5}},rules:[/^(?:^\s+)/,/^(?:\s+$)/,/^(?:\*)/,/^(?:[_])/,/^(?:`)/,/^(?:@([\w]+))/,/^(?:[^*@_`]+)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function u(){this.yy={}}return a.lexer=h,u.prototype=a,a.Parser=u,new u}();e.parser=r,e.Parser=r.Parser,e.parse=function(){return r.parse.apply(r,arguments)}},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={colors:{lightGray:"#ecf0f1",medGray:"#dfe7e9",darkGray:"#bdc3c7",gray:"#95a5a6",blueBlack:"#34495e",blue:"#3498db",darkBlue:"#2980b9",lightBlue:"#74b8ff",turquoise:"#81ecec",purple:"#a29bfe",emerald:"#00cec9",darkGreen:"#38ada9",leanPurple:"#c86ed3",softPurple:"#A687F1",pink:"#ff7979",fadedBlack:"#4c4e4d",lightBlack:"#666666",yellow:"#fed330",channelOrange:"#ff7e00",white:"#ffffff",bluePurple:"#686de0",nectarine:"#ffbe76"},br:{sm:"576px",md:"768px",lg:"992px"},size:{headingXl:"2.5rem",headingl:"2rem",heading:"1.75rem",headingSm:"1.5rem",normal:"1rem",small:"0.8rem"}}}});