import{l as z,a as J,c as M,b as P,d as Q,e as W}from"./cache-D_WDbu1o.js";import{B as X,d as Y,r,e as c,G as Z,c as ee,o as b,f as e,h as t,H as R,i as S,k as n,n as f,m as k}from"./index-C0uc6efc.js";const te={class:"app-container"},ae=k("span",{style:{"vertical-align":"middle"}},"缓存列表",-1),le=k("span",{style:{"vertical-align":"middle"}},"键名列表",-1),ne=k("span",{style:{"vertical-align":"middle"}},"缓存内容",-1),oe=X({name:"CacheList"}),re=Object.assign(oe,{setup(ce){const{proxy:u}=Y(),N=r([]),V=r([]),s=r({}),_=r(!0),g=r(!1),h=r(""),x=r(window.innerHeight-200);function K(){_.value=!0,z().then(l=>{N.value=l.data,_.value=!1})}function O(){K(),u.$modal.msgSuccess("刷新缓存列表成功")}function F(l){M(l.cacheName).then(a=>{u.$modal.msgSuccess("清理缓存名称["+l.cacheName+"]成功"),p()})}function p(l){const a=l!==void 0?l.cacheName:h.value;a!==""&&(g.value=!0,J(a).then(y=>{V.value=y.data,g.value=!1,h.value=a}))}function H(){p(),u.$modal.msgSuccess("刷新键名列表成功")}function U(l){Q(l).then(a=>{u.$modal.msgSuccess("清理缓存键名["+l+"]成功"),p()})}function A(l){return l.cacheName.replace(":","")}function L(l){return l.replace(h.value,"")}function j(l){P(h.value,l).then(a=>{s.value=a.data})}function E(){W().then(l=>{u.$modal.msgSuccess("清理全部缓存成功")})}return K(),(l,a)=>{const y=c("Collection"),m=c("el-button"),i=c("el-table-column"),$=c("el-table"),v=c("el-card"),d=c("el-col"),G=c("Key"),I=c("Document"),C=c("el-input"),w=c("el-form-item"),D=c("el-row"),T=c("el-form"),B=Z("loading");return b(),ee("div",te,[e(D,{gutter:10},{default:t(()=>[e(d,{span:8},{default:t(()=>[e(v,{style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(y,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),ae,e(m,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[0]||(a[0]=o=>O())})]),default:t(()=>[R((b(),S($,{data:n(N),height:n(x),"highlight-current-row":"",onRowClick:p,style:{width:"100%"}},{default:t(()=>[e(i,{label:"序号",width:"60",type:"index"}),e(i,{label:"缓存名称",align:"center",prop:"cacheName","show-overflow-tooltip":!0,formatter:A}),e(i,{label:"备注",align:"center",prop:"remark","show-overflow-tooltip":!0}),e(i,{label:"操作",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:t(o=>[e(m,{link:"",type:"primary",icon:"Delete",onClick:q=>F(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[B,n(_)]])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(v,{style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(G,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),le,e(m,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[1]||(a[1]=o=>H())})]),default:t(()=>[R((b(),S($,{data:n(V),height:n(x),"highlight-current-row":"",onRowClick:j,style:{width:"100%"}},{default:t(()=>[e(i,{label:"序号",width:"60",type:"index"}),e(i,{label:"缓存键名",align:"center","show-overflow-tooltip":!0,formatter:L}),e(i,{label:"操作",width:"60",align:"center","class-name":"small-padding fixed-width"},{default:t(o=>[e(m,{link:"",type:"primary",icon:"Delete",onClick:q=>U(o.row)},null,8,["onClick"])]),_:1})]),_:1},8,["data","height"])),[[B,n(g)]])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(v,{bordered:!1,style:{height:"calc(100vh - 125px)"}},{header:t(()=>[e(I,{style:{width:"1em",height:"1em","vertical-align":"middle"}}),f(),ne,e(m,{style:{float:"right",padding:"3px 0"},link:"",type:"primary",icon:"Refresh",onClick:a[2]||(a[2]=o=>E())},{default:t(()=>[f("清理全部")]),_:1})]),default:t(()=>[e(T,{model:n(s)},{default:t(()=>[e(D,{gutter:32},{default:t(()=>[e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"缓存名称:",prop:"cacheName"},{default:t(()=>[e(C,{modelValue:n(s).cacheName,"onUpdate:modelValue":a[3]||(a[3]=o=>n(s).cacheName=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"缓存键名:",prop:"cacheKey"},{default:t(()=>[e(C,{modelValue:n(s).cacheKey,"onUpdate:modelValue":a[4]||(a[4]=o=>n(s).cacheKey=o),readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{offset:1,span:22},{default:t(()=>[e(w,{label:"缓存内容:",prop:"cacheValue"},{default:t(()=>[e(C,{modelValue:n(s).cacheValue,"onUpdate:modelValue":a[5]||(a[5]=o=>n(s).cacheValue=o),type:"textarea",rows:8,readOnly:!0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{re as default};
