"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[4794,4650],{8054:(J,P,t)=>{t.d(P,{u:()=>R});var r=t(974),u=t(9401),f=t(5649),M=t(4650),v=t(50),y=t(9282),g=t(6921),h=t(4657),b=t(1135),_=t(8505),e=t(2223),s=t(8740),m=t(8615),O=t(5800),I=t(1757),x=t(4755);function D(c,d){if(1&c){const n=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){const p=e.CHM(n).$implicit,o=e.oxw(2);return e.KtG(o.select(p))}),e._UZ(1,"img",6)(2,"crop-type-badge",7),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"diseaseName"),e.qZA(),e.TgZ(6,"span"),e._uU(7),e.ALo(8,"date"),e.qZA()()}if(2&c){const n=d.$implicit;e.xp6(1),e.Q6J("src",n.imagePath,e.LSH),e.xp6(1),e.Q6J("cropType",n.cropType),e.xp6(2),e.hij("\ubcd1\ud574\uba85: ",e.lcZ(5,4,n.diagnosisResults[0].diseaseCode),""),e.xp6(3),e.hij("\uc9c4\ub2e8\uc77c: ",e.xi3(8,6,n.regDate,"yyyy.MM.dd HH:mm"),"")}}function B(c,d){if(1&c){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",8)(2,"span"),e._uU(3,"\uc544\uc9c1 \uc791\ubb3c\uc744 \uc9c4\ub2e8\ud55c \uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),e.qZA(),e.TgZ(4,"mp-button",9),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2);return e.KtG(i.goToDiagnosis())}),e._UZ(5,"mp-icon",10),e.qZA()(),e.BQk()}}function A(c,d){if(1&c&&(e.ynx(0),e.TgZ(1,"div",3),e.YNc(2,D,9,9,"div",4),e.qZA(),e.YNc(3,B,6,0,"ng-container",2),e.BQk()),2&c){const n=d.ngIf;e.xp6(2),e.Q6J("ngForOf",n),e.xp6(1),e.Q6J("ngIf",0===(null==n?null:n.length))}}let Z=(()=>{class c{constructor(n,a,i,p,o){this.modalRef=n,this.api=a,this.diagnosis=i,this.router=p,this.modalService=o,this.recordList$=this.api.loadUserDiagnosisRecords()}close(){this.modalRef.hide()}goToDiagnosis(){this.router.navigate(["/main"]).then(()=>{this.modalRef.hide(),this.diagnosis.startDiagnosis()})}select(n){this.selectedRecord=n,this.close()}}return c.\u0275fac=function(n){return new(n||c)(e.Y36(s.UZ),e.Y36(m.s),e.Y36(O.r),e.Y36(I.F0),e.Y36(s.tT))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-inquiry-record-select-modal"]],standalone:!0,features:[e.jDz],decls:4,vars:4,consts:[["height","64px",3,"title"],["left","","iconName","close","size","m","variant","void","color","grayDark",3,"click"],[4,"ngIf"],[1,"record-container"],["class","record-item",3,"click",4,"ngFor","ngForOf"],[1,"record-item",3,"click"],[3,"src"],[3,"cropType"],[1,"empty"],["label","\uc791\ubb3c \uc9c4\ub2e8\ud558\uae30","color","green","size","m",3,"click"],["left","","name","add_to_photos"]],template:function(n,a){1&n&&(e.TgZ(0,"page-header",0)(1,"mp-icon-button",1),e.NdJ("click",function(){return a.close()}),e.qZA()(),e.YNc(2,A,4,2,"ng-container",2),e.ALo(3,"async")),2&n&&(e.Q6J("title","\uc9c4\ub2e8 \uae30\ub85d \uc120\ud0dd"),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,2,a.recordList$)))},dependencies:[r.B,x.sg,x.O5,g.zJ,g.KT,g.gL,g.k_,x.Ov,x.uU,M.q,v.Y,y.A],styles:['@charset "UTF-8";.bottom-sheet[_nghost-%COMP%], .bottom-sheet   [_nghost-%COMP%]{height:auto;max-height:auto!important}[_nghost-%COMP%]{padding-top:var(--page-header-height);padding-bottom:var(--bottom-fixed-bar-height)}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]   page-header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #0000001f}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;grid-row-gap:12px;padding:12px 20px 24px}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:12px;gap:12px;border-radius:12px;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;width:100%;height:auto;aspect-ratio:1;border-radius:12px}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:var(--gray);font-weight:500}[_nghost-%COMP%]   .empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;padding-bottom:36px;font-size:18px;color:var(--gray);font-weight:500}']}),c})();var U=t(5698),L=t(7204);function T(c,d){if(1&c){const n=e.EpF();e.TgZ(0,"div",13),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.openRecordSelector())}),e._UZ(1,"mp-icon",14),e.TgZ(2,"span"),e._uU(3,"\ubb38\uc758\ud560 \uc9c4\ub2e8 \uae30\ub85d\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),e.qZA()()}}function w(c,d){if(1&c&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&c){const n=e.oxw(2);e.xp6(1),e.hij("\uc678 ",(null==n.form.record.value?null:n.form.record.value.diagnosisResults.length)-1," \uac1c")}}function k(c,d){if(1&c){const n=e.EpF();e.TgZ(0,"div",15),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.openRecordSelector())}),e._UZ(1,"img",16),e.TgZ(2,"div",17)(3,"div",18),e._UZ(4,"crop-type-badge",19),e.TgZ(5,"span"),e._uU(6),e.ALo(7,"date"),e.qZA()(),e.TgZ(8,"div",18),e._uU(9),e.ALo(10,"diseaseName"),e.YNc(11,w,2,1,"span",20),e.qZA()()()}if(2&c){const n=e.oxw();e.xp6(1),e.Q6J("src",null==n.form.record.value?null:n.form.record.value.imagePath,e.LSH)("alt","\uc791\ubb3c \uc774\ubbf8\uc9c0"),e.xp6(3),e.Q6J("cropType",null==n.form.record.value?null:n.form.record.value.cropType),e.xp6(2),e.Oqu(e.xi3(7,7,null==n.form.record.value?null:n.form.record.value.regDate,"yyyy.MM.dd HH:mm")),e.xp6(3),e.AsE(" \ubcd1\ud574: ",e.lcZ(10,10,null==n.form.record.value||null==n.form.record.value.diagnosisResults[0]?null:n.form.record.value.diagnosisResults[0].diseaseCode)," (",(100*(null==n.form.record.value?null:n.form.record.value.diagnosisResults[0].accuracy)).toFixed(2),"%) "),e.xp6(2),e.Q6J("ngIf",(null==n.form.record.value?null:n.form.record.value.diagnosisResults.length)>1)}}let R=(()=>{class c extends f.NT{constructor(n,a,i,p,o){super(),this.api=n,this.modalRef=a,this.toast=i,this.router=p,this.bottomSheet=o,this.form={record:new u.NI(null,[u.kI.required]),title:new u.NI("",[u.kI.required]),contents:new u.NI("",[u.kI.required])},this.formGroup=new u.cw(this.form),this.status$=new b.X(f.Lr.INITIAL)}ngOnInit(){this.modalRef.setClass("inquiry-input-form"),this.record&&this.form.record.patchValue(this.record)}close(){this.modalRef.hide()}submit(){const{record:n,title:a,contents:i}=this.formGroup.value;this.api.sendInquiry({diagnosisId:n.diagnosisRecordId,title:a,contents:i}).pipe((0,f.vC)(this.status$),(0,_.b)(()=>this.toast.show("\ubb38\uc758\uac00 \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,_.b)(()=>this.close()),(0,_.b)(()=>this.router.navigate(["/my-page","inquiry"]))).subscribe()}openRecordSelector(){if(this.record)return;const n=this.bottomSheet.show(Z);n.onHide.pipe((0,U.q)(1),(0,_.b)(()=>{n.content.selectedRecord&&this.form.record.patchValue(n.content.selectedRecord)})).subscribe()}}return c.\u0275fac=function(n){return new(n||c)(e.Y36(m.s),e.Y36(s.UZ),e.Y36(L.k),e.Y36(I.F0),e.Y36(s.BB))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-inquiry-input-form"]],inputs:{record:"record"},standalone:!0,features:[e.qOj,e.jDz],decls:16,vars:14,consts:[["height","64px",3,"title"],["left","","iconName","arrow_back","size","m","variant","void","color","grayDark",3,"click"],[1,"form-container"],[1,"record-label"],["class","record-selector",3,"click",4,"ngIf"],["class","selected-record",3,"click",4,"ngIf"],[1,"input-form"],["size","l","label","\ubb38\uc758 \uc81c\ubaa9","type","text","backgroundColor","white","boxShadow","0 2px 4px 0 rgba(20, 20, 20, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.08)",3,"placeholder","formControl"],[1,"contents-label"],["padding","14px","backgroundColor","white","boxShadow","0 2px 4px 0 rgba(20, 20, 20, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.08)",3,"formControl","placeholder","maxLength","autoFocus","height"],["height","81px"],["label","\ubb38\uc758\ud558\uae30","variant","fill","color","blue","size","m",3,"disabled","loading","click"],["left","","name","send"],[1,"record-selector",3,"click"],["name","touch_app","type","outlined","size","36px","color","redLight"],[1,"selected-record",3,"click"],[3,"src","alt"],[1,"info"],[1,"line"],[3,"cropType"],[4,"ngIf"]],template:function(n,a){1&n&&(e.TgZ(0,"page-header",0)(1,"mp-icon-button",1),e.NdJ("click",function(){return a.close()}),e.qZA()(),e.TgZ(2,"div",2)(3,"div",3),e._uU(4,"\uc9c4\ub2e8 \uae30\ub85d"),e.qZA(),e.YNc(5,T,4,0,"div",4),e.YNc(6,k,12,12,"div",5),e.TgZ(7,"div",6),e._UZ(8,"mp-input",7),e.TgZ(9,"div",8),e._uU(10,"\ubb38\uc758 \ub0b4\uc6a9"),e.qZA(),e._UZ(11,"mp-textarea",9),e.qZA()(),e.TgZ(12,"bottom-fixed-bar",10)(13,"mp-button",11),e.NdJ("click",function(){return a.submit()}),e.ALo(14,"async"),e._UZ(15,"mp-icon",12),e.qZA()()),2&n&&(e.Q6J("title","\ubb38\uc758 \uc791\uc131"),e.xp6(5),e.Q6J("ngIf",!a.form.record.value),e.xp6(1),e.Q6J("ngIf",a.form.record.value),e.xp6(2),e.Q6J("placeholder","\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")("formControl",a.form.title),e.xp6(3),e.Q6J("formControl",a.form.contents)("placeholder","\uc9c4\ub2e8 \uae30\ub85d\uc5d0 \ub300\ud574 \uad81\uae08\ud55c \uc810\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694.")("maxLength",500)("autoFocus",!1)("height","250px"),e.xp6(2),e.Q6J("disabled",a.form.record.invalid||a.form.title.invalid||a.form.contents.invalid)("loading",e.lcZ(14,12,a.status$).pending))},dependencies:[r.B,x.O5,u.JJ,u.oH,g.zJ,g.KT,g.gL,g.k_,x.Ov,x.uU,M.q,v.Y,y.A,g.lh,g.Ly,h.N],styles:['@charset "UTF-8";  .modal-dialog.inquiry-input-form{margin:0}  .modal-dialog.inquiry-input-form .modal-content{display:block;border-radius:0;min-width:100vw;min-height:var(--full-height);margin:0}[_nghost-%COMP%]   page-header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #0000001f}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]{padding:24px;display:flex;flex-direction:column}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .contents-label[_ngcontent-%COMP%]{font-size:13px;color:var(--gray);font-weight:500;padding:0 0 8px 6px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .record-selector[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;width:100%;padding:12px;height:104px;box-shadow:0 9px 24px #14141414,0 0 0 1px #1414140f;border-radius:8px;margin-bottom:24px;font-size:16px;color:var(--redLight);font-weight:500}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]{display:flex;gap:16px;padding:12px;width:100%;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f;border-radius:8px;margin-bottom:24px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:8px;width:100%;padding:8px 0}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   mp-input[_ngcontent-%COMP%]{display:block;margin-bottom:24px}[_nghost-%COMP%]   bottom-fixed-bar[_ngcontent-%COMP%]{padding:24px}[_nghost-%COMP%]   bottom-fixed-bar[_ngcontent-%COMP%]   mp-button[_ngcontent-%COMP%]{width:100%}']}),c})()},4650:(J,P,t)=>{t.d(P,{q:()=>b});var r=t(2223),u=t(4755),f=t(5649),M=t(6921),v=t(974);const y=["titleDiv"],g=[[["","left",""]],[["mp-text","center",""]],[["",8,"center"]],[["","right",""]],[["",8,"actions"]]],h=["[left]","mp-text[center]",".center","[right]",".actions"];let b=(()=>{class _ extends f.NT{constructor(s,m,O){super(),this.platformId=s,this.elementRef=m,this.renderer=O,this.backgroundColor="white"}get parentElement(){return this.elementRef.nativeElement.parentElement}ngOnInit(){if(!this.height)throw new Error("page-header\uc5d0 height \uc778\ud48b\uc744 \ubb34\uc870\uac74 \ub123\uc5b4\uc918\uc57c\ud569\ub2c8\ub2e4.");this.subscribeOn((0,f.oi)(this,this.renderer,this.elementRef.nativeElement,{"--text-color":({titleColor:s})=>M.u$.parse(s),"--page-header-background":({backgroundColor:s})=>M.u$.parse(s)}))}ngAfterViewInit(){(0,u.NF)(this.platformId)&&(this._backupHeight=getComputedStyle(this.parentElement).getPropertyValue("--page-header-height")),this.subscribeOn((0,f.oi)(this,this.renderer,this.parentElement,{"--page-header-height":({height:s})=>s}))}ngOnDestroy(){super.ngOnDestroy(),(0,u.NF)(this.platformId)&&(this._backupHeight?this.renderer.setStyle(this.parentElement,"--page-header-height",this._backupHeight,r.JOm.DashCase):this.renderer.removeStyle(this.parentElement,"--page-header-height",r.JOm.DashCase))}}return _.\u0275fac=function(s){return new(s||_)(r.Y36(r.Lbi),r.Y36(r.SBq),r.Y36(r.Qsj))},_.\u0275cmp=r.Xpm({type:_,selectors:[["page-header"],["top-panel"]],viewQuery:function(s,m){if(1&s&&r.Gf(y,5),2&s){let O;r.iGM(O=r.CRH())&&(m.titleElement=O.first)}},hostVars:2,hostBindings:function(s,m){2&s&&r.Udp("padding",m.padding)},inputs:{title:"title",height:"height",titleColor:"titleColor",padding:"padding",backgroundColor:"backgroundColor"},standalone:!0,features:[r.qOj,r.jDz],ngContentSelectors:h,decls:11,vars:1,consts:[[1,"flex"],[1,"left-container"],[1,"center","title"],["titleDiv",""],[1,"right-container"]],template:function(s,m){1&s&&(r.F$t(g),r.TgZ(0,"div",0)(1,"div",1),r.Hsn(2),r.qZA(),r.TgZ(3,"div",2,3),r._uU(5),r.Hsn(6,1),r.Hsn(7,2),r.qZA(),r.TgZ(8,"div",4),r.Hsn(9,3),r.qZA()(),r.Hsn(10,4)),2&s&&(r.xp6(5),r.hij(" ",m.title," "))},dependencies:[v.B],styles:['@charset "UTF-8";[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;padding:14px;background-color:var(--page-header-background-important, var(--page-header-background))}.is-modal[_nghost-%COMP%]{border-top-right-radius:14px;border-top-left-radius:14px}.tab-bar-hidden.header-hidden[_nghost-%COMP%], .tab-bar-hidden.header-hidden   [_nghost-%COMP%]{transform:translateY(0)}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;margin:auto 0}.flex[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.flex[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .flex[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]     .center{overflow:hidden;text-overflow:ellipsis;flex:1.5;text-align:center;font-size:14px;font-weight:500;line-height:1.58;color:var(--text-color, var(--grayDark));white-space:nowrap}.flex[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.flex[_ngcontent-%COMP%]   .right-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 4px 0 0}.flex[_ngcontent-%COMP%]    +.actions{width:100%;margin-top:12px}']}),_})()},4794:(J,P,t)=>{t.r(P),t.d(P,{MainTabComponent:()=>a});var r=t(974),u=t(7804),f=t(9401),M=t(8505),v=t(4004),y=t(2704),g=t(4066),h=t(6921),b=t(8484),_=t(8054),e=t(2223),s=t(8615),m=t(6814),O=t(2442),I=t(7204),x=t(8740),D=t(4755),B=t(1757),A=t(9972),Z=t(5649);function U(i,p){if(1&i){const o=e.EpF();e.TgZ(0,"li",25),e.NdJ("click",function(){const E=e.CHM(o).$implicit,F=e.oxw(3);return e.KtG(F.openDiseaseDetail(E))}),e._uU(1),e.qZA()}if(2&i){const o=p.$implicit;e.xp6(1),e.AsE(" (",o.cropName,") ",o.sickNameKor," ")}}function L(i,p){if(1&i&&(e.ynx(0),e.TgZ(1,"ul"),e.YNc(2,U,2,2,"li",24),e.qZA(),e.BQk()),2&i){const o=e.oxw().ngIf,l=e.oxw();e.xp6(2),e.Q6J("ngForOf",o.occurenceInfo[l.selectedOccurenceStep.value+"List"])}}const T=function(i){return{text:i}};function w(i,p){if(1&i){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",14)(2,"div",15)(3,"span"),e._uU(4,"\ubcd1\ud574\ucda9 \ubc1c\uc0dd\uc815\ubcf4"),e.qZA(),e.TgZ(5,"a",16),e._UZ(6,"mp-icon",17),e.qZA()(),e._UZ(7,"mp-divider",18),e.TgZ(8,"div",19)(9,"mp-button",20),e.NdJ("click",function(){e.CHM(o);const C=e.oxw();return e.KtG(C.selectedOccurenceStep.patchValue("warning"))}),e.qZA(),e.TgZ(10,"mp-button",21),e.NdJ("click",function(){e.CHM(o);const C=e.oxw();return e.KtG(C.selectedOccurenceStep.patchValue("watch"))}),e.qZA(),e.TgZ(11,"mp-button",22),e.NdJ("click",function(){e.CHM(o);const C=e.oxw();return e.KtG(C.selectedOccurenceStep.patchValue("forecast"))}),e.qZA()(),e.TgZ(12,"div",23),e.YNc(13,L,3,1,"ng-container",0),e.qZA()(),e.BQk()}if(2&i){const o=p.ngIf,l=e.oxw();e.xp6(9),e.ekj("active","warning"===l.selectedOccurenceStep.value),e.Q6J("postfix",e.VKq(13,T,(null==o.occurenceInfo?null:o.occurenceInfo.warningListSize)||"0"))("disabled",0===(null==o.occurenceInfo?null:o.occurenceInfo.warningListSize)),e.xp6(1),e.ekj("active","watch"===l.selectedOccurenceStep.value),e.Q6J("postfix",e.VKq(15,T,(null==o.occurenceInfo?null:o.occurenceInfo.watchListSize)||"0"))("disabled",0===(null==o.occurenceInfo?null:o.occurenceInfo.watchListSize)),e.xp6(1),e.ekj("active","forecast"===l.selectedOccurenceStep.value),e.Q6J("postfix",e.VKq(17,T,(null==o.occurenceInfo?null:o.occurenceInfo.forecastListSize)||"0"))("disabled",0===(null==o.occurenceInfo?null:o.occurenceInfo.forecastListSize)),e.xp6(2),e.Q6J("ngIf",o.occurenceInfo&&l.selectedOccurenceStep.value)}}function k(i,p){if(1&i&&(e.TgZ(0,"li"),e._uU(1),e.ALo(2,"categoryName"),e.qZA()),2&i){const o=p.$implicit;e.xp6(1),e.AsE("",e.lcZ(2,2,o.name)," (",o.cnt||0,") ")}}const R=function(){return["/my-page","category"]};function c(i,p){if(1&i&&(e.TgZ(0,"a",26)(1,"span",4),e._uU(2," \ub0b4 \uc791\ubb3c \uad00\ub9ac "),e._UZ(3,"mp-icon",5),e.qZA(),e.TgZ(4,"ul",27),e.YNc(5,k,3,4,"li",28),e.qZA()()),2&i){const o=p.ngLet;e.Q6J("routerLink",e.DdM(2,R)),e.xp6(5),e.Q6J("ngForOf",o)}}const d=function(i){return{occurenceInfo:i}},n=function(){return["/search"]};let a=(()=>{class i{constructor(o,l,C,E,F){this.api=o,this.store$=l,this.navigate=C,this.toast=E,this.modalService=F,this.activeTab$=this.store$.select(g.CK).pipe((0,M.b)(console.log),(0,v.U)(({type:S})=>S)),this.options={path:"/assets/lottie/LottieMap.json",loop:!1,autoplay:!0},this.selectedOccurenceStep=new f.NI("warning"),this.occurenceInfo$=this.api.loadOccurenceInfo().pipe((0,M.b)(({warningListSize:S,watchListSize:N,forecastListSize:q})=>{this.selectedOccurenceStep.patchValue(S>0?"warning":N>0?"watch":q>0?"forecast":null)})),this.currentUser$=this.store$.select(y.HF),this.categories$=this.api.loadUserCategories()}openDiseaseDetail(o){const{sickKey:l,sickNameKor:C,cropName:E}=o;l?this.navigate.openDiseaseDetailModal({sickKey:l,diseaseName:C,cropName:E}):this.toast.show("\ub4f1\ub85d\ub41c \ubcd1\ud574 \uc0c1\uc138 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")}openInquiryForm(){this.modalService.show(_.u)}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(s.s),e.Y36(m.yh),e.Y36(O.o),e.Y36(I.k),e.Y36(x.tT))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-main-tab"]],standalone:!0,features:[e.jDz],decls:22,vars:11,consts:[[4,"ngIf"],[1,"main-container"],[1,"section-wrapper"],[1,"map-section"],[1,"section-title"],["name","chevron_right","size","20px","color","grayLight"],[3,"options"],["class","category-section",3,"routerLink",4,"ngLet"],["mpMenuCell","","label","\ubcd1\ud574 \uc815\ubcf4 \uac80\uc0c9\ud558\uae30","color","grayDarkest","gap","24px",3,"routerLink"],["adornment","","name","search","color","green"],[1,"guide-section"],["name","help","type","filled","size","20px","color","green"],[1,"inquiry-section",3,"click"],["name","headphones","type","outlined","size","20px","color","green"],[1,"occurrence-info"],[1,"title"],["href","https://ncpms.rda.go.kr/mobile/NewIndcUserListR.ms","mpButton","","size","xs","variant","void","color","greenDark","label","\uc804\uccb4 \ubcf4\uae30"],["right","","name","chevron_right"],["height","16px","direction","horizontal","size","1px"],[1,"selector-wrapper"],["label","\uacbd\ubcf4","color","redDark","size","s","variant","void",3,"postfix","disabled","click"],["label","\uc8fc\uc758\ubcf4","color","yellowDark","size","s","variant","void",3,"postfix","disabled","click"],["label","\uc608\ubcf4","color","greenDark","size","s","variant","void",3,"postfix","disabled","click"],[1,"disease-list"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"category-section",3,"routerLink"],[1,"categories"],[4,"ngFor","ngForOf"]],template:function(o,l){1&o&&(e.YNc(0,w,14,19,"ng-container",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"span",4),e._uU(6," \uc8fc\ubcc0 \ubcd1\ud574 \uc9c0\ub3c4 "),e._UZ(7,"mp-icon",5),e.qZA(),e._UZ(8,"ng-lottie",6),e.qZA(),e.YNc(9,c,6,3,"a",7),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"a",8),e._UZ(12,"mp-icon",9),e.qZA(),e.TgZ(13,"div",2)(14,"div",10),e._UZ(15,"mp-icon",11),e.TgZ(16,"span"),e._uU(17,"\uac00\uc774\ub4dc \uc548\ub0b4"),e.qZA()(),e.TgZ(18,"div",12),e.NdJ("click",function(){return l.openInquiryForm()}),e._UZ(19,"mp-icon",13),e.TgZ(20,"span"),e._uU(21,"\uc804\ubb38\uac00\uc5d0\uac8c \ucd94\uac00 \ubb38\uc758"),e.qZA()()()()),2&o&&(e.Q6J("ngIf",e.VKq(8,d,e.lcZ(1,4,l.occurenceInfo$))),e.xp6(8),e.Q6J("options",l.options),e.xp6(1),e.Q6J("ngLet",e.lcZ(10,6,l.categories$)),e.xp6(2),e.Q6J("routerLink",e.DdM(10,n)))},dependencies:[r.B,D.sg,D.O5,B.rH,A.Fo,h.zJ,h.gL,h.VO,h.vS,h.bO,Z.eJ,D.Ov,u.CT,u.e$,h.qU,b.D],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;height:calc(var(--full-height) - var(--header-height));padding-top:16px;padding-bottom:calc(var(--tab-bar-height) + 32px);overflow:scroll}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:16px;background:#f5f5f5;border-radius:10px;margin:0 16px;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;color:var(--grayDark);font-weight:700;display:flex;justify-content:space-between}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .selector-wrapper[_ngcontent-%COMP%]{display:flex;gap:12px}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .selector-wrapper[_ngcontent-%COMP%]   mp-button[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .selector-wrapper[_ngcontent-%COMP%]   mp-button.active[_ngcontent-%COMP%]{background:white;border-radius:8px 8px 0 0}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .disease-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;height:180px;overflow:scroll;background:white;padding:16px 24px 16px 30px;border-radius:0 0 12px 12px}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .disease-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:square}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .disease-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:15px;color:var(--grayDark);font-weight:500;padding:4px 0}[_nghost-%COMP%]   .occurrence-info[_ngcontent-%COMP%]   .disease-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:24px 16px;gap:24px}[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]{display:flex;border:1px solid #fcfcfc;gap:12px}[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .map-section[_ngcontent-%COMP%], [_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .category-section[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .map-section[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;flex-direction:column;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f;border-radius:12px;padding:12px}[_nghost-%COMP%]   .map-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:16px;color:var(--grayDark);font-weight:700}[_nghost-%COMP%]   .category-section[_ngcontent-%COMP%]{display:block;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f;padding:12px;border-radius:12px}[_nghost-%COMP%]   .category-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-size:16px;color:var(--grayDark);font-weight:700}[_nghost-%COMP%]   .category-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:square;height:130px;overflow:scroll}[_nghost-%COMP%]   .category-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:15px;color:var(--gray);font-weight:500;margin-left:12px;padding:4px 0}[_nghost-%COMP%]   .category-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   .guide-section[_ngcontent-%COMP%], [_nghost-%COMP%]   .inquiry-section[_ngcontent-%COMP%]{display:flex;flex:1;gap:16px;box-shadow:0 3px 8px #14141414,0 0 0 1px #1414140f;border-radius:10px;background-color:#f5f5f5;padding:12px}[_nghost-%COMP%]   [mpMenuCell][_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 3px 8px #14141414,0 0 0 1px #1414140f;background-color:#f5f5f5}']}),i})()}}]);