(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"Button_button__Uhp2M"}},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c,i=n(0),r=n(9),o=n.n(r),a=(n(21),n(16)),l=n(2),d=(n(22),n(1)),s=function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2);n[0],n[1];return Object(d.jsxs)("li",{className:"goal-item",children:[e.children,Object(d.jsx)("button",{className:"delete",onClick:function(){e.onDelete(e.id)},children:"Delete"})]})},u=(n(24),function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"goalHeading",children:"Pending Tasks!"}),Object(d.jsx)("ul",{className:"goal-list",children:e.items.map((function(t){return Object(d.jsx)(s,{id:t.id,onDelete:e.onDeleteItem,children:t.text},t.id)}))})]})}),b=n(10),j=n(12),h=n(11),f=n.n(h),O=function(e){return Object(d.jsx)("button",{type:e.type,className:f.a.button,onClick:e.onClick,children:e.children})},m=(n(25),j.a.div(c||(c=Object(b.a)(["\n  margin: 0.5rem 0;\n\n  & label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 0.5rem;\n    color: ",";\n  }\n\n  & input {\n    display: block;\n    width: 100%;\n    border: 1px solid ",";\n    background: ",";\n    font: inherit;\n    line-height: 1.5rem;\n    padding: 0 0.25rem;\n  }\n\n  & input:focus {\n    outline: none;\n    background: #fad0ec;\n    border-color: #8b005d;\n  }\n"])),(function(e){return e.invalid?"red":"black"}),(function(e){return e.invalid?"red":"#ccc"}),(function(e){return e.invalid?"#ffd7d7":"transparent"}))),g=function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(i.useState)(!0),a=Object(l.a)(o,2),s=a[0],u=a[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length?e.onAddGoal(c):u(!1)},children:[Object(d.jsxs)(m,{invalid:!s,children:[Object(d.jsx)("label",{children:"Add the task"}),Object(d.jsx)("input",{style:{borderColor:s?"#ccc":"red",background:s?"transparent":"salmon"},type:"text",onChange:function(e){e.target.value.trim().length>0&&u(!0),r(e.target.value)}})]}),Object(d.jsx)(O,{type:"submit",children:"Add Goal"})]})},x=(n(30),function(){var e=Object(i.useState)([{text:"Complete the course!",id:"g1"},{text:"Attend the seminar!",id:"g2"}]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(""),o=Object(l.a)(r,2),s=(o[0],o[1],Object(d.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"}));return n.length>0&&(s=Object(d.jsx)(u,{items:n,onDeleteItem:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Todo List application"}),Object(d.jsx)("h4",{children:"-By Mayuresh Gajalwar"}),Object(d.jsx)("section",{id:"goal-form",children:Object(d.jsx)(g,{onAddGoal:function(e){c((function(t){var n=Object(a.a)(t);return n.unshift({text:e,id:Math.random().toString()}),n}))}})}),Object(d.jsx)("section",{id:"goals",children:s})]})});o.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.046d32d3.chunk.js.map