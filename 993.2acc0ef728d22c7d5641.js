"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[993],{7993:(F,d,i)=>{i.r(d),i.d(d,{VersioningModule:()=>O});var m=i(5987),g=i(9021),h=i(8612),v=i(3815),n=i(7716),b=i(3065),C=i(1327),p=i(5618),y=i(8583),u=i(8328);const c=JSON.parse('{"A":{"_q":"v1.3.7","JP":"","_p":"8a114055b0b880fa87c256446b4e62ba0253146a"}}');let A=(()=>{class e{constructor(){this.columns=[{id:"name",name:"Name",bold:!0},{id:"info",name:"Info",badge:{badgeCell:!0,badgeColorRule:t=>"#425466",badgeValueRule:t=>t,badgeBackgroundColorRule:t=>"transparent"}}],this.tableData=[{position:1,name:"Product",info:"IdealApp - Brain"},{position:2,name:"Company",info:"BMW - IdealWorks"},{position:3,name:"Tag",info:c.A._q},{position:4,name:"SHA",info:c.A._p},{position:5,name:"Status",info:""===c.A.JP?"Clean":"Modified"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-system-info"]],decls:3,vars:2,consts:[[1,"system-info"],[2,"width","100%"],["title","Front-End versions",3,"columns","ELEMENT_DATA"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"app-data-table",2),n.qZA(),n.qZA()),2&t&&(n.xp6(2),n.Q6J("columns",o.columns)("ELEMENT_DATA",o.tableData))},directives:[u.Q],styles:[".system-info[_ngcontent-%COMP%]  .mat-tab-body-wrapper{height:100%}"]}),e})();var B=i(4244);const M=["table"];function T(e,a){if(1&e&&(n.ynx(0),n._UZ(1,"app-notification-bar",6),n.BQk()),2&e){const t=a.$implicit;n.xp6(1),n.Q6J("notificationBar",t)}}const D=[{path:"",component:(()=>{class e{constructor(t,o,s){this.store=t,this.notificationBarMiddleware=o,this.changeDetector=s,this.subscriptions=[],this.columns=[{id:"name",name:"Name"},{id:"info",name:"Info",badge:{badgeCell:!0,badgeColorRule:r=>"#425466",badgeValueRule:r=>r,badgeBackgroundColorRule:r=>"transparent"}}],this.notificationBars=[],this.tableData=[],this.treeOptions=[{id:0,name:"Reported properties",active:!0,trigger(){}},{id:1,name:"Desired properties",active:!1,trigger(){}},{id:2,name:"Managed properties",active:!1,trigger(){}},{id:3,name:"Raw",active:!1,trigger(){}}]}ngOnInit(){}ngAfterContentChecked(){this.subscriptions.push(this.notificationBarMiddleware.notificationBars.subscribe(t=>{this.notificationBars=t}),this.store.select(h.T4).subscribe(t=>{var o;if(t){let s=(0,v.cloneDeep)(this.tableData),r=1;null===(o=Object.keys(t))||void 0===o||o.forEach(l=>{if("__type_name"!==l){const f=s.findIndex(Z=>Z.name===l);-1===f?(s.push({position:r,name:l,info:t[l]}),r++):s[f].info=t[l]}}),this.table&&(this.table.setTableData(s),this.tableData=s)}})),this.changeDetector.detectChanges()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}selectOption(t){this.treeOptions.forEach(o=>{o.active=this.treeOptions.indexOf(o)===t})}checkIfMobile(){return g.b.checkIfMobile()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(b.yh),n.Y36(C.Y),n.Y36(n.sBO))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-versioning"]],viewQuery:function(t,o){if(1&t&&n.Gf(M,5),2&t){let s;n.iGM(s=n.CRH())&&(o.table=s.first)}},decls:7,vars:3,consts:[[2,"overflow-y","auto","background-color","#F7FAFC","height","100%"],["fxLayout","column",2,"width","100%"],[4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutGap","16px",1,"outer-div-padding",2,"height","100%","min-height","100%"],["title","Back-End versions",3,"columns","ELEMENT_DATA"],["table",""],[2,"width","100%",3,"notificationBar"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.YNc(2,T,2,1,"ng-container",2),n.qZA(),n.TgZ(3,"div",3),n._UZ(4,"app-data-table",4,5),n._UZ(6,"app-system-info"),n.qZA(),n.qZA()),2&t&&(n.xp6(2),n.Q6J("ngForOf",o.notificationBars),n.xp6(2),n.Q6J("columns",o.columns)("ELEMENT_DATA",o.tableData))},directives:[p.xw,y.sg,p.SQ,u.Q,A,B.F],styles:[""]}),e})(),data:{animation:"LandingPageAnimation"}},{path:"**",redirectTo:""}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[m.Bz.forChild(D)],m.Bz]}),e})();var V=i(2168);let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[V.L,E]]}),e})()}}]);