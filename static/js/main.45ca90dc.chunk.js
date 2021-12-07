(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{46:function(e,n,t){"use strict";t.r(n);var r,a=t(10),o=t(0),i=t.n(o),c=t(14),d=t.n(c),b=t(12),l=t(9),s=t(8),p=t(5),j=t(1),u=t(3),g=t(13),O=Object(b.b)({key:"toDo",default:{TO_DO:[],DOING:[],DONE:[],HI:[]}}),f=t(23),x=t(4),h=l.c.div(r||(r=Object(a.a)(["\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 10px 10px;\n  background-color: ",";\n"])),(function(e){return e.theme.cardColor}));function m(e){var n=e.toDoId,t=e.toDoText,r=e.index;return Object(x.jsx)(g.b,{draggableId:n+"",index:r,children:function(e,n){return Object(x.jsx)(h,Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.dragHandleProps),e.draggableProps),{},{children:t}))}})}var v,y,D,k,I=i.a.memo(m),w=l.c.div(v||(v=Object(a.a)(["\n  width: 300px;\n  padding: 10px;\n  border-radius: 5px;\n  min-height: 200px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: ",";\n  background-color: ",";\n  transition: background-color 0.3s ease;\n"])),(function(e){return e.isDragging?"3px 3px 10px rgba(0, 0, 0, 0.5)":"none"}),(function(e){return e.isDragging?"#74b9ff":e.theme.boardColor})),q=l.c.div(y||(y=Object(a.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n  padding: 10px;\n  &:hover {\n    background-color: #74b9ff;\n    transition: background-color 0.3s ease;\n  }\n"]))),S=l.c.form(D||(D=Object(a.a)(["\n  width: 100%;\n"]))),P=l.c.div(k||(k=Object(a.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease;\n"])),(function(e){return e.isDraggingFromThis?"#b2bec3":e.isDraggingOver?"#636e72":e.theme.boardColor}));function C(e){var n=e.boardIndex,t=e.toDos,r=e.boardId,a=Object(b.d)(O),o=Object(f.a)(),i=o.register,c=o.handleSubmit,d=o.setValue,l=function(e){var n=e.toDo;d("toDo",""),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},r,[].concat(Object(p.a)(e[r]),[{id:Date.now(),text:n}])))}))};return Object(x.jsx)(g.b,{draggableId:r,index:n,children:function(e,n){return Object(x.jsxs)(w,Object(j.a)(Object(j.a)({isDragging:n.isDragging,ref:e.innerRef},e.draggableProps),{},{children:[Object(x.jsx)(q,Object(j.a)(Object(j.a)({},e.dragHandleProps),{},{children:Object(x.jsx)("h3",{children:r})})),Object(x.jsx)(S,{onSubmit:c(l),children:Object(x.jsx)("input",Object(j.a)(Object(j.a)({},i("toDo",{required:!0})),{},{type:"text",placeholder:"Add task on ".concat(r)}))}),Object(x.jsx)(g.c,{droppableId:r,type:"toDo",children:function(e,n){return Object(x.jsxs)(P,Object(j.a)(Object(j.a)({isDraggingOver:n.isDraggingOver,isDraggingFromThis:Boolean(n.draggingFromThisWith),ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e,n){return Object(x.jsx)(I,{toDoId:e.id,toDoText:e.text,index:n},e.id)})),e.placeholder]}))}})]}))}})}var B,N=i.a.memo(C),T=l.c.form(B||(B=Object(a.a)(["\n  margin: 30px 0px;\n"])));var z,E,R=function(){var e=Object(f.a)(),n=e.register,t=e.handleSubmit,r=e.setValue,a=Object(b.d)(O);return Object(x.jsxs)(T,{onSubmit:t((function(e){var n=e.formName;console.log(n),a((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},n,[]))})),r("formName","")})),children:[Object(x.jsx)("input",Object(j.a)(Object(j.a)({},n("formName",{required:!0})),{},{type:"text"})),Object(x.jsx)("button",{children:"Add a New Board"})]})},F=t(32),H=t(31),A=l.c.div(z||(z=Object(a.a)(["\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  position: relative;\n  transition: all 0.3s ease;\n  margin: 30px 0px;\n  div {\n    color: ",";\n    transform: ",";\n    transition: all 0.3s ease;\n  }\n"])),(function(e){return e.isDraggingOver?"black":"white"}),(function(e){return e.isDraggingOver?"white":"black"}),(function(e){return e.isDraggingOver?"scale(1.4)":"none"})),J=l.c.div(E||(E=Object(a.a)(["\n  position: absolute;\n"])));var V,G,M=function(){return Object(x.jsx)(g.c,{droppableId:"trashBin",type:"toDo",children:function(e,n){return Object(x.jsxs)(A,Object(j.a)(Object(j.a)({isDraggingOver:n.isDraggingOver,ref:e.innerRef},e.droppableProps),{},{children:[Object(x.jsx)(J,{children:Object(x.jsx)(H.a,{icon:F.a})}),e.placeholder]}))}})},W=l.c.div(V||(V=Object(a.a)(["\n  display: flex;\n  max-width: 1000px;\n  width: 100%;\n  margin: 0 auto;\n  justify-content: space-evenly;\n  align-items: center;\n  min-height: 100vh;\n  flex-direction: column;\n"]))),_=l.c.div(G||(G=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 300px);\n  gap: 20px;\n"])));var K,L=function(){var e=Object(b.c)(O),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(x.jsx)(g.a,{onDragEnd:function(e){var n=e.type,a=(e.draggableId,e.destination),o=e.source;if(a)if("trashBin"!==(null===a||void 0===a?void 0:a.droppableId))if("board"!==n)(null===a||void 0===a?void 0:a.droppableId)===o.droppableId&&r((function(e){var n=Object(p.a)(e[o.droppableId]);return n.splice.apply(n,[null===a||void 0===a?void 0:a.index,0].concat(Object(p.a)(n.splice(o.index,1)))),Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},o.droppableId,n))})),(null===a||void 0===a?void 0:a.droppableId)!==o.droppableId&&r((function(e){var n,t=Object(p.a)(e[o.droppableId]),r=Object(p.a)(e[a.droppableId]),i=t.splice(o.index,1);return r.splice.apply(r,[a.index,0].concat(Object(p.a)(i))),Object(j.a)(Object(j.a)({},e),{},(n={},Object(s.a)(n,o.droppableId,t),Object(s.a)(n,a.droppableId,r),n))}));else{if(a.index===o.index)return;r((function(e){var n,r,i=Object.keys(t);i.forEach((function(e,t){t===o.index&&(n=e),t===a.index&&(r=e)}));var c={};return i.forEach((function(t){t!==n&&(t===r&&o.index>a.index&&(c[n]=Object(p.a)(e[n])),c[t]=Object(p.a)(e[t]),t===r&&o.index<a.index&&(c[n]=Object(p.a)(e[n])))})),c}))}else r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},o.droppableId,[].concat(Object(p.a)(e[o.droppableId].slice(0,o.index)),Object(p.a)(e[o.droppableId].slice(o.index+1)))))}))},children:Object(x.jsxs)(W,{children:[Object(x.jsx)(R,{}),Object(x.jsx)(g.c,{droppableId:"droppableBoards",type:"board",direction:"horizontal",children:function(e,n){return Object(x.jsxs)(_,{ref:e.innerRef,children:[Object.keys(t).map((function(e,n){return Object(x.jsx)(N,{boardIndex:n,boardId:e,toDos:t[e]},e)})),e.placeholder]})}}),Object(x.jsx)(M,{})]})})},Q=Object(l.b)(K||(K=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n*[hidden] {\n    display: none;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color: black;\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(e){return e.theme.bgColor}));d.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(l.a,{theme:{bgColor:"black",boardColor:"blanchedalmond",cardColor:"white"},children:[Object(x.jsx)(Q,{}),Object(x.jsx)(L,{})]})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.45ca90dc.chunk.js.map