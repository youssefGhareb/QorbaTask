import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../Interfaces/user-details';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiBaseURL: string = 'https://dummyjson.com/auth';
  loggedIn: boolean = false;

  constructor(private client: HttpClient) {}

  authenticateUser(
    username: string,
    password: string
  ): Observable<UserDetails> {
    // let result: Observable<UserDetails> | null = null;
    return this.client
      .post<UserDetails>(
        this.apiBaseURL + '/login',
        {
          username: username,
          password: password,
        },
        {
          headers: { 'Content-Type': 'Application/json' },
        }
      );
  }

  logIn(): void{
    window.localStorage.setItem("LoggedIn","true");
  }

  logOut(): void{
    window.localStorage.setItem('LoggedIn', 'false');
    console.log("should set to false. Result : ", localStorage.getItem('LoggedIn'));
    
  }

  isLoggedIn(){
    return window.localStorage.getItem('LoggedIn');
  }

}
