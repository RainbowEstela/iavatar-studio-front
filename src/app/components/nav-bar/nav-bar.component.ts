import { Component, OnInit } from '@angular/core';
import { LogoButtonComponent } from '../logo-button/logo-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import $ from 'jquery';
import { DropdownLinkComponent } from '../dropdown-link/dropdown-link.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoButtonComponent,DropdownButtonComponent,DropdownLinkComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  
  logeado:Boolean = true
  usuarioSesion:String = "";

  constructor(private router:Router) {
    this.checkLogin();
  }

  ngOnInit(): void {  
  }


  logout() {
    console.log("borrando sesion")

    if(localStorage.getItem("currentUser") || localStorage.getItem("token")) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");

      this.checkLogin();
      this.router.navigate(["/home"])
    } 
  }

  checkLogin() {

    let currentUser = localStorage.getItem("currentUser");

    if(currentUser) {
      this.logeado = true;
      this.usuarioSesion = currentUser.toString();
      //console.log(localStorage.getItem("currentUser"))
    } else {
      this.logeado = false
      this.usuarioSesion = "";
    }
  }
}
