import { Component, OnInit } from '@angular/core';
import { LogoButtonComponent } from '../logo-button/logo-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import $ from 'jquery';
import { DropdownLinkComponent } from '../dropdown-link/dropdown-link.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoButtonComponent,DropdownButtonComponent,DropdownLinkComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  
  logeado:Boolean = false

  ngOnInit(): void {
  
  }
}
