"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[8054],{8054:(J,y,r)=>{r.d(y,{u:()=>k});var C=r(974),s=r(9401),m=r(5649),h=r(4650),f=r(50),_=r(9282),a=r(3437),M=r(4657),O=r(1135),p=r(8505),n=r(2223),g=r(8740),x=r(8615),b=r(5800),v=r(4135),l=r(4755);function P(t,c){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const o=n.oxw().$implicit;n.xp6(1),n.hij("\uc678 ",(null==o?null:o.diagnosisResults.length)-1," \uac1c")}}function I(t,c){if(1&t){const o=n.EpF();n.TgZ(0,"div",5),n.NdJ("click",function(){const d=n.CHM(o).$implicit,u=n.oxw(2);return n.KtG(u.select(d))}),n._UZ(1,"img",6)(2,"crop-type-badge",7),n.TgZ(3,"span"),n._uU(4),n.ALo(5,"diseaseName"),n.YNc(6,P,2,1,"span",2),n.qZA(),n.TgZ(7,"span"),n._uU(8),n.ALo(9,"date"),n.qZA()()}if(2&t){const o=c.$implicit;n.xp6(1),n.Q6J("src",o.imagePath,n.LSH),n.xp6(1),n.Q6J("cropType",o.cropType),n.xp6(2),n.AsE("\ubcd1\ud574\uba85: ",n.lcZ(5,6,o.diagnosisResults[0].diseaseCode)," (",(100*o.diagnosisResults[0].accuracy).toFixed(2),"%) "),n.xp6(2),n.Q6J("ngIf",(null==o?null:o.diagnosisResults.length)>1),n.xp6(2),n.hij("\uc9c4\ub2e8\uc77c: ",n.xi3(9,8,o.regDate,"yyyy.MM.dd HH:mm"),"")}}function T(t,c){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"div",8)(2,"span"),n._uU(3,"\uc544\uc9c1 \uc791\ubb3c\uc744 \uc9c4\ub2e8\ud55c \uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),n.qZA(),n.TgZ(4,"mp-button",9),n.NdJ("click",function(){n.CHM(o);const i=n.oxw(2);return n.KtG(i.goToDiagnosis())}),n._UZ(5,"mp-icon",10),n.qZA()(),n.BQk()}}function B(t,c){if(1&t&&(n.ynx(0),n.TgZ(1,"div",3),n.YNc(2,I,10,11,"div",4),n.qZA(),n.YNc(3,T,6,0,"ng-container",2),n.BQk()),2&t){const o=c.ngIf;n.xp6(2),n.Q6J("ngForOf",o),n.xp6(1),n.Q6J("ngIf",0===(null==o?null:o.length))}}let Z=(()=>{class t{constructor(o,e,i,d,u){this.modalRef=o,this.api=e,this.diagnosis=i,this.router=d,this.modalService=u,this.recordList$=this.api.loadUserDiagnosisRecords()}close(){this.modalRef.hide()}goToDiagnosis(){this.router.navigate(["/main"]).then(()=>{this.modalRef.hide(),this.diagnosis.startDiagnosis()})}select(o){this.selectedRecord=o,this.close()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(g.UZ),n.Y36(x.s),n.Y36(b.r),n.Y36(v.F0),n.Y36(g.tT))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-inquiry-record-select-modal"]],standalone:!0,features:[n.jDz],decls:4,vars:4,consts:[["height","64px",3,"title"],["left","","iconName","close","size","m","variant","void","color","grayDark",3,"click"],[4,"ngIf"],[1,"record-container"],["class","record-item",3,"click",4,"ngFor","ngForOf"],[1,"record-item",3,"click"],[3,"src"],[3,"cropType"],[1,"empty"],["label","\uc791\ubb3c \uc9c4\ub2e8\ud558\uae30","color","green","size","m",3,"click"],["left","","name","add_to_photos"]],template:function(o,e){1&o&&(n.TgZ(0,"page-header",0)(1,"mp-icon-button",1),n.NdJ("click",function(){return e.close()}),n.qZA()(),n.YNc(2,B,4,2,"ng-container",2),n.ALo(3,"async")),2&o&&(n.Q6J("title","\uc9c4\ub2e8 \uae30\ub85d \uc120\ud0dd"),n.xp6(2),n.Q6J("ngIf",n.lcZ(3,2,e.recordList$)))},dependencies:[C.B,l.sg,l.O5,a.zJ,a.KT,a.gL,a.k_,l.Ov,l.uU,h.q,f.Y,_.A],styles:['@charset "UTF-8";.bottom-sheet[_nghost-%COMP%], .bottom-sheet   [_nghost-%COMP%]{height:auto;max-height:auto!important}[_nghost-%COMP%]{padding-top:var(--page-header-height);padding-bottom:var(--bottom-fixed-bar-height)}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]   page-header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #0000001f}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;grid-row-gap:12px;padding:12px 20px 24px}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:12px;gap:12px;border-radius:12px;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;width:100%;height:auto;aspect-ratio:1;border-radius:12px}[_nghost-%COMP%]   .record-container[_ngcontent-%COMP%]   .record-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:var(--gray);font-weight:500}[_nghost-%COMP%]   .empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;align-items:center;justify-content:center;padding-bottom:36px;font-size:18px;color:var(--gray);font-weight:500}']}),t})();var A=r(5698),D=r(7204);function q(t,c){if(1&t){const o=n.EpF();n.TgZ(0,"div",13),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.openRecordSelector())}),n._UZ(1,"mp-icon",14),n.TgZ(2,"span"),n._uU(3,"\ubb38\uc758\ud560 \uc9c4\ub2e8 \uae30\ub85d\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),n.qZA()()}}function R(t,c){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.hij("\uc678 ",(null==o.form.record.value?null:o.form.record.value.diagnosisResults.length)-1," \uac1c")}}function F(t,c){if(1&t){const o=n.EpF();n.TgZ(0,"div",15),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.openRecordSelector())}),n._UZ(1,"img",16),n.TgZ(2,"div",17)(3,"div",18),n._UZ(4,"crop-type-badge",19),n.TgZ(5,"span"),n._uU(6),n.ALo(7,"date"),n.qZA()(),n.TgZ(8,"div",18),n._uU(9),n.ALo(10,"diseaseName"),n.YNc(11,R,2,1,"span",20),n.qZA()()()}if(2&t){const o=n.oxw();n.xp6(1),n.Q6J("src",null==o.form.record.value?null:o.form.record.value.imagePath,n.LSH)("alt","\uc791\ubb3c \uc774\ubbf8\uc9c0"),n.xp6(3),n.Q6J("cropType",null==o.form.record.value?null:o.form.record.value.cropType),n.xp6(2),n.Oqu(n.xi3(7,7,null==o.form.record.value?null:o.form.record.value.regDate,"yyyy.MM.dd HH:mm")),n.xp6(3),n.AsE(" \ubcd1\ud574: ",n.lcZ(10,10,null==o.form.record.value||null==o.form.record.value.diagnosisResults[0]?null:o.form.record.value.diagnosisResults[0].diseaseCode)," (",(100*(null==o.form.record.value?null:o.form.record.value.diagnosisResults[0].accuracy)).toFixed(2),"%) "),n.xp6(2),n.Q6J("ngIf",(null==o.form.record.value?null:o.form.record.value.diagnosisResults.length)>1)}}let k=(()=>{class t extends m.NT{constructor(o,e,i,d,u){super(),this.api=o,this.modalRef=e,this.toast=i,this.router=d,this.bottomSheet=u,this.form={record:new s.NI(null,[s.kI.required]),title:new s.NI("",[s.kI.required]),contents:new s.NI("",[s.kI.required])},this.formGroup=new s.cw(this.form),this.status$=new O.X(m.Lr.INITIAL)}ngOnInit(){this.modalRef.setClass("inquiry-input-form"),this.record&&this.form.record.patchValue(this.record)}close(){this.modalRef.hide()}submit(){const{record:o,title:e,contents:i}=this.formGroup.value;this.api.sendInquiry({diagnosisId:o.diagnosisRecordId,title:e,contents:i}).pipe((0,m.vC)(this.status$),(0,p.b)(()=>this.toast.show("\ubb38\uc758\uac00 \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,p.b)(()=>this.close()),(0,p.b)(()=>this.router.navigate(["/my-page","inquiry"]))).subscribe()}openRecordSelector(){if(this.record)return;const o=this.bottomSheet.show(Z);o.onHide.pipe((0,A.q)(1),(0,p.b)(()=>{o.content.selectedRecord&&this.form.record.patchValue(o.content.selectedRecord)})).subscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(x.s),n.Y36(g.UZ),n.Y36(D.k),n.Y36(v.F0),n.Y36(g.BB))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-inquiry-input-form"]],inputs:{record:"record"},standalone:!0,features:[n.qOj,n.jDz],decls:16,vars:14,consts:[["height","64px",3,"title"],["left","","iconName","arrow_back","size","m","variant","void","color","grayDark",3,"click"],[1,"form-container"],[1,"record-label"],["class","record-selector",3,"click",4,"ngIf"],["class","selected-record",3,"click",4,"ngIf"],[1,"input-form"],["size","l","label","\ubb38\uc758 \uc81c\ubaa9","type","text","backgroundColor","white","boxShadow","0 2px 4px 0 rgba(20, 20, 20, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.08)",3,"placeholder","formControl"],[1,"contents-label"],["padding","14px","backgroundColor","white","boxShadow","0 2px 4px 0 rgba(20, 20, 20, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.08)",3,"formControl","placeholder","maxLength","autoFocus","height"],["height","81px"],["label","\ubb38\uc758\ud558\uae30","variant","fill","color","blue","size","m",3,"disabled","loading","click"],["left","","name","send"],[1,"record-selector",3,"click"],["name","touch_app","type","outlined","size","36px","color","redLight"],[1,"selected-record",3,"click"],[3,"src","alt"],[1,"info"],[1,"line"],[3,"cropType"],[4,"ngIf"]],template:function(o,e){1&o&&(n.TgZ(0,"page-header",0)(1,"mp-icon-button",1),n.NdJ("click",function(){return e.close()}),n.qZA()(),n.TgZ(2,"div",2)(3,"div",3),n._uU(4,"\uc9c4\ub2e8 \uae30\ub85d"),n.qZA(),n.YNc(5,q,4,0,"div",4),n.YNc(6,F,12,12,"div",5),n.TgZ(7,"div",6),n._UZ(8,"mp-input",7),n.TgZ(9,"div",8),n._uU(10,"\ubb38\uc758 \ub0b4\uc6a9"),n.qZA(),n._UZ(11,"mp-textarea",9),n.qZA()(),n.TgZ(12,"bottom-fixed-bar",10)(13,"mp-button",11),n.NdJ("click",function(){return e.submit()}),n.ALo(14,"async"),n._UZ(15,"mp-icon",12),n.qZA()()),2&o&&(n.Q6J("title","\ubb38\uc758 \uc791\uc131"),n.xp6(5),n.Q6J("ngIf",!e.form.record.value),n.xp6(1),n.Q6J("ngIf",e.form.record.value),n.xp6(2),n.Q6J("placeholder","\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")("formControl",e.form.title),n.xp6(3),n.Q6J("formControl",e.form.contents)("placeholder","\uc9c4\ub2e8 \uae30\ub85d\uc5d0 \ub300\ud574 \uad81\uae08\ud55c \uc810\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694.")("maxLength",500)("autoFocus",!1)("height","250px"),n.xp6(2),n.Q6J("disabled",e.form.record.invalid||e.form.title.invalid||e.form.contents.invalid)("loading",n.lcZ(14,12,e.status$).pending))},dependencies:[C.B,l.O5,s.JJ,s.oH,a.zJ,a.KT,a.gL,a.k_,l.Ov,l.uU,h.q,f.Y,_.A,a.lh,a.Ly,M.N],styles:['@charset "UTF-8";  .modal-dialog.inquiry-input-form{margin:0}  .modal-dialog.inquiry-input-form .modal-content{display:block;border-radius:0;min-width:100vw;min-height:var(--full-height);margin:0}[_nghost-%COMP%]   page-header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #0000001f}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]{padding:24px;display:flex;flex-direction:column}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .record-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .contents-label[_ngcontent-%COMP%]{font-size:13px;color:var(--gray);font-weight:500;padding:0 0 8px 6px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .record-selector[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;width:100%;padding:12px;height:104px;box-shadow:0 9px 24px #14141414,0 0 0 1px #1414140f;border-radius:8px;margin-bottom:24px;font-size:16px;color:var(--redLight);font-weight:500}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]{display:flex;gap:16px;padding:12px;width:100%;box-shadow:0 6px 16px #14141414,0 0 0 1px #1414140f;border-radius:8px;margin-bottom:24px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:8px;width:100%;padding:8px 0}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   .selected-record[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]   mp-input[_ngcontent-%COMP%]{display:block;margin-bottom:24px}[_nghost-%COMP%]   bottom-fixed-bar[_ngcontent-%COMP%]{padding:24px}[_nghost-%COMP%]   bottom-fixed-bar[_ngcontent-%COMP%]   mp-button[_ngcontent-%COMP%]{width:100%}']}),t})()}}]);