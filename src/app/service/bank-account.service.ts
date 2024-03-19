import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccountModule } from '../models/bank-account.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  

  constructor(private httpClient: HttpClient) { }
  bankAccount:BankAccountModule = new BankAccountModule();
  createAccount(data:BankAccountModule, id?:number):Observable<BankAccountModule>{
    return this.httpClient.post(`http://localhost:8090/account/${id}`, data);
  }

  updateAccount(data:BankAccountModule):Observable<BankAccountModule>{
    return this.httpClient.patch("http://localhost:8090/account",data);
  }

  getAccountById(data:BankAccountModule):Observable<BankAccountModule>{
    return this.httpClient.get(`http://localhost:8090/account/{id}`);
  }

  deleteAccountById(data:BankAccountModule):Observable<BankAccountModule>{
    return this.httpClient.delete("http://localhost:8090/account/{id}");
  }
}
