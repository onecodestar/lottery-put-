(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(e,t,n){"use strict";var a,o=n(4),r=n.n(o),c=(a="cr",{create:function(e){var t=e;return"string"===typeof a&&(t="".concat(a,"-").concat(e)),{b:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return r()(t,n)},e:function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return r()("".concat(t,"__").concat(e),a)},m:function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return r()("".concat(t,"--").concat(e),a)}}}});t.a=c},25:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(91);t.a=function(e){var t=e.color,n=void 0===t?"primary":t;return o.a.createElement("div",{className:"cr-page-spinner"},o.a.createElement(r.a,{color:n}))}},28:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}}},29:function(e,t,n){e.exports=n.p+"static/media/logo_200.6aae29ef.png"},39:function(e,t,n){e.exports=n.p+"static/media/sidebar-4.80d4a4e5.jpg"},41:function(e,t,n){"use strict";function a(e){var t=!1;return{cancel:function(){t=!0},setState:function(n){t||e.setState(n)}}}n.d(t,"a",function(){return a})},53:function(e,t,n){e.exports=n(90)},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(23),c=n.n(r),i=n(9),s=n(10),l=n(12),u=n(11),m=n(13),p=n(26),h=n(29),d=n.n(h),f=n(38),g=n(94),b=n(95),y=n(96),E=n(97),S=n(92),P=n(27),x=n.n(P),v=n(6),k=n(25),w=n(41),C=n(28),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={phone:"",password:"",confirmPassword:"",recommendationCode:n.props.params,confirmPWDErr:!1,inProgress:!1,agree:!1,verify:"",otpProgress:!1},n.changeAuthState=function(e){return function(t){t.preventDefault(),n.props.onChangeAuthState(e)}},n.sendOTP=function(){n.setter.setState({otpProgress:!0}),fetch("/api/phone",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:localStorage.getItem("phone")})}).then(function(e){n.setter.setState({otpProgress:!1}),e.status<400?e.json().then(function(e){}).catch(function(){}):e.json().then(function(e){n.notificationSystem.addNotification({title:o.a.createElement(v.A,null),message:e.error,level:"info"})}).catch(function(){})}).catch(function(){})},n.handleSubmit=function(e){e.preventDefault(),n.props.authState===j?(n.setter.setState({inProgress:!0}),fetch("/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:n.state.phone,password:n.state.password})}).then(function(e){e.status<400?e.json().then(function(e){localStorage.setItem("auth",JSON.stringify(e)),n.setter.setState({inProgress:!1}),n.props.onSubmit()}):e.json().then(function(e){"1"==e.error?(localStorage.setItem("phone",e.phone),n.props.onChangeAuthState(N)):(n.setter.setState({inProgress:!1}),n.notificationSystem.addNotification({title:o.a.createElement(v.A,null),message:e.error,level:"info"}))})})):n.props.authState===I?!n.state.confirmPWDErr&&""!==n.state.phone&&""!==n.state.recommendationCode&&n.state.agree&&(n.setter.setState({inProgress:!0}),fetch("/api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:n.state.phone,password:n.state.password,recommendationCode:n.state.recommendationCode})}).then(function(e){e.status<400?(n.setter.setState({inProgress:!1}),e.json().then(function(e){localStorage.setItem("phone",n.state.phone),n.props.onChangeAuthState(N)})):e.json().then(function(e){n.setter.setState({inProgress:!1}),n.notificationSystem.addNotification({title:o.a.createElement(v.A,null),message:e.error,level:"info"})})})):n.props.authState===A?(n.setter.setState({inProgress:!0}),fetch("/api/phone",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:n.state.phone})}).then(function(e){e.status<400?e.json().then(function(e){localStorage.setItem("phone",n.state.phone),n.props.onChangeAuthState(N)}).catch(function(){}):e.json().then(function(e){n.setter.setState({inProgress:!1}),n.notificationSystem.addNotification({title:o.a.createElement(v.A,null),message:e.error,level:"info"})}).catch(function(){})}).catch(function(){})):(n.setter.setState({inProgress:!0}),fetch("/api/verify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:localStorage.getItem("phone"),otp:n.state.verify})}).then(function(e){e.status<400?e.json().then(function(e){localStorage.clear(),localStorage.setItem("auth",JSON.stringify(e)),n.setter.setState({inProgress:!1}),n.props.onSubmit()}):e.json().then(function(e){n.setter.setState({inProgress:!1}),n.notificationSystem.addNotification({title:o.a.createElement(v.A,null),message:e.error,level:"info"})})}))},n.changePhone=function(e){n.setter.setState({phone:e.target.value})},n.changeVerify=function(e){n.setter.setState({verify:e.target.value})},n.changePassword=function(e){e.target.value!==n.state.confirmPassword?n.setter.setState({confirmPWDErr:!0,password:e.target.value}):n.setter.setState({confirmPWDErr:!1,password:e.target.value})},n.changeConfirmPassword=function(e){e.target.value!==n.state.password?n.setter.setState({confirmPWDErr:!0,confirmPassword:e.target.value}):n.setter.setState({confirmPWDErr:!1,confirmPassword:e.target.value})},n.changeRecommendationCdoe=function(e){n.setter.setState({recommendationCode:e.target.value})},n.onChangeAgree=function(){console.log(n.state.agree),n.setter.setState({agree:!n.state.agree})},n.setter=Object(w.a)(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setter.cancel()}},{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this,t=this.props,n=t.showLogo,a=t.usernameInputProps,r=t.passwordInputProps,c=t.confirmPasswordInputProps,i=t.children,s=t.onLogoClick,l=t.recommendationCodeInputProps;return this.state.inProgress?o.a.createElement(k.a,null):this.isPhone||this.isVerify?o.a.createElement(g.a,null,n&&o.a.createElement("div",{className:"text-center pb-4"},o.a.createElement("img",{src:d.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:s})),this.isPhone?o.a.createElement(b.a,null,o.a.createElement(y.a,{type:"text",placeholder:"Please type your phone number",value:this.state.phone,onChange:this.changePhone})):o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null,o.a.createElement(S.a,{onClick:this.sendOTP,color:"success"},this.otpProgress?o.a.createElement(k.a,null):"Resend OTP")),o.a.createElement(b.a,null,o.a.createElement(y.a,{type:"text",placeholder:"Please type the letters on your phone.",value:this.state.verify,onChange:this.changeVerify}))),o.a.createElement("hr",null),this.isPhone?o.a.createElement(S.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},"OK"):o.a.createElement(S.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},"Verify"),i,o.a.createElement(x.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:C.a})):o.a.createElement(g.a,{onSubmit:this.handleSubmit},n&&o.a.createElement("div",{className:"text-center pb-4"},o.a.createElement("img",{src:d.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:s})),o.a.createElement(b.a,null,o.a.createElement(y.a,Object.assign({},a,{onChange:this.changePhone,value:this.state.phone}))),o.a.createElement(b.a,null,o.a.createElement(y.a,Object.assign({},r,{onChange:this.changePassword,value:this.state.password}))),this.isSignup&&o.a.createElement(b.a,null,o.a.createElement(y.a,Object.assign({},c,{onChange:this.changeConfirmPassword,value:this.state.confirmPassword})),this.state.confirmPWDErr&&o.a.createElement("span",{className:"text-danger"},"password not match")),this.isSignup&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null,o.a.createElement(y.a,Object.assign({type:"text"},l,{value:this.state.recommendationCode,onChange:this.changeRecommendationCdoe})))),this.isSignup&&o.a.createElement(b.a,{check:!0},o.a.createElement(E.a,{check:!0},o.a.createElement(y.a,{type:"checkbox",checked:this.state.agree,onChange:this.onChangeAgree})," ","Agree the ",o.a.createElement(f.a,{to:"/policy"},"terms and policy"))),o.a.createElement("hr",null),o.a.createElement(S.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),o.a.createElement("div",{className:"text-center pt-1"},o.a.createElement("h6",null,"or"),o.a.createElement("h6",null,this.isSignup?o.a.createElement("a",{href:"#login",onClick:this.changeAuthState(j)},"Login"):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(I)},"Signup"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(A)},"Forgot password.")))),i,o.a.createElement(x.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:C.a}))}},{key:"isLogin",get:function(){return this.props.authState===j}},{key:"isSignup",get:function(){return this.props.authState===I}},{key:"isPhone",get:function(){return this.props.authState===A}},{key:"isVerify",get:function(){return this.props.authState===N}}]),t}(o.a.Component),j="LOGIN",I="SIGNUP",A="PHONE",N="VERIFY";O.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Phone",usernameInputProps:{type:"string",placeholder:"your phone number"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},recommendationCodeLabel:"Recommendation Code",recommendationCodeInputProps:{type:"string",placeholder:"recommendation code"},onLogoClick:function(){}};var z=O,L=n(2),_=n.n(L),T=n(35),R=!!Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DESCRIPTION:"Elison Shop",REACT_APP_NAME:"Elison Shop",REACT_APP_SOURCE_URL:""}).REACT_APP_GOOGLE_ANALYTICS;R&&T.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DESCRIPTION:"Elison Shop",REACT_APP_NAME:"Elison Shop",REACT_APP_SOURCE_URL:""}).REACT_APP_GOOGLE_ANALYTICS);var D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){R&&(this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView))}},{key:"sendPageView",value:function(e){T.a.set({page:e.pathname}),T.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),t}(o.a.Component);D.contextTypes={router:_.a.object};var B=D,W=n(16),M=n(18),V=n(98),J=M.a.create("content"),U=function(e){var t=e.tag,n=e.className,a=Object(W.a)(e,["tag","className"]),r=J.b(n);return o.a.createElement(t,Object.assign({className:r},a))};U.defaultProps={tag:V.a};var G=U,F=function(e){var t=e.children,n=Object(W.a)(e,["children"]);return o.a.createElement("main",Object.assign({className:"cr-app bg-light"},n),o.a.createElement(G,{fluid:!0},t))},Y=n(103),H=n(99),K=n(100),q=n(101),Q=n(102),X=n(20),Z=M.a.create("footer"),$=function(){var e;return e=localStorage.getItem("auth")?[{to:"/",name:"Enjoy",exact:!0,Icon:X.w},{to:"/my",name:"My",exact:!1,Icon:X.x}]:[{to:"/",name:"Enjoy",exact:!0,Icon:X.w},{to:"/login",name:"My",exact:!1,Icon:X.x}],o.a.createElement(H.a,{className:"footer"},o.a.createElement(K.a,{navbar:!0},e.map(function(e,t){var n=e.to,a=e.name,r=e.exact,c=e.Icon;return o.a.createElement(q.a,{key:t,className:Z.e("nav-item")},o.a.createElement(Q.a,{id:"navItem-".concat(a,"-").concat(t),className:"text-uppercase",tag:Y.a,to:n,activeClassName:"active",exact:r},o.a.createElement(c,{className:Z.e("nav-item-icon")}),o.a.createElement("span",{className:""},a)))})))},ee=M.a.create("header"),te=(o.a.Component,n(51)),ne=function(e){var t=e.component,n=e.layout,a=Object(W.a)(e,["component","layout"]);return o.a.createElement(te.a,Object.assign({},a,{render:function(e){return o.a.createElement(n,null,o.a.createElement(t,e))}}))},ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleContentClick=function(e){},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){this.checkBreakpoint(this.props.breakpoint)}},{key:"checkBreakpoint",value:function(e){e}},{key:"openSidebar",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props.children;return o.a.createElement("main",{className:"cr-app bg-light"},o.a.createElement(G,{fluid:!0,onClick:this.handleContentClick},t,o.a.createElement($,null)),o.a.createElement(x.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:C.a}))}}],[{key:"isSidebarOpen",value:function(){}}]),t}(o.a.Component),oe=n(40),re=n(39),ce=n.n(re),ie=function(e){return o.a.createElement("a",Object.assign({href:"",target:"_blank",rel:"noopener noreferrer"},e))},se=n(104),le={backgroundImage:'url("'.concat(ce.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},ue=[{to:"/buttons",name:"buttons",exact:!1,Icon:v.s},{to:"/button-groups",name:"button groups",exact:!1,Icon:v.l},{to:"/forms",name:"forms",exact:!1,Icon:v.g},{to:"/input-groups",name:"input groups",exact:!1,Icon:v.z},{to:"/dropdowns",name:"dropdowns",exact:!1,Icon:v.d},{to:"/badges",name:"badges",exact:!1,Icon:v.u},{to:"/alerts",name:"alerts",exact:!1,Icon:v.p},{to:"/progress",name:"progress",exact:!1,Icon:v.f},{to:"/modals",name:"modals",exact:!1,Icon:v.y}],me=[{to:"/typography",name:"typography",exact:!1,Icon:v.w},{to:"/tables",name:"tables",exact:!1,Icon:v.e}],pe=[{to:"/login",name:"login / signup",exact:!1,Icon:v.c},{to:"/login-modal",name:"login modal",exact:!1,Icon:v.x}],he=[{to:"/",name:"dashboard",exact:!0,Icon:v.j},{to:"/cards",name:"cards",exact:!1,Icon:v.B},{to:"/charts",name:"charts",exact:!1,Icon:v.m},{to:"/widgets",name:"widgets",exact:!1,Icon:v.C}],de=M.a.create("sidebar"),fe=(o.a.Component,n(105)),ge=n(106),be=n(107),ye=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleAuthState=function(e){e===j?n.props.history.push("/login"):e===I?n.props.history.push("/signup"):e===A?n.props.history.push("/phone"):n.props.history.push("/verify")},n.handleLogoClick=function(){n.props.history.push("/")},n.handleSubmit=function(){void 0!==n.props.location.state?n.props.history.push(n.props.location.state.from):n.props.history.push({pathname:"/",state:{signin:!0}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(fe.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},o.a.createElement(ge.a,{md:6,lg:4},o.a.createElement(be.a,{body:!0},o.a.createElement(z,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick,onSubmit:this.handleSubmit,params:this.props.match.params.ref_code}))))}}]),t}(o.a.Component),Ee=n(49),Se=n.n(Ee),Pe=n(109),xe=n(110),ve=n(108),ke=(n(89),function(e){var t=e.component,n=Object(W.a)(e,["component"]);return o.a.createElement(te.a,Object.assign({},n,{render:function(e){return localStorage.getItem("auth")?o.a.createElement(t,e):o.a.createElement(ve.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),we=function(e){var t=e.component,n=Object(W.a)(e,["component"]);return o.a.createElement(te.a,Object.assign({},n,{render:function(e){return localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")).user.admin?o.a.createElement(t,e):o.a.createElement(ve.a,{to:{pathname:"/login"}}):o.a.createElement(ve.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Ce=o.a.lazy(function(){return Promise.all([n.e(9),n.e(41)]).then(n.bind(null,136))}),Oe=o.a.lazy(function(){return n.e(45).then(n.bind(null,137))}),je=(o.a.lazy(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,138))}),o.a.lazy(function(){return Promise.all([n.e(7),n.e(40)]).then(n.bind(null,140))})),Ie=o.a.lazy(function(){return n.e(21).then(n.bind(null,143))}),Ae=(o.a.lazy(function(){return Promise.all([n.e(4),n.e(39)]).then(n.bind(null,144))}),o.a.lazy(function(){return n.e(28).then(n.bind(null,148))})),Ne=o.a.lazy(function(){return Promise.all([n.e(0),n.e(43)]).then(n.bind(null,149))}),ze=o.a.lazy(function(){return Promise.all([n.e(0),n.e(44)]).then(n.bind(null,150))}),Le=o.a.lazy(function(){return n.e(19).then(n.bind(null,151))}),_e=o.a.lazy(function(){return n.e(17).then(n.bind(null,152))}),Te=o.a.lazy(function(){return n.e(32).then(n.bind(null,153))}),Re=o.a.lazy(function(){return Promise.all([n.e(10),n.e(37)]).then(n.bind(null,154))}),De=o.a.lazy(function(){return n.e(24).then(n.bind(null,155))}),Be=o.a.lazy(function(){return n.e(20).then(n.bind(null,176))}),We=o.a.lazy(function(){return n.e(26).then(n.bind(null,156))}),Me=o.a.lazy(function(){return Promise.all([n.e(11),n.e(38)]).then(n.bind(null,157))}),Ve=o.a.lazy(function(){return n.e(29).then(n.bind(null,158))}),Je=o.a.lazy(function(){return n.e(25).then(n.bind(null,159))}),Ue=o.a.lazy(function(){return Promise.all([n.e(12),n.e(33)]).then(n.bind(null,160))}),Ge=o.a.lazy(function(){return Promise.all([n.e(13),n.e(36)]).then(n.bind(null,161))}),Fe=o.a.lazy(function(){return Promise.all([n.e(5),n.e(35)]).then(n.bind(null,162))}),Ye=o.a.lazy(function(){return Promise.all([n.e(14),n.e(34)]).then(n.bind(null,163))}),He=o.a.lazy(function(){return Promise.all([n.e(8),n.e(42)]).then(n.bind(null,164))}),Ke=o.a.lazy(function(){return n.e(16).then(n.bind(null,168))}),qe=o.a.lazy(function(){return n.e(15).then(n.bind(null,169))}),Qe=o.a.lazy(function(){return n.e(18).then(n.bind(null,170))}),Xe=(o.a.lazy(function(){return n.e(22).then(n.bind(null,171))}),o.a.lazy(function(){return n.e(23).then(n.bind(null,172))}),o.a.lazy(function(){return n.e(27).then(n.bind(null,173))}),o.a.lazy(function(){return n.e(31).then(n.bind(null,174))}),o.a.lazy(function(){return n.e(30).then(n.bind(null,175))}),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(Pe.a,{basename:"/".concat("".split("/").pop())},o.a.createElement(B,null,o.a.createElement(xe.a,null,o.a.createElement(ne,{exact:!0,path:"/login",layout:F,component:function(e){return o.a.createElement(ye,Object.assign({},e,{authState:j}))}}),o.a.createElement(ne,{exact:!0,path:"/signup",layout:F,component:function(e){return o.a.createElement(ye,Object.assign({},e,{authState:I}))}}),o.a.createElement(ne,{exact:!0,path:"/signup/:ref_code",layout:F,component:function(e){return o.a.createElement(ye,Object.assign({},e,{authState:I}))}}),o.a.createElement(ne,{exact:!0,path:"/phone",layout:F,component:function(e){return o.a.createElement(ye,Object.assign({},e,{authState:A}))}}),o.a.createElement(ne,{exact:!0,path:"/verify",layout:F,component:function(e){return o.a.createElement(ye,Object.assign({},e,{authState:N}))}}),o.a.createElement(ae,{breakpoint:this.props.breakpoint},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(k.a,null)},o.a.createElement(ke,{exact:!0,path:"/",component:je}),o.a.createElement(te.a,{exact:!0,path:"/logout",component:Oe}),o.a.createElement(we,{exact:!0,path:"/enjoy-admin",component:Ie}),o.a.createElement(ke,{exact:!0,path:"/my",component:Ce}),o.a.createElement(ke,{exact:!0,path:"/my/order",component:Ae}),o.a.createElement(ke,{exact:!0,path:"/my/promotion",component:He}),o.a.createElement(ke,{exact:!0,path:"/my/recharge",component:Ne}),o.a.createElement(ke,{exact:!0,path:"/my/promotionList",component:Ke}),o.a.createElement(ke,{exact:!0,path:"/my/apply",component:qe}),o.a.createElement(ke,{exact:!0,path:"/my/referers",component:Qe}),o.a.createElement(ke,{exact:!0,path:"/my/withdrawl",component:ze}),o.a.createElement(ke,{exact:!0,path:"/my/withdrawlList",component:Le}),o.a.createElement(ke,{exact:!0,path:"/my/rechargeList",component:_e}),o.a.createElement(ke,{exact:!0,path:"/my/transaction",component:Te}),o.a.createElement(ke,{exact:!0,path:"/my/bank",component:Re}),o.a.createElement(ke,{exact:!0,path:"/my/address",component:De}),o.a.createElement(ke,{exact:!0,path:"/my/account",component:Be}),o.a.createElement(ke,{exact:!0,path:"/my/app",component:We}),o.a.createElement(ke,{exact:!0,path:"/my/complaint",component:Me}),o.a.createElement(we,{exact:!0,path:"/complaint-admin",component:Ue}),o.a.createElement(we,{exact:!0,path:"/withdrawl-admin",component:Ge}),o.a.createElement(we,{exact:!0,path:"/reward-admin",component:Fe}),o.a.createElement(te.a,{exact:!0,path:"/my/policy",component:Ve}),o.a.createElement(ke,{exact:!0,path:"/my/agreement",component:Je}),o.a.createElement(we,{exact:!0,path:"/recharge-admin",component:Ye}))),o.a.createElement(ve.a,{to:"/"}))))}}]),t}(o.a.Component)),Ze=Se()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(Xe);c.a.render(o.a.createElement(Ze,null),document.getElementById("root"))}},[[53,2,3]]]);
//# sourceMappingURL=main.7c603947.chunk.js.map