import { Injectable } from '@angular/core';
import { BsModalService, MpBottomSheetService } from "@mapiacompany/ngx-bootstrap-modal";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  constructor(
    private bottomSheet: MpBottomSheetService,
    private modalService: BsModalService
  ) {
  }

  openLoginModal(onSuccess: () => void = () => {
  }) {
    import('../module/login/login-modal/login-modal.component').then(c => {
      this.bottomSheet.show(c.LoginModal, {
        ignoreBackdropClick: true, initialState: {
          onSuccess
        }
      })
    })
  }

  openDiseaseDetailModal(inputs: { diseaseCode?: number, diseaseName?: string, cropName?: string, sickKey?: string }) {
    import('../module/diagnosis/disease-detail-modal/disease-detail-modal.component').then(c => {
      this.bottomSheet.show(c.DiseaseDetailModalComponent, {
        initialState: {
          diseaseCode: inputs.diseaseCode,
          diseaseName: inputs.diseaseName,
          cropName: inputs.cropName,
          sickKey: inputs.sickKey
        }
      })
    })
  }

  openDiseaseMap() {
    import('../module/disease-map/disease-map-modal/disease-map-modal.component').then(c => {
      this.modalService.show(c.DiseaseMapModalComponent);
    })
  }
}
