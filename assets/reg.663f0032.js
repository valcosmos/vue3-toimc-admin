import{_ as d}from"./BasicForm.d736f8a9.js";import{_ as f,e as x,E as F,o as i,c as l,a as t,b as o,w as e,g as h,t as C,h as n,r as g,j as B}from"./index.864800fd.js";import{s as y,_ as k}from"./qr.c93d2ce0.js";import"./el-col.0a67e454.js";import"./el-cascader-panel.1005ed81.js";import"./el-checkbox.de27d9f6.js";import"./index.03263d26.js";import"./date-utils.92a39dcd.js";import"./index.416745c4.js";/* empty css                 */import"./el-upload.e5ff0093.js";import"./el-progress.f8c4c067.js";import"./index.9d1fe9ad.js";import"./index.d54c0cdd.js";import"./index.e687831a.js";const b=x({setup(){const s=[{component:"input",class:"py-1",attrs:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",size:"large",prefixIcon:"Avatar"}},{component:"input",class:"py-1",attrs:{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",size:"large",prefixIcon:"ChatRound"},itemSlot:"suffix",slot:"suffix"},{component:"input",class:"py-1",attrs:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password",size:"large",prefixIcon:"Lock"}}],{state:u,sendCode:r,leftCount:c}=y();return{regForm:s,state:u,sendCode:r,leftCount:c}}}),v={class:"w-full p-1 custom-login"},w={class:"flex items-center justify-end"},D=t("div",{class:"px-3 py-2 rounded-md mr-2 flex items-center bg-[#ECFAF3]"},[t("span",{class:"we inline-block pr-2 bg-contain"}),t("span",{class:"text-sm text-[#07C160]"},"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55")],-1),E=t("img",{class:"relative cursor-pointer",src:k},null,-1),A={class:"my-10 mx-auto max-w-96"},j=t("div",{class:"text-3xl pb-6"},"\u6CE8\u518C\u8D26\u53F7",-1),z=n("\u6CE8\u518C"),$=n("\u83B7\u53D6\u9A8C\u8BC1\u7801"),I={key:1,class:"text-sm text-gray-400 w-[70px] text-center inline-block flex items-center"},N={class:"flex justify-between text-sm text-gray-400"},V=n("\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),L=n(" \u5DF2\u6709\u8D26\u53F7\uFF1F "),S=n("\u7ACB\u5373\u767B\u5F55>");function R(s,u,r,c,T,U){const a=g("router-link"),p=F,_=B,m=d;return i(),l("div",v,[t("div",w,[D,o(a,{to:"/login/scan"},{default:e(()=>[E]),_:1})]),t("div",A,[j,o(m,{schemas:s.regForm,"label-width":"0",class:"pt-4"},{action:e(()=>[o(p,{type:"primary",size:"large",class:"w-full"},{default:e(()=>[z]),_:1})]),suffix:e(()=>[s.state.sending?(i(),l("span",I,"\u91CD\u53D1"+C(s.leftCount)+"\u79D2",1)):(i(),h(_,{key:0,type:"primary",underline:!1,class:"mr-2",href:"javascript:;",onClick:s.sendCode},{default:e(()=>[$]),_:1},8,["onClick"]))]),_:1},8,["schemas"]),t("div",N,[o(a,{class:"text-blue-400",to:"/login/forget"},{default:e(()=>[V]),_:1}),t("div",null,[L,o(a,{class:"text-blue-400",to:"/login/pwd"},{default:e(()=>[S]),_:1})])])])])}var st=f(b,[["render",R]]);export{st as default};
