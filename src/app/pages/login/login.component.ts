import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { LayoutLoginComponent } from '../../layouts/layout-login/layout-login.component';
import { AccountFormWrapperComponent } from '../../components/account-form-wrapper/account-form-wrapper.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutLoginComponent,AccountFormWrapperComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
