import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BankAccount } from '../../models/bank-account';
import { BankAccountService } from '../../service/bank-account.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/userservice.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../service/share.service';

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent {



  

      
  // bankAccounts:BankAccount= this.bankAccountService.bankAccount;
  bankAccounts:BankAccount = new BankAccount();
  isAccount:boolean=true;

  id = this.userService.usermodel.id;

  constructor(private bankAccountService: BankAccountService,private userService:UserService, private router:Router, private sharedService:SharedService){ 
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
        const bankAccountId = data.id; // Adjust this according to your actual data structure
        this.sharedService.changeBankAccountId(bankAccountId);
      
        if(this.bankAccounts!=null){ alert("Account Created Successfully"); this.isAccount=false;}
        this.router.navigate(['post']);
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  
}