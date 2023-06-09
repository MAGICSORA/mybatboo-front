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
import { Options } from "ngx-slider-v2";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzSliderModule } from "ng-zorro-antd/slider";

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
    private modalRef: BsModalRef
  ) {
    super();
  }

  close() {
    this.modalRef.hide();
  }

  sliderFormatter(value: number) {
    return `${value}%`;
  }
}
