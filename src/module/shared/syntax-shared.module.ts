import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  DsSpinner, MpAdornmentDirective,
  MpBadge,
  MpButton,
  MpDivider,
  MpHelperText,
  MpIcon,
  MpIconButton, MpPositionLeftDirective, MpPositionRightDirective,
  MpText
} from "@mapiacompany/styled-components";
import { ArmoryModule, LetDirective, ToHelperTextPipe } from "@mapiacompany/armory";
import { TranslateModule } from "@mapiacompany/ngx-translate";
import { IonicModule } from "@ionic/angular";
import { NzImageModule } from "ng-zorro-antd/experimental/image";

const components = [
  MpIcon,
  MpIconButton,
  MpButton,
  MpText,
  MpDivider,
  MpHelperText,
  MpBadge,
  DsSpinner
];

const directives = [
  MpPositionLeftDirective,
  MpPositionRightDirective,
  MpAdornmentDirective,
  LetDirective,
];

const pipes = [
  ToHelperTextPipe
];

@NgModule({
  declarations: [],
  imports: [
    ArmoryModule,
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    NzImageModule,
    ...components,
    ...directives,
    ...pipes
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    IonicModule,
    NzImageModule,
    ...components,
    ...directives,
    ...pipes
  ]
})
export class SyntaxSharedModule {
}
