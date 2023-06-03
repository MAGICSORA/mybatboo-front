import { Component, OnInit } from '@angular/core';
import { SyntaxSharedModule } from "../../../shared/syntax-shared.module";
import { BottomTabBarComponent } from "../../../../component/bottom-tab-bar/bottom-tab-bar.component";
import { AppHeaderComponent } from "../../../../component/app-header/app-header.component";
import { ActivatedRoute } from "@angular/router";
import { matchMedia$ } from "../../../../util/util";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    BottomTabBarComponent,
    AppHeaderComponent,
  ],
  templateUrl: './tab-bar-layout.component.html',
  styleUrls: [ './tab-bar-layout.component.scss' ]
})
export class TabBarLayoutComponent implements OnInit {
  screenSize$ = matchMedia$<number>({ xs: 1, sm: 2, md: 3, lg: 4 }, 5);
  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      // 주소 변경을 처리하는 로직을 작성합니다.
      console.log('주소 변경됨:', url);
    });
  }
}
