import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BankAccountModule } from '../../models/bank-account.module';
import { BankAccountService } from '../../service/bank-account.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/userservice.service';


@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent {


  bankForm: FormGroup;
  bankAccount: BankAccountModule =this.bankAccountService.bankAccount;

  constructor(private bankAccountService: BankAccountService,private userService:UserService, private router:Router, private fb:FormBuilder){
    this.bankForm = this.fb.group({
      balance: [this.bankAccount.balance],
      accountName: [this.bankAccount.accountName],
      accountNumber: [this.bankAccount.accountNumber],
      cvv: [this.bankAccount.cvv],
      bankName: [this.bankAccount.bankName]
    });
  }
  onSubmit(){
    const bankAccountData: BankAccountModule = this.bankForm.value as BankAccountModule

    this.bankAccountService.createAccount(bankAccountData,this.userService.usermodel.id)
    .subscribe({
      next: (data) =>{
        console.log(data)
        this.bankAccountService.bankAccount= data;
        this.router.navigate(['profile'])
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  showDetails(bankForm:FormGroup){
    this.router.navigateByUrl('accounts/'+bankForm);
  }

}
