import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { SyntaxSharedModule } from "../../shared/syntax-shared.module";
import { PageHeaderComponent } from "../../shared/component/page-header/page-header.component";
import { Geolocation, Position } from "@capacitor/geolocation";
import { AbstractBaseComponent, observeProperty$ } from "@mapiacompany/armory";
import { filter, switchMap } from "rxjs/operators";
import { combineLatest, distinctUntilChanged, Observable, tap, map } from "rxjs";
import { DsSpinner, MpBlank } from "@mapiacompany/styled-components";
import { BsModalRef, MpBottomSheetService } from "@mapiacompany/ngx-bootstrap-modal";
import { ApiService } from "../../../service/api.service";
import { MpSlider } from "@mapiacompany/styled-components/slider";
import { CropNamePipe } from "../../../pipe/crop-name.pipe";
import { MapFilterModalComponent } from "../map-filter-modal/map-filter-modal.component";
import { DatePipe } from "@angular/common";
import { getCropName, getDiseaseName } from "../../../util/util";
import { ToastService } from "../../../service/toast.service";
import { DiseaseListItem } from "../../diagnosis/disease-list-item/disease-list-item.component";
import { DiseaseNamePipe } from "../../../pipe/disease-name.pipe";
import { NavigateService } from "../../../service/navigate.service";

declare interface MarkerInfo {
  latitude: number;
  longitude: number;
  diagnosisRecord: DiagnosisRecord;
  diseaseCode: number;
  accuracy: number;
  cropType: number;
}

@Component({
  selector: 'app-disease-map-modal',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    PageHeaderComponent,
    MpBlank,
    DsSpinner,
    MpSlider,
    CropNamePipe,
    DiseaseListItem,
    DiseaseNamePipe
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './disease-map-modal.component.html',
  styleUrls: [ './disease-map-modal.component.scss' ]
})
export class DiseaseMapModalComponent extends AbstractBaseComponent {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('filterModal') filterModalTemplate: TemplateRef<any>;

  map: any;

  cropType: number;

  pageSheetOpened: boolean = false;

  cropFilterInput: { latitude: number, longitude: number, mapSheepCropList: any[], dateRange: number };

  diseaseList$: Observable<{
    accuracy: number,
    diagnosisRecord: DiagnosisRecord,
    diseaseCode: number,
    sickKey: string,
    boxX1: number,
    boxX2: number,
    boxY1: number,
    boxY2: number
  }[]> = observeProperty$(this, 'cropFilterInput').pipe(
    filter(input => !!input),
    distinctUntilChanged(),
    switchMap(input => {
      return this.api.loadNearDiseaseRecords({
        ...input,
        startDate: this.getDateDaysAgo(input.dateRange)
      }).pipe(
        map(result => {
          // 정상 데이터 필터링
          return result.filter(record => ![0, 3, 6, 9].includes(record.diseaseCode));
        })
      );
    })
  );

  markers: any[] = []; // 마커를 저장할 배열

  position: Position;
  geocoder: any;
  currentAddress: string;
  infoWindow: any;

  constructor(
    private api: ApiService,
    private bottomSheet: MpBottomSheetService,
    private datePipe: DatePipe,
    private toast: ToastService,
    private navigate: NavigateService
  ) {
    super();
  }

  ngOnInit() {
    Geolocation.getCurrentPosition().then(position => {
      this.position = position;

      kakao.maps.load(() => {
        this.geocoder = new kakao.maps.services.Geocoder();
        this.getAddressFromCoords(position.coords.latitude, position.coords.longitude).then(address => {
          this.currentAddress = address;
        });
      });
    });
  }

