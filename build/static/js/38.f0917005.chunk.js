(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{111:function(e,a,t){"use strict";var n=t(113),r=t(2),l=t.n(r);Object(n.a)({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},112:function(e,a,t){"use strict";var n=t(40),r=t(16),l=t(4),c=t.n(l),s=t(1),o=t.n(s),i=(t(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,l=e.className,s=e.type,u=Object(r.a)(e,["tag","className","type"]),m=c()(Object(n.a)({},s,!!s),l);return a=t||(!t&&i[s]?i[s]:"p"),o.a.createElement(a,Object.assign({},u,{className:m}))};u.defaultProps={type:"p"},a.a=u},114:function(e,a,t){"use strict";var n=t(16),r=t(1),l=t.n(r),c=(t(111),t(19)),s=t(112),o=c.a.create("page"),i=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,i=e.children,u=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),m=o.b("px-3",c);return l.a.createElement(r,Object.assign({className:m},u),l.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?l.a.createElement(s.a,{type:"h4",className:o.e("title")},a):a,t&&t),i)};i.defaultProps={tag:"div",title:""},a.a=i},160:function(e,a,t){"use strict";t.r(a);var n=t(116),r=t.n(n),l=t(117),c=t(115),s=t(114),o=t(1),i=t.n(o),u=t(105),m=t(106),d=t(96),p=t(92),E=t(124),f=t(125),h=t(126),g=t(127),b=t(121),y=t(122),v=t(94),O=t(95),N=t(97),x=t(123),w=t(17),k=t(38),j=t(112),S=t(19).a.create("page");a.default=function(e){var a=Object(o.useState)(2),t=Object(c.a)(a,2),n=t[0],_=t[1],I=Object(o.useState)([]),D=Object(c.a)(I,2),J=D[0],C=D[1],A=Object(o.useState)(-1),P=Object(c.a)(A,2),T=P[0],W=P[1],F=Object(o.useState)(1),R=Object(c.a)(F,2),L=R[0],U=R[1],z=Object(o.useState)(1),q=Object(c.a)(z,2),B=q[0],G=q[1],M=function(){var e=Object(l.a)(r.a.mark(function e(a,t){var n,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/withdrawl-admin",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({id:J[a]._id,status:t})});case 2:(n=e.sent).status<400&&1==t?(alert("Withdrew successfully!"),(l=JSON.parse(JSON.stringify(J))).splice(a,1),C(l)):n.status<400?(alert("Declined successfully!"),(l=JSON.parse(JSON.stringify(J))).splice(a,1),C(l)):n.status>=400&&1==t?(alert("Failed in withdrawal!"),(l=JSON.parse(JSON.stringify(J))).splice(a,1),C(l)):alert("Failed in decline!"),W(-1);case 5:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(r.a.mark(function e(){var a,t,l,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/withdrawl-admin-download/".concat(n),{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return a=e.sent,e.next=5,a.json();case 5:for(t=e.sent,l="orderID  User  Amount Status\n",c=0;c<t.length;c++)l+=t[c]._id+"\t"+t[c].user.phone+"\t"+t[c].order_amount+"\t"+(0==t[c].status?"Waiting":1==t[c].status?"Success":-1==t[c].status?"Declined":"Failed"),l+="\n";s=document.createElement("a"),o=new Blob([l],{type:"application/text"}),s.href=URL.createObjectURL(o),s.download="Withdrawals.txt",document.body.appendChild(s),s.click();case 14:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(function(){Object(l.a)(r.a.mark(function a(){var t,l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),a.next=3,fetch("/api/withdrawl-admin/".concat(n,"/").concat(L),{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 3:if(401==(t=a.sent).status&&e.history.push("/login"),a.prev=5,!(t.status<400)){a.next=14;break}return a.next=9,t.json();case 9:return l=a.sent,a.next=12,C(l.data);case 12:U(parseInt(l.page)),G(parseInt(l.last_page));case 14:a.next=18;break;case 16:a.prev=16,a.t0=a.catch(5);case 18:case"end":return a.stop()}},a,null,[[5,16]])}))()},[n,L]),i.a.createElement(s.a,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{to:"/my"},i.a.createElement(j.a,{type:"h4",className:S.e("title")},i.a.createElement(w.a,null)," Admin Withdrawal"))),className:"MyPage"},i.a.createElement(u.a,null,i.a.createElement(m.a,{md:12},i.a.createElement(d.a,{type:"select",value:n,onChange:function(e){return _(e.target.value)}},i.a.createElement("option",{value:"2"},"All"),i.a.createElement("option",{value:"0"},"Waiting"),i.a.createElement("option",{value:"1"},"Succeed"),i.a.createElement("option",{value:"-1"},"Delined"),i.a.createElement("option",{value:"-2"},"Failed")))),i.a.createElement(u.a,null,i.a.createElement(m.a,{md:12},i.a.createElement(p.a,{color:"primary",onClick:H},"Download"))),i.a.createElement(u.a,null,i.a.createElement(m.a,{md:12},J&&J.length>0?J.map(function(e,a){return i.a.createElement(p.a,{tag:"a",className:"form-control",color:"link",onClick:(t=a,function(){W(t)}),key:a,style:{marginBottom:"0rem",height:"70px"}},e.userPhone,",   ",e.userNickname," : \u20b9 ",e.order_amount,i.a.createElement("br",null)," ( ",e._id," )",i.a.createElement("span",{style:{float:"right"}},0==e.status?i.a.createElement(w.i,{className:"text-warning"}):1==e.status?i.a.createElement(w.l,{className:"text-success"}):(e.status,i.a.createElement(w.y,{className:"text-danger"}))));var t}):"")),i.a.createElement(u.a,null,i.a.createElement(m.a,{md:12},i.a.createElement(E.a,{size:"sm","aria-label":"Page navigation example"},L>1?i.a.createElement(f.a,null,i.a.createElement(h.a,{previous:!0,onClick:function(){return U(1)}})):"",L>1?i.a.createElement(f.a,null,i.a.createElement(h.a,{onClick:function(){return U(L-1)}},L-1)):"",i.a.createElement(f.a,{active:!0},i.a.createElement(h.a,null,L)),L<B?i.a.createElement(f.a,null,i.a.createElement(h.a,{onClick:function(){return U(L+1)}},L+1)):"",L<B?i.a.createElement(f.a,null,i.a.createElement(h.a,{next:!0,onClick:function(){return U(B)}})):""))),i.a.createElement(u.a,null,i.a.createElement("div",{style:{height:"60px"}})),i.a.createElement(g.a,{isOpen:-1!==T,toggle:function(){return W(-1)}},i.a.createElement(b.a,{toggle:function(){return W(-1)}},"Withdrawal Information"),T>-1&&J[T]?i.a.createElement(y.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,{md:12},i.a.createElement(v.a,null,i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"orderID"},"Order ID"),i.a.createElement(d.a,{type:"text",disabled:!0,id:"orderID",className:"form-control",value:J[T]._id})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"exampleSelect1"},"User Phone"),i.a.createElement(d.a,{type:"text",disabled:!0,id:"exampleSelect1",className:"form-control",value:J[T].userPhone})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"status"},"Status"),i.a.createElement(d.a,{type:"text",disabled:!0,value:0==J[T].status?"Waiting":1==J[T].status?"Completed":-1==J[T].status?"Declined":"Failed",name:"status",id:"status",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"period1"},"Amount"),i.a.createElement(d.a,{type:"text",disabled:!0,value:J[T].order_amount,name:"order_amount",id:"order_amount",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"bank_code"},"Bank Name"),i.a.createElement(d.a,{type:"text",disabled:!0,value:J[T].bank_code,name:"bank_code",id:"bank_code",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"province"},"Province"),i.a.createElement(d.a,{type:"text",disabled:!0,value:J[T].province,name:"province",id:"province",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"acc_no"},"Account No"),i.a.createElement(d.a,{type:"text",disabled:!0,value:J[T].acc_no,name:"acc_no",id:"acc_no",className:"form-control"})),i.a.createElement(O.a,null,i.a.createElement(N.a,{for:"acc_name"},"Account Name"),i.a.createElement(d.a,{type:"text",disabled:!0,value:J[T].acc_name,name:"acc_name",id:"acc_name",className:"form-control"}))))),0==J[T].status?i.a.createElement(u.a,null,i.a.createElement(p.a,{style:{width:"130px",marginLeft:"auto",marginRight:"auto"},color:"primary",onClick:function(){return M(T,1)}},"Approve"),i.a.createElement(p.a,{style:{width:"130px",marginLeft:"auto",marginRight:"auto"},color:"secondary",onClick:function(){return M(T,-1)}},"Decline")):"",i.a.createElement("br",null),i.a.createElement(u.a,null,i.a.createElement(k.a,{style:{marginLeft:"auto",marginRight:"auto"},color:"success",to:"/user/"+J[T].userId},"User Information"))):"",i.a.createElement(x.a,null)))}}}]);
//# sourceMappingURL=38.f0917005.chunk.js.map