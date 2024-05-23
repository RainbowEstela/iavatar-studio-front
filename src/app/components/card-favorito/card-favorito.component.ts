import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-favorito',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-favorito.component.html',
  styleUrl: './card-favorito.component.css'
})
export class CardFavoritoComponent {
  @Input() fecha:string = "";
  @Input() img:string = "";
  @Input() favorito:boolean = false;
  @Input() id:number = 0;
}
