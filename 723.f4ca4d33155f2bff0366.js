(self.webpackChunkideal_app=self.webpackChunkideal_app||[]).push([[723],{9083:function(S,B,d){var s,y;y=function(_){var a=["N","E","A","D"];function y(t,i){t.super_=i,t.prototype=Object.create(i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}function h(t,i){Object.defineProperty(this,"kind",{value:t,enumerable:!0}),i&&i.length&&Object.defineProperty(this,"path",{value:i,enumerable:!0})}function D(t,i,e){D.super_.call(this,"E",t),Object.defineProperty(this,"lhs",{value:i,enumerable:!0}),Object.defineProperty(this,"rhs",{value:e,enumerable:!0})}function C(t,i){C.super_.call(this,"N",t),Object.defineProperty(this,"rhs",{value:i,enumerable:!0})}function A(t,i){A.super_.call(this,"D",t),Object.defineProperty(this,"lhs",{value:i,enumerable:!0})}function P(t,i,e){P.super_.call(this,"A",t),Object.defineProperty(this,"index",{value:i,enumerable:!0}),Object.defineProperty(this,"item",{value:e,enumerable:!0})}function T(t,i,e){var n=t.slice((e||i)+1||t.length);return t.length=i<0?t.length+i:i,t.push.apply(t,n),t}function O(t){var i=typeof t;return"object"!==i?i:t===Math?"math":null===t?"null":Array.isArray(t)?"array":"[object Date]"===Object.prototype.toString.call(t)?"date":"function"==typeof t.toString&&/^\/.*\//.test(t.toString())?"regexp":"object"}function v(t){var i=0;if(0===t.length)return i;for(var e=0;e<t.length;e++)i=(i<<5)-i+t.charCodeAt(e),i&=i;return i}function b(t){var i=0,e=O(t);if("array"===e)return t.forEach(function(E){i+=b(E)}),i+v("[type: array, hash: "+i+"]");if("object"===e){for(var r in t)if(t.hasOwnProperty(r)){var f="[ type: object, key: "+r+", value hash: "+b(t[r])+"]";i+=v(f)}return i}return i+v("[ type: "+e+" ; value: "+t+"]")}function u(t,i,e,n,r,f,o,E){e=e||[],o=o||[];var p=(r=r||[]).slice(0);if(null!=f){if(n){if("function"==typeof n&&n(p,f))return;if("object"==typeof n){if(n.prefilter&&n.prefilter(p,f))return;if(n.normalize){var j=n.normalize(p,f,t,i);j&&(t=j[0],i=j[1])}}}p.push(f)}"regexp"===O(t)&&"regexp"===O(i)&&(t=t.toString(),i=i.toString());var l,M,m,N,R=typeof t,Q=typeof i,K="undefined"!==R||o&&o.length>0&&o[o.length-1].lhs&&Object.getOwnPropertyDescriptor(o[o.length-1].lhs,f),Z="undefined"!==Q||o&&o.length>0&&o[o.length-1].rhs&&Object.getOwnPropertyDescriptor(o[o.length-1].rhs,f);if(!K&&Z)e.push(new C(p,i));else if(!Z&&K)e.push(new A(p,t));else if(O(t)!==O(i))e.push(new D(p,t,i));else if("date"===O(t)&&t-i!=0)e.push(new D(p,t,i));else if("object"===R&&null!==t&&null!==i){for(l=o.length-1;l>-1;--l)if(o[l].lhs===t){N=!0;break}if(N)t!==i&&e.push(new D(p,t,i));else{if(o.push({lhs:t,rhs:i}),Array.isArray(t)){for(E&&(t.sort(function(k,U){return b(k)-b(U)}),i.sort(function(k,U){return b(k)-b(U)})),l=i.length-1,M=t.length-1;l>M;)e.push(new P(p,l,new C(void 0,i[l--])));for(;M>l;)e.push(new P(p,M,new A(void 0,t[M--])));for(;l>=0;--l)u(t[l],i[l],e,n,p,l,o,E)}else{var H=Object.keys(t),I=Object.keys(i);for(l=0;l<H.length;++l)(N=I.indexOf(m=H[l]))>=0?(u(t[m],i[m],e,n,p,m,o,E),I[N]=null):u(t[m],void 0,e,n,p,m,o,E);for(l=0;l<I.length;++l)(m=I[l])&&u(void 0,i[m],e,n,p,m,o,E)}o.length=o.length-1}}else t!==i&&("number"===R&&isNaN(t)&&isNaN(i)||e.push(new D(p,t,i)))}function c(t,i,e,n,r){var f=[];if(u(t,i,f,n,null,null,null,r),e)for(var o=0;o<f.length;++o)e(f[o]);return f}function w(t,i,e,n){var f=c(t,i,n?function(o){o&&n.push(o)}:void 0,e);return n||(f.length?f:void 0)}function W(t,i,e){if(e.path&&e.path.length){var r,n=t[i],f=e.path.length-1;for(r=0;r<f;r++)n=n[e.path[r]];switch(e.kind){case"A":W(n[e.path[r]],e.index,e.item);break;case"D":delete n[e.path[r]];break;case"E":case"N":n[e.path[r]]=e.rhs}}else switch(e.kind){case"A":W(t[i],e.index,e.item);break;case"D":t=T(t,i);break;case"E":case"N":t[i]=e.rhs}return t}function F(t,i,e){if(void 0===e&&i&&~a.indexOf(i.kind)&&(e=i),t&&e&&e.kind){for(var n=t,r=-1,f=e.path?e.path.length-1:0;++r<f;)void 0===n[e.path[r]]&&(n[e.path[r]]=void 0!==e.path[r+1]&&"number"==typeof e.path[r+1]?[]:{}),n=n[e.path[r]];switch(e.kind){case"A":e.path&&void 0===n[e.path[r]]&&(n[e.path[r]]=[]),W(e.path?n[e.path[r]]:n,e.index,e.item);break;case"D":delete n[e.path[r]];break;case"E":case"N":n[e.path[r]]=e.rhs}}}function L(t,i,e){if(e.path&&e.path.length){var r,n=t[i],f=e.path.length-1;for(r=0;r<f;r++)n=n[e.path[r]];switch(e.kind){case"A":L(n[e.path[r]],e.index,e.item);break;case"D":case"E":n[e.path[r]]=e.lhs;break;case"N":delete n[e.path[r]]}}else switch(e.kind){case"A":L(t[i],e.index,e.item);break;case"D":case"E":t[i]=e.lhs;break;case"N":t=T(t,i)}return t}return y(D,h),y(C,h),y(A,h),y(P,h),Object.defineProperties(w,{diff:{value:w,enumerable:!0},orderIndependentDiff:{value:function(t,i,e,n){var f=c(t,i,n?function(o){o&&n.push(o)}:void 0,e,!0);return n||(f.length?f:void 0)},enumerable:!0},observableDiff:{value:c,enumerable:!0},orderIndependentObservableDiff:{value:function(t,i,e,n,r,f,o){return u(t,i,e,n,r,f,o,!0)},enumerable:!0},orderIndepHash:{value:b,enumerable:!0},applyDiff:{value:function(t,i,e){t&&i&&c(t,i,function(r){(!e||e(t,i,r))&&F(t,i,r)})},enumerable:!0},applyChange:{value:F,enumerable:!0},revertChange:{value:function(t,i,e){if(t&&i&&e&&e.kind){var r,f,n=t;for(f=e.path.length-1,r=0;r<f;r++)void 0===n[e.path[r]]&&(n[e.path[r]]={}),n=n[e.path[r]];switch(e.kind){case"A":L(n[e.path[r]],e.index,e.item);break;case"D":case"E":n[e.path[r]]=e.lhs;break;case"N":delete n[e.path[r]]}}},enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof $conflict},enumerable:!0}}),w.DeepDiff=w,_&&(_.DeepDiff=w),w}(this),void 0!==(s=function(){return y}.call(B,d,B,S))&&(S.exports=s)},5720:(S,B,d)=>{"use strict";d.d(B,{B:()=>_});var s=d(7238);const _=(0,s.X$)("simpleFadeAnimation",[(0,s.SB)("in",(0,s.oB)({opacity:1})),(0,s.eR)(":enter",[(0,s.oB)({opacity:0}),(0,s.jt)(600)]),(0,s.eR)(":leave",(0,s.jt)(600,(0,s.oB)({opacity:0})))])},4244:(S,B,d)=>{"use strict";d.d(B,{F:()=>O});var s=d(5720),_=d(3772),a=d(7716),y=d(1327),h=d(6986),D=d(5618),C=d(8583),A=d(249);function P(v,b){if(1&v){const u=a.EpF();a.TgZ(0,"div",3),a.NdJ("click",function(){a.CHM(u);const x=a.oxw();return x.closeClicked(x.notificationBar.id)}),a._UZ(1,"i",4),a.qZA()}}const T=function(v){return[v]};let O=(()=>{class v{constructor(u,c){this.notificationBarMiddleware=u,this.appShellService=c,this.notificationBar={closable:!1,id:"",content:"",timer:null,severity:-1},this.iconClass="bi-info",this.outerDivSeverityClass="outerDivInfo",this.severityEnum=_.l,this.isSideNavOpened=!1}setClassesFromSeverity(){switch(this.notificationBar.severity){case _.l.INFO:this.iconClass="bi-info-circle",this.outerDivSeverityClass="outerDivInfo";break;case _.l.WARNING:this.iconClass="bi-exclamation-circle",this.outerDivSeverityClass="outerDivWarning";break;case _.l.FATAL:this.iconClass="bi-x-circle fatal-icon",this.outerDivSeverityClass="outerDivFatal"}}closeClicked(u){this.notificationBarMiddleware.removeNotificationBar(u)}ngOnInit(){this.appShellService.sideNavOpenedStatus.subscribe(u=>{this.isSideNavOpened=u}),this.setClassesFromSeverity(),this.notificationBar.timer&&this.notificationBar.timer>0&&setTimeout(()=>this.notificationBarMiddleware.removeNotificationBar(this.notificationBar.id),this.notificationBar.timer)}}return v.\u0275fac=function(u){return new(u||v)(a.Y36(y.Y),a.Y36(h.c))},v.\u0275cmp=a.Xpm({type:v,selectors:[["app-notification-bar"]],inputs:{notificationBar:"notificationBar"},decls:6,vars:10,consts:[["fxLayout","row","fxLayoutAlign","space-between center",3,"ngClass"],["fxLayoutAlign","start center","fxLayoutGap","20px"],["style","cursor:pointer",3,"click",4,"ngIf"],[2,"cursor","pointer",3,"click"],[1,"bi","bi-x"]],template:function(u,c){1&u&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._UZ(2,"i"),a.TgZ(3,"span"),a._uU(4),a.qZA(),a.qZA(),a.YNc(5,P,2,0,"div",2),a.qZA()),2&u&&(a.Tol("notificationBarOuterDiv "+c.outerDivSeverityClass),a.Q6J("@simpleFadeAnimation","in")("ngClass",a.VKq(8,T,c.isSideNavOpened?"outerDivWidthOpened":"outerDivWidthClosed")),a.xp6(2),a.Tol("bi "+c.iconClass),a.xp6(2),a.Oqu(c.notificationBar.content),a.xp6(1),a.Q6J("ngIf",c.notificationBar.closable))},directives:[D.xw,D.Wh,C.mk,A.oO,D.SQ,C.O5],styles:[".notificationBarOuterDiv[_ngcontent-%COMP%]{background-color:#ededed;min-height:32px;padding:0 16px;position:sticky;z-index:100;color:#fff;width:100%}.fatal-icon[_ngcontent-%COMP%]{color:#fff}.warning-icon[_ngcontent-%COMP%]{color:#fff}.info-icon[_ngcontent-%COMP%]{color:#fff}.outerDivInfo[_ngcontent-%COMP%]{background-color:#e4ecf7!important;color:#000}.outerDivWarning[_ngcontent-%COMP%]{background-color:#ffba7d!important;color:#fff}.outerDivFatal[_ngcontent-%COMP%]{background-color:#ff7d7d!important;color:#fff}"],data:{animation:[s.B]}}),v})()}}]);