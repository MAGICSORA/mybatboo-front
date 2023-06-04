"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[7938],{7938:(y,C,e)=>{e.r(C),e.d(C,{CategoryEditModalComponent:()=>f});var r=e(9401),_=e(974),d=e(4650),s=e(3437),E=e(9300),g=e(1135),c=e(3900),p=e(8505),h=e(4004),l=e(9646),M=e(262),n=e(5649),t=e(2223),O=e(8740),x=e(8615),P=e(7204),D=e(4755);let f=(()=>{class u{constructor(a,o,i,A){this.modalRef=a,this.api=o,this.alert=i,this.toast=A,this.form={name:new r.NI("",[r.kI.required]),memo:new r.NI("")},this.formGroup=new r.cw(this.form),this.status$=new g.X(n.Lr.INITIAL),this.errorMessages={alreadyExists:"\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uce74\ud14c\uace0\ub9ac\uc785\ub2c8\ub2e4.",validationError:"\uce74\ud14c\uace0\ub9ac \uac80\uc0ac \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."}}ngOnInit(){const{name:a,memo:o}=this.category;this.formGroup.patchValue({name:a,memo:o||""})}updateCategory(){this.alert.confirm({title:"\uce74\ud14c\uace0\ub9ac \uc218\uc815",content:"\uce74\ud14c\uace0\ub9ac\ub97c \uc218\uc815\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmMessage:"\uc218\uc815",cancelMessage:"\ucde8\uc18c",confirmButtonColor:"green"}).pipe((0,E.h)(a=>!!a),(0,c.w)(()=>{const{name:a,memo:o}=this.formGroup.value;return this.api.updateCategory(this.category.id,{name:a,memo:o}).pipe((0,n.vC)(this.status$),(0,p.b)(()=>this.toast.show("\uce74\ud14c\uace0\ub9ac\uac00 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,p.b)(()=>this.modalRef.hide()))})).subscribe()}categoryNameValidator(){return a=>this.api.loadCategoryByName(a.value).pipe((0,n.Pl)(()=>this.status$.next(n.Lr.PENDING)),(0,h.U)(o=>o.id===this.category.id?(console.log(o,this.category),this.status$.next(n.Lr.INITIAL),(0,l.of)(null)):o.id===this.category.id?(this.status$.next(n.Lr.INITIAL),(0,l.of)(null)):(this.status$.next(n.Lr.REJECTED),{alreadyExists:{value:a.value}})),(0,M.K)(o=>"CATEGORY_NOT_FOUND"===o.error?.code?(this.status$.next(n.Lr.FULFILLED),(0,l.of)(null)):(this.status$.next(n.Lr.REJECTED),(0,l.of)({validationError:{value:a.value}}))))}}return u.\u0275fac=function(a){return new(a||u)(t.Y36(O.UZ),t.Y36(x.s),t.Y36(s.c9),t.Y36(P.k))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-category-edit-modal"]],inputs:{category:"category"},standalone:!0,features:[t.jDz],decls:13,vars:18,consts:[["height","64px","title","\uce74\ud14c\uace0\ub9ac \uc218\uc815"],["left","","size","m","iconName","close","iconSize","16px","borderRadius","8px","color","gray","variant","void",3,"click"],[3,"formGroup"],["size","l","type","text","formControlName","name","backgroundColor","white","boxShadow","0 2px 4px 0 rgba(20, 20, 20, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.08)",3,"label","autoFocus","placeholder","helperError"],["left","","name","folder","type","outlined"],["size","14px",3,"textContent"],["formControlName","memo","padding","14px","backgroundColor","white","boxShadow","0 2px 4px 0 rgba(20, 20, 20, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.08)",3,"placeholder","maxLength","autoFocus","helperText","height"],["textArea",""],[1,"buttons-wrapper"],["label","\ucde8\uc18c","size","m","color","gray","variant","weak",3,"click"],["label","\uc800\uc7a5","size","m","color","green","variant","fill",3,"disabled","loading","click"]],template:function(a,o){1&a&&(t.TgZ(0,"page-header",0)(1,"mp-icon-button",1),t.NdJ("click",function(){return o.modalRef.hide()}),t.qZA()(),t.TgZ(2,"form",2)(3,"mp-input",3),t.ALo(4,"toHelperText"),t._UZ(5,"mp-icon",4),t.qZA(),t._UZ(6,"mp-label",5)(7,"mp-textarea",6,7),t.qZA(),t.TgZ(9,"div",8)(10,"mp-button",9),t.NdJ("click",function(){return o.modalRef.hide()}),t.qZA(),t.TgZ(11,"mp-button",10),t.NdJ("click",function(){return o.updateCategory()}),t.ALo(12,"async"),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("label","\uc774\ub984")("autoFocus",!0)("placeholder","\uce74\ud14c\uace0\ub9ac \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")("helperError",t.xi3(4,13,o.form.name,o.errorMessages)),t.xp6(3),t.Q6J("textContent","\uba54\ubaa8"),t.xp6(1),t.Q6J("placeholder","\uc774 \uce74\ud14c\uace0\ub9ac\uc5d0 \ub300\ud55c \uba54\ubaa8\ub97c \uc791\uc131\ud574\ubcf4\uc138\uc694(200\uc790 \uc774\ub0b4)")("maxLength",300)("autoFocus",!0)("helperText",o.form.memo.value.length>=200?"\uba54\ubaa8\ub294 \ucd5c\ub300 200\uc790\uae4c\uc9c0 \uc791\uc131 \uac00\ub2a5\ud569\ub2c8\ub2e4.":"")("height","200px"),t.xp6(4),t.Q6J("disabled",o.formGroup.invalid)("loading",t.lcZ(12,16,o.status$).pending))},dependencies:[_.B,r._Y,r.JJ,r.JL,r.sg,r.u,s.zJ,s.KT,s.gL,s.k_,D.Ov,n.jy,d.q,s.lh,s.Ly,s.EA],styles:['@charset "UTF-8";[_nghost-%COMP%]   page-header[_ngcontent-%COMP%]{box-shadow:inset 0 -1px #0000001f}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{padding:24px;display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   mp-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   mp-label[_ngcontent-%COMP%]{padding:0 4px;margin:0 0 6px}[_nghost-%COMP%]   .buttons-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;gap:16px;padding:0 24px 24px}[_nghost-%COMP%]   .buttons-wrapper[_ngcontent-%COMP%]   mp-button[_ngcontent-%COMP%]{flex:1}']}),u})()}}]);