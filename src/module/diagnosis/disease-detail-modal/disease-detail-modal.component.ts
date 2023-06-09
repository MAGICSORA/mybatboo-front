import { Component, Input } from '@angular/core';
import { SyntaxSharedModule } from "../../shared/syntax-shared.module";
import { PageHeaderComponent } from "../../shared/component/page-header/page-header.component";
import { BsModalRef, BsModalService } from "@mapiacompany/ngx-bootstrap-modal";
import { ApiService } from "../../../service/api.service";
import { DiseaseNamePipe } from "../../../pipe/disease-name.pipe";
import { AbstractBaseComponent, AsyncStatus, bindStatus, observeProperty$ } from "@mapiacompany/armory";
import { filter } from "rxjs/operators";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { PesticideListModalComponent } from "../pesticide-list-modal/pesticide-list-modal.component";
import { getDiseaseName } from "../../../util/util";

@Component({
  selector: 'app-disease-detail-modal',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    PageHeaderComponent,
    DiseaseNamePipe
  ],
  templateUrl: './disease-detail-modal.component.html',
  styleUrls: ['./disease-detail-modal.component.scss']
})
export class DiseaseDetailModalComponent extends AbstractBaseComponent {
  @Input() diseaseCode: number;
  @Input() diseaseName: string;
  @Input() cropName: string;
  @Input() sickKey: string;

  status$ = new BehaviorSubject(AsyncStatus.INITIAL);
  sickDetail$: Observable<DiseaseDetail> = observeProperty$(this, 'sickKey').pipe(
    filter(sickKey => !!sickKey),
    switchMap(sickKey => this.api.loadSickDetail(sickKey).pipe(
      bindStatus(this.status$),
      tap(console.log)
    ))
  );

  constructor(
    public modalRef: BsModalRef,
    private api: ApiService,
    private modalService: BsModalService
  ) {
    super();
  }

  ngOnInit() {
  }

  openPesticideListModal() {
    console.log(this.cropName, this.diseaseName, this.diseaseCode, this.sickKey);
    this.modalService.show(PesticideListModalComponent, {
      initialState: {
        cropName: this.cropName,
        diseaseName: this.diseaseName || getDiseaseName(this.diseaseCode)
      }
    })
  }
}
