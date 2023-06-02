import { Component } from '@angular/core';
import { SyntaxSharedModule } from "../../shared/syntax-shared.module";
import { MpCol, MpHeadDirective, MpRow, MpTable } from "@mapiacompany/styled-components/table";
import {
  AlertService,
  MpBlank,
  MpInput,
  MpMenuCell,
  MpSelect,
  MpSelectOption,
  MpSelectOptionDirective, MPSelectOptionsDirective
} from "@mapiacompany/styled-components";
import { MpBottomPagination } from "@mapiacompany/styled-components/pagination";
import { ApiService } from "../../../service/api.service";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  iif,
  switchMap,
  tap
} from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";
import { AsyncStatus, bindStatus } from "@mapiacompany/armory";
import { valueChanges$ } from "../../../util/util";
import { filter } from "rxjs/operators";
import { ToastService } from "../../../service/toast.service";

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    MpTable,
    MpCol,
    MpRow,
    MpHeadDirective,
    MpBlank,
    MpBottomPagination,
    MpInput,
    MpSelect,
    MpMenuCell,
    MpSelectOptionDirective,
    MPSelectOptionsDirective,
  ],
  templateUrl: './user-management.component.html',
  styleUrls: [ './user-management.component.scss' ]
})
export class UserManagementComponent {

  form = {
    name: new FormControl(''),
    email: new FormControl(''),
  }

  formGroup = new FormGroup(this.form);

  loader$ = new BehaviorSubject(1);
  status$ = new BehaviorSubject(AsyncStatus.INITIAL);
  userSearch$ = combineLatest([
    this.loader$,
    valueChanges$(this.form.name).pipe(
      distinctUntilChanged(),
      debounceTime(500),
    ),
    valueChanges$(this.form.email).pipe(
      distinctUntilChanged(),
      debounceTime(500),
    )
  ]).pipe(
    switchMap(([ page, name, email]) => {
      return this.api.loadUserList({ name, email }, page).pipe(
        bindStatus(this.status$),
        tap(console.log)
      )
    })
  )

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private toast: ToastService
  ) {
  }

  changeUserLevel(user: User, value: number) {
    const { authLevel, name, email } = user;

    // 이미 설정된 값을 클릭했을 경우 요청 안 함.
    if (authLevel === value) {
      return;
    }

    this.alert.confirm({
      title: '권한을 변경하시겠습니까?',
      content: `${name}(${email})님을 ${value === 1 ? '유저' : value === 2 ? '전문가' : '관리자' }로 변경하시겠습니까?`,
      confirmMessage: '변경',
      confirmButtonColor: 'orangeDark',
      cancelMessage: '취소'
    }).pipe(
      filter(confirm => !!confirm),
      switchMap(() => this.api.setAuthLevel(user.userId, value)),
      tap(() => {
        this.toast.show('권한이 변경되었습니다.');
        this.loader$.next(this.loader$.value);
      }),
      catchError(err => this.alert.error(err))
    ).subscribe();
  }
}
