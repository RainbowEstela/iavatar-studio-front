import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-form-wrapper',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-form-wrapper.component.html',
  styleUrl: './account-form-wrapper.component.css'
})
export class AccountFormWrapperComponent {
  @Input() titulo:String
  @Input() url:String
  @Input() urlName:String

  constructor() {
    this.titulo = "";
    this.url = "";
    this.urlName = "";
  }
}
