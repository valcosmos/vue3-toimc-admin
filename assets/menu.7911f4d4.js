var w=Object.defineProperty,I=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&S(e,n,t[n]);if(E)for(var n of E(t))j.call(t,n)&&S(e,n,t[n]);return e},p=(e,t)=>I(e,z(t));import{l as D,dL as C,K as T,B as N,m as k,ac as O,e as B,T as M,L as q,ae as H,aD as U,az as F,f as V,a1 as _,ap as R,A as x,q as $}from"./index.864800fd.js";import{_ as b}from"./el-tree.ed629300.js";import{a as g}from"./index.66426d96.js";const G=(e,{attrs:t},{tree:n,key:c})=>{const d=D("tree-select"),r=p(u(u({},C(T(e),Object.keys(N.props))),t),{valueKey:c,popperClass:k(()=>{const i=[d.e("popper")];return e.popperClass&&i.push(e.popperClass),i.join(" ")}),filterMethod:(i="")=>{e.filterMethod&&e.filterMethod(i),O(()=>{var f;(f=n.value)==null||f.filter(i)})},onVisibleChange:i=>{var f;(f=t.onVisibleChange)==null||f.call(t,i),e.filterable&&i&&r.filterMethod()}});return r},J=B({extends:M,setup(e,t){const n=M.setup(e,t);return delete n.selectOptionClick,n},methods:{selectOptionClick(){this.$el.parentElement.click()}}}),Q=(e,{attrs:t,slots:n,emit:c},{select:d,tree:r,key:i})=>{q(()=>e.modelValue,()=>{e.showCheckbox&&O(()=>{const l=r.value;l&&!H(l.getCheckedKeys(),K(e.modelValue))&&l.setCheckedKeys(K(e.modelValue))})},{immediate:!0,deep:!0});const f=k(()=>u({value:i.value},e.props)),h=(l,s)=>{var a;const o=f.value[l];return F(o)?o(s,(a=r.value)==null?void 0:a.getNode(h("value",s))):s[o]};return p(u(u({},C(T(e),Object.keys(b.props))),t),{nodeKey:i,expandOnClickNode:k(()=>!e.checkStrictly),defaultExpandedKeys:k(()=>{const l=K(e.modelValue),s=r.value?l.map(a=>{var o,v,m;return(m=(v=(o=r.value)==null?void 0:o.getNode(a))==null?void 0:v.parent)==null?void 0:m.key}).filter(a=>P(a)):l;return e.defaultExpandedKeys?e.defaultExpandedKeys.concat(s):s}),renderContent:(l,{node:s,data:a,store:o})=>l(J,{value:h("value",a),label:h("label",a),disabled:h("disabled",a)},e.renderContent?()=>e.renderContent(l,{node:s,data:a,store:o}):n.default?()=>n.default({node:s,data:a,store:o}):void 0),filterNodeMethod:(l,s,a)=>{var o;return e.filterNodeMethod?e.filterNodeMethod(l,s,a):l?(o=h("label",s))==null?void 0:o.includes(l):!0},onNodeClick:(l,s,a)=>{var o,v,m;if((o=t.onNodeClick)==null||o.call(t,l,s,a),e.checkStrictly||s.isLeaf){if(!h("disabled",l)){const A=(v=d.value)==null?void 0:v.options.get(h("value",l));(m=d.value)==null||m.handleOptionSelect(A,!0)}}else a.proxy.handleExpandIconClick()},onCheck:(l,s)=>{var a,o;(a=t.onCheck)==null||a.call(t,l,s);const v=e.checkStrictly?s.checkedKeys:(o=r.value)==null?void 0:o.getCheckedKeys(!0),m=h("value",l);c(U,e.multiple?v:v.includes(m)?m:void 0)}})};function P(e){return e||e===0}function K(e){return Array.isArray(e)?e:P(e)?[e]:[]}const W=B({name:"ElTreeSelect",inheritAttrs:!1,props:u(u({},N.props),b.props),setup(e,t){const{slots:n,expose:c}=t,d=V(),r=V(),i=k(()=>e.valueKey||e.nodeKey||"value"),f=G(e,t,{select:d,tree:r,key:i}),h=Q(e,t,{select:d,tree:r,key:i}),l=_({});return c(l),R(()=>{Object.assign(l,u(u({},C(r.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"])),C(d.value,["focus","blur"])))}),()=>x(N,_(p(u({},f),{ref:s=>d.value=s})),p(u({},n),{default:()=>x(b,_(p(u({},h),{ref:s=>r.value=s})))}))}});var y=$(W,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);y.install=e=>{e.component(y.name,y)};const X=y,ne=X;const le=e=>new Promise(t=>{const n={authorization:"Bearer "+localStorage.getItem("token")};g.get("/api/sys/permission/list",{params:e,headers:n}).then(c=>{t(c.data)})}),se=(e,t)=>{const n=t?"/api/sys/permission/edit":"/api/sys/permission/add",c={authorization:"Bearer "+localStorage.getItem("token")};return new Promise(d=>{g.post(n,e,{headers:c}).then(r=>{d(r.data)})})},ae=e=>{const t={authorization:"Bearer "+localStorage.getItem("token")};return new Promise(n=>{g.delete("/api/sys/permission/delete",{params:e,headers:t}).then(c=>{n(c.data)})})},oe=e=>{const t={authorization:"Bearer "+localStorage.getItem("token")};return new Promise(n=>{g.delete("/api/sys/permission/deleteBatch",{data:e,headers:t}).then(c=>{n(c.data)})})};export{ne as E,ae as a,oe as d,le as g,se as s};
