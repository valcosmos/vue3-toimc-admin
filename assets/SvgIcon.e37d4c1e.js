import{e as c,x as u,_ as d,o as i,c as l,R as o,z as r,a as g}from"./index.7e888d57.js";const h=c({name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""},size:{type:[Number,String],default:""}},setup(e){const s=/^(https?:|mailto:|tel:)/.test(e.iconClass),t=`#icon-${e.iconClass}`,n=e.className?`svg-icon ${e.className}`:"svg-icon ",a=u(()=>({mask:`url(${e.iconClass}) no-repeat 50% 50%`,"-webkit-mask":`url(${e.iconClass}) no-repeat 50% 50%`,width:e.width||e.size,height:e.height||e.size}));return{isExternal:s,iconName:t,svgClass:n,styleExternalIcon:a}}}),m=["xlink:href"];function _(e,s,t,n,a,v){return e.isExternal?(i(),l("div",{key:0,style:o(e.styleExternalIcon),class:r(["svg-external-icon svg-icon"])},null,4)):(i(),l("svg",{key:1,class:r(e.svgClass),"aria-hidden":"true",style:o({height:e.height||e.size,width:e.width||e.size})},[g("use",{"xlink:href":e.iconName},null,8,m)],6))}var f=d(h,[["render",_],["__scopeId","data-v-65e25024"]]);export{f as _};
