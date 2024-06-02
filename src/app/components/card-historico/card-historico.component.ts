import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackIavatarService } from '../../core/services/back-iavatar.service';

@Component({
  selector: 'app-card-historico',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-historico.component.html',
  styleUrl: './card-historico.component.css'
})
export class CardHistoricoComponent {
  @Input() fecha:string = "";
  @Input() img:string = "";
  @Input() favorito:boolean = false;
  @Input() id:number = 0;
  @Output() actualizarLista = new EventEmitter<any>()

  constructor(private service:BackIavatarService) {

  }

  // cambia a favorito la imagen
  hacerFavorito() {
    this.service.hacerFavorito(this.id).subscribe({
      next: (data) => 
      {
        this.actualizarLista.emit();
      },
      error: (error) =>
      {
        console.log("hubo un error");
      }
    })
  }

  // cambia a no favorito la imagen
  deshacerFavorito() {
    this.service.deshacerFavorito(this.id).subscribe({
      next: (data) => 
      {
        this.actualizarLista.emit();
      },
      error: (error) =>
      {
        console.log("hubo un error");
      }
    })
  }

}
