"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[12],{5720:(M,p,o)=>{o.d(p,{B:()=>s});var l=o(7238);const s=(0,l.X$)("simpleFadeAnimation",[(0,l.SB)("in",(0,l.oB)({opacity:1})),(0,l.eR)(":enter",[(0,l.oB)({opacity:0}),(0,l.jt)(600)]),(0,l.eR)(":leave",(0,l.jt)(600,(0,l.oB)({opacity:0})))])},1356:(M,p,o)=>{o.d(p,{F:()=>u});var l=o(5720),s=o(4699),n=o(7716),v=o(2558),_=o(6986),x=o(5618),t=o(8583),C=o(249);function N(c,g){if(1&c){const d=n.EpF();n.TgZ(0,"div",3),n.NdJ("click",function(){n.CHM(d);const h=n.oxw();return h.closeClicked(h.notificationBar.id)}),n._UZ(1,"i",4),n.qZA()}}const A=function(c){return[c]};let u=(()=>{class c{constructor(d,f){this.notificationBarMiddleware=d,this.appShellService=f,this.notificationBar={closable:!1,id:"",content:"",timer:null,severity:-1},this.iconClass="bi-info",this.outerDivSeverityClass="outerDivInfo",this.severityEnum=s.l,this.isSideNavOpened=!1}setClassesFromSeverity(){switch(this.notificationBar.severity){case s.l.INFO:this.iconClass="bi-info-circle",this.outerDivSeverityClass="outerDivInfo";break;case s.l.WARNING:this.iconClass="bi-exclamation-circle",this.outerDivSeverityClass="outerDivWarning";break;case s.l.FATAL:this.iconClass="bi-x-circle fatal-icon",this.outerDivSeverityClass="outerDivFatal"}}closeClicked(d){this.notificationBarMiddleware.removeNotificationBar(d)}ngOnInit(){this.appShellService.sideNavOpenedStatus.subscribe(d=>{this.isSideNavOpened=d}),this.setClassesFromSeverity(),this.notificationBar.timer&&this.notificationBar.timer>0&&setTimeout(()=>this.notificationBarMiddleware.removeNotificationBar(this.notificationBar.id),this.notificationBar.timer)}}return c.\u0275fac=function(d){return new(d||c)(n.Y36(v.Y),n.Y36(_.c))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-notification-bar"]],inputs:{notificationBar:"notificationBar"},decls:6,vars:10,consts:[["fxLayout","row","fxLayoutAlign","space-between center",3,"ngClass"],["fxLayoutAlign","start center","fxLayoutGap","20px"],["style","cursor:pointer",3,"click",4,"ngIf"],[2,"cursor","pointer",3,"click"],[1,"bi","bi-x"]],template:function(d,f){1&d&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"i"),n.TgZ(3,"span"),n._uU(4),n.qZA(),n.qZA(),n.YNc(5,N,2,0,"div",2),n.qZA()),2&d&&(n.Tol("notificationBarOuterDiv "+f.outerDivSeverityClass),n.Q6J("@simpleFadeAnimation","in")("ngClass",n.VKq(8,A,f.isSideNavOpened?"outerDivWidthOpened":"outerDivWidthClosed")),n.xp6(2),n.Tol("bi "+f.iconClass),n.xp6(2),n.Oqu(f.notificationBar.content),n.xp6(1),n.Q6J("ngIf",f.notificationBar.closable))},directives:[x.xw,x.Wh,t.mk,C.oO,x.SQ,t.O5],styles:[".notificationBarOuterDiv[_ngcontent-%COMP%]{background-color:#ededed;min-height:32px;padding:0 16px;position:sticky;z-index:100;color:#fff;width:100%}.fatal-icon[_ngcontent-%COMP%]{color:#fff}.warning-icon[_ngcontent-%COMP%]{color:#fff}.info-icon[_ngcontent-%COMP%]{color:#fff}.outerDivInfo[_ngcontent-%COMP%]{background-color:#e4ecf7!important;color:#000}.outerDivWarning[_ngcontent-%COMP%]{background-color:#ffba7d!important;color:#fff}.outerDivFatal[_ngcontent-%COMP%]{background-color:#ff7d7d!important;color:#fff}"],data:{animation:[l.B]}}),c})()},1012:(M,p,o)=>{o.r(p),o.d(p,{AccountModule:()=>V});var l=o(5987),s=o(3679),n=o(9021),v=o(7984),_=o(6260),x=o(9162),t=o(7716),C=o(3065),N=o(1530),A=o(2558),u=o(5618),c=o(8583),g=o(249),d=o(5991),f=o(1356),h=o(8295),b=o(9983),y=o(1095);function F(i,r){if(1&i&&(t.ynx(0),t._UZ(1,"app-notification-bar",11),t.BQk()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("notificationBar",e)}}function T(i,r){if(1&i&&t._UZ(0,"span",21),2&i){const e=t.oxw(2);t.Q6J("innerHTML",e.username,t.oJD)}}function Z(i,r){if(1&i&&(t.TgZ(0,"mat-form-field",22),t._UZ(1,"input",23),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("placeholder",e.username)}}function B(i,r){if(1&i&&t._UZ(0,"span",21),2&i){const e=t.oxw().$implicit,a=t.oxw(2);t.Q6J("innerHTML",a.accountForm.controls[e.fieldName].value,t.oJD)}}function O(i,r){if(1&i&&(t.TgZ(0,"mat-form-field",22),t._UZ(1,"input",25),t.TgZ(2,"mat-error"),t._uU(3),t.qZA(),t.qZA()),2&i){const e=t.oxw().$implicit,a=t.oxw(2);t.xp6(1),t.Q6J("placeholder",a.findPlaceholder(e.fieldName))("formControlName",e.fieldName),t.xp6(2),t.Oqu(a.getFieldErrorCode(e.fieldName))}}function P(i,r){if(1&i&&(t.TgZ(0,"div",24),t.TgZ(1,"mat-label",14),t._uU(2),t.qZA(),t.YNc(3,B,1,1,"span",15),t.YNc(4,O,4,3,"mat-form-field",16),t.qZA()),2&i){const e=r.$implicit,a=t.oxw(2);t.Q6J("fxFlex","address"===e.fieldName?100:50),t.xp6(2),t.Oqu(e.displayName),t.xp6(1),t.Q6J("ngIf",!a.editingMode),t.xp6(1),t.Q6J("ngIf",a.editingMode)}}const E=function(i){return{"margin-bottom":i}};function I(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",26),t.TgZ(1,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).saveChanges()}),t._uU(2," Save Changes "),t.qZA(),t.TgZ(3,"button",28),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).cancelChanges()}),t._uU(4," Cancel Changes "),t.qZA(),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("fxLayoutGap",e.checkIfMobile()?"0px":"20px"),t.xp6(1),t.ekj("spinner",e.isUpdating),t.Q6J("disabled",e.isUpdating)("ngStyle",t.VKq(8,E,e.checkIfMobile()?"16px":"0px")),t.xp6(2),t.ekj("spinner",e.isUpdating),t.Q6J("disabled",e.isUpdating)}}function w(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"button",30),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).startEditing()}),t._uU(2," Edit "),t.qZA(),t.qZA()}}const L=function(i){return{"save-btn-mobile":i}};function D(i,r){if(1&i&&(t.TgZ(0,"div",12),t.TgZ(1,"div",13),t.TgZ(2,"mat-label",14),t._uU(3,"Username"),t.qZA(),t.YNc(4,T,1,1,"span",15),t.YNc(5,Z,2,1,"mat-form-field",16),t.qZA(),t.YNc(6,P,5,4,"div",17),t.TgZ(7,"div",18),t.YNc(8,I,5,10,"div",19),t.YNc(9,w,3,0,"div",20),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",!e.editingMode),t.xp6(1),t.Q6J("ngIf",e.editingMode),t.xp6(1),t.Q6J("ngForOf",e.formFields),t.xp6(1),t.Q6J("ngClass",t.VKq(6,L,e.checkIfMobile())),t.xp6(1),t.Q6J("ngIf",e.editingMode),t.xp6(1),t.Q6J("ngIf",!e.editingMode)}}const U=function(i){return{"dark-mode-mobile":i}},J=[{path:"",component:(()=>{class i{constructor(e,a,m){this.store=e,this.jwtService=a,this.notificationBarMiddleware=m,this.accountForm=new s.cw({}),this.notificationBars=[],this.formFields=[{displayName:"First Name",fieldName:"firstName",placeholder:"placeholder",fieldState:"value 1",validators:[s.kI.required]},{displayName:"Last name",fieldName:"lastName",placeholder:"placeholder last name",fieldState:"value",validators:[s.kI.required]},{fieldName:"email",displayName:"Email",placeholder:"placeholder",fieldState:"value 1",validators:[s.kI.required,s.kI.email]},{displayName:"Phone Number",fieldName:"phoneNumber",placeholder:"placeholder last name",fieldState:"value",validators:[s.kI.required,n.b.getPhoneValidator()]},{displayName:"Address",fieldName:"address",placeholder:"placeholder address",fieldState:"value address",validators:[s.kI.required]}],this.subscriptions=[]}ngOnInit(){this.notificationBarMiddleware.notificationBars.subscribe(e=>{this.notificationBars=e}),this.username=this.jwtService.getFullUsername(),this.subscriptions.push(this.store.select(_.ep).subscribe(e=>{this.isUpdating=e,this.toggleEditMode(!1)})),this.isUpdating=!1,this.editingMode=!1,this.formFields.forEach(e=>{this.accountForm.addControl(e.fieldName,new s.NI(e.fieldState,e.validators))}),this.setFormGroupValueFromUserModel(this.jwtService.getUserInfoModel())}saveChanges(){!0===this.editingMode&&this.store.dispatch((0,v.B)({updateUserRequest:{email:this.getFieldValue("email"),firstName:this.getFieldValue("firstName"),lastName:this.getFieldValue("lastName"),phoneNumber:this.getFieldValue("phoneNumber"),address:this.getFieldValue("address")}}))}toggleEditMode(e){this.editingMode=e}startEditing(){this.toggleEditMode(!0),this.unsavedValues={email:this.getFieldValue("email"),firstName:this.getFieldValue("firstName"),lastName:this.getFieldValue("lastName"),phoneNumber:this.getFieldValue("phoneNumber"),address:this.getFieldValue("address")}}cancelChanges(){this.unsavedValues&&this.setFormGroupValueFromUserModel(this.unsavedValues),this.toggleEditMode(!1)}findPlaceholder(e){return this.formFields.find(a=>a.fieldName===e).placeholder}getFieldValue(e){var a,m;return null===(m=null===(a=this.accountForm)||void 0===a?void 0:a.controls[e])||void 0===m?void 0:m.value}setFormGroupValueFromUserModel(e){this.accountForm.patchValue({email:e.email,firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,address:e.address})}checkIfMobile(){return n.b.checkIfMobile()}getFieldErrorCode(e){return x.L.get(e)}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.yh),t.Y36(N.T),t.Y36(A.Y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-account-page"]],decls:12,vars:7,consts:[[1,"page-style",2,"overflow-y","auto","height","100%"],["fxLayout","column",2,"width","100%"],[4,"ngFor","ngForOf"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"outer-div-padding"],["fxLayout","column","fxFlex","70"],[2,"width","100%",3,"formGroup"],[1,"page-components",2,"font-size","18px","font-weight","700","margin-bottom","16px"],["fxLayout","row wrap","class","page-components",4,"ngIf"],["fxLayout","column","fxFlex.lt-sm","100","fxFlex","50",2,"padding-right","30px",3,"ngClass"],["fxFlex.sm","100",1,"page-components","card-max-360"],["title","Dark mode","slideText","Disabled",3,"disabled"],[2,"width","100%",3,"notificationBar"],["fxLayout","row wrap",1,"page-components"],["fxLayout","column","fxFlex.lt-sm","100","fxFlex","100",2,"padding-right","30px"],[2,"color","#425466","font-size","14px"],["style","margin-bottom: 25px;font-size: 13px",3,"innerHTML",4,"ngIf"],["style","font-size: 13px","fxFlex","","class","grey-input","appearance","outline","color","accent",4,"ngIf"],["fxLayout","column","fxFlex.lt-sm","100","style","padding-right: 30px",3,"fxFlex",4,"ngFor","ngForOf"],["fxLayout","row wrap","fxLayoutAlign","end end",2,"width","100%",3,"ngClass"],["fxLayout","row wrap",3,"fxLayoutGap",4,"ngIf"],["fxLayout","row wrap","fxLayoutGap","20px",4,"ngIf"],[2,"margin-bottom","25px","font-size","13px",3,"innerHTML"],["fxFlex","","appearance","outline","color","accent",1,"grey-input",2,"font-size","13px"],["matInput","","disabled","",3,"placeholder"],["fxLayout","column","fxFlex.lt-sm","100",2,"padding-right","30px",3,"fxFlex"],["matInput","",3,"placeholder","formControlName"],["fxLayout","row wrap",3,"fxLayoutGap"],["mat-flat-button","","color","accent",2,"font-size","13px","font-weight","bold","margin-bottom","16px",3,"disabled","ngStyle","click"],["mat-flat-button","","color","accent",2,"font-size","13px","font-weight","bold",3,"disabled","click"],["fxLayout","row wrap","fxLayoutGap","20px"],["mat-flat-button","","color","accent",2,"font-size","13px","font-weight","bold",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,F,2,1,"ng-container",2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"form",5),t.TgZ(6,"div",6),t._uU(7," Account Information "),t.qZA(),t.YNc(8,D,10,8,"div",7),t.qZA(),t.TgZ(9,"div",8),t.TgZ(10,"div",9),t._UZ(11,"app-switch-tile",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",a.notificationBars),t.xp6(3),t.Q6J("formGroup",a.accountForm),t.xp6(3),t.Q6J("ngIf",a.accountForm),t.xp6(1),t.Q6J("ngClass",t.VKq(5,U,a.checkIfMobile())),t.xp6(2),t.Q6J("disabled",!0))},directives:[u.xw,c.sg,u.Wh,u.yH,s._Y,s.JL,s.sg,c.O5,c.mk,g.oO,d.s,f.F,h.hX,h.KE,b.Nt,s.Fj,s.JJ,s.u,h.TO,u.SQ,y.lW,c.PC,g.Zl],styles:['.save-btn-mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.save-btn-mobile[_ngcontent-%COMP%]{margin:20px auto;padding:0!important}.dark-mode-mobile[_ngcontent-%COMP%]{padding:0!important}@keyframes spinner{to{transform:rotate(360deg)}}.spinner[_ngcontent-%COMP%]:before{content:"";box-sizing:border-box;position:absolute;top:50%;left:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border:2px solid #ffffff;border-top-color:#000;animation:spinner .8s linear infinite}']}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.Bz.forChild(J)],l.Bz]}),i})();var Q=o(9958);let V=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[S,Q.L]]}),i})()}}]);