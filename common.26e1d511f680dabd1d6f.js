"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[592],{1802:(O,w,i)=>{i.d(w,{Q:()=>F});var n=i(2789),v=i(9692),f=i(9055),x=i(6930),t=i(7716),M=i(3065),A=i(5592),d=i(8583),g=i(5618),_=i(1095),s=i(249);function h(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).downloadAll()}),t._uU(2,"Download All"),t.qZA(),t.qZA()}}function b(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).AddUser()}),t._uU(2,"Add User"),t.qZA(),t.qZA()}}function T(o,c){if(1&o&&(t.TgZ(0,"th",15),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function r(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit;return t.oxw(3).download(u.name)}),t._uU(2,"Download"),t.qZA(),t.BQk()}}function m(o,c){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",11),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit,E=t.oxw().$implicit,P=t.oxw(2);return null==P.buttonTriggers[E.id]?null:P.buttonTriggers[E.id].trigger(u.id)}),t._uU(2),t.qZA(),t.BQk()}if(2&o){const e=t.oxw(2).$implicit,a=t.oxw(2);t.xp6(2),t.Oqu(null==a.buttonTriggers[e.id]?null:a.buttonTriggers[e.id].buttonName)}}const l=function(o,c){return{color:o,"background-color":c}};function p(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit,a=t.oxw().$implicit;t.xp6(1),t.Q6J("ngStyle",t.WLB(2,l,a.badge.badgeColorRule(e[a.id]),a.badge.badgeBackgroundColorRule(e[a.id]))),t.xp6(1),t.hij(" ",a.badge.badgeValueRule(e[a.id])," ")}}const C=function(o){return{"font-weight":o}};function D(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"span",19),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit,a=t.oxw().$implicit;t.xp6(1),t.Q6J("ngStyle",t.VKq(2,C,a.bold?"bold":null)),t.xp6(1),t.hij(" ",e[a.id]," ")}}function Z(o,c){if(1&o&&(t.TgZ(0,"td",16),t.YNc(1,r,3,0,"ng-container",17),t.YNc(2,m,3,1,"ng-container",17),t.YNc(3,p,3,5,"ng-container",17),t.YNc(4,D,3,4,"ng-container",17),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.button&&"download"===e.id),t.xp6(1),t.Q6J("ngIf",e.button&&"download"!==e.id),t.xp6(1),t.Q6J("ngIf",e.badge&&!0===e.badge.badgeCell&&!e.button),t.xp6(1),t.Q6J("ngIf",(!e.badge||e.badge&&!1===e.badge.badgeCell)&&!e.button)}}function y(o,c){1&o&&(t.ynx(0,12),t.YNc(1,T,2,1,"th",13),t.YNc(2,Z,5,4,"td",14),t.BQk()),2&o&&t.Q6J("matColumnDef",c.$implicit.id)}function U(o,c){1&o&&t._UZ(0,"tr",20)}function I(o,c){1&o&&t._UZ(0,"tr",21)}const L=function(){return[5,10,20]};function B(o,c){if(1&o&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.YNc(5,h,3,0,"div",4),t.YNc(6,b,3,0,"div",4),t.qZA(),t.qZA(),t.TgZ(7,"div"),t.TgZ(8,"table",5),t.YNc(9,y,3,1,"ng-container",6),t.YNc(10,U,1,0,"tr",7),t.YNc(11,I,1,0,"tr",8),t.qZA(),t._UZ(12,"mat-paginator",9),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.hij(" ",e.title,""),t.xp6(1),t.Q6J("ngIf",e.showDownloadAllButton),t.xp6(1),t.Q6J("ngIf",e.showAddUserButton),t.xp6(2),t.Q6J("dataSource",e.dataSource),t.xp6(1),t.Q6J("ngForOf",e.columns),t.xp6(1),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,L))}}let F=(()=>{class o{constructor(e,a){this.store=e,this.editUserDialogService=a,this.ELEMENT_DATA=[],this.showDownloadAllButton=!1,this.showAddUserButton=!1,this.dataSource=new n.by(this.ELEMENT_DATA),this.namePrefix="system_logs/"}ngOnInit(){this.dataSource=new n.by(this.ELEMENT_DATA),this.displayedColumns=this.columns.map(e=>e.id)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}setTableData(e){this.dataSource=new n.by(e),this.dataSource.paginator=this.paginator}download(e){const a=[];a.push(this.namePrefix+e),this.store.dispatch((0,f.L)({getCompressedFilesNames:a}))}downloadAll(){var e,a;const u=null===(a=null===(e=this.dataSource)||void 0===e?void 0:e.data)||void 0===a?void 0:a.map(E=>this.namePrefix+E.name);this.store.dispatch((0,f.L)({getCompressedFilesNames:u}))}AddUser(){this.editUserDialogService.openDialog(null,!1,e=>{this.store.dispatch((0,x.y)({addUserRequest:e}))})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(M.yh),t.Y36(A.i))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-data-table"]],viewQuery:function(e,a){if(1&e&&t.Gf(v.NW,5),2&e){let u;t.iGM(u=t.CRH())&&(a.paginator=u.first)}},inputs:{ELEMENT_DATA:"ELEMENT_DATA",columns:"columns",title:"title",showDownloadAllButton:"showDownloadAllButton",buttonTriggers:"buttonTriggers",showAddUserButton:"showAddUserButton"},decls:1,vars:1,consts:[["class","data-table","style","border-radius: 16px;\n                              background-color: #FFFFFF;\n                              box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05); width: 100%;",4,"ngIf"],[1,"data-table",2,"border-radius","16px","background-color","#FFFFFF","box-shadow","0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)","width","100%"],[2,"height","56px","line-height","56px","padding","0 24px 0 24px","font-size","14px"],["fxLayout","row","fxLayoutAlign","space-between"],["fxLayoutAlign","center center",4,"ngIf"],["mat-table","",2,"width","100%",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",2,"position","relative",3,"pageSizeOptions"],["fxLayoutAlign","center center"],["mat-stroked-button","",2,"margin-right","10px","margin-left","auto","display","block","font-size","11px","font-weight","bold","color","#16192C",3,"click"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],[1,"table-badge",3,"ngStyle"],[3,"ngStyle"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&t.YNc(0,B,13,9,"div",0),2&e&&t.Q6J("ngIf",a.dataSource)},directives:[d.O5,g.xw,g.Wh,n.BZ,d.sg,n.as,n.nj,v.NW,_.lW,n.w1,n.fO,n.Dz,n.ge,n.ev,d.PC,s.Zl,n.XQ,n.Gk],styles:[".data-table[_ngcontent-%COMP%]{word-break:break-all!important}.data-table[_ngcontent-%COMP%]  .mat-table thead{background-color:#fafafb}.data-table[_ngcontent-%COMP%]  .mat-header-cell{text-transform:uppercase;font-size:11px;font-weight:600;color:#8492a6;border-color:#edf2f7!important;border-top:1px solid #EDF2F7}.data-table[_ngcontent-%COMP%]  tr.mat-header-row{height:56px}.data-table[_ngcontent-%COMP%]  td.mat-cell{color:#425466;font-size:14px;border-color:#edf2f7;min-width:0px!important}.data-table[_ngcontent-%COMP%]  tr.mat-row{height:52px!important}.data-table[_ngcontent-%COMP%]  .mat-paginator-page-size{margin-left:14px!important;margin-right:auto!important;line-height:56px}.data-table[_ngcontent-%COMP%]  .mat-paginator-range-label{position:absolute;left:225px}.data-table[_ngcontent-%COMP%]  .mat-paginator{border-bottom-left-radius:16px;border-bottom-right-radius:16px;color:#1f2d3d}.data-table[_ngcontent-%COMP%]  .mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #EDF2F7;border-radius:4px;box-shadow:1px 1px 2px #32324733}.data-table[_ngcontent-%COMP%]  .mat-paginator-page-size .mat-select-trigger{padding:0 8px;line-height:17px;height:17px}.data-table[_ngcontent-%COMP%]  .mat-select-value-text, .data-table[_ngcontent-%COMP%]  .mat-select-arrow{color:#b5b5bd}.data-table[_ngcontent-%COMP%]  .mat-form-field-appearance-legacy .mat-form-field-underline{display:none}.data-table[_ngcontent-%COMP%]  .mat-paginator-page-size-select{margin-left:28px!important}.data-table[_ngcontent-%COMP%]  .mat-stroked-button{line-height:27px!important}@media screen and (max-width: 479px){.data-table[_ngcontent-%COMP%]  .mat-paginator-range-actions{width:100%}.data-table[_ngcontent-%COMP%]  .mat-paginator-range-label{position:relative;left:auto}}"]}),o})()},4003:(O,w,i)=>{i.d(w,{U:()=>A});var n=i(7716),v=i(4812),f=i(8583),x=i(5618),t=i(1436);function M(d,g){if(1&d){const _=n.EpF();n.TgZ(0,"i",7),n.NdJ("click",function(){return n.CHM(_),n.oxw().openMoreInfoDialog()}),n.qZA()}}let A=(()=>{class d{constructor(_){this.alertService=_,this.title="Warning!"}openMoreInfoDialog(){this.alertService.openAlert(this.title,"Component : "+this.component,["Description : "+this.description,"Proposed Solution : "+this.proposedSolution],this.event.event.severity)}ngOnInit(){var _,s,h,b,T,r,m;this.event&&(this.title=null===(s=null===(_=this.event)||void 0===_?void 0:_.event)||void 0===s?void 0:s.severity,this.description=null===(b=null===(h=this.event)||void 0===h?void 0:h.event)||void 0===b?void 0:b.description,this.component=null===(T=this.event)||void 0===T?void 0:T.component,this.proposedSolution=null===(m=null===(r=this.event)||void 0===r?void 0:r.event)||void 0===m?void 0:m.proposed_solution)}}return d.\u0275fac=function(_){return new(_||d)(n.Y36(v.Q))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-warning-card"]],inputs:{description:"description",event:"event"},decls:9,vars:3,consts:[["class","bi bi-info-circle-fill","matTooltip","More Info","style","cursor: pointer;",3,"click",4,"ngIf"],["fxLayout","column","fxLayoutGap","18px"],["fxLayoutAlign","center center","fxLayout","column",2,"width","100%"],[1,"bi","bi-asterisk","asterisk-icon"],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","5px"],[2,"font-weight","700","font-size","18px","color","#425466"],[2,"font-weight","400","font-size","12px","color","#425466","text-align","center"],["matTooltip","More Info",1,"bi","bi-info-circle-fill",2,"cursor","pointer",3,"click"]],template:function(_,s){1&_&&(n.YNc(0,M,1,0,"i",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n._UZ(3,"i",3),n.qZA(),n.TgZ(4,"div",4),n.TgZ(5,"span",5),n._uU(6),n.qZA(),n.TgZ(7,"span",6),n._uU(8),n.qZA(),n.qZA(),n.qZA()),2&_&&(n.Q6J("ngIf",s.event),n.xp6(6),n.Oqu(s.title),n.xp6(2),n.Oqu(s.description))},directives:[f.O5,x.xw,x.SQ,x.Wh,t.gM],styles:[".asterisk-icon[_ngcontent-%COMP%]{background:#FFFFFF;font-size:25px;padding:17px;color:#a6b7d4;border-radius:50%}"]}),d})()},5991:(O,w,i)=>{i.d(w,{s:()=>T});var n=i(7716),v=i(3065),f=i(5618),x=i(8583),t=i(249),M=i(5396),A=i(8295),d=i(9983),g=i(3679),_=i(1095);function s(r,m){if(1&r&&(n.TgZ(0,"div"),n.TgZ(1,"span",7),n._uU(2),n.qZA(),n.qZA()),2&r){const l=n.oxw();n.xp6(2),n.Oqu(l.description)}}function h(r,m){if(1&r){const l=n.EpF();n.TgZ(0,"div",8),n.TgZ(1,"mat-form-field",9),n.TgZ(2,"input",10),n.NdJ("ngModelChange",function(C){return n.CHM(l),n.oxw().inputAction.input=C}),n.qZA(),n.qZA(),n.TgZ(3,"div"),n.TgZ(4,"button",11),n.NdJ("click",function(){n.CHM(l);const C=n.oxw();return null==C.inputAction?null:C.inputAction.trigger()}),n._uU(5,"Test"),n.qZA(),n.qZA(),n.qZA()}if(2&r){const l=n.oxw();n.xp6(2),n.Q6J("disabled",l.disabled)("placeholder",l.inputAction.inputPlaceholder)("ngModel",l.inputAction.input),n.xp6(2),n.Q6J("disabled",l.disabled)}}const b=function(r){return{"show-active":r}};let T=(()=>{class r{constructor(l){this.store=l,this.disabled=!1}ngOnInit(){}onSlideChange(l){this.slideAction.trigger(!l.checked)}}return r.\u0275fac=function(l){return new(l||r)(n.Y36(v.yh))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-switch-tile"]],inputs:{title:"title",description:"description",showActive:"showActive",slideText:"slideText",slideAction:"slideAction",inputAction:"inputAction",disabled:"disabled"},decls:9,vars:8,consts:[["fxLayout","column",1,"switch-tile"],["fxLayoutAlign","start center"],[1,"component-title"],[4,"ngIf"],[2,"margin-top","25px",3,"ngClass"],[3,"disabled","change"],["fxLayout","row","style","margin-top: 20px",4,"ngIf"],[1,"component-description",2,"color","#425466"],["fxLayout","row",2,"margin-top","20px"],["fxFlex","","appearance","outline","color","accent",1,"grey-input","manual-action-input",2,"font-size","13px","font-weight","500"],["matInput","",3,"disabled","placeholder","ngModel","ngModelChange"],["mat-flat-button","","color","accent",2,"margin-top","calc(.25em - 1px)","margin-left","12px",3,"disabled","click"]],template:function(l,p){1&l&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"span",2),n._uU(3),n.qZA(),n.qZA(),n.YNc(4,s,3,1,"div",3),n.TgZ(5,"div",4),n.TgZ(6,"mat-slide-toggle",5),n.NdJ("change",function(D){return p.onSlideChange(D)}),n._uU(7),n.qZA(),n.qZA(),n.YNc(8,h,6,4,"div",6),n.qZA()),2&l&&(n.xp6(3),n.Oqu(p.title),n.xp6(1),n.Q6J("ngIf",p.description),n.xp6(1),n.Q6J("ngClass",n.VKq(6,b,p.showActive)),n.xp6(1),n.Q6J("disabled",p.disabled),n.xp6(1),n.Oqu(p.slideText),n.xp6(1),n.Q6J("ngIf",p.inputAction))},directives:[f.xw,f.Wh,x.O5,x.mk,t.oO,M.Rr,A.KE,f.yH,d.Nt,g.Fj,g.JJ,g.On,_.lW],styles:[".switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle-bar{height:23px!important;border-radius:11px!important;width:39px!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle-thumb{height:16px!important;width:16px!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle-thumb-container{top:3px!important;left:3px!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile.mat-slide-toggle-content{font-size:14px}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#6e6af4!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .show-active .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#00ff8b!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .show-active .mat-checked .mat-slide-toggle-content{color:#00ff8b!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline .mat-form-field-infix{padding:6.5px 0}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline.grey-input .mat-form-field-outline{background:#EDF2F7;border-radius:5px}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline .mat-form-field-outline-end, .switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline .mat-form-field-outline-start{border:none!important}@media screen and (max-width: 320px){.manual-action-input[_ngcontent-%COMP%]{width:134px!important}}"]}),r})()}}]);