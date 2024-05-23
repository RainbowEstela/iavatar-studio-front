import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { CardFavoritoComponent } from '../../components/card-favorito/card-favorito.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [LayoutWebComponent,CardFavoritoComponent,RouterLink],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  avatares:Array<any> = [];
  
  constructor() {
    
    this.avatares.push({
      "id":2,
      "fecha":"22-06-1998",
      "img":"3.png",
      "favorito":true
    })
    this.avatares.push({
      "id":4,
      "fecha":"22-06-1998",
      "img":"5.png",
      "favorito":true
    })
    this.avatares.push({
      "id":4,
      "fecha":"22-06-1998",
      "img":"5.png",
      "favorito":true
    })
    this.avatares.push({
      "id":4,
      "fecha":"22-06-1998",
      "img":"5.png",
      "favorito":true
    })
    this.avatares.push({
      "id":4,
      "fecha":"22-06-1998",
      "img":"5.png",
      "favorito":false
    })
  
  }
}
