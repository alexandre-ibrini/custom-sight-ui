"use strict";(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[111],{2111:(ge,h,r)=>{r.r(h),r.d(h,{LoggingModule:()=>ce});var C=r(5987),g=r(9083),p=r(3815),Z=r(1295),e=r(7716),w=r(2558),_=r(1013),d=r(5618),c=r(8583),u=r(2458),T=r(8295),v=r(7441);function F(i,l){1&i&&(e.TgZ(0,"span"),e._uU(1,"/"),e.qZA())}function D(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"span",6),e.NdJ("click",function(){const a=e.CHM(t).index,s=e.oxw();return s.onDirectoryChange(s.fullPahtToDir(a),!0)}),e._uU(2),e.qZA(),e.YNc(3,F,2,0,"span",11),e.qZA()}if(2&i){const t=l.$implicit,n=l.index,o=e.oxw();e.xp6(2),e.Oqu(t),e.xp6(1),e.Q6J("ngIf",n!==o.fullPathAsArray.length-1)}}let A=(()=>{class i{constructor(){this.displayMode="list",this.directoryChanged=new e.vpe,this.displayModeChanged=new e.vpe,this.fullPath_=[]}set fullPathFromString(t){this.fullPath_=t?null==t?void 0:t.split("/"):[]}get fullPathAsArray(){return this.fullPath_}fullPahtToDir(t){var n;return null!=t?null===(n=this.fullPath_.splice(0,t+1))||void 0===n?void 0:n.join("/"):""}onDisplayModeChange(t){this.displayModeChanged.emit(t)}onDirectoryChange(t,n){var o;let a;null!=t?(a=t,this.fullPathFromString=a):a=(null===(o=this.fullPath_)||void 0===o?void 0:o.length)>0&&!n?this.fullPath_.join("/"):"",this.directoryChanged.emit(a)}backPressed(){var t;let n=(null===(t=this.fullPath_)||void 0===t?void 0:t.length)>1?this.fullPath_.splice(this.fullPath_.length-2,1).join("/"):"";this.directoryChanged.emit(n)}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-manager-header"]],inputs:{displayMode:"displayMode"},outputs:{directoryChanged:"directoryChanged",displayModeChanged:"displayModeChanged"},decls:19,vars:5,consts:[["fxLayout","row","fxLayoutAlign","space-between center",1,"fileManager"],["fxLayoutGap","24px","fxLayout","row"],["matRipple","","fxLayoutAlign","center center",1,"bi","bi-chevron-left","backIcon",3,"matRippleCentered","click"],["fxLayoutGap","16px","fxLayout","row wrap",1,"currentDirDiv"],[1,"bi","bi-folder2-open",2,"color","#6E6AF4"],["fxLayout","row wrap"],[1,"pathListNavigationSpan",3,"click"],["fxLayoutGap","5px",4,"ngFor","ngForOf"],[3,"value","valueChange"],[3,"value"],["fxLayoutGap","5px"],[4,"ngIf"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"i",2),e.NdJ("click",function(){return n.backPressed()}),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div"),e._UZ(5,"i",4),e.TgZ(6,"span"),e._uU(7," : "),e.qZA(),e.qZA(),e.TgZ(8,"div",5),e.TgZ(9,"span",6),e.NdJ("click",function(){return n.onDirectoryChange("")}),e._uU(10,"/"),e.qZA(),e.YNc(11,D,4,2,"div",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div"),e.TgZ(13,"mat-form-field"),e.TgZ(14,"mat-select",8),e.NdJ("valueChange",function(a){return n.displayMode=a})("valueChange",function(a){return n.onDisplayModeChange(a)}),e.TgZ(15,"mat-option",9),e._uU(16,"Icons View"),e.qZA(),e.TgZ(17,"mat-option",9),e._uU(18,"List View"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("matRippleCentered",!0),e.xp6(9),e.Q6J("ngForOf",n.fullPathAsArray),e.xp6(3),e.Q6J("value",n.displayMode),e.xp6(1),e.Q6J("value","icons"),e.xp6(2),e.Q6J("value","list"))},directives:[d.xw,d.Wh,d.SQ,u.wG,c.sg,T.KE,v.gD,u.ey,c.O5],styles:[".pathListNavigationSpan[_ngcontent-%COMP%]{color:#8492a6;font-size:small;cursor:pointer}.pathListNavigationSpan[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#6e6af4}.fileManager[_ngcontent-%COMP%]  .mat-paginator-page-size .mat-select-trigger{padding:0 8px;line-height:17px;height:17px}.fileManager[_ngcontent-%COMP%]  .mat-select-value-text, .fileManager[_ngcontent-%COMP%]  .mat-select-arrow{color:#6e6af4}.backIcon[_ngcontent-%COMP%]{cursor:pointer;color:#6e6af4}.currentDirDiv[_ngcontent-%COMP%]{background-color:#edf2f7;padding:5px;border-radius:5px}"]}),i})();var M=r(7746),k=r(249);let L=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-folder-icon"]],decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","64 64 896 896","focusable","false","fill","currentColor","width","1em","height","1em","data-icon","folder","aria-hidden","true"],["d","M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"]],template:function(t,n){1&t&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA())},styles:[""]}),i})();var b=r(1436),f=r(3273);function I(i,l){1&i&&e._UZ(0,"app-folder-icon",12)}function S(i,l){1&i&&e._UZ(0,"i",13)}function O(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"i",14),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw(3).onDoubleClick(o)}),e.qZA()}}const x=function(i){return{selectedContainer:i}};function P(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"mat-list-item",4),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).onSelect(a)})("dblclick",function(){const a=e.CHM(t).$implicit;return e.oxw(3).onDoubleClick(a)}),e.TgZ(1,"div",5),e.TgZ(2,"div",6),e.YNc(3,I,1,0,"app-folder-icon",7),e.YNc(4,S,1,0,"i",8),e.TgZ(5,"div"),e.TgZ(6,"div",9),e.TgZ(7,"span"),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"div",9),e.TgZ(10,"span"),e._uU(11),e.ALo(12,"date"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",6),e.TgZ(14,"i",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).onDownloadClicked(a)}),e.qZA(),e.YNc(15,O,1,0,"i",11),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=l.$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(8,x,n.isSelected(t))),e.xp6(3),e.Q6J("ngIf",t.isDir),e.xp6(1),e.Q6J("ngIf",!t.isDir),e.xp6(4),e.Oqu(t.name),e.xp6(3),e.hij(" ",e.lcZ(12,6,t.lastModifiedDate),""),e.xp6(4),e.Q6J("ngIf",t.isDir)}}function J(i,l){if(1&i&&(e.TgZ(0,"mat-list"),e.YNc(1,P,16,10,"mat-list-item",3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.displayedItems)}}function q(i,l){if(1&i&&e._UZ(0,"i",25),2&i){e.oxw();const t=e.MAs(3);e.Q6J("matMenuTriggerFor",t)}}function N(i,l){1&i&&e._UZ(0,"app-folder-icon",26)}function Q(i,l){1&i&&e._UZ(0,"i",27)}function z(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",17),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).onSelect(a)})("dblclick",function(){const a=e.CHM(t).$implicit;return e.oxw(3).onDoubleClick(a)}),e.YNc(1,q,1,1,"i",18),e.TgZ(2,"mat-menu",null,19),e.TgZ(4,"button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(3).onDownloadClicked(a)}),e._UZ(5,"i",21),e.TgZ(6,"span"),e._uU(7,"Download"),e.qZA(),e.qZA(),e.qZA(),e.YNc(8,N,1,0,"app-folder-icon",22),e.YNc(9,Q,1,0,"i",23),e.TgZ(10,"div",24),e.TgZ(11,"span"),e._uU(12),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=l.$implicit,n=e.oxw(3);e.Q6J("ngClass",e.VKq(6,x,n.isSelected(t)))("matTooltip",t.name),e.xp6(1),e.Q6J("ngIf",n.isSelected(t)),e.xp6(7),e.Q6J("ngIf",t.isDir),e.xp6(1),e.Q6J("ngIf",!t.isDir),e.xp6(3),e.Oqu(t.name)}}function H(i,l){if(1&i&&(e.TgZ(0,"div",15),e.YNc(1,z,13,8,"div",16),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.displayedItems)}}function G(i,l){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,J,2,1,"mat-list",0),e.YNc(2,H,2,1,"div",2),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","list"===t.displayMode),e.xp6(1),e.Q6J("ngIf","icons"===t.displayMode)}}function E(i,l){1&i&&(e.TgZ(0,"div",28),e.TgZ(1,"span",29),e._uU(2,"Directory is empty !"),e.qZA(),e.qZA())}let U=(()=>{class i{constructor(){this.displayMode="list",this.dirItems_=[],this.displayedItems_=[],this.take=5,this.skip_=0,this.selectedItem=null,this.folderDoubleClicked=new e.vpe,this.downloadClicked=new e.vpe}ngOnInit(){}handleKeyDown(t){this.onSelect(null)}get isDirItemsEmpty(){var t;return(null===(t=this.dirItems_)||void 0===t?void 0:t.length)<=0}isSelected(t){var n;return(null===(n=this.selectedItem)||void 0===n?void 0:n.fullPath)===(null==t?void 0:t.fullPath)}onSelect(t){this.selectedItem=t}onDoubleClick(t){this.folderDoubleClicked.emit(t)}onDownloadClicked(t){let n=[];n.push(t),this.downloadClicked.emit(n)}get displayedItems(){return this.displayedItems_}get dirItems(){return this.dirItems_}changeDiritems(t){this.dirItems_=t,(null==t?void 0:t.length)>0&&(this.skip_=0,this.updateDisplayedData())}updateDisplayedData(){var t,n,o,a;this.skip_<=(null===(t=this.dirItems)||void 0===t?void 0:t.length)-1&&(this.take>(null===(n=this.dirItems)||void 0===n?void 0:n.length)-this.skip_&&(this.take=(null===(o=this.dirItems)||void 0===o?void 0:o.length)-this.skip_),this.displayedItems_=null===(a=this.dirItems)||void 0===a?void 0:a.slice(this.skip_,this.skip_+this.take))}paginationChanged(t,n){this.take=n,this.skip_=t*n,this.updateDisplayedData()}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-manager-content"]],hostBindings:function(t,n){1&t&&e.NdJ("keydown.escape",function(a){return n.handleKeyDown(a)},!1,e.Jf7)},inputs:{displayMode:"displayMode",take:"take"},outputs:{folderDoubleClicked:"folderDoubleClicked",downloadClicked:"downloadClicked"},decls:2,vars:2,consts:[[4,"ngIf"],["fxLayoutAlign","start center",4,"ngIf"],["fxLayout","row wrap","fxLayoutGap","100px","fxLayoutAlign"," center  center",4,"ngIf"],["class","itemContainer itemContainerList",3,"ngClass","click","dblclick",4,"ngFor","ngForOf"],[1,"itemContainer","itemContainerList",3,"ngClass","click","dblclick"],["fxLayout","row","fxLayoutGap","16px","fxLayoutAlign","space-between center",2,"width","100%"],["fxLayout","row","fxLayoutGap","16px"],["style","font-size: 48px; color: #8492A6",4,"ngIf"],["class","bi bi-file-bar-graph","style","font-size: 48px; color: #8492A6",4,"ngIf"],["mat-line",""],[1,"bi","bi-download",3,"click"],["class","bi bi-box-arrow-in-right",3,"click",4,"ngIf"],[2,"font-size","48px","color","#8492A6"],[1,"bi","bi-file-bar-graph",2,"font-size","48px","color","#8492A6"],[1,"bi","bi-box-arrow-in-right",3,"click"],["fxLayout","row wrap","fxLayoutGap","100px","fxLayoutAlign"," center  center"],["class","itemContainer itemContainerIcons","fxLayoutAlign","center center","fxLayout","column",3,"ngClass","matTooltip","click","dblclick",4,"ngFor","ngForOf"],["fxLayoutAlign","center center","fxLayout","column",1,"itemContainer","itemContainerIcons",3,"ngClass","matTooltip","click","dblclick"],["class","bi bi-three-dots-vertical","fxFlexAlign","end","style","margin-right: 10px; right: 0; height:0px",3,"matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["mat-menu-item","","fxLayoutGap","16px",3,"click"],[1,"bi","bi-download"],["style","font-size: 80px; color: #8492A6",4,"ngIf"],["class","bi bi-file-bar-graph","style","font-size: 80px; color: #8492A6",4,"ngIf"],[2,"text-overflow","ellipsis !important","width","inherit","overflow","hidden","width","80px"],["fxFlexAlign","end",1,"bi","bi-three-dots-vertical",2,"margin-right","10px","right","0","height","0px",3,"matMenuTriggerFor"],[2,"font-size","80px","color","#8492A6"],[1,"bi","bi-file-bar-graph",2,"font-size","80px","color","#8492A6"],["fxLayoutAlign","start center"],[2,"margin","30px"]],template:function(t,n){1&t&&(e.YNc(0,G,3,2,"div",0),e.YNc(1,E,3,0,"div",1)),2&t&&(e.Q6J("ngIf",!n.isDirItemsEmpty),e.xp6(1),e.Q6J("ngIf",n.isDirItemsEmpty))},directives:[c.O5,M.i$,c.sg,M.Tg,c.mk,k.oO,d.xw,d.SQ,d.Wh,u.X2,L,b.gM,f.VK,f.OP,d.XD,f.p6],pipes:[c.uU],styles:[".itemIcon[_ngcontent-%COMP%]{font-size:300px;margin:10px}.itemContainerList[_ngcontent-%COMP%]{width:100%;height:45px}.itemContainerIcons[_ngcontent-%COMP%]{height:150px;width:150px}.selectedContainer[_ngcontent-%COMP%]{background-color:#e1e8ff;border-radius:16px}.unselectedContainer[_ngcontent-%COMP%]{background-color:#fff}.itemContainer[_ngcontent-%COMP%]{cursor:pointer}.itemContainer[_ngcontent-%COMP%]:hover{transition:background-color .1s ease-in-out;background-color:#e1e8ff;border-radius:16px}"]}),i})();var B=r(9692);const Y=["paginator"];let R=(()=>{class i{constructor(){this.pageSize=10,this.length=0,this.pageSizeOptions=[5,10,20],this.pageEventChanged=new e.vpe,this.pageIndex=0}onpageEventChange(t){this.pageEventChanged.emit(t)}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-manager-footer"]],viewQuery:function(t,n){if(1&t&&e.Gf(Y,5),2&t){let o;e.iGM(o=e.CRH())&&(n.paginator=o.first)}},inputs:{pageSize:"pageSize",length:"length",pageSizeOptions:"pageSizeOptions"},outputs:{pageEventChanged:"pageEventChanged"},decls:2,vars:4,consts:[[3,"pageSize","pageIndex","length","pageSizeOptions","page"],["paginator",""]],template:function(t,n){1&t&&(e.TgZ(0,"mat-paginator",0,1),e.NdJ("page",function(a){return n.onpageEventChange(a)}),e.qZA()),2&t&&e.Q6J("pageSize",n.pageSize)("pageIndex",n.pageIndex)("length",n.length)("pageSizeOptions",n.pageSizeOptions)},directives:[B.NW],styles:[""]}),i})();const $=["content"],V=["header"],X=["footer"];let K=(()=>{class i{constructor(){this.data_=[],this.currentDirData_=[],this.displayMode="list",this.defaultPageSize=10,this.dirChanged=new e.vpe,this.downloadClicked=new e.vpe,this.currentDir="",this.latesPageEvent=null}set data(t){null!=t&&(0,g.diff)(this.data_,t)&&(this.data_=t,this.loadCurrentDirData(this.currentDir))}get data(){return this.data_}get currentDirData(){return this.currentDirData_}onDownloadClicked(t){this.downloadClicked.emit(t)}updateCurrentDir(t,n){var o;n&&(t=n.fullPath),this.currentDir=t,this.loadCurrentDirData(t),0===(null===(o=this.currentDirData_)||void 0===o?void 0:o.length)&&this.refreshCurrentDirData(t),this.header.fullPathFromString=t}loadCurrentDirData(t){let n=t?t.split("/"):[],o=(0,p.cloneDeep)(this.data_);this.accessChildrenAndSetCurrentDirData(o,n,(null==n?void 0:n.length)>0?0:null)}displayModeChaged(t){this.displayMode=t,this.content.changeDiritems(this.currentDirData_)}accessChildrenAndSetCurrentDirData(t,n,o){var a;if(null!=o&&o>=0){let s=t.findIndex(m=>m.name===n[o]);-1===s&&(t.push({name:n[o],isDir:!0,fullPath:n.slice(0,o).join("/"),children:[]}),s=t.findIndex(m=>m.name===n[o])),this.accessChildrenAndSetCurrentDirData(t[s].children,n,o=n.length-1>o?o+1:null)}else this.currentDirData_=t,null===(a=this.content)||void 0===a||a.changeDiritems(t),this.pageEventChanged(this.latesPageEvent)}refreshCurrentDirData(t){this.dirChanged.emit(t)}pageEventChanged(t){var n;(0,g.diff)(this.latesPageEvent,t)&&(this.latesPageEvent=t),t?null===(n=this.content)||void 0===n||n.paginationChanged(null==t?void 0:t.pageIndex,null==t?void 0:t.pageSize):this.content.paginationChanged(0,this.defaultPageSize)}ngOnInit(){}ngAfterViewInit(){this.loadCurrentDirData("")}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-manager"]],viewQuery:function(t,n){if(1&t&&(e.Gf($,5),e.Gf(V,5),e.Gf(X,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.content=o.first),e.iGM(o=e.CRH())&&(n.header=o.first),e.iGM(o=e.CRH())&&(n.footer=o.first)}},outputs:{dirChanged:"dirChanged",downloadClicked:"downloadClicked"},decls:9,vars:5,consts:[["fxLayout","column",1,"navigatorLayout"],[1,"navigatorHeader"],[3,"displayMode","displayModeChanged","directoryChanged"],["header",""],[1,"navigatorContent"],[3,"displayMode","take","folderDoubleClicked","downloadClicked"],["content",""],[1,"navigatorFooter"],[3,"length","pageSize","pageEventChanged"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"app-file-manager-header",2,3),e.NdJ("displayModeChanged",function(a){return n.displayModeChaged(a)})("directoryChanged",function(a){return n.updateCurrentDir(a)}),e.qZA(),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"app-file-manager-content",5,6),e.NdJ("folderDoubleClicked",function(a){return n.updateCurrentDir(null,a)})("downloadClicked",function(a){return n.onDownloadClicked(a)}),e.qZA(),e.qZA(),e.TgZ(7,"div",7),e.TgZ(8,"app-file-manager-footer",8),e.NdJ("pageEventChanged",function(a){return n.pageEventChanged(a)}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("displayMode",n.displayMode),e.xp6(3),e.Q6J("displayMode",n.displayMode)("take",n.defaultPageSize),e.xp6(3),e.Q6J("length",null==n.currentDirData?null:n.currentDirData.length)("pageSize",n.defaultPageSize))},directives:[d.xw,A,U,R],styles:[".navigatorLayout[_ngcontent-%COMP%]{height:100%}.navigatorContent[_ngcontent-%COMP%]{height:100%}"]}),i})();var j=r(1356);const W=["fileManager"];function ee(i,l){if(1&i&&(e.ynx(0),e._UZ(1,"app-notification-bar",7),e.BQk()),2&i){const t=l.$implicit;e.xp6(1),e.Q6J("notificationBar",t)}}const te=[{path:"",component:(()=>{class i{constructor(t,n){this.notificationBarMiddleware=t,this.logsMiddleware=n,this.subscriptions=[],this.dataSource=[],this.hasChild=(o,a)=>!(null==a?void 0:a.children),this.treeOptions={animateExpand:!0,displayField:"name",allowDragoverStyling:!1,allowDrag:!1,allowDrop:!1,actionMapping:{mouse:{click:(o,a,s)=>{this.logsMiddleware.requestLogs(a.data.fullPath),a.isDir&&Z.iM.TOGGLE_EXPANDED(o,a,s)}}}},this.tableData=[],this.notificationBars=[]}downloadClicked(t){this.logsMiddleware.requestLogs(t)}nodeClicked(){}fetchNewDirData(t){this.logsMiddleware.requestLogs(t)}onDownloadClicked(t){this.logsMiddleware.downloadLogs(t.map(n=>n.fullPath))}ngOnInit(){this.subscriptions.push(this.notificationBarMiddleware.notificationBars.subscribe(t=>{this.notificationBars=t}),this.logsMiddleware.logs.subscribe(t=>{var n;t&&this.fileManager&&(0,g.diff)(null===(n=this.fileManager)||void 0===n?void 0:n.data,t)&&(this.fileManager.data=(0,p.cloneDeep)(t))})),this.logsMiddleware.requestLogs("")}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe()),this.logsMiddleware.clearLogs()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(w.Y),e.Y36(_.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-logging"]],viewQuery:function(t,n){if(1&t&&e.Gf(W,5),2&t){let o;e.iGM(o=e.CRH())&&(n.fileManager=o.first)}},decls:7,vars:1,consts:[[1,"page-style",2,"overflow-y","auto","height","100%"],["fxLayout","column",2,"width","100%"],[4,"ngFor","ngForOf"],[1,"outer-div-padding"],[1,"page-components","unselectable","full-width-mobile",2,"height","100%","overflow","auto"],[3,"dirChanged","downloadClicked"],["fileManager",""],[2,"width","100%",3,"notificationBar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,ee,2,1,"ng-container",2),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"app-file-manager",5,6),e.NdJ("dirChanged",function(a){return n.fetchNewDirData(a)})("downloadClicked",function(a){return n.onDownloadClicked(a)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",n.notificationBars))},directives:[d.xw,c.sg,K,j.F],styles:[".table-tab-padding[_ngcontent-%COMP%]{padding:45px 64px}.no-padding[_ngcontent-%COMP%]{padding:0!important}"]}),i})(),data:{animation:"LandingPageAnimation"}},{path:"**",redirectTo:""}];let ne=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[C.Bz.forChild(te)],C.Bz]}),i})();var ie=r(9958);const oe={type:"get_logs",data:{directory:""}};var ae=r(7195);let y=(()=>{class i{constructor(t,n){this.websocketService=t,this.logsMiddlewareService=n,this.logsMiddlewareService.newRequest.subscribe(o=>{null!=o&&null!=o&&this.RequestLogs(o)})}RequestLogs(t){let n=(0,p.cloneDeep)(oe);n.data.directory=t,this.websocketService.sendMessage(n)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(ae.i),e.LFG(_.T))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var le=r(1647),re=r(3065),se=r(8223);let de=(()=>{class i{constructor(t){this.logsApiService=t}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(y))},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[_.T,y,le.h],imports:[[c.ez,re.Aw.forFeature(se.N)]]}),i})(),ce=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[ie.L,ne,de,v.LD]]}),i})()}}]);