  ngAfterViewInit() {
    this.subscribeOn(
      observeProperty$(this, 'position').pipe(
        filter(position => !!position),
        tap(position => {
          this.initializeMap();
        })
      )
    );

    this.subscribeOn(
      this.diseaseList$.pipe(
        tap((diseaseRecords: { accuracy: number, diseaseCode: number, diagnosisRecord: DiagnosisRecord }[]) => {
          const markerInfos: MarkerInfo[] = diseaseRecords.map(record => {
            const { diagnosisRecord, diseaseCode, accuracy } = record;
            const { userLongitude, userLatitude } = diagnosisRecord;
            const info: MarkerInfo = {
              latitude: userLatitude,
              longitude: userLongitude,
              diagnosisRecord,
              diseaseCode,
              accuracy,
              cropType: diagnosisRecord.cropType
            };
            return info;
          });
          this.addMarkers(markerInfos);
        })
      )
    )
  }

  openDiseaseDetailModal(sickKey, diseaseCode, cropType) {
    this.navigate.openDiseaseDetailModal({
      sickKey,
      diseaseCode,
      cropName: getCropName(cropType),
    });
  }

  initFilter() {
    this.cropFilterInput = {
      latitude: this.position.coords.latitude,
      longitude: this.position.coords.longitude,
      mapSheepCropList: [
        {
          cropType: 0,
          accuracy: 0.5,
          isOn: true
        },
        {
          cropType: 1,
          accuracy: 0.5,
          isOn: true
        },
        {
          cropType: 2,
          accuracy: 0.5,
          isOn: true
        },
        {
          cropType: 3,
          accuracy: 0.5,
          isOn: true
        },
      ],
      dateRange: 7
    }
  }

  initializeMap(): void {
    if (!this.position) {
      console.error("Current position is not available");
      return;
    }

    const mapContainer = this.mapElement.nativeElement; // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(this.position.coords.latitude, this.position.coords.longitude), // 지도의 중심좌표
      level: 5 // 지도의 확대 레벨
    };

    // 지도를 생성합니다.
    this.map = new kakao.maps.Map(mapContainer, mapOption);

    kakao.maps.event.addListener(this.map, 'click', (mouseEvent: any) => {
      if (this.pageSheetOpened) {
        this.pageSheetOpened = false;
        return;
      }
    });

    // 현재 위치에 마커를 생성합니다
    this.addMarker(this.position.coords.latitude, this.position.coords.longitude);


