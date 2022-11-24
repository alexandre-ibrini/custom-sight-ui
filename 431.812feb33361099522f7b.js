"use strict";(self.webpackChunkros_fe_poc=self.webpackChunkros_fe_poc||[]).push([[431],{52431:(N,p,c)=>{c.r(p),c.d(p,{TurntableModule:()=>Y});var u=c(38583),P=c(61253),m=c(95987),E=c(28049),h=(()=>{return(e=h||(h={})).turntable="get_turntable_detections",e.turntableDetails="get_turntable_detection",h;var e})(),i=c(37716),S=c(23815),j=c(36363),f=c(27621),s=c(23065);const v=(0,s.PH)("[Shape Detections] Update Detections",(0,s.Ky)()),g=(0,s.PH)("[Shape Detections] Update Selected Detection",(0,s.Ky)()),C=(0,s.PH)("[Shape Detections] Update Selected Detection Detail",(0,s.Ky)()),b=(0,s.PH)("[Shape Detections] Update Detection Details",(0,s.Ky)()),M=(0,s.PH)("[Shape Detections] Update Detection Detail Content",(0,s.Ky)()),A=(0,s.Lq)({loading:!1,detections:[],details:{},detailsContent:"",selectedDetection:{},selectedDetail:""},(0,s.on)(v,(e,o)=>Object.assign(Object.assign({},e),{detections:o.detections})),(0,s.on)(g,(e,o)=>Object.assign(Object.assign({},e),{selectedDetection:o.detection})),(0,s.on)(b,(e,o)=>Object.assign(Object.assign({},e),{details:o.details})),(0,s.on)(M,(e,o)=>Object.assign(Object.assign({},e),{detailsContent:o.content})),(0,s.on)(C,(e,o)=>Object.assign(Object.assign({},e),{selectedDetail:o.name}))),D=(0,s.Tz)({name:"shapeDetections",reducer:A}),F=(0,s.P1)(D.selectDetections,e=>e),J=(0,s.P1)(D.selectSelectedDetail,e=>e),Z=(0,s.P1)(D.selectSelectedDetection,e=>e),z=(0,s.P1)(D.selectDetails,e=>e),B=(0,s.P1)(D.selectDetailsContent,e=>e);var K=c(67736),w=c(70992),y=c(91451);let T=(()=>{class e{constructor(t,n,a,r){this.linkService=t,this.store=n,this.responseMS=a,this.apiService=r,this.responseMS.get_turntable_detections.subscribe(l=>{var d;this.receiveDetections((0,S.cloneDeep)(null===(d=null==l?void 0:l.data)||void 0===d?void 0:d.detection))}),this.responseMS.get_turntable_detection.subscribe(l=>{var d;this.receiveDetectionDetails(j.o.fromDetectionDetailsToDetectionDetailsViewModel(null===(d=null==l?void 0:l.data)||void 0===d?void 0:d.detection))}),this.selectedDetection.subscribe(l=>this._selectedDetection=l)}get detections(){return this.store.select(F)}get detectionDetails(){return this.store.select(z)}get detectionDetailsContent(){return this.store.select(B)}get selectedDetection(){return this.store.select(Z)}get selectedDetail(){return this.store.select(J)}fetchDetections(t){let n=(0,S.cloneDeep)(f.u);n.type=t,this.linkService.sendMessage(n)}fetchDetectionDetails(t){var n;if(null===(n=this._selectedDetection)||void 0===n?void 0:n.name){let a=f.P;a.data.detection_name=this._selectedDetection.name,a.type=t,this.linkService.sendMessage(a)}}fetchDetectionDetailsContent(t){this.apiService.fetchDetailContent(t).subscribe(n=>{n&&this.receiveDetectionDetailsContent(JSON.stringify(n))}),this.updateSelectedDetail(t)}updateSelectedDetection(t){this.store.dispatch(g({detection:t}))}updateSelectedDetail(t){this.store.dispatch(C({name:t}))}receiveDetections(t){t.sort((n,a)=>n.name<a.name?-1:1),this.store.dispatch(v({detections:t}))}receiveDetectionDetails(t){this.store.dispatch(b({details:t}))}receiveDetectionDetailsContent(t){this.store.dispatch(M({content:t}))}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(K.X),i.LFG(s.yh),i.LFG(w.B),i.LFG(y.J))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var H=c(71013),U=c(80691);const G=[{path:"",component:(()=>{class e{constructor(t,n){this.shapeDetectionsMS=t,this.logsMS=n,this.turntableDetectionsPrefix="turntable_detections"}ngOnInit(){this.fetchDetections()}fetchDetectionDetailsContent(t){this.shapeDetectionsMS.fetchDetectionDetailsContent(t)}fetchDetectionDetails(){this.shapeDetectionsMS.fetchDetectionDetails(h.turntableDetails)}fetchDetections(){this.shapeDetectionsMS.fetchDetections(h.turntable)}selectedDetectionChange(t){this.shapeDetectionsMS.updateSelectedDetection(t),this.fetchDetectionDetails()}onDownloadDetectionPressed(t){this.shapeDetectionsMS.selectedDetection.pipe((0,E.P)()).subscribe(n=>{let a=[this.turntableDetectionsPrefix,n.name].join("/");this.logsMS.downloadLogs([a])})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(T),i.Y36(H.T))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-turntable"]],decls:7,vars:15,consts:[[1,"outer-div-padding"],[3,"detectionsList","detectionDetailsContent","detectionDetails","selectedDetection","selectedDetail","fetchDetectionDetailsContentEmitter","fetchDetectionDetailsEmitter","fetchDetectionsEmitter","selectedDetectionChangeEmitter","downloadDetectionPressedEmitter"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"app-detections-manager",1),i.NdJ("fetchDetectionDetailsContentEmitter",function(r){return n.fetchDetectionDetailsContent(r)})("fetchDetectionDetailsEmitter",function(){return n.fetchDetectionDetails()})("fetchDetectionsEmitter",function(){return n.fetchDetections()})("selectedDetectionChangeEmitter",function(r){return n.selectedDetectionChange(r)})("downloadDetectionPressedEmitter",function(r){return n.onDownloadDetectionPressed(r)}),i.ALo(2,"async"),i.ALo(3,"async"),i.ALo(4,"async"),i.ALo(5,"async"),i.ALo(6,"async"),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Q6J("detectionsList",i.lcZ(2,5,null==n.shapeDetectionsMS?null:n.shapeDetectionsMS.detections))("detectionDetailsContent",i.lcZ(3,7,null==n.shapeDetectionsMS?null:n.shapeDetectionsMS.detectionDetailsContent))("detectionDetails",i.lcZ(4,9,null==n.shapeDetectionsMS?null:n.shapeDetectionsMS.detectionDetails))("selectedDetection",i.lcZ(5,11,null==n.shapeDetectionsMS?null:n.shapeDetectionsMS.selectedDetection))("selectedDetail",i.lcZ(6,13,n.shapeDetectionsMS.selectedDetail)))},directives:[U.a],pipes:[u.Ov],styles:[""]}),e})()},{path:"**",redirectTo:""}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[m.Bz.forChild(G)],m.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[T,y.J],imports:[[u.ez,s.Aw.forFeature(D)]]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[u.ez,R,I,P.J]]}),e})()}}]);