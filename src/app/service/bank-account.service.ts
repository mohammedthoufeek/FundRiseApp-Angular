import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../models/bank-account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  

  constructor(private http: HttpClient) { 
  }
  // bankAccount:BankAccount = new BankAccount();
  createAccount(data:BankAccount, id?:number):Observable<any>{
    console.log("Service data:",data);
    return this.http.post<any>(`http://localhost:8090/accounts/${id}`, data);
  }

  updateAccountNameById(id?:number,accountName?:string):Observable<BankAccount>{
    return this.http.patch(`http://localhost:8090/account/${id}`,accountName);
  }

  getAccountById(id?:number):Observable<BankAccount>{
    return this.http.get(`http://localhost:8090/account/${id}`);
  }

  deleteAccountById(data:BankAccount):Observable<BankAccount>{
    return this.http.delete("http://localhost:8090/account/{id}");
  }
}
