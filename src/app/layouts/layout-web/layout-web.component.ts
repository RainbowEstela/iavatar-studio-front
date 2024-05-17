import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout-web',
  standalone: true,
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './layout-web.component.html',
  styleUrl: './layout-web.component.css'
})
export class LayoutWebComponent{
 
}
