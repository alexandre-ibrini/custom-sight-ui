"use strict";(self.webpackChunkros_fe_poc=self.webpackChunkros_fe_poc||[]).push([[235],{7746:(F,C,m)=>{m.d(C,{i$:()=>U,Tg:()=>W,ie:()=>N});var s=m(8583),i=m(7716),d=m(2458),u=m(9490),f=m(9765),g=m(6782),y=(m(9761),m(9238),m(8345),m(6461),m(3679),m(1769));const v=["*"],c=[[["","mat-list-avatar",""],["","mat-list-icon",""],["","matListAvatar",""],["","matListIcon",""]],[["","mat-line",""],["","matLine",""]],"*"],b=["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]","[mat-line], [matLine]","*"],I=(0,d.Id)((0,d.Kr)(class{})),K=(0,d.Kr)(class{}),T=new i.OlP("MatList"),k=new i.OlP("MatNavList");let U=(()=>{class a extends I{constructor(t){super(),this._elementRef=t,this._stateChanges=new f.xQ,"action-list"===this._getListType()&&t.nativeElement.classList.add("mat-action-list")}_getListType(){const t=this._elementRef.nativeElement.nodeName.toLowerCase();return"mat-list"===t?"list":"mat-action-list"===t?"action-list":null}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq))},a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-list"],["mat-action-list"]],hostAttrs:[1,"mat-list","mat-list-base"],inputs:{disableRipple:"disableRipple",disabled:"disabled"},exportAs:["matList"],features:[i._Bn([{provide:T,useExisting:a}]),i.qOj,i.TTD],ngContentSelectors:v,decls:1,vars:0,template:function(t,e){1&t&&(i.F$t(),i.Hsn(0))},styles:['.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n'],encapsulation:2,changeDetection:0}),a})(),P=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-list-avatar",""],["","matListAvatar",""]],hostAttrs:[1,"mat-list-avatar"]}),a})(),S=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-list-icon",""],["","matListIcon",""]],hostAttrs:[1,"mat-list-icon"]}),a})(),W=(()=>{class a extends K{constructor(t,e,n,l){super(),this._element=t,this._isInteractiveList=!1,this._destroyed=new f.xQ,this._disabled=!1,this._isInteractiveList=!!(n||l&&"action-list"===l._getListType()),this._list=n||l;const p=this._getHostElement();"button"===p.nodeName.toLowerCase()&&!p.hasAttribute("type")&&p.setAttribute("type","button"),this._list&&this._list._stateChanges.pipe((0,g.R)(this._destroyed)).subscribe(()=>{e.markForCheck()})}get disabled(){return this._disabled||!(!this._list||!this._list.disabled)}set disabled(t){this._disabled=(0,u.Ig)(t)}ngAfterContentInit(){(0,d.E0)(this._lines,this._element)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_isRippleDisabled(){return!this._isInteractiveList||this.disableRipple||!(!this._list||!this._list.disableRipple)}_getHostElement(){return this._element.nativeElement}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(k,8),i.Y36(T,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,P,5),i.Suo(n,S,5),i.Suo(n,d.X2,5)),2&t){let l;i.iGM(l=i.CRH())&&(e._avatar=l.first),i.iGM(l=i.CRH())&&(e._icon=l.first),i.iGM(l=i.CRH())&&(e._lines=l)}},hostAttrs:[1,"mat-list-item","mat-focus-indicator"],hostVars:6,hostBindings:function(t,e){2&t&&i.ekj("mat-list-item-disabled",e.disabled)("mat-list-item-avatar",e._avatar||e._icon)("mat-list-item-with-avatar",e._avatar||e._icon)},inputs:{disableRipple:"disableRipple",disabled:"disabled"},exportAs:["matListItem"],features:[i.qOj],ngContentSelectors:b,decls:6,vars:2,consts:[[1,"mat-list-item-content"],["mat-ripple","",1,"mat-list-item-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-list-text"]],template:function(t,e){1&t&&(i.F$t(c),i.TgZ(0,"div",0),i._UZ(1,"div",1),i.Hsn(2),i.TgZ(3,"div",2),i.Hsn(4,1),i.qZA(),i.Hsn(5,2),i.qZA()),2&t&&(i.xp6(1),i.Q6J("matRippleTrigger",e._getHostElement())("matRippleDisabled",e._isRippleDisabled()))},directives:[d.wG],encapsulation:2,changeDetection:0}),a})(),N=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[d.uc,d.si,d.BQ,d.us,s.ez],d.uc,d.BQ,d.us,y.t]}),a})()},7963:(F,C,m)=>{m.d(C,{s:()=>x});var s=m(7716),i=m(3679),d=m(7093),u=m(8583),f=m(5396),g=m(1436),O=m(8295),M=m(9983),L=m(1095);function _(c,b){if(1&c&&(s.TgZ(0,"div",8),s._UZ(1,"i",9),s.qZA()),2&c){const r=s.oxw();s.xp6(1),s.Q6J("matTooltip",r.info)}}function w(c,b){if(1&c&&(s.TgZ(0,"div"),s.TgZ(1,"span",10),s._uU(2),s.qZA(),s.qZA()),2&c){const r=s.oxw();s.xp6(2),s.Oqu(r.description)}}function y(c,b){if(1&c){const r=s.EpF();s.TgZ(0,"div",11),s.TgZ(1,"mat-form-field"),s._UZ(2,"input",12),s.qZA(),s.TgZ(3,"button",13),s.NdJ("click",function(){return s.CHM(r),s.oxw().onInputActionClicked()}),s._uU(4," Start Test"),s.qZA(),s.qZA()}if(2&c){const r=s.oxw();s.xp6(2),s.Q6J("disabled",r.disabled)("placeholder",r.inputAction.inputPlaceholder)("formControl",r.inputValue)}}const v=function(c){return{"show-active":c}};let x=(()=>{class c{constructor(){this.title="",this.description="",this.showActive=!1,this.slideText="",this.slideAction=new s.vpe,this.inputActionEmit=new s.vpe,this.disabled=!1,this.initialValue=!1,this.info=null,this.slideTextDisabled="",this.inputValue=new i.NI("",[i.kI.required])}ngOnInit(){var r;this.slideTextDisabled||(this.slideTextDisabled=this.slideText),this.state=this.initialValue,(null===(r=this.inputAction)||void 0===r?void 0:r.input)&&this.inputValue.setValue(this.inputAction.input)}onSlideChange(r){this.state=r.checked,this.slideAction.emit(r.checked)}onInputActionClicked(){this.inputActionEmit.emit(this.inputValue.value)}}return c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-switch-tile"]],inputs:{title:"title",description:"description",showActive:"showActive",slideText:"slideText",inputAction:"inputAction",disabled:"disabled",initialValue:"initialValue",info:"info",slideTextDisabled:"slideTextDisabled"},outputs:{slideAction:"slideAction",inputActionEmit:"inputActionEmit"},decls:10,vars:10,consts:[["fxLayout","column",1,"switch-tile"],["fxLayoutAlign","end center",4,"ngIf"],["fxLayoutAlign","start center"],[1,"component-title"],[4,"ngIf"],[2,"margin-top","25px",3,"ngClass"],[3,"disabled","checked","change"],["fxLayout","column","style","margin-top: 20px",4,"ngIf"],["fxLayoutAlign","end center"],[1,"bi","bi-info-circle-fill",2,"cursor","pointer",3,"matTooltip"],[1,"component-description",2,"color","#425466"],["fxLayout","column",2,"margin-top","20px"],["matInput","",3,"disabled","placeholder","formControl"],["mat-flat-button","","color","accent",3,"click"]],template:function(r,h){1&r&&(s.TgZ(0,"div",0),s.YNc(1,_,2,1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"span",3),s._uU(4),s.qZA(),s.qZA(),s.YNc(5,w,3,1,"div",4),s.TgZ(6,"div",5),s.TgZ(7,"mat-slide-toggle",6),s.NdJ("change",function(D){return h.onSlideChange(D)}),s._uU(8),s.qZA(),s.qZA(),s.YNc(9,y,5,3,"div",7),s.qZA()),2&r&&(s.xp6(1),s.Q6J("ngIf",h.info),s.xp6(3),s.Oqu(h.title),s.xp6(1),s.Q6J("ngIf",h.description),s.xp6(1),s.Q6J("ngClass",s.VKq(8,v,h.showActive)),s.xp6(1),s.Q6J("disabled",h.disabled)("checked",h.state),s.xp6(1),s.hij("",h.state?h.slideText:h.slideTextDisabled," "),s.xp6(1),s.Q6J("ngIf",h.inputAction))},directives:[d.xw,u.O5,d.Wh,u.mk,f.Rr,g.gM,O.KE,M.Nt,i.Fj,i.JJ,i.oH,L.lW],styles:[".switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle-bar{height:23px!important;border-radius:11px!important;width:39px!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle-thumb{height:16px!important;width:16px!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle-thumb-container{top:3px!important;left:3px!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile.mat-slide-toggle-content{font-size:14px}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:var(--accent-color)!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .show-active .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#00ff8b!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .show-active .mat-checked .mat-slide-toggle-content{color:#00ff8b!important}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline .mat-form-field-infix{padding:6.5px 0}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline.grey-input .mat-form-field-outline{background:#EDF2F7;border-radius:5px}.switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline .mat-form-field-outline-end, .switch-tile[_ngcontent-%COMP%]  .switch-tile .mat-form-field-appearance-outline .mat-form-field-outline-start{border:none!important}@media screen and (max-width: 320px){.manual-action-input[_ngcontent-%COMP%]{width:134px!important}}"]}),c})()}}]);