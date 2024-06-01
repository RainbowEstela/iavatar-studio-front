import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserIavatar, UserRegister } from '../../interfaces/iavatar-interface';

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


  constructor(private http: HttpClient) { }

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
}
