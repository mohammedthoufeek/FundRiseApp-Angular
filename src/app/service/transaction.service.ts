import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usermodel } from '../models/usermodel';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }
  transaction:Transaction=new Transaction();
  addPayment(data:Transaction):Observable<Transaction>{
    return this.httpClient.post("http://localhost:8090/payment", data);
 }

  getAllPayments(data:Transaction):Observable<Transaction>{
    return this.httpClient.get("http://localhost:8090/payments");
 }
}
