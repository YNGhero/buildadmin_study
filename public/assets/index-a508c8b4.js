import{e as o,j as r}from"./common-60f70958.js";const e="/admin/index/";function a(){return o({url:e+"index",method:"get"})}function u(n,t={}){return o({url:e+"login",data:t,method:n})}function l(){const n=r();return o({url:e+"logout",method:"POST",data:{refresh_token:n.getToken("refresh")}})}export{l as a,a as i,u as l};
