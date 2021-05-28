(function(e){function n(n){for(var r,a,s=n[0],u=n[1],c=n[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(d.length)d.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var s=t[a];0!==o[s]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3f83afa3"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={about:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"d0e62f1f"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),t(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(n){l.onerror=l.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/undefined/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var p=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},1:function(e,n){},10:function(e,n){},11:function(e,n){},12:function(e,n){},13:function(e,n){},14:function(e,n){},2:function(e,n){},3:function(e,n){},"39ff":function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var r,a,o,i,s,u,c,l,d,p,m,f,b,g,h,v,O,w,j=t("8785"),_=t("5184"),E={USER:Object(_["a"])(r||(r=Object(j["a"])(["\n    query user{\n      me{\n        id\n        username\n        currentRoom{\n          id\n        }\n      }\n    }\n  "]))),USER_EXIST:Object(_["a"])(a||(a=Object(j["a"])(["\n    query userExists($username: String!) {\n      usernameExists(username: $username)\n    }\n  "]))),LOGIN_USER:Object(_["a"])(o||(o=Object(j["a"])(["\n    query login($username: String!, $password: String!) {\n      login(username: $username, password: $password)\n    }\n  "]))),REGISTER_USER:Object(_["a"])(i||(i=Object(j["a"])(["\n    query register($username: String!, $password: String!) {\n      register(username: $username, password: $password)\n      {\n        id\n        username\n      }\n    }\n  "]))),GET_ROOMS:Object(_["a"])(s||(s=Object(j["a"])(["\n    query rooms{\n      rooms{\n        id\n        name\n        owner{\n          id\n        }\n      }\n    }\n  "]))),GET_MESSAGES:Object(_["a"])(u||(u=Object(j["a"])(["\n    query messages{\n      me{\n        id\n        username\n        currentRoom{\n          id\n          name\n          members{\n            id\n            username\n          }\n          owner{\n            id\n            username\n          }\n          lastMessages{\n            id\n            text\n            timestamp\n            author{\n              username\n            }\n          }\n        }\n      }\n    }\n  "]))),JOIN_ROOM:Object(_["a"])(c||(c=Object(j["a"])(["\n    mutation join($roomId: ID!){\n      joinRoom(roomId:$roomId){\n        id\n        name\n        members{\n          id\n          username\n        }\n        owner{\n          id\n          username\n        }\n        lastMessages{\n          id\n          text\n          timestamp\n          author{\n            username\n          }\n        }\n      }\n    }\n  "]))),LEAVE_ROOM:Object(_["a"])(l||(l=Object(j["a"])(["\n    mutation leave{\n      leaveCurrentRoom{\n        id\n      }\n    }\n  "]))),CREATE_ROOM:Object(_["a"])(d||(d=Object(j["a"])(["\n    mutation create_room($name:String!){\n      createRoom(name:$name)\n      {\n        id\n        name\n      }\n    }\n  "]))),UPDATE_ROOM:Object(_["a"])(p||(p=Object(j["a"])(["\n  mutation update_room($id: ID!, $name: String!){\n    updateRoom(id: $id, name: $name)\n    {\n      id\n      name\n    }\n  }\n  "]))),DELETE_ROOM:Object(_["a"])(m||(m=Object(j["a"])(["\n  mutation delete_room($id: ID!){\n    deleteRoom(id: $id)\n    {\n      id\n      name\n    }\n  }\n  "]))),CREATE_MESSAGE:Object(_["a"])(f||(f=Object(j["a"])(["\n    mutation createMessage($text: String!){\n      createMessage(text: $text){\n        id\n        text\n        timestamp\n      }\n    }\n  "]))),ON_CREATE_ROOM:Object(_["a"])(b||(b=Object(j["a"])(["\n  subscription create{\n    roomCreated{\n       id\n        name\n        owner{\n          id\n        }\n    }\n  }\n  "]))),ON_CREATE_MESSAGE:Object(_["a"])(g||(g=Object(j["a"])(["\n  subscription create{\n    messageCreated{\n      id\n      text\n      timestamp\n      author{\n        username\n      }\n    }\n  }\n  "]))),ON_USER_LEAVE:Object(_["a"])(h||(h=Object(j["a"])(["\n  subscription user_leave{\n    memberLeft{\n       id\n       username\n    }\n  }\n  "]))),ON_USER_JOIN:Object(_["a"])(v||(v=Object(j["a"])(["\n  subscription user_join{\n    memberJoined{\n      id\n      username\n    }\n  }\n  "]))),ON_UPDATE_ROOM:Object(_["a"])(O||(O=Object(j["a"])(["\n  subscription update_room{\n    roomUpdated{\n      id\n      name\n      owner{\n        id\n        username\n      }\n    }\n  }\n  "]))),ON_DELETE_ROOM:Object(_["a"])(w||(w=Object(j["a"])(["\n  subscription delete_room{\n    roomDeleted{\n      id\n      name\n      owner{\n        id\n      }\n    }\n  }\n "])))}},"3e12":function(e,n,t){"use strict";t("da70")},4:function(e,n){},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Sign In")]),e._v(" | "),t("router-link",{attrs:{to:"/reg"}},[e._v("Registration")]),e._v(" | "),t("router-link",{attrs:{to:"/chatrooms"}},[e._v("Chat rooms")])],1),t("router-view")],1)},o=[],i=(t("034f"),t("2877")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h4",{attrs:{id:"welcome"}},[e._v("Welcome to chat rooms app!")]),t("br"),e.isIncorrect?t("h5",[e._v("Incorrect login or password! Please, try again.")]):e._e(),t("p",[e._v("Login:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],attrs:{type:"text"},domProps:{value:e.login},on:{input:function(n){n.target.composing||(e.login=n.target.value)}}}),t("p",[e._v("Password:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}}),t("br"),t("br"),t("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:e.onClick}},[e._v("Sign In")]),null!==e.user.data?t("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:e.onSigningOut}},[e._v("Sign Out")]):e._e()])},p=[],m=t("1da1"),f=(t("498a"),t("96cf"),t("39ff")),b=t("79e8"),g=t("ca94"),h={name:"Sign_In",data:function(){return{isLogined:!0,isIncorrect:!1,login:"",password:"",user:{data:null}}},created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$apollo.query({query:f["a"].USER,fetchPolicy:"no-cache"});case 3:this.$data.user=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.$data.user.data=null;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function n(){return e.apply(this,arguments)}return n}(),methods:{onClick:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var t,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.$data.isIncorrect=!1,t=Object(b["a"])(e.$data.password.trim()),e.$data.password="",r=e.$data.login.trim(),null===e.$data.user.data){n.next=7;break}return n.next=7,Object(g["c"])(e.$apollo.provider.defaultClient);case 7:return n.prev=7,console.log(r),console.log(t),n.next=12,e.$apollo.query({query:f["a"].LOGIN_USER,variables:{username:r,password:t}});case 12:return a=n.sent,console.log(a),n.next=16,Object(g["b"])(e.$apollo.provider.defaultClient,a.data.login);case 16:e.$router.push({name:"Chat_Rooms"}),n.next=22;break;case 19:n.prev=19,n.t0=n["catch"](7),e.$data.isIncorrect=!0;case 22:case"end":return n.stop()}}),n,null,[[7,19]])})))()},onSigningOut:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(g["c"])(e.$apollo.provider.defaultClient);case 3:e.$data.user.data=null,n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},v=h,O=(t("3e12"),Object(i["a"])(v,d,p,!1,null,null,null)),w=O.exports;r["a"].use(l["a"]);var j=[{path:"/",name:"Sign_In",component:w},{path:"/reg",name:"Registration",component:function(){return t.e("about").then(t.bind(null,"3fd1"))}},{path:"/chatrooms",name:"Chat_Rooms",component:function(){return t.e("about").then(t.bind(null,"e228"))}},{path:"/chatrooms/:id",name:"Room",component:function(){return t.e("about").then(t.bind(null,"3ab1"))}}],_=new l["a"]({mode:"history",base:"/undefined/",routes:j}),E=_;r["a"].config.productionTip=!1,new r["a"]({router:E,apolloProvider:Object(g["a"])(),render:function(e){return e(c)}}).$mount("#app")},6:function(e,n){},7:function(e,n){},"79e8":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("1c46"),a=t("a1bc");function o(e){var n=a.salt,t=r.Hmac("sha512",n);t.update(e);var o=t.digest("hex");return o}},8:function(e,n){},"85ec":function(e,n,t){},9:function(e,n){},a1bc:function(e,n,t){t("ed18").config(),e.exports={salt:"12eqwasd"}},ca94:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p})),t.d(n,"c",(function(){return f}));var r=t("1da1"),a=t("5530"),o=(t("96cf"),t("2b0e")),i=t("522d"),s=t("efe7");o["a"].use(i["a"]);var u="apollo-token",c="https://webprogbase-lab6-graphql.herokuapp.com/",l={httpEndpoint:c,wsEndpoint:"wss://webprogbase-lab6-graphql.herokuapp.com/graphql",tokenName:u,persisting:!1,websocketsOnly:!1,ssr:!1};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(s["createApolloClient"])(Object(a["a"])(Object(a["a"])({},l),e)),t=n.apolloClient,r=n.wsClient;t.wsClient=r;var o=new i["a"]({defaultClient:t,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return o}function p(e,n){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&t&&localStorage.setItem(u,t),n.wsClient&&Object(s["restartWebsockets"])(n.wsClient),e.prev=2,e.next=5,n.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (login)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),m.apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&localStorage.removeItem(u),n.wsClient&&Object(s["restartWebsockets"])(n.wsClient),e.prev=2,e.next=5,n.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (logout)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),b.apply(this,arguments)}},da70:function(e,n,t){}});
//# sourceMappingURL=app.5367e037.js.map