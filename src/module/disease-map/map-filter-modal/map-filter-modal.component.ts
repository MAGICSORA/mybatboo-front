import { Component, Input } from '@angular/core';
import { SyntaxSharedModule } from "../../shared/syntax-shared.module";
import { MpSlider } from "@mapiacompany/styled-components/slider";
import { AbstractBaseComponent } from "@mapiacompany/armory";
import { BsModalRef } from "@mapiacompany/ngx-bootstrap-modal";
import { FormControl, FormGroup } from "@angular/forms";
import { CropNamePipe } from "../../../pipe/crop-name.pipe";
import { Position } from "@capacitor/geolocation";
import { PageHeaderComponent } from "../../shared/component/page-header/page-header.component";
import { MpInput, MpSelect, MpSelectOptionNative } from "@mapiacompany/styled-components";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { ToastService } from "../../../service/toast.service";

@Component({
  selector: 'app-map-filter-modal',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    MpSlider,
    CropNamePipe,
    PageHeaderComponent,
    MpInput,
    NzSwitchModule,
    NzSliderModule,
    MpSelect,
    MpSelectOptionNative
  ],
  templateUrl: './map-filter-modal.component.html',
  styleUrls: [ './map-filter-modal.component.scss' ]
})
export class MapFilterModalComponent extends AbstractBaseComponent {
  @Input() position: Position;
  @Input() initialFilter: { latitude: number, longitude: number, mapSheepCropList: any[], startDate: Date };

  searchAddress = new FormControl('');
  searchedPosition: any;

  cropFilterForms: {
    accuracy: FormControl<number>,
    isActive: FormControl<boolean>,
  }[] = [
    {
      accuracy: new FormControl(50),
      isActive: new FormControl(true),
    },
    {
      accuracy: new FormControl(50),
      isActive: new FormControl(true),
    },
    {
      accuracy: new FormControl(50),
      isActive: new FormControl(true),
    },
    {
      accuracy: new FormControl(50),
      isActive: new FormControl(true),
    }
  ]

  cropFilterGroups: FormGroup[] = [
    new FormGroup(this.cropFilterForms[0]),
    new FormGroup(this.cropFilterForms[1]),
    new FormGroup(this.cropFilterForms[2]),
    new FormGroup(this.cropFilterForms[3]),
  ]

  searchStartDate = new FormControl(1);
  dateOptions = [
    { value: 1, name: '하루 전' },
    { value: 7, name: '일주일 전' },
    { value: 15, name: '보름 전' },
    { value: 30, name: '한달 전' },
    { value: 90, name: '3개월 전' },
    { value: 180, name: '6개월 전' },
    { value: 365, name: '일년 전' }
  ]

  sliderMarks = {
    50: '50%',
    95: '95%'
  }

  constructor(
    private modalRef: BsModalRef,
    private toast: ToastService
  ) {
    super();
  }

  ngOnInit() {
  }

  searchPositionByAddress(closeOnSuccess = false) {
    if (this.searchAddress.value?.length === 0) {
      return;
    }
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(this.searchAddress.value, (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const { x, y } = result[0];
        const centerPosition = { x, y };
        this.searchedPosition = centerPosition;
        if (closeOnSuccess) {
          this.close();
        }
      } else {
        this.toast.show('정확한 주소를 입력해주세요.');
        console.log('Failed to search address:', status);
      }
    });
  }

  close() {
    this.modalRef.hide();
  }

  sliderFormatter(value: number) {
    return `${value}%`;
  }
}
