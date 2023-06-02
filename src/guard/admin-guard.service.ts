import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { UserActions } from "../service/user.action";
import { NavigateService } from "../service/navigate.service";
import { Actions, ofType } from "@ngrx/effects";
import { ngrxUserActions } from "../ngrx/user.reducer";
import { ToastService } from "../service/toast.service";

@Injectable({ providedIn: 'root' })
export class AdminGuard {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private router: Router,
    private navigate: NavigateService,
    private actions$: Actions,
    private toast: ToastService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return UserActions.currentUserWithApiCall$.pipe(
      map(user => {
        if (user && user.authLevel === 3) {
          return true;
        } else if (user) {
          this.toast.show('관리자 권한이 없습니다.');
          this.router.navigate([ '/main' ]);
          return false;
        } else {
          this.navigate.openLoginModal(() => {
            this.actions$.pipe(
              ofType(ngrxUserActions.loadCurrentUser.SUCCESS),
              tap(({ currentUser }) => {
                if (currentUser.authLevel !== 3) {
                  this.toast.show('관리자 권한이 없습니다.');
                  this.router.navigate([ '/main' ]);
                } else {
                  this.router.navigate([ state.url ]);
                }
              }),
              take(1)
            ).subscribe();
          })
        }

        return false;
      })
    );
  }
}
