import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-dropdown-button',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-button.component.html',
  styleUrl: './dropdown-button.component.css'
})
export class DropdownButtonComponent implements OnInit{


  ngOnInit(): void {
    $("div[class='icons']").on("click",this.toggleIcons)
  }

  toggleIcons() {
    $("svg[class='cross']").toggle();
    $("svg[class='burger']").toggle();
    $("div[class='opciones-d']").stop().slideToggle(300);
  }
}
