"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[9062],{9062:(T,_,i)=>{i.r(_),i.d(_,{MyPageComponent:()=>Z});var u=i(974),m=i(2704),p=i(8505),g=i(4545),s=i(9300),n=i(2223),l=i(6814),a=i(3437),c=i(4755),d=i(4135),x=i(9972);function C(o,e){1&o&&n._UZ(0,"mp-divider",12)}function M(o,e){if(1&o&&(n.ynx(0),n.YNc(1,C,1,0,"mp-divider",8),n.TgZ(2,"a",9),n._UZ(3,"mp-icon",10),n.TgZ(4,"span"),n._uU(5),n.qZA(),n._UZ(6,"mp-icon",11),n.qZA(),n.BQk()),2&o){const t=e.$implicit,r=e.index;n.xp6(1),n.Q6J("ngIf",0!==r),n.xp6(1),n.Q6J("routerLink",t.routerLink),n.xp6(1),n.Q6J("name",t.icon),n.xp6(2),n.Oqu(t.name)}}const f=function(){return["/expert"]};function h(o,e){1&o&&(n.ynx(0),n.TgZ(1,"mp-text",7),n._uU(2,"\uc804\ubb38\uac00 \uae30\ub2a5"),n.qZA(),n.TgZ(3,"div",5)(4,"a",9),n._UZ(5,"mp-icon",10),n.TgZ(6,"span"),n._uU(7,"\uc9c4\ub2e8 \ubb38\uc758 \uad00\ub9ac"),n.qZA(),n._UZ(8,"mp-icon",11),n.qZA()(),n.BQk()),2&o&&(n.xp6(1),n.Udp("margin-top","36px"),n.xp6(3),n.Q6J("routerLink",n.DdM(4,f)),n.xp6(1),n.Q6J("name","list_alt"))}const P=function(){return["/admin"]};function O(o,e){1&o&&(n.ynx(0),n.TgZ(1,"mp-text",7),n._uU(2,"\uad00\ub9ac\uc790 \uae30\ub2a5"),n.qZA(),n.TgZ(3,"div",5)(4,"a",9),n._UZ(5,"mp-icon",10),n.TgZ(6,"span"),n._uU(7,"\uc720\uc800 \uad00\ub9ac"),n.qZA(),n._UZ(8,"mp-icon",11),n.qZA()(),n.BQk()),2&o&&(n.xp6(1),n.Udp("margin-top","36px"),n.xp6(3),n.Q6J("routerLink",n.DdM(4,P)),n.xp6(1),n.Q6J("name","group"))}function y(o,e){1&o&&n._UZ(0,"mp-divider",12)}function A(o,e){if(1&o){const t=n.EpF();n.ynx(0),n.YNc(1,y,1,0,"mp-divider",8),n.TgZ(2,"div",13),n.NdJ("click",function(){const U=n.CHM(t).$implicit,E=n.oxw(2);return n.KtG(E.accountAction(U.action))}),n._UZ(3,"mp-icon",14),n.TgZ(4,"span"),n._uU(5),n.qZA(),n._UZ(6,"mp-icon",15),n.qZA(),n.BQk()}if(2&o){const t=e.$implicit,r=e.index;n.xp6(1),n.Q6J("ngIf",0!==r),n.xp6(2),n.Q6J("name",t.icon)("color",t.color),n.xp6(1),n.Udp("color","var(--"+t.color+")"),n.xp6(1),n.Oqu(t.name),n.xp6(1),n.Q6J("color",t.color)}}function v(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"div",1)(2,"div",2)(3,"span"),n._uU(4),n.qZA(),n._uU(5," \ub2d8 "),n.qZA(),n.TgZ(6,"span",3),n._UZ(7,"mp-icon",4),n._uU(8),n.qZA()(),n.TgZ(9,"div",5),n.YNc(10,M,7,4,"ng-container",6),n.qZA(),n.YNc(11,h,9,5,"ng-container",0),n.YNc(12,O,9,5,"ng-container",0),n.TgZ(13,"mp-text",7),n._uU(14,"\uacc4\uc815"),n.qZA(),n.TgZ(15,"div",5),n.YNc(16,A,7,7,"ng-container",6),n.qZA(),n.BQk()),2&o){const t=e.ngIf,r=n.oxw();n.xp6(4),n.Oqu(t.name),n.xp6(4),n.hij(" \uc774\uba54\uc77c: ",t.email," "),n.xp6(1),n.Udp("margin-top","36px"),n.xp6(1),n.Q6J("ngForOf",r.pageMenus),n.xp6(1),n.Q6J("ngIf",2===t.authLevel),n.xp6(1),n.Q6J("ngIf",3===t.authLevel),n.xp6(1),n.Udp("margin-top","36px"),n.xp6(3),n.Q6J("ngForOf",r.accountMenus)}}let Z=(()=>{class o{constructor(t,r){this.store=t,this.alert=r,this.currentUser$=this.store.select(m.HF),this.pageMenus=[{name:"\uc791\ubb3c \uad00\ub9ac",routerLink:["category"],icon:"topic"},{name:"\uc804\ubb38\uac00 \ubb38\uc758",routerLink:["inquiry"],icon:"contact_support"}],this.accountMenus=[{name:"\ub85c\uadf8\uc544\uc6c3",action:"logout",icon:"logout",color:"grayDark"},{name:"\ud68c\uc6d0 \ud0c8\ud1f4",action:"withdraw",icon:"person_remove",color:"redLight"}]}accountAction(t){switch(t){case"logout":this.logout();break;case"withdraw":this.deleteAccount()}}logout(){this.alert.confirm({title:"\ub85c\uadf8\uc544\uc6c3",content:"\ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmMessage:"\ub85c\uadf8\uc544\uc6c3",cancelMessage:"\ucde8\uc18c",confirmButtonColor:"red"}).pipe((0,s.h)(t=>!!t),(0,p.b)(()=>this.store.dispatch(g.q.logout()))).subscribe()}deleteAccount(){this.alert.confirm({title:"\ud68c\uc6d0 \ud0c8\ud1f4",content:"\uacc4\uc815\uc744 \ud0c8\ud1f4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmMessage:"\ud0c8\ud1f4",cancelMessage:"\ucde8\uc18c",confirmButtonColor:"red"}).pipe((0,s.h)(t=>!!t),(0,p.b)(()=>this.store.dispatch(g.q.deleteAccount()))).subscribe()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(l.yh),n.Y36(a.c9))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-my-page"]],standalone:!0,features:[n.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"user-info"],[1,"name"],[1,"email"],["name","email","type","outlined"],[1,"menu-wrapper"],[4,"ngFor","ngForOf"],[1,"menu-title"],["height","12px","direction","horizontal","color","grayLighter",4,"ngIf"],[1,"menu-option",3,"routerLink"],["left","","size","24px","type","outlined","color","gray",3,"name"],["right","","name","chevron_right","size","24px","color","gray"],["height","12px","direction","horizontal","color","grayLighter"],[1,"menu-option",3,"click"],["left","","size","24px","type","outlined",3,"name","color"],["right","","name","chevron_right","size","24px",3,"color"]],template:function(t,r){1&t&&(n.YNc(0,v,17,10,"ng-container",0),n.ALo(1,"async")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,r.currentUser$))},dependencies:[u.B,c.sg,c.O5,d.rH,x.Fo,a.zJ,a.OQ,a.VO,a.k_,a.vS,c.Ov],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:flex;flex-direction:column;padding:36px 16px 24px}[_nghost-%COMP%]   page-header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #0000001f}[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;padding:0 8px}[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:22px;color:var(--gray);font-weight:600}[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:26px;color:var(--grayDarker);font-weight:600}[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{font-size:13px;color:var(--gray);font-weight:500;display:flex;gap:4px}[_nghost-%COMP%]   .menu-title[_ngcontent-%COMP%]{font-size:14px;color:var(--gray);font-weight:500;padding:0 0 8px 4px}[_nghost-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:6px 0;border-radius:8px;border:1px solid var(--grayLighter)}[_nghost-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .menu-option[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;gap:8px;padding:8px 12px;font-size:16px;color:var(--grayDark);font-weight:500}[_nghost-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .menu-option[_ngcontent-%COMP%]:active{background-color:var(--hoverWeak)}[_nghost-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .menu-option[_ngcontent-%COMP%]   mp-icon.right[_ngcontent-%COMP%]{margin-left:auto}']}),o})()}}]);