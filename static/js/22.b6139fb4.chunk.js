(this["webpackJsonpalgo-board"]=this["webpackJsonpalgo-board"]||[]).push([[22],{148:function(e,a,t){"use strict";t.r(a);var i=t(0),l=t.n(i),s=t(66),n=t(58),r=t(15),o=t(49);class c extends i.Component{render(){return l.a.createElement(r.a,null,l.a.createElement(s.a,null,l.a.createElement(n.a,null,l.a.createElement(o.a,{title:"Hello Card"},l.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')))))}}a.default=c},49:function(e,a,t){"use strict";var i=t(0),l=t.n(i),s=t(94),n=t(69),r=t(169),o=t(53),c=t.n(o),m=t(15),d=t(48);const p=[1,2,3,4,5,6,7,8,9,10];class u extends i.Component{constructor(...e){super(...e),this.state={isOption:this.props.isOption},this.implementSample=e=>{this.props.setSample(e)}}render(){let e,a,t,i,o="",c=[];return this.state.isOption&&(t=l.a.createElement("div",{className:"card-header-right"},l.a.createElement(s.a,{alignRight:!0,className:"btn-group card-option"},l.a.createElement(s.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},l.a.createElement("i",{className:"feather icon-more-horizontal"})),l.a.createElement(s.a.Menu,{as:"ul",className:"list-unstyled card-option"},p.map((e,a)=>l.a.createElement(s.a.Item,{key:a,as:"li",className:"dropdown-item",onClick:()=>this.implementSample(a)},l.a.createElement("i",{className:"feather icon-sliders"}),l.a.createElement("a",{href:d.a.BLANK_LINK}," Test Sample ",e," "))))))),i=l.a.createElement(n.a.Header,null,l.a.createElement(n.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(c=[...c,"full-card"],e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[...c,"card-load"],a=l.a.createElement("div",{className:"card-loader"},l.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[...c,"d-none"]),this.props.cardClass&&(c=[...c,this.props.cardClass]),o=l.a.createElement(n.a,{className:c.join(" "),style:e},i,l.a.createElement(r.a,{in:!this.state.collapseCard},l.a.createElement("div",null,l.a.createElement(n.a.Body,null,this.props.children))),a),l.a.createElement(m.a,null,o)}}a.a=c()(u)}}]);
//# sourceMappingURL=22.b6139fb4.chunk.js.map