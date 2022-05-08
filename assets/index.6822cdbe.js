var ne=Object.defineProperty,ue=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var O=(n,u,t)=>u in n?ne(n,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[u]=t,P=(n,u)=>{for(var t in u||(u={}))ie.call(u,t)&&O(n,t,u[t]);if(j)for(var t of j(u))de.call(u,t)&&O(n,t,u[t]);return n},F=(n,u)=>ue(n,ce(u));import{Y as fe,Z as _,$,bw as x,bx as K,by as ve,az as pe,aj as y,e as me,a0 as he,aD as ye,aF as be,v as xe,f as T,x as c,b4 as R,bz as W,G as Ve,o as v,c as V,F as we,C as Ce,z as h,aZ as r,b as ge,w as L,g as E,A as Z,B as D,R as q,m as G,t as Se,y as _e,as as w,bi as U,a2 as Te}from"./index.033fa97f.js";const Ee=fe({modelValue:{type:Number,default:0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:_([Array,Object]),default:()=>$(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:_([Array,Object]),default:()=>[x,x,x]},voidIcon:{type:K,default:()=>ve},disabledVoidIcon:{type:K,default:()=>x},disabled:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},showScore:{type:Boolean,default:!1},textColor:{type:String,default:""},texts:{type:_(Array),default:()=>$(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:{type:String,validator:pe}}),De={change:n=>typeof n=="number",[y]:n=>typeof n=="number"},Me=["aria-valuenow","aria-valuetext","aria-valuemax"],He=["onMousemove","onClick"],Ne={name:"ElRate"},ke=me(F(P({},Ne),{props:Ee,emits:De,setup(n,{expose:u,emit:t}){const e=n;function C(a,l){const o=f=>W(f),S=Object.keys(l).map(f=>+f).filter(f=>{const b=l[f];return(o(b)?b.excluded:!1)?a<f:a<=f}).sort((f,b)=>f-b),m=l[S[0]];return o(m)&&m.value||m}const M=he(ye,void 0),X=be(),i=xe("rate"),s=T(e.modelValue),g=T(-1),p=T(!0),Y=c(()=>[i.b(),i.m(X.value)]),d=c(()=>e.disabled||(M==null?void 0:M.disabled)),J=c(()=>({"--el-rate-void-color":e.voidColor,"--el-rate-disabled-void-color":e.disabledVoidColor,"--el-rate-fill-color":k.value})),H=c(()=>{let a="";return e.showScore?a=e.scoreTemplate.replace(/\{\s*value\s*\}/,d.value?`${e.modelValue}`:`${s.value}`):e.showText&&(a=e.texts[Math.ceil(s.value)-1]),a}),N=c(()=>e.modelValue*100-Math.floor(e.modelValue)*100),Q=c(()=>R(e.colors)?{[e.lowThreshold]:e.colors[0],[e.highThreshold]:{value:e.colors[1],excluded:!0},[e.max]:e.colors[2]}:e.colors),k=c(()=>{const a=C(s.value,Q.value);return W(a)?"":a}),ee=c(()=>{let a="";return d.value?a=`${N.value}%`:e.allowHalf&&(a="50%"),{color:k.value,width:a}}),z=c(()=>R(e.icons)?{[e.lowThreshold]:e.icons[0],[e.highThreshold]:{value:e.icons[1],excluded:!0},[e.max]:e.icons[2]}:e.icons),ae=c(()=>C(e.modelValue,z.value)),le=c(()=>d.value?e.disabledVoidIcon:e.voidIcon),oe=c(()=>C(s.value,z.value)),te=c(()=>{const a=Array.from({length:e.max}),l=s.value;return a.fill(oe.value,0,l),a.fill(le.value,l,e.max),a});function A(a){const l=d.value&&N.value>0&&a-1<e.modelValue&&a>e.modelValue,o=e.allowHalf&&p.value&&a-.5<=s.value&&a>s.value;return l||o}function se(a){d.value||(e.allowHalf&&p.value?(t(y,s.value),e.modelValue!==s.value&&t("change",s.value)):(t(y,a),e.modelValue!==a&&t("change",a)))}function re(a){if(d.value)return;let l=s.value;const o=a.code;return o===w.up||o===w.right?(e.allowHalf?l+=.5:l+=1,a.stopPropagation(),a.preventDefault()):(o===w.left||o===w.down)&&(e.allowHalf?l-=.5:l-=1,a.stopPropagation(),a.preventDefault()),l=l<0?0:l,l=l>e.max?e.max:l,t(y,l),t("change",l),l}function I(a,l){if(!d.value){if(e.allowHalf){let o=l.target;U(o,i.e("item"))&&(o=o.querySelector(`.${i.e("icon")}`)),(o.clientWidth===0||U(o,i.e("decimal")))&&(o=o.parentNode),p.value=l.offsetX*2<=o.clientWidth,s.value=p.value?a-.5:a}else s.value=a;g.value=a}}function B(){d.value||(e.allowHalf&&(p.value=e.modelValue!==Math.floor(e.modelValue)),s.value=e.modelValue,g.value=-1)}return Ve(()=>e.modelValue,a=>{s.value=a,p.value=e.modelValue!==Math.floor(e.modelValue)}),e.modelValue||t(y,0),u({setCurrentValue:I,resetCurrentValue:B}),(a,l)=>(v(),V("div",{class:h([r(Y),r(i).is("disabled",r(d))]),role:"slider","aria-valuenow":s.value,"aria-valuetext":r(H),"aria-valuemin":"0","aria-valuemax":a.max,tabindex:"0",style:q(r(J)),onKeydown:re},[(v(!0),V(we,null,Ce(a.max,(o,S)=>(v(),V("span",{key:S,class:h(r(i).e("item")),onMousemove:m=>I(o,m),onMouseleave:B,onClick:m=>se(o)},[ge(r(G),{class:h([r(i).e("icon"),{hover:g.value===o},r(i).is("active",o<=s.value)])},{default:L(()=>[A(o)?D("v-if",!0):(v(),E(Z(r(te)[o-1]),{key:0})),A(o)?(v(),E(r(G),{key:1,style:q(r(ee)),class:h([r(i).e("icon"),r(i).e("decimal")])},{default:L(()=>[(v(),E(Z(r(ae))))]),_:1},8,["style","class"])):D("v-if",!0)]),_:2},1032,["class"])],42,He))),128)),a.showText||a.showScore?(v(),V("span",{key:0,class:h(r(i).e("text"))},Se(r(H)),3)):D("v-if",!0)],46,Me))}}));var ze=_e(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const je=Te(ze);export{je as E};
