(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(5),a=c.n(r),s=(c(12),c(4)),i=c(2),l=c(0),u=Object(n.createContext)(),d=function(e){var t=e.children,c=function(e,t){var c=Object(n.useState)(!1),r=Object(i.a)(c,2),a=r[0],s=r[1],l=Object(n.useState)(t),u=Object(i.a)(l,2),d=u[0],j=u[1],b=o.a.useState(!0),O=Object(i.a)(b,2),h=O[0],x=O[1];return Object(n.useEffect)((function(){setTimeout((function(){try{var c,n=localStorage.getItem(e);n?c=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),c=t),j(c),x(!1)}catch(o){s(!0)}}),1e3)})),{item:d,saveItem:function(t){try{var c=JSON.stringify(t);localStorage.setItem(e,c),j(t)}catch(n){s(!0)}},loading:h,error:a}}("TODOS_V1",[]),r=c.item,a=c.saveItem,d=c.loading,j=c.error,b=Object(n.useState)(""),O=Object(i.a)(b,2),h=O[0],x=O[1],m=Object(n.useState)(!1),f=Object(i.a)(m,2),p=f[0],v=f[1],g=r.filter((function(e){return!!e.completed})).length,T=r.length,C=[];C=!h.length>0?Object(s.a)(r):r.filter((function(e){var t=e.text.trim().toLowerCase(),c=h.toLowerCase();return t.includes(c)}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u.Provider,{value:{loading:d,error:j,totalTodos:T,completedTodos:g,searchValue:h,setSearchValue:x,searchedTodos:C,completeTodo:function(e){var t=r.findIndex((function(t){return t.text===e})),c=Object(s.a)(r);c[t].completed=!c[t].completed,a(c)},deleteTodo:function(e){var t=r.findIndex((function(t){return t.text===e})),c=Object(s.a)(r);c.splice(t,1),a(c)},openModal:p,setOpenModal:v,addTodo:function(e){var t=Object(s.a)(r);t.push({completed:!1,text:e}),a(t)}},children:t})})},j=(c(14),function(){var e=Object(n.useContext)(u),t=e.openModal,c=e.setOpenModal;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:"CreateTodoButton",type:"submit",onClick:function(){c(!t)},children:"+"})})}),b=(c(15),function(){var e=Object(n.useContext)(u),t=e.totalTodos,c=e.completedTodos;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("h2",{className:"todoCounter",children:["Has completado ",c," de ",t," TODO's"]})})}),O=(c(16),function(e){var t=e.text,c=e.complete,n=void 0!==c&&c,o=e.onComplete,r=e.onDelete;return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"TodoItem-check ".concat(n?"checked":""),onClick:o,children:"\u221a"}),Object(l.jsxs)("p",{className:"".concat(n?"TodoCompleted":""),children:[t," "]}),Object(l.jsx)("button",{onClick:r,children:"x"})]})}),h=(c(17),function(e){return Object(l.jsx)("section",{className:"TodoList",children:Object(l.jsx)("ul",{className:"TodoList-list",children:e.children})})}),x=(c(18),function(){var e=Object(n.useContext)(u),t=e.searchValue,c=e.setSearchValue;return Object(l.jsx)("div",{className:"TodoSearch",children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:"Buscar una tarea...",onInput:function(e){c(e.target.value)},value:t})})}),m=(c(19),function(e){var t=e.children;return Object(l.jsx)("div",{className:"wrapper",children:t})}),f=(c(20),function(e){var t=e.children;return a.a.createPortal(Object(l.jsx)("div",{className:"Modal",children:t}),document.querySelector("#modal"))}),p=(c(21),function(){var e=Object(n.useContext)(u).addTodo,t=Object(n.useContext)(u),c=t.openModal,o=t.setOpenModal,r=Object(n.useState)(""),a=Object(i.a)(r,2),s=a[0],d=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(s),o(!c)},children:[Object(l.jsx)("textarea",{placeholder:"Escribe una tarea...",value:s,onChange:function(e){d(e.target.value)}}),Object(l.jsxs)("div",{className:"button-container",children:[Object(l.jsx)("button",{type:"button",onClick:function(){o(!c)},children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"is-primary",children:"A\xf1adir"})]})]})})}),v=function(){var e=Object(n.useContext)(u),t=e.error,c=e.loading,o=e.searchedTodos,r=e.completeTodo,a=e.deleteTodo,s=e.openModal;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(m,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(x,{}),Object(l.jsxs)(h,{children:[t&&Object(l.jsx)("p",{children:"Hubo un error..."}),c&&Object(l.jsx)("p",{children:"Cargando..."}),!c&&!o.length&&Object(l.jsx)("p",{children:"\xa1Crea tu primer TODO!"}),o.map((function(e,t){return Object(l.jsx)(O,{text:e.text,complete:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return a(e.text)}},t)}))]}),s&&Object(l.jsx)(f,{children:Object(l.jsx)(p,{})}),Object(l.jsx)(j,{})]})})};var g=function(){return Object(l.jsx)(d,{children:Object(l.jsx)(v,{})})};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4512d3c5.chunk.js.map