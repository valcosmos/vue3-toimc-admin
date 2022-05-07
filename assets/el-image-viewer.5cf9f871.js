var Ie=Object.defineProperty,Le=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ue=(o,r,n)=>r in o?Ie(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,M=(o,r)=>{for(var n in r||(r={}))ze.call(r,n)&&ue(o,n,r[n]);if(ce)for(var n of ce(r))Ee.call(r,n)&&ue(o,n,r[n]);return o},J=(o,r)=>Le(o,Ce(r));import{aH as Y,a2 as fe,a3 as se,a4 as ve,e as me,cd as de,ce as Oe,cf as Se,u as pe,l as ge,c2 as xe,f as m,cg as Te,m as g,bn as we,L as le,ac as ye,ap as be,o as k,g as oe,b as c,w as h,a as p,x as d,ah as t,ak as _e,y as O,C as E,bb as Ne,c as _,a_ as $e,aw as Be,J as re,ch as Ae,bc as Ve,H as De,ci as Me,cj as Ye,I as Re,ar as He,aX as Pe,W as ie,O as K,at as Xe,bY as Fe,q as he,ck as ne,s as $,cl as B,a6 as ke,bi as je,bu as We,cm as qe,t as Ze,P as Ge,cn as Je,bt as Ke,co as Ue,cp as Qe,cq as et}from"./index.864800fd.js";const tt=()=>Y&&/firefox/i.test(window.navigator.userAgent),at=fe({urlList:{type:se(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),nt={close:()=>!0,switch:o=>typeof o=="number"},st=["src"],lt={name:"ElImageViewer"},ot=me(J(M({},lt),{props:at,emits:nt,setup(o,{emit:r}){const n=o,z={CONTAIN:{name:"contain",icon:de(Oe)},ORIGINAL:{name:"original",icon:de(Se)}},U=tt()?"DOMMouseScroll":"mousewheel",{t:S}=pe(),l=ge("image-viewer"),{nextZIndex:x}=xe(),I=m(),R=m([]),H=Te(),y=m(!0),u=m(n.initialIndex),f=m(z.CONTAIN),i=m({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),A=g(()=>{const{urlList:e}=n;return e.length<=1}),P=g(()=>u.value===0),X=g(()=>u.value===n.urlList.length-1),V=g(()=>n.urlList[u.value]),Q=g(()=>{const{scale:e,deg:a,offsetX:s,offsetY:v,enableTransition:L}=i.value;let w=s/e,C=v/e;switch(a%360){case 90:case-270:[w,C]=[C,-w];break;case 180:case-180:[w,C]=[-w,-C];break;case 270:case-90:[w,C]=[-C,w];break}const N={transform:`scale(${e}) rotate(${a}deg) translate(${w}px, ${C}px)`,transition:L?"transform .3s":""};return f.value.name===z.CONTAIN.name&&(N.maxWidth=N.maxHeight="100%"),N}),ee=g(()=>we(n.zIndex)?n.zIndex:x());function T(){ae(),r("close")}function te(){const e=ne(s=>{switch(s.code){case $.esc:n.closeOnPressEscape&&T();break;case $.space:q();break;case $.left:Z();break;case $.up:b("zoomIn");break;case $.right:G();break;case $.down:b("zoomOut");break}}),a=ne(s=>{(s.wheelDelta?s.wheelDelta:-s.detail)>0?b("zoomIn",{zoomRate:1.2,enableTransition:!1}):b("zoomOut",{zoomRate:1.2,enableTransition:!1})});H.run(()=>{B(document,"keydown",e),B(document,U,a)})}function ae(){H.stop()}function F(){y.value=!1}function j(e){y.value=!1,e.target.alt=S("el.image.error")}function W(e){if(y.value||e.button!==0||!I.value)return;i.value.enableTransition=!1;const{offsetX:a,offsetY:s}=i.value,v=e.pageX,L=e.pageY,w=ne(N=>{i.value=J(M({},i.value),{offsetX:a+N.pageX-v,offsetY:s+N.pageY-L})}),C=B(document,"mousemove",w);B(document,"mouseup",()=>{C()}),e.preventDefault()}function D(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function q(){if(y.value)return;const e=Object.keys(z),a=Object.values(z),s=f.value.name,L=(a.findIndex(w=>w.name===s)+1)%e.length;f.value=z[e[L]],D()}function Z(){if(P.value&&!n.infinite)return;const e=n.urlList.length;u.value=(u.value-1+e)%e}function G(){if(X.value&&!n.infinite)return;const e=n.urlList.length;u.value=(u.value+1)%e}function b(e,a={}){if(y.value)return;const{zoomRate:s,rotateDeg:v,enableTransition:L}=M({zoomRate:1.4,rotateDeg:90,enableTransition:!0},a);switch(e){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/s).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*s).toFixed(3)));break;case"clockwise":i.value.deg+=v;break;case"anticlockwise":i.value.deg-=v;break}i.value.enableTransition=L}return le(V,()=>{ye(()=>{const e=R.value[0];e!=null&&e.complete||(y.value=!0)})}),le(u,e=>{D(),r("switch",e)}),be(()=>{var e,a;te(),(a=(e=I.value)==null?void 0:e.focus)==null||a.call(e)}),(e,a)=>(k(),oe(Fe,{to:"body",disabled:!e.teleported},[c(Xe,{name:"viewer-fade",appear:""},{default:h(()=>[p("div",{ref_key:"wrapper",ref:I,tabindex:-1,class:d(t(l).e("wrapper")),style:ie({zIndex:t(ee)})},[p("div",{class:d(t(l).e("mask")),onClick:a[0]||(a[0]=_e(s=>e.hideOnClickModal&&T(),["self"]))},null,2),O(" CLOSE "),p("span",{class:d([t(l).e("btn"),t(l).e("close")]),onClick:T},[c(t(E),null,{default:h(()=>[c(t(Ne))]),_:1})],2),O(" ARROW "),t(A)?O("v-if",!0):(k(),_(re,{key:0},[p("span",{class:d([t(l).e("btn"),t(l).e("prev"),t(l).is("disabled",!e.infinite&&t(P))]),onClick:Z},[c(t(E),null,{default:h(()=>[c(t($e))]),_:1})],2),p("span",{class:d([t(l).e("btn"),t(l).e("next"),t(l).is("disabled",!e.infinite&&t(X))]),onClick:G},[c(t(E),null,{default:h(()=>[c(t(Be))]),_:1})],2)],64)),O(" ACTIONS "),p("div",{class:d([t(l).e("btn"),t(l).e("actions")])},[p("div",{class:d(t(l).e("actions__inner"))},[c(t(E),{onClick:a[1]||(a[1]=s=>b("zoomOut"))},{default:h(()=>[c(t(Ae))]),_:1}),c(t(E),{onClick:a[2]||(a[2]=s=>b("zoomIn"))},{default:h(()=>[c(t(Ve))]),_:1}),p("i",{class:d(t(l).e("actions__divider"))},null,2),c(t(E),{onClick:q},{default:h(()=>[(k(),oe(De(f.value.icon)))]),_:1}),p("i",{class:d(t(l).e("actions__divider"))},null,2),c(t(E),{onClick:a[3]||(a[3]=s=>b("anticlockwise"))},{default:h(()=>[c(t(Me))]),_:1}),c(t(E),{onClick:a[4]||(a[4]=s=>b("clockwise"))},{default:h(()=>[c(t(Ye))]),_:1})],2)],2),O(" CANVAS "),p("div",{class:d(t(l).e("canvas"))},[(k(!0),_(re,null,Re(e.urlList,(s,v)=>He((k(),_("img",{ref_for:!0,ref:L=>R.value[v]=L,key:s,src:s,style:ie(t(Q)),class:d(t(l).e("img")),onLoad:F,onError:j,onMousedown:W},null,46,st)),[[Pe,v===u.value]])),128))],2),K(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}}));var rt=he(ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const it=ke(rt),ct=fe({appendToBody:{type:Boolean,default:void 0},hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},lazy:{type:Boolean,default:!1},scrollContainer:{type:se([String,Object])},previewSrcList:{type:se(Array),default:()=>ve([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),ut={error:o=>o instanceof Event,switch:o=>we(o),close:()=>!0},dt=["src"],ft={key:0},vt={name:"ElImage"},mt=me(J(M({},vt),{props:ct,emits:ut,setup(o,{emit:r}){const n=o;let z="";je({scope:"el-image",from:"append-to-body",replacement:"preview-teleported",version:"2.2.0",ref:"https://element-plus.org/en-US/component/image.html#image-attributess"},g(()=>We(n.appendToBody)));const{t:U}=pe(),S=ge("image"),l=qe(),x=m(!1),I=m(!0),R=m(0),H=m(0),y=m(!1),u=m(),f=m();let i,A;const P=g(()=>l.value.style),X=g(()=>{const{fit:e}=n;return Y&&e?{objectFit:e}:{}}),V=g(()=>{const{previewSrcList:e}=n;return Array.isArray(e)&&e.length>0}),Q=g(()=>n.appendToBody||n.previewTeleported),ee=g(()=>{const{previewSrcList:e,initialIndex:a}=n;let s=a;return a>e.length-1&&(s=0),s}),T=()=>{if(!Y)return;I.value=!0,x.value=!1;const e=new Image,a=n.src;e.addEventListener("load",s=>{a===n.src&&te(s,e)}),e.addEventListener("error",s=>{a===n.src&&ae(s)}),Object.entries(l.value).forEach(([s,v])=>{s.toLowerCase()!=="onload"&&e.setAttribute(s,v)}),e.src=a};function te(e,a){R.value=a.width,H.value=a.height,I.value=!1,x.value=!1}function ae(e){I.value=!1,x.value=!0,r("error",e)}function F(){Qe(u.value,f.value)&&(T(),D())}const j=et(F,200);async function W(){var e;if(!Y)return;await ye();const{scrollContainer:a}=n;Je(a)?f.value=a:Ke(a)&&a!==""?f.value=(e=document.querySelector(a))!=null?e:void 0:u.value&&(f.value=Ue(u.value)),f.value&&(i=B(f,"scroll",j),setTimeout(()=>F(),100))}function D(){!Y||!f.value||!j||(i(),f.value=void 0)}function q(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function Z(){!V.value||(A=B("wheel",q,{passive:!1}),z=document.body.style.overflow,document.body.style.overflow="hidden",y.value=!0)}function G(){A==null||A(),document.body.style.overflow=z,y.value=!1,r("close")}function b(e){r("switch",e)}return le(()=>n.src,()=>{n.lazy?(I.value=!0,x.value=!1,D(),W()):T()}),be(()=>{n.lazy?W():T()}),(e,a)=>(k(),_("div",{ref_key:"container",ref:u,class:d([t(S).b(),e.$attrs.class]),style:ie(t(P))},[I.value?K(e.$slots,"placeholder",{key:0},()=>[p("div",{class:d(t(S).e("placeholder"))},null,2)]):x.value?K(e.$slots,"error",{key:1},()=>[p("div",{class:d(t(S).e("error"))},Ze(t(U)("el.image.error")),3)]):(k(),_("img",Ge({key:2},t(l),{src:e.src,style:t(X),class:[t(S).e("inner"),t(V)?t(S).e("preview"):""],onClick:Z}),null,16,dt)),t(V)?(k(),_(re,{key:3},[y.value?(k(),oe(t(it),{key:0,"z-index":e.zIndex,"initial-index":t(ee),infinite:e.infinite,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:t(Q),"close-on-press-escape":e.closeOnPressEscape,onClose:G,onSwitch:b},{default:h(()=>[e.$slots.viewer?(k(),_("div",ft,[K(e.$slots,"viewer")])):O("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],2112)):O("v-if",!0)],6))}}));var pt=he(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const yt=ke(pt);export{yt as E};
