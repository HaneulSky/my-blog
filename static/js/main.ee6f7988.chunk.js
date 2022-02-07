(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{103:function(e,t,r){},132:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(40),s=r.n(a),c=(r(103),r(10)),i=r(37),o=r(158),u=r(160),l=r(161),d=r(91),p=r.n(d),j=r(23),b=r(5),f=r.n(b),h=r(17),m=r(36),g=r(53),x=r.n(g),O="jwt-token",v="jwt-refresh-token",w="jwt-expires",y="user-local-id";var k={setTokens:function(e){var t=e.refreshToken,r=e.idToken,n=e.localId,a=e.expiresIn,s=void 0===a?3600:a,c=(new Date).getTime()+1e3*s;localStorage.setItem(y,n),localStorage.setItem(O,r),localStorage.setItem(v,t),localStorage.setItem(w,c)},getAccessToken:function(){return localStorage.getItem(O)},getRefreshToken:function(){return localStorage.getItem(v)},getTokenExpiresDate:function(){return localStorage.getItem(w)},getUserId:function(){return localStorage.getItem(y)},removeAuthData:function(){localStorage.removeItem(y),localStorage.removeItem(O),localStorage.removeItem(v),localStorage.removeItem(w)}},S=x.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/",params:{key:Object({NODE_ENV:"production",PUBLIC_URL:"/my-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_KEY}}),I={register:function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,n=t.password,e.next=3,S.post("accounts:signUp",{email:r,password:n,returnSecureToken:!0});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,n=t.password,e.next=3,S.post("accounts:signInWithPassword",{email:r,password:n,returnSecureToken:!0});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),refresh:function(){var e=Object(h.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("token",{grant_type:"refresh_token",refresh_token:k.getRefreshToken()});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},T=I,C=r(27),R=r(84),L=(r(127),r(48)),E=x.a.create({baseURL:L.apiEndPoint});console.log(L.apiEndPoint),E.interceptors.request.use(function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n,a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L.isFireBase){e.next=12;break}if(r=/\/$/gi.test(t.url),t.url=(r?t.url.slice(0,-1):t.url)+".json",n=k.getTokenExpiresDate(),!(k.getRefreshToken()&&n<Date.now())){e.next=10;break}return e.next=8,T.refresh();case 8:a=e.sent,k.setTokens({refreshToken:a.refresh_token,idToken:a.id_token,localId:a.user_id,expiresIn:a.expires_in});case 10:(s=k.getAccessToken())&&(t.params=Object(C.a)(Object(C.a)({},t.params),{},{auth:s}));case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),E.interceptors.response.use((function(e){var t;return L.isFireBase&&(e.data={content:(t=e.data,t&&!t._id?Object.keys(t).map((function(e){return Object(C.a)({},t[e])})):t)}),e}),(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log(e),R.a.error("Something was wrong. Try it later")),Promise.reject(e)}));var F={get:E.get,post:E.post,put:E.put,delete:E.delete,patch:E.patch},_="user/",D={get:function(){var e=Object(h.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get(_);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.put(_+t._id,t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCurrentUser:function(){var e=Object(h.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get(_+k.getUserId());case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.patch(_+k.getUserId(),t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=D;var A=function(e){switch(e){case"INVALID_PASSWORD":return"Email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e";case"EMAIL_EXIST":return"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c Email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442";default:return"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0432\u0445\u043e\u0434\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"}},P=r(22),B=Object(P.a)(),N=k.getAccessToken()?{entities:null,isLoading:!0,error:null,auth:{userId:k.getUserId()},isLoggedIn:!0,dataLoaded:!1}:{entities:null,isLoading:!1,error:null,auth:null,isLoggedIn:!1,dataLoaded:!1},U=Object(m.createSlice)({name:"user",initialState:N,reducers:{userRequested:function(e){e.isLoading=!0},userReceved:function(e,t){e.entities=t.payload,e.isLoading=!1},userRequestFiled:function(e,t){e.error=t.payload,e.isLoading=!1},authRequested:function(e){e.error=null},authRequestSuccess:function(e,t){e.auth=t.payload,e.isLoggedIn=!0},authRequestFailed:function(e,t){e.error=t.payload},userCreated:function(e,t){e.entities.push(t.payload)},userLoggedOut:function(e){e.entities=null,e.isLoggedIn=!1,e.auth=null,e.dataLoaded=!1}}}),W=U.actions,G=U.reducer,H=W.userReceved,K=W.userRequestFiled,J=W.userRequested,V=W.authRequestSuccess,$=W.authRequestFailed,z=W.userCreated,M=(W.userLoggedOut,Object(m.createAction)("user/authRequested")),X=Object(m.createAction)("user/userCreateRequested"),Y=Object(m.createAction)("user/createUserFailed");function Z(e){return function(){var t=Object(h.a)(f.a.mark((function t(r){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(X()),t.prev=1,t.next=4,q.create(e);case 4:n=t.sent,a=n.content,r(z(a)),B.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r(Y(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}var Q=G,ee=r(162),te=r(1),re=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.user.isLoggedIn})),r=Object(j.c)((function(e){return e.user.entities}));return Object(n.useEffect)((function(){e(function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J()),e.prev=1,e.next=4,q.getCurrentUser();case 4:r=e.sent,n=r.content,t(H(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(K(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(te.jsx)(o.a,{position:"static",children:Object(te.jsxs)(u.a,{children:[Object(te.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(te.jsx)(i.a,{style:{color:"inherit",textDecoration:"none"},to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(te.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(te.jsx)(i.a,{style:{color:"inherit",textDecoration:"none"},to:"/articles",children:"\u0421\u0442\u0430\u0442\u044c\u0438"})}),Object(te.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(te.jsx)(i.a,{style:{color:"inherit",textDecoration:"none"},to:"/about",children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"})}),t&&r?Object(te.jsxs)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:[r.name,Object(te.jsx)(ee.a,{"aria-label":"exit",onClick:function(){console.log("button for logout")},children:Object(te.jsx)(p.a,{})})]}):Object(te.jsx)(i.a,{style:{color:"inherit",textDecoration:"none"},to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},ne=function(){return Object(te.jsx)(re,{})},ae=r(163),se=r(165),ce=r(164),ie=r(166),oe=r(156),ue=r(39),le=function(e){var t=e.title,r=e.link,n=e.content;return Object(te.jsxs)("div",{children:[Object(te.jsx)("h2",{children:t}),Object(te.jsx)("p",{children:n}),Object(te.jsx)("a",{children:r})]})},de=ue.a[50],pe=function(e){var t=e._id,r=e.title,n=e.content,a=e.link,s=(e.articles,n?n.slice(0,58)+"...":"Loading...");return n?Object(te.jsxs)(ae.a,{sx:{maxWidth:345,bgcolor:de,marginBottom:5},children:[Object(te.jsx)(ce.a,{children:Object(te.jsxs)(se.a,{children:[Object(te.jsx)(l.a,{gutterBottom:!0,variant:"h5",component:"div",children:r}),Object(te.jsx)(l.a,{variant:"body2",color:"text.secondary",children:s})]})}),Object(te.jsx)(ie.a,{children:Object(te.jsx)(oe.a,{size:"small",color:"primary",onClick:function(){if(t)return Object(te.jsx)(le,{title:r,link:a,content:n});console.log("\u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a")},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})})]}):null},je=r(157),be="article/",fe={get:function(){var e=Object(h.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get(be);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(h.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.put(be+t._id,t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=fe,me=Object(m.createSlice)({name:"articles",initialState:{entities:null,isLoading:!0,error:null,lastFetch:null},reducers:{articlesRequested:function(e){e.isLoading=!0},articlesReceved:function(e,t){e.entities=t.payload,e.lastFetch=Date.now(),e.isLoading=!1},articlesRequestFiled:function(e,t){e.error=t.payload,e.isLoading=!1}}}),ge=me.actions,xe=me.reducer,Oe=ge.articlesReceved,ve=ge.articlesRequestFiled,we=ge.articlesRequested;var ye=xe,ke=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.articles.entities})),r=Object(j.c)((function(e){return e.articles.isLoading}));return Object(n.useEffect)((function(){e(function(){var e=Object(h.a)(f.a.mark((function e(t,r){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r().articles.lastFetch,!(Date.now()-s>6e5)){e.next=14;break}return t(we()),e.prev=3,e.next=6,he.get();case 6:n=e.sent,a=n.content,t(Oe(a)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t(ve(e.t0.message));case 14:case"end":return e.stop()}var s}),e,null,[[3,11]])})));return function(t,r){return e.apply(this,arguments)}}())}),[]),console.log(t),r?"Loading":Object(te.jsxs)(je.a,{sx:{display:"flex",flexWrap:"wrap",p:1,m:1,bgcolor:"background.paper",justifyContent:"space-around"},children:[" ",t?t.map((function(e){return Object(te.jsx)(pe,Object(C.a)(Object(C.a)({},e),{},{articles:t}),e._id)})):"Loading..."]})},Se=function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)("h1",{style:{marginTop:"2em",marginBottom:"1em",textAlign:"center"},children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0440\u0430\u0434\u0430 \u0432\u0438\u0434\u0435\u0442\u044c \u0412\u0430\u0441 \u0432 \u043c\u043e\u0435\u043c \u0431\u043b\u043e\u0433\u0435!"}),Object(te.jsx)("p",{children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u0432 \u043c\u0435\u043d\u044e."}),Object(te.jsx)("p",{children:"\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0443\u0436\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435\u0442 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c."}),Object(te.jsx)("p",{children:"\u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f! :)"}),Object(te.jsx)("p",{children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0434\u043b\u044f \u043c\u0435\u043d\u044f(\u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438): \u0437\u0434\u0435\u0441\u044c \u043a\u0430\u043a \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u043d\u044f\u0442\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f"}),Object(te.jsx)("p",{children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0434\u043b\u044f \u043c\u0435\u043d\u044f 2 (\u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438): \u0421\u0442\u0430\u0442\u044c\u0438 \u0437\u0434\u0435\u0441\u044c, \u043a\u0430\u0436\u0435\u0442\u0441\u044f, \u043d\u0435 \u043d\u0443\u0436\u043d\u044b"}),Object(te.jsx)(ke,{})]})},Ie=function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)("h2",{children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"})," ",Object(te.jsx)("p",{children:"\u0421\u043a\u043e\u0440\u043e \u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"})]})},Te=function(){return Object(te.jsx)("h2",{children:"404 Not found"})},Ce=r(16),Re=r(8);function Le(e,t){var r={};function n(e,t,r){var n;switch(e){case"isRequired":n="boolean"===typeof t?!t:""===t.trim();break;case"isEmail":n=!/^\S+@\S+\.\S+$/g.test(t);break;case"isCapitalSymbol":n=!/[A-Z]+/g.test(t);break;case"isContainDigit":n=!/\d+/g.test(t);break;case"min":n=t.length<r.value}if(n)return r.message}for(var a in e)for(var s in t[a]){var c=n(s,e[a],t[a][s]);c&&!r[a]&&(r[a]=c)}return r}var Ee=r(92),Fe=r.n(Ee),_e=function(e){var t=e.label,r=e.type,a=e.name,s=e.value,c=e.onChange,i=e.error,o=Object(n.useState)(!1),u=Object(Ce.a)(o,2),l=u[0],d=u[1];return Object(te.jsxs)("div",{className:"mb-4",children:[Object(te.jsx)("label",{htmlFor:a,children:t}),Object(te.jsxs)("div",{className:"input-group has-validation",children:[Object(te.jsx)("input",{type:l?"text":r,id:a,value:s,onChange:function(e){var t=e.target;c({name:t.name,value:t.value})},name:a,className:"form-control"+(i?" is-invalid":"")}),"password"===r&&Object(te.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){d((function(e){return!e}))},children:Object(te.jsx)(Fe.a,{})}),i&&Object(te.jsx)("div",{className:"invalid-feedback",children:i})]})]})};_e.defaultProps={type:"text"};var De=_e,qe=function(){var e=Object(j.b)(),t=Object(c.g)(),r=Object(j.c)((function(e){return e.user.error})),a=Object(n.useState)({email:"",password:""}),s=Object(Ce.a)(a,2),i=s[0],o=s[1],u=Object(n.useState)({}),l=Object(Ce.a)(u,2),d=l[0],p=l[1],b={email:{isRequired:{message:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isEmail:{message:"Email \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"}},password:{isRequired:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isCapitalSymbol:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443"},isContainDigit:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443"},min:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:8}}};Object(n.useEffect)((function(){m()}),[i]);var m=function(){var e=Le(i,b);return p(e),0===Object.keys(e).length},g=function(e){o((function(t){return Object(C.a)(Object(C.a)({},t),{},Object(Re.a)({},e.name,e.value))}))},x=0===Object.keys(d).length;return Object(te.jsx)(je.a,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{marginTop:10,marginBottom:5,width:500,height:340,border:.5,borderColor:"lightblue",p:3,boxShadow:5},justifyContent:"center"},children:Object(te.jsxs)("form",{style:{marginTop:10},onSubmit:function(r){if(r.preventDefault(),m()){var n=t.location.state?t.location.state.from.pathname:"/";e(function(e){var t=e.payload,r=e.redirect;return function(){var e=Object(h.a)(f.a.mark((function e(n){var a,s,c,i,o,u,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,s=t.password,n(M()),e.prev=2,e.next=5,T.login({email:a,password:s});case 5:c=e.sent,n(V({userId:c.localId})),k.setTokens(c),B.push(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),i=e.t0.response.data.error,o=i.code,u=i.message,400===o?(l=A(u),n($(l))):n($(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}({payload:i,redirect:n}))}},children:[Object(te.jsx)(De,{label:"\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",type:"text",name:"email",value:i.email,onChange:g,error:d.email,variant:"standard",sx:{width:450}}),Object(te.jsx)(De,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",value:i.password,onChange:g,error:d.password,variant:"standard",sx:{width:450}}),r&&Object(te.jsx)("p",{className:"text-danger",children:r}),Object(te.jsx)(oe.a,{sx:{marginTop:3,width:200,marginLeft:18},variant:"outlined",color:"primary",type:"submit",disabled:!x,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},Ae=function(){var e=Object(j.b)(),t=Object(n.useState)({email:"",password:"",name:""}),r=Object(Ce.a)(t,2),a=r[0],s=r[1],c=Object(n.useState)({}),i=Object(Ce.a)(c,2),o=i[0],u=i[1],l=function(e){s((function(t){return Object(C.a)(Object(C.a)({},t),{},Object(Re.a)({},e.name,e.value))}))},d={email:{isRequired:{message:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isEmail:{message:"Email \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"}},password:{isRequired:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},isCapitalSymbol:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443"},isContainDigit:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u0446\u0438\u0444\u0440\u0443"},min:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:8}},name:{isRequired:{message:"\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},min:{message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u0435\u043d\u043e \u0441\u043e\u0441\u0442\u0430\u044f\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443 \u0438\u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:2}}};Object(n.useEffect)((function(){p()}),[a]);var p=function(){var e=Le(a,d);return u(e),0===Object.keys(e).length},b=0===Object.keys(o).length;return Object(te.jsx)(je.a,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{marginTop:10,width:500,marginBottom:5,border:.5,borderColor:"lightblue",p:3,boxShadow:5},justifyContent:"center"},children:Object(te.jsxs)("form",{style:{marginTop:10},onSubmit:function(t){if(t.preventDefault(),p()){var r=Object(C.a)({},a);e(function(e){var t=e.email,r=e.password,n=e.name;return function(){var e=Object(h.a)(f.a.mark((function e(a){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(M()),e.prev=1,e.next=4,T.register({email:t,password:r});case 4:s=e.sent,k.setTokens(s),a(V({userId:s.localId})),a(Z({_id:s.localId,email:t,name:n})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a($(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}(r)),console.log(r)}},children:[Object(te.jsx)(De,{label:"\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",type:"text",name:"email",value:a.email,onChange:l,error:o.email,variant:"standard",sx:{width:450}}),Object(te.jsx)(De,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",value:a.password,onChange:l,error:o.password,variant:"standard",sx:{width:450}}),Object(te.jsx)(De,{label:"\u0418\u043c\u044f",name:"name",value:a.name,onChange:l,error:o.name}),Object(te.jsx)(oe.a,{sx:{marginTop:3,width:200,marginLeft:18},variant:"outlined",color:"primary",type:"submit",disabled:!b,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})},Pe=function(){var e=Object(c.h)().type,t=Object(n.useState)("register"===e?e:"login"),r=Object(Ce.a)(t,2),a=r[0],s=r[1],i=function(e){s((function(e){return"register"===e?"login":"register"}))};return Object(te.jsx)(je.a,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{marginTop:10,width:700,border:.5,borderColor:"Blue",p:3,boxShadow:5},justifyContent:"center"},children:Object(te.jsx)("div",{children:"register"===a?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)("h3",{className:"mb-4",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(te.jsx)(Ae,{}),Object(te.jsxs)("p",{children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"," ",Object(te.jsx)("a",{role:"button",onClick:i,children:"\u0412\u043e\u0439\u0442\u0438"})]})]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)("h3",{children:"\u0412\u0445\u043e\u0434"}),Object(te.jsx)(qe,{}),Object(te.jsxs)("p",{children:["\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"," ",Object(te.jsx)("a",{role:"button",onClick:i,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0441\u044f"})]})]})})})},Be=function(){return Object(te.jsx)(te.Fragment,{})};var Ne=function(){return console.log(window.outerHeight,window.outerWidth),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ne,{}),Object(te.jsxs)(c.d,{children:[Object(te.jsx)(c.b,{path:"/articles/",component:ke}),Object(te.jsx)(c.b,{path:"/articles/:articleId?",component:le}),Object(te.jsx)(c.b,{path:"/:?userId",component:Be}),Object(te.jsx)(c.b,{path:"/login",component:Pe}),Object(te.jsx)(c.b,{path:"/about",component:Ie}),Object(te.jsx)(c.b,{path:"/",exact:!0,component:Se}),Object(te.jsx)(c.b,{path:"/404",component:Te}),Object(te.jsx)(c.a,{to:"/404"})]})]})},Ue=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,167)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},We=(r(131),r(36)),Ge=We.combineReducers,He=We.configureStore,Ke=Ge({user:Q,articles:ye});var Je=He({reducer:Ke});s.a.render(Object(te.jsx)(j.a,{store:Je,children:Object(te.jsx)(c.c,{history:B,children:Object(te.jsx)(Ne,{})})}),document.getElementById("root")),Ue()},48:function(e){e.exports=JSON.parse('{"apiEndPoint":"https://my-blog-f5fcf-default-rtdb.europe-west1.firebasedatabase.app/","isFireBase":true}')}},[[132,1,2]]]);
//# sourceMappingURL=main.ee6f7988.chunk.js.map