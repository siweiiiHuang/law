import{$ as h,a0 as q,r as d,e as n,c as V,o as i,f as l,h as a,m as L,k as u,D as E,K,L as R,i as $,n as g}from"./index-C0uc6efc.js";const j={slot:"footer"},A={__name:"TreeNodeDialog",props:{modelValue:{},modelModifiers:{}},emits:h(["confirm"],["update:modelValue"]),setup(k,{emit:y}){const r=q(k,"modelValue"),x=y,o=d({label:void 0,value:void 0}),C={label:[{required:!0,message:"请输入选项名",trigger:"blur"}],value:[{required:!0,message:"请输入选项值",trigger:"blur"}]},s=d("string"),N=d([{label:"字符串",value:"string"},{label:"数字",value:"number"}]),w=d(100),p=d();function B(){o.value={label:void 0,value:void 0}}function m(){r.value=!1}function F(){p.value.validate(c=>{c&&(s.value==="number"&&(o.value.value=parseFloat(o.value.value)),o.value.id=w.value++,x("commit",o.value),m())})}return(c,t)=>{const f=n("el-input"),_=n("el-form-item"),v=n("el-col"),T=n("el-option"),U=n("el-select"),D=n("el-form"),b=n("el-button"),M=n("el-dialog");return i(),V("div",null,[l(M,{title:"添加选项",modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),width:"800px","close-on-click-modal":!1,"modal-append-to-body":!1,onOpen:B,onClose:m},{default:a(()=>[l(D,{ref_key:"treeNodeForm",ref:p,model:u(o),rules:C,"label-width":"100px"},{default:a(()=>[l(v,{span:24},{default:a(()=>[l(_,{label:"选项名",prop:"label"},{default:a(()=>[l(f,{modelValue:u(o).label,"onUpdate:modelValue":t[0]||(t[0]=e=>u(o).label=e),placeholder:"请输入选项名",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(v,{span:24},{default:a(()=>[l(_,{label:"选项值",prop:"value"},{default:a(()=>[l(f,{modelValue:u(o).value,"onUpdate:modelValue":t[2]||(t[2]=e=>u(o).value=e),placeholder:"请输入选项值",clearable:""},{append:a(()=>[l(U,{modelValue:u(s),"onUpdate:modelValue":t[1]||(t[1]=e=>E(s)?s.value=e:null),style:{width:"100px"}},{default:a(()=>[(i(!0),V(K,null,R(u(N),(e,O)=>(i(),$(T,{key:O,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model"]),L("div",j,[l(b,{type:"primary",onClick:F},{default:a(()=>[g(" 确定 ")]),_:1}),l(b,{onClick:m},{default:a(()=>[g(" 取消 ")]),_:1})])]),_:1},8,["modelValue"])])}}};export{A as default};
