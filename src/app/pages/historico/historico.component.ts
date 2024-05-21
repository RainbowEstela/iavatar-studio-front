import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { RouterLink } from '@angular/router';
import { CardHistoricoComponent } from '../../components/card-historico/card-historico.component';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [LayoutWebComponent,RouterLink,CardHistoricoComponent],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css'
})
export class HistoricoComponent {
  avatares:Array<any> = [];

  constructor() {
    this.avatares.push({
      "fecha":"22-06-1998",
      "img":"1.png",
      "favorito":false
    })
    this.avatares.push({
      "fecha":"22-06-1998",
      "img":"3.png",
      "favorito":true
    })
    this.avatares.push({
      "fecha":"22-06-1998",
      "img":"4.png",
      "favorito":false
    })
    this.avatares.push({
      "fecha":"22-06-1998",
      "img":"5.png",
      "favorito":true
    })
  
  }

}
