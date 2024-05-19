import { Component } from '@angular/core';
import { LayoutLoginComponent } from '../../layouts/layout-login/layout-login.component';
import { AccountFormWrapperComponent } from '../../components/account-form-wrapper/account-form-wrapper.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LayoutLoginComponent,AccountFormWrapperComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
