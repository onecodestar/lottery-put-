(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,a,t){"use strict";var n=t(113),r=t(2),c=t.n(r);Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},112:function(e,a,t){"use strict";var n=t(40),r=t(16),c=t(4),l=t.n(c),o=t(1),s=t.n(o),i=(t(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,c=e.className,o=e.type,m=Object(r.a)(e,["tag","className","type"]),u=l()(Object(n.a)({},o,!!o),c);return a=t||(!t&&i[o]?i[o]:"p"),s.a.createElement(a,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},a.a=m},114:function(e,a,t){"use strict";var n=t(16),r=t(1),c=t.n(r),l=(t(111),t(18)),o=t(112),s=l.a.create("page"),i=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,l=e.className,i=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=s.b("px-3",l);return c.a.createElement(r,Object.assign({className:u},m),c.a.createElement("div",{className:s.e("header")},a&&"string"===typeof a?c.a.createElement(o.a,{type:"h4",className:s.e("title")},a):a,t&&t),i)};i.defaultProps={tag:"div",title:""},a.a=i},161:function(e,a,t){"use strict";t.r(a);var n=t(116),r=t.n(n),c=t(117),l=t(115),o=t(114),s=t(1),i=t.n(s),m=t(105),u=t(106),d=t(92),p=t(124),f=t(121),h=t(122),E=t(94),g=t(95),y=t(97),b=t(96),N=t(123),O=t(20),v=t(38),w=t(112),j=t(18).a.create("page");a.default=function(e){var a=Object(s.useState)(!0),t=Object(l.a)(a,2),n=(t[0],t[1],Object(s.useState)([])),k=Object(l.a)(n,2),x=k[0],S=k[1],_=Object(s.useState)(-1),J=Object(l.a)(_,2),I=J[0],A=J[1],T=function(e,a){Object(c.a)(r.a.mark(function t(){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/withdrawl-admin",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({id:x[e]._id,status:a})});case 2:(n=t.sent).status<400&&1==a?(alert("Withdrew successfully!"),(c=JSON.parse(JSON.stringify(x))).splice(e,1),S(c)):n.status<400?(alert("Declined successfully!"),(c=JSON.parse(JSON.stringify(x))).splice(e,1),S(c)):n.status>=400&&1==a?(alert("Failed in withdrawal!"),(c=JSON.parse(JSON.stringify(x))).splice(e,1),S(c)):alert("Failed in decline!"),A(-1);case 5:case"end":return t.stop()}},t)}))()};return Object(s.useEffect)(function(){Object(c.a)(r.a.mark(function a(){var t,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/withdrawl-admin",{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return 401==(t=a.sent).status&&e.history.push("/login"),a.next=6,t.json();case 6:return n=a.sent,a.next=9,S(n.data);case 9:case"end":return a.stop()}},a)}))()},[]),i.a.createElement(o.a,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{to:"/my"},i.a.createElement(w.a,{type:"h4",className:j.e("title")},i.a.createElement(O.a,null)," Admin Withdrawl"))),className:"MyPage"},i.a.createElement(m.a,null,i.a.createElement(u.a,{md:12},x&&x.length>0?x.map(function(e,a){return i.a.createElement(d.a,{tag:"a",className:"form-control",color:"link",onClick:(t=a,function(){A(t)}),key:a,style:{marginBottom:"0rem"}},e.userPhone,"-",e.userNickname," : \u20b9 ",e.amount,i.a.createElement("span",{style:{float:"right"}},0==e.status?i.a.createElement(O.j,{style:{color:"gold"}}):""));var t}):"")),i.a.createElement(p.a,{isOpen:-1!==I,toggle:function(){return A(-1)}},i.a.createElement(f.a,{toggle:function(){return A(-1)}},"Withdrawl Information"),I>-1&&x[I]?i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:12},i.a.createElement(E.a,null,i.a.createElement(g.a,null,i.a.createElement(y.a,{for:"exampleSelect1"},"User ID"),i.a.createElement(b.a,{type:"text",disabled:!0,id:"exampleSelect1",className:"form-control",value:x[I].userId})),i.a.createElement(g.a,null,i.a.createElement(y.a,{for:"period1"},"Amount"),i.a.createElement(b.a,{type:"text",disabled:!0,value:x[I].order_amount,name:"order_amount",id:"order_amount",className:"form-control"})),i.a.createElement(g.a,null,i.a.createElement(y.a,{for:"bank_code"},"Bank Name"),i.a.createElement(b.a,{type:"text",disabled:!0,value:x[I].bank_code,name:"bank_code",id:"bank_code",className:"form-control"})),i.a.createElement(g.a,null,i.a.createElement(y.a,{for:"province"},"Province"),i.a.createElement(b.a,{type:"text",disabled:!0,value:x[I].province,name:"province",id:"province",className:"form-control"})),i.a.createElement(g.a,null,i.a.createElement(y.a,{for:"acc_no"},"Account No"),i.a.createElement(b.a,{type:"text",disabled:!0,value:x[I].acc_no,name:"acc_no",id:"acc_no",className:"form-control"})),i.a.createElement(g.a,null,i.a.createElement(y.a,{for:"acc_name"},"Account Name"),i.a.createElement(b.a,{type:"text",disabled:!0,value:x[I].acc_name,name:"acc_name",id:"acc_name",className:"form-control"}))))),i.a.createElement(m.a,null,i.a.createElement(d.a,{style:{width:"130px",marginLeft:"auto",marginRight:"auto"},color:"primary",onClick:function(){return T(I,1)}},"Approve"),i.a.createElement(d.a,{style:{width:"130px",marginLeft:"auto",marginRight:"auto"},color:"secondary",onClick:function(){return T(I,-1)}},"Decline")),i.a.createElement("br",null),i.a.createElement(m.a,null,i.a.createElement(v.a,{style:{marginLeft:"auto",marginRight:"auto"},color:"success",to:"/user/"+x[I].userId},"User Information"))):"",i.a.createElement(N.a,null)))}}}]);
//# sourceMappingURL=39.af211759.chunk.js.map