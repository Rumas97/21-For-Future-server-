(this["webpackJsonp21-for-future-client"]=this["webpackJsonp21-for-future-client"]||[]).push([[0],{101:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),r=a.n(o),s=(a(101),a(31)),i=a(19),l=a(20),u=a(22),d=a(21),h=a(17),j=a.n(h),p="https://app-21-for-future.herokuapp.com",b=(a(120),a(8)),f=a(18),m=a(176),g=a(139),O=a(180),x=(a(121),a(16)),v=a(2),y=[{url:"https://massel.com/wp-content/uploads/2017/05/Sustainable-foods.jpg",title:"Food",width:"25%"},{url:"https://images.unsplash.com/photo-1573555175002-892fd2758105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1999&q=80",title:"Mobility",width:"25%"},{url:"https://images.unsplash.com/photo-1556814086-bd749c2ceabd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80",title:"Lifestyle",width:"25%"},{url:"https://images.unsplash.com/photo-1607185073253-44296286cd82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",title:"Sustainable Period",width:"25%"}],w=Object(m.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},image:(t={position:"relative",height:200},Object(f.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(f.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px ").concat(e.spacing(1)+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}}));function C(){var e=w();return Object(v.jsx)("div",{className:e.root,children:y.map((function(t){return Object(v.jsxs)(g.a,{focusRipple:!0,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:t.width},children:[Object(v.jsx)("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(t.url,")")}}),Object(v.jsx)("span",{className:e.imageBackdrop}),Object(v.jsx)("span",{className:e.imageButton,children:Object(v.jsxs)(O.a,{component:"span",variant:"subtitle1",color:"inherit",children:[Object(v.jsxs)(x.b,{className:e.imageTitle,to:"challenges/".concat(t.title),children:[" ",t.title]}),Object(v.jsx)("span",{className:e.imageMarked})]})})]},t.title)}))})}a(128);var S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Our Challenges "}),Object(v.jsx)("p",{children:"Browse through the four main categories and take action now. Every small step counts!"}),Object(v.jsx)(C,{})]})}}]),a}(n.Component),k=a(86),D=a(44),N=(a(80),a.p+"static/media/Battery.febc827f.svg"),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={challenges:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.category;j.a.get("".concat(p,"/api/challenges/").concat(t)).then((function(t){console.log(t.data),e.setState({challenges:t.data})})).catch((function(){console.log("error fetching challenges of one category")}))}},{key:"render",value:function(){var e=this.state.challenges,t=this.props.match.params.category;return Object(v.jsx)("div",{children:e.map((function(e,a){return Object(v.jsx)("div",{children:Object(v.jsxs)(D.a,{style:{width:"18rem"},children:[Object(v.jsx)(D.a.Img,{variant:"top",src:N}),Object(v.jsxs)(D.a.Body,{children:[Object(v.jsx)(D.a.Title,{children:"Card Title"}),Object(v.jsx)(D.a.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(v.jsxs)(k.a,{variant:"default",children:[" ",Object(v.jsx)(x.b,{to:"/challenges/".concat(t,"/").concat(e._id),children:Object(v.jsx)("h3",{children:e.challengeName})}),"   "]})]})]})},a)}))})}}]),a}(n.Component),E=a(181),P=(a(81),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={challengeDetails:null,days:1,dayToDisplay:null,userStartChallenge:null},e.handleDisplay=function(t){e.setState({dayToDisplay:t})},e.handleStart=function(){var t=e.state.challengeDetails._id;j.a.post("".concat(p,"/api/user-challenge/start/").concat(t),{},{withCredentials:!0}).then((function(t){var a=t.data._id;e.setState({userStartChallenge:null},(function(){e.props.history.push("/user-challenge/".concat(a)),console.log("newest console log"),console.log(e.props)}))})).catch((function(){console.log("user challenge did not start")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("Is the ID undefined???"),console.log(t);var a=this.props.match.params.category;j.a.get("".concat(p,"/api/challenges/").concat(a,"/").concat(t)).then((function(t){e.setState({challengeDetails:t.data,dayToDisplay:t.data.challengeDay[0]})})).catch((function(){console.log("did not mount correctly")}))}},{key:"render",value:function(){var e=this,t=this.props.user,a=this.state,n=a.challengeDetails,c=a.dayToDisplay;return console.log(c),n&&c?Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:n.challengeName}),Object(v.jsx)("img",{src:n.challengeImage}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),t?Object(v.jsx)(E.a,{variant:"outlined",color:"defaults",onClick:this.handleStart,children:"Start"}):"Hey, you need to login",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),n.challengeDay.map((function(t,a){return Object(v.jsx)("button",{className:"days-button",onClick:function(){return e.handleDisplay(t)},children:a+1},a)})),Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:c.day}),Object(v.jsx)("p",{children:c.description}),Object(v.jsx)("br",{}),Object(v.jsx)("iframe",{width:"430",height:"300",src:"https://www.youtube.com/embed/TQtRv-wdaJU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}):Object(v.jsx)("h1",{children:"...Loading"})}}]),a}(n.Component)),M=a(182),L=Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function A(e){var t,a=L(),n=e.onSubmit;return Object(v.jsxs)("form",{className:a.root,onSubmit:n,noValidate:!0,autoComplete:"off",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:" Sign up Page "}),Object(v.jsx)(M.a,{id:"outlined-required",type:"text",name:"username",label:"Username",placeholder:"Enter username here",variant:"outlined"}),Object(v.jsx)(M.a,{id:"outlined-required",type:"email",name:"email",label:"Email",placeholder:"Type your email here",variant:"outlined"}),Object(v.jsx)(M.a,(t={id:"outlined-password-input",type:"password",name:"password",label:"Password"},Object(f.a)(t,"type","password"),Object(f.a)(t,"autoComplete","current-password"),Object(f.a)(t,"variant","outlined"),t))]}),Object(v.jsx)(E.a,{type:"submit",variant:"outlined",color:"default",children:"Create your account"})]})}var B=Object(m.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function I(e){var t,a=B(),n=e.onLogin,c=e.error;return Object(v.jsxs)("form",{className:a.root,onSubmit:n,noValidate:!0,autoComplete:"off",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:" Log in Page "}),Object(v.jsx)(M.a,{id:"outlined-required",type:"email",name:"email",label:"Email",placeholder:"Type your email here",variant:"outlined"}),Object(v.jsx)(M.a,(t={id:"outlined-password-input",type:"password",name:"password",label:"Password"},Object(f.a)(t,"type","password"),Object(f.a)(t,"autoComplete","current-password"),Object(f.a)(t,"variant","outlined"),t))]}),Object(v.jsx)(E.a,{type:"submit",variant:"outlined",color:"defaults",children:"Login"}),c&&Object(v.jsxs)("p",{style:{color:"red"},children:["  ",c.error]})]})}a(129);var U=a.p+"static/media/avatar.2e4ef16d.png",H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={userChallenges:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(p,"/api/user-challenge/all-challenges"),{withCredentials:!0}).then((function(t){console.log("response from userChallenges to display"),console.log(t.data),e.setState({userChallenges:t.data})})).catch((function(e){console.log("we dont see the user challenges")}))}},{key:"render",value:function(){var e=this.state.userChallenges;console.log(e);var t=this.props,a=t.user,n=t.onDelete;this.props.match.params.id;return a&&e?Object(v.jsxs)("div",{children:[Object(v.jsxs)("h1",{children:[" Hey ",a.username," ! Welcome to your profile \ud83c\udf33"]}),Object(v.jsxs)(x.b,{to:"/challenges",children:[" ",Object(v.jsx)(E.a,{variant:"outlined",color:"secondary",children:"Browse Challenges"})," "]}),Object(v.jsx)("img",{className:"profile-image",default:U,src:a.profilePic,alt:a.username}),Object(v.jsxs)("p",{children:["Username: ",a.username]}),Object(v.jsxs)("p",{children:["Email: ",a.email]}),Object(v.jsx)("h2",{children:"CURRENT CHALLENGES"}),Object(v.jsx)("h3",{children:e.map((function(e){return Object(v.jsxs)("div",{children:[" ",Object(v.jsxs)(x.b,{to:"user-challenge/".concat(e._id),children:["  ",e.challengeId.challengeName," "]}),"  "]})}))}),Object(v.jsxs)(x.b,{to:"/profile/".concat(a._id),children:[" ",Object(v.jsx)(E.a,{variant:"outlined",color:"defaults",children:"Edit Profile"})," "]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{children:[" ",Object(v.jsx)(E.a,{onClick:function(){n(a._id)},variant:"outlined",color:"secondary",children:"Delete your account"})]})]}):Object(v.jsx)("h2",{children:"Loading ..."})}}]),a}(n.Component),V=(a(130),a(183)),_=a(184);var F=function(e){var t=e.onLogout,a=e.user;return Object(v.jsxs)(V.a,{collapseOnSelect:!0,expand:"lg",className:"navbar",children:[Object(v.jsxs)(V.a.Brand,{children:[" ",Object(v.jsx)(x.b,{className:"navbar-links",to:"/",children:" Home "})," "]}),Object(v.jsx)(V.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(v.jsxs)(V.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsxs)(_.a,{className:"mr-auto",children:[Object(v.jsxs)(_.a.Link,{children:[" ",Object(v.jsx)(x.b,{className:"navbar-links",to:"/challenges",children:" Challenges  "})," "]}),Object(v.jsxs)(_.a.Link,{children:[Object(v.jsx)(x.b,{className:"navbar-links",to:"/donate",children:" Donate "})," "]})]}),Object(v.jsx)(_.a,{children:Object(v.jsx)(_.a.Link,{className:"navbar-links",href:"#deets",children:a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x.b,{className:"navbar-links",onClick:t,type:"submit",variant:"outlined",color:"default",children:"Logout"}),Object(v.jsx)(x.b,{className:"navbar-links",to:"/profile",children:" Profile  "})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x.b,{className:"navbar-links",to:"/login",children:" Login  "}),Object(v.jsx)(x.b,{className:"navbar-links",to:"/signup",children:" Signup  "})]})})})]})]})},J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={userProfile:{}},e.handleUsernameChange=function(t){var a=t.target.value;console.log(a);var n=JSON.parse(JSON.stringify(e.state.userProfile));n.username=a,e.setState({userProfile:n})},e.handlePasswordChange=function(t){var a=t.target.value;console.log(a);var n=JSON.parse(JSON.stringify(e.state.userProfile));n.password=a,e.setState({userProfile:n})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;j.a.get("".concat(p,"/profile/").concat(t)).then((function(t){e.setState({userProfile:t.data})})).catch((function(){console.log("error editing profile")}))}},{key:"render",value:function(){var e,t=this.state.userProfile,a=this.props,n=a.onEdit,c=a.onSubmitPicture;return Object(v.jsxs)("div",{children:[Object(v.jsx)(M.a,{id:"outlined-required",type:"text",name:"username",label:"Username",placeholder:"Enter username here",variant:"outlined",onChange:this.handleUsernameChange,value:t.username}),Object(v.jsxs)("form",{onSubmit:c,enctype:"multipart/form-data",children:[Object(v.jsx)("input",{type:"file",name:"imageUrl",accept:"image/png, image/jpg"}),Object(v.jsx)(E.a,{type:"submit",children:"Submit"})]}),Object(v.jsx)(M.a,(e={id:"outlined-password-input",type:"password",name:"password",label:"Password"},Object(f.a)(e,"type","password"),Object(f.a)(e,"autoComplete","current-password"),Object(f.a)(e,"variant","outlined"),Object(f.a)(e,"onChange",this.handlePasswordChange),Object(f.a)(e,"value",t.password),e)),Object(v.jsx)(E.a,{type:"submit",variant:"outlined",color:"default",onClick:function(){n(t)},children:"Submit Changes"})]})}}]),a}(n.Component),R=(a(134),a.p+"static/media/EcoEducation.727a494c.svg"),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"home-page",children:[Object(v.jsx)("h1",{children:"21 for future"}),Object(v.jsx)("img",{className:"home-image",src:R}),Object(v.jsx)("h2",{children:"Take action! Sign up now!"}),Object(v.jsx)("div",{children:Object(v.jsxs)(x.b,{to:"/signup",children:[" ",Object(v.jsx)(E.a,{variant:"outlined",color:"defaults",children:"Create an account"})," "]})}),Object(v.jsx)("div",{children:Object(v.jsxs)(x.b,{to:"/challenges",children:[" ",Object(v.jsx)(E.a,{variant:"outlined",color:"default",children:"Check out our challenges"})," "]})}),Object(v.jsx)("div",{children:Object(v.jsxs)(x.b,{to:"/donate",children:[" ",Object(v.jsx)(E.a,{className:"",variant:"outlined",color:"default",children:"Donate"})," "]})})]})}}]),a}(n.Component),G=a.p+"static/media/wwf.d9b00071.png",W=a.p+"static/media/vivaconagua.c41b2f83.png",q=a.p+"static/media/greenpeace.d8930cef.png",Y=(a(135),a(64)),Q=a(35),$=a(50),Z=a.n($),K=a(67),X=a(43);function ee(){var e=Object(n.useState)(!1),t=Object(X.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),r=Object(X.a)(o,2),s=r[0],i=r[1],l=Object(n.useState)(""),u=Object(X.a)(l,2),d=u[0],h=u[1],j=Object(n.useState)(!0),b=Object(X.a)(j,2),f=b[0],m=b[1],g=Object(n.useState)(""),O=Object(X.a)(g,2),x=O[0],y=O[1],w=Object(Q.useStripe)(),C=Object(Q.useElements)();Object(n.useEffect)((function(){window.fetch("".concat(p,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:"xl-tshirt"}]})}).then((function(e){return e.json()})).then((function(e){y(e.clientSecret)}))}),[]);var S=function(){var e=Object(K.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(t.empty),i(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(K.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.next=4,w.confirmCardPayment(x,{payment_method:{card:C.getElement(Q.CardElement)}});case 4:(a=e.sent).error?(i("Payment failed ".concat(a.error.message)),h(!1)):(i(null),h(!1),c(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{id:"payment-form",onSubmit:k,children:[Object(v.jsx)(Q.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:S}),Object(v.jsx)("button",{disabled:d||f||a,id:"submit",children:Object(v.jsx)("span",{id:"button-text",children:d?Object(v.jsx)("div",{className:"spinner",id:"spinner"}):"Donate now"})}),s&&Object(v.jsx)("div",{className:"card-error",role:"alert",children:s}),Object(v.jsxs)("p",{className:a?"result-message":"result-message hidden",children:["Payment succeeded, see the result in your",Object(v.jsxs)("a",{href:"https://dashboard.stripe.com/test/payments",children:[" ","Stripe dashboard."]})," Refresh the page to pay again."]})]})}var te=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Object(Y.a)("pk_test_51IpuJBFCggon7cbVElkeXUc6tLxwsgVCb0YWHffVmoyeowZW3imPfEVShdubMHhsAQK1DVJ6ZURtR1ToI7FSlGm800QUGfQR6J");return Object(v.jsx)("div",{children:Object(v.jsxs)("section",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"DONATE"}),Object(v.jsx)("h2",{children:"Contribute to the cause"}),Object(v.jsx)("p",{children:" 21 For Future collaborates with some cool organizations that are trying to make our planet a more sustainable place "}),Object(v.jsx)("p",{children:"All the money goes equally distributed between those organizations"}),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(Q.Elements,{stripe:e,children:Object(v.jsx)(ee,{})})})]}),Object(v.jsxs)("div",{id:"partOne",children:[Object(v.jsx)("img",{className:"wwfImg",src:G,alt:"wwf organization",loading:"lazy"}),Object(v.jsx)("p",{children:"Their mission is to preserve nature and reduce the most pressing threats to the diversity of life on Earth."})]}),Object(v.jsxs)("div",{id:"partTwo",children:[Object(v.jsx)("p",{children:"Greenpeace uses non-violent creative action to pave the way towards a greener, more peaceful world, and to confront the systems that threaten our environment."}),Object(v.jsx)("img",{className:"greenpeaceImg",src:q,alt:"greenpeace",loading:"lazy"})]}),Object(v.jsxs)("div",{id:"partThree",children:[Object(v.jsx)("img",{className:"vivaConAguaImg",src:W,alt:"viva con agua",loading:"lazy"}),Object(v.jsx)("p",{children:"Viva con Agua is a network of people and organizations committed to establish access to clean drinking water and basic sanitation for all humans worldwide"})]})]})})}}]),a}(n.Component),ae=a(89),ne=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={userchallengeDetails:null,days:1,dayToDisplay:null,daysDone:[],colorStatus:"#b7ff5a"},e.handleDisplay=function(t){console.log(t),e.setState({dayToDisplay:t})},e.handleDaysDone=function(t){console.log(" Yummy!!!!"),console.log(t),console.log(e.state.daysDone);var a=e.props.match.params.id;console.log(a),j.a.patch("".concat(p,"/api/user-challenge/").concat(a),{dayTracker:t.day},{withCredentials:!0}).then((function(t){console.log("WE ARE HERE NOW"),console.log(t.data),e.setState({daysDone:Object(ae.a)(t.data.dayTracker)}),console.log("new console for DAYS DONE"),console.log(e.state.daysDone)})).catch((function(){console.log("updating the dayTracker is failing")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("where is our USER ID "),console.log(t),j.a.get("".concat(p,"/api/user-challenge/").concat(t),{withCredentials:!0}).then((function(t){console.log(t.data),console.log("component did mount for userChallenges"),e.setState({userchallengeDetails:t.data.challengeId,dayToDisplay:t.data.challengeId.challengeDay[0],daysDone:t.data.dayTracker})})).catch((function(){console.log("did not mount correctly for userChallenges")}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.userchallengeDetails,n=t.dayToDisplay,c=t.daysDone;return a&&n?Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:a.challengeName}),Object(v.jsx)("img",{src:a.challengeImage}),Object(v.jsx)("p",{children:n.description}),Object(v.jsx)("p",{children:n.day}),Object(v.jsxs)("p",{children:[Object(v.jsx)("button",{onClick:function(){return e.handleDaysDone(n)},children:" Check "})," "]}),a.challengeDay.map((function(t,a){return c.includes(t.day)?Object(v.jsx)("button",{className:"days-button-done",onClick:function(){return e.handleDisplay(t)},children:a+1}):Object(v.jsx)("button",{className:"days-button",onClick:function(){return e.handleDisplay(t)},children:a+1})}))]}):Object(v.jsx)("h1",{children:"...Loading"})}}]),a}(n.Component),ce=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={user:null,error:null,fetchingUser:!0,userProfile:null},e.handleSignUp=function(t){t.preventDefault();var a=t.target,n=a.email,c=a.username,o=a.password,r={username:c.value,email:n.value,password:o.value};j.a.post("".concat(p,"/api/signup"),r,{withCredentials:!0}).then((function(t){e.setState({user:t.data},(function(){e.props.history.push("/")}))})).catch((function(){console.log("sign up not working")}))},e.handleLogin=function(t){t.preventDefault();var a=t.target,n=a.email,c=a.password,o={email:n.value,password:c.value};console.log("we are here"),console.log(o),j.a.post("".concat(p,"/api/login"),o,{withCredentials:!0}).then((function(t){e.setState({user:t.data,error:null},(function(){e.props.history.push("/profile")}))})).catch((function(t){e.setState({error:t.response.data})}))},e.handleLogout=function(){j.a.post("".concat(p,"/api/logout"),{},{withCredentials:!0}).then((function(){e.setState({user:null},(function(){e.props.history.push("/")}))})).catch((function(){console.log("error happening")}))},e.handleEditProfile=function(t){console.log(t),console.log("user is looost"),console.log(e.state);var a=e.state.user._id;j.a.patch("".concat(p,"/api/profile/").concat(a),{username:t.username,password:t.password},{withCredentials:!0}).then((function(){var a=e.state.user.map((function(e){return t.id===e._id&&(e.username=t.username,e.password=t.password),e}));e.setState({user:a},(function(){e.props.history.push("/")}))})).catch((function(){console.log("editing profile is failing")}))},e.handleSubmitPicture=function(t){t.preventDefault();var a=t.target.imageUrl.files[0],n=new FormData;n.append("imageUrl",a),console.log(n),j.a.post("".concat(p,"/api/upload"),n,{withCredentials:!0}).then((function(t){e.setState({user:t.data},(function(){e.props.history.push("/profile")}))}))},e.handleDeleteProfile=function(t){var a=e.state.user._id;j.a.delete("".concat(p,"/api/profile/").concat(a,"/delete"),{withCredentials:!0}).then((function(){e.setState({user:null},(function(){e.props.history.push("/")}))})).catch((function(){console.log("user not deleted")}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(p,"/api/profile"),{withCredentials:!0}).then((function(t){e.setState({user:t.data,fetchingUser:!1})})).catch((function(){console.log("did not mount correctly")}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.user;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(F,{onLogout:this.handleLogout,user:n}),Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",component:z}),Object(v.jsx)(b.a,{exact:!0,path:"/signup",render:function(t){return Object(v.jsx)(A,Object(s.a)({onSubmit:e.handleSignUp},t))}}),Object(v.jsx)(b.a,{exact:!0,path:"/login",render:function(t){return Object(v.jsx)(I,Object(s.a)({error:a,onLogin:e.handleLogin},t))}}),Object(v.jsx)(b.a,{exact:!0,path:"/profile",render:function(t){return Object(v.jsx)(H,Object(s.a)({user:n,onDelete:e.handleDeleteProfile},t))}}),Object(v.jsx)(b.a,{exact:!0,path:"/profile/:id",render:function(t){return Object(v.jsx)(J,Object(s.a)({onSubmitPicture:e.handleSubmitPicture,onEdit:e.handleEditProfile},t))}}),Object(v.jsx)(b.a,{exact:!0,path:"/challenges",render:function(e){return Object(v.jsx)(S,Object(s.a)({},e))}}),Object(v.jsx)(b.a,{exact:!0,path:"/challenges/:category",render:function(e){return Object(v.jsx)(T,Object(s.a)({},e))}}),Object(v.jsx)(b.a,{exact:!0,path:"/challenges/:category/:id",render:function(e){return Object(v.jsx)(P,Object(s.a)({user:n},e))}}),Object(v.jsx)(b.a,{exact:!0,path:"/donate",render:function(){return Object(v.jsx)(te,{})}}),Object(v.jsx)(b.a,{exact:!0,path:"/user-challenge/:id",render:function(e){return Object(v.jsx)(ne,Object(s.a)({user:n},e))}})]})]})}}]),a}(n.Component),oe=Object(b.f)(ce);r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(x.a,{children:Object(v.jsx)(oe,{})})}),document.getElementById("root"))},81:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.9cb79028.chunk.js.map