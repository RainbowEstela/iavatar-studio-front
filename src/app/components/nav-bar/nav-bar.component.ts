import { Component, OnInit } from '@angular/core';
import { LogoButtonComponent } from '../logo-button/logo-button.component';
import $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  
  ngOnInit(): void {
    $("app-nav-bar div").on( "click", function() {
      $( this ).slideUp();
    } )
    //$("app-logo-button").fadeOut(4000)
  }
}
