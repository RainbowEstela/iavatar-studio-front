import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IAimage, UserIavatar, UserRegister } from '../../interfaces/iavatar-interface';

@Injectable({
  providedIn: 'root'
})
export class BackIavatarService {

  imgUrl = "http://localhost:8080/spring-imagenes/"
  
  baseUrl = "http://localhost:8080/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) { }


  // llamada de login
  postLogin(nick:String,pass:String) :Observable<UserIavatar>{
    return this.http.post<UserIavatar>( this.baseUrl + "auth/login", {username:nick, password:pass},this.httpOptions)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }


  // llamada de registro
  postRegister(nick:String,email:String ,pass:String) :Observable<UserRegister> {
    return this.http.post<UserRegister>( this.baseUrl +"auth/register", {username:nick,email, password:pass},this.httpOptions)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }


  // llamada mostrar historico
  imagenesUsuario(): Observable<Array<IAimage>> {

    console.log(sessionStorage.getItem("token"));
    let currentUser = sessionStorage.getItem("currentUser");

    if(!currentUser) {
      currentUser = "";
    }

    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      })
    }

    return this.http.get<Array<IAimage>>( this.baseUrl + "api/imagen/todas/" + currentUser, httpOptionsAuth)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }


  // llamada mostrar favoritos
  imagenesFavorito(): Observable<Array<IAimage>> {
    let currentUser = sessionStorage.getItem("currentUser");
  
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      })
    }

    if(!currentUser) {
      currentUser = "";
    }

    console.log(this.baseUrl + "api/imagen/todas/" + currentUser);

    return this.http.get<Array<IAimage>>( this.baseUrl + "api/imagen/todas/" + currentUser + "/favoritos", httpOptionsAuth)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }


  // llamada para hacer favorito
  hacerFavorito(id:Number): Observable<IAimage> {
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      })
    }

    return this.http.get<IAimage>( this.baseUrl + "api/imagen/favorito/"+ id, httpOptionsAuth)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }


  // llamada para deshacer favorito
  deshacerFavorito(id:Number): Observable<IAimage> {

    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      })
    }

    return this.http.get<IAimage>( this.baseUrl + "api/imagen/desfavorito/"+ id, httpOptionsAuth)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }



  // llamada para buscar por id
  findByid(id:Number): Observable<IAimage> {

    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      })
    }

    return this.http.get<IAimage>( this.baseUrl + "api/imagen/mostrar/"+ id, httpOptionsAuth)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }


  // llama a la api para crear un nuevo avatar
  crearAvatar(peticion:String): Observable<IAimage> {

    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
      })
    }

    return this.http.post<IAimage>( this.baseUrl +"api/imagen/nueva", {peticion:peticion},httpOptionsAuth)
    .pipe(catchError((err:HttpErrorResponse) => {

      let errorMessage = "";

      if(err.error instanceof ErrorEvent) {
        errorMessage = "[Error]: " + err.message;
      } else {
        errorMessage = "[Error]: Codigo: " + err.status + ", Mensaje: " + err.message;
      }

      return throwError(() => errorMessage)
    }))
  }

}
