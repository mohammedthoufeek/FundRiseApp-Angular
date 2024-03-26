import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usermodel } from '../../models/usermodel';
import { UserService } from '../../service/userservice.service';
import {  HttpClientModule } from '@angular/common/http';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';
import { Router } from '@angular/router';
import { BankAccount } from '../../models/bank-account';
import { BankAccountService } from '../../service/bank-account.service';


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
  account!:BankAccount;
  // viewPost:boolean=false;
  toggleView:boolean=false;
  constructor(private userservice:UserService,private postservice:PostServiceService,private router:Router,private bankService:BankAccountService) {
   
    
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
    this.toggleView=!this.toggleView;
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
    this.router.navigate(['/post',id]);
  }
  
}

