import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private isAuthenticated: boolean = false;

  signIn() {
    this.isAuthenticated = true;
  }

  signOut() {
    this.isAuthenticated = false;
  }
  // signUp(){
    
  // }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  setIsAuthenticated(data:boolean): void  {
     this.isAuthenticated=data;
  }
}
