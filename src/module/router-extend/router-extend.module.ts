import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterHistoryMiddleware } from './router-history-middleware.service';
import { ModalRouteMiddleware } from './modal-route-middleware.service';
import { AuthHandleMiddleware } from './auth-handle.middleware';
import { RouterBackV2Directive } from './router-back-v2.directive';

export const ROUTE_INTERCEPTORS = [
  ModalRouteMiddleware,
  AuthHandleMiddleware,
  RouterHistoryMiddleware,
];

@NgModule({
  exports: [
    RouterBackV2Directive
  ],
  imports: [
    CommonModule,
    RouterBackV2Directive
  ],
  providers: [
    ...ROUTE_INTERCEPTORS,
  ],
})
export class RouterExtendModule {
  constructor() {
    // router back 로직 초기 값 initializing
    window.ROUTER_BACK_EXISTS_FLAG = window.ROUTER_BACK_EXISTS_FLAG || 0;
    window.ROUTE_HISTORIES = window.ROUTE_HISTORIES || [];
    window.ROUTER_BACK_STACK = window.ROUTER_BACK_STACK || [];
    window.ROUTER_MODAL_OPEN_TIMES = window.ROUTER_MODAL_OPEN_TIMES || 0;
  }
}

