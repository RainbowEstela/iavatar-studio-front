import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { CardFavoritoComponent } from '../../components/card-favorito/card-favorito.component';
import { Router, RouterLink } from '@angular/router';
import { BackIavatarService } from '../../core/services/back-iavatar.service';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [LayoutWebComponent,CardFavoritoComponent,RouterLink],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  avatares:Array<any> = [];

  constructor(private service:BackIavatarService, private router:Router) {
    this.actualizarValores();

  }

  // llama a la api para buscar las imagenes del usuario
  actualizarValores() {

    // reseteamos el array
    this.avatares = [];

    this.service.imagenesFavorito().subscribe({
      next: (data) => 
      {
        // guardamos los valores necesarios en el array
        for (const key in data) {
          this.avatares.push({
            "id":data[key].id,
            "fecha":data[key].fechaCreacion,
            "img": this.service.imgUrl + data[key].imagenNombre,
            "favorito":data[key].favorito,
          })
        }
        

      },
      error: (error) =>
      {
        console.log("hubo un error" + error);
      }
    })
  }
}
