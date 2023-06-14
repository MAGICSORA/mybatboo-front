import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BsModalService } from '@mapiacompany/ngx-bootstrap-modal';
import { tap } from 'rxjs/operators';
import { PLATFORM_TYPE } from "@mapiacompany/styled-components";

declare global {
  interface Window {
    ROUTER_BACK_EXISTS_FLAG: number;
    ROUTE_HISTORIES: any[];
    ROUTER_BACK_STACK: any[];
    ROUTER_MODAL_OPEN_TIMES: number; // 모달이 열렸던 타이밍 측정 (라우팅 바뀔 때마다 리셋되야함)
    // 모달이 열릴 때마다 history.state 가 하나씩 쌓이도록 @mapiacompany/ngx-bootstrap-modal 구현이 되어있기 때문에 위와 같은 변수 제어
  }
}

@Injectable()
export class RouterHistoryMiddleware  {
  constructor(
    private router: Router,
    @Inject(PLATFORM_TYPE) public platformType: string,
    private modalService: BsModalService,
  ) {
    this.modalService.onShow.pipe(
      tap(() => {
        window.ROUTER_MODAL_OPEN_TIMES++;
      })
    ).subscribe();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.router.getCurrentNavigation()) {
      const navigation = this.router.getCurrentNavigation();
      if (
        navigation.trigger === 'imperative' && !navigation.extras?.skipLocationChange &&
        window.ROUTE_HISTORIES[window.ROUTE_HISTORIES.length - 1] !== navigation.finalUrl.toString()
      ) {
        window.ROUTE_HISTORIES.push(navigation.finalUrl.toString());
        if (!window.ROUTER_BACK_EXISTS_FLAG) { // routerBack이 존재하는 경우
          window.ROUTER_BACK_STACK.push(window.ROUTE_HISTORIES.length - 1);
        }
      }

      if (
        navigation.trigger === 'popstate' &&
        window.ROUTE_HISTORIES[window.ROUTE_HISTORIES.length - 2] === navigation.finalUrl.toString()
      ) {
        window.ROUTE_HISTORIES.pop();
        while (window.ROUTER_BACK_STACK.length > 0 && window.ROUTER_BACK_STACK[window.ROUTER_BACK_STACK.length - 1] > window.ROUTE_HISTORIES.length - 1) {
          window.ROUTER_BACK_STACK.pop();
        }
      }
      window.ROUTER_MODAL_OPEN_TIMES = 0;
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivateChild(route, state);
  }
}
