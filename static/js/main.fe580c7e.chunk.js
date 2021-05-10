(this["webpackJsonpshopify-frontend-app"]=this["webpackJsonpshopify-frontend-app"]||[]).push([[0],{57:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var r,i,a,c,o,s,u,d,l,b,j,x,h,f,p,O,v=t(0),g=t.n(v),m=t(8),y=t.n(m),w=(t(57),t(13)),k=function(e,n){var t=Object(v.useState)((function(){try{if(!n)return;var t=localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.log(r),n}})),r=Object(w.a)(t,2),i=r[0],a=r[1],c=Object(v.useState)(!1),o=Object(w.a)(c,2),s=o[0],u=o[1];return Object(v.useEffect)((function(){if(void 0!==i)try{localStorage.setItem(e,JSON.stringify(i)),u(!0)}catch(n){return console.log(n),void u(!0)}}),[i,e]),[i,a,s]},S=t(11),A=t(12),C=t(105),T=Object(v.createContext)({searchQuery:"",setSearchQuery:function(e){}}),E=(T.Consumer,T.Provider),N=T,F=t(4),Q=function(){var e=Object(v.useContext)(N),n=e.searchQuery,t=e.setSearchQuery,i=Object(v.useState)(n),a=Object(w.a)(i,2),c=a[0],o=a[1],s=A.a.div(r||(r=Object(S.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background: #f8f8f8;\n    box-shadow: 0px 3px 8px 0px rgba(62, 100, 146, 0.16);\n\n    @media (min-width: 0px) and (max-width: 910px) {\n      height: 50px;\n      font-size: 13px;\n    }\n\n    @media (min-width: 910px) and (max-width: 1537px) {\n      height: 60px;\n      font-size: 16px;\n    }\n\n    @media (min-width: 1537px) {\n      height: 80px;\n      font-size: 22px;\n    }\n  "])));return Object(F.jsx)(s,{children:Object(F.jsx)(C.a,{style:{width:"80%",backgroundColor:"white"},autoFocus:!0,value:c,onChange:function(e){var r;r=e.target.value,o(r),r!==n&&t(r)},variant:"outlined"})})},P=t(32),z=t(47),D=t(14),I=t.n(D),J=t(21),Y=function(){var e=Object(J.a)(I.a.mark((function e(n){var t,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(n,"&type=movie&apikey=be83d040"));case 2:return t=e.sent,e.next=5,G(t);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=function(){var e=Object(J.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ok){e.next=4;break}return e.next=3,n.json();case 3:return e.abrupt("return",e.sent);case 4:return e.abrupt("return",Promise.reject(n));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),M=Object(v.createContext)({nominations:[],setNominations:function(e){}}),R=(M.Consumer,M.Provider),B=M,L=t(106),V=A.a.div(i||(i=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: fit-content;\n  border-radius: 10px;\n  background-color: #E8E8E8;\n  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);\n"]))),q=function(e){var n=e.Title,t=e.Year,r=e.Poster,i=(e.shouldGetDescription,e.buttonText),j=e.buttonAction,x=e.isDisabled,h=void 0!==x&&x,f=Object(v.useState)(""),p=Object(w.a)(f,2),O=p[0];p[1];Object(v.useEffect)((function(){}),[O]);var g=A.a.div(a||(a=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n\n    height: fit-content;\n  "]))),m=Object(A.a)(V)(c||(c=Object(S.a)(["\n    padding-left: 1.5vmax;\n    transition: background, color, box-shadow 0.3s linear;\n\n    &:hover {\n      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%);\n      transition: box-shadow 0.3s linear;\n    }\n  "]))),y=A.a.div(o||(o=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    width: 76%;\n    height: 85%;\n\n    overflow: hidden;\n  "]))),k=A.a.div(s||(s=Object(S.a)(["\n    display: block;\n    font-size: 2vw;\n    font-weight: bold;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    @media (max-width: 910px) {\n      font-size: 4vw;\n    }\n  "]))),C=A.a.div(u||(u=Object(S.a)(["\n    font-size: 1.1vw;\n\n    @media (max-width: 910px) {\n      display: none;\n    }\n    height: 80%;\n  "]))),T=A.a.div(d||(d=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 2vmax;\n  "]))),E=A.a.div(l||(l=Object(S.a)(["\n    margin: auto;\n    align-self: center;\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 170px;\n    height: 250px;\n  "]))),N=A.a.div(b||(b=Object(S.a)(["\n    width: 60%;\n    height: 100%;\n  "])));return Object(F.jsx)(T,{children:Object(F.jsx)(m,{children:Object(F.jsxs)(g,{children:[Object(F.jsx)(E,{children:Object(F.jsx)("img",{src:r,width:"100%",height:"100%",alt:"content image"})}),Object(F.jsxs)(y,{children:[Object(F.jsx)(k,{children:n}),Object(F.jsxs)(C,{children:["Release Year: ".concat(t)," "]}),Object(F.jsxs)(C,{children:[O," "]}),Object(F.jsx)(N,{children:Object(F.jsx)(L.a,{onClick:function(){j(n,t,r)},style:{width:"100%",height:"100%"},variant:"contained",disabled:h,children:i})})]})]})})})},H=t(46),K=t.n(H),U=function(){var e=Object(v.useContext)(N).searchQuery,n=Object(v.useContext)(B),t=n.nominations,r=n.setNominations,i=Object(v.useState)([]),a=Object(w.a)(i,2),c=a[0],o=a[1],s=Object(v.useState)(!1),u=Object(w.a)(s,2),d=u[0],l=u[1],b=function(){var n=Object(J.a)(I.a.mark((function n(){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,Y(e);case 4:t=n.sent,l(!1),"True"===t.Response?o(t.Search):o([]),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),o([]),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();Object(v.useEffect)((function(){""!==e?b():o([])}),[e]);var p=A.a.div(j||(j=Object(S.a)(["\n    display: flex;\n    flex-direction: row;\n  "]))),O=A.a.div(x||(x=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    width: 75%;\n  "]))),g=A.a.div(h||(h=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    margin-left: 2vmax;\n    width: 20%;\n  "]))),m=A.a.div(f||(f=Object(S.a)(["\n    align-self: center;\n  "]))),y=function(e,n,i){Array.isArray(t)&&r([].concat(Object(z.a)(t),[{Title:e,Year:n,Poster:i}]))},k=function(e){if(Array.isArray(t)){var n=t.filter((function(n){return n.Title!==e}));r(n)}},C=function(e){if(Array.isArray(t)){if(t.length>=5)return!0;for(var n=0;n<t.length;n++){if(t[n].Title===e)return!0}return!1}};return Object(F.jsxs)(p,{children:[Object(F.jsx)(O,{children:d?Object(F.jsx)(m,{children:Object(F.jsx)(K.a,{})}):Array.isArray(c)&&Object(F.jsxs)(F.Fragment,{children:['Search results for "'.concat(e,'"'),c.map((function(e){return Object(F.jsx)(q,Object(P.a)(Object(P.a)({},e),{},{buttonText:"NOMINATE",buttonAction:y,shouldGetDescription:!0,isDisabled:C(e.Title)}))}))]})}),Object(F.jsxs)(g,{children:["Nominations",Array.isArray(t)&&t.map((function(e){return Object(F.jsx)(q,Object(P.a)(Object(P.a)({},e),{},{buttonText:"REMOVE",buttonAction:k,shouldGetDescription:!1}))}))]})]})},W=function(){var e=A.a.div(p||(p=Object(S.a)(["\n    display: flex;\n    background-color: #ff9d00;\n    flex-direction: row;\n    width: 100%;\n    height: 50px;\n  "]))),n=A.a.span(O||(O=Object(S.a)(["\n    margin: auto;\n    text-align: center;\n   "])));return Object(F.jsxs)(e,{children:[" ",Object(F.jsxs)(n,{children:["You're Finished! 5 Nominations have been selected. If you'd like to change your selection, please remove a nomination you'd like to replace"," "]})]})},X=function(){Object(v.useContext)(N).searchQuery;var e=Object(v.useContext)(B).nominations;return Object(F.jsxs)("div",{children:[Array.isArray(e)&&e.length>=5&&Object(F.jsx)(W,{}),Object(F.jsx)(Q,{}),Object(F.jsx)(U,{})]})};var Z=function(){var e=Object(v.useState)(""),n=Object(w.a)(e,2),t=n[0],r=n[1],i=k("nominations",[]),a=Object(w.a)(i,2),c=a[0],o=a[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(E,{value:{searchQuery:t,setSearchQuery:r},children:Object(F.jsx)(R,{value:{nominations:c,setNominations:o},children:Object(F.jsx)(X,{})})})})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,108)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),a(e),c(e)}))};y.a.render(Object(F.jsx)(g.a.StrictMode,{children:Object(F.jsx)(Z,{})}),document.getElementById("root")),$()}},[[72,1,2]]]);
//# sourceMappingURL=main.fe580c7e.chunk.js.map