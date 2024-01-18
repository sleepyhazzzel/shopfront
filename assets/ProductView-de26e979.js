import{ao as S,Z as k,Y as B,X as q,x as P,A,a0 as F,a1 as M,c as t,a3 as s,ap as $,a5 as N,ab as R,V as j,aj as c,aa as m,a7 as r,am as D,J as V,a8 as d,ac as E,ad as T,ag as U}from"./index-df0392b1.js";import{c as I,e as J,u as L,d as O,V as X}from"./index.esm-19dda2f2.js";import{V as Y}from"./VContainer-c6959afa.js";import{V as Z}from"./VRow-b9a24f24.js";import{V as b}from"./VCol-74ee2234.js";import{V as z}from"./VDivider-c39964c6.js";import{V as G}from"./VSelect-28018fd9.js";import"./VList-fef404d8.js";const H={class:"my-3"},re={__name:"ProductView",setup(K){const v=S(),p=k(),{api:_,apiAuth:y}=R(),n=B(),f=q(),a=P({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),h=I({quantity:J().typeError("格式錯誤").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:g,handleSubmit:w}=L({validationSchema:h,initialValues:{quantity:1}}),i=O("quantity"),x=w(async u=>{var o,e;if(!f.isLogin){p.push("/login"),n({text:"請先登入再加入商品",showCloseButton:!1,snackbarProps:{timeout:3e3,color:"warning",location:"bottom"}});return}try{const{data:l}=await y.patch("/users/cart",{product:a.value._id,quantity:u.quantity});f.cart=l.result,n({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(l){const C=((e=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";n({text:C,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"warning",location:"bottom"}})}});return A(async()=>{var u,o;try{const{data:e}=await _.get("/products/"+v.params.id);a.value._id=e.result._id,a.value.name=e.result.name,a.value.price=e.result.price,a.value.description=e.result.description,a.value.image=e.result.image,a.value.sell=e.result.sell,a.value.category=e.result.category,document.title=`購物網 | ${a.value.name}`}catch(e){console.log(e);const l=((o=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";n({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),p.push("/")}}),(u,o)=>(F(),M(N,null,[t(Y,null,{default:s(()=>[t(Z,{class:"mt-6"},{default:s(()=>[t(b,{class:"pe-6",cols:"12",md:"6"},{default:s(()=>[t(j,{src:a.value.image},null,8,["src"])]),_:1}),t(b,{cols:"12",md:"6"},{default:s(()=>[c("h2",null,m(a.value.name),1),c("p",null,m(a.value.description),1),t(z,{class:"my-6"}),c("h3",H,"$"+m(a.value.price),1),t(X,{class:"d-flex align-center",disabled:r(g),onSubmit:D(r(x),["prevent"])},{default:s(()=>[t(G,{class:"pe-5",label:"number",min:"0",items:["1","2","3","4"],density:"comfortable",modelValue:r(i).value.value,"onUpdate:modelValue":o[0]||(o[0]=e=>r(i).value.value=e),modelModifiers:{number:!0},"error-messages":r(i).errorMessage.value},null,8,["modelValue","error-messages"]),t(V,{class:"mb-5",type:"submit",color:"blue",height:"45px","prepend-icon":"mdi-cart",loading:r(g)},{default:s(()=>[d("加入購物車")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),t($,{class:"justify-center align-center","model-value":!a.value.sell,persistent:""},{default:s(()=>[t(E,{class:"text-center",width:"300"},{default:s(()=>[t(T,{class:"text-red"},{default:s(()=>[d("已下架")]),_:1}),t(U,null,{default:s(()=>[t(V,{to:"/",color:"blue",block:""},{default:s(()=>[d("回首頁")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])],64))}};export{re as default};
