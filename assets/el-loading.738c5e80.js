var T=Object.defineProperty,V=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(t,e,l)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,f=(t,e)=>{for(var l in e||(e={}))E.call(e,l)&&w(t,l,e[l]);if(L)for(var l of L(e))P.call(e,l)&&w(t,l,e[l]);return t},p=(t,e)=>V(t,N(e));import{K as O,f as _,a1 as R,c0 as j,c1 as y,A as g,w as z,ar as H,aX as K,b as Z,at as q,aH as D,ac as $,bt as B,c2 as F,c3 as m,c4 as h,bz as I,c5 as M,c6 as X}from"./index.864800fd.js";function Y(t){let e;const l=_(!1),a=R(p(f({},t),{originalPosition:"",originalOverflow:"",visible:!1}));function s(n){a.text=n}function o(){const n=a.parent;if(!n.vLoadingAddClassList){let r=n.getAttribute("loading-number");r=Number.parseInt(r)-1,r?n.setAttribute("loading-number",r.toString()):(y(n,"el-loading-parent--relative"),n.removeAttribute("loading-number")),y(n,"el-loading-parent--hidden")}i(),v.unmount()}function i(){var n,r;(r=(n=d.$el)==null?void 0:n.parentNode)==null||r.removeChild(d.$el)}function c(){var n;if(t.beforeClose&&!t.beforeClose())return;const r=a.parent;r.vLoadingAddClassList=void 0,l.value=!0,clearTimeout(e),e=window.setTimeout(()=>{l.value&&(l.value=!1,o())},400),a.visible=!1,(n=t.closed)==null||n.call(t)}function b(){!l.value||(l.value=!1,o())}const v=j({name:"ElLoading",setup(){return()=>{const n=a.spinner||a.svg,r=g("svg",f({class:"circular",viewBox:a.svgViewBox?a.svgViewBox:"25 25 50 50"},n?{innerHTML:n}:{}),[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),S=a.text?g("p",{class:"el-loading-text"},[a.text]):void 0;return g(q,{name:"el-loading-fade",onAfterLeave:b},{default:z(()=>[H(Z("div",{style:{backgroundColor:a.background||""},class:["el-loading-mask",a.customClass,a.fullscreen?"is-fullscreen":""]},[g("div",{class:"el-loading-spinner"},[r,S])]),[[K,a.visible]])])})}}}),d=v.mount(document.createElement("div"));return p(f({},O(a)),{setText:s,remvoeElLoadingChild:i,close:c,handleAfterLeave:b,vm:d,get $el(){return d.$el}})}let x;const G=function(t={}){if(!D)return;const e=J(t);if(e.fullscreen&&x)return x;const l=Y(p(f({},e),{closed:()=>{var s;(s=e.closed)==null||s.call(e),e.fullscreen&&(x=void 0)}}));Q(e,e.parent,l),k(e,e.parent,l),e.parent.vLoadingAddClassList=()=>k(e,e.parent,l);let a=e.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",e.parent.setAttribute("loading-number",a),e.parent.appendChild(l.$el),$(()=>l.visible.value=e.visible),e.fullscreen&&(x=l),l},J=t=>{var e,l,a,s;let o;return B(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(a=t.lock)!=null?a:!1,customClass:t.customClass||"",visible:(s=t.visible)!=null?s:!0,target:o}},Q=async(t,e,l)=>{const{nextZIndex:a}=F(),s={};if(t.fullscreen)l.originalPosition.value=m(document.body,"position"),l.originalOverflow.value=m(document.body,"overflow"),s.zIndex=a();else if(t.parent===document.body){l.originalPosition.value=m(document.body,"position"),await $();for(const o of["top","left"]){const i=o==="top"?"scrollTop":"scrollLeft";s[o]=`${t.target.getBoundingClientRect()[o]+document.body[i]+document.documentElement[i]-Number.parseInt(m(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])s[o]=`${t.target.getBoundingClientRect()[o]}px`}else l.originalPosition.value=m(e,"position");for(const[o,i]of Object.entries(s))l.$el.style[o]=i},k=(t,e,l)=>{l.originalPosition.value!=="absolute"&&l.originalPosition.value!=="fixed"?h(e,"el-loading-parent--relative"):y(e,"el-loading-parent--relative"),t.fullscreen&&t.lock?h(e,"el-loading-parent--hidden"):y(e,"el-loading-parent--hidden")},C=Symbol("ElLoading"),A=(t,e)=>{var l,a,s,o;const i=e.instance,c=n=>I(e.value)?e.value[n]:void 0,b=n=>{const r=B(n)&&(i==null?void 0:i[n])||n;return r&&_(r)},u=n=>b(c(n)||t.getAttribute(`element-loading-${M(n)}`)),v=(l=c("fullscreen"))!=null?l:e.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:v,target:(a=c("target"))!=null?a:v?void 0:t,body:(s=c("body"))!=null?s:e.modifiers.body,lock:(o=c("lock"))!=null?o:e.modifiers.lock};t[C]={options:d,instance:G(d)}},U=(t,e)=>{for(const l of Object.keys(e))X(e[l])&&(e[l].value=t[l])},te={mounted(t,e){e.value&&A(t,e)},updated(t,e){const l=t[C];e.oldValue!==e.value&&(e.value&&!e.oldValue?A(t,e):e.value&&e.oldValue?I(e.value)&&U(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[C])==null||e.instance.close()}};export{te as v};
