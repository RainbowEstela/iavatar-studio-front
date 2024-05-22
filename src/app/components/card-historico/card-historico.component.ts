import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
