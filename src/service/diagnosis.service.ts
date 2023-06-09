import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { CameraService } from "./camera.service";
import { BehaviorSubject, combineLatest, tap } from "rxjs";
import { filter } from "rxjs/operators";
import { BsModalService, MpBottomSheetService } from "@mapiacompany/ngx-bootstrap-modal";
import { Photo } from "@capacitor/camera";

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(
    private api: ApiService,
    private cameraService: CameraService,
    private modalService: BsModalService,
    private bottomSheetService: MpBottomSheetService
  ) {
  }

  startDiagnosis(){
    const imageFile = new BehaviorSubject<File>(null);
    const location = new BehaviorSubject<{ latitude: number, longitude: number }>(null);
    const cropType = new BehaviorSubject<number>(null);
    this.cameraService.takePicture().then((image: Photo) => {
      if (image) {
        import('../module/diagnosis/diagnosis-request-modal/diagnosis-request-modal.component').then(c => {
          this.modalService.show(c.DiagnosisRequestModalComponent, {
            initialState: { cropPhoto: image }
          });
        })
      }
    }).catch(err => console.log(err))

    combineLatest([
      imageFile.pipe(
        filter(file => !!file),
        tap(console.log)
      ),
      location.pipe(
        filter(location => !!location),
        tap(console.log)
      )
    ]).pipe(
      // switchMap(([ file, location ]) => this.api.requestDiagnosis(file, location))
    )
  }
}
