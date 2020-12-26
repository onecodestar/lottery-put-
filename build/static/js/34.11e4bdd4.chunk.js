(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{111:function(e,a,t){"use strict";var n=t(113),r=t(2),l=t.n(r);Object(n.a)({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},112:function(e,a,t){"use strict";var n=t(40),r=t(16),l=t(4),c=t.n(l),o=t(1),s=t.n(o),i=(t(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,l=e.className,o=e.type,m=Object(r.a)(e,["tag","className","type"]),u=c()(Object(n.a)({},o,!!o),l);return a=t||(!t&&i[o]?i[o]:"p"),s.a.createElement(a,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},a.a=m},114:function(e,a,t){"use strict";var n=t(16),r=t(1),l=t.n(r),c=(t(111),t(18)),o=t(112),s=c.a.create("page"),i=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,i=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=s.b("px-3",c);return l.a.createElement(r,Object.assign({className:u},m),l.a.createElement("div",{className:s.e("header")},a&&"string"===typeof a?l.a.createElement(o.a,{type:"h4",className:s.e("title")},a):a,t&&t),i)};i.defaultProps={tag:"div",title:""},a.a=i},159:function(e,a,t){"use strict";t.r(a);var n=t(116),r=t.n(n),l=t(117),c=t(115),o=t(114),s=t(1),i=t.n(s),m=t(105),u=t(92),p=t(106),d=t(124),f=t(125),E=t(126),h=t(127),y=t(121),b=t(122),g=t(94),O=t(95),v=t(97),N=t(96),k=t(123),j=t(20),x=t(38),w=t(112),S=t(18).a.create("page");a.default=function(e){var a=Object(s.useState)(!0),t=Object(c.a)(a,2),n=t[0],C=t[1],J=Object(s.useState)([]),I=Object(c.a)(J,2),T=I[0],P=I[1],_=Object(s.useState)(-1),q=Object(c.a)(_,2),z=q[0],A=q[1],D=Object(s.useState)(1),F=Object(c.a)(D,2),R=F[0],W=F[1],B=Object(s.useState)(1),G=Object(c.a)(B,2),M=G[0],H=G[1];return Object(s.useEffect)(function(){Object(l.a)(r.a.mark(function a(){var t,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/complaints-admin/"+R,{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:if(401==(t=a.sent).status&&e.history.push("/login"),a.prev=4,!(t.status<400)){a.next=12;break}return a.next=8,t.json();case 8:n=a.sent,P(n.data),W(parseInt(n.page)),H(parseInt(n.last_page));case 12:a.next=16;break;case 14:a.prev=14,a.t0=a.catch(4);case 16:case"end":return a.stop()}},a,null,[[4,14]])}))()},[R]),i.a.createElement(o.a,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{to:"/my"},i.a.createElement(w.a,{type:"h4",className:S.e("title")},i.a.createElement(j.a,null)," Admin Complaint"))),className:"MyPage"},i.a.createElement(m.a,{style:{flexFlow:"row wrap",justifyContent:"space-between"},className:"category-bar"},i.a.createElement(u.a,{className:!0===n&&"btn-active",color:"link",onClick:function(){return C(!0)}},"Completed"),i.a.createElement(u.a,{className:!1===n&&"btn-active",color:"link",onClick:function(){return C(!1)}},"Wait")),i.a.createElement(m.a,null,i.a.createElement(p.a,{md:12},T&&T.length>0?T.filter(function(e){return e.status===n}).map(function(e,a){return i.a.createElement(u.a,{tag:"a",className:"form-control",color:"link",onClick:(t=e._id,function(){A(T.findIndex(function(e){return e._id===t}))}),key:a,style:{marginBottom:"0rem"}},e.category,"-",e.period);var t}):"")),i.a.createElement(m.a,null,i.a.createElement(p.a,{md:12},i.a.createElement(d.a,{size:"sm","aria-label":"Page navigation example"},R>1?i.a.createElement(f.a,null,i.a.createElement(E.a,{previous:!0,onClick:function(){return W(1)}})):"",R>1?i.a.createElement(f.a,null,i.a.createElement(E.a,{onClick:function(){return W(R-1)}},R-1)):"",i.a.createElement(f.a,{active:!0},i.a.createElement(E.a,null,R)),R<M?i.a.createElement(f.a,null,i.a.createElement(E.a,{onClick:function(){return W(R+1)}},R+1)):"",R<M?i.a.createElement(f.a,null,i.a.createElement(E.a,{next:!0,onClick:function(){return W(M)}})):""))),i.a.createElement(h.a,{isOpen:-1!==z,toggle:function(){return A(-1)}},i.a.createElement(y.a,{toggle:function(){return A(-1)}},"Complaint & Suggestion"),z>-1&&T[z]?i.a.createElement(b.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{md:12},i.a.createElement(g.a,null,i.a.createElement(O.a,null,i.a.createElement(v.a,{for:"exampleSelect1"},"category"),i.a.createElement(N.a,{type:"text",disabled:!0,id:"exampleSelect1",className:"form-control",value:T[z].category})),i.a.createElement(O.a,null,i.a.createElement(v.a,{for:"period1"},"Period ID"),i.a.createElement(N.a,{type:"text",disabled:!0,value:T[z].period,name:"period",id:"period1",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(v.a,{for:"whatsapp1"},"Whatsapp Number"),i.a.createElement(N.a,{type:"text",disabled:!0,value:T[z].whatsapp,name:"whatsapp",id:"whatsapp1",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(v.a,{for:"content1"},"Content"),i.a.createElement(N.a,{type:"textarea",disabled:!0,value:T[z].content,name:"content",id:"content1",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(v.a,{for:"reply"},"Reply"),i.a.createElement(N.a,{disabled:T[z].status>0?"disabled":"",type:"textarea",value:T[z].reply,onChange:function(e){var a=JSON.parse(JSON.stringify(T));a[z].reply=e.target.value,P(a)},name:"reply",id:"reply",className:"form-control"})))))):"",i.a.createElement(k.a,null,i.a.createElement(u.a,{color:"primary",onClick:function(){return a=z,void Object(l.a)(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/complaints-admin",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({id:T[a]._id,reply:T[a].reply})});case 2:401==t.sent.status&&e.history.push("/login"),(n=JSON.parse(JSON.stringify(T)))[a].status=!0,P(n),A(-1);case 8:case"end":return t.stop()}},t)}))();var a}},"Ok"),i.a.createElement(u.a,{color:"secondary",onClick:function(){return A(-1)}},"Close"))))}}}]);
//# sourceMappingURL=34.11e4bdd4.chunk.js.map