import{d as v,X as b,z as V,r as i,a as y,t as C,e as n,b as l,x as S,a1 as L,u as r,L as c,K as f}from"./vue-a70dbbf9.js";import{g as N,p as $,M as x}from"./common-60f70958.js";import{b as m}from"./validate-44e9fa1e.js";import{a as I}from"./index-363faea7.js";import{F as p}from"./index-06cda30d.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-30b244da.js";import"./random-1d7fa280.js";import"./iconfont-0e6ed700.js";import"./index-20feb690.js";import"./controllerUrls-941681c3.js";import"./index-05f0e37d.js";const U={class:"user-views"},k={class:"change-password"},q=v({__name:"changePassword",setup(B){const{t:s}=I(),P=N(),u=b(),e=V({formSubmitLoading:!1,form:{oldPassword:"",newPassword:"",confirmPassword:""},rules:{oldPassword:[m({name:"required",title:s("user.account.changePassword.Old password")})],newPassword:[m({name:"required",title:s("user.account.changePassword.New password")}),m({name:"password"})],confirmPassword:[m({name:"required",title:s("user.account.changePassword.Confirm new password")}),m({name:"password"}),{validator:(d,o,a)=>{(e.form.newPassword||e.form.confirmPassword)&&(e.form.newPassword==e.form.confirmPassword?a():a(new Error(s("user.account.changePassword.The duplicate password does not match the new password")))),a()},trigger:"blur"}]}}),w=d=>{d&&d.validate(o=>{o&&(e.formSubmitLoading=!0,x(e.form).then(a=>{e.formSubmitLoading=!1,a.code==1&&P.logout()}).catch(()=>{e.formSubmitLoading=!1}))})};return(d,o)=>{const a=i("el-button"),_=i("el-form-item"),g=i("el-form"),h=i("el-card");return y(),C("div",U,[n(h,{class:"user-views-card",shadow:"hover",header:r(s)("user.account.changePassword.Change Password")},{default:l(()=>[S("div",k,[n(g,{model:e.form,rules:e.rules,"label-position":"top",ref_key:"formRef",ref:u,onKeyup:o[5]||(o[5]=L(t=>w(u.value),["enter"]))},{default:l(()=>[n(p,{label:r(s)("user.account.changePassword.Old password"),type:"password",modelValue:e.form.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.oldPassword=t),prop:"oldPassword","input-attr":{"show-password":!0},placeholder:r(s)("user.account.changePassword.Please enter your current password")},null,8,["label","modelValue","placeholder"]),n(p,{label:r(s)("user.account.changePassword.New password"),type:"password",modelValue:e.form.newPassword,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.newPassword=t),prop:"newPassword","input-attr":{"show-password":!0},placeholder:r(s)("Please input field",{field:r(s)("user.account.changePassword.New password")})},null,8,["label","modelValue","placeholder"]),n(p,{label:r(s)("user.account.changePassword.Confirm new password"),type:"password",modelValue:e.form.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.confirmPassword=t),prop:"confirmPassword","input-attr":{"show-password":!0},placeholder:r(s)("Please input field",{field:r(s)("user.account.changePassword.Confirm new password")})},null,8,["label","modelValue","placeholder"]),n(_,{class:"submit-buttons"},{default:l(()=>[n(a,{onClick:o[3]||(o[3]=t=>r($)(u.value))},{default:l(()=>[c(f(d.$t("Reset")),1)]),_:1}),n(a,{type:"primary",loading:e.formSubmitLoading,onClick:o[4]||(o[4]=t=>w(u.value))},{default:l(()=>[c(f(d.$t("Save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["header"])])}}});const H=R(q,[["__scopeId","data-v-936437c5"]]);export{H as default};
