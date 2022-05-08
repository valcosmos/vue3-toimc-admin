var q=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var w=(e,a,o)=>a in e?q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))X.call(a,o)&&w(e,o,a[o]);if(F)for(var o of F(a))Y.call(a,o)&&w(e,o,a[o]);return e},A=(e,a)=>H(e,Q(a));import{a0 as S,aD as Z,aE as x,x as v,f as $,aj as k,aF as B,aU as _,G as T,aG as U,ab as j,e as z,az as M,v as V,y as D,o as b,c as m,a as I,z as d,aO as g,aV as C,J as E,F as ee,h as O,t as K,B as G,R as ae,al as le,D as ne,a3 as oe,ap as se,a2 as ie,aW as P}from"./index.033fa97f.js";const te={modelValue:{type:[Boolean,Number,String],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},tabindex:[String,Number],size:String},h=()=>{const e=S(Z,{}),a=S(x,{}),o=S("CheckboxGroup",{}),i=v(()=>o&&(o==null?void 0:o.name)==="ElCheckboxGroup"),u=v(()=>a.size);return{isGroup:i,checkboxGroup:o,elForm:e,elFormItemSize:u,elFormItem:a}},ue=e=>{const a=$(!1),{emit:o}=j(),{isGroup:i,checkboxGroup:u}=h(),s=$(!1);return{model:v({get(){var t,n;return i.value?(t=u.modelValue)==null?void 0:t.value:(n=e.modelValue)!=null?n:a.value},set(t){var n;i.value&&Array.isArray(t)?(s.value=u.max!==void 0&&t.length>u.max.value,s.value===!1&&((n=u==null?void 0:u.changeEvent)==null||n.call(u,t))):(o(k,t),a.value=t)}}),isLimitExceeded:s}},re=(e,{model:a})=>{const{isGroup:o,checkboxGroup:i}=h(),u=$(!1),s=B(i==null?void 0:i.checkboxGroupSize,{prop:!0}),l=v(()=>{const n=a.value;return _(n)==="[object Boolean]"?n:Array.isArray(n)?n.includes(e.label):n!=null?n===e.trueLabel:!!n}),t=B(v(()=>{var n;return o.value?(n=i==null?void 0:i.checkboxGroupSize)==null?void 0:n.value:void 0}));return{isChecked:l,focus:u,size:s,checkboxSize:t}},de=(e,{model:a,isChecked:o})=>{const{elForm:i,isGroup:u,checkboxGroup:s}=h(),l=v(()=>{var n,r;const c=(n=s.max)==null?void 0:n.value,f=(r=s.min)==null?void 0:r.value;return!!(c||f)&&a.value.length>=c&&!o.value||a.value.length<=f&&o.value});return{isDisabled:v(()=>{var n,r;const c=e.disabled||i.disabled;return(r=u.value?((n=s.disabled)==null?void 0:n.value)||c||l.value:e.disabled||i.disabled)!=null?r:!1}),isLimitDisabled:l}},be=(e,{model:a})=>{function o(){Array.isArray(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&o()},me=(e,{isLimitExceeded:a})=>{const{elFormItem:o}=h(),{emit:i}=j();function u(s){var l,t;if(a.value)return;const r=s.target.checked?(l=e.trueLabel)!=null?l:!0:(t=e.falseLabel)!=null?t:!1;i("change",r,s)}return T(()=>e.modelValue,()=>{var s;(s=o.validate)==null||s.call(o,"change").catch(l=>U())}),{handleChange:u}},R=e=>{const{model:a,isLimitExceeded:o}=ue(e),{focus:i,size:u,isChecked:s,checkboxSize:l}=re(e,{model:a}),{isDisabled:t}=de(e,{model:a,isChecked:s}),{handleChange:n}=me(e,{isLimitExceeded:o});return be(e,{model:a}),{isChecked:s,isDisabled:t,checkboxSize:l,model:a,handleChange:n,focus:i,size:u}},ve=z({name:"ElCheckbox",props:{modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:{type:String,validator:M},tabindex:[String,Number]},emits:[k,"change"],setup(e){const a=V("checkbox");return y({ns:a},R(e))}}),ce=["id","aria-controls"],he=["tabindex","role","aria-checked"],fe=["aria-hidden","name","tabindex","disabled","true-value","false-value"],ke=["aria-hidden","disabled","value","name","tabindex"];function pe(e,a,o,i,u,s){return b(),m("label",{id:e.id,class:d([e.ns.b(),e.ns.m(e.checkboxSize),e.ns.is("disabled",e.isDisabled),e.ns.is("bordered",e.border),e.ns.is("checked",e.isChecked)]),"aria-controls":e.indeterminate?e.controls:null},[I("span",{class:d([e.ns.e("input"),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("indeterminate",e.indeterminate),e.ns.is("focus",e.focus)]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":!1},[I("span",{class:d(e.ns.e("inner"))},null,2),e.trueLabel||e.falseLabel?g((b(),m("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),class:d(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[2]||(a[2]=l=>e.focus=!0),onBlur:a[3]||(a[3]=l=>e.focus=!1)},null,42,fe)),[[C,e.model]]):g((b(),m("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=l=>e.model=l),class:d(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[6]||(a[6]=l=>e.focus=!0),onBlur:a[7]||(a[7]=l=>e.focus=!1)},null,42,ke)),[[C,e.model]])],10,he),e.$slots.default||e.label?(b(),m("span",{key:0,class:d(e.ns.e("label"))},[E(e.$slots,"default"),e.$slots.default?G("v-if",!0):(b(),m(ee,{key:0},[O(K(e.label),1)],2112))],2)):G("v-if",!0)],10,ce)}var ge=D(ve,[["render",pe],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Ce=z({name:"ElCheckboxButton",props:te,emits:[k,"change"],setup(e){const{focus:a,isChecked:o,isDisabled:i,size:u,model:s,handleChange:l}=R(e),{checkboxGroup:t}=h(),n=V("checkbox"),r=v(()=>{var c,f,L,N;const p=(f=(c=t==null?void 0:t.fill)==null?void 0:c.value)!=null?f:"";return{backgroundColor:p,borderColor:p,color:(N=(L=t==null?void 0:t.textColor)==null?void 0:L.value)!=null?N:"",boxShadow:p?`-1px 0 0 0 ${p}`:null}});return{focus:a,isChecked:o,isDisabled:i,model:s,handleChange:l,activeStyle:r,size:u,ns:n}}}),ye=["aria-checked","aria-disabled"],Se=["name","tabindex","disabled","true-value","false-value"],$e=["name","tabindex","disabled","value"];function Be(e,a,o,i,u,s){return b(),m("label",{class:d([e.ns.b("button"),e.ns.bm("button",e.size),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("focus",e.focus)]),role:"checkbox","aria-checked":e.isChecked,"aria-disabled":e.isDisabled},[e.trueLabel||e.falseLabel?g((b(),m("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),class:d(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[2]||(a[2]=l=>e.focus=!0),onBlur:a[3]||(a[3]=l=>e.focus=!1)},null,42,Se)),[[C,e.model]]):g((b(),m("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=l=>e.model=l),class:d(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,value:e.label,onChange:a[5]||(a[5]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[6]||(a[6]=l=>e.focus=!0),onBlur:a[7]||(a[7]=l=>e.focus=!1)},null,42,$e)),[[C,e.model]]),e.$slots.default||e.label?(b(),m("span",{key:2,class:d(e.ns.be("button","inner")),style:ae(e.isChecked?e.activeStyle:null)},[E(e.$slots,"default",{},()=>[O(K(e.label),1)])],6)):G("v-if",!0)],10,ye)}var W=D(Ce,[["render",Be],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Ge=z({name:"ElCheckboxGroup",props:{modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:{type:String,validator:M},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},emits:[k,"change"],setup(e,{emit:a,slots:o}){const{elFormItem:i}=h(),u=B(),s=V("checkbox"),l=n=>{a(k,n),se(()=>{a("change",n)})},t=v({get(){return e.modelValue},set(n){l(n)}});return le("CheckboxGroup",A(y({name:"ElCheckboxGroup",modelValue:t},ne(e)),{checkboxGroupSize:u,changeEvent:l})),T(()=>e.modelValue,()=>{var n;(n=i.validate)==null||n.call(i,"change").catch(r=>U())}),()=>oe(e.tag,{class:s.b("group"),role:"group","aria-label":"checkbox-group"},[E(o,"default")])}});var J=D(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const De=ie(ge,{CheckboxButton:W,CheckboxGroup:J}),Ee=P(W),Le=P(J);export{De as E,Le as a,Ee as b};
