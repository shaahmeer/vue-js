(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d21e426":"e221b945","chunk-5e4d5ff9":"d00359cd","chunk-77f0574a":"ec68a0ff","chunk-b49b2ae2":"50f6d8e7"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-5e4d5ff9":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21e426":"31d6cfe0","chunk-5e4d5ff9":"e4165045","chunk-77f0574a":"31d6cfe0","chunk-b49b2ae2":"31d6cfe0"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1182:function(e,t,n){},"26fe":function(e,t,n){"use strict";n("d00b")},"34ba":function(e,t,n){"use strict";n("1182")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-layout"},[n("NavBar"),n("h2",{staticClass:"page-title"}),n("div",{staticClass:"page-container"},[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/",id:"a"}},[e._v(" To-Do List ")]),n("router-link",{attrs:{to:"/info",id:"a"}},[e._v(" Information ")])],1)},l=[],s=(n("34ba"),n("2877")),f={},d=Object(s["a"])(f,c,l,!1,null,null,null),p=d.exports,h={name:"MainLayout",components:{NavBar:p}},m=h,v=(n("26fe"),Object(s["a"])(m,u,i,!1,null,"3606ec2c",null)),b=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-layout"},[n("h2",{staticClass:"page-title"}),n("div",{staticClass:"page-container"},[n("router-view")],1)])},g=[],k={name:"AuthLayout"},w=k,_=(n("5e05"),Object(s["a"])(w,y,g,!1,null,"4a9054fe",null)),O=_.exports,j={name:"App",components:{MainLayout:b,AuthLayout:O},computed:{layout:function(){var e;return(null===(e=this.$route.meta)||void 0===e?void 0:e.layout)||"main-layout"}}},C=j,E=(n("034f"),Object(s["a"])(C,a,o,!1,null,null,null)),x=E.exports,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(L["a"]);var P=[{path:"/",name:"home",meta:{title:"Список дел",layout:"main-layout"},component:function(){return n.e("chunk-77f0574a").then(n.bind(null,"78a7"))}},{path:"/info",name:"Info",meta:{title:"Информация",layout:"main-layout"},component:function(){return n.e("chunk-2d21e426").then(n.bind(null,"d598"))}},{path:"/login",name:"login",meta:{title:"Вход",layout:"auth-layout"},component:function(){return n.e("chunk-b49b2ae2").then(n.bind(null,"62cc"))}},{path:"/registration",name:"registration",meta:{title:"Регистрация",layout:"auth-layout"},component:function(){return n.e("chunk-5e4d5ff9").then(n.bind(null,"9f08"))}}],A=new L["a"]({mode:"history",base:"/",routes:P}),S=A;n("d940");r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(e){return e(x)}}).$mount("#app")},"5e05":function(e,t,n){"use strict";n("ab62")},"85ec":function(e,t,n){},ab62:function(e,t,n){},d00b:function(e,t,n){},d940:function(e,t,n){}});
//# sourceMappingURL=app.dd745857.js.map