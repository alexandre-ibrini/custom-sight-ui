"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[328],{8328:(R,M,_)=>{_.d(M,{Q:()=>tt});var a=_(2789),T=_(9692),Z=_(9055),E=_(6930),O=_(9083),v=_(7238);const N=(0,v.X$)("detailExpand",[(0,v.SB)("collapsed",(0,v.oB)({height:"0px",minHeight:"0"})),(0,v.SB)("expanded",(0,v.oB)({height:"*"})),(0,v.eR)("expanded <=> collapsed",(0,v.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))]);var t=_(7716),P=_(3065),D=_(5592),b=_(8583),w=_(5618),I=_(1095),y=_(1436),A=_(249),Q=_(3398);function B(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"div",11),t.TgZ(1,"button",12),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).downloadAll()}),t._uU(2,"Download All"),t.qZA(),t.qZA()}}function U(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"div",11),t.TgZ(1,"button",12),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).AddUser()}),t._uU(2,"Add User"),t.qZA(),t.qZA()}}function J(i,p){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const n=t.oxw(2).$implicit;t.xp6(1),t.Oqu(n.name)}}function L(i,p){if(1&i&&(t.TgZ(0,"th",16),t.YNc(1,J,2,1,"span",7),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf","payload"!==n.id&&"userData"!==n.id)}}const S=function(i){return[i]};function u(i,p){if(1&i&&(t.ynx(0),t._UZ(1,"i",18),t.BQk()),2&i){const n=t.oxw().$implicit,d=t.oxw(3);t.xp6(1),t.Q6J("ngClass",t.VKq(1,S,d.expandedElement===n?"bi-chevron-contract":"bi-chevron-expand"))}}function h(i,p){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",12),t.NdJ("click",function(){t.CHM(n);const g=t.oxw().$implicit;return t.oxw(3).download(g.name)}),t._uU(2,"Download"),t.qZA(),t.BQk()}}function e(i,p){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",12),t.NdJ("click",function(){t.CHM(n);const g=t.oxw().$implicit,f=t.oxw().$implicit,x=t.oxw(2);return null==x.buttonTriggers[f.id]?null:x.buttonTriggers[f.id].trigger(g.id)}),t._uU(2),t.qZA(),t.BQk()}if(2&i){const n=t.oxw(2).$implicit,d=t.oxw(2);t.xp6(2),t.Oqu(null==d.buttonTriggers[n.id]?null:d.buttonTriggers[n.id].buttonName)}}const o=function(i,p){return{color:i,"background-color":p}};function l(i,p){if(1&i&&(t.ynx(0),t.TgZ(1,"span",19),t._uU(2),t.qZA(),t.BQk()),2&i){const n=t.oxw().$implicit,d=t.oxw().$implicit;t.xp6(1),t.Q6J("ngStyle",t.WLB(2,o,d.badge.badgeColorRule(n[d.id]),d.badge.badgeBackgroundColorRule(n[d.id]))),t.xp6(1),t.hij(" ",d.badge.badgeValueRule(n[d.id])," ")}}const s=function(i){return{"font-weight":i}};function r(i,p){if(1&i&&(t.ynx(0),t.TgZ(1,"span",20),t._uU(2),t.qZA(),t.BQk()),2&i){const n=t.oxw().$implicit,d=t.oxw().$implicit;t.xp6(1),t.Q6J("ngStyle",t.VKq(2,s,d.bold?"bold":null)),t.xp6(1),t.hij(" ",n[d.id]," ")}}function c(i,p){if(1&i&&(t.TgZ(0,"td",17),t.YNc(1,u,2,3,"ng-container",7),t.YNc(2,h,3,0,"ng-container",7),t.YNc(3,e,3,1,"ng-container",7),t.YNc(4,l,3,5,"ng-container",7),t.YNc(5,r,3,4,"ng-container",7),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf","expand"===n.id),t.xp6(1),t.Q6J("ngIf",n.button&&"download"===n.id),t.xp6(1),t.Q6J("ngIf",n.button&&"download"!==n.id),t.xp6(1),t.Q6J("ngIf",n.badge&&!0===n.badge.badgeCell&&!n.button&&"payload"!==n.id&&"userData"!==n.id),t.xp6(1),t.Q6J("ngIf",(!n.badge||n.badge&&!1===n.badge.badgeCell)&&!n.button&&"payload"!==n.id&&"userData"!==n.id)}}function m(i,p){1&i&&(t.ynx(0,13),t.YNc(1,L,2,1,"th",14),t.YNc(2,c,6,5,"td",15),t.BQk()),2&i&&t.Q6J("matColumnDef",p.$implicit.id)}function C(i,p){1&i&&(t.TgZ(0,"div",26),t.TgZ(1,"span"),t._uU(2,"Payload Empty!"),t.qZA(),t.qZA())}function F(i,p){1&i&&(t.TgZ(0,"div",26),t.TgZ(1,"span"),t._uU(2,"User Data Empty!"),t.qZA(),t.qZA())}function Y(i,p){if(1&i&&(t.TgZ(0,"div"),t.TgZ(1,"div",22),t.TgZ(2,"div",23),t.TgZ(3,"span"),t._uU(4,"Payload"),t.qZA(),t._UZ(5,"app-nested-tree",24),t.YNc(6,C,3,0,"div",25),t.qZA(),t.TgZ(7,"div",23),t.TgZ(8,"span"),t._uU(9,"UserData"),t.qZA(),t._UZ(10,"app-nested-tree",24),t.YNc(11,F,3,0,"div",25),t.qZA(),t.qZA(),t.qZA()),2&i){const n=t.oxw().$implicit,d=t.oxw(3);let g,f,x,V;t.Q6J("@detailExpand",n==d.expandedElement?"expanded":"collapsed"),t.xp6(5),t.Q6J("data",null==(g=d.getColumnById("payload"))||null==g.badge?null:g.badge.badgeValueRule(n.payload))("areValuesEditable",!1),t.xp6(1),t.Q6J("ngIf",(null==(f=d.getColumnById("payload"))||null==f.badge?null:f.badge.badgeValueRule(n.payload).length)<=0),t.xp6(4),t.Q6J("data",null==(x=d.getColumnById("userData"))||null==x.badge?null:x.badge.badgeValueRule(n.userData))("areValuesEditable",!1),t.xp6(1),t.Q6J("ngIf",(null==(V=d.getColumnById("userData"))||null==V.badge?null:V.badge.badgeValueRule(n.userData).length)<=0)}}function K(i,p){if(1&i&&(t.TgZ(0,"td",17),t.YNc(1,Y,12,7,"div",7),t.qZA()),2&i){const n=p.$implicit,d=t.oxw(3);t.uIk("colspan",d.displayedColumns.length),t.xp6(1),t.Q6J("ngIf",n===d.expandedElement)}}function q(i,p){1&i&&(t.ynx(0),t.ynx(1,21),t.YNc(2,K,2,2,"td",15),t.BQk(),t.BQk())}function W(i,p){1&i&&t._UZ(0,"tr",27)}const $=function(i){return{cursor:i}};function z(i,p){if(1&i){const n=t.EpF();t.TgZ(0,"tr",28),t.NdJ("click",function(){const f=t.CHM(n).$implicit,x=t.oxw(2);return x.expandedElement=x.expandedElement===f?null:f,x.rowClicked(f)}),t.qZA()}if(2&i){const n=t.oxw(2);t.Q6J("matTooltip",n.areColumnsExpandable?"Click to expand":null)("ngStyle",t.VKq(2,$,n.areColumnsExpandable?"pointer":"default"))}}function k(i,p){1&i&&t._UZ(0,"tr",30)}const H=function(){return["expandedDetail"]};function G(i,p){1&i&&(t.ynx(0),t.YNc(1,k,1,0,"tr",29),t.BQk()),2&i&&(t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(1,H)))}const X=function(){return[5,10,20]};function j(i,p){if(1&i&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.YNc(5,B,3,0,"div",4),t.YNc(6,U,3,0,"div",4),t.qZA(),t.qZA(),t.TgZ(7,"div"),t.TgZ(8,"table",5),t.YNc(9,m,3,1,"ng-container",6),t.YNc(10,q,3,0,"ng-container",7),t.YNc(11,W,1,0,"tr",8),t.YNc(12,z,1,4,"tr",9),t.YNc(13,G,2,2,"ng-container",7),t.qZA(),t._UZ(14,"mat-paginator",10),t.qZA(),t.qZA()),2&i){const n=t.oxw();t.xp6(4),t.hij(" ",n.title,""),t.xp6(1),t.Q6J("ngIf",n.showDownloadAllButton),t.xp6(1),t.Q6J("ngIf",n.showAddUserButton),t.xp6(2),t.Q6J("dataSource",n.dataSource)("multiTemplateDataRows",n.areColumnsExpandable),t.xp6(1),t.Q6J("ngForOf",n.columns),t.xp6(1),t.Q6J("ngIf",n.areColumnsExpandable),t.xp6(1),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",n.areColumnsExpandable),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(11,X))}}let tt=(()=>{class i{constructor(n,d){this.store=n,this.editUserDialogService=d,this.ELEMENT_DATA=[],this.showDownloadAllButton=!1,this.showAddUserButton=!1,this.areColumnsExpandable=!1,this.namePrefix="system_logs/"}ngOnInit(){this.dataSource=new a.by(this.ELEMENT_DATA),this.displayedColumns=this.columns.map(n=>n.id)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}setTableData(n){(0,O.diff)(n,this.dataSource.data)&&(this.dataSource=new a.by(n),this.dataSource.paginator=this.paginator)}download(n){const d=[];d.push(this.namePrefix+n),this.store.dispatch((0,Z.L)({getCompressedFilesNames:d}))}downloadAll(){var n,d;const g=null===(d=null===(n=this.dataSource)||void 0===n?void 0:n.data)||void 0===d?void 0:d.map(f=>this.namePrefix+f.name);this.store.dispatch((0,Z.L)({getCompressedFilesNames:g}))}AddUser(){this.editUserDialogService.openDialog(null,!1,n=>{this.store.dispatch((0,E.y)({addUserRequest:n}))})}getColumnById(n){return this.columns.find(d=>d.id===n)}rowClicked(n){}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(P.yh),t.Y36(D.i))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-data-table"]],viewQuery:function(n,d){if(1&n&&t.Gf(T.NW,5),2&n){let g;t.iGM(g=t.CRH())&&(d.paginator=g.first)}},inputs:{ELEMENT_DATA:"ELEMENT_DATA",columns:"columns",title:"title",showDownloadAllButton:"showDownloadAllButton",buttonTriggers:"buttonTriggers",showAddUserButton:"showAddUserButton",areColumnsExpandable:"areColumnsExpandable"},decls:1,vars:1,consts:[["class","data-table","style","border-radius: 16px;\n                              background-color: #FFFFFF;\n                              box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05); width: 100%;",4,"ngIf"],[1,"data-table",2,"border-radius","16px","background-color","#FFFFFF","box-shadow","0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)","width","100%"],[2,"height","56px","line-height","56px","padding","0 24px 0 24px","font-size","14px"],["fxLayout","row","fxLayoutAlign","space-between"],["fxLayoutAlign","center center",4,"ngIf"],["mat-table","",2,"width","100%",3,"dataSource","multiTemplateDataRows"],[3,"matColumnDef",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"matTooltip","ngStyle","click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",2,"position","relative",3,"pageSizeOptions"],["fxLayoutAlign","center center"],["mat-stroked-button","",2,"margin-right","10px","margin-left","auto","display","block","font-size","11px","font-weight","bold","color","#16192C",3,"click"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["matTooltip","Expand to see more info",1,"bi",2,"cursor","pointer",3,"ngClass"],[1,"table-badge",3,"ngStyle"],[3,"ngStyle"],["matColumnDef","expandedDetail"],["fxLayout","row","fxLayoutAlign","space-around center"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","16px",2,"height","100%"],[3,"data","areValuesEditable"],["style","height: 100%",4,"ngIf"],[2,"height","100%"],["mat-header-row",""],["mat-row","",3,"matTooltip","ngStyle","click"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],["mat-row","",1,"example-detail-row"]],template:function(n,d){1&n&&t.YNc(0,j,15,12,"div",0),2&n&&t.Q6J("ngIf",d.dataSource)},directives:[b.O5,w.xw,w.Wh,a.BZ,b.sg,a.as,a.nj,T.NW,I.lW,a.w1,a.fO,a.Dz,a.ge,a.ev,y.gM,b.mk,A.oO,b.PC,A.Zl,w.SQ,Q.U,a.XQ,a.Gk],styles:[".data-table[_ngcontent-%COMP%]{word-break:break-all!important}.data-table[_ngcontent-%COMP%]  .example-detail-row{height:0!important}.data-table[_ngcontent-%COMP%]  .mat-table thead{background-color:#fafafb}.data-table[_ngcontent-%COMP%]  .mat-header-cell{text-transform:uppercase;font-size:11px;font-weight:600;color:#8492a6;border-color:#edf2f7!important;border-top:1px solid #EDF2F7}.data-table[_ngcontent-%COMP%]  tr.mat-header-row{height:56px}.data-table[_ngcontent-%COMP%]  td.mat-cell{color:#425466;font-size:14px;border-color:#edf2f7;min-width:0px!important}.data-table[_ngcontent-%COMP%]  .mat-list-item-content{color:#425466;font-size:14px;min-width:0px!important}.data-table[_ngcontent-%COMP%]  tr.mat-row{height:52px}.data-table[_ngcontent-%COMP%]  .mat-paginator-page-size{margin-left:14px!important;margin-right:auto!important;line-height:56px}.data-table[_ngcontent-%COMP%]  .mat-paginator-range-label{position:absolute;left:225px}.data-table[_ngcontent-%COMP%]  .mat-paginator{border-bottom-left-radius:16px;border-bottom-right-radius:16px;color:#1f2d3d}.data-table[_ngcontent-%COMP%]  .mat-form-field-appearance-legacy .mat-form-field-infix{border:1px solid #EDF2F7;border-radius:4px;box-shadow:1px 1px 2px #32324733}.data-table[_ngcontent-%COMP%]  .mat-paginator-page-size .mat-select-trigger{padding:0 8px;line-height:17px;height:17px}.data-table[_ngcontent-%COMP%]  .mat-select-value-text, .data-table[_ngcontent-%COMP%]  .mat-select-arrow{color:#b5b5bd}.data-table[_ngcontent-%COMP%]  .mat-form-field-appearance-legacy .mat-form-field-underline{display:none}.data-table[_ngcontent-%COMP%]  .mat-paginator-page-size-select{margin-left:28px!important}.data-table[_ngcontent-%COMP%]  .mat-stroked-button{line-height:27px!important}@media screen and (max-width: 479px){.data-table[_ngcontent-%COMP%]  .mat-paginator-range-actions{width:100%}.data-table[_ngcontent-%COMP%]  .mat-paginator-range-label{position:relative;left:auto}}"],data:{animation:[N]}}),i})()},3398:(R,M,_)=>{_.d(M,{U:()=>S});var a=_(7716),T=_(3815),E=_(1295),O=_(6215),v=_(5917),N=_(3190),t=_(4395),P=_(8583),D=_(5618),b=_(1095),w=_(8295),I=_(9983),y=_(3679);const A=["tree"];function Q(u,h){if(1&u){const e=a.EpF();a.TgZ(0,"mat-form-field"),a.TgZ(1,"input",13),a.NdJ("ngModelChange",function(l){a.CHM(e);const s=a.oxw(2).$implicit;return a.oxw(2).ngModelChanged(s,l)}),a.qZA(),a.qZA()}if(2&u){const e=a.oxw(2).$implicit;a.xp6(1),a.Q6J("type",e.data.displayType)("placeholder",e.data.name)("ngModel",e.data.value)}}function B(u,h){if(1&u&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&u){const e=a.oxw(2).$implicit;a.xp6(1),a.Oqu(e.data.value)}}function U(u,h){if(1&u&&(a.TgZ(0,"div",11),a.YNc(1,Q,2,3,"mat-form-field",12),a.YNc(2,B,2,1,"span",12),a.qZA()),2&u){const e=a.oxw(3);a.xp6(1),a.Q6J("ngIf",e.areValuesEditable),a.xp6(1),a.Q6J("ngIf",!e.areValuesEditable)}}function J(u,h){if(1&u&&(a.TgZ(0,"div",9),a.TgZ(1,"span"),a._uU(2),a.qZA(),a.YNc(3,U,3,2,"div",10),a.qZA()),2&u){const e=h.$implicit;a.xp6(2),a.Oqu(e.data.name),a.xp6(1),a.Q6J("ngIf",null!==e.data.value&&(null==e.data||null==e.data.children?null:e.data.children.length)<=0)}}function L(u,h){if(1&u){const e=a.EpF();a.TgZ(0,"div",3),a.TgZ(1,"div",4),a.TgZ(2,"mat-form-field"),a.TgZ(3,"input",5),a.NdJ("ngModelChange",function(l){return a.CHM(e),a.oxw().searchFieldValue=l})("ngModelChange",function(l){return a.CHM(e),a.oxw().setSearchSubjectNext(l)}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"tree-root",6,7),a.YNc(6,J,4,2,"ng-template",null,8,a.W1O),a.qZA(),a.qZA()}if(2&u){const e=a.oxw();a.xp6(3),a.Q6J("ngModel",e.searchFieldValue),a.xp6(1),a.Q6J("nodes",e.dataSource)("options",e.treeOptions)}}let S=(()=>{class u{constructor(){this.data=new a.IIB,this.areValuesEditable=new a.IIB,this.submitPressed=new a.vpe,this.dataSource=new Array,this.hasChild=(e,o)=>!!o.children&&o.children.length>0,this.treeOptions={animateExpand:!0,displayField:"name",allowDragoverStyling:!1,allowDrag:!1,allowDrop:!1,actionMapping:{mouse:{click:E.iM.TOGGLE_EXPANDED}}},this.searchFieldValue="",this.searchSubject=new O.X(null)}setSearchSubjectNext(e){console.log(e),this.searchSubject.next(e)}search(e){var o;console.log(this.tree,e),this.tree.treeModel.filterNodes(l=>l.data.name.includes(e),!1),null===(o=this.tree.treeModel.getVisibleRoots())||void 0===o||o.forEach(l=>{this.setNodesVisibleRecursive(l)})}setNodesVisibleRecursive(e){var o;e.setIsHidden(!1),null===(o=e.children)||void 0===o||o.forEach(l=>{this.setNodesVisibleRecursive(l)})}setData(e){this.data=e,this.dataSource=(0,T.cloneDeep)(e),this.changedValues=!1}ngModelChanged(e,o){e.data.value="number"===e.data.displayType?Number(o):o,this.onValueChange(e)}ngOnInit(){this.dataSource=(0,T.cloneDeep)(this.data),this.searchSubject.pipe((0,N.w)(e=>(0,v.of)(e)),(0,t.b)(300)).subscribe(e=>{null!=e&&this.search(e)})}onValueChange(e){this.changedValues||(this.changedValues={});let o=this.getNodePathsList(e),l=o[o.length-2].isArray,s=l?o[o.length-2].id:null,r=l?Number(o[o.length-1].name):null;this.setNestedKeys(this.changedValues,o,e.data.value,s,r)}setNestedKeys(e,o,l,s,r){s&&r>=0&&o.splice(o.length-1,1),o.forEach((c,m)=>{if(s&&r>=0)m===o.length-1?(e[c.name]||(e[c.name]=this.findArrayValues(s)),e[c.name][r]=l):e[c.name]||(e[c.name]=e[c.name]?e[c.name]:{});else if(m===o.length-1)e[c.name]=l||e[c.name];else if(e[c.name])e[c.name]=e[c.name];else if(c.isArray){e[c.name]=[];let C=this.getMidObjectArrayValues(c.id);e[c.name].push(...C),o[m+1]=Number(o[m+1])}else e[c.name]={};e=e[c.name]})}getMidObjectArrayValues(e){var o;let l=this.getCurrentObjectById(e),s=[];return null===(o=null==l?void 0:l.children)||void 0===o||o.forEach((r,c)=>{var m;s[c]={},null===(m=null==r?void 0:r.children)||void 0===m||m.forEach(C=>{this.getNestedKeysfromDataObject(C,s[c])})}),s}getNestedKeysfromDataObject(e,o){var l;if(e.isArray){let s=[];null===(l=null==e?void 0:e.children)||void 0===l||l.forEach((r,c)=>{var m;r.value?s[c]=r.value:(s[c]={},null===(m=null==r?void 0:r.children)||void 0===m||m.forEach(C=>{this.getNestedKeysfromDataObject(C,s[c])}))}),o||(o={}),o[e.name]=s}else o||(o={}),e.children?e.children.forEach((s,r)=>o[e.name]=this.getNestedKeysfromDataObject(s,o[e.name])):o[e.name]=e.value;return o}getCurrentObjectById(e){var o;let l=e.split("."),s=this.dataSource.find(c=>(null==c?void 0:c.id)===l[0]),r=1;for(;r<l.length;){let c=l.slice(0,r+1).join(".");s=null===(o=null==s?void 0:s.children)||void 0===o?void 0:o.find(m=>(null==m?void 0:m.id)===c),r++}return s}findArrayValues(e){var o;let l=this.getCurrentObjectById(e),s=[];return s=null===(o=null==l?void 0:l.children)||void 0===o?void 0:o.map(r=>null==r?void 0:r.value),s}getObjectNestedPathsList(e){var o,l;let s=[];return s.push([{id:e.id,name:e.name,isArray:e.isArray}]),(null===(o=null==e?void 0:e.children)||void 0===o?void 0:o.length)>0&&(null===(l=null==e?void 0:e.children)||void 0===l||l.forEach((r,c)=>{s.push(this.getObjectNestedPathsList(r))})),s}getNodePathsList(e){var o,l,s;let r=e,c=[];for(;r&&!r.data.virtual;){let m={id:null===(o=r.data)||void 0===o?void 0:o.id,name:null===(l=null==r?void 0:r.data)||void 0===l?void 0:l.name,isArray:null===(s=null==r?void 0:r.data)||void 0===s?void 0:s.isArray};c.splice(0,0,m),r=r.parent}return c}submit(){this.submitPressed.emit(this.changedValues)}reset(){this.dataSource=(0,T.cloneDeep)(this.data),this.changedValues={}}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=a.Xpm({type:u,selectors:[["app-nested-tree"]],viewQuery:function(e,o){if(1&e&&a.Gf(A,5),2&e){let l;a.iGM(l=a.CRH())&&(o.tree=l.first)}},inputs:{data:"data",areValuesEditable:"areValuesEditable"},outputs:{submitPressed:"submitPressed"},decls:4,vars:2,consts:[["style","height:100%; overflow: auto;",4,"ngIf"],["fxLayout","row","fxLayoutGap","16px",1,"submit-button-div"],["mat-flat-button","","color","accent",3,"disabled","click"],[2,"height","100%","overflow","auto"],[1,"search-div"],["matInput","","placeholder","Search","type","text",3,"ngModel","ngModelChange"],[1,"tree",3,"nodes","options"],["tree",""],["treeNodeTemplate",""],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","64px",2,"width","100%"],["fxLayoutGap","16px",4,"ngIf"],["fxLayoutGap","16px"],[4,"ngIf"],["matInput","",3,"type","placeholder","ngModel","ngModelChange"]],template:function(e,o){1&e&&(a.YNc(0,L,8,3,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"button",2),a.NdJ("click",function(){return o.submit()}),a._uU(3,"Submit"),a.qZA(),a.qZA()),2&e&&(a.Q6J("ngIf",(null==o.dataSource?null:o.dataSource.length)>0),a.xp6(2),a.Q6J("disabled",!o.changedValues))},directives:[P.O5,D.xw,D.SQ,b.lW,w.KE,I.Nt,y.Fj,y.JJ,y.On,E.qr,D.Wh],styles:[".submit-button-div[_ngcontent-%COMP%]{position:fixed;bottom:5%;right:5%;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.search-div[_ngcontent-%COMP%]{position:absolute;z-index:100;top:10%;right:5%;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.tree[_ngcontent-%COMP%]  .node-content-wrapper-active, .node-content-wrapper.node-content-wrapper-active[_ngcontent-%COMP%]:hover, .node-content-wrapper-active.node-content-wrapper-focused[_ngcontent-%COMP%]{background:transparent!important}.tree[_ngcontent-%COMP%]  .node-content-wrapper-active, .node-content-wrapper-focused[_ngcontent-%COMP%], .node-content-wrapper[_ngcontent-%COMP%]:hover{box-shadow:none!important}.tree[_ngcontent-%COMP%]::ngdeep   .node-content-wrapper-focused[_ngcontent-%COMP%]{background:transparent!important}"]}),u})()}}]);