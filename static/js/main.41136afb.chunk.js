(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(6),r=n.n(o),s=(n(12),n(7)),j=n(5),l=(n(13),n(0)),u=function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"todo_styles",children:[Object(l.jsx)("button",{onClick:function(){t.onSelect(t.id)},children:"x"}),Object(l.jsx)("li",{children:t.text})]})})},d=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([]),r=Object(j.a)(o,2),d=r[0],a=r[1],b=function(t){console.log("deleted"),a((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main-div",children:Object(l.jsxs)("div",{className:"center-div",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"To Do List"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"Add a item",onChange:function(t){i(t.target.value)},value:n}),Object(l.jsx)("button",{onClick:function(){a((function(t){return[].concat(Object(s.a)(t),[n])})),i("")},children:"X"}),Object(l.jsx)("ol",{children:d.map((function(t,e){return Object(l.jsx)(u,{text:t,id:e,onSelect:b},e)}))})]})})})},a=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),a()}},[[15,1,2]]]);
//# sourceMappingURL=main.41136afb.chunk.js.map