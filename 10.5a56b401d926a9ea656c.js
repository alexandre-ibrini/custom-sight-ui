(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{e3zW:function(e,t,i){"use strict";i.r(t),i.d(t,"AccountModule",function(){return k});var n=i("ofXK"),a=i("tyNb"),o=i("3Pt+"),l=i("kv2i"),s=i("e/9a"),r=i("nr2S"),d=i("fXoL"),c=i("l7P3"),f=i("64jX"),m=i("XiUz"),u=i("kmnG"),b=i("znSr"),p=i("FuBT"),g=i("qFsG"),h=i("bTqV");function x(e,t){if(1&e&&d.Rb(0,"span",17),2&e){const e=d.ic(2);d.nc("innerHTML",e.username,d.xc)}}function v(e,t){if(1&e&&(d.Wb(0,"mat-form-field",18),d.Rb(1,"input",19),d.Vb()),2&e){const e=d.ic(2);d.Eb(1),d.nc("placeholder",e.username)}}function F(e,t){if(1&e&&d.Rb(0,"span",17),2&e){const e=d.ic().$implicit,t=d.ic(2);d.nc("innerHTML",t.accountForm.controls[e.fieldName].value,d.xc)}}function N(e,t){if(1&e&&(d.Wb(0,"mat-form-field",18),d.Rb(1,"input",21),d.Vb()),2&e){const e=d.ic().$implicit,t=d.ic(2);d.Eb(1),d.nc("placeholder",t.findPlaceholder(e.fieldName))("formControlName",e.fieldName)}}function V(e,t){if(1&e&&(d.Wb(0,"div",20),d.Wb(1,"mat-label",8),d.Ec(2),d.Vb(),d.Dc(3,F,1,1,"span",9),d.Dc(4,N,2,2,"mat-form-field",10),d.Vb()),2&e){const e=t.$implicit,i=d.ic(2);d.nc("fxFlex","address"===e.fieldName?100:50),d.Eb(2),d.Fc(e.displayName),d.Eb(1),d.nc("ngIf",!i.editingMode),d.Eb(1),d.nc("ngIf",i.editingMode)}}function y(e,t){if(1&e){const e=d.Xb();d.Wb(0,"div",22),d.Wb(1,"button",23),d.ec("click",function(){return d.wc(e),d.ic(2).saveChanges()}),d.Ec(2," Save Changes "),d.Vb(),d.Wb(3,"button",23),d.ec("click",function(){return d.wc(e),d.ic(2).cancelChanges()}),d.Ec(4," Cancel Changes "),d.Vb(),d.Vb()}if(2&e){const e=d.ic(2);d.Eb(1),d.Ib("spinner",e.isUpdating),d.nc("disabled",e.isUpdating),d.Eb(2),d.Ib("spinner",e.isUpdating),d.nc("disabled",e.isUpdating)}}function w(e,t){if(1&e){const e=d.Xb();d.Wb(0,"div",22),d.Wb(1,"button",24),d.ec("click",function(){return d.wc(e),d.ic(2).startEditing()}),d.Ec(2," Edit "),d.Vb(),d.Vb()}}const E=function(e){return{"save-btn-mobile":e}},M=function(e){return{"dark-mode-mobile":e}};function I(e,t){if(1&e&&(d.Wb(0,"div",6),d.Wb(1,"div",7),d.Wb(2,"mat-label",8),d.Ec(3,"Username"),d.Vb(),d.Dc(4,x,1,1,"span",9),d.Dc(5,v,2,1,"mat-form-field",10),d.Vb(),d.Dc(6,V,5,4,"div",11),d.Wb(7,"div",12),d.Dc(8,y,5,6,"div",13),d.Dc(9,w,3,0,"div",13),d.Vb(),d.Wb(10,"div",14),d.Wb(11,"div",15),d.Rb(12,"app-switch-tile",16),d.Vb(),d.Vb(),d.Vb()),2&e){const e=d.ic();d.Eb(4),d.nc("ngIf",!e.editingMode),d.Eb(1),d.nc("ngIf",e.editingMode),d.Eb(1),d.nc("ngForOf",e.formFields),d.Eb(1),d.nc("ngClass",d.pc(8,E,e.checkIfMobile())),d.Eb(1),d.nc("ngIf",e.editingMode),d.Eb(1),d.nc("ngIf",!e.editingMode),d.Eb(1),d.nc("ngClass",d.pc(10,M,e.checkIfMobile())),d.Eb(2),d.nc("disabled",!0)}}const C=[{path:"",component:(()=>{class e{constructor(e,t){this.store=e,this.jwtService=t,this.accountForm=new o.g({}),this.formFields=[{displayName:"First Name",fieldName:"firstName",placeholder:"placeholder",fieldState:"value 1",validators:null},{displayName:"Last name",fieldName:"lastName",placeholder:"placeholder last name",fieldState:"value",validators:null},{fieldName:"email",displayName:"Email",placeholder:"placeholder",fieldState:"value 1",validators:null},{displayName:"Phone Number",fieldName:"phoneNumber",placeholder:"placeholder last name",fieldState:"value",validators:null},{displayName:"Address",fieldName:"address",placeholder:"placeholder address",fieldState:"value address",validators:null}]}ngOnInit(){this.username=this.jwtService.getFullUsername(),this.store.select(r.a).subscribe(e=>{this.isUpdating=e,this.toggleEditMode(!1)}),this.isUpdating=!1,this.editingMode=!1,this.formFields.forEach(e=>{this.accountForm.addControl(e.fieldName,new o.e(e.fieldState,e.validators))}),this.setFormGroupValueFromUserModel(this.jwtService.getUserInfoModel())}saveChanges(){!0===this.editingMode&&this.store.dispatch(Object(s.a)({updateUserRequest:{email:this.getFieldValue("email"),firstName:this.getFieldValue("firstName"),lastName:this.getFieldValue("lastName"),phoneNumber:this.getFieldValue("phoneNumber"),address:this.getFieldValue("address")}}))}toggleEditMode(e){this.editingMode=e}startEditing(){this.toggleEditMode(!0),this.unsavedValues={email:this.getFieldValue("email"),firstName:this.getFieldValue("firstName"),lastName:this.getFieldValue("lastName"),phoneNumber:this.getFieldValue("phoneNumber"),address:this.getFieldValue("address")}}cancelChanges(){this.unsavedValues&&this.setFormGroupValueFromUserModel(this.unsavedValues),this.toggleEditMode(!1)}findPlaceholder(e){return this.formFields.find(t=>t.fieldName===e).placeholder}getFieldValue(e){var t,i;return null===(i=null===(t=this.accountForm)||void 0===t?void 0:t.controls[e])||void 0===i?void 0:i.value}setFormGroupValueFromUserModel(e){this.accountForm.patchValue({email:e.email,firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,address:e.address})}checkIfMobile(){return l.a.checkIfMobile()}}return e.\u0275fac=function(t){return new(t||e)(d.Qb(c.h),d.Qb(f.a))},e.\u0275cmp=d.Kb({type:e,selectors:[["app-account-page"]],decls:7,vars:2,consts:[[1,"page-style",2,"overflow-y","auto","height","100%"],["fxLayout","row","fxLayoutAlign","center center",1,"outer-div-padding"],["fxLayout","column","fxFlex","70"],[2,"width","100%",3,"formGroup"],[2,"font-size","18px","font-weight","700","margin-bottom","30px"],["fxLayout","row wrap",4,"ngIf"],["fxLayout","row wrap"],["fxLayout","column","fxFlex.lt-sm","100","fxFlex","100",2,"padding-right","30px"],[2,"color","#425466","font-size","14px"],["style","margin-bottom: 25px;font-size: 13px",3,"innerHTML",4,"ngIf"],["style","font-size: 13px","fxFlex","","class","grey-input","appearance","outline","color","accent",4,"ngIf"],["fxLayout","column","fxFlex.lt-sm","100","style","padding-right: 30px",3,"fxFlex",4,"ngFor","ngForOf"],["fxFlex","100","fxLayout","row","fxLayoutAlign","end end",2,"padding","30px 30px 0 0",3,"ngClass"],["fxLayout","row","fxLayoutGap","20px",4,"ngIf"],["fxLayout","column","fxFlex.lt-sm","100","fxFlex","50",2,"padding-right","30px",3,"ngClass"],["fxFlex.sm","100",1,"page-components","card-max-360"],["title","Dark mode","slideText","Disabled",3,"disabled"],[2,"margin-bottom","25px","font-size","13px",3,"innerHTML"],["fxFlex","","appearance","outline","color","accent",1,"grey-input",2,"font-size","13px"],["matInput","","disabled","",3,"placeholder"],["fxLayout","column","fxFlex.lt-sm","100",2,"padding-right","30px",3,"fxFlex"],["matInput","",3,"placeholder","formControlName"],["fxLayout","row","fxLayoutGap","20px"],["mat-flat-button","","color","accent",2,"font-size","13px","font-weight","bold",3,"disabled","click"],["mat-flat-button","","color","accent",2,"font-size","13px","font-weight","bold",3,"click"]],template:function(e,t){1&e&&(d.Wb(0,"div",0),d.Wb(1,"div",1),d.Wb(2,"div",2),d.Wb(3,"form",3),d.Wb(4,"div",4),d.Ec(5," Account Information "),d.Vb(),d.Dc(6,I,13,12,"div",5),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&e&&(d.Eb(3),d.nc("formGroup",t.accountForm),d.Eb(3),d.nc("ngIf",t.accountForm))},directives:[m.d,m.c,m.b,o.s,o.n,o.h,n.l,u.e,n.k,n.j,b.a,p.a,u.b,g.b,o.c,o.m,o.f,m.e,h.a],styles:['.mat-form-field-appearance-outline .mat-form-field-outline-end,  .mat-form-field-appearance-outline .mat-form-field-outline-start{background-color:#fff}.save-btn-mobile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.save-btn-mobile[_ngcontent-%COMP%]{margin:20px auto}.dark-mode-mobile[_ngcontent-%COMP%], .save-btn-mobile[_ngcontent-%COMP%]{padding:0!important}@keyframes spinner{to{transform:rotate(1turn)}}.spinner[_ngcontent-%COMP%]:before{content:"";box-sizing:border-box;position:absolute;top:50%;left:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;border-radius:50%;border:2px solid #fff;border-top-color:#000;animation:spinner .8s linear infinite}']}),e})()}];let L=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)},imports:[[a.e.forChild(C)],a.e]}),e})();var W=i("+XFo");let k=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)},imports:[[n.c,L,m.g,u.d,g.c,h.b,W.a,o.i,o.q]]}),e})()}}]);