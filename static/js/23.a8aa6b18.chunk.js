(this["webpackJsonpalgo-board"]=this["webpackJsonpalgo-board"]||[]).push([[23],{152:function(e,t,a){"use strict";a.r(t);var n=a(56),r=a(0),l=a.n(r),i=a(65),o=a(57),u=a(60),c=a(149),s=a(15),m=a(50);t.default=()=>{const e=Object(r.useState)(0),t=Object(n.a)(e,2),a=t[0],p=t[1];return l.a.createElement(s.a,null,l.a.createElement(i.a,null,l.a.createElement(o.a,null,l.a.createElement(m.a,{title:"Integer Partition"},"In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition."))),l.a.createElement(i.a,null,l.a.createElement(o.a,{md:12},l.a.createElement(u.a,null,l.a.createElement(m.a,{title:"Input"},l.a.createElement(c.a,null,l.a.createElement(c.a.Group,null,l.a.createElement(c.a.Label,null,"Partition Number"),l.a.createElement(c.a.Control,{defaultValue:0,id:"partitionNumber",onChange:()=>{p(function(e){if(isNaN(e)||null==e)return[];const t=Array(e+1).fill(null).map(()=>Array(e+1).fill(null));for(let a=1;a<=e;a+=1)t[0][a]=0;for(let a=0;a<=e;a+=1)t[a][0]=1;for(let a=1;a<=e;a+=1)for(let n=1;n<=e;n+=1)if(a>n)t[a][n]=t[a-1][n];else{const e=t[a-1][n],r=t[a][n-a];t[a][n]=e+r}return t[e][e]}(parseInt(document.getElementById("partitionNumber").value)))},type:"number",placeholder:"10..."}),l.a.createElement(c.a.Text,{className:"text-muted"},"Kindly Input The Partition Space")))),l.a.createElement(m.a,{title:"Output"},a)))))}},60:function(e,t,a){"use strict";var n=a(51);t.a=Object(n.a)("card-deck")}}]);
//# sourceMappingURL=23.a8aa6b18.chunk.js.map