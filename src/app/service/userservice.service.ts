import { Injectable } from '@angular/core';
import { Usermodel } from '../models/usermodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/signin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticated: boolean = false;
  usermodel:Usermodel=new Usermodel();
  messageuser:Usermodel=new Usermodel();

  constructor(private httpClient: HttpClient) {
    const storedData = localStorage.getItem("userdata");
    let storedId;
    if (storedData) {
      const data = JSON.parse(storedData);
      this.usermodel=data;
    } 
   }


  signIn(data:Signin):Observable<Usermodel>{
    console.log(data);
    return this.httpClient.post("http://localhost:8090/signin", data);

  }

  signOut():Observable<any>{
    return this.httpClient.get("http://localhost:8090/signout");
  }
  signUp(data:Usermodel):Observable<Usermodel>{
    return this.httpClient.post("http://localhost:8090/user", data);
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  setIsAuthenticated(data:boolean): void  {
     this.isAuthenticated=data;
  }
  getUsers():Observable<any>{
    return this.httpClient.get("http://localhost:8090/profiles/users");
  }
  getInvestors():Observable<any>{
    return this.httpClient.get("http://localhost:8090/profiles/investors");
  }
  getCharity():Observable<any>{
    return this.httpClient.get("http://localhost:8090/profiles/charity");
  }
  getProfileById(userId?:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/profile/${userId}`);
  }
}