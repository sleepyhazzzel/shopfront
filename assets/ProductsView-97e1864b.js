import{p as oe,az as pe,aA as Pe,g as se,D as Ve,aB as be,aC as we,o as G,u as ne,aD as xe,aE as ee,c as t,G as E,t as $,aF as ke,q as Ce,a5 as J,aG as Se,aH as Fe,x as f,s as Be,H as Te,A as De,z as j,B as Ie,aI as Re,aJ as Ae,T as ue,aK as Ue,aL as Me,aM as _e,aN as He,ai as ae,aO as Ne,v as Ge,y as Ee,Y as ze,$ as $e,a0 as ie,a1 as qe,a3 as m,aP as Le,ab as Oe,aj as ye,J as X,a8 as Z,an as te,aQ as je,V as Ke,a2 as Je,a4 as We,a7 as c,am as Qe,ac as Ye,ad as Xe,aa as Ze,af as ea,ag as aa,a9 as ta,W as la}from"./index-df0392b1.js";import{c as oa,a as le,e as sa,f as na,u as ra,d as K,V as ua}from"./index.esm-19dda2f2.js";import{V as ia}from"./VContainer-c6959afa.js";import{V as da}from"./VRow-b9a24f24.js";import{V as de}from"./VCol-74ee2234.js";import{V as ca}from"./VDivider-c39964c6.js";import{m as va,a as ma,b as fa,c as ga,d as pa,e as Va,f as ba,u as xa,p as ya,g as ha,h as Pa,i as wa,j as ka,k as Ca,l as Sa,n as ce,o as ve,q as me,r as fe}from"./VDataTable-8987730d.js";import{m as Fa,a as ge,V as Ba}from"./VSelect-28018fd9.js";import"./VList-fef404d8.js";const Ta=oe({...pe(),...Pe(Fa(),["inline"])},"VCheckbox"),Da=se()({name:"VCheckbox",inheritAttrs:!1,props:Ta(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,R){let{attrs:S,slots:l}=R;const i=Ve(e,"modelValue"),{isFocused:r,focus:w,blur:M}=be(e),F=we(),A=G(()=>e.id||`checkbox-${F}`);return ne(()=>{const[z,T]=xe(S),_=ee.filterProps(e),g=ge.filterProps(e);return t(ee,E({class:["v-checkbox",e.class]},z,_,{modelValue:i.value,"onUpdate:modelValue":b=>i.value=b,id:A.value,focused:r.value,style:e.style}),{...l,default:b=>{let{id:y,messagesId:D,isDisabled:k,isReadonly:C}=b;return t(ge,E(g,{id:y.value,"aria-describedby":D.value,disabled:k.value,readonly:C.value},T,{modelValue:i.value,"onUpdate:modelValue":H=>i.value=H,onFocus:w,onBlur:M}),l)}})}),{}}}),Ia=oe({itemsLength:{type:[Number,String],required:!0},...va(),...ma(),...fa()},"VDataTableServer"),Ra=se()({name:"VDataTableServer",props:Ia(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,R){let{attrs:S,slots:l}=R;const{groupBy:i}=ga(e),{sortBy:r,multiSort:w,mustSort:M}=pa(e),{page:F,itemsPerPage:A}=Va(e),z=G(()=>parseInt(e.itemsLength,10)),{columns:T,headers:_}=ba(e,{groupBy:i,showSelect:$(e,"showSelect"),showExpand:$(e,"showExpand")}),{items:g}=xa(e,T),{toggleSort:b}=ya({sortBy:r,multiSort:w,mustSort:M,page:F}),{opened:y,isGroupOpen:D,toggleGroup:k,extractRows:C}=ha({groupBy:i,sortBy:r}),{pageCount:H,setItemsPerPage:q}=Pa({page:F,itemsPerPage:A,itemsLength:z}),{flatItems:N}=wa(g,i,y),{isSelected:h,select:B,selectAll:U,toggleSelect:I,someSelected:x,allSelected:n}=ka(e,{allItems:g,currentPage:g}),{isExpanded:v,toggleExpand:d}=Ca(e),p=G(()=>C(g.value));Sa({page:F,itemsPerPage:A,sortBy:r,groupBy:i,search:$(e,"search")}),ke("v-data-table",{toggleSort:b,sortBy:r}),Ce({VDataTableRows:{hideNoData:$(e,"hideNoData"),noDataText:$(e,"noDataText"),loading:$(e,"loading"),loadingText:$(e,"loadingText")}});const s=G(()=>({page:F.value,itemsPerPage:A.value,sortBy:r.value,pageCount:H.value,toggleSort:b,setItemsPerPage:q,someSelected:x.value,allSelected:n.value,isSelected:h,select:B,selectAll:U,toggleSelect:I,isExpanded:v,toggleExpand:d,isGroupOpen:D,toggleGroup:k,items:p.value.map(o=>o.raw),internalItems:p.value,groupedItems:N.value,columns:T.value,headers:_.value}));ne(()=>{const o=ce.filterProps(e),P=ve.filterProps(e),a=me.filterProps(e),u=fe.filterProps(e);return t(fe,E({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},u),{top:()=>{var V;return(V=l.top)==null?void 0:V.call(l,s.value)},default:()=>{var V,L,W,Q,Y,O;return l.default?l.default(s.value):t(J,null,[(V=l.colgroup)==null?void 0:V.call(l,s.value),t("thead",{class:"v-data-table__thead",role:"rowgroup"},[t(ve,E(P,{sticky:e.fixedHeader}),l)]),(L=l.thead)==null?void 0:L.call(l,s.value),t("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(W=l["body.prepend"])==null?void 0:W.call(l,s.value),l.body?l.body(s.value):t(me,E(S,a,{items:N.value}),l),(Q=l["body.append"])==null?void 0:Q.call(l,s.value)]),(Y=l.tbody)==null?void 0:Y.call(l,s.value),(O=l.tfoot)==null?void 0:O.call(l,s.value)])},bottom:()=>l.bottom?l.bottom(s.value):t(ce,o,{prepend:l["footer.prepend"]})})})}});const Aa=oe({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...pe(),...Se()},"VTextarea"),Ua=se()({name:"VTextarea",directives:{Intersect:Fe},inheritAttrs:!1,props:Aa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,R){let{attrs:S,emit:l,slots:i}=R;const r=Ve(e,"modelValue"),{isFocused:w,focus:M,blur:F}=be(e),A=G(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),z=G(()=>{if(S.maxlength)return S.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function T(n,v){var d,p;!e.autofocus||!n||(p=(d=v[0].target)==null?void 0:d.focus)==null||p.call(d)}const _=f(),g=f(),b=Be(""),y=f(),D=G(()=>e.persistentPlaceholder||w.value||e.active);function k(){var n;y.value!==document.activeElement&&((n=y.value)==null||n.focus()),w.value||M()}function C(n){k(),l("click:control",n)}function H(n){l("mousedown:control",n)}function q(n){n.stopPropagation(),k(),ae(()=>{r.value="",Ne(e["onClick:clear"],n)})}function N(n){var d;const v=n.target;if(r.value=v.value,(d=e.modelModifiers)!=null&&d.trim){const p=[v.selectionStart,v.selectionEnd];ae(()=>{v.selectionStart=p[0],v.selectionEnd=p[1]})}}const h=f(),B=f(+e.rows),U=G(()=>["plain","underlined"].includes(e.variant));Te(()=>{e.autoGrow||(B.value=+e.rows)});function I(){e.autoGrow&&ae(()=>{if(!h.value||!g.value)return;const n=getComputedStyle(h.value),v=getComputedStyle(g.value.$el),d=parseFloat(n.getPropertyValue("--v-field-padding-top"))+parseFloat(n.getPropertyValue("--v-input-padding-top"))+parseFloat(n.getPropertyValue("--v-field-padding-bottom")),p=h.value.scrollHeight,s=parseFloat(n.lineHeight),o=Math.max(parseFloat(e.rows)*s+d,parseFloat(v.getPropertyValue("--v-input-control-height"))),P=parseFloat(e.maxRows)*s+d||1/0,a=Ee(p??0,o,P);B.value=Math.floor((a-d)/s),b.value=Ge(a)})}De(I),j(r,I),j(()=>e.rows,I),j(()=>e.maxRows,I),j(()=>e.density,I);let x;return j(h,n=>{n?(x=new ResizeObserver(I),x.observe(h.value)):x==null||x.disconnect()}),Ie(()=>{x==null||x.disconnect()}),ne(()=>{const n=!!(i.counter||e.counter||e.counterValue),v=!!(n||i.details),[d,p]=xe(S),{modelValue:s,...o}=ee.filterProps(e),P=Re(e);return t(ee,E({ref:_,modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":U.value},e.class],style:e.style},d,o,{centerAffix:B.value===1&&!U.value,focused:w.value}),{...i,default:a=>{let{id:u,isDisabled:V,isDirty:L,isReadonly:W,isValid:Q}=a;return t(Ae,E({ref:g,style:{"--v-textarea-control-height":b.value},onClick:C,onMousedown:H,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:u.value,active:D.value||L.value,centerAffix:B.value===1&&!U.value,dirty:L.value||e.dirty,disabled:V.value,focused:w.value,error:Q.value===!1}),{...i,default:Y=>{let{props:{class:O,...re}}=Y;return t(J,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ue(t("textarea",E({ref:y,class:O,value:r.value,onInput:N,autofocus:e.autofocus,readonly:W.value,disabled:V.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:k,onBlur:F},re,p),null),[[Ue("intersect"),{handler:T},null,{once:!0}]]),e.autoGrow&&ue(t("textarea",{class:[O,"v-textarea__sizer"],id:`${re.id}-sizer`,"onUpdate:modelValue":he=>r.value=he,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Me,r.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?a=>{var u;return t(J,null,[(u=i.details)==null?void 0:u.call(i,a),n&&t(J,null,[t("span",null,null),t(_e,{active:e.persistentCounter||w.value,value:A.value,max:z.value},i.counter)])])}:void 0})}),He({},_,g,y)}}),Ma=ye("h1",{class:"text-center"},"商品管理",-1),_a={class:"d-flex align-center mt-1"},ja={__name:"ProductsView",setup(e){const{apiAuth:R}=Oe(),S=ze(),l=f(null),i=f(!1),r=f(""),w=s=>{s?(r.value=s._id,g.value.value=s.name,b.value.value=s.price,y.value.value=s.description,D.value.value=s.category,k.value.value=s.sell):r.value="",i.value=!0},M=()=>{i.value=!1,_(),l.value.deleteFileRecord()},F=["衣服","食品","3C","遊戲"],A=oa({name:le().required("缺少商品名稱"),price:sa().typeError("商品價格格式錯誤").required("缺少商品價格").min(0,"商品價格不能少於0"),description:le().required("缺少商品說明"),category:le().required("缺少商品分類").test("isCategory","商品分類錯誤",s=>F.includes(s)),sell:na()}),{handleSubmit:z,isSubmitting:T,resetForm:_}=ra({validationSchema:A,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),g=K("name"),b=K("price"),y=K("description"),D=K("category"),k=K("sell"),C=f([]),H=f([]),q=z(async s=>{var o,P,a;if(!((o=C.value[0])!=null&&o.error)&&!(r.value===""&&C.value.length===0))try{const u=new FormData;for(const V in s)u.append(V,s[V]);C.value.length>0&&u.append("image",C.value[0].file),r.value===""?await R.post("/products",u):await R.patch("/products/"+r.value,u),S({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"success",location:"bottom"}}),M(),p()}catch(u){const V=((a=(P=u==null?void 0:u.response)==null?void 0:P.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";S({text:V,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"warning",location:"bottom"}})}}),N=f(10),h=f([{key:"createdAt",order:"desc"}]),B=f(1),U=f([]),I=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],x=f(!0),n=f(0),v=f(""),d=async()=>{var s,o,P,a;x.value=!0;try{const{data:u}=await R.get("/products/all",{params:{page:B.value,itemsPerPage:N.value,sortBy:((s=h.value[0])==null?void 0:s.key)||"createdAt",sortOrder:((o=h.value[0])==null?void 0:o.order)==="asc"?1:-1,search:v.value}});U.value.splice(0,U.value.length,...u.result.data),n.value=u.result.total}catch(u){console.log(u);const V=((a=(P=u==null?void 0:u.response)==null?void 0:P.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";S({text:V,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}x.value=!1};d();const p=()=>{B.value=1,d()};return(s,o)=>{const P=$e("VueFileAgent");return ie(),qe(J,null,[t(ia,{class:"px-5"},{default:m(()=>[t(da,null,{default:m(()=>[t(de,{cols:"12"},{default:m(()=>[Ma]),_:1}),t(ca),t(de,{cols:"12"},{default:m(()=>[t(Ra,{"items-per-page":N.value,"onUpdate:itemsPerPage":[o[1]||(o[1]=a=>N.value=a),d],"sort-by":h.value,"onUpdate:sortBy":[o[2]||(o[2]=a=>h.value=a),d],page:B.value,"onUpdate:page":[o[3]||(o[3]=a=>B.value=a),d],items:U.value,headers:I,loading:x.value,"items-length":n.value,search:v.value},{top:m(()=>[ye("div",_a,[t(X,{class:"me-2 mb-5",color:"blue",height:"56px",size:"large",onClick:w},{default:m(()=>[Z("新增商品")]),_:1}),t(te,{label:"搜尋","append-inner-icon":"mdi-magnify",modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=a=>v.value=a),"onClick:append":p,onKeydown:je(p,["enter"])},null,8,["modelValue"])])]),"item.image":m(({item:a})=>[t(Ke,{src:a.image,height:"50px"},null,8,["src"])]),"item.sell":m(({item:a})=>[a.sell?(ie(),Je(la,{key:0,icon:"mdi-check"})):We("",!0)]),"item.edit":m(({item:a})=>[t(X,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:u=>w(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Le,{modelValue:i.value,"onUpdate:modelValue":o[11]||(o[11]=a=>i.value=a),persistent:"",width:"500px"},{default:m(()=>[t(ua,{disabled:c(T),onSubmit:Qe(c(q),["prevent"])},{default:m(()=>[t(Ye,null,{default:m(()=>[t(Xe,null,{default:m(()=>[Z(Ze(r.value===""?"新增商品":"編輯商品"),1)]),_:1}),t(ea,null,{default:m(()=>[t(te,{label:"名稱",modelValue:c(g).value.value,"onUpdate:modelValue":o[4]||(o[4]=a=>c(g).value.value=a),"error-messages":c(g).errorMessage.value},null,8,["modelValue","error-messages"]),t(te,{label:"價格",type:"number",min:"0",modelValue:c(b).value.value,"onUpdate:modelValue":o[5]||(o[5]=a=>c(b).value.value=a),"error-messages":c(b).errorMessage.value},null,8,["modelValue","error-messages"]),t(Ba,{label:"分類",items:F,modelValue:c(D).value.value,"onUpdate:modelValue":o[6]||(o[6]=a=>c(D).value.value=a),"error-messages":c(D).errorMessage.value},null,8,["modelValue","error-messages"]),t(Da,{label:"上架",modelValue:c(k).value.value,"onUpdate:modelValue":o[7]||(o[7]=a=>c(k).value.value=a),"error-messages":c(k).errorMessage.value},null,8,["modelValue","error-messages"]),t(Ua,{label:"說明",modelValue:c(y).value.value,"onUpdate:modelValue":o[8]||(o[8]=a=>c(y).value.value=a),"error-messages":c(y).errorMessage.value},null,8,["modelValue","error-messages"]),t(P,{modelValue:C.value,"onUpdate:modelValue":o[9]||(o[9]=a=>C.value=a),"raw-model-value":H.value,"onUpdate:rawModelValue":o[10]||(o[10]=a=>H.value=a),accept:"image/jpeg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},helpText:"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:l},null,8,["modelValue","raw-model-value"])]),_:1}),t(aa,null,{default:m(()=>[t(ta),t(X,{color:"red",disabled:c(T),onClick:M},{default:m(()=>[Z("取消")]),_:1},8,["disabled"]),t(X,{color:"green",type:"submit",loading:c(T)},{default:m(()=>[Z("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{ja as default};
