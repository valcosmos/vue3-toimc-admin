var Y=Object.defineProperty,Z=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var K=(e,a,o)=>a in e?Y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))_.call(a,o)&&K(e,o,a[o]);if(I)for(var o of I(a))ee.call(a,o)&&K(e,o,a[o]);return e},V=(e,a)=>Z(e,x(a));import{a2 as h,bs as A,aD as w,bt as C,bn as P,bu as D,f as k,n as ae,m as b,ag as oe,bk as se,e as R,l as S,q as E,ac as T,o as B,c as G,a as m,x as p,ar as q,bv as M,O as z,h as O,t as U,ak as $,aV as F,W as le,bq as ne,ap as de,z as re,a1 as ie,K as te,L as ue,ad as pe,s as c,a6 as be,b6 as L}from"./index.864800fd.js";const W=Symbol("radioGroupKey"),j=h({size:A,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),me=h(V(y({},j),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),H={[w]:e=>C(e)||P(e)||D(e),change:e=>C(e)||P(e)||D(e)},J=(e,a)=>{const o=k(),s=ae(W,void 0),r=b(()=>!!s),i=b({get(){return r.value?s.modelValue:e.modelValue},set(d){r.value?s.changeEvent(d):a(w,d),o.value.checked=e.modelValue===e.label}}),l=oe(b(()=>s==null?void 0:s.size)),n=se(b(()=>s==null?void 0:s.disabled)),t=k(!1),u=b(()=>n.value||r.value&&i.value!==e.label?-1:0);return{radioRef:o,isGroup:r,radioGroup:s,focus:t,size:l,disabled:n,tabIndex:u,modelValue:i}},fe=R({name:"ElRadio",props:me,emits:H,setup(e,{emit:a}){const o=S("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:n,tabIndex:t,modelValue:u}=J(e,a);function d(){T(()=>a("change",u.value))}return{ns:o,focus:i,isGroup:r,modelValue:u,tabIndex:t,size:l,disabled:n,radioRef:s,handleChange:d}}}),ve=["aria-checked","aria-disabled","tabindex"],ge=["value","name","disabled"];function ye(e,a,o,s,r,i){return B(),G("label",{class:p([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[5]||(a[5]=F($(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[m("span",{class:p([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[m("span",{class:p(e.ns.e("inner"))},null,2),q(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:p(e.ns.e("original")),value:e.label,type:"radio","aria-hidden":"true",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1),onChange:a[3]||(a[3]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,ge),[[M,e.modelValue]])],2),m("span",{class:p(e.ns.e("label")),onKeydown:a[4]||(a[4]=$(()=>{},["stop"]))},[z(e.$slots,"default",{},()=>[O(U(e.label),1)])],34)],42,ve)}var Ve=E(fe,[["render",ye],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ce=h(V(y({},j),{name:{type:String,default:""}})),$e=R({name:"ElRadioButton",props:ce,setup(e,{emit:a}){const o=S("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:n,tabIndex:t,modelValue:u,radioGroup:d}=J(e,a),v=b(()=>({backgroundColor:(d==null?void 0:d.fill)||"",borderColor:(d==null?void 0:d.fill)||"",boxShadow:d!=null&&d.fill?`-1px 0 0 0 ${d.fill}`:"",color:(d==null?void 0:d.textColor)||""}));return{ns:o,isGroup:r,size:l,disabled:n,tabIndex:t,modelValue:u,focus:i,activeStyle:v,radioRef:s}}}),he=["aria-checked","aria-disabled","tabindex"],ke=["value","name","disabled"];function we(e,a,o,s,r,i){return B(),G("label",{class:p([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[4]||(a[4]=F($(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[q(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:p(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1)},null,42,ke),[[M,e.modelValue]]),m("span",{class:p(e.ns.be("button","inner")),style:le(e.modelValue===e.label?e.activeStyle:{}),onKeydown:a[3]||(a[3]=$(()=>{},["stop"]))},[z(e.$slots,"default",{},()=>[O(U(e.label),1)])],38)],42,he)}var Q=E($e,[["render",we],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Re=h({size:A,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},textColor:{type:String,default:""}}),Se=H,Ee=R({name:"ElRadioGroup",props:Re,emits:Se,setup(e,a){const o=S("radio"),s=k(),{formItem:r}=ne(),i=n=>{a.emit(w,n),T(()=>a.emit("change",n))},l=n=>{if(!s.value)return;const t=n.target,u=t.nodeName==="INPUT"?"[type=radio]":"[role=radio]",d=s.value.querySelectorAll(u),v=d.length,g=Array.from(d).indexOf(t),N=s.value.querySelectorAll("[role=radio]");let f=null;switch(n.code){case c.left:case c.up:n.stopPropagation(),n.preventDefault(),f=g===0?v-1:g-1;break;case c.right:case c.down:n.stopPropagation(),n.preventDefault(),f=g===v-1?0:g+1;break}f!==null&&(N[f].click(),N[f].focus())};return de(()=>{const n=s.value.querySelectorAll("[type=radio]"),t=n[0];!Array.from(n).some(u=>u.checked)&&t&&(t.tabIndex=0)}),re(W,ie(V(y({},te(e)),{changeEvent:i}))),ue(()=>e.modelValue,()=>r==null?void 0:r.validate("change").catch(n=>pe())),{ns:o,radioGroupRef:s,handleKeydown:l}}});function Be(e,a,o,s,r,i){return B(),G("div",{ref:"radioGroupRef",class:p(e.ns.b("group")),role:"radiogroup",onKeydown:a[0]||(a[0]=(...l)=>e.handleKeydown&&e.handleKeydown(...l))},[z(e.$slots,"default")],34)}var X=E(Ee,[["render",Be],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ne=be(Ve,{RadioButton:Q,RadioGroup:X}),Ie=L(X),Ke=L(Q);export{Ne as E,Ke as a,Ie as b};
