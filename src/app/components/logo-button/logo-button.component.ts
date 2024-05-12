import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo-button.component.html',
  styleUrl: './logo-button.component.css'
})
export class LogoButtonComponent {

}
