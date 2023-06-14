import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { BsModalService } from '@mapiacompany/ngx-bootstrap-modal';
import { Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class ModalRouteMiddleware  {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private router: Router,
    private modalService: BsModalService,
  ) {
  }

  getPath(route: ActivatedRouteSnapshot) {
    const url = route.url.map(u => u.toString()).filter(u => u.length > 0).join('/');
    const childPath = route.children?.map(snapshot => this.getPath(snapshot)).filter(u => u.length > 0).join('/');
    return (childPath) ? [ url, childPath ].filter(u => u.length > 0).join('/') : url;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if (isPlatformServer(this.platformId)) {
      return true; // SSR에서는 무조건 허용
    }

    if (this.router.getCurrentNavigation()?.extras.skipLocationChange) {
      const lastState = history.state;
      if (history.state?.modalId && lastState.hasOwnUrl) {
        // 라우팅 모달이 열려있을 때는 주소 보존
        setTimeout(() => {
          history.replaceState(lastState, '', lastState.url);
        })
      }
      return true;
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.canActivateChild(route, state);
  }
}

