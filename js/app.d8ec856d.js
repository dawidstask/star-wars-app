(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)o=s[c],i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({movie:"movie",reviews:"reviews"}[e]||e)+"."+{movie:"e68d6444",reviews:"001a8e58"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={movie:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({movie:"movie",reviews:"reviews"}[e]||e)+"."+{movie:"cd1f7cad",reviews:"31d6cfe0"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===r||c===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e),l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/star-wars-app/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e4e":function(e,t,n){"use strict";var r=n("1b36"),o=n.n(r);o.a},"1b36":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("d847"),i=n.n(o),a=n("795b"),s=n.n(a),u=n("bc3a"),l=n.n(u),c={},f=l.a.create(c);f.interceptors.request.use(function(e){return e},function(e){return s.a.reject(e)}),f.interceptors.response.use(function(e){return e},function(e){return s.a.reject(e)}),Plugin.install=function(e,t){e.axios=f,window.axios=f,i()(e.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},r["default"].use(Plugin);Plugin;var d=n("5c96"),p=n.n(d),v=n("b2d6"),m=n.n(v),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/reviews"}},[e._v("Reviews")])],1),n("router-view")],1)},g=[],b=(n("5c0b"),n("2877")),w={},y=Object(b["a"])(w,h,g,!1,null,null,null),x=y.exports,j=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("MoviesTable")],1)},k=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[!e.loading&&e.filterData?n("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e(),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.filterData,"highlight-current-row":""},on:{"current-change":e.redirectToMovie}},[n("el-table-column",{attrs:{prop:"title",label:"Title",sortable:""}}),n("el-table-column",{attrs:{prop:"director",label:"Director",sortable:""}}),n("el-table-column",{attrs:{label:"Actions"}},[e._v("\n      Show more info\n    ")])],1)],1)},O=[];n("c5f6"),n("386d"),n("6762"),n("2fdb");function E(e,t){return e.toLowerCase().includes(t.toLowerCase())}var P={name:"MoviesTable",data:function(){return{films:null,loading:!1,search:""}},computed:{filterData:function(e){var t=e.films,n=e.search;return t?t.filter(function(e){return!n||E(e.title,n)||E(e.director,n)}):null}},mounted:function(){var e=this;this.loading=!0,this.$axios.get("https://swapi.co/api/films").then(function(t){e.films=t.data.results,e.loading=!1}).catch(function(t){e.$notify.error({title:"Error",message:t,type:"error"}),e.loading=!1})},methods:{getMovieId:function(e){return Number(/[0-9]/g.exec(e))},redirectToMovie:function(e){this.$router.push({name:"movie",params:{id:this.getMovieId(e.url)}})}}},M=P,S=(n("0e4e"),Object(b["a"])(M,T,O,!1,null,null,null)),N=S.exports,A={name:"home",components:{MoviesTable:N}},C=A,$=Object(b["a"])(C,_,k,!1,null,null,null),q=$.exports;r["default"].use(j["a"]);var B=new j["a"]({mode:"history",routes:[{path:"/",name:"home",component:q},{path:"/reviews",name:"reviews",component:function(){return n.e("reviews").then(n.bind(null,"2e51"))}},{path:"/movie/:id",name:"movie",component:function(){return n.e("movie").then(n.bind(null,"def6"))}}]}),D=n("2f62");r["default"].use(D["a"]);var L=new D["a"].Store({state:{reviews:[]},getters:{getReviews:function(e){return e.reviews}},mutations:{addReview:function(e,t){e.reviews.push(t),console.log(this.state.reviews)}},actions:{}}),R=n("9483");Object(R["a"])("".concat("/star-wars-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("0fae");r["default"].config.productionTip=!1,r["default"].use(p.a,{locale:m.a}),new r["default"]({router:B,store:L,render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.d8ec856d.js.map