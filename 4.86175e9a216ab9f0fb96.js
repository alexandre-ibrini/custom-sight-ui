(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{PN7o:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthenticationModule",function(){return I});var o=n("ofXK"),i=n("tyNb"),a=n("SW+e"),c=n("mDdK"),r=n("kv2i"),s=n("31H9"),l=n("fXoL"),u=n("T1eL"),b=n("l7P3"),p=n("rB/b"),f=n("+dPl"),d=n("XiUz"),h=n("NFeN"),g=n("znSr"),m=n("3Pt+"),x=n("R0Ic");const w=Object(x.m)("simpleFadeAnimation",[Object(x.j)("in",Object(x.k)({opacity:1})),Object(x.l)(":enter",[Object(x.k)({opacity:0}),Object(x.e)(600)]),Object(x.l)(":leave",Object(x.e)(600,Object(x.k)({opacity:0})))]);var v=n("9uKA"),O=n("kmnG"),y=n("qFsG"),P=n("bTqV");let k=(()=>{class t{constructor(t,e){this.fb=t,this.store=e,this.authGroup=this.fb.group({Username:new m.e("",m.r.required),Password:new m.e("",m.r.required)})}ngOnInit(){}login(){this.authGroup.valid&&this.store.dispatch(Object(v.a)({loginRequest:{username:this.authGroup.get("Username").value,password:this.authGroup.get("Password").value}}))}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(m.d),l.Qb(b.h))},t.\u0275cmp=l.Kb({type:t,selectors:[["app-login-view"]],decls:17,vars:1,consts:[["fxLayout","column",2,"width","100%",3,"formGroup"],["appearance","outline","color","accent"],["matInput","","type","text","placeholder","Username","formControlName","Username"],["matInput","","type","password","placeholder","Password","formControlName","Password"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","30px"],["fxFlexFill","","mat-flat-button","","color","accent",3,"click"],["fxLayoutAlign","end end","fxFlexFill",""],[1,"get-started-text"],["href","/"]],template:function(t,e){1&t&&(l.Wb(0,"form",0),l.Wb(1,"mat-form-field",1),l.Wb(2,"mat-label"),l.Ec(3," Username"),l.Vb(),l.Rb(4,"input",2),l.Vb(),l.Wb(5,"mat-form-field",1),l.Wb(6,"mat-label"),l.Ec(7," Password"),l.Vb(),l.Rb(8,"input",3),l.Vb(),l.Wb(9,"div",4),l.Wb(10,"button",5),l.ec("click",function(){return e.authGroup.valid?e.login():null}),l.Ec(11,"Sign in"),l.Vb(),l.Wb(12,"div",6),l.Wb(13,"span",7),l.Ec(14,"Don\u2019t have an account? "),l.Wb(15,"a",8),l.Ec(16,"Get started"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&t&&l.nc("formGroup",e.authGroup)},directives:[m.s,m.n,d.d,m.h,O.b,O.e,y.b,m.c,m.m,m.f,d.c,d.e,P.a,d.f],styles:[".mat-form-field-appearance-outline .mat-form-field-outline{color:transparent} .mat-form-field-outline,  .mat-form-field-ripple{background:#edf2f7!important} .mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#6e6af4} .mat-form-field-label{color:#425466}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover{background-color:#edf2f7!important;-webkit-box-shadow:0 0 0 1000px #edf2f7 inset}.get-started-text[_ngcontent-%COMP%]{font-size:14px}@media only screen and (max-width:599px){.get-started-text[_ngcontent-%COMP%]{font-size:10px}}"],data:{animation:[w]}}),t})();function M(t,e){if(1&t&&(l.Wb(0,"span"),l.Ec(1),l.Vb()),2&t){const t=l.ic();l.Eb(1),l.Fc("'"+t.robotName+"'")}}const C=function(){return{"check-icon-success":!0}};let _=(()=>{class t{constructor(t,e,n,o){this.authGuardService=t,this.router=e,this.store=n,this.websocketService=o,this.subscriptions=[]}ngOnInit(){this.websocketService.canSendData.next(!0),this.subscriptions.push(this.store.select(c.b).subscribe(t=>{this.robotName=t})),this.store.dispatch(Object(a.a)()),this.store.dispatch(Object(s.a)()),this.authGuardService.isLoggedIn()&&this.router.navigateByUrl("app/system-status").then()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}checkIfMobile(){return r.a.checkIfMobile()}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(u.a),l.Qb(i.b),l.Qb(b.h),l.Qb(p.a))},t.\u0275cmp=l.Kb({type:t,selectors:[["app-landing-page"]],decls:12,vars:5,consts:[[2,"height","100vh","width","100vw","background","#F3F3F3"],[3,"isLandingPage","mobileView"],["fxLayoutAlign","center center","fxLayout","row"],["fxFlex","30","fxFlex.lt-xl","40","fxFlex.lt-lg","60","fxFlex.lt-md","80","fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px",1,"page-content"],["fxFlex","40","fxFlex.sm","100","fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px"],[1,"check-icon",3,"ngClass"],[1,"title"],[4,"ngIf"],["fxFlex","","fxLayoutAlign","center start",2,"width","100%"],[2,"width","100%"]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Rb(1,"app-nav-bar",1),l.Wb(2,"div",2),l.Wb(3,"div",3),l.Wb(4,"div",4),l.Wb(5,"mat-icon",5),l.Ec(6," check_circle"),l.Vb(),l.Wb(7,"span",6),l.Ec(8,"Connected to iw.hub "),l.Dc(9,M,2,1,"span",7),l.Vb(),l.Vb(),l.Wb(10,"div",8),l.Rb(11,"app-login-view",9),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&t&&(l.Eb(1),l.nc("isLandingPage",!0)("mobileView",e.checkIfMobile()),l.Eb(4),l.nc("ngClass",l.oc(4,C)),l.Eb(4),l.nc("ngIf",e.robotName))},directives:[f.a,d.c,d.d,d.b,d.e,h.a,o.j,g.a,o.l,k],styles:[".welcome-page-background[_ngcontent-%COMP%]{display:block;width:300px;height:auto}.check-icon[_ngcontent-%COMP%]{font-size:46px;width:46px;height:46px}.check-icon-success[_ngcontent-%COMP%]{color:#00ff8b}.title[_ngcontent-%COMP%]{font-size:40px;font-weight:600;white-space:normal;line-height:1;text-align:center}@media only screen and (max-width:599px){.title[_ngcontent-%COMP%]{font-size:24px}}.page-content[_ngcontent-%COMP%]{height:calc(100vh - 96px);padding:64px}"]}),t})();var L=n("20Dw");const F=[{path:"auth",component:_,data:{animation:"LandingPageAnimation"},children:[{path:"sign-in",component:k},{path:"forgot-password",component:(()=>{class t{constructor(t){this.authService=t,this.isSubmitLoading=!1,this.forgotPasswordForm=new m.g({email:new m.e("",[m.r.email,m.r.required])})}ngOnInit(){}forgotPasswordSubmit(){}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(L.a))},t.\u0275cmp=l.Kb({type:t,selectors:[["app-forgot-password-view"]],decls:0,vars:0,template:function(t,e){},styles:["#login[_ngcontent-%COMP%]{border-left:solid #0a97d9}#title[_ngcontent-%COMP%], .hover-subtitle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#0a97d9}.screen-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:100}.login-spinner[_ngcontent-%COMP%]{position:fixed;top:35%;left:48%}"],data:{animation:[w]}}),t})()}]},{path:"**",redirectTo:"/auth/sign-in",pathMatch:"full",data:{animation:"LandingPageAnimation"}}];let V=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(F)],i.e]}),t})();var W=n("5Moz"),j=n("YUcS"),G=(n("R1ws"),n("FKr1"));let E=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(e){return new(e||t)},imports:[[G.i],G.i]}),t})();var A=n("+XFo");let I=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(e){return new(e||t)},providers:[],imports:[[o.c,V,W.AppshellModule,j.a,E,O.d,y.c,m.q,P.b,A.a]]}),t})()}}]);