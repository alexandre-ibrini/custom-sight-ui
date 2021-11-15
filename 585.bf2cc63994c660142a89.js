"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[585],{1585:(he,G,o)=>{o.r(G),o.d(G,{SystemStatusModule:()=>me});var Y=o(5987),W=o(4583),t=o(7716),lt=o(4812),ct=o(8359),m=o(3065),V=o(5939),h=(()=>{return(i=h||(h={})).FATAL="FATAL",i.RECOVERABLE="RECOVERABLE",i.WARNING="WARNING",h;var i})(),pt=o(1731),r=o(5618),u=o(8583),dt=o(5810),z=o(8658),ut=o(2178);let mt=(()=>{class i{constructor(e){this.store=e,this.subscriptions=[]}ngOnInit(){this.store.dispatch((0,z.iv)()),this.subscriptions.push(this.store.select(dt.P6).subscribe(e=>{e&&(this.value=e)}))}ngOnDestroy(){this.store.dispatch((0,z.SD)()),this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-disk-usage-graph"]],decls:10,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","16px",1,"disk-usage-graph"],["fxLayoutAlign","start center",2,"white-space","nowrap","width","100%","font-weight","700","font-size","18px"],["fxLayoutAlign","space-between center","fxLayout","row",2,"width","100%"],[2,"font-size","14px","color","#84859E"],["color","accent","mode","determinate",3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span"),t._uU(3," Disk usage"),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"span",3),t._uU(6,"499MB"),t.qZA(),t.TgZ(7,"span",3),t._uU(8),t.qZA(),t.qZA(),t._UZ(9,"mat-progress-bar",4),t.qZA()),2&e&&(t.xp6(8),t.hij("",null==n.value?null:n.value.toFixed(2),"%"),t.xp6(1),t.Q6J("value",n.value))},directives:[r.xw,r.Wh,r.SQ,ut.pW],styles:[".mat-progress-bar[_ngcontent-%COMP%]{border-radius:20px;height:8px}.disk-usage-graph[_ngcontent-%COMP%]  .mat-progress-bar.mat-accent .mat-progress-bar-fill:after{border-radius:20px!important}"]}),i})();var ht=o(4378),gt=o(2984),vt=o(2156),X=o(6526),j=o(1897),H=o(1445),$=o(9687);let ft=(()=>{class i{constructor(e){this.store=e,this.title=new t.IIB,this.id=new t.IIB,this.subscriptions=[],this.PieChartOption={backgroundColor:"#FFFFFF",tooltip:{trigger:"item"},legend:{show:!0,bottom:"0",left:"center",data:["Charge","Empty"],icon:"circle",itemGap:100,formatter:n=>{var s,l;return"{a|"+(null===(l=null===(s=this.PieChartOption)||void 0===s?void 0:s.series[0].data.find(c=>c.name===n))||void 0===l?void 0:l.value)+"%}\n{b|"+n+"}"},itemStyle:{size:8},textStyle:{fontFamily:"MarkPro",rich:{a:{align:"right",fontWeight:700,fontSize:12},b:{align:"right",fontWeight:400,fontSize:10}}}},series:[{type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,legendHoverLink:!0,label:{show:!1,position:"center",emphasis:{show:!0,fontSize:"16",fontWeight:"normal",color:"gray",formatter:"{c}%"}},labelLine:{show:!0},data:[{name:"Charge",value:0,itemStyle:{color:"#7772FD"},emphasis:{itemStyle:{color:"#7772FD"}}},{name:"Empty",value:100,itemStyle:{color:"#E4ECF7"},emphasis:{itemStyle:{color:"#E4ECF7"}}}]}]}}initChart(e){this.chatInstance=e,this.chatInstance.setOption(this.PieChartOption)}ngOnInit(){switch(this.id){case"SOC":this.store.dispatch((0,X.YN)()),this.subscriptions.push(this.store.select(gt.EF).subscribe(e=>{e&&this.setPieDataAndUpdateChart(e)}));break;case"V":this.store.dispatch((0,j.$M)()),this.subscriptions.push(this.store.select(vt.WT).subscribe(e=>{e&&this.setPieDataAndUpdateChart(e)}));break;case"C":this.store.dispatch((0,H.tO)()),this.subscriptions.push(this.store.select(ht.zr).subscribe(e=>{e&&this.setPieDataAndUpdateChart(e)}))}}ngOnDestroy(){switch(this.id){case"SOC":this.store.dispatch((0,X.Wc)());break;case"V":this.store.dispatch((0,j.Y0)());break;case"C":this.store.dispatch((0,H._v)())}this.subscriptions.forEach(e=>{e.unsubscribe()})}setPieDataAndUpdateChart(e){this.PieChartOption.series[0].data[0].value=e.toFixed(3),this.PieChartOption.series[0].data[1].value=Number((100-e).toFixed(3)),this.chatInstance.setOption(this.PieChartOption)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-overview-graph"]],inputs:{title:"title",id:"id"},decls:5,vars:3,consts:[["fxLayout","column",2,"height","286px"],["fxLayoutAlign","start center"],[1,"component-title"],["echarts","","autoResize","",3,"options","theme","chartInit"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span",2),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.NdJ("chartInit",function(l){return n.initChart(l)}),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(n.title),t.xp6(1),t.Q6J("options",n.PieChartOption)("theme","light"))},directives:[r.xw,r.Wh,$._w],styles:[""]}),i})();var K=o(4003);let bt=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-event-warnings"]],inputs:{event:"event"},decls:2,vars:1,consts:[["fxLayoutAlign","center center",2,"background","transparent !important"],[2,"width","100% !important",3,"event"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-warning-card",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("event",null==n.event?null:n.event.value))},directives:[r.Wh,K.U],styles:[""]}),i})();function Tt(i,a){if(1&i&&(t.TgZ(0,"div",3),t._UZ(1,"app-overview-graph",5),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Q6J("title",e.title)("id",e.id)}}function xt(i,a){if(1&i&&(t.TgZ(0,"div",6),t._UZ(1,"app-event-warnings",7),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Q6J("event",e)}}let yt=(()=>{class i{constructor(e){this.store=e,this.subscriptions=[],this.graphs=[{id:"SOC",title:"State of charge"},{id:"V",title:"Voltage"},{id:"C",title:"Current"}]}checkForChangeInEvents(e){var n,s,l,c,f,b,T,x,y,Z,C,A,_,w,S,O,F,U,k,E,D,M,P,N,L,J,I,B,Q,q,R;if((!this.events||0===(null===(n=Object.keys(this.events))||void 0===n?void 0:n.length))&&e||(null===(s=Object.keys(this.events))||void 0===s?void 0:s.length)!=(null===(l=Object.keys(e))||void 0===l?void 0:l.length))return!0;for(let d in this.events)return!e[d]||(null===(f=null===(c=this.events[d])||void 0===c?void 0:c.event)||void 0===f?void 0:f.component)!==(null===(T=null===(b=e[d])||void 0===b?void 0:b.event)||void 0===T?void 0:T.component)||(null===(Z=null===(y=null===(x=this.events[d])||void 0===x?void 0:x.event)||void 0===y?void 0:y.event)||void 0===Z?void 0:Z.code)!==(null===(_=null===(A=null===(C=e[d])||void 0===C?void 0:C.event)||void 0===A?void 0:A.event)||void 0===_?void 0:_.code)||(null===(O=null===(S=null===(w=this.events[d])||void 0===w?void 0:w.event)||void 0===S?void 0:S.event)||void 0===O?void 0:O.description)!==(null===(k=null===(U=null===(F=e[d])||void 0===F?void 0:F.event)||void 0===U?void 0:U.event)||void 0===k?void 0:k.description)||(null===(M=null===(D=null===(E=this.events[d])||void 0===E?void 0:E.event)||void 0===D?void 0:D.event)||void 0===M?void 0:M.proposed_solution)!==(null===(L=null===(N=null===(P=e[d])||void 0===P?void 0:P.event)||void 0===N?void 0:N.event)||void 0===L?void 0:L.proposed_solution)||(null===(B=null===(I=null===(J=this.events[d])||void 0===J?void 0:J.event)||void 0===I?void 0:I.event)||void 0===B?void 0:B.severity)!==(null===(R=null===(q=null===(Q=e[d])||void 0===Q?void 0:Q.event)||void 0===q?void 0:q.event)||void 0===R?void 0:R.severity)}getSeverityPriority(e){switch(e){case h.FATAL:return 0;case h.RECOVERABLE:return 1;case h.WARNING:return 2;default:return 100}}ngOnInit(){this.subscriptions.push(this.store.select(pt.v3).subscribe(e=>{var n;(null===(n=Object.keys(e))||void 0===n?void 0:n.length)>0&&this.checkForChangeInEvents(e)&&(this.events=e)}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-overview-tab"]],decls:8,vars:4,consts:[[1,"outer-div-padding"],["fxLayout","row wrap","fxLayoutGap.lt-md","7px","fxLayoutGap","16px"],["class","page-components unselectable full-width-mobile","style","height: fit-content; min-width: 260px;",4,"ngFor","ngForOf"],[1,"page-components","unselectable","full-width-mobile",2,"height","fit-content","min-width","260px"],["class","page-components unselectable full-width-mobile","style","height: fit-content; min-width: 260px; background-color: #E4ECF7 !important;","fxLayoutAlign","center center",4,"ngFor","ngForOf"],[3,"title","id"],["fxLayoutAlign","center center",1,"page-components","unselectable","full-width-mobile",2,"height","fit-content","min-width","260px","background-color","#E4ECF7 !important"],[2,"width","100% !important",3,"event"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,Tt,2,2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"app-disk-usage-graph"),t.qZA(),t.qZA(),t.TgZ(5,"div",1),t.YNc(6,xt,2,1,"div",4),t.ALo(7,"keyvalue"),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",n.graphs),t.xp6(4),t.Q6J("ngForOf",t.lcZ(7,2,n.events)))},directives:[r.xw,r.SQ,u.sg,mt,ft,r.Wh,bt],pipes:[u.Nd],styles:[""]}),i})();const Zt=[{name:"Dock to charging station",parameters:[]},{name:"Start charging manually",parameters:[]},{name:"Undock from charging station",parameters:[]},{name:"Dock to dolly",parameters:[]},{name:"Dock to turntable",parameters:[]},{name:"Go to location",parameters:[{name:"x [m]",type:"number"},{name:"y [m]",type:"number"},{name:"\u03b8 [rad]",type:"number"}]},{name:"Drive relative",parameters:[{name:"x [m]",type:"number"},{name:"y [m]",type:"number"},{name:"\u03b8 [rad]",type:"number"},{name:"Speed",type:"number"}]},{name:"Dolly lift --\x3e drop sequence",parameters:[{name:"Drive reverse distance",type:"text"}]},{name:"Reset state machine ",parameters:[]}];var Ct=o(8393),At=o(519),_t=o(8746),wt=o(9366),St=o(4415),Ot=o(4403),Ft=o(3849),Ut=o(8997),tt=o(1414),et=o(7938),g=o(8610),it=o(3552),kt=o(1110),Et=o(2958),Dt=o(9220),Mt=o(4356),Pt=o(8411),Nt=o(1384),nt=o(8402),Lt=o(1079);let Jt=(()=>{class i{constructor(e){this.store=e,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.store.select(Lt.Ue).subscribe(e=>{this.currentState=e})),this.store.dispatch((0,nt.x0)())}ngOnDestroy(){this.store.dispatch((0,nt.m6)()),this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-current-state"]],decls:9,vars:1,consts:[["fxLayoutAlign","center center",1,"utilities-card",2,"min-width","280px","min-height","74px","overflow","auto"],["fxLayout","row","fxLayoutAlign","space-between center","fxFlexFill",""],["fxLayout","column",2,"height","100%"],[2,"font-weight","600","font-size","12px","color","#718096"],[2,"font-weight","400","font-size","20px","color","#16192C"],["fxLayoutAlign","center center",2,"height","46px","width","46px","background-color","#00FF8B","border-radius","50%"],[1,"bi","bi-check-all","state-icon"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"span",3),t._uU(4,"Current State"),t.qZA(),t.TgZ(5,"span",4),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t._UZ(8,"i",6),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Oqu(n.currentState))},directives:[r.Wh,r.xw,r.s9],styles:[".state-icon[_ngcontent-%COMP%]{height:100%;line-height:46px;color:#fff;font-size:22px}"]}),i})();var ot=o(249);function It(i,a){1&i&&t._UZ(0,"i",4)}function Bt(i,a){1&i&&t._UZ(0,"i",5)}const Qt=function(i){return{color:i}};let qt=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-utilities-action"]],inputs:{actionTitle:"actionTitle",alert:"alert"},decls:5,vars:6,consts:[[1,"utilities-card",2,"min-width","298px"],[2,"font-size","14px","font-weight","bold","text-align","center","width","100%","display","block",3,"ngStyle"],["style","margin-right: 7px","class","bi bi-asterisk",4,"ngIf"],["style","margin-left: 7px","class","bi bi-chevron-right",4,"ngIf"],[1,"bi","bi-asterisk",2,"margin-right","7px"],[1,"bi","bi-chevron-right",2,"margin-left","7px"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"span",1),t.YNc(2,It,1,0,"i",2),t._uU(3),t.YNc(4,Bt,1,0,"i",3),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(4,Qt,n.alert?"#FF381D":"inherit")),t.xp6(1),t.Q6J("ngIf",n.alert),t.xp6(1),t.hij(" ",n.actionTitle," "),t.xp6(1),t.Q6J("ngIf",!n.alert))},directives:[u.PC,ot.Zl,u.O5],styles:[""]}),i})();var p=o(3679),at=o(1095),v=o(8295),st=o(9983);function Rt(i,a){if(1&i&&(t.ynx(0),t.TgZ(1,"mat-label",6),t._uU(2),t.qZA(),t.TgZ(3,"mat-form-field",7),t._UZ(4,"input",8),t.qZA(),t.BQk()),2&i){const e=a.$implicit;t.xp6(2),t.Oqu(e.fieldName),t.xp6(2),t.Q6J("type",e.displayName)("placeholder",e.placeholder)("formControlName",e.fieldName)}}let Gt=(()=>{class i{constructor(){}ngOnInit(){this.formGroup=new p.cw({}),this.form.forEach(e=>{this.formGroup.addControl(e.fieldName,new p.NI(e.fieldState,e.validators))})}buttonPressed(){var e,n,s,l,c;this.buttonTrigger(parseFloat(null===(e=this.formGroup.controls["X (m)"])||void 0===e?void 0:e.value),parseFloat(null===(n=this.formGroup.controls["Y (m)"])||void 0===n?void 0:n.value),parseFloat(null===(s=this.formGroup.controls["\xf8 (rad)"])||void 0===s?void 0:s.value),parseFloat(null===(c=null===(l=this.formGroup)||void 0===l?void 0:l.controls.Speed)||void 0===c?void 0:c.value))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-utilities-form"]],inputs:{title:"title",description:"description",button:"button",form:"form",buttonTrigger:"buttonTrigger"},decls:9,vars:5,consts:[[1,"text-dark-grey","utilities-card","utilities-form",2,"max-width","280px","min-height","650px","position","relative"],[1,"component-title"],[1,"component-description"],["fxLayout","column",2,"width","100%","margin-top","27px",3,"formGroup"],[4,"ngFor","ngForOf"],["mat-flat-button","","color","accent",2,"width","140px","height","45px","margin","auto","border-radius","8px","font-weight","700","margin-top","15px","position","absolute","align-self","center","bottom","30px",3,"click"],[2,"font-size","14px"],["appearance","outline","color","accent",2,"font-size","13px","font-weight","500"],["matInput","",3,"type","placeholder","formControlName"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"span",1),t._uU(2),t.qZA(),t.TgZ(3,"span",2),t._uU(4),t.qZA(),t.TgZ(5,"form",3),t.YNc(6,Rt,5,4,"ng-container",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.buttonPressed()}),t._uU(8),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(n.title),t.xp6(2),t.hij(" ",n.description," "),t.xp6(1),t.Q6J("formGroup",n.formGroup),t.xp6(1),t.Q6J("ngForOf",n.form),t.xp6(2),t.hij(" ",n.button," "))},directives:[p._Y,p.JL,r.xw,p.sg,u.sg,at.lW,v.hX,v.KE,st.Nt,p.Fj,p.JJ,p.u],styles:[".utilities-form[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-infix{padding:6.5px 0}"]}),i})();var Yt=o(9021),Wt=o(1769);function Vt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().$implicit.trigger()}),t._uU(2,"Send"),t.qZA(),t.qZA()}}function zt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"mat-form-field",13),t.TgZ(2,"input",14),t.NdJ("ngModelChange",function(s){return t.CHM(e),t.oxw().$implicit.input=s}),t.qZA(),t.qZA(),t.TgZ(3,"div"),t.TgZ(4,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().$implicit.trigger()}),t._uU(5,"Send"),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("placeholder",e.inputPlaceholder)("ngModel",e.input)("disabled",e.disabled),t.xp6(2),t.Q6J("disabled",e.disabled)}}const Xt=function(i){return{width:i}};function jt(i,a){if(1&i&&(t.ynx(0),t._UZ(1,"mat-divider",4),t.TgZ(2,"div",5),t.TgZ(3,"div",6),t.TgZ(4,"span",7),t._uU(5),t.qZA(),t.TgZ(6,"span",8),t._uU(7),t.qZA(),t.qZA(),t.YNc(8,Vt,3,0,"div",9),t.qZA(),t.YNc(9,zt,6,4,"div",10),t.BQk()),2&i){const e=a.$implicit,n=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.VKq(5,Xt,n.checkIfMobile()?"280px":"390px")),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description),t.xp6(1),t.Q6J("ngIf",!e.inputPlaceholder),t.xp6(1),t.Q6J("ngIf",e.inputPlaceholder)}}let Ht=(()=>{class i{constructor(){}ngOnInit(){}checkIfMobile(){return Yt.b.checkIfMobile()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-manual-actions"]],inputs:{actions:"actions"},decls:6,vars:1,consts:[[1,"manual-actions",2,"max-width","440px","min-height","650px"],[1,"component-title"],[1,"component-description"],[4,"ngFor","ngForOf"],[2,"margin","20px 0"],["fxLayout","row","fxLayoutAlign","space-between center",1,"manual-action-row",2,"margin-bottom","20px",3,"ngStyle"],["fxLayout","column"],[2,"font-size","14px"],[1,"text-dark-grey",2,"font-size","14px"],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","end",4,"ngIf"],["mat-flat-button","","color","accent",3,"click"],["fxLayout","row","fxLayoutAlign","end"],["appearance","outline","color","accent",1,"grey-input","manual-action-input",2,"font-size","13px","font-weight","500","width","150px"],["matInput","",3,"placeholder","ngModel","disabled","ngModelChange"],["mat-flat-button","","color","accent",2,"margin-top","calc(.25em - 1px)","margin-left","12px",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"span",1),t._uU(2,"Send manual actions"),t.qZA(),t.TgZ(3,"span",2),t._uU(4," Trigger nomnial activities. "),t.qZA(),t.YNc(5,jt,10,7,"ng-container",3),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.actions))},directives:[u.sg,Wt.d,r.xw,r.Wh,u.PC,ot.Zl,u.O5,at.lW,v.KE,st.Nt,p.Fj,p.JJ,p.On],styles:[".manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-infix{padding:6.5px 0}.manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline.grey-input .mat-form-field-outline{background:#EDF2F7;border-radius:5px;box-shadow:none}.manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline.grey-input .mat-form-field-outline-end, .manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline.grey-input .mat-form-field-outline-start{border:none!important}.manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-outline{border-radius:5px;box-shadow:0 1px 2px #32324714,0 0 1px #32324733}.manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-outline-end, .manual-actions[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-outline-start{border-color:#32324714!important}@media screen and (max-width: 320px){.manual-action-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:218px!important}.manual-action-input[_ngcontent-%COMP%]{width:134px!important}}"]}),i})();function $t(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"app-utilities-action",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().dropLiftButtonPressed()}),t.qZA(),t.qZA()}2&i&&(t.xp6(1),t.Q6J("actionTitle","Drop lift"))}function Kt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"app-utilities-action",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().raiseLiftButtonPressed()}),t.qZA(),t.qZA()}2&i&&(t.xp6(1),t.Q6J("actionTitle","Raise lift"))}function te(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"app-utilities-action",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().stopChargingButtonPressed()}),t.qZA(),t.qZA()}2&i&&(t.xp6(1),t.Q6J("actionTitle","Stop charging"))}function ee(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"app-utilities-action",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().startChargingButtonPressed()}),t.qZA(),t.qZA()}2&i&&(t.xp6(1),t.Q6J("actionTitle","Start charging"))}let ie=(()=>{class i{constructor(e){this.store=e,this.liftValue=!1,this.dropValue=!0,this.chargeOffValue=!0,this.chargeValue=!1,this.subscriptions=[],this.driveForm=[{displayName:"number",fieldName:"X (m)",placeholder:"Enter x coordinate",fieldState:"",validators:null},{displayName:"number",fieldName:"Y (m)",placeholder:"Enter y coordinate",fieldState:"",validators:null},{displayName:"number",fieldName:"\xf8 (rad)",placeholder:"Enter theta value",fieldState:"",validators:null},{displayName:"number",fieldName:"Speed",placeholder:"Enter speed value",fieldState:"",validators:null}],this.userForm=[{displayName:"number",fieldName:"X (m)",placeholder:"Enter x coordinate",fieldState:"",validators:null},{displayName:"number",fieldName:"Y (m)",placeholder:"Enter y coordinate",fieldState:"",validators:null},{displayName:"number",fieldName:"\xf8 (rad)",placeholder:"Enter theta value",fieldState:"",validators:null}],this.driveButtonTrigger=(n,s,l,c)=>{this.store.dispatch((0,wt.A)({driveRelativePositionRequest:{x:n,y:s,theta:l}})),setTimeout(()=>{this.store.dispatch((0,St.p)({driveRelativeSpeedRequest:c})),setTimeout(()=>{this.store.dispatch((0,Ot.N)({driveToRelativePositionRequest:!0}))},200)},200)},this.userButtonTrigger=(n,s,l,c)=>{this.store.dispatch((0,Ft.A)({gotoPositionRequest:{x:n,y:s,theta:l}})),setTimeout(()=>{this.store.dispatch((0,Ut.E)({gotoHardcodedPoseRequest:!0}))},200)},this.manualActions=[{name:"Dock to charging station",description:"",trigger:()=>{this.store.dispatch((0,Ct.m)())}},{name:"Start charging manually",description:"",trigger:()=>{this.store.dispatch((0,g.R8)())}},{name:"Undock from charging station",description:"",trigger:()=>{this.store.dispatch((0,_t.k)())}},{name:"Dock to dolly",description:"",trigger:()=>{this.store.dispatch((0,Pt.$)())}},{name:"Dock to turntable",description:"",trigger:()=>{this.store.dispatch((0,Nt.g)())}},{name:"Dolly lift to drop Sequence",description:"",input:null,inputPlaceholder:"Enter distance",trigger(){},disabled:!0}],this.commands=Zt}raiseLiftButtonPressed(){this.store.dispatch((0,tt.mX)()),this.store.dispatch((0,et.ej)())}dropLiftButtonPressed(){this.store.dispatch((0,et.Sx)()),this.store.dispatch((0,tt.n1)())}closeModasButtonPressed(){}startChargingButtonPressed(){this.store.dispatch((0,it.Y0)()),this.store.dispatch((0,g.R8)())}stopChargingButtonPressed(){this.store.dispatch((0,g.Gh)()),this.store.dispatch((0,it.D2)())}resetStateMachineButtonPressed(){this.store.dispatch((0,At.$)())}ngOnInit(){this.subscriptions.push(this.store.select(kt.mi).subscribe(e=>{this.chargeOffValue=e}),this.store.select(Et.Ww).subscribe(e=>{this.chargeValue=e}),this.store.select(Dt.QY).subscribe(e=>{this.dropValue=e}),this.store.select(Mt.Nl).subscribe(e=>{this.liftValue=e}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-utilities-tab"]],decls:21,vars:11,consts:[[1,"outer-div-padding","utilities-tab",2,"margin-bottom","40px"],["fxLayout","column","fxLayoutGap","26px"],["fxLayout","row wrap","fxFlex","30","fxLayoutGap.gt-sm","30px"],[1,"full-width-mobile"],[1,"page-components","unselectable"],["fxLayout","column",1,"full-width-mobile"],["class","page-components action-button",4,"ngIf"],[1,"page-components","action-button"],[3,"alert","actionTitle","click"],["fxLayout","row wrap","fxFlex","70","fxLayoutGap.gt-sm","30px"],[1,"page-components","unselectable","full-width-mobile"],["title","Drive relative","description","Input details to send device to a specific location or drive to a known postion.","button","Drive relative",3,"form","buttonTrigger"],["title","User defined location","description","Input details to send device to a specific location or drive to a known postion. ","button","Go to location",3,"form","buttonTrigger"],[3,"actions"],[3,"actionTitle","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"app-current-state"),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,$t,2,1,"div",6),t.YNc(8,Kt,2,1,"div",6),t.YNc(9,te,2,1,"div",6),t.YNc(10,ee,2,1,"div",6),t.qZA(),t.TgZ(11,"div",5),t.TgZ(12,"div",7),t.TgZ(13,"app-utilities-action",8),t.NdJ("click",function(){return n.resetStateMachineButtonPressed()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",9),t.TgZ(15,"div",10),t._UZ(16,"app-utilities-form",11),t.qZA(),t.TgZ(17,"div",10),t._UZ(18,"app-utilities-form",12),t.qZA(),t.TgZ(19,"div",10),t._UZ(20,"app-manual-actions",13),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngIf",n.liftValue),t.xp6(1),t.Q6J("ngIf",n.dropValue),t.xp6(1),t.Q6J("ngIf",n.chargeValue),t.xp6(1),t.Q6J("ngIf",n.chargeOffValue),t.xp6(3),t.Q6J("alert",!0)("actionTitle","Reset state machine"),t.xp6(3),t.Q6J("form",n.driveForm)("buttonTrigger",n.driveButtonTrigger),t.xp6(2),t.Q6J("form",n.userForm)("buttonTrigger",n.userButtonTrigger),t.xp6(2),t.Q6J("actions",n.manualActions))},directives:[r.xw,r.SQ,r.yH,Jt,u.O5,qt,Gt,Ht],styles:[".utilities-tab[_ngcontent-%COMP%]  .mat-focused .mat-form-field-label{color:#000!important}.utilities-tab[_ngcontent-%COMP%]  .mat-form-field-underline{background-color:gray!important}.utilities-tab[_ngcontent-%COMP%]  .mat-form-field-ripple{background-color:#000!important}.utilities-tab[_ngcontent-%COMP%]  .mat-form-field-label{color:gray!important}.min-height[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;padding:15px}"]}),i})();const ne=[{Title:"Last Brake Test",StartDate:new Date(Date.now()-2),EndDate:new Date(Date.now()),Status:"Success"},{Title:"Automatic Brake Test",Status:"Disabled"},{Title:"Test2",StartDate:new Date(Date.now()-2),EndDate:new Date(Date.now()),Status:"Warn",Message:"Whoops I Slipped"},{Title:"Test3",StartDate:new Date(Date.now()-2),EndDate:new Date(Date.now()),Status:"Error",Message:"Boy you gonna need a new car"},{Title:"Test4",StartDate:new Date(Date.now()),Status:"Running"}];var oe=o(7707),rt=o(960),ae=o(3511),se=o(5991),re=o(1802);const le=["brakeTestTable"];let ce=(()=>{class i{constructor(e){this.store=e,this.attemptedBrakeTests=ne,this.subscriptions=[],this.columns=[{id:"position",name:"Position"},{id:"status",name:"Status",badge:{badgeCell:!0,badgeColorRule:n=>"#425466",badgeValueRule:n=>!0===n?"SUCCESS":"FAILURE",badgeBackgroundColorRule:n=>!0===n?"#DEFFEE":"#FFDEDE"}},{id:"time",name:"Time",badge:{badgeCell:!0,badgeColorRule:n=>"#425466",badgeValueRule:n=>n,badgeBackgroundColorRule:n=>"transparent"}}],this.tableData=[],this.action={input:null,inputPlaceholder:"Input drive speed",trigger(){}},this.staticBrakeTestAction={input:null,inputPlaceholder:"Enable/Disable static break test",trigger:n=>{this.store.dispatch((0,oe.v)({disableAutomaticTestRequest:n}))}}}ngOnInit(){this.subscriptions.push(this.store.select(ae.cR).subscribe(e=>{var n;this.tableData=e.map((s,l)=>({position:l,status:!0,time:s.time_of_test})),null===(n=this.brakeTestTable)||void 0===n||n.setTableData(this.tableData)})),this.store.dispatch((0,rt.GU)())}ngOnDestroy(){this.store.dispatch((0,rt.pN)()),this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-brake-test-tab"]],viewQuery:function(e,n){if(1&e&&t.Gf(le,5),2&e){let s;t.iGM(s=t.CRH())&&(n.brakeTestTable=s.first)}},decls:10,vars:5,consts:[["fxLayout","column","fxLayoutGap","16px",1,"outer-div-padding",2,"height","100%","color","black","overflow","auto"],["fxLayout","row wrap","fxLayoutGap.gt-sm","30px",2,"width","100%"],["fxFlex.sm","100",1,"page-components","card-max-360","full-width-mobile",2,"background","#E4ECF7 !important"],["description","Only preform saftey tests in safe conditions, ensure personel are clear. "],["fxFlex.sm","100",1,"page-components","card-max-360","full-width-mobile"],["title","Static brake test","description","Automatically performed on a 12hr cycle.","slideText","Enabled",3,"slideAction"],["disabled","","title","Dynamic brake test","description","Trigger manually to test brake function. ","slideText","test mechanical brakes",3,"inputAction"],["title","Hello",3,"title","columns","ELEMENT_DATA"],["brakeTestTable",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"app-warning-card",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"app-switch-tile",5),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-switch-tile",6),t.qZA(),t.qZA(),t._UZ(8,"app-data-table",7,8),t.qZA()),2&e&&(t.xp6(5),t.Q6J("slideAction",n.staticBrakeTestAction),t.xp6(2),t.Q6J("inputAction",n.action),t.xp6(1),t.Q6J("title","Break Test History")("columns",n.columns)("ELEMENT_DATA",n.tableData))},directives:[r.xw,r.SQ,r.yH,K.U,se.s,re.Q],styles:[""]}),i})();const pe=[{path:"",component:(()=>{class i{constructor(e,n,s){this.alert=e,this.snackbar=n,this.store=s}ngOnInit(){this.store.dispatch((0,W.Oe)())}ngOnDestroy(){this.store.dispatch((0,W.gj)())}openDialog(){this.alert.openAlert("title","subtitle",["description"])}openSnackbar(){this.snackbar.openSnackBar("test snackbar","ok")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(lt.Q),t.Y36(ct.o),t.Y36(m.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-system-status"]],decls:8,vars:0,consts:[[1,"page-style","system-status"],["color","primary","mat-align-tabs","start"],["label","Overview"],["label","Utilities"],["label","Brake Test"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-tab-group",1),t.TgZ(2,"mat-tab",2),t._UZ(3,"app-overview-tab"),t.qZA(),t.TgZ(4,"mat-tab",3),t._UZ(5,"app-utilities-tab"),t.qZA(),t.TgZ(6,"mat-tab",4),t._UZ(7,"app-brake-test-tab"),t.qZA(),t.qZA(),t.qZA())},directives:[V.SP,V.uX,yt,ie,ce],styles:[".page-style[_ngcontent-%COMP%]{height:calc(100vh - 96px)}.system-status[_ngcontent-%COMP%]  .mat-tab-body-wrapper{height:calc(100vh - 144px)}@media screen and (max-width: 479px){.system-status[_ngcontent-%COMP%]  .mat-tab-label{width:33.33%}}"]}),i})(),data:{animation:"LandingPageAnimation"}},{path:"**",redirectTo:""}];let de=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[Y.Bz.forChild(pe)],Y.Bz]}),i})();var ue=o(6744);let me=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[ue.L,de,$.Ns.forChild()]]}),i})()}}]);