    // 필터 초기화
    this.initFilter();
  }

  getAddressFromCoords(latitude: number, longitude: number, fallback?: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.geocoder) {
        reject('Kakao Maps Geocoder is not initialized.');
        return;
      }

      this.geocoder.coord2Address(longitude, latitude, (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const address = result[0].address;
          const fullAddress = `${address.address_name}`;
          resolve(fullAddress);
        } else {
          if (!!fallback) {
            resolve(fallback);
          }
          reject('Failed to get address from coordinates.');
        }
      });
    });
  }

  addMarker(latitude: number, longitude: number, info?: MarkerInfo) {
    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow();

    // 마커에 클릭 이벤트를 등록합니다
    marker.addListener('click', () => {
      let content;
      if (!!info) {
        const { accuracy, diseaseCode, diagnosisRecord } = info;
        const { imagePath, regDate, cropType } = diagnosisRecord;
        const cropName = getCropName(cropType);
        const diseaseName = getDiseaseName(diseaseCode);
        const date = this.datePipe.transform(regDate, 'yyyy-MM-dd');
        const percent = (accuracy * 100).toFixed(2);
        const closeOverlay = () => {
          infowindow.close();
        };
        content = `<div class="custom-infowindow"><div class="wrap">
                        <div class="info">
                          <div class="title">
                            (${cropName}) ${diseaseName}
                          </div>
                          <div class="body">
                            <div class="img">
                              <img src="${imagePath}" width="60" height="60">
                            </div>
                            <div class="desc">
                              <div class="ellipsis">진단일: ${date}</div>
                              <div class="jibun ellipsis">정확도: ${percent}%</div>
                            </div>
                          </div>
                        </div>
                      </div></div>`;
      } else {
        content = `<div class="current-position-overlay">이곳 주변의 병해 정보를 가져옵니다</div>`;
      }

      if (infowindow.getMap()) { //인포윈도우 바깥 영역을 클릭한 경우에도 닫기
        // 인포윈도우가 열려있는 경우 같은 마커를 클릭한 것이므로 닫습니다
        infowindow.close();
      } else {
        // 인포윈도우가 닫혀있는 경우 새로운 마커를 클릭한 것이므로 엽니다
        infowindow.setContent(content);
        infowindow.open(this.map, marker);
      }

      if (this.pageSheetOpened) {
        this.pageSheetOpened = false;
        return;
      }
    });

    // 인포윈도우를 닫기 위해 맵 클릭 이벤트를 등록합니다
    kakao.maps.event.addListener(this.map, 'click', () => {
      infowindow.close();
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(this.map);
    if (!info) {
      if (this.markers[0]) {
        this.markers[0].marker.setMap(null);
        if (this.markers[0].infowindow) {
          this.markers[0].infowindow.setMap(null);
        }
      }
      this.markers[0] = { marker, infowindow };
    } else {
      this.markers.push({ marker, infowindow });
    }
  }


  addMarkers(markerInfos: MarkerInfo[]) {
    // 모든 마커를 지웁니다
    this.clearMarkers();

    markerInfos.forEach(info => {
      this.addMarker(info.latitude, info.longitude, info);
    })
  }


  clearMarkers() {
    // Only clear markers added after the current location marker
    this.markers.slice(1).forEach(({ marker, overlay }) => {
      marker.setMap(null);
      if (overlay) {
        overlay.setMap(null);
      }
    });
    // Keep only the current location marker in the array
    this.markers = [ this.markers[0] ];
  }

  close() {
    // this.modalRef.hide();
  }

  openFilter() {
    const filterRef = this.bottomSheet.show(MapFilterModalComponent, {
      initialState: {
        initialFilter: this.cropFilterInput,
        position: this.position
      },
      onClose: () => {
        const { position, cropFilterGroups, searchStartDate, searchedPosition, searchAddress } = filterRef.content;
        this.cropFilterInput = {
          latitude: !!searchedPosition ? parseFloat(searchedPosition.y) : position.coords.latitude,
          longitude: !!searchedPosition ? parseFloat(searchedPosition.x) : position.coords.longitude,
          mapSheepCropList: cropFilterGroups.map((group, index) => {
            console.log(group.value);
            return {
              cropType: index,
              accuracy: group.value.accuracy / 100,
              isOn: group.value.isActive,
            }
          }),
          dateRange: searchStartDate.value,
        };

        if (searchedPosition) {
          const { x, y } = searchedPosition;
          this.getAddressFromCoords(parseFloat(y), parseFloat(x), searchAddress.value).then(address => {
            this.currentAddress = address;
            this.position = { coords: { latitude: parseFloat(y), longitude: parseFloat(x) } } as Position;
          });
          this.setCenterPosition(parseFloat(y), parseFloat(x));
          this.addMarker(parseFloat(y), parseFloat(x));
        }
      }
    });
  }

  getDateDaysAgo(days: number): Date {
    const currentDateTime = new Date();
    const targetDateTime = new Date(currentDateTime.getTime() - days * 24 * 60 * 60 * 1000);
    targetDateTime.setHours(0, 0, 0, 0);
    return targetDateTime;
  }

  setCenterPosition(latitude: number, longitude: number) {
    const centerPosition = new kakao.maps.LatLng(latitude, longitude);
    this.map.setCenter(centerPosition);
  }

  setCurrentMapCenterPosition() {
    const { La, Ma } = this.map.getCenter();
    this.cropFilterInput = {
      ...this.cropFilterInput,
      latitude: Ma,
      longitude: La
    }
    this.setCenterPosition(Ma, La);
    this.markers[0]?.marker?.setPosition(new kakao.maps.LatLng(Ma, La));
    this.markers[0]?.infowindow?.close();
  }
}
