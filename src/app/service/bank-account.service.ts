import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../models/bank-account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  

  constructor(private httpClient: HttpClient) { }
  bankAccount:BankAccount = new BankAccount();
  createAccount(data:BankAccount, id?:number):Observable<BankAccount>{
    return this.httpClient.post(`http://localhost:8090/accounts/${id}`, data);
  }

  updateAccount(data:BankAccount):Observable<BankAccount>{
    return this.httpClient.patch("http://localhost:8090/account",data);
  }

  getAccountById(id?:number):Observable<BankAccount>{
    return this.httpClient.get(`http://localhost:8090/account/${id}`);
  }

  deleteAccountById(data:BankAccount):Observable<BankAccount>{
    return this.httpClient.delete("http://localhost:8090/account/{id}");
  }
}
