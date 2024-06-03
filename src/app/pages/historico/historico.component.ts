import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { Router, RouterLink } from '@angular/router';
import { CardHistoricoComponent } from '../../components/card-historico/card-historico.component';
import { BackIavatarService } from '../../core/services/back-iavatar.service';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [LayoutWebComponent,RouterLink,CardHistoricoComponent],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css'
})
export class HistoricoComponent {
  avatares:Array<any> = [];

  constructor(private service:BackIavatarService, private router:Router) {
    this.actualizarValores();

  }

  // llama a la api para buscar las imagenes del usuario
  actualizarValores() {

    // reseteamos el array
    this.avatares = [];

    this.service.imagenesUsuario().subscribe({
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
