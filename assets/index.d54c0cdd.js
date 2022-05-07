var ne=Object.defineProperty,ue=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var P=(n,u,t)=>u in n?ne(n,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[u]=t,j=(n,u)=>{for(var t in u||(u={}))ie.call(u,t)&&P(n,t,u[t]);if(O)for(var t of O(u))de.call(u,t)&&P(n,t,u[t]);return n},W=(n,u)=>ue(n,ce(u));import{a2 as fe,a3 as _,a4 as $,bw as b,bx as F,by as ve,a8 as pe,aD as y,e as me,n as he,aa as ye,ag as xe,l as be,f as T,m as c,bf as K,bz as L,L as Ve,o as v,c as V,J as we,I as Ce,x as h,ah as r,b as ge,w as R,g as E,H as q,y as D,W as J,C as U,t as Se,q as _e,s as w,aY as X,a6 as Te}from"./index.864800fd.js";const Ee=fe({modelValue:{type:Number,default:0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:_([Array,Object]),default:()=>$(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:_([Array,Object]),default:()=>[b,b,b]},voidIcon:{type:F,default:()=>ve},disabledVoidIcon:{type:F,default:()=>b},disabled:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},textColor:{type:String,default:""},texts:{type:_(Array),default:()=>$(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:{type:String,validator:pe}}),De={change:n=>typeof n=="number",[y]:n=>typeof n=="number"},He=["aria-valuenow","aria-valuetext","aria-valuemax"],Me=["onMousemove","onClick"],Ie={name:"ElRate"},Ne=me(W(j({},Ie),{props:Ee,emits:De,setup(n,{expose:u,emit:t}){const e=n;function C(a,l){const o=f=>L(f),S=Object.keys(l).map(f=>+f).filter(f=>{const x=l[f];return(o(x)?x.excluded:!1)?a<f:a<=f}).sort((f,x)=>f-x),m=l[S[0]];return o(m)&&m.value||m}const H=he(ye,void 0),Y=xe(),i=be("rate"),s=T(e.modelValue),g=T(-1),p=T(!0),G=c(()=>[i.b(),i.m(Y.value)]),d=c(()=>e.disabled||(H==null?void 0:H.disabled)),Q=c(()=>({"--el-rate-void-color":e.voidColor,"--el-rate-disabled-void-color":e.disabledVoidColor,"--el-rate-fill-color":N.value})),M=c(()=>{let a="";return e.showScore?a=e.scoreTemplate.replace(/\{\s*value\s*\}/,d.value?`${e.modelValue}`:`${s.value}`):e.showText&&(a=e.texts[Math.ceil(s.value)-1]),a}),I=c(()=>e.modelValue*100-Math.floor(e.modelValue)*100),Z=c(()=>K(e.colors)?{[e.lowThreshold]:e.colors[0],[e.highThreshold]:{value:e.colors[1],excluded:!0},[e.max]:e.colors[2]}:e.colors),N=c(()=>{const a=C(s.value,Z.value);return L(a)?"":a}),ee=c(()=>{let a="";return d.value?a=`${I.value}%`:e.allowHalf&&(a="50%"),{color:N.value,width:a}}),k=c(()=>K(e.icons)?{[e.lowThreshold]:e.icons[0],[e.highThreshold]:{value:e.icons[1],excluded:!0},[e.max]:e.icons[2]}:e.icons),ae=c(()=>C(e.modelValue,k.value)),le=c(()=>d.value?e.disabledVoidIcon:e.voidIcon),oe=c(()=>C(s.value,k.value)),te=c(()=>{const a=Array.from({length:e.max}),l=s.value;return a.fill(oe.value,0,l),a.fill(le.value,l,e.max),a});function A(a){const l=d.value&&I.value>0&&a-1<e.modelValue&&a>e.modelValue,o=e.allowHalf&&p.value&&a-.5<=s.value&&a>s.value;return l||o}function se(a){d.value||(e.allowHalf&&p.value?(t(y,s.value),e.modelValue!==s.value&&t("change",s.value)):(t(y,a),e.modelValue!==a&&t("change",a)))}function re(a){if(d.value)return;let l=s.value;const o=a.code;return o===w.up||o===w.right?(e.allowHalf?l+=.5:l+=1,a.stopPropagation(),a.preventDefault()):(o===w.left||o===w.down)&&(e.allowHalf?l-=.5:l-=1,a.stopPropagation(),a.preventDefault()),l=l<0?0:l,l=l>e.max?e.max:l,t(y,l),t("change",l),l}function z(a,l){if(!d.value){if(e.allowHalf){let o=l.target;X(o,i.e("item"))&&(o=o.querySelector(`.${i.e("icon")}`)),(o.clientWidth===0||X(o,i.e("decimal")))&&(o=o.parentNode),p.value=l.offsetX*2<=o.clientWidth,s.value=p.value?a-.5:a}else s.value=a;g.value=a}}function B(){d.value||(e.allowHalf&&(p.value=e.modelValue!==Math.floor(e.modelValue)),s.value=e.modelValue,g.value=-1)}return Ve(()=>e.modelValue,a=>{s.value=a,p.value=e.modelValue!==Math.floor(e.modelValue)}),e.modelValue||t(y,0),u({setCurrentValue:z,resetCurrentValue:B}),(a,l)=>(v(),V("div",{class:h([r(G),r(i).is("disabled",r(d))]),role:"slider","aria-valuenow":s.value,"aria-valuetext":r(M),"aria-valuemin":"0","aria-valuemax":a.max,tabindex:"0",style:J(r(Q)),onKeydown:re},[(v(!0),V(we,null,Ce(a.max,(o,S)=>(v(),V("span",{key:S,class:h(r(i).e("item")),onMousemove:m=>z(o,m),onMouseleave:B,onClick:m=>se(o)},[ge(r(U),{class:h([r(i).e("icon"),{hover:g.value===o},r(i).is("active",o<=s.value)])},{default:R(()=>[A(o)?D("v-if",!0):(v(),E(q(r(te)[o-1]),{key:0})),A(o)?(v(),E(r(U),{key:1,style:J(r(ee)),class:h([r(i).e("icon"),r(i).e("decimal")])},{default:R(()=>[(v(),E(q(r(ae))))]),_:1},8,["style","class"])):D("v-if",!0)]),_:2},1032,["class"])],42,Me))),128)),a.showText||a.showScore?(v(),V("span",{key:0,class:h(r(i).e("text"))},Se(r(M)),3)):D("v-if",!0)],46,He))}}));var ke=_e(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const Oe=Te(ke);export{Oe as E};
