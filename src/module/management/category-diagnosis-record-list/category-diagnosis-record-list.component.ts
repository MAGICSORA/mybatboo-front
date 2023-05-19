import { Component, Input } from '@angular/core';
import { AbstractBaseComponent, AsyncStatus, observeProperty$ } from "@mapiacompany/armory";
import { BehaviorSubject, map, Observable, switchMap, tap } from "rxjs";
import { filter } from "rxjs/operators";
import { ApiService } from "../../../service/api.service";
import { PageHeaderComponent } from "../../shared/component/page-header/page-header.component";
import { SyntaxSharedModule } from "../../shared/syntax-shared.module";
import { BsModalRef } from "@mapiacompany/ngx-bootstrap-modal";

@Component({
  selector: 'app-category-diagnosis-record-list',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    PageHeaderComponent
  ],
  templateUrl: './category-diagnosis-record-list.component.html',
  styleUrls: [ './category-diagnosis-record-list.component.scss' ]
})
export class CategoryDiagnosisRecordListComponent extends AbstractBaseComponent {
  @Input() category: Category;

  status$ = new BehaviorSubject(AsyncStatus.INITIAL);
  records$: Observable<DiagnosisRecord[]> = observeProperty$(this, 'category').pipe(
    filter(category => !!category),
    switchMap(category => this.api.loadCategoryDiagnosisRecords(category.id).pipe(
      map(res => res as DiagnosisRecord[]),
    )),
    tap(console.log)
  )

  constructor(
    private api: ApiService,
    private modalRef: BsModalRef
  ) {
    super();
  }

  ngOnInit() {
  }

  close() {
    this.modalRef.hide();
  }
}