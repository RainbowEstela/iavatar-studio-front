import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutWebComponent } from './layouts/layout-web/layout-web.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutWebComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iavatar-studio-front';
}
