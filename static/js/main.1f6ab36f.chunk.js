(this["webpackJsonpshopify-frontend-app"]=this["webpackJsonpshopify-frontend-app"]||[]).push([[0],{28:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i=t(0),s=t.n(i),u=t(4),f=t.n(u),p=(t(28),t(9)),l=function(e,n){var t=Object(i.useState)((function(){try{if(!n)return;var t=localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.log(r),n}})),r=Object(p.a)(t,2),c=r[0],o=r[1],a=Object(i.useState)(!1),s=Object(p.a)(a,2),u=s[0],f=s[1];return Object(i.useEffect)((function(){if(void 0!==c)try{localStorage.setItem(e,JSON.stringify(c)),f(!0)}catch(n){return console.log(n),void f(!0)}}),[c,e]),[c,o,u]},x=t(5),b=t(6),d=t(65),j=Object(i.createContext)({searchQuery:"",setSearchQuery:function(e){}}),h=(j.Consumer,j.Provider),O=j,v=t(1),g=function(){var e=Object(i.useContext)(O),n=e.searchQuery,t=e.setSearchQuery,c=b.a.div(r||(r=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background: #f8f8f8;\n    box-shadow: 0px 3px 8px 0px rgba(62, 100, 146, 0.16);\n\n    @media (min-width: 0px) and (max-width: 910px) {\n      height: 50px;\n      font-size: 13px;\n    }\n\n    @media (min-width: 910px) and (max-width: 1537px) {\n      height: 60px;\n      font-size: 16px;\n    }\n\n    @media (min-width: 1537px) {\n      height: 80px;\n      font-size: 22px;\n    }\n  "])));return Object(v.jsx)(c,{children:Object(v.jsx)(d.a,{autoFocus:!0,value:n,onChange:function(e){return t(e.target.value)},variant:"outlined"})})},m=t(20),y=t(7),w=t.n(y),S=t(11),C=function(){var e=Object(S.a)(w.a.mark((function e(n){var t,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(n,"&type=movie&apikey=be83d040"));case 2:return t=e.sent,e.next=5,k(t);case 5:return r=e.sent,console.log("POST"),console.log(r),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(S.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ok){e.next=4;break}return e.next=3,n.json();case 3:return e.abrupt("return",e.sent);case 4:return e.abrupt("return",Promise.reject(n));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=Object(i.createContext)({nominations:[],setNominations:function(e){}}),N=(E.Consumer,E.Provider),Q=E,A=(b.a.div(c||(c=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: fit-content;\n  border-radius: 10px;\n  background-color: #E8E8E8;\n  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);\n"]))),function(){var e=Object(i.useContext)(O).searchQuery,n=Object(i.useContext)(Q),t=n.nominations,r=n.setNominations,c=function(){var n=Object(S.a)(w.a.mark((function n(){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C(e);case 3:t=n.sent,console.log("DATA: "),console.log(t),(t.response="True")&&r(t.Search),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();Object(i.useEffect)((function(){""!==e&&c()}),[e]);var s=b.a.div(o||(o=Object(x.a)(["\n        display: flex;\n        flex-direction: row;\n    "]))),u=b.a.div(a||(a=Object(x.a)(["\n        display: flex;\n        flex-direction: column;\n        width: 75%;\n    "])));return Object(v.jsx)(s,{children:Object(v.jsx)(u,{children:Array.isArray(t)&&t.map((function(e){Object(m.a)({},e)}))})})}),F=function(){var e=Object(i.useContext)(O).searchQuery,n=Object(i.useContext)(Q).nominations;return Object(i.useEffect)((function(){console.log("SEARCH: "),console.log(e),console.log("NOMINATIONS: "),console.log(n)})),Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsx)(A,{})]})};var I=function(){var e=Object(i.useState)(""),n=Object(p.a)(e,2),t=n[0],r=n[1],c=l("nominations",[]),o=Object(p.a)(c,3),a=o[0],s=o[1];return o[2]?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(h,{value:{searchQuery:t,setSearchQuery:r},children:Object(v.jsx)(N,{value:{nominations:a,setNominations:s},children:Object(v.jsx)(F,{})})})}):Object(v.jsx)("div",{})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};f.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.1f6ab36f.chunk.js.map