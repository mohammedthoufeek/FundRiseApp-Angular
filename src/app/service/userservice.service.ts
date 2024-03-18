import { Injectable } from '@angular/core';
import { Usermodel } from '../models/usermodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/signin';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private isAuthenticated: boolean = false;
  usermodel:Usermodel=new Usermodel();
  messageuser:Usermodel=new Usermodel();
  signIn(data:Signin):Observable<Usermodel>{
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
  getProfileById(id?:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/profile/${id}`);
  }
}
