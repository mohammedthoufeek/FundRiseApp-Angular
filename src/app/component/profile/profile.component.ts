import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usermodel } from '../../models/usermodel';
import { UserService } from '../../service/userservice.service';
import {  HttpClientModule } from '@angular/common/http';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountService } from '../../service/bank-account.service';
import { SharedService } from '../../service/share.service';
import { BankAccount } from '../../models/bank-account';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user!: Usermodel;
  posts:PostModel[]=[];
  bankAccounts:BankAccount=new BankAccount();

  bankid?:number;
  showTable: boolean = false;
  // viewPost:boolean=false;
  toggleView:boolean=true;
  constructor(private userservice:UserService,private postservice:PostServiceService,private router:Router, private bankAccountService:BankAccountService,private route:ActivatedRoute) {
    this.userservice.getProfileById(this.userservice.usermodel.id).subscribe(
      {
        next: (data:Usermodel) => {
          console.log(data);
          this.user=data;
          
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  
  getPostByUserId(){
    this.toggleView=true;
    this.showTable=false;
    this.postservice.getPostByUserId(this.userservice.usermodel.id).subscribe(
      {
        next: (data:PostModel[]) => {
          // this.viewPost=true;
          console.log(data);
          this.posts=data;
          
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  viewPostDetails(id:  number|undefined ) {
    // this.router.navigate(['/post',id]);
  }

  showDetails(){
    this.showTable=true;
    this.toggleView=false;
    this.route.params.subscribe(params => {
      this.bankid = +params['bankAccountId'];
      if (this.bankid) {
        this.bankAccountService.getAccountById(this.bankid)
        .subscribe((data:BankAccount)=>{
          console.log(this.bankid)
          console.log("Recevide data:",data);
          this.bankAccounts=data;
          console.log("Bank Account",this.bankAccounts);
        });
      }
    });
    console.log(this.bankAccounts);
  }
  createAccount(){
    this.router.navigate(['bank-account']);
  }
}

