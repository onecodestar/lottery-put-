(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,a,t){"use strict";var n=t(113),r=t(2),l=t.n(r);Object(n.a)({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},112:function(e,a,t){"use strict";var n=t(40),r=t(16),l=t(4),c=t.n(l),o=t(1),m=t.n(o),s=(t(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,l=e.className,o=e.type,i=Object(r.a)(e,["tag","className","type"]),u=c()(Object(n.a)({},o,!!o),l);return a=t||(!t&&s[o]?s[o]:"p"),m.a.createElement(a,Object.assign({},i,{className:u}))};i.defaultProps={type:"p"},a.a=i},114:function(e,a,t){"use strict";var n=t(16),r=t(1),l=t.n(r),c=(t(111),t(18)),o=t(112),m=c.a.create("page"),s=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,s=e.children,i=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=m.b("px-3",c);return l.a.createElement(r,Object.assign({className:u},i),l.a.createElement("div",{className:m.e("header")},a&&"string"===typeof a?l.a.createElement(o.a,{type:"h4",className:m.e("title")},a):a,t&&t),s)};s.defaultProps={tag:"div",title:""},a.a=s},136:function(e,a,t){"use strict";t.r(a);var n=t(116),r=t.n(n),l=t(113),c=t(117),o=t(115),m=t(114),s=t(1),i=t.n(s),u=t(105),g=t(106),p=t(92),d=t(104),h=t(107),E=t(125),f=t(124),N=t(121),b=t(122),O=t(94),y=t(95),k=t(96),S=t(123),v=t(20),j=t(38);a.default=function(e){var a=Object(s.useState)(!1),t=Object(o.a)(a,2),n=t[0],w=t[1],x=Object(s.useState)(!1),C=Object(o.a)(x,2),I=C[0],J=C[1],A=Object(s.useState)({isOpen:!1,name:JSON.parse(localStorage.getItem("auth")).user.nickname}),P=Object(o.a)(A,2),R=P[0],T=P[1];return Object(s.useEffect)(function(){Object(c.a)(r.a.mark(function a(){var t,n,l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/budget",{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return 401==(t=a.sent).status&&e.history.push("/login"),a.next=6,t.json();case 6:n=a.sent,(l=JSON.parse(localStorage.getItem("auth"))).user.budget=n.budget,localStorage.setItem("auth",JSON.stringify(l));case 10:case"end":return a.stop()}},a)}))()},[]),i.a.createElement(m.a,{className:"MyPage"},i.a.createElement(u.a,null,i.a.createElement(g.a,{xl:12,lg:12,md:12,style:{backgroundColor:"#774FaF",color:"white"}},i.a.createElement("div",{className:"mt-2"},i.a.createElement("div",{className:"mr-3",style:{float:"left",overflow:"hidden",width:"50px",height:"50px",borderRadius:"50px",backgroundColor:"#424242"}},i.a.createElement("div",{style:{width:"50px",height:"50px",backgroundSize:"cover",backgroundImage:"url('/img/avatar.svg')",backgroundPosition:"center center;"}})),i.a.createElement("span",{className:"mt-2",style:{fontWeight:"200"}},"User: ",R.name),i.a.createElement("br",null),i.a.createElement("span",{style:{fontWeight:"200"}},"ID: ",JSON.parse(localStorage.getItem("auth")).user._id)),i.a.createElement("div",{style:{clear:"both",padding:"0 12px",fontSize:"1.4rem"}},"Mobile: ",JSON.parse(localStorage.getItem("auth")).user.phone),i.a.createElement("div",{style:{padding:"0 12px",fontSize:"1.4rem"}},"Available Balance: \u20b9",JSON.parse(localStorage.getItem("auth")).user.budget," "),i.a.createElement("div",{style:{padding:"0 12px"}},i.a.createElement(j.a,{className:"btn btn-primary",color:"link",to:"/my/recharge"},"Recharge"),"\xa0",i.a.createElement(p.a,{onClick:function(){return T(Object(l.a)({},R,{isOpen:!0}))},color:"warning"},"Change Nick Name")))),i.a.createElement(u.a,null,i.a.createElement(g.a,{xl:12,lg:12,md:12},JSON.parse(localStorage.getItem("auth")).user.admin?i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{className:"form-control",color:"link",to:"/users"},i.a.createElement(v.C,{className:"mr-3"})," Admin Users"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/complaint-admin"},i.a.createElement(v.C,{className:"mr-3"})," Admin Complaints"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/recharge-admin"},i.a.createElement(v.C,{className:"mr-3"})," Admin Recharge"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/withdrawl-admin"},i.a.createElement(v.C,{className:"mr-3"})," Admin Withdrawl"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/reward-admin"},i.a.createElement(v.c,{className:"mr-3"})," Admin Rewards")):"",i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/promotion"},i.a.createElement(v.t,{className:"mr-3"})," Promotion"),i.a.createElement(p.a,{tag:"a",className:"form-control",color:"link",onClick:function(){return w(!n)},style:{marginBottom:"0rem"}},i.a.createElement(v.D,{className:"mr-3"})," Wallet"),i.a.createElement(d.a,{isOpen:n},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/recharge"},"Recharge"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/withdrawl"},"Withdrawl")))),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/bank"},i.a.createElement(v.e,{className:"mr-3"})," Bank Card"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/account"},i.a.createElement(v.s,{className:"mr-3"})," Acount Security"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/complaint"},i.a.createElement(v.v,{className:"mr-3"})," Complaints & Suggetions"),i.a.createElement(p.a,{tag:"a",className:"form-control",color:"link",onClick:function(){return J(!I)},style:{marginBottom:"0rem"}},i.a.createElement(v.k,{className:"mr-3"})," About"),i.a.createElement(d.a,{isOpen:I},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/policy"},"Privacy Policy"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/my/agreement"},"Risk Disclosure Agreement")))),i.a.createElement(j.a,{className:"form-control logout",color:"link",to:"/logout"},i.a.createElement(v.u,{className:"mr-3"})," LogOut"))),i.a.createElement(u.a,null,i.a.createElement("div",{style:{height:"100px"}})),i.a.createElement(f.a,{isOpen:R.isOpen,toggle:function(){return T(Object(l.a)({},R,{isOpen:!1}))}},i.a.createElement(N.a,{toggle:function(){return T(Object(l.a)({},R,{isOpen:!1}))}},"Change Nick Name"),i.a.createElement(b.a,null,i.a.createElement(u.a,null,i.a.createElement(g.a,{md:12},i.a.createElement(O.a,null,i.a.createElement(y.a,null,i.a.createElement(k.a,{type:"text",onChange:function(e){T(Object(l.a)({},R,{name:e.target.value}))},id:"exampleSelect1",className:"form-control",value:R.name})))))),i.a.createElement(S.a,null,i.a.createElement(p.a,{color:"primary",onClick:function(){Object(c.a)(r.a.mark(function a(){var t;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/nickname",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({nickname:R.name})});case 2:401==a.sent.status&&e.history.push("/login"),(t=JSON.parse(localStorage.getItem("auth"))).user.nickname=R.name,localStorage.setItem("auth",JSON.stringify(t)),T(Object(l.a)({},R,{isOpen:!1}));case 8:case"end":return a.stop()}},a)}))()}},"Ok"),i.a.createElement(p.a,{color:"secondary",onClick:function(){return T(Object(l.a)({},R,{isOpen:!1}))}},"Close"))))}}}]);
//# sourceMappingURL=44.3f45c562.chunk.js.map