import{D as j,a as K,_ as O}from"./useDark-7f0c560b.js";import{d as B,a as n,c,b as t,x as l,u as e,e as p,K as r,N as $,t as y,O as S,P as I,Q as A,r as u,R as F,M as V,S as H,z as Q,L as k,f as W,T as q,U as J}from"./vue-a70dbbf9.js";import{d as E,e as X,f as Y,g as T,h as G}from"./common-60f70958.js";import{u as Z,e as ee}from"./index-363faea7.js";import{u as R}from"./memberCenter-631674a8.js";import{o as te}from"./router-ac6e3d10.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const ne="/api/index/";function se(){const f=E(),d=R();if(!f.siteName)return X({url:ne+"index",method:"get"}).then(s=>{Y(s.data.site.siteName),f.dataFill(s.data.site),d.setStatus(s.data.openMemberCenter),s.data.openMemberCenter||d.setLayoutMode("Disable")})}const ae={class:"userinfo"},oe=["src"],re={class:"username"},le={class:"user-menus"},ie={key:0,class:"user-menu-max-title"},ue=["onClick"],ce=B({__name:"aside",setup(f){const d=A(),s=T(),i=R(),_=(v="",m)=>{document.body.clientWidth<992&&i.toggleMenuExpand(!1),v?d.push({name:v}):m&&te(m)};return(v,m)=>{const x=u("Icon"),b=u("el-button"),a=u("el-button-group"),z=u("el-aside"),g=F("blur");return n(),c(z,{class:"ba-user-layouts"},{default:t(()=>[l("div",ae,[l("div",{onClick:m[0]||(m[0]=C=>_("account/profile")),class:"user-avatar-box"},[l("img",{class:"user-avatar",src:e(G)(e(s).avatar?e(s).avatar:"/static/images/avatar.png"),alt:""},null,8,oe),p(x,{class:"user-avatar-gender",name:e(s).getGenderIcon().name,size:"14",color:e(s).getGenderIcon().color},null,8,["name","color"])]),l("p",re,r(e(s).nickname),1),p(a,null,{default:t(()=>[$((n(),c(b,{onClick:m[1]||(m[1]=C=>_("account/integral")),class:"userinfo-button-item",title:v.$t("Integral")+" "+e(s).score,size:"default",plain:""},{default:t(()=>[l("span",null,r(v.$t("Integral")+" "+e(s).score),1)]),_:1},8,["title"])),[[g]]),$((n(),c(b,{onClick:m[2]||(m[2]=C=>_("account/balance")),class:"userinfo-button-item",title:v.$t("Balance")+" "+e(s).money,size:"default",plain:""},{default:t(()=>[l("span",null,r(v.$t("Balance")+" "+e(s).money),1)]),_:1},8,["title"])),[[g]])]),_:1})]),l("div",le,[(n(!0),y(I,null,S(e(i).state.viewRoutes,(C,N)=>{var M;return n(),y(I,{key:N},[e(i).state.showHeadline?(n(),y("div",ie,r((M=C.meta)==null?void 0:M.title),1)):V("",!0),(n(!0),y(I,null,S(C.children,(w,D)=>{var L,h,o;return n(),y("div",{key:D,onClick:P=>_("",w),class:H(["user-menu-item",((L=e(i).state.activeRoute)==null?void 0:L.name)==w.name?"active":""])},[p(x,{name:(h=w.meta)==null?void 0:h.icon,size:"16",color:"var(--el-text-color-secondary)"},null,8,["name"]),l("span",null,r((o=w.meta)==null?void 0:o.title),1)],10,ue)}),128))],64)}),128))])]),_:1})}}});const de=U(ce,[["__scopeId","data-v-723a7442"]]),_e=f=>(q("data-v-2a8c3fb6"),f=f(),J(),f),me=_e(()=>l("img",{src:O},null,-1)),pe={class:"hidden-xs-only"},fe={class:"header-user-box"},ve=["src"],ge=B({__name:"header",setup(f){const d=Q({activeMenu:""}),s=W(),i=T(),_=A(),v=Z(),m=E(),x=R();switch(s.name){case"/":d.activeMenu="";break;case"userLogin":d.activeMenu="user";break}return se(),(b,a)=>{const z=u("Icon"),g=u("el-menu-item"),C=u("el-sub-menu"),N=u("el-menu"),M=u("el-col"),w=u("el-row"),D=u("el-drawer"),L=u("el-header"),h=F("blur");return n(),c(L,{class:"header"},{default:t(()=>[p(w,{justify:"center"},{default:t(()=>[p(M,{class:"header-row",span:16,xs:24},{default:t(()=>[l("div",{class:H([e(i).isLogin()?"hidden-sm-and-down":"","header-logo"]),onClick:a[0]||(a[0]=o=>e(_).push({name:"/"}))},[me,l("span",pe,r(e(m).siteName),1)],2),e(i).isLogin()?(n(),y("div",{key:0,onClick:a[1]||(a[1]=o=>e(x).toggleMenuExpand(!0)),class:"user-menus-expand hidden-md-and-up"},[p(z,{name:"fa fa-indent",color:"var(--el-color-primary)",size:"20"})])):V("",!0),p(N,{"default-active":d.activeMenu,class:"frontend-header-menu",mode:"horizontal",ellipsis:!1},{default:t(()=>[$((n(),c(g,{onClick:a[2]||(a[2]=o=>e(_).push({name:"/"})),index:"index"},{default:t(()=>[k(r(b.$t("Home")),1)]),_:1})),[[h]]),e(x).state.open?(n(),y(I,{key:0},[e(i).isLogin()?$((n(),c(C,{key:0,index:"user"},{title:t(()=>[l("div",fe,[l("img",{class:"header-user-avatar",src:e(G)(e(i).avatar?e(i).avatar:"/static/images/avatar.png"),alt:""},null,8,ve),k(" "+r(e(i).nickname),1)])]),default:t(()=>[$((n(),c(g,{onClick:a[3]||(a[3]=o=>e(_).push({name:"user"})),index:"user-index"},{default:t(()=>[k(r(b.$t("Member Center")),1)]),_:1})),[[h]]),$((n(),c(g,{onClick:a[4]||(a[4]=o=>e(i).logout()),index:"user-logout"},{default:t(()=>[k(r(b.$t("Logout login")),1)]),_:1})),[[h]])]),_:1})),[[h]]):$((n(),c(g,{key:1,onClick:a[5]||(a[5]=o=>e(_).push({name:"user"})),index:"user"},{default:t(()=>[k(r(b.$t("Member Center")),1)]),_:1})),[[h]])],64)):V("",!0),$((n(),c(C,{index:"switch-language"},{title:t(()=>[k(r(b.$t("Language")),1)]),default:t(()=>[(n(!0),y(I,null,S(e(v).lang.langArray,o=>(n(),c(g,{onClick:P=>e(ee)(o.name),key:o.name,index:"switch-language-"+o.value},{default:t(()=>[k(r(o.value),1)]),_:2},1032,["onClick","index"]))),128))]),_:1})),[[h]]),p(g,{index:"theme-switch",class:"theme-switch"},{default:t(()=>[p(j,{onClick:a[6]||(a[6]=o=>e(K)())})]),_:1})]),_:1},8,["default-active"])]),_:1})]),_:1}),p(D,{class:"aside-drawer","append-to-body":!0,modelValue:e(x).state.menuExpand,"onUpdate:modelValue":a[7]||(a[7]=o=>e(x).state.menuExpand=o),"with-header":!1,direction:"ltr",size:"70%"},{default:t(()=>[p(de)]),_:1},8,["modelValue"])]),_:1})}}});const Me=U(ge,[["__scopeId","data-v-2a8c3fb6"]]),he={href:"http://beian.miit.gov.cn/"},be=B({__name:"footer",setup(f){const d=E();return(s,i)=>{const _=u("el-footer");return n(),c(_,{class:"footer"},{default:t(()=>[l("div",null,[k(" Copyright @ 2020~2022 "+r(e(d).siteName)+" "+r(s.$t("Copyright"))+" ",1),l("a",he,r(e(d).recordNumber),1)])]),_:1})}}});const Le=U(be,[["__scopeId","data-v-5dadaf49"]]);export{de as A,Le as F,Me as H};