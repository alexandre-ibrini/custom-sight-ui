"use strict";(self.webpackChunkros_fe_poc=self.webpackChunkros_fe_poc||[]).push([[201],{13201:(pt,X,l)=>{l.r(X),l.d(X,{OverviewTabModule:()=>dt});var c=l(38583),N=l(95987),pe=l(20945),f=(()=>{return(r=f||(f={})).FATAL="FATAL",r.RECOVERABLE="RECOVERABLE",r.WARNING="WARNING",f;var r})(),m=l(6040),e=l(37716),a=l(23065);const j=(0,a.PH)("[Disk] Update Disk",(0,a.Ky)()),ve=(0,a.Lq)({loading:!1,disk:0},(0,a.on)(j,(r,i)=>{let t=i.disk;return Object.assign(Object.assign({},r),{disk:t})})),H=(0,a.Tz)({name:"disk",reducer:ve}),me=(0,a.P1)(H.selectDisk,r=>r);var y=l(93898),w=l(70992);let $=(()=>{class r{constructor(t,n,s){this.store=t,this.channelsMW=n,this.responseMW=s,this.responseMW.diskUsageStatistics.subscribe(o=>{o&&this.setDisk(o.v)})}get disk(){return this.store.select(me)}setDisk(t){this.store.dispatch(j({disk:t}))}toggleDisk(t){this.channelsMW.toggleChannel("DiskUsageStatistics",t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(a.yh),e.LFG(y.$),e.LFG(w.B))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const K=(0,a.PH)("[Ssd] Update Ssd",(0,a.Ky)()),be=(0,a.Lq)({loading:!1,ssd:0},(0,a.on)(K,(r,i)=>{let t=i.ssd;return Object.assign(Object.assign({},r),{ssd:t})})),ee=(0,a.Tz)({name:"ssd",reducer:be}),ye=(0,a.P1)(ee.selectSsd,r=>r);let te=(()=>{class r{constructor(t,n,s){this.store=t,this.channelsMW=n,this.responseMW=s,this.responseMW.ssdDiskUsageStatistics.subscribe(o=>{o&&this.setSsd(o.v)})}get ssd(){return this.store.select(ye)}setSsd(t){this.store.dispatch(K({ssd:t}))}toggleSsd(t){this.channelsMW.toggleChannel("SsdDiskUsageStatistics",t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(a.yh),e.LFG(y.$),e.LFG(w.B))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var S=l(23815);const re=(0,a.PH)("[Batterys] Update Voltage",(0,a.Ky)()),ne=(0,a.PH)("[Batterys] Update Current",(0,a.Ky)()),ie=(0,a.PH)("[Batterys] Update SOC",(0,a.Ky)()),_e=(0,a.Lq)({loading:!1,battery:{current:0,voltage:0,soc:0}},(0,a.on)(re,(r,i)=>{let t=(0,S.cloneDeep)(r);return t.battery.voltage=i.voltage,t}),(0,a.on)(ne,(r,i)=>{let t=(0,S.cloneDeep)(r);return t.battery.current=i.current,t}),(0,a.on)(ie,(r,i)=>{let t=(0,S.cloneDeep)(r);return t.battery.soc=i.soc,t})),se=(0,a.Tz)({name:"battery",reducer:_e}),_=(0,a.P1)(se.selectBattery,r=>r),Ce=(0,a.P1)(_,r=>r.voltage),Me=(0,a.P1)(_,r=>r.current),ke=(0,a.P1)(_,r=>r.soc);let ae=(()=>{class r{constructor(t,n,s){this.store=t,this.channelsMW=n,this.responseMW=s,this.responseMW.voltageStatistics.subscribe(o=>{o&&this.setVoltage(o.v)}),this.responseMW.currentStatistics.subscribe(o=>{o&&this.setCurrent(o.v)}),this.responseMW.stateOfChargeStatistics.subscribe(o=>{o&&this.setSOC(o.v)})}get voltage(){return this.store.select(Ce)}get current(){return this.store.select(Me)}get soc(){return this.store.select(ke)}setVoltage(t){this.store.dispatch(re({voltage:t}))}setCurrent(t){this.store.dispatch(ne({current:t}))}setSOC(t){this.store.dispatch(ie({soc:t}))}toggleVoltage(t){this.channelsMW.toggleChannel("VoltageStatistics",t)}toggleCurrent(t){this.channelsMW.toggleChannel("CurrentStatistics",t)}toggleSOC(t){this.channelsMW.toggleChannel("StateOfChargeStatistics",t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(a.yh),e.LFG(y.$),e.LFG(w.B))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const oe=(0,a.PH)("[Events] Update Events",(0,a.Ky)()),Te=(0,a.Lq)({loading:!1,events:[]},(0,a.on)(oe,(r,i)=>{let t=(0,S.cloneDeep)(r);return t.events=i.events,t})),le=(0,a.Tz)({name:"events",reducer:Te}),xe=(0,a.P1)(le.selectEvents,r=>r);let ce=(()=>{class r{constructor(t,n,s){this.store=t,this.channelsMS=n,this.responseMS=s,this.responseMS.eventWarnings.subscribe(o=>{o&&this.setEvents(o)})}get events(){return this.store.select(xe)}setEvents(t){let n=class{static fromSopToArrayEventWarningsModel(i){let t=[],n=[];return i.d.forEach(s=>{let o=s;for(;"sop"===o.t;)o=o.d[0];n.push(o)}),n.forEach((s,o)=>{if(0!==o){let g=s.l[1];t[g]={component:s.l[0],event:{code:g,description:s.l[2],proposed_solution:s.l[3],severity:s.l[4]}}}}),t}}.fromSopToArrayEventWarningsModel(t.v);this.store.dispatch(oe({events:n}))}toggleEvents(t){this.channelsMS.toggleChannel("EventWarnings",t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(a.yh),e.LFG(y.$),e.LFG(w.B))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var d=l(77093),C=l(72458),Le=l(39490),Be=l(46237),Fe=l(75319),Ee=l(22759),Ie=l(45435);const Ge=["primaryValueBar"],Pe=(0,C.pj)(class{constructor(r){this._elementRef=r}},"primary"),De=new e.OlP("mat-progress-bar-location",{providedIn:"root",factory:function(){const r=(0,e.f3M)(c.K0),i=r?r.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}});let We=0,qe=(()=>{class r extends Pe{constructor(t,n,s,o){super(t),this._ngZone=n,this._animationMode=s,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new e.vpe,this._animationEndSubscription=Fe.w.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+We++;const p=o?o.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${p}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===s}get value(){return this._value}set value(t){this._value=de((0,Le.su)(t)||0)}get bufferValue(){return this._bufferValue}set bufferValue(t){this._bufferValue=de(t||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const t=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,Ee.R)(t,"transitionend").pipe((0,Ie.h)(n=>n.target===t)).subscribe(()=>{("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(Be.Qb,8),e.Y36(De,8))},r.\u0275cmp=e.Xpm({type:r,selectors:[["mat-progress-bar"]],viewQuery:function(t,n){if(1&t&&e.Gf(Ge,5),2&t){let s;e.iGM(s=e.CRH())&&(n._primaryValueBar=s.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(t,n){2&t&&(e.uIk("aria-valuenow","indeterminate"===n.mode||"query"===n.mode?null:n.value)("mode",n.mode),e.ekj("_mat-animation-noopable",n._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[e.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.O4$(),e.TgZ(1,"svg",1),e.TgZ(2,"defs"),e.TgZ(3,"pattern",2),e._UZ(4,"circle",3),e.qZA(),e.qZA(),e._UZ(5,"rect",4),e.qZA(),e.kcU(),e._UZ(6,"div",5),e._UZ(7,"div",6,7),e._UZ(9,"div",8),e.qZA()),2&t&&(e.xp6(3),e.Q6J("id",n.progressbarId),e.xp6(2),e.uIk("fill",n._rectangleFillValue),e.xp6(1),e.Q6J("ngStyle",n._bufferTransform()),e.xp6(1),e.Q6J("ngStyle",n._primaryTransform()))},directives:[c.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),r})();function de(r,i=0,t=100){return Math.max(i,Math.min(t,r))}let Ve=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,C.BQ],C.BQ]}),r})(),ze=(()=>{class r{constructor(){this.value=new e.IIB,this.title=new e.IIB}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-disk-graph"]],inputs:{value:"value",title:"title"},decls:8,vars:3,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","16px",1,"disk-usage-graph"],["fxLayoutAlign","start center",2,"white-space","nowrap","width","100%","font-weight","700","font-size","18px"],["fxLayoutAlign","space-between center","fxLayout","row",2,"width","100%"],[2,"font-size","14px","color","#84859E"],["color","accent","mode","determinate",3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"span",3),e._uU(6),e.qZA(),e.qZA(),e._UZ(7,"mat-progress-bar",4),e.qZA()),2&t&&(e.xp6(3),e.Oqu(n.title),e.xp6(3),e.hij("",null==n.value?null:n.value.toFixed(2),"%"),e.xp6(1),e.Q6J("value",n.value))},directives:[d.xw,d.Wh,d.SQ,qe],styles:[".mat-progress-bar[_ngcontent-%COMP%]{border-radius:20px;height:8px}.disk-usage-graph[_ngcontent-%COMP%]  .mat-progress-bar.mat-accent .mat-progress-bar-fill:after{border-radius:20px!important}"]}),r})();var M=l(11436);function Qe(r,i){1&r&&e._UZ(0,"div",7)}let Re=(()=>{class r{constructor(){this.value="--"}ngOnInit(){}setValue(t){this.value=t?t.toFixed(2):"--"}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-battery-stats-card"]],inputs:{title:"title",showGreenIndicator:"showGreenIndicator",id:"id",unit:"unit"},decls:11,vars:4,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"outerDiv"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"titleText"],["class","greenIndicator",4,"ngIf"],["fxLayoutAlign","end center"],[1,"valueText"],[1,"unitText"],[1,"greenIndicator"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div"),e.TgZ(3,"span",2),e._uU(4),e.qZA(),e.qZA(),e.YNc(5,Qe,1,0,"div",3),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"span",5),e._uU(8),e.qZA(),e.TgZ(9,"span",6),e._uU(10),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Oqu(n.title),e.xp6(1),e.Q6J("ngIf",n.showGreenIndicator),e.xp6(3),e.Oqu(n.value),e.xp6(2),e.Oqu(n.unit))},directives:[d.xw,d.Wh,c.O5],styles:[".greenIndicator[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;background-color:#00ff8b}.valueText[_ngcontent-%COMP%]{font-size:38px;font-weight:400}.outerDiv[_ngcontent-%COMP%]{min-height:100px}.titleText[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.unitText[_ngcontent-%COMP%]{font-size:28px;font-weight:400}"]}),r})();var Je=l(17965);function Ye(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"i",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().openMoreInfoDialog()}),e.ALo(1,"transloco"),e.qZA()}2&r&&e.s9C("matTooltip",e.lcZ(1,1,"warningCard.tooltip"))}function Xe(r,i){1&r&&e._UZ(0,"i",10)}function Ne(r,i){1&r&&e._UZ(0,"i",11)}function je(r,i){1&r&&e._UZ(0,"i",12)}let He=(()=>{class r{constructor(t,n,s){this.alertService=t,this.translocoService=n,this.scope=s,this.description="",this.title="Warning!",this.component="",this.proposedSolution="",this.langPath="libs/shared/components/warning-card"}openMoreInfoDialog(){var t,n;this.alertService.openAlert(this.title,this.translocoService.translate("dialog.subtitle",{value:this.component},this.langPath),[this.translocoService.translate("dialog.description",{value:this.description},this.langPath),this.translocoService.translate("dialog.proposedSolution",{value:this.proposedSolution},this.langPath)],null===(n=null===(t=this.event)||void 0===t?void 0:t.event)||void 0===n?void 0:n.severity)}ngOnInit(){var t,n,s,o,p,g,v;this.event&&(this.title=null===(n=null===(t=this.event)||void 0===t?void 0:t.event)||void 0===n?void 0:n.severity,this.description=null===(o=null===(s=this.event)||void 0===s?void 0:s.event)||void 0===o?void 0:o.description,this.component=null===(p=this.event)||void 0===p?void 0:p.component,this.proposedSolution=null===(v=null===(g=this.event)||void 0===g?void 0:g.event)||void 0===v?void 0:v.proposed_solution)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Je.Q),e.Y36(m.Vn),e.Y36(m.Hn))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-warning-card"]],inputs:{description:"description",event:"event"},features:[e._Bn([{provide:m.Hn,useValue:{scope:"libs/shared/components/warning-card",alias:"warningCard"}}])],decls:11,vars:7,consts:[["class","bi bi-info-circle-fill","style","cursor: pointer;",3,"matTooltip","click",4,"ngIf"],["fxLayout","column","fxLayoutGap","18px",2,"cursor","pointer",3,"click"],["fxLayoutAlign","center center","fxLayout","column",2,"width","100%"],["class","bi bi-asterisk asterisk-icon","style","color: #A6B7D4",4,"ngIf"],["class","bi bi-exclamation-lg asterisk-icon","style","color:#ffba7d",4,"ngIf"],["class","bi bi-x-lg state-icon asterisk-icon","style","color: #ff7d7d",4,"ngIf"],["fxLayoutAlign","center center","fxLayout","column","fxLayoutGap","5px",3,"matTooltip"],[2,"font-weight","700","font-size","18px","color","#425466"],[2,"font-weight","400","font-size","12px","color","#425466","text-align","center","max-width","360px","text-overflow","ellipsis","overflow","hidden","white-space","nowrap"],[1,"bi","bi-info-circle-fill",2,"cursor","pointer",3,"matTooltip","click"],[1,"bi","bi-asterisk","asterisk-icon",2,"color","#A6B7D4"],[1,"bi","bi-exclamation-lg","asterisk-icon",2,"color","#ffba7d"],[1,"bi","bi-x-lg","state-icon","asterisk-icon",2,"color","#ff7d7d"]],template:function(t,n){1&t&&(e.YNc(0,Ye,2,3,"i",0),e.TgZ(1,"div",1),e.NdJ("click",function(){return n.openMoreInfoDialog()}),e.TgZ(2,"div",2),e.YNc(3,Xe,1,0,"i",3),e.YNc(4,Ne,1,0,"i",4),e.YNc(5,je,1,0,"i",5),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"span",7),e._uU(8),e.qZA(),e.TgZ(9,"span",8),e._uU(10),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("ngIf",n.event),e.xp6(3),e.Q6J("ngIf","warning"!==n.title.toLocaleLowerCase()&&"error"!==n.title.toLocaleLowerCase()),e.xp6(1),e.Q6J("ngIf","warning"===n.title.toLocaleLowerCase()),e.xp6(1),e.Q6J("ngIf","error"===n.title.toLocaleLowerCase()),e.xp6(1),e.Q6J("matTooltip",n.description),e.xp6(2),e.Oqu(n.title.toLocaleUpperCase()),e.xp6(2),e.Oqu(n.description))},directives:[c.O5,d.xw,d.SQ,d.Wh,M.gM],pipes:[m.Ot],styles:[".asterisk-icon[_ngcontent-%COMP%]{background:#FFFFFF;font-size:25px;padding:17px;color:#a6b7d4;border-radius:50%}"]}),r})(),$e=(()=>{class r{constructor(){this.event=new e.IIB}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-event-warnings"]],inputs:{event:"event"},decls:2,vars:1,consts:[["fxLayoutAlign","center center",2,"background","transparent !important"],[2,"width","100% !important",3,"event"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-warning-card",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("event",null==n.event?null:n.event.value))},directives:[d.Wh,He],styles:[""]}),r})();const Ke=["batteryGraphs"];function et(r,i){if(1&r&&(e.TgZ(0,"div",8),e._UZ(1,"app-battery-stats-card",9,10),e.ALo(3,"transloco"),e.ALo(4,"transloco"),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.Q6J("title",e.lcZ(3,5,t.title))("id",t.id)("showGreenIndicator",t.showGreenIndicator)("unit",t.unit)("matTooltip",e.lcZ(4,7,t.tooltip))}}function tt(r,i){if(1&r&&(e.TgZ(0,"div",11),e._UZ(1,"app-event-warnings",12),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.Q6J("event",t)}}const rt=[{path:"",component:(()=>{class r{constructor(t,n,s,o){this.diskMS=t,this.ssdMS=n,this.batteryMS=s,this.eventsMS=o,this.subscriptions=[],this.interval=(0,pe.F)(1e3),this.graphs=[{id:"SOC",title:"overview.batteryCards.cards.stateOfCharge.title",unit:"%",tooltip:"overview.batteryCards.cards.stateOfCharge.tooltip",showGreenIndicator:!1},{id:"V",title:"overview.batteryCards.cards.voltage.title",unit:"V",tooltip:"overview.batteryCards.cards.voltage.tooltip",showGreenIndicator:!1},{id:"C",title:"overview.batteryCards.cards.current.title",unit:"A",tooltip:"overview.batteryCards.cards.current.tooltip",showGreenIndicator:!0}]}checkForChangeInEvents(t){var n,s,o,p,g,v,h,b,k,Z,A,T,x,O,L,B,F,E,I,G,P,D,U,W,q,V,z,Q,R,J,Y;if((!this.events||0===(null===(n=Object.keys(this.events))||void 0===n?void 0:n.length))&&t||(null===(s=Object.keys(this.events))||void 0===s?void 0:s.length)!=(null===(o=Object.keys(t))||void 0===o?void 0:o.length))return!0;for(let u in this.events)return!t[u]||(null===(g=null===(p=this.events[u])||void 0===p?void 0:p.event)||void 0===g?void 0:g.component)!==(null===(h=null===(v=t[u])||void 0===v?void 0:v.event)||void 0===h?void 0:h.component)||(null===(Z=null===(k=null===(b=this.events[u])||void 0===b?void 0:b.event)||void 0===k?void 0:k.event)||void 0===Z?void 0:Z.code)!==(null===(x=null===(T=null===(A=t[u])||void 0===A?void 0:A.event)||void 0===T?void 0:T.event)||void 0===x?void 0:x.code)||(null===(B=null===(L=null===(O=this.events[u])||void 0===O?void 0:O.event)||void 0===L?void 0:L.event)||void 0===B?void 0:B.description)!==(null===(I=null===(E=null===(F=t[u])||void 0===F?void 0:F.event)||void 0===E?void 0:E.event)||void 0===I?void 0:I.description)||(null===(D=null===(P=null===(G=this.events[u])||void 0===G?void 0:G.event)||void 0===P?void 0:P.event)||void 0===D?void 0:D.proposed_solution)!==(null===(q=null===(W=null===(U=t[u])||void 0===U?void 0:U.event)||void 0===W?void 0:W.event)||void 0===q?void 0:q.proposed_solution)||(null===(Q=null===(z=null===(V=this.events[u])||void 0===V?void 0:V.event)||void 0===z?void 0:z.event)||void 0===Q?void 0:Q.severity)!==(null===(Y=null===(J=null===(R=t[u])||void 0===R?void 0:R.event)||void 0===J?void 0:J.event)||void 0===Y?void 0:Y.severity)}getSeverityPriority(t){switch(t){case f.FATAL:return 0;case f.RECOVERABLE:return 1;case f.WARNING:return 2;default:return 100}}ngOnInit(){this.subscriptions.push(this.eventsMS.events.subscribe(t=>{var n;(null===(n=Object.keys(t))||void 0===n?void 0:n.length)>0&&this.checkForChangeInEvents(t)&&(this.events=t)})),this.diskMS.toggleDisk(!0),this.ssdMS.toggleSsd(!0),this.batteryMS.toggleSOC(!0),this.batteryMS.toggleCurrent(!0),this.batteryMS.toggleVoltage(!0),this.eventsMS.toggleEvents(!0)}ngAfterViewInit(){this.subscriptions.push(this.batteryMS.current.subscribe(t=>{var n;null===(n=this.batteryGraphs.find(s=>"C"===s.id))||void 0===n||n.setValue(t)}),this.batteryMS.soc.subscribe(t=>{var n;null===(n=this.batteryGraphs.find(s=>"SOC"===s.id))||void 0===n||n.setValue(t)}),this.batteryMS.voltage.subscribe(t=>{var n;null===(n=this.batteryGraphs.find(s=>"V"===s.id))||void 0===n||n.setValue(t)}))}ngOnDestroy(){this.diskMS.toggleDisk(!1),this.ssdMS.toggleSsd(!1),this.batteryMS.toggleVoltage(!1),this.batteryMS.toggleSOC(!1),this.batteryMS.toggleCurrent(!1),this.eventsMS.toggleEvents(!1),this.subscriptions.forEach(t=>t.unsubscribe())}}return r.\u0275fac=function(t){return new(t||r)(e.Y36($),e.Y36(te),e.Y36(ae),e.Y36(ce))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-overview-tab"]],viewQuery:function(t,n){if(1&t&&e.Gf(Ke,5),2&t){let s;e.iGM(s=e.CRH())&&(n.batteryGraphs=s)}},features:[e._Bn([{provide:m.Hn,useValue:{scope:"modules/pages/system-panel/overview",alias:"overview"}}])],decls:29,vars:31,consts:[["fxLayout","column","fxLayoutGap","20px",1,"outer-div-padding"],["fxLayout","column","fxLayoutGap","20px"],[1,"sectionTitle"],["fxLayout","row wrap","fxLayoutGap.lt-md","7px","fxLayoutGap","16px"],["class","page-components unselectable full-width-mobile","style","height: fit-content; min-width: 260px;",4,"ngFor","ngForOf"],[1,"page-components","unselectable","full-width-mobile",2,"min-width","260px"],[3,"title","value","matTooltip"],["class","page-components unselectable full-width-mobile","style","height: 100%; min-width: 260px; background-color: #E4ECF7 !important;","fxLayoutAlign","center center",4,"ngFor","ngForOf"],[1,"page-components","unselectable","full-width-mobile",2,"height","fit-content","min-width","260px"],[3,"title","id","showGreenIndicator","unit","matTooltip"],["batteryGraphs",""],["fxLayoutAlign","center center",1,"page-components","unselectable","full-width-mobile",2,"height","100%","min-width","260px","background-color","#E4ECF7 !important"],[2,"width","100% !important",3,"event"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e._uU(3),e.ALo(4,"transloco"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,et,5,9,"div",4),e.qZA(),e.qZA(),e.TgZ(7,"div",1),e.TgZ(8,"span",2),e._uU(9),e.ALo(10,"transloco"),e.qZA(),e.TgZ(11,"div",3),e.TgZ(12,"div",5),e._UZ(13,"app-disk-graph",6),e.ALo(14,"transloco"),e.ALo(15,"async"),e.ALo(16,"transloco"),e.qZA(),e.TgZ(17,"div",5),e._UZ(18,"app-disk-graph",6),e.ALo(19,"transloco"),e.ALo(20,"async"),e.ALo(21,"transloco"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",1),e.TgZ(23,"span",2),e._uU(24),e.ALo(25,"transloco"),e.qZA(),e.TgZ(26,"div",3),e.YNc(27,tt,2,1,"div",7),e.ALo(28,"keyvalue"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,11,"overview.batteryCards.title")),e.xp6(3),e.Q6J("ngForOf",n.graphs),e.xp6(3),e.Oqu(e.lcZ(10,13,"overview.diskGraphs.title")),e.xp6(4),e.s9C("title",e.lcZ(14,15,"overview.diskGraphs.graphs.diskUsage.title")),e.Q6J("value",e.lcZ(15,17,n.diskMS.disk))("matTooltip",e.lcZ(16,19,"overview.diskGraphs.graphs.diskUsage.tooltip")),e.xp6(5),e.s9C("title",e.lcZ(19,21,"overview.diskGraphs.graphs.ssdUsage.title")),e.Q6J("value",e.lcZ(20,23,n.ssdMS.ssd))("matTooltip",e.lcZ(21,25,"overview.diskGraphs.graphs.ssdUsage.tooltip")),e.xp6(6),e.Oqu(e.lcZ(25,27,"overview.errors.title")),e.xp6(3),e.Q6J("ngForOf",e.lcZ(28,29,n.events)))},directives:[d.xw,d.SQ,c.sg,ze,M.gM,Re,d.Wh,$e],pipes:[m.Ot,c.Ov,c.Nd],styles:[".sectionTitle[_ngcontent-%COMP%]{font-size:24px;font-weight:550}"]}),r})()},{path:"**",redirectTo:""}];let nt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[N.Bz.forChild(rt)],N.Bz]}),r})();var it=l(27909),st=l(44124);let at=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[$,te],imports:[[c.ez,a.Aw.forFeature(H),a.Aw.forFeature(ee)]]}),r})(),ot=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[ce],imports:[[c.ez,a.Aw.forFeature(le)]]}),r})();var lt=l(44217);let ct=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[ae],imports:[[c.ez,a.Aw.forFeature(se),lt.j]]}),r})(),dt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,nt,Ve,it.o9,st.M,at,ot,ct,m.y4,M.AV]]}),r})()}}]);