import { Component, OnInit } from '@angular/core';
import { LayoutLoginComponent } from '../../layouts/layout-login/layout-login.component';
import { AccountFormWrapperComponent } from '../../components/account-form-wrapper/account-form-wrapper.component';
import { Router, RouterLink } from '@angular/router';
import { BackIavatarService } from '../../core/services/back-iavatar.service';
import $, { event } from 'jquery';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LayoutLoginComponent,AccountFormWrapperComponent,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private service:BackIavatarService, private router:Router) {

  }

  ngOnInit(): void {
    $("div[class~='exito-reg']").hide();
    $("div[class~='boton-envio'] > button[type~='submit']").on("click",this.register.bind(this))
  }

  register(e:any) {
    // no enviar el formulario
    e.preventDefault();

    // eliminamos la clase de error de los inputs si tuvieran
    $("input[id~='nick']").removeClass("error-border")
    $("input[id~='email']").removeClass("error-border")
    $("input[id~='password']").removeClass("error-border")

    // tomar los valores de los inputs
    let username:String = "";
    let email:String = "";
    let password:String = "";

    username = $("input[id='nick']").val() as String;
    email = $("input[id='email']").val() as String;
    password = $("input[id='password']").val() as String;

     // comprobar si estan vacios
     if(!username) {
      $("input[id='nick']").addClass("error-border")
      alert("El usuario es obligatorio")
      return
    }

    if(username.indexOf(" ") != -1) {// comprobar que el usuario no tiene espacios
      $("input[id='nick']").addClass("error-border")
      alert("El usuario no puede contener espacios")
      return
    }

    if(!email) {
      $("input[id='email']").addClass("error-border")
      alert("El email es obligatorio")
      return
    }

    if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      $("input[id='email']").addClass("error-border")
      alert("El email no es válido")
      return
    }

    email = email.trim();// quitar el espacio del principio y del final

    if(!password) {
      $("input[id='password']").addClass("error-border")
      alert("La contraseña es obligatoria")
      return
    }

    if(password.indexOf(" ") != -1 ) {
      alert("La contraseña no puede contener espacios")
      return
    }

    // enviar la peticion
    this.service.postRegister(username,email,password)
    .subscribe({
      next: (data) => 
        {

          // enviar la peticion
          let user = this.service.postLogin(username,password);
          user.subscribe(
            {
              next: (data) => 
              {
                // guardamos la sesion en local storaga
                localStorage.setItem("currentUser", data.username.toString())
                localStorage.setItem("token", data.token.toString())
                
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


        },
        error: (error) =>
        {
          $("input[id='nick']").addClass("error-border")
          $("input[id='email']").addClass("error-border")
          $("input[id='password']").addClass("error-border")

          alert("Error registrando nuevo usuario")

          console.log("hubo un error");
        }

    })
  }

}
