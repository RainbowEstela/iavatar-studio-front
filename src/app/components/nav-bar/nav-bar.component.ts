import { Component, OnInit } from '@angular/core';
import { LogoButtonComponent } from '../logo-button/logo-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import $ from 'jquery';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoButtonComponent,DropdownButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  
  ngOnInit(): void {
  
  }
}
