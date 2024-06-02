import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IAimage, UserIavatar, UserRegister } from '../../interfaces/iavatar-interface';

@Injectable({
  providedIn: 'root'
})
export class BackIavatarService {
  
  baseUrl = "http://localhost:8080/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
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

    let currentUser = localStorage.getItem("currentUser");

    if(!currentUser) {
      currentUser = "";
    }

    console.log(this.baseUrl + "api/imagen/todas/" + currentUser);

    return this.http.get<Array<IAimage>>( this.baseUrl + "api/imagen/todas/" + currentUser, this.httpOptionsAuth)
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
    let currentUser = localStorage.getItem("currentUser");

    if(!currentUser) {
      currentUser = "";
    }

    console.log(this.baseUrl + "api/imagen/todas/" + currentUser);

    return this.http.get<Array<IAimage>>( this.baseUrl + "api/imagen/todas/" + currentUser + "/favoritos", this.httpOptionsAuth)
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
    return this.http.get<IAimage>( this.baseUrl + "api/imagen/favorito/"+ id, this.httpOptionsAuth)
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

  deshacerFavorito(id:Number): Observable<IAimage> {
    return this.http.get<IAimage>( this.baseUrl + "api/imagen/desfavorito/"+ id, this.httpOptionsAuth)
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
