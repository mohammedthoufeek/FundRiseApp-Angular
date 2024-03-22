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

  showTable: boolean = false;

      
  // bankAccounts:BankAccount= this.bankAccountService.bankAccount;
  bankAccounts:BankAccount = new BankAccount();

  id = this.userService.usermodel.id;

  constructor(private bankAccountService: BankAccountService,private userService:UserService, private router:Router, private fb:FormBuilder){ 
    }

  showDetails(){
    this.showTable = !this.showTable;
    this.bankAccountService.getAccountById(this.id)
    .subscribe((data:BankAccount)=>{
      console.log("Recevide data:",data);
      this.bankAccounts=data;
      // console.log("Bsnkac",this.bankAccounts);
    });
    
    console.log(this.bankAccounts);

  }
  onSubmit(){
    console.log("new form data: ",this.bankAccounts)

    this.bankAccountService.createAccount(this.bankAccounts,this.id)
    .subscribe({
      next: (data) =>{
        console.log("data: ",data)
        // this.bankAccountService.bankAccount=data;
        // this.bankAccounts=data;
        // console.log(this.bankAccountService.bankAccount)
        // console.log(this.bankAccounts)
        this.bankAccounts=new BankAccount();
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  deleteAccount(id?:number){
    this.bankAccountService.deleteAccountByAccountNumber(this.bankAccounts.id)
    .subscribe({
      next:(data)=>{
        console.log("deleted data: ",data);
        console.log(this.bankAccounts);
      },

      error:(err)=>{
        console.log(err);
      }
    });
  } 

  updateAccount(id?:number){
    this.bankAccountService.updateAccountNameById(this.id)
    .subscribe({
      next:(data)=>{
        console.log(data);
      },

      error:(err)=>{
        console.log(err);
      }
    });
  }
}