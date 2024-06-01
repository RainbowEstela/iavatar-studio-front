import { NgClass, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown-link',
  standalone: true,
  imports: [RouterLink,NgClass,NgIf],
  templateUrl: './dropdown-link.component.html',
  styleUrl: './dropdown-link.component.css'
})
export class DropdownLinkComponent {
  @Input() url:String;
  @Input() primero:boolean;

  constructor() {
    this.url = "";
    this.primero = false;
  }
}
