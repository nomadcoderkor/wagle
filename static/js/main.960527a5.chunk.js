(this.webpackJsonpwagle=this.webpackJsonpwagle||[]).push([[0],{30:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),u=a(3),o=a(13),i=a(2),s=a(4),m=a.n(s),p=a(8),f=a(5),d=a(14),E=a(15);a(40),a(42),a(49);E.initializeApp({apiKey:"AIzaSyCoCrL8KQJ_uZpPlHi9jx0OKT_vcN-PRaQ",authDomain:"wagle-2a7bc.firebaseapp.com",databaseURL:"https://wagle-2a7bc.firebaseio.com",projectId:"wagle-2a7bc",storageBucket:"wagle-2a7bc.appspot.com",messagingSenderId:"706062244460",appId:"1:706062244460:web:f9231dd2d5ee5c5e58d649"});var b=E,h=E.auth(),g=E.firestore(),v=E.storage(),y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],f=Object(n.useState)(!1),d=Object(u.a)(f,2),E=d[0],b=d[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),y=v[0],w=v[1],x=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},O=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(a,i);case 5:e.next=9;break;case 7:return e.next=9,h.signInWithEmailAndPassword(a,i);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),w(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container"},r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:x,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",required:!0,value:i,onChange:x,className:"authInput"}),r.a.createElement("input",{type:"submit",value:E?"Create Account":"Sign In",className:"authInput authSubmit"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){b((function(e){return!e}))},className:"authSwitch"},E?"Sign In":"Create Account"))},w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.name,console.log(a),"google"!==a){e.next=10;break}return(n=new b.auth.GoogleAuthProvider).addScope("profile"),n.addScope("email"),e.next=8,h.signInWithPopup(n);case 8:e.next=11;break;case 10:alert("\uc11c\ube44\uc2a4 \uc900\ube44\uc911\uc785\ub2c8\ub2e4.");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(y,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(f.a,{icon:d.b})),r.a.createElement("button",{onClick:e,name:"gh",className:"authBtn"},"Continue with Github ",r.a.createElement(f.a,{icon:d.a}))))},x=a(29),O=a(10),j=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(t.text),d=Object(u.a)(s,2),E=d[0],b=d[1],h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,g.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,v.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return i((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,g.doc("nweets/".concat(t.id)).update({text:E});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:E,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:y,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:h},r.a.createElement(f.a,{icon:O.d})),r.a.createElement("span",{onClick:y},r.a.createElement(f.a,{icon:O.a})))))},N=a(51),I=function(e){var t=e.userInfo,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),d=s[0],E=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===d){e.next=12;break}return r=v.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(d,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,g.collection("nweets").add(u);case 15:o(""),E("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(f.a,{icon:O.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;E(t)},a.readAsDataURL(t)},style:{opacity:0}}),d&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:d,style:{backgroundImage:d}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return E("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(f.a,{icon:O.c}))))},S=function(e){var t=e.userInfo,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){g.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(x.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(I,{userInfo:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(j,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},k=function(e){var t=e.refreshUser,a=e.userInfo,c=Object(i.f)(),l=Object(n.useState)(a.displayName),o=Object(u.a)(l,2),s=o[0],f=o[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")}},"Log Out"))},C=function(e){var t=e.userInfo;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(f.a,{icon:d.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(f.a,{icon:O.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},F=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userInfo;return r.a.createElement(o.a,null,a&&r.a.createElement(C,{userInfo:n}),r.a.createElement(i.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(S,{userInfo:n})),r.a.createElement(i.a,{exact:!0,path:"/profile"},r.a.createElement(k,{userInfo:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(w,null)))))};var A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(null!=h.currentUser),p=Object(u.a)(m,2),f=p[0],d=p[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){e?(d(!0),s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):d(!1),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{refreshUser:function(){var e=h.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userInfo:i,isLoggedIn:f}):"Initializing...")};a(47);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.960527a5.chunk.js.map