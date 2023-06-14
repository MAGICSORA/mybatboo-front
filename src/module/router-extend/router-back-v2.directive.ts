import { Directive, HostListener, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AbstractBaseComponent } from '@mapiacompany/armory';
import { PLATFORM_TYPE } from "@mapiacompany/styled-components";

@Directive({
  selector: '[routerBack]',
  standalone: true,
})
export class RouterBackV2Directive extends AbstractBaseComponent implements OnInit, OnChanges {
  @Input('routerBack') lastLocationUrl: string;
  @Input() skipLocationChangeUrl: string;
  @Input() routingInterceptor: () => Promise<any> = () => Promise.resolve();

  isEnable: boolean = false;

  get historyLastIndex() {
    return window.ROUTE_HISTORIES.length - 1;
  }

  @HostListener('click')
  onClick() {
    this.routingInterceptor().then(() => {
      const currentHistory = window.ROUTER_BACK_STACK.pop();
      if (window.ROUTER_BACK_STACK.length === 0) {
        this.router.navigateByUrl(this.lastLocationUrl);
      } else {
        const prevHistory = window.ROUTER_BACK_STACK[window.ROUTER_BACK_STACK.length - 1];
        const diff = this.historyLastIndex - currentHistory;
        const goTo = currentHistory - prevHistory + diff;
        window.ROUTE_HISTORIES.splice(window.ROUTE_HISTORIES.length - goTo, window.ROUTE_HISTORIES.length);
        history.go(-goTo + -window.ROUTER_MODAL_OPEN_TIMES);
      }
    })
  }

  constructor(
    @Inject(PLATFORM_TYPE) public platformType: string,
    @Inject(PLATFORM_ID) private platformId: string,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const { skipLocationChangeUrl } = changes;
    if (skipLocationChangeUrl && skipLocationChangeUrl.previousValue !== skipLocationChangeUrl.currentValue) {
      // tslint:disable-next-line:no-conditional-assignment
      if (!this.isEnable && (this.isEnable = !!skipLocationChangeUrl.currentValue)) {
        window.ROUTER_BACK_EXISTS_FLAG++;
      }
      // tslint:disable-next-line:no-conditional-assignment
      if (this.isEnable && !(this.isEnable = !!skipLocationChangeUrl.currentValue)) {
        window.ROUTER_BACK_EXISTS_FLAG--;
      }

      if (
        skipLocationChangeUrl.currentValue &&
        !(window.ROUTER_BACK_STACK.length > 0 && window.ROUTER_BACK_STACK[window.ROUTER_BACK_STACK.length - 1] === this.historyLastIndex)
      ) {
        window.ROUTER_BACK_STACK.push(this.historyLastIndex);
      }
    }
  }

  /**
   * RouterHistoryMiddleware가 트리거 된 후에 ngOnDestroy됨.
   * 즉, ROUTER_BACK_EXISTS_FLAG-- 가 한 타이밍 느리게 되므로 ROUTER_BACK_STACK에 쌓는 로직을 추가.
   *
   * ex) 악보 상세에서 로고 클릭으로 메인으로 이동하는 경우
   * sheet-music/1 [ROUTER_BACK_EXISTS_FLAG: 1]
   * => middle-ware [ROUTER_BACK_EXISTS_FLAG: 1]
   * => routerBack destroy [ROUTER_BACK_EXISTS_FLAG: 0]
   */
  override ngOnDestroy() {
    if (this.isEnable) {
      window.ROUTER_BACK_EXISTS_FLAG--;

      if (window.ROUTER_BACK_STACK[window.ROUTER_BACK_STACK.length - 1] !== this.historyLastIndex) {
        window.ROUTER_BACK_STACK.push(this.historyLastIndex);
      }
    }
  }
}
