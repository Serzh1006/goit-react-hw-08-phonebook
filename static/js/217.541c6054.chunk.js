"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{6217:function(e,a,n){n.r(a),n.d(a,{default:function(){return Q}});var t=n(9434),s=n(7689),o=n(2791),r=n(9085),c=(0,n(4134).I)({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),l=n(2964),m={contactsList:"contacts_contactsList__jR+Jq",contactsItem:"contacts_contactsItem__X8-sm",btnDelete:"contacts_btnDelete__a2bpd",numberContact:"contacts_numberContact__1XBHA"},i=n(3329),u=function(e){var a=e.id,n=e.name,s=e.number,o=(0,t.I0)();return(0,i.jsxs)("li",{className:m.contactsItem,children:[(0,i.jsx)("p",{className:m.nameContact,children:n}),(0,i.jsx)("p",{className:m.numberContact,children:s}),(0,i.jsx)("button",{className:m.btnDelete,onClick:function(){return o((0,l.B)(a))},type:"button",children:(0,i.jsx)(c,{color:"black",boxSize:3})})]})},_=n(2286),d="contacts_contactsList__aACQx",b=function(){var e=(0,t.v9)(_.Sb);return(0,i.jsx)("ul",{className:d,children:e.map((function(e){return(0,i.jsx)(u,{id:e.id,name:e.name,number:e.number},e.id)}))})},p=n(8997),h=n(6895),x="filter_filterLabel__3HlzA",f="filter_filterInput__Hvnfk",j=function(){var e=(0,t.v9)(_.AD),a=(0,t.I0)();return(0,i.jsxs)("label",{className:x,children:["Find contacts by Name",(0,i.jsx)(p.I,{placeholder:"Enter name",className:f,type:"text",name:"filter",value:e,onChange:function(e){return a((0,h.T)(e.target.value))}})]})},N=n(1523),v="loader_loader__M-FUL",g=function(){return(0,i.jsx)("div",{className:v,children:(0,i.jsx)(N.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},k=n(5705),C=n(8007),I=n(9055),y=n(3244),w=n(2544),L="update_formPhonebook__oO-Vn",A="update_label__Z8b52",S="update_input__Rlww8",B="update_btnSubmit__VQi0h",Z="update_nameErrorMessage__HMbYh",M="update_numberErrorMessage__zN5fa",P=function(){var e=(0,t.I0)(),a=(0,t.v9)(_.Af),n=C.Ry().shape({name:C.Z_().required(),number:C.Z_().min(9).max(13).required()});return(0,i.jsx)(k.J9,{initialValues:{name:"",number:""},validationSchema:n,onSubmit:function(n,t){var s=t.resetForm,o=a.find((function(e){return e.name===n.name}));if(void 0!==o){var c={id:o.id,contact:n};return e((0,y.W)(c)),void s()}r.Am.error("Contact not found",w.Z),s()},children:(0,i.jsxs)(k.l0,{className:L,children:[(0,i.jsxs)("label",{className:A,children:["Name",(0,i.jsx)(k.gN,{as:p.I,className:S,type:"text",name:"name",autoComplete:"off"})]}),(0,i.jsx)(k.Bc,{className:Z,component:"div",name:"name"}),(0,i.jsxs)("label",{className:A,children:["Number",(0,i.jsx)(k.gN,{as:p.I,className:S,type:"tel",name:"number",autoComplete:"off"})]}),(0,i.jsx)(k.Bc,{className:M,component:"div",name:"number"}),(0,i.jsx)(I.z,{className:B,type:"submit",colorScheme:"green",children:"Update Contact"})]})})},E=n(4498),F="phonebook_formPhonebook__Ze-PS",z="phonebook_label__xTEUZ",H="phonebook_input__xQL83",q="phonebook_btnSubmit__zwxW6",O="phonebook_nameErrorMessage__R24Mr",R="phonebook_numberErrorMessage__82ads",D=function(){var e=(0,t.v9)(_.Af),a=(0,t.I0)(),n=C.Ry().shape({name:C.Z_().required(),number:C.Z_().min(9).max(13).required()});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.J9,{initialValues:{name:"",number:""},validationSchema:n,onSubmit:function(n,t){var s=t.resetForm,o=e.find((function(e){return e.name===n.name}));if(void 0!==o)return r.Am.error("".concat(o.name," is already in contacts"),w.Z),void s();a((0,E.C)(n)),s()},children:(0,i.jsxs)(k.l0,{className:F,children:[(0,i.jsxs)("label",{className:z,children:["Name",(0,i.jsx)(k.gN,{as:p.I,className:H,type:"text",name:"name",autoComplete:"off"})]}),(0,i.jsx)(k.Bc,{className:O,component:"div",name:"name"}),(0,i.jsxs)("label",{className:z,children:["Number",(0,i.jsx)(k.gN,{as:p.I,className:H,type:"tel",name:"number",autoComplete:"off"})]}),(0,i.jsx)(k.Bc,{className:R,component:"div",name:"number"}),(0,i.jsx)(I.z,{className:q,type:"submit",colorScheme:"blue",children:"Add Contact"})]})}),(0,i.jsx)(P,{})]})},V=n(9157),J={phoneBook:"app_phoneBook__owwP5",contacts:"app_contacts__jPGw8"},Q=function(){var e=(0,t.v9)(_.NH),a=(0,t.v9)(_.Af),n=(0,t.v9)(_.gs),c=(0,t.I0)();return(0,o.useEffect)((function(){if(!n)return(0,i.jsx)(s.Fg,{to:"/login"});c((0,V.y)())}),[c,n]),(0,i.jsxs)("div",{className:J.contactsPage,children:[(0,i.jsx)("h2",{className:J.phoneBook,children:"Phonebook"}),(0,i.jsx)(D,{}),(0,i.jsx)("h2",{className:J.contacts,children:"Contacts"}),(0,i.jsx)(j,{}),e&&(0,i.jsx)(g,{}),0!==a.length&&(0,i.jsx)(b,{}),(0,i.jsx)(r.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}}}]);
//# sourceMappingURL=217.541c6054.chunk.js.map