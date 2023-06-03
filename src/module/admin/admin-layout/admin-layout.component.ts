import { Component } from '@angular/core';
import { SyntaxSharedModule } from "../../shared/syntax-shared.module";
import { AppHeaderComponent } from "../../../component/app-header/app-header.component";
import { MpBlank, MpTabGroup, MpTabItem } from "@mapiacompany/styled-components";
import { matchMedia$ } from "../../../util/util";
import { tap } from "rxjs";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    AppHeaderComponent,
    MpTabGroup,
    MpTabItem,
    MpBlank
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  screenSize$ = matchMedia$<number>({ xs: 1, sm: 2, md: 3, lg: 4 }, 5).pipe(
    tap(console.log)
  )
}
