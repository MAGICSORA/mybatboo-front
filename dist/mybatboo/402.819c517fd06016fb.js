"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[402],{402:(E,c,t)=>{t.r(c),t.d(c,{OnboardingComponent:()=>h});var l=t(974),p=t(4657),u=t(2704),a=t(5649),C=t(1135),d=t(8505),n=t(2223),O=t(2442),M=t(6814),P=t(4135),f=t(7204),r=t(4755),g=t(3437);function m(e,s){if(1&e&&(n.TgZ(0,"div",12),n._UZ(1,"mp-icon",13),n.TgZ(2,"span"),n._uU(3),n.qZA()()),2&e){const o=s.$implicit;n.xp6(3),n.Oqu(o)}}let h=(()=>{class e extends a.NT{constructor(o,i,_,x){super(),this.navigate=o,this.store$=i,this.router=_,this.toast=x,this.currentUser$=this.store$.select(u.HF),this.status$=new C.X(a.Lr.INITIAL),this.functions=["\uc791\ubb3c \uc774\ubbf8\uc9c0\ub97c \ucd2c\uc601\ud558\uc5ec \ubcd1\ud574 \uc9c4\ub2e8\ud558\uae30","\ub0b4 \uc8fc\ubcc0 \ubcd1\ud574 \ubc1c\uc0dd \uc9c0\ub3c4 \ubcf4\uae30","\uc791\ubb3c \uc9c4\ub2e8 \uae30\ub85d \uad00\ub9ac","\uc9c4\ub2e8 \uacb0\uacfc\uc5d0 \ub300\ud574 \uad81\uae08\ud55c \uc810\uc744 \uc804\ubb38\uac00\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30"]}ngOnInit(){this.subscribeOn(this.currentUser$.pipe((0,a.vC)(this.status$),(0,d.b)(o=>o&&this.router.navigate(["/main"]))))}goToLogin(){this.navigate.openLoginModal()}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(O.o),n.Y36(M.yh),n.Y36(P.F0),n.Y36(f.k))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-onboarding"]],standalone:!0,features:[n.qOj,n.jDz],decls:16,vars:6,consts:[[1,"body-container"],[1,"title-section"],[1,"title"],[1,"description"],[1,"icon-section"],[1,"icon-wrapper"],["name","las la-seedling","type","la","size","160px","color","green"],["name","las la-seedling","type","la","size","160px","color","#8b4513c7"],[1,"content-section"],["class","function",4,"ngFor","ngForOf"],["height","81px"],["color","green","label","\ub85c\uadf8\uc778 / \ud68c\uc6d0\uac00\uc785 \ud558\uae30",3,"loading","click"],[1,"function"],["name","check","type","filled","color","green","backgroundColor","rgba(11,157,89,0.08)","padding","5px","borderRadius","50px","size","18px"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span",2),n._uU(3),n.qZA(),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.TgZ(6,"div",4)(7,"div",5),n._UZ(8,"mp-icon",6),n.qZA(),n.TgZ(9,"div",5),n._UZ(10,"mp-icon",7),n.qZA()(),n.TgZ(11,"div",8),n.YNc(12,m,4,1,"div",9),n.qZA(),n.TgZ(13,"bottom-fixed-bar",10)(14,"mp-button",11),n.NdJ("click",function(){return i.goToLogin()}),n.ALo(15,"async"),n.qZA()()()),2&o&&(n.xp6(3),n.Oqu("\ub85c\uadf8\uc778\ud558\uace0 \n \uc791\ubb3c\uc744 \uc9c4\ub2e8\ud574\ubcf4\uc138\uc694!"),n.xp6(2),n.Oqu("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4."),n.xp6(7),n.Q6J("ngForOf",i.functions),n.xp6(2),n.Q6J("loading",n.lcZ(15,4,i.status$).pending))},dependencies:[l.B,r.sg,g.zJ,g.gL,r.Ov,p.N],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .body-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:var(--full-height);padding:24px}[_nghost-%COMP%]   .title-section[_ngcontent-%COMP%]{margin-top:44px;display:flex;flex-direction:column;gap:16px;font-size:24px;color:var(--grayDarker);font-weight:700;white-space:pre-line}[_nghost-%COMP%]   .title-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:16px;color:var(--gray);font-weight:500}[_nghost-%COMP%]   .icon-section[_ngcontent-%COMP%]{margin-top:44px;display:flex;width:160px;height:160px;align-self:center;position:relative}[_nghost-%COMP%]   .icon-section[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{position:absolute}[_nghost-%COMP%]   .icon-section[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:first-of-type{top:0;left:0;overflow:hidden;z-index:3;height:100.5px;background:white}[_nghost-%COMP%]   .icon-section[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:last-of-type{top:0;left:0;overflow:hidden;z-index:2}[_nghost-%COMP%]   .content-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:16px;padding:24px}[_nghost-%COMP%]   .content-section[_ngcontent-%COMP%]   .function[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;font-size:15px;color:var(--grayDark);font-weight:500}[_nghost-%COMP%]   bottom-fixed-bar[_ngcontent-%COMP%]{padding:12px 24px;display:flex;justify-content:space-between;align-items:center;gap:16px}[_nghost-%COMP%]   bottom-fixed-bar[_ngcontent-%COMP%]   mp-button[_ngcontent-%COMP%]{flex:1}']}),e})()}}]);