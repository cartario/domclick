(this["webpackJsonpmui-test"]=this["webpackJsonpmui-test"]||[]).push([[0],{33:function(e,t,n){e.exports=n(52)},38:function(e,t,n){},39:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),o=(n(38),n(39),n(18)),u=n(29),i=n.n(u),m=n(30),s=n.n(m),E=n(71),b=function(e){var t=e.value,n=e.setValue,l=e.limits,c=l.MAX,u=l.MIN,m=Object(a.useState)(!1),b=Object(o.a)(m,2),f=b[0],v=b[1],d=function(e){"+"===e&&t+1<=c?n(Number(t)+1):"-"===e&&t-1>=u&&n(Number(t)-1)};return r.a.createElement("div",{onWheel:function(e){var a=-e.deltaY;f&&a>0&&t+1<=c?n(Number(t)+1):f&&a<0&&t-1>=u&&n(Number(t)-1)}},r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"),r.a.createElement("input",{className:"input",onBlur:function(){return v(!1)},onFocus:function(){return v(!0)},max:c,min:u,value:Number(t),onChange:function(e){return n(e.target.value)},type:"number",name:"name",id:"name"})),r.a.createElement(E.a,{onClick:function(){return d("+")},color:"primary"},r.a.createElement(i.a,null)),r.a.createElement(E.a,{onClick:function(){return d("-")},color:"secondary"},r.a.createElement(s.a,null))))},f=n(68),v=n(72),d=n(69),g=n(70),h=function(e){var t=e.buttonLabel,n=e.className,l=e.limits,c=Object(a.useState)(!1),u=Object(o.a)(c,2),i=u[0],m=u[1],s=Object(a.useState)(0),E=Object(o.a)(s,2),h=E[0],p=E[1],N=function(){return m(!i)};return r.a.createElement("div",null,r.a.createElement(f.a,{color:"success",onClick:N},t),r.a.createElement(v.a,{isOpen:i,toggle:N,className:n},r.a.createElement(d.a,{toggle:N},"Dom Click"),r.a.createElement(g.a,null,r.a.createElement(b,{value:h,setValue:p,limits:l}))))},p={MIN:0,MAX:10},N=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{limits:p,buttonLabel:"Widget"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(51);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.55733e36.chunk.js.map