var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,s)=>{for(var r in s||(s={}))t.call(s,r)&&o(e,r,s[r]);if(n)for(var r of n(s))a.call(s,r)&&o(e,r,s[r]);return e};import{_ as r,a as l,b as c,c as i,d as u,e as d,r as m,f as p,o as v,g as h,h as f,w as y,i as b,j as x,u as V,k as g,l as k,t as C,m as _,n as L,p as O,q as w,s as U,v as E,x as A,y as R,z as j,F as M,A as P,B as T,C as F}from"./vendor.9b2f531a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),o(c)},onload(){n(self[t].moduleMap[r]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");let H;const S={};var $=d({name:"Home",setup:()=>({value1:m(""),value2:m(""),value3:m(""),handleClick:()=>{console.log("hello")}})});const N={class:"home-container page-container"},B=b("开始"),I=f("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1);$.render=function(e,t,n,a,o,s){const r=p("el-input"),l=p("el-button");return v(),h("div",N,[f(r,{modelValue:e.value1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value1=t),placeholder:"请输入内容"},null,8,["modelValue"]),f(r,{modelValue:e.value2,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value2=t)},null,8,["modelValue"]),f(r,{modelValue:e.value3,"onUpdate:modelValue":t[3]||(t[3]=t=>e.value3=t)},null,8,["modelValue"]),f(l,{onClick:e.handleClick,type:"primary"},{default:y((()=>[B])),_:1},8,["onClick"]),I])};const D=x({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),q=Symbol("vue-store");var z=d({name:"Vuex",setup(){const e=V(q),t=g({text:k((()=>e.state.text)),count:k((()=>e.state.numFactoryModule.count))});return s(s({},C(t)),{double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}})}});const G={class:"vuex-container page-container"},W=f("div",{class:"page-title"},"Vuex Test Page",-1),J=b("double");z.render=function(e,t,n,a,o,s){const r=p("el-button");return v(),h("div",G,[W,f("p",null,"store Root is: "+_(e.text),1),f("p",null,"store doubleCount is: "+_(e.count),1),f(r,{type:"primary",onClick:e.double},{default:y((()=>[J])),_:1},8,["onClick"])])};var K=d({name:"Vuex",setup(){const e=m(0);return{count:e,increment:()=>{e.value+=1}}}});const Q={class:"test-container page-container"},X=f("div",{class:"page-title"},"Unit Test Page",-1);K.render=function(e,t,n,a,o,s){return v(),h("div",Q,[X,f("p",null,"count is: "+_(e.count),1),f("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment")])};const Y=[{path:"/",name:"Home",component:$},{path:"/vuex",name:"Vuex",component:z},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===H){const e=document.createElement("link").relList;H=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in S)return;S[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":H,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./Axios.d2c2a9e9.js")),["./assets/Axios.d2c2a9e9.js","./assets/Axios.264f78dd.css","./assets/vendor.9b2f531a.js"])},{path:"/test",name:"Test",component:K}],Z=L({history:O(),routes:Y}),ee={class:"header"},te=f("i",{class:"icon el-icon-s-promotion"},null,-1),ne=b(" GitHub ");var ae=d({expose:[],setup(e){const t=U(),n=()=>{window.open("https://github.com/vectorzero/vite-vue3-starter")};return(e,a)=>(v(),h("div",ee,[f("div",{class:"title",onClick:a[1]||(a[1]=e=>w(t).push("/"))}," Vite2.x + Vue3.x + TypeScript Starter "),f("div",{class:"go-github",onClick:n},[te,ne])]))}}),oe=d({name:"Nav",setup(){const e=U(),t=g({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),n=e=>{t.navList.forEach((t=>{const n=t;return n.isActive=n.path===e,n}))};return E((()=>e.currentRoute.value),(e=>{n(e.path)})),A((()=>{e.isReady().then((()=>{n(e.currentRoute.value.path)}))})),s({},C(t))}});const se=T();R("data-v-9056cfea");const re={class:"nav"},le={class:"nav-list"};j();const ce=se(((e,t,n,a,o,s)=>(v(),h("aside",re,[f("ul",le,[(v(!0),h(M,null,P(e.navList,((t,n)=>(v(),h("li",{class:["nav-item flex-center",{active:t.isActive}],key:n,onClick:n=>e.navClick(t)},_(t.name),11,["onClick"])))),128))])]))));oe.render=ce,oe.__scopeId="data-v-9056cfea";var ie=d({name:"Main",components:{Header:ae,Nav:oe}});const ue=T();R("data-v-705c113d");const de={class:"main-container"},me={class:"top"},pe={class:"bottom"},ve={class:"left"},he={class:"right"},fe={class:"content"};j();const ye=ue(((e,t,n,a,o,s)=>{const r=p("Header"),l=p("Nav"),c=p("router-view");return v(),h("main",de,[f("div",me,[f(r)]),f("div",pe,[f("div",ve,[f(l)]),f("div",he,[f("div",fe,[f(c)])])])])}));ie.render=ye,ie.__scopeId="data-v-705c113d";var be=d({name:"App",components:{Main:ie}});be.render=function(e,t,n,a,o,s){const r=p("Main");return v(),h(r)};const xe=F(be);var Ve;(Ve=xe,Ve.use(r).use(l).use(c).use(i).use(u),Ve).use(Z).use(D,q).mount("#app");