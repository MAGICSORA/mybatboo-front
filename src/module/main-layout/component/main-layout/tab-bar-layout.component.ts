import { Component, OnInit } from '@angular/core';
import { SyntaxSharedModule } from "../../../shared/syntax-shared.module";
import { BottomTabBarComponent } from "../../../../component/bottom-tab-bar/bottom-tab-bar.component";
import { AppHeaderComponent } from "../../../../component/app-header/app-header.component";
import { ActivatedRoute, Router } from "@angular/router";
import { matchMedia$ } from "../../../../util/util";
import { tap } from "rxjs";
import { Store } from "@ngrx/store";
import { GlobalState } from "../../../../ngrx";
import { selectCurrentUser } from "../../../../ngrx/user.state";
import { filter } from "rxjs/operators";

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
  screenSize$ = matchMedia$<number>({ xs: 1, sm: 2, md: 3, lg: 4 }, 5).pipe(
    tap(media => {
      if (media > 3) {
        this.store.select(selectCurrentUser).pipe(
          filter(user => !!user),
          tap(user => {
            switch (user.authLevel) {
              case 1:
                break;
              case 2:
                this.router.navigate(['/expert'])
                break;
              case 3:
                this.router.navigate(['/admin'])
                break;
            }
          })
        ).subscribe()
      }
    })
  );
  constructor(
    private route: ActivatedRoute,
    private store: Store<GlobalState>,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
}
