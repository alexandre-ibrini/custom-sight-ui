(self.webpackChunkros_fe_poc=self.webpackChunkros_fe_poc||[]).push([[31],{49457:function(Z,w){var i,f;void 0!==(f="function"==typeof(i=function(){"use strict";function M(l,o,m){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){E(d.response,o,m)},d.onerror=function(){console.error("could not download file")},d.send()}function u(l){var o=new XMLHttpRequest;o.open("HEAD",l,!1);try{o.send()}catch(m){}return 200<=o.status&&299>=o.status}function _(l){try{l.dispatchEvent(new MouseEvent("click"))}catch(m){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(o)}}var v="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,S=v.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),E=v.saveAs||("object"!=typeof window||window!==v?function(){}:"download"in HTMLAnchorElement.prototype&&!S?function(l,o,m){var d=v.URL||v.webkitURL,T=document.createElement("a");T.download=o=o||l.name||"download",T.rel="noopener","string"==typeof l?(T.href=l,T.origin===location.origin?_(T):u(T.href)?M(l,o,m):_(T,T.target="_blank")):(T.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(T.href)},4e4),setTimeout(function(){_(T)},0))}:"msSaveOrOpenBlob"in navigator?function(l,o,m){if(o=o||l.name||"download","string"!=typeof l)navigator.msSaveOrOpenBlob(function(l,o){return void 0===o?o={autoBom:!1}:"object"!=typeof o&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\ufeff",l],{type:l.type}):l}(l,m),o);else if(u(l))M(l,o,m);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){_(d)})}}:function(l,o,m,d){if((d=d||open("","_blank"))&&(d.document.title=d.document.body.innerText="downloading..."),"string"==typeof l)return M(l,o,m);var T="application/octet-stream"===l.type,B=/constructor/i.test(v.HTMLElement)||v.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||T&&B||S)&&"undefined"!=typeof FileReader){var A=new FileReader;A.onloadend=function(){var I=A.result;I=g?I:I.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=I:location=I,d=null},A.readAsDataURL(l)}else{var x=v.URL||v.webkitURL,N=x.createObjectURL(l);d?d.location=N:location.href=N,d=null,setTimeout(function(){x.revokeObjectURL(N)},4e4)}});v.saveAs=E.saveAs=E,Z.exports=E})?i.apply(w,[]):i)&&(Z.exports=f)},81647:(Z,w,i)=>{"use strict";i.d(w,{h:()=>f});var h=i(37716);let f=(()=>{class e{constructor(){}mapFromDtoModelArrayToViewModelArray(u){let _=[];return u.forEach(v=>{_.push(this.mapFromDtoModelToViewModel(v))}),_}mapFromDtoModelToViewModel(u){return{fullPath:u.path,name:u.name,createdDate:new Date(u.createdDate),lastModifiedDate:new Date(u.lastModifiedDate),isDir:u.isDir,children:u.isDir?[]:null}}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},71013:(Z,w,i)=>{"use strict";i.d(w,{T:()=>I});var h=i(91841),f=i(23815),e=i(26215),M=i(25917),u=i(15257),_=i(92340),v=i(84365),S=i(57788),E=i(23065),l=i(38223);const o=(0,E.P1)(l.N.selectLoading,y=>y),m=(0,E.P1)(l.N.selectRequestedPath,y=>y),d=(0,E.P1)(l.N.selectLogs,y=>y),T=(0,E.P1)(l.N.selectIsDownloading,y=>y);var B=i(49457),g=i(37716),A=i(81647),x=i(70992),N=i(67736);let I=(()=>{class y{constructor(b,D,F,O,j){this.logsMapperService=b,this.store=D,this.responseMS=F,this.linkService=O,this.http=j,this.newRequest=new e.X(null),this.responseMS.get_logs.subscribe(P=>{var G;P&&this.receiveLogs(null===(G=null==P?void 0:P.data)||void 0===G?void 0:G.logs)}),this.responseMS.get_compressed_files.subscribe(P=>{var G;this.handleCompressedFilesResponse(null===(G=null==P?void 0:P.data)||void 0===G?void 0:G.name)})}get requestedPath(){return this.store.select(m)}get logs(){return this.store.select(d)}get loading(){return this.store.select(o)}get isDownloading(){return this.store.select(T)}set isDownloading(b){b.subscribe(D=>{this.store.dispatch((0,S.Ln)({isDownloading:D}))})}receiveLogs(b){let D=this.logsMapperService.mapFromDtoModelArrayToViewModelArray(b);this.store.dispatch((0,S.iS)({logs:D})),this.store.dispatch((0,S.EX)({loading:!1}))}downloadLogs(b){this.isDownloading.pipe((0,u.q)(1)).subscribe(D=>{if(!D){this.isDownloading=(0,M.of)(!0);let F=(0,f.cloneDeep)(v.L);F.data.files=b,this.linkService.sendMessage(F)}})}handleCompressedFilesResponse(b){let D=new h.WM({Token:localStorage.getItem("access_token"),"Access-Control-Allow-Origin":"*"});this.http.get(_.N.APIEndpoint.slice(0,-1)+b,{headers:D,responseType:"blob"}).subscribe(F=>{let O=null==b?void 0:b.split("/");O=O[O.length-1],(0,B.saveAs)(F,O)}),this.isDownloading=(0,M.of)(!1)}clearLogs(){this.store.dispatch((0,S.Cs)())}requestLogs(b){let D=(0,f.cloneDeep)(v.p);D.data.directory=b,this.linkService.sendMessage(D),this.store.dispatch((0,S.xA)({requestedPath:b})),this.store.dispatch((0,S.EX)({loading:!0}))}}return y.\u0275fac=function(b){return new(b||y)(g.LFG(A.h),g.LFG(E.yh),g.LFG(x.B),g.LFG(N.X),g.LFG(h.eN))},y.\u0275prov=g.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},84365:(Z,w,i)=>{"use strict";i.d(w,{p:()=>h,L:()=>f});const h={type:"get_logs",data:{directory:""}},f={type:"get_compressed_files",data:{files:[],compressed_files:""}}},57788:(Z,w,i)=>{"use strict";i.d(w,{iS:()=>f,EX:()=>e,xA:()=>M,Cs:()=>u,Ln:()=>_});var h=i(23065);const f=(0,h.PH)("[Logs] Update Logs",(0,h.Ky)()),e=(0,h.PH)("[Logs] Toggle Logs Loading Status",(0,h.Ky)()),M=(0,h.PH)("[Logs] Update Logs Requested Path",(0,h.Ky)()),u=(0,h.PH)("[Logs] Clear Logs"),_=(0,h.PH)("[Logs] Toggle Downloading Log Status",(0,h.Ky)())},38223:(Z,w,i)=>{"use strict";i.d(w,{N:()=>l});var h=i(23065),f=i(57788),e=i(23815),M=i(19083),u=i(37716);let _=(()=>{class o{constructor(){}static updateLogsTree(d,T,B){var g,A;let x=B?null==B?void 0:B.split("/"):null===(A=null===(g=null==T?void 0:T[0])||void 0===g?void 0:g.fullPath)||void 0===A?void 0:A.split("/");null==x||x.pop(),this.accessChildrenAndAppend(d,T,x,(null==x?void 0:x.length)>0?0:null)}static accessChildrenAndAppend(d,T,B,g){if(null!=g&&g>=0){let A=d.findIndex(x=>x.name===B[g]);-1===A&&(d.push({name:B[g],isDir:!0,fullPath:B.slice(0,g).join("/"),children:[]}),A=d.findIndex(x=>x.name===B[g])),this.accessChildrenAndAppend(d[A].children,T,B,g=B.length-1>g?g+1:null)}else(0,M.diff)(d,T)&&d.push(...T)}}return o.\u0275fac=function(d){return new(d||o)},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const E=(0,h.Lq)({loading:!1,logs:[],requestedPath:"/",isDownloading:!1},(0,h.on)(f.iS,(o,m)=>{let d=(0,e.cloneDeep)(o.logs);return _.updateLogsTree(d,m.logs,d.length>0?null:o.requestedPath),Object.assign(Object.assign({},o),{logs:d})}),(0,h.on)(f.EX,(o,m)=>Object.assign(Object.assign({},o),{loading:m.loading})),(0,h.on)(f.xA,(o,m)=>Object.assign(Object.assign({},o),{requestedPath:m.requestedPath})),(0,h.on)(f.Cs,(o,m)=>Object.assign(Object.assign({},o),{logs:[]})),(0,h.on)(f.Ln,(o,m)=>Object.assign(Object.assign({},o),{isDownloading:m.isDownloading}))),l=(0,h.Tz)({name:"logs",reducer:E})},2031:(Z,w,i)=>{"use strict";i.r(w),i.d(w,{BrakeTestTabModule:()=>bt});var h=i(38583),f=i(95987),e=i(37716);const M=[{Title:"Last brake test",StartDate:new Date(Date.now()-2),EndDate:new Date(Date.now()),Status:"Success"},{Title:"Automatic brake test",Status:"Disabled"},{Title:"Test2",StartDate:new Date(Date.now()-2),EndDate:new Date(Date.now()),Status:"Warn",Message:"Whoops I Slipped"},{Title:"Test3",StartDate:new Date(Date.now()-2),EndDate:new Date(Date.now()),Status:"Error",Message:"Boy you gonna need a new car"},{Title:"Test4",StartDate:new Date(Date.now()),Status:"Running"}];var u=i(3679),_=i(19083),v=i(2938),S=i(6040);const E={type:"get_brake_tests",data:{}};var l=i(23815),o=i(23065);const m=(0,o.PH)("[BrakeTest] Update Brake Test History",(0,o.Ky)()),B=(0,o.Lq)({loading:!1,brakeTestHistory:[]},(0,o.on)(m,(a,s)=>Object.assign(Object.assign({},a),{brakeTestHistory:s.brakeTestHistory}))),g=(0,o.Tz)({name:"brakeTestHistory",reducer:B}),A=(0,o.P1)(g.selectBrakeTestHistory,a=>a);var x=i(16738),N=i(70992),I=i(93898),y=i(67736),Q=i(71013);let b=(()=>{class a{constructor(t,n,r,p,H){this.store=t,this.responseMW=n,this.channelsMW=r,this.linkService=p,this.logsMS=H,this.responseMW.brakeTestHistory.subscribe(R=>{var c;R&&this.setBrakeTestHistory(null===(c=null==R?void 0:R.data)||void 0===c?void 0:c.brake_test.map(k=>({id:k.id,cycle:k.cycle,result:k.result,test_at:x(k.test_at,"YYYYMMDDThhmmss").format("YYYY-MM-DD hh:mm:ss").toLocaleString(),message:k.message,bms_max_i:k.bms_max_i.toFixed(2),left_max_i:k.left_max_i.toFixed(2),right_max_i:k.right_max_i.toFixed(2)})))})}get brakeTestHistory(){return this.store.select(A)}setBrakeTestHistory(t){this.store.dispatch(m({brakeTestHistory:t.sort((n,r)=>r.id-n.id)}))}toggleBreakTest(t){this.channelsMW.toggleChannel("BrakeTestHistory",t)}downloadBrakeTestHistory(){this.logsMS.downloadLogs(["brake_tests"])}fetchBrakeTestHistory(){let t=(0,l.cloneDeep)(E);this.linkService.sendMessage(t)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(o.yh),e.LFG(N.B),e.LFG(I.$),e.LFG(y.X),e.LFG(Q.T))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const D=(0,o.PH)("[StaticBrakeTest] Update StaticBrakeTest",(0,o.Ky)()),F=(0,o.PH)("[StaticBrakeTest] Update StaticBrakeTest Time Interval",(0,o.Ky)()),O=(0,o.PH)("[StaticBrakeTest] Update StaticBrakeTest Error Time Threshold",(0,o.Ky)()),j=(0,o.PH)("[StaticBrakeTest] Update StaticBrakeTest Status",(0,o.Ky)()),xe=(0,o.Lq)({loading:!1,staticBrakeTest:{enabled:!1,timeInterval:null,errorTimeThreshold:""}},(0,o.on)(D,(a,s)=>{let t=s.staticBrakeTest;return Object.assign(Object.assign({},a),{staticBrakeTest:t})}),(0,o.on)(F,(a,s)=>Object.assign(Object.assign({},a),{staticBrakeTest:Object.assign(Object.assign({},a.staticBrakeTest),{timeInterval:s.interval})})),(0,o.on)(O,(a,s)=>Object.assign(Object.assign({},a),{staticBrakeTest:Object.assign(Object.assign({},a.staticBrakeTest),{errorTimeThreshold:s.threshold})})),(0,o.on)(j,(a,s)=>Object.assign(Object.assign({},a),{staticBrakeTest:Object.assign(Object.assign({},a.staticBrakeTest),{enabled:s.status})}))),ee=(0,o.Tz)({name:"staticBrakeTest",reducer:xe}),ye=(0,o.P1)(ee.selectStaticBrakeTest,a=>a),Be={type:"config",data:{request:"set",config:{ats_emulator:{ats_emulator:{start_brake_test:!0}}}}},te={type:"config",data:{request:"set",config:{"ideal_brain.static_brake_test.brake_test_checker":{brake_test_checker:{max_brake_test_time_limit_h:""}}}}},ae={type:"config",data:{request:"set",config:{"ideal_brain.static_brake_test.brake_test_checker":{brake_test_checker:{brake_test_time_interval_h:12}}}}},ne={type:"config",data:{request:"set",config:{"ideal_brain.static_brake_test.brake_test_checker":{brake_test_checker:{disable_automatic_test:!0}}}}};var V=i(15257),K=i(729);let ie=(()=>{class a{constructor(t,n){this.store=t,this.linkService=n,this.store.select(K.tg).subscribe(r=>{this.updateStaticBrakeTestTimeInterval(r)}),this.store.select(K.Vc).subscribe(r=>{this.updateStaticBrakeTestErrorTimeThreshold(r)}),this.store.select(K.vf).subscribe(r=>{this.updateStaticBreakTestStatus(void 0!==r?!r:void 0)})}get staticBrakeTest(){return this.store.select(ye)}setStaticBrakeTest(t){this.store.dispatch(D({staticBrakeTest:t}))}updateStaticBreakTestStatus(t){this.store.dispatch(j({status:t}))}updateStaticBrakeTestTimeInterval(t){this.store.dispatch(F({interval:t}))}updateStaticBrakeTestErrorTimeThreshold(t){this.store.dispatch(O({threshold:t}))}startStaticBrakeTest(t,n){let r=(0,l.cloneDeep)(Be);this.linkService.sendMessage(r),this.staticBrakeTest.pipe((0,V.q)(1)).subscribe(p=>{this.setStaticBrakeTest({enabled:p.enabled,timeInterval:t,errorTimeThreshold:n})})}submitStaticBrakeTest(t,n){ae.data.config["ideal_brain.static_brake_test.brake_test_checker"].brake_test_checker.brake_test_time_interval_h=t;let r=(0,l.cloneDeep)(ae);te.data.config["ideal_brain.static_brake_test.brake_test_checker"].brake_test_checker.max_brake_test_time_limit_h=n;let p=(0,l.cloneDeep)(te);setTimeout(()=>{this.linkService.sendMessage(r),setTimeout(()=>{this.linkService.sendMessage(p)},200)},200),this.staticBrakeTest.pipe((0,V.q)(1)).subscribe(H=>{this.setStaticBrakeTest({enabled:H.enabled,timeInterval:t,errorTimeThreshold:n})})}toggleStaticBreakTest(t){ne.data.config["ideal_brain.static_brake_test.brake_test_checker"].brake_test_checker.disable_automatic_test=t;let n=(0,l.cloneDeep)(ne);this.linkService.sendMessage(n),this.staticBrakeTest.pipe((0,V.q)(1)).subscribe(r=>{this.setStaticBrakeTest({enabled:!t,timeInterval:r.timeInterval,errorTimeThreshold:r.errorTimeThreshold})})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(o.yh),e.LFG(y.X))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Me=i(58011);const oe=(0,o.PH)("[DynamicBrakeTest] Update DynamicBrakeTest",(0,o.Ky)()),Ae=(0,o.Lq)({loading:!1,dynamicBrakeTest:{enabled:!1,driveSpeed:""}},(0,o.on)(oe,(a,s)=>{let t=s.dynamicBrakeTest;return Object.assign(Object.assign({},a),{dynamicBrakeTest:t})})),se=(0,o.Tz)({name:"dynamicBrakeTest",reducer:Ae}),De=(0,o.P1)(se.selectDynamicBrakeTest,a=>a),we={type:"config",data:{request:"set",config:{ats_emulator:{ats_emulator:{start_dynamic_brake_test:!0}}}}},Ee={type:"config",data:{request:"set",config:{ats_emulator:{ats_emulator:{start_mechanical_dynamic_brake_test:!0}}}}},Ce={type:"config",data:{request:"set",config:{"ideal_brain.dynamic_brake_test.drive_straight":{drive_straight:{speed:1}}}}};let re=(()=>{class a{constructor(t,n){this.store=t,this.linkService=n}get dynamicBrakeTest(){return this.store.select(De)}setDynamicBrakeTest(t){this.store.dispatch(oe({dynamicBrakeTest:t}))}submitDynamicBrakeTest(t,n){let p,r=(0,l.cloneDeep)(Ce);r.data.config["ideal_brain.dynamic_brake_test.drive_straight"].drive_straight.speed=Number(t),p=(0,l.cloneDeep)(n?Ee:we),setTimeout(()=>{this.linkService.sendMessage(r),setTimeout(()=>{this.linkService.sendMessage(p)},200)},200)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(o.yh),e.LFG(y.X))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var He=i(39075),U=i(77093),Le=i(37963),le=i(11436),de=i(98295),ce=i(49983),pe=i(51095),Pe=i(65424);const Re=["brakeTestTable"];function Ie(a,s){if(1&a&&e._UZ(0,"app-data-table",16,17),2&a){const t=e.oxw(2);e.Q6J("titleText","brakeTest.brakeTestHistory.title")("columns",t.columns)("ELEMENT_DATA",t.tableData)("showReloadButton",!0)("showDownloadAllButton",!0)("downloadButtonTrigger",t.downloadBrakeTestHistory)("reloadButtonTrigger",t.reloadBrakeTestHistory)("tooltipText","brakeTest.brakeTestHistory.tooltip")}}function Fe(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e.TgZ(3,"app-switch-tile",4),e.NdJ("slideAction",function(r){return e.CHM(t),e.oxw().toggleStaticBrakeTest(r)}),e.ALo(4,"transloco"),e.ALo(5,"transloco"),e.ALo(6,"transloco"),e.qZA(),e.TgZ(7,"form",5),e.TgZ(8,"mat-form-field"),e._UZ(9,"input",6),e.ALo(10,"transloco"),e.ALo(11,"transloco"),e.qZA(),e.TgZ(12,"div",7),e.TgZ(13,"mat-form-field",8),e._UZ(14,"input",9),e.ALo(15,"transloco"),e.qZA(),e._UZ(16,"i",10),e.ALo(17,"transloco"),e.qZA(),e.qZA(),e.TgZ(18,"div",11),e.TgZ(19,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().startStaticBrakeTest()}),e._uU(20),e.ALo(21,"transloco"),e.qZA(),e.TgZ(22,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().onStaticBrakeTestTimeValuesSubmit()}),e._uU(23),e.ALo(24,"transloco"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",13),e.TgZ(26,"app-switch-tile",14),e.NdJ("slideAction",function(r){return e.CHM(t),e.oxw().toggleDynamicBrakeTest(r)})("inputActionEmit",function(r){return e.CHM(t),e.oxw().onDynamicBrakeTestSubmit(r)}),e.ALo(27,"transloco"),e.ALo(28,"transloco"),e.ALo(29,"transloco"),e.ALo(30,"transloco"),e.ALo(31,"transloco"),e.qZA(),e.qZA(),e.qZA(),e.YNc(32,Ie,2,8,"app-data-table",15),e.qZA()}if(2&a){const t=e.oxw();e.xp6(3),e.s9C("titleText",e.lcZ(4,22,"brakeTest.staticBrakeTest.title")),e.s9C("slideText",e.lcZ(5,24,"brakeTest.staticBrakeTest.slideText")),e.Q6J("description",t.getStaticBrakeTestDescription())("initialValue",t.initialStaticBrakeTestValue)("slideTextDisabled","Disabled")("matTooltip",e.lcZ(6,26,"brakeTest.staticBrakeTest.tooltip")),e.xp6(4),e.Q6J("formGroup",t.staticBrakeTestFormGroup),e.xp6(2),e.s9C("placeholder",e.lcZ(10,28,"brakeTest.staticBrakeTest.formGroup.field1.placeholder")),e.Q6J("matTooltip",e.lcZ(11,30,"brakeTest.staticBrakeTest.formGroup.field1.tooltip")),e.xp6(5),e.s9C("placeholder",e.lcZ(15,32,"brakeTest.staticBrakeTest.formGroup.field2.placeholder")),e.xp6(2),e.Q6J("matTooltip",e.lcZ(17,34,t.Description)),e.xp6(4),e.Oqu(e.lcZ(21,36,"brakeTest.staticBrakeTest.startTest")),e.xp6(3),e.Oqu(e.lcZ(24,38,"brakeTest.staticBrakeTest.submit")),e.xp6(3),e.s9C("titleText",e.lcZ(28,42,"brakeTest.dynamicBrakeTest.title")),e.s9C("description",e.lcZ(29,44,"brakeTest.dynamicBrakeTest.description")),e.s9C("slideText",e.lcZ(30,46,"brakeTest.dynamicBrakeTest.slideText")),e.Q6J("matTooltip",e.lcZ(27,40,"brakeTest.dynamicBrakeTest.tileTooltip"))("checkbox",!0)("inputAction",t.action)("initialValue",t.initialDynamicBrakeTestValue)("tooltipInfo",e.lcZ(31,48,t.MechanicalBreakDescription)),e.xp6(6),e.Q6J("ngIf",t.tableData)}}const Oe=[{path:"",component:(()=>{class a{constructor(t,n,r,p,H,R){this.brakeTestHistoryMS=t,this.staticBrakeTestMS=n,this.notificationBarMs=r,this.dynamicBrakeTestMS=p,this.sanitizer=H,this.translocoService=R,this.attemptedBrakeTests=M,this.subscriptions=[],this.initialStaticBrakeTestValue=void 0,this.initialDynamicBrakeTestValue=void 0,this.Description="brakeTest.staticBrakeTest.formGroup.field2.tooltip",this.MechanicalBreakDescription="brakeTest.dynamicBrakeTest.tooltip",this.staticBrakeTestFormGroup=new u.cw({timeInterval:new u.NI("",[u.kI.required,u.kI.min(0)]),errorTimeThreshold:new u.NI("",[u.kI.required])}),this.columns=[{id:"id",name:"brakeTest.brakeTestHistory.columns.id.name",tooltip:"brakeTest.brakeTestHistory.columns.id.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}},{id:"cycle",name:"brakeTest.brakeTestHistory.columns.cycle.name",tooltip:"brakeTest.brakeTestHistory.columns.cycle.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}},{id:"result",name:"brakeTest.brakeTestHistory.columns.result.name",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>{let k="";return this.translocoService.selectTranslate("brakeTestHistory.status."+(c?"success":"failure"),{},"modules/pages/system-panel/brake-test").subscribe(L=>{k=L}),k},badgeBackgroundColorRule:c=>!0===c?"#DEFFEE":"#FFDEDE"}},{id:"time",name:"brakeTest.brakeTestHistory.columns.time.name",tooltip:"brakeTest.brakeTestHistory.columns.time.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}},{id:"message",name:"brakeTest.brakeTestHistory.columns.message.name",tooltip:"brakeTest.brakeTestHistory.columns.message.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}},{id:"bms_max_i",name:"brakeTest.brakeTestHistory.columns.bmsMaxI.name",tooltip:"brakeTest.brakeTestHistory.columns.bmsMaxI.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}},{id:"left_max_i",name:"brakeTest.brakeTestHistory.columns.leftMaxI.name",tooltip:"brakeTest.brakeTestHistory.columns.leftMaxI.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}},{id:"right_max_i",name:"brakeTest.brakeTestHistory.columns.rightMaxI.name",tooltip:"brakeTest.brakeTestHistory.columns.rightMaxI.tooltip",badge:{badgeCell:!0,badgeColorRule:c=>"#425466",badgeValueRule:c=>c,badgeBackgroundColorRule:c=>"transparent"}}],this.tableData=[],this.action={input:null,inputPlaceholder:"brakeTest.dynamicBrakeTest.inputAction.inputPlaceholder",button:"brakeTest.dynamicBrakeTest.inputAction.button",trigger(){}},this.reloadBrakeTestHistory=()=>{this.brakeTestHistoryMS.fetchBrakeTestHistory()},this.downloadBrakeTestHistory=()=>{this.brakeTestHistoryMS.downloadBrakeTestHistory()}}toggleStaticBrakeTest(t){this.initialStaticBrakeTestValue=t,this.staticBrakeTestMS.toggleStaticBreakTest(!t)}onStaticBrakeTestTimeValuesSubmit(){this.staticBrakeTestMS.submitStaticBrakeTest(this.staticBrakeTestFormGroup.controls.timeInterval.value,this.staticBrakeTestFormGroup.controls.errorTimeThreshold.value)}startStaticBrakeTest(){this.staticBrakeTestMS.startStaticBrakeTest(this.staticBrakeTestFormGroup.controls.timeInterval.value,this.staticBrakeTestFormGroup.controls.errorTimeThreshold.value)}toggleBrakeTestChannel(t){this.brakeTestHistoryMS.toggleBreakTest(t)}toggleDynamicBrakeTest(t){this.initialDynamicBrakeTestValue=t}onDynamicBrakeTestSubmit(t){this.dynamicBrakeTestMS.submitDynamicBrakeTest(t,this.initialDynamicBrakeTestValue)}ngOnInit(){this.subscriptions.push(this.staticBrakeTestMS.staticBrakeTest.subscribe(t=>{t&&(this.initialStaticBrakeTestValue=t.enabled,this.staticBrakeTestFormGroup.controls.errorTimeThreshold.setValue(t.errorTimeThreshold),this.staticBrakeTestFormGroup.controls.timeInterval.setValue(t.timeInterval))}),this.dynamicBrakeTestMS.dynamicBrakeTest.subscribe(t=>{t&&(this.initialDynamicBrakeTestValue=t.enabled,this.action.input=t.driveSpeed)}),this.brakeTestHistoryMS.brakeTestHistory.subscribe(t=>{var n;let r=null==t?void 0:t.map((p,H)=>({id:p.id,cycle:p.cycle,result:p.result,time:p.test_at,message:p.message,bms_max_i:p.bms_max_i,left_max_i:p.left_max_i,right_max_i:p.right_max_i}));(0,_.diff)(this.tableData,r)&&(this.tableData=r,null===(n=this.brakeTestTable)||void 0===n||n.setTableData(this.tableData))})),this.notificationBarMs.addNotificationBar({id:"brakeTestWarning",closable:!0,content:"notificationBar.brakeTest.brakeTestWarning.content",severity:v.l.WARNING}),this.toggleBrakeTestChannel(!0),this.brakeTestHistoryMS.fetchBrakeTestHistory()}getStaticBrakeTestDescription(){let t="";return this.translocoService.selectTranslate("staticBrakeTest.description",{value:this.staticBrakeTestFormGroup.controls.timeInterval.value},"modules/pages/system-panel/brake-test").subscribe(n=>{t=n}),this.sanitizer.sanitize(e.q3G.HTML,t)}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe()),this.toggleBrakeTestChannel(!1),this.notificationBarMs.removeNotificationBar("brakeTestWarning")}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b),e.Y36(ie),e.Y36(Me.Y),e.Y36(re),e.Y36(He.H7),e.Y36(S.Vn))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-device-identity-tab"]],viewQuery:function(t,n){if(1&t&&e.Gf(Re,5),2&t){let r;e.iGM(r=e.CRH())&&(n.brakeTestTable=r.first)}},features:[e._Bn([{provide:S.Hn,useValue:{scope:"modules/pages/system-panel/brake-test",alias:"brakeTest"}}])],decls:1,vars:1,consts:[["fxLayout","column","fxLayoutGap","16px","class","outer-div-padding","style","height: 100%; color: black;overflow: auto",4,"ngIf"],["fxLayout","column","fxLayoutGap","16px",1,"outer-div-padding",2,"height","100%","color","black","overflow","auto"],["fxLayout","row wrap","fxLayoutGap.gt-sm","30px",2,"width","100%"],["fxFlex.sm","100","fxLayoutGap","16px",1,"page-components","card-max-360","full-width-mobile"],[3,"titleText","description","slideText","initialValue","slideTextDisabled","matTooltip","slideAction"],["fxLayout","column",3,"formGroup"],["matInput","","type","number","formControlName","timeInterval",3,"placeholder","matTooltip"],["fxFlex","row","fxLayoutGap","16px","fxLayoutAlign","center center"],["fxFlex","start"],["matInput","","type","number","formControlName","errorTimeThreshold",3,"placeholder"],["fxLayoutAlign","end",1,"bi","bi-info-circle-fill",2,"cursor","pointer",3,"matTooltip"],["fxLayout","row wrap","fxLayoutAlign","space-between center"],["mat-flat-button","","color","accent",3,"click"],["fxFlex.sm","100",1,"page-components","card-max-360","full-width-mobile"],[3,"matTooltip","titleText","description","checkbox","inputAction","slideText","initialValue","tooltipInfo","slideAction","inputActionEmit"],[3,"titleText","columns","ELEMENT_DATA","showReloadButton","showDownloadAllButton","downloadButtonTrigger","reloadButtonTrigger","tooltipText",4,"ngIf"],[3,"titleText","columns","ELEMENT_DATA","showReloadButton","showDownloadAllButton","downloadButtonTrigger","reloadButtonTrigger","tooltipText"],["brakeTestTable",""]],template:function(t,n){1&t&&e.YNc(0,Fe,33,50,"div",0),2&t&&e.Q6J("ngIf",null!=n.initialStaticBrakeTestValue)},directives:[h.O5,U.xw,U.SQ,U.yH,Le.s,le.gM,u._Y,u.JL,u.sg,de.KE,ce.Nt,u.wV,u.Fj,u.JJ,u.u,U.Wh,pe.lW,Pe.Q],pipes:[S.Ot],styles:[""]}),a})()},{path:"**",redirectTo:""}];let Ge=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[f.Bz.forChild(Oe)],f.Bz]}),a})();var Ze=i(69904),Ne=i(22685);let Ye=(()=>{class a{constructor(){}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),je=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[Ye,ie,re,b],imports:[[h.ez,o.Aw.forFeature(se),o.Aw.forFeature(ee),o.Aw.forFeature(g)]]}),a})();var Ve=i(73059),Ue=i(1769),ze=i(77746),Je=i(27909);i(39490),i(79765),i(75319),i(38345);let qe=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),a})();var X=i(87636),ge=i(72458);i(19238),i(87519),i(39761),i(45435),i(36461),i(46237),i(59193),i(66682),i(17238);let ft=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[h.ez,ge.BQ,qe,X.eL]]}),a})(),bt=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[h.ez,Ge,Ze.A,Ne.t,je,Ve.i,de.lN,u.u5,u.UX,Ue.t,ze.ie,Je.o9,ft,ce.c,pe.ot,le.AV,S.y4]]}),a})()}}]);