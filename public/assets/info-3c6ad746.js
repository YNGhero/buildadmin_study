import{a as v}from"./index-363faea7.js";import{t as w}from"./index-20feb690.js";import{d as C,a as d,c,b as t,N as m,t as L,L as n,K as r,u as e,x as B,e as o,S as I,ah as N,r as i,R as _}from"./vue-a70dbbf9.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const y={class:"title"},z=C({__name:"info",setup(D){const a=N("baTable"),{t:s}=v();return(R,T)=>{const l=i("el-descriptions-item"),f=i("el-tree"),p=i("el-descriptions"),b=i("el-scrollbar"),u=i("el-dialog"),g=_("drag"),h=_("zoom"),x=_("loading");return d(),c(u,{class:"ba-operate-dialog","model-value":!!e(a).form.operate,onClose:e(a).toggleForm},{header:t(()=>[m((d(),L("div",y,[n(r(e(s)("info")),1)])),[[g,[".ba-operate-dialog",".el-dialog__header"]],[h,".ba-operate-dialog"]])]),default:t(()=>[m((d(),c(b,{class:"ba-table-form-scrollbar"},{default:t(()=>[B("div",{class:I(["ba-operate-form","ba-"+e(a).form.operate+"-form"])},[o(p,{column:2,border:""},{default:t(()=>[o(l,{label:e(s)("id")},{default:t(()=>[n(r(e(a).form.extend.info.id),1)]),_:1},8,["label"]),o(l,{label:e(s)("auth.adminLog.Operation administrator")},{default:t(()=>[n(r(e(a).form.extend.info.username),1)]),_:1},8,["label"]),o(l,{label:e(s)("auth.adminLog.title")},{default:t(()=>[n(r(e(a).form.extend.info.title),1)]),_:1},8,["label"]),o(l,{label:e(s)("auth.adminLog.Operator IP")},{default:t(()=>[n(r(e(a).form.extend.info.ip),1)]),_:1},8,["label"]),o(l,{width:120,span:2,label:"URL"},{default:t(()=>[n(r(e(a).form.extend.info.url),1)]),_:1}),o(l,{width:120,span:2,label:"User Agent"},{default:t(()=>[n(r(e(a).form.extend.info.useragent),1)]),_:1}),o(l,{width:120,span:2,label:e(s)("createtime")},{default:t(()=>[n(r(e(w)(e(a).form.extend.info.createtime)),1)]),_:1},8,["label"]),o(l,{width:120,span:2,label:e(s)("auth.adminLog.Request data")},{default:t(()=>[o(f,{class:"table-el-tree",data:e(a).form.extend.info.data,props:{label:"label",children:"children"}},null,8,["data"])]),_:1},8,["label"])]),_:1})],2)]),_:1})),[[x,e(a).form.loading]])]),_:1},8,["model-value","onClose"])}}});const U=k(z,[["__scopeId","data-v-d3223563"]]);export{U as default};