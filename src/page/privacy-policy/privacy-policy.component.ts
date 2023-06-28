import { Component } from '@angular/core';
import { SyntaxSharedModule } from "../../module/shared/syntax-shared.module";
import { AppHeaderComponent } from "../../component/app-header/app-header.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    SyntaxSharedModule,
    AppHeaderComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

}
