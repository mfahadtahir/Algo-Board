(this["webpackJsonpalgo-board"]=this["webpackJsonpalgo-board"]||[]).push([[25],{152:function(e,t,a){"use strict";a.r(t);var n=a(57),l=a(0),c=a.n(l),r=a(66),o=a(58),s=a(59),m=a(149),u=a(15),i=a(51);const p=(e,t,a)=>0===a?1:a<0||t<=0&&a>=1?0:p(e,t-1,a)+p(e,t,a-e[t-1]);var d=p;t.default=()=>{const e=Object(l.useState)(""),t=Object(n.a)(e,2),a=t[0],p=t[1],g=Object(l.useState)(),E=Object(n.a)(g,2),b=E[0],h=E[1],C=Object(l.useState)("---"),y=Object(n.a)(C,2),I=y[0],O=y[1],f=Object(l.useState)(!1),j=Object(n.a)(f,2),w=j[0],S=j[1];return c.a.createElement(u.a,null,c.a.createElement(r.a,null,c.a.createElement(o.a,null,c.a.createElement(i.a,{title:"Coin Change Making"},"The Coin Change Problem is considered by many to be essential to understanding the paradigm of programming known as Dynamic Programming. The two often are always paired together because the coin change problem encompass the concepts of dynamic programming."))),c.a.createElement(r.a,null,c.a.createElement(o.a,null,c.a.createElement(s.a,null,c.a.createElement(i.a,{title:"Input",isOption:!0,setSample:e=>{console.log(e)}},c.a.createElement(r.a,null,c.a.createElement(o.a,{md:12},c.a.createElement(m.a,null,c.a.createElement(m.a.Group,{controlId:"coins"},c.a.createElement(m.a.Label,null,"Input Coins"),c.a.createElement(m.a.Control,{defaultValue:a,onChange:()=>{if(!b)return;let e=document.getElementById("coins").value.split(" ");e=e.map(e=>parseInt(e)),isNaN(e[e.length-1])&&e.pop(),p(e),O(d(e,e.length,b)),S(!0)},type:"text",placeholder:"1 2 3 ..."}),c.a.createElement(m.a.Text,{className:"text-muted"},"Kindly Input Coins with Spaces")),c.a.createElement(m.a.Group,{controlId:"cents"},c.a.createElement(m.a.Label,null,"Input Cents"),c.a.createElement(m.a.Control,{defaultValue:b,onChange:()=>{let e=parseInt(document.getElementById("cents").value);console.log(e),e&&(h(e),O(d(a,a.length,e)),S(!0))},type:"number",placeholder:"3..."}),c.a.createElement(m.a.Text,{className:"text-muted"},"Kindly Input Cents")))))),c.a.createElement(i.a,{title:"Output"},w?I:"---")))))}},59:function(e,t,a){"use strict";var n=a(50);t.a=Object(n.a)("card-deck")}}]);
//# sourceMappingURL=25.0530c0b9.chunk.js.map