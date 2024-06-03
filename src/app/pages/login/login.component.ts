import { Component, OnInit } from '@angular/core';
import { LayoutLoginComponent } from '../../layouts/layout-login/layout-login.component';
import { AccountFormWrapperComponent } from '../../components/account-form-wrapper/account-form-wrapper.component';
import { BackIavatarService } from '../../core/services/back-iavatar.service';
import { Router } from '@angular/router';
import $, { event } from 'jquery';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutLoginComponent,AccountFormWrapperComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor (private service:BackIavatarService, private router:Router) {

  }

  ngOnInit(): void {
    $("button[class='envio']").on("click",this.login.bind(this));
  }


  login(e:any) {
    // no enviar el formulario
    e.preventDefault();

    // eliminamos la clase de error de los inputs si tuvieran
    $("input[id='nick']").removeClass("error-border")
    $("input[id='password']").removeClass("error-border")

    // tomar los valores de los inputs
    let username:String = "";
    let password:String = "";

    username = $("input[id='nick']").val() as String;
    password = $("input[id='password']").val() as String;

    // comprobar si estan vacios
    if(!username) {
      $("input[id='nick']").addClass("error-border")
      alert("El usuario es obligatorio")
      return
    }

    if(!password) {
      $("input[id='password']").addClass("error-border")
      alert("La contraseña es obligatoria")
      return
    }
  

    // enviar la peticion
    let user = this.service.postLogin(username,password);
    user.subscribe(
      {
        next: (data) => 
        {
          // guardamos la sesion en local storaga
          sessionStorage.setItem("currentUser", data.username.toString())
          sessionStorage.setItem("token", data.token.toString())
          
          // redirigimos a la pagina principal
          this.router.navigate(['/home']);
          console.log("welcome " + data.username);

        },
        error: (error) =>
        {
          $("input[id='nick']").addClass("error-border")
          $("input[id='password']").addClass("error-border")

          alert("Error en usuario o contraseña")

          console.log("hubo un error");
        }
      }
    )
  }

}
