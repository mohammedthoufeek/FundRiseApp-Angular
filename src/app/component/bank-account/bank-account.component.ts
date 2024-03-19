import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BankAccount } from '../../models/bank-account';
import { BankAccountService } from '../../service/bank-account.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent {

  success:string="";
  errorMessage:string="";

  newBankAccount: BankAccount = new BankAccount();
  bankAccounts:BankAccount= this.bankAccountService.bankAccount;


  constructor(private bankAccountService: BankAccountService,private userService:UserService, private router:Router, private fb:FormBuilder){

    this.bankAccountService.getAccountById(this.userService.usermodel.id)
    .subscribe({
      next:(data)=>{
        console.log(data);
        this.success="displayed all accounts";
        this.errorMessage="";
        this.bankAccountService.bankAccount=data;
        this.newBankAccount=data;
        console.log(this.bankAccountService.bankAccount);
        console.log(this.newBankAccount);
      },
      error: (err)=>{
        console.log(err);
        console.log(err.error);
        this.errorMessage=err.error;
        this.success="";
      }
    });
    
    console.log(this.bankAccounts);

  }
  onSubmit(){
    console.log("new form data: ",this.newBankAccount)

    this.bankAccountService.createAccount(this.newBankAccount,this.userService.usermodel.id)
    .subscribe({
      next: (data) =>{
        console.log("data: ",data)
        this.success = "bank account created successfully"
        this.errorMessage="";
        this.bankAccountService.bankAccount=data;
        this.newBankAccount=data;
        console.log(this.bankAccountService.bankAccount)
        console.log(this.newBankAccount)
        this.router.navigate(['transaction'])
      },
      error: (err) =>{
        console.log(err);
        console.log(err.error);
        this.errorMessage=err.error;
        this.success="";
      }
    });
  }
}
