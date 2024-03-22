import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private bankAccountIdSource = new BehaviorSubject<number | undefined>(undefined);
  currentBankAccountId = this.bankAccountIdSource.asObservable();

  constructor() { }

  changeBankAccountId(id: number) {
    this.bankAccountIdSource.next(id);
  }
}
