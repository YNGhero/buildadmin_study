import{b as m,T as c,a as d}from"./index-30b244da.js";import{a as u}from"./controllerUrls-941681c3.js";import b from"./popupForm-83bf3ba5.js";import{d as h}from"./index-20feb690.js";import{j as f,E as g}from"./common-60f70958.js";import{a as _}from"./index-363faea7.js";import{d as i,a as n,t as y,u as t,c as k,M as E,e as r,r as z,al as I}from"./vue-a70dbbf9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./random-1d7fa280.js";import"./iconfont-0e6ed700.js";import"./index-05f0e37d.js";import"./validate-44e9fa1e.js";import"./index-06cda30d.js";const q={class:"default-main ba-table-box"},w=i({name:"auth/admin"}),R=i({...w,setup(P){const{t:e}=_(),s=f(),o=h(["edit","delete"]);o[1].display=l=>l.id!=s.id;const a=new m(new g(u),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("auth.admin.username"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.nickname"),prop:"nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.grouping"),prop:"group_name_arr",align:"center",operator:!1,render:"tags"},{label:e("auth.admin.head portrait"),prop:"avatar",align:"center",render:"image",operator:!1},{label:e("auth.admin.mailbox"),prop:"email",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.mobile"),prop:"mobile",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.Last login"),prop:"lastlogintime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("Enable")}},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:o,operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}});return I("baTable",a),a.mount(),a.getIndex(),(l,T)=>{const p=z("el-alert");return n(),y("div",q,[t(a).table.remark?(n(),k(p,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):E("",!0),r(c,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("auth.admin.username")+"/"+t(e)("auth.admin.nickname")})},null,8,["quick-search-placeholder"]),r(d),r(b)])}}});export{R as default};