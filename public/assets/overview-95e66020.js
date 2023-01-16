import{g as B,O as z,P as G}from"./common-60f70958.js";import{t as N}from"./index-20feb690.js";import{d as R,Q as A,X as L,z as D,ap as F,o as S,h as V,ae as E,r as d,R as M,a as b,t as O,e as t,b as a,x as r,K as l,N as P,c as T,u as o,L as c,n as U}from"./vue-a70dbbf9.js";import{i as q}from"./echarts-1f308729.js";import{a as K}from"./index-363faea7.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const X={class:"user-views"},j={class:"card-header"},H={class:"overview-userinfo"},J={class:"user-avatar"},W=["src"],Y={class:"user-avatar-icons"},Z={class:"user-data"},x={class:"welcome-words"},ee=R({__name:"overview",setup(te){const{t:p}=K(),v=A(),i=B(),f=L(),n=D({days:[],score:[],money:[],charts:[]}),k=()=>{const e=q(f.value),s={grid:{top:10,right:0,bottom:20,left:50},xAxis:{data:n.days},yAxis:{},legend:{data:[p("Integral"),p("Balance")]},series:[{name:p("Integral"),data:n.score,type:"line",smooth:!0,show:!1,color:"#f56c6c",emphasis:{label:{show:!0}},areaStyle:{}},{name:p("Balance"),data:n.money,type:"line",smooth:!0,show:!1,color:"#409eff",emphasis:{label:{show:!0}},areaStyle:{opacity:.4}}]};e.setOption(s),n.charts.push(e)},_=()=>{U(()=>{for(const e in n.charts)n.charts[e].resize()})};return F(()=>{_()}),S(()=>{z().then(e=>{n.days=e.data.days,n.score=e.data.score,n.money=e.data.money,k()}),V(window,"resize",_)}),E(()=>{for(const e in n.charts)n.charts[e].dispose()}),(e,s)=>{const C=d("el-button"),h=d("Icon"),w=d("el-tooltip"),u=d("el-col"),y=d("el-link"),g=d("el-row"),$=d("el-card"),I=M("blur");return b(),O("div",X,[t($,{class:"user-views-card",shadow:"hover"},{header:a(()=>[r("div",j,[r("span",null,l(e.$t("user.account.overview.Account information")),1),P((b(),T(C,{onClick:s[0]||(s[0]=m=>o(v).push({name:"account/profile"})),type:"info",plain:""},{default:a(()=>[c(l(e.$t("user.account.overview.personal data")),1)]),_:1})),[[I]])])]),default:a(()=>[r("div",H,[r("div",J,[r("img",{src:o(i).avatar,alt:""},null,8,W),r("div",Y,[r("div",{onClick:s[1]||(s[1]=m=>o(v).push({name:"account/profile"})),class:"avatar-icon-item"},[t(w,{effect:"light",placement:"right",content:(o(i).mobile?e.$t("user.account.overview.Filled in"):e.$t("user.account.overview.Not filled in"))+e.$t("user.account.overview.mobile")},{default:a(()=>[t(h,{name:"fa fa-tablet",size:"16",color:o(i).mobile?"var(--el-color-primary)":"var(--el-text-color-secondary)"},null,8,["color"])]),_:1},8,["content"])]),r("div",{onClick:s[2]||(s[2]=m=>o(v).push({name:"account/profile"})),class:"avatar-icon-item"},[t(w,{effect:"light",placement:"right",content:(o(i).email?e.$t("user.account.overview.Filled in"):e.$t("user.account.overview.Not filled in"))+e.$t("user.account.overview.email")},{default:a(()=>[t(h,{name:"fa fa-envelope-square",size:"14",color:o(i).email?"var(--el-color-primary)":"var(--el-text-color-secondary)"},null,8,["color"])]),_:1},8,["content"])])])]),r("div",Z,[r("div",x,l(o(i).nickname+e.$t("utils.comma")+o(G)()),1),t(g,{class:"data-item"},{default:a(()=>[t(u,{span:4},{default:a(()=>[c(l(e.$t("Integral")),1)]),_:1}),t(u,{span:8},{default:a(()=>[t(y,{onClick:s[3]||(s[3]=m=>o(v).push({name:"account/integral"})),type:"primary"},{default:a(()=>[c(l(o(i).score),1)]),_:1})]),_:1}),t(u,{span:4},{default:a(()=>[c(l(e.$t("Balance")),1)]),_:1}),t(u,{span:8},{default:a(()=>[t(y,{onClick:s[4]||(s[4]=m=>o(v).push({name:"account/balance"})),type:"primary"},{default:a(()=>[c(l(o(i).money),1)]),_:1})]),_:1})]),_:1}),t(g,{class:"data-item"},{default:a(()=>[t(u,{class:"lastlogin title",span:4},{default:a(()=>[c(l(e.$t("user.account.overview.Last login")),1)]),_:1}),t(u,{class:"lastlogin value",span:8},{default:a(()=>[c(l(o(N)(o(i).lastlogintime)),1)]),_:1}),t(u,{class:"lastip",span:4},{default:a(()=>[c(l(e.$t("user.account.overview.Last login IP")),1)]),_:1}),t(u,{class:"lastip",span:8},{default:a(()=>[c(l(o(i).lastloginip),1)]),_:1})]),_:1})])])]),_:1}),t($,{class:"user-views-card",shadow:"hover",header:e.$t("user.account.overview.Growth statistics")},{default:a(()=>[r("div",{class:"account-growth",ref_key:"accountGrowthChartRef",ref:f},null,512)]),_:1},8,["header"])])}}});const ie=Q(ee,[["__scopeId","data-v-27ab6b99"]]);export{ie as default};
