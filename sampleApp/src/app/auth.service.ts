import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }
isLoggedIn= false;

constructor() { }

}
