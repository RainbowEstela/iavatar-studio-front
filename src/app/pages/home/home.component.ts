import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutWebComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
