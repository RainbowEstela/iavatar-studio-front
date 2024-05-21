import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-historico',
  standalone: true,
  imports: [],
  templateUrl: './card-historico.component.html',
  styleUrl: './card-historico.component.css'
})
export class CardHistoricoComponent {
  @Input() fecha:string = "";
  @Input() img:string = "";
  @Input() favorito:boolean = false;
}
