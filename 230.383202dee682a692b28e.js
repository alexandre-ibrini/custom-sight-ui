"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[230],{5720:(v,l,o)=>{o.d(l,{B:()=>s});var d=o(7238);const s=(0,d.X$)("simpleFadeAnimation",[(0,d.SB)("in",(0,d.oB)({opacity:1})),(0,d.eR)(":enter",[(0,d.oB)({opacity:0}),(0,d.jt)(600)]),(0,d.eR)(":leave",(0,d.jt)(600,(0,d.oB)({opacity:0})))])},4230:(v,l,o)=>{o.r(l),o.d(l,{AuthenticationModule:()=>Q});var d=o(8583),s=o(5987),x=o(1196),y=o(2972),b=o(9021),w=o(8206),a=o(7716),A=o(3931),g=o(3065),F=o(7195),P=o(4191),c=o(5618),I=o(249),i=o(3679),u=o(5720),T=o(7603),m=o(8295),p=o(9983),f=o(1095);let h=(()=>{class t{constructor(e,r){this.fb=e,this.store=r,this.authGroup=this.fb.group({Username:new i.NI("",i.kI.required),Password:new i.NI("",i.kI.required)})}ngOnInit(){}login(){this.authGroup.valid&&this.store.dispatch((0,T.F)({loginRequest:{username:this.authGroup.get("Username").value,password:this.authGroup.get("Password").value}}))}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(i.qu),a.Y36(g.yh))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-login-view"]],decls:12,vars:1,consts:[["fxLayout","column",1,"login",2,"width","100%",3,"formGroup"],["appearance","outline","color","accent"],["matInput","","type","text","placeholder","Username","formControlName","Username"],["matInput","","type","password","placeholder","Password","formControlName","Password"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","30px"],["fxFlexFill","","mat-flat-button","","color","accent",3,"click"]],template:function(e,r){1&e&&(a.TgZ(0,"form",0),a.TgZ(1,"mat-form-field",1),a.TgZ(2,"mat-label"),a._uU(3," Username"),a.qZA(),a._UZ(4,"input",2),a.qZA(),a.TgZ(5,"mat-form-field",1),a.TgZ(6,"mat-label"),a._uU(7," Password"),a.qZA(),a._UZ(8,"input",3),a.qZA(),a.TgZ(9,"div",4),a.TgZ(10,"button",5),a.NdJ("click",function(){return r.authGroup.valid?r.login():null}),a._uU(11,"Sign in"),a.qZA(),a.qZA(),a.qZA()),2&e&&a.Q6J("formGroup",r.authGroup)},directives:[i._Y,i.JL,c.xw,i.sg,m.KE,m.hX,p.Nt,i.Fj,i.JJ,i.u,c.Wh,c.SQ,f.lW,c.s9],styles:[".login[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent}.login[_ngcontent-%COMP%]  .mat-form-field-outline{background:#EDF2F7!important}.login[_ngcontent-%COMP%]  .mat-form-field-ripple{background:#EDF2F7!important}.login[_ngcontent-%COMP%]  .mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#6e6af4}.login[_ngcontent-%COMP%]  .mat-form-field-label{color:#425466}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill:focus{background-color:#edf2f7!important;-webkit-box-shadow:0 0 0px 1000px #EDF2F7 inset}.get-started-text[_ngcontent-%COMP%]{font-size:14px}@media only screen and (max-width: 599px){.get-started-text[_ngcontent-%COMP%]{font-size:10px}}"],data:{animation:[u.B]}}),t})();function D(t,n){if(1&t&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&t){const e=a.oxw();a.xp6(1),a.Oqu("'"+e.robotName+"'")}}const L=function(){return{"check-icon-success":!0}};let O=(()=>{class t{constructor(e,r,C,Y){this.authGuardService=e,this.router=r,this.store=C,this.websocketService=Y,this.subscriptions=[]}ngOnInit(){this.websocketService.canSendData.next(!0),this.subscriptions.push(this.store.select(y.ie).subscribe(e=>{this.robotName=e})),this.store.dispatch((0,x.M)()),this.store.dispatch((0,w.e)()),this.authGuardService.isLoggedIn()&&this.router.navigateByUrl("app/system-status").then(()=>{})}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}checkIfMobile(){return b.b.checkIfMobile()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(A.P),a.Y36(s.F0),a.Y36(g.yh),a.Y36(F.i))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-landing-page"]],decls:11,vars:5,consts:[[2,"height","100vh","width","100vw","background","#F3F3F3"],[3,"isLandingPage","mobileView"],["fxLayoutAlign","center center","fxLayout","row"],["fxFlex","30","fxFlex.lt-xl","40","fxFlex.lt-lg","60","fxFlex.lt-md","80","fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px",1,"page-content"],["fxFlex","40","fxFlex.sm","100","fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","10px"],[1,"check-icon","bi","bi-check-circle-fill",3,"ngClass"],[1,"title"],[4,"ngIf"],["fxFlex","","fxLayoutAlign","center start",2,"width","100%"],[2,"width","100%"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a._UZ(1,"app-nav-bar",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a._UZ(5,"i",5),a.TgZ(6,"span",6),a._uU(7,"Connected to iw.hub "),a.YNc(8,D,2,1,"span",7),a.qZA(),a.qZA(),a.TgZ(9,"div",8),a._UZ(10,"app-login-view",9),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(1),a.Q6J("isLandingPage",!0)("mobileView",r.checkIfMobile()),a.xp6(4),a.Q6J("ngClass",a.DdM(4,L)),a.xp6(3),a.Q6J("ngIf",r.robotName))},directives:[P.w,c.Wh,c.xw,c.yH,c.SQ,d.mk,I.oO,d.O5,h],styles:[".welcome-page-background[_ngcontent-%COMP%]{display:block;width:300px;height:auto}.check-icon[_ngcontent-%COMP%]{font-size:46px;width:46px;height:46px}.check-icon-success[_ngcontent-%COMP%]{color:#00ff8b}.title[_ngcontent-%COMP%]{font-size:40px;font-weight:600;white-space:normal;line-height:1;text-align:center}@media only screen and (max-width: 599px){.title[_ngcontent-%COMP%]{font-size:24px}}.page-content[_ngcontent-%COMP%]{height:calc(100vh - 96px);padding:64px}"]}),t})();var Z=o(2029);const S=[{path:"auth",component:O,data:{animation:"LandingPageAnimation"},children:[{path:"sign-in",component:h},{path:"forgot-password",component:(()=>{class t{constructor(e){this.authService=e,this.isSubmitLoading=!1,this.forgotPasswordForm=new i.cw({email:new i.NI("",[i.kI.email,i.kI.required])})}ngOnInit(){}forgotPasswordSubmit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(Z.e))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-forgot-password-view"]],decls:0,vars:0,template:function(e,r){},styles:["#login[_ngcontent-%COMP%]{border-left:#0a97d9 solid}#title[_ngcontent-%COMP%], .hover-subtitle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#0a97d9}.screen-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:100}.login-spinner[_ngcontent-%COMP%]{position:fixed;top:35%;left:48%}"],data:{animation:[u.B]}}),t})()}]},{path:"**",redirectTo:"/auth/sign-in",pathMatch:"full",data:{animation:"LandingPageAnimation"}}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(S)],s.Bz]}),t})();var k=o(8370),B=o(5566),M=(o(6237),o(2458));let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[M.BQ],M.BQ]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[],imports:[[d.ez,G,k.AppshellModule,B.o9,j,m.lN,p.c,i.UX,f.ot,i.u5]]}),t})()}}]);