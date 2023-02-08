"use strict";(self.webpackChunkros_fe_poc=self.webpackChunkros_fe_poc||[]).push([[287],{97287:(at,v,s)=>{s.r(v),s.d(v,{EthercatTabModule:()=>rt});var f=s(38583),x=s(95987),C=s(2938),T=s(19083),L=s(6040),t=s(37716),a=s(23065);const _=(0,a.PH)("[Ethercat] Update Ethercat",(0,a.Ky)()),Z=(0,a.PH)("[Ethercat] Update CRC Count",(0,a.Ky)()),w=(0,a.Lq)({loading:!1,nodes:[],crcCount:0},(0,a.on)(_,(e,n)=>Object.assign(Object.assign({},e),{nodes:n.nodes})),(0,a.on)(Z,(e,n)=>Object.assign(Object.assign({},e),{crcCount:n.crcCount}))),g=(0,a.Tz)({name:"ethercatLogs",reducer:w}),E=(0,a.P1)(g.selectNodes,e=>e),S=(0,a.P1)(g.selectCrcCount,e=>e);class y{static fromSopToCrcCount(n){let c,i=0,o=[];return n.d.forEach(r=>{let u=r;for(;"sop"===u.t;)u=u.d[0];o.push(u)}),c=o[0].l.findIndex(r=>"Count"===r),o.forEach((r,u)=>{"CRC Errors"===r.l[0]&&(i=r.l[c])}),i}static fromSopToEthercatNodes(n){let i=[],o=[],c=!1;n.d.splice(0,1),n.d.splice(4,1);let u=[];n.d.forEach(d=>{let p=d;for(;"sop"===p.t;)p=p.d[0];u.push(p)}),u.forEach((d,p)=>{let b=d.l[3];0!=b&&(c=!0),o=[{title:"Sent",value:d.l[1]},{title:"Received",value:d.l[2]},{title:"Disconnections",value:b}],i.push({title:d.l[0],isFaulty:!1,disconnected:c,description:{success:!0,data:o}})});for(let d=0;d<i.length;d++){let p=i[d-1],h=i[d];0==(null==p?void 0:p.disconnected)&&1==(null==h?void 0:h.disconnected)&&(p.isFaulty=!0)}return i}}var O=s(70992),D=s(93898);let I=(()=>{class e{constructor(i,o,c){this.store=i,this.responseMS=o,this.channelsMS=c,this.responseMS.ethercat.subscribe(r=>{r&&this.receiveEthercatLogs(r)})}get ethercatNodes(){return this.store.select(E)}get ethercatCrcCount(){return this.store.select(S)}receiveEthercatLogs(i){let o=y.fromSopToCrcCount(i),c=y.fromSopToEthercatNodes(i);this.store.dispatch(_({nodes:c})),this.store.dispatch(Z({crcCount:o}))}toggleEthercatChannel(i){this.channelsMS.toggleChannel("Ethercat",i)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(a.yh),t.LFG(O.B),t.LFG(D.$))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var J=s(58011),l=s(77093),m=s(93738);function B(e,n){1&e&&t._UZ(0,"div",8)}function Q(e,n){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span",6),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,B,1,0,"div",7),t.qZA()),2&e){const i=n.$implicit,o=n.last;t.xp6(3),t.hij(" ",i.title," "),t.xp6(2),t.hij(" ",i.value," "),t.xp6(1),t.Q6J("ngIf",!o)}}function q(e,n){if(1&e&&(t.TgZ(0,"div",1),t._UZ(1,"div",2),t.TgZ(2,"div"),t.TgZ(3,"mat-card",3),t.TgZ(4,"mat-card-content"),t.YNc(5,Q,7,3,"div",4),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const i=t.oxw();t.xp6(5),t.Q6J("ngForOf",i.description.data)}}function R(e,n){1&e&&t._UZ(0,"div",8)}function P(e,n){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",5),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span",6),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,R,1,0,"div",7),t.qZA()),2&e){const i=n.$implicit,o=n.last;t.xp6(3),t.hij(" ",i.title," "),t.xp6(2),t.hij(" ",i.value," "),t.xp6(1),t.Q6J("ngIf",!o)}}function U(e,n){if(1&e&&(t.TgZ(0,"div",1),t.TgZ(1,"div"),t.TgZ(2,"mat-card",3),t.TgZ(3,"mat-card-content"),t.YNc(4,P,7,3,"div",4),t.qZA(),t.qZA(),t.qZA(),t._UZ(5,"div",9),t.qZA()),2&e){const i=t.oxw();t.xp6(4),t.Q6J("ngForOf",i.description.data)}}let Y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-description-node"]],inputs:{description:"description",isRight:"isRight"},decls:2,vars:2,consts:[["fxLayout","row","fxLayoutAlign","start center",4,"ngIf"],["fxLayout","row","fxLayoutAlign","start center"],["fxFlexAlign","baseline",1,"arrow-left",2,"margin-top","10px"],[1,"card"],[4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-between start",1,"card-element","element-color"],[2,"padding-left","20px"],["class","border-bottom",4,"ngIf"],[1,"border-bottom"],["fxFlexAlign","baseline",1,"arrow-right",2,"margin-top","10px"]],template:function(i,o){1&i&&(t.YNc(0,q,6,1,"div",0),t.YNc(1,U,6,1,"div",0)),2&i&&(t.Q6J("ngIf",o.isRight),t.xp6(1),t.Q6J("ngIf",!o.isRight))},directives:[f.O5,l.xw,l.Wh,l.XD,m.a8,m.dn,f.sg],styles:[".card[_ngcontent-%COMP%]{border-radius:6px;width:300px;height:-moz-fit-content;height:fit-content;border:1px solid #EDF2F7}.element-color[_ngcontent-%COMP%]{color:#8492a6;font-size:14px}.arrow-left[_ngcontent-%COMP%]{width:0;height:0;border-top:15px solid transparent;border-bottom:15px solid transparent;border-right:15px solid #EBF2FA}.arrow-right[_ngcontent-%COMP%]{width:0;height:0;border-top:15px solid transparent;border-bottom:15px solid transparent;border-left:15px solid #EBF2FA}  mat-card{box-shadow:none!important}.mat-card[_ngcontent-%COMP%]{padding:5px 0}.card-element[_ngcontent-%COMP%]{padding:0 10px}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #EDF2F7}@media screen and (max-width: 650px){.card[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}}"]}),e})();var N=s(11436);function z(e,n){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"i",9),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("matTooltip",i.errorDescription)}}const A=function(e){return[e]};function j(e,n){if(1&e&&t._UZ(0,"div",10),2&e){const i=t.oxw(2);t.Q6J("ngClass",t.VKq(1,A,i.node.disconnected||i.node.isFaulty?"line-failure":"line-success"))}}function W(e,n){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"i",11),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("matTooltip",i.errorDescription)}}function H(e,n){if(1&e&&(t.TgZ(0,"div",1),t._UZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"span",5),t._uU(5),t.qZA(),t.YNc(6,z,2,1,"div",6),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,j,1,3,"div",7),t.YNc(9,W,2,1,"div",6),t.qZA(),t.qZA(),t.TgZ(10,"div"),t._UZ(11,"app-description-node",8),t.qZA(),t.qZA()),2&e){const i=t.oxw();t.xp6(5),t.Oqu(i.node.title),t.xp6(1),t.Q6J("ngIf",i.node.isFaulty&&i.mdScreen),t.xp6(2),t.Q6J("ngIf",!i.isLast),t.xp6(1),t.Q6J("ngIf",i.node.isFaulty&&!i.mdScreen),t.xp6(2),t.Q6J("isRight",i.isRight)("description",i.node.description)}}function V(e,n){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"i",11),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("matTooltip",i.errorDescription)}}function K(e,n){if(1&e&&t._UZ(0,"div",10),2&e){const i=t.oxw(2);t.Q6J("ngClass",t.VKq(1,A,i.node.disconnected||i.node.isFaulty?"line-failure":"line-success"))}}function X(e,n){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"i",11),t.qZA()),2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("matTooltip",i.errorDescription)}}function G(e,n){if(1&e&&(t.TgZ(0,"div",1),t.TgZ(1,"div"),t._UZ(2,"app-description-node",8),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"span",5),t._uU(6),t.qZA(),t.YNc(7,V,2,1,"div",6),t.qZA(),t.TgZ(8,"div",4),t.YNc(9,K,1,3,"div",7),t.YNc(10,X,2,1,"div",6),t.qZA(),t.qZA(),t._UZ(11,"div",2),t.qZA()),2&e){const i=t.oxw();t.xp6(2),t.Q6J("isRight",i.isRight)("description",i.node.description),t.xp6(4),t.Oqu(i.node.title),t.xp6(1),t.Q6J("ngIf",i.node.isFaulty&&i.mdScreen),t.xp6(2),t.Q6J("ngIf",!i.isLast),t.xp6(1),t.Q6J("ngIf",i.node.isFaulty&&!i.mdScreen)}}let $=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-title-node"]],inputs:{node:"node",isRight:"isRight",isLast:"isLast",errorDescription:"errorDescription",mdScreen:"mdScreen"},decls:2,vars:2,consts:[["fxLayout","row","fxLayoutAlign","center start",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center start"],[1,"hidden-div"],["fxLayout","column","fxLayoutAlign"," center",1,"title-div"],["fxLayout","row","fxLayoutAlign","center center"],[1,"title-style"],[4,"ngIf"],["class","dotted-line",3,"ngClass",4,"ngIf"],[3,"isRight","description"],[1,"bi","bi-exclamation-triangle-fill","icon-style",3,"matTooltip"],[1,"dotted-line",3,"ngClass"],[1,"bi","bi-exclamation-triangle-fill","icon-style","icon-position",3,"matTooltip"]],template:function(i,o){1&i&&(t.YNc(0,H,12,6,"div",0),t.YNc(1,G,12,6,"div",0)),2&i&&(t.Q6J("ngIf",o.isRight),t.xp6(1),t.Q6J("ngIf",!o.isRight))},directives:[f.O5,l.xw,l.Wh,Y,N.gM,f.mk],styles:[".title-style[_ngcontent-%COMP%]{font-size:28px;font-weight:400;color:#425466}.title-div[_ngcontent-%COMP%]{width:200px;padding-top:10px}.dotted-line[_ngcontent-%COMP%]{height:60px;border-left:6px dotted;margin-top:5px}.line-success[_ngcontent-%COMP%]{border-left-color:var(--green-success)}.line-failure[_ngcontent-%COMP%]{border-left-color:var(--red-failure)}.icon-style[_ngcontent-%COMP%]{padding-left:10px;color:var(--red-failure)}.icon-position[_ngcontent-%COMP%]{position:absolute;right:46%}.hidden-div[_ngcontent-%COMP%]{width:316px;visibility:hidden}@media screen and (max-width: 1350px){.icon-position[_ngcontent-%COMP%]{position:absolute;right:45%}}@media screen and (max-width: 950px){.hidden-div[_ngcontent-%COMP%]{display:none}}@media screen and (max-width: 650px){.title-style[_ngcontent-%COMP%]{font-size:22px}.title-div[_ngcontent-%COMP%]{width:100px;text-align:center}}"]}),e})();function k(e,n){if(1&e&&(t.TgZ(0,"div",1),t._UZ(1,"app-title-node",2),t.qZA()),2&e){const i=n.$implicit,o=n.index,c=n.last,r=t.oxw();t.xp6(1),t.Q6J("node",i)("isLast",c)("isRight",o%2==0||r.mdScreen)("errorDescription",r.errorDescription)("mdScreen",r.mdScreen)}}let tt=(()=>{class e{constructor(){this.nodesList=[]}ngOnInit(){this.checkWindowSize(window.innerWidth)}onResize(i){this.checkWindowSize(window.innerWidth)}checkWindowSize(i){this.mdScreen=i<=950}trackByName(i,o){return o.title}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-nodes-list"]],hostBindings:function(i,o){1&i&&t.NdJ("resize",function(r){return o.onResize(r)},!1,t.Jf7)},inputs:{nodesList:"nodesList",errorDescription:"errorDescription"},decls:1,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",4,"ngFor","ngForOf","ngForTrackBy"],["fxLayout","column","fxLayoutAlign","center center"],[3,"node","isLast","isRight","errorDescription","mdScreen"]],template:function(i,o){1&i&&t.YNc(0,k,2,5,"div",0),2&i&&t.Q6J("ngForOf",o.nodesList)("ngForTrackBy",o.trackByName)},directives:[f.sg,l.xw,l.Wh,$],styles:[""]}),e})();const et=[{path:"",component:(()=>{class e{constructor(i,o){this.ethercatMS=i,this.notificationBarMS=o,this.subscriptions=[],this.nodesList=[],this.errorDescription=""}ngOnInit(){this.subscriptions.push(this.ethercatMS.ethercatNodes.subscribe(i=>{if(i&&(0,T.diff)(i,this.nodesList)){this.nodesList=i;let o=this.nodesList.findIndex(c=>c.isFaulty);(0,T.diff)(this.isFaultyIndex,o)&&(this.isFaultyIndex=o,this.isFaultyIndex>=0?this.notificationBarMS.addNotificationBar({id:"ethercatDisconnectionError",closable:!1,content:"notificationBar.ethercat.errorDescription",severity:C.l.FATAL,translationValue:[this.nodesList[this.isFaultyIndex].title,this.nodesList[this.isFaultyIndex+1].title]}):this.notificationBarMS.removeNotificationBar("ethercatDisconnectionError"))}}),this.ethercatMS.ethercatCrcCount.subscribe(i=>{void 0!==i&&this.notificationBarMS.addNotificationBar({id:"ethercatCrcCount",closable:!1,content:"notificationBar.ethercat.crcNotification",translationValue:[i],severity:C.l.WARNING})})),this.ethercatMS.toggleEthercatChannel(!0)}ngOnDestroy(){this.notificationBarMS.removeNotificationBar("ethercatCrcCount"),this.notificationBarMS.removeNotificationBar("ethercatDisconnectionError"),this.subscriptions.forEach(i=>i.unsubscribe()),this.ethercatMS.toggleEthercatChannel(!1)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(I),t.Y36(J.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ethercat-tab"]],features:[t._Bn([{provide:L.Hn,useValue:{scope:"modules/pages/logging/ethercat",alias:"ethercat"}}])],decls:2,vars:2,consts:[["fxLayout","column","fxLayoutAlign","start center",2,"padding","30px 0 30px 0"],[3,"nodesList","errorDescription"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"app-nodes-list",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("nodesList",o.nodesList)("errorDescription",o.errorDescription))},directives:[l.xw,l.Wh,tt],styles:[""]}),e})()},{path:"**",redirectTo:""}];let it=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[x.Bz.forChild(et)],x.Bz]}),e})();var nt=s(69904);let ot=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[e],imports:[[f.ez,a.Aw.forFeature(g)]]}),e})(),rt=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[f.ez,it,nt.A,m.QW,l.ae,ot,N.AV]]}),e})()}}]);