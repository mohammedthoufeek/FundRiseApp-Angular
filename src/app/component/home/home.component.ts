import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { ListModel } from '../../models/list-model';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userlist:ListModel[]=[];
  investorlist:ListModel[]=[];
  charitylist:ListModel[]=[];
  isuser:boolean=true;
  isInvestor:boolean=true;
  isCharity:boolean=true;
  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.userlist = data;
          if (data!=null)this.isuser=false
        },
        error: (err) => {
          console.log(err);
          // this.errorMessage = "Could't Load Accounts";
          // this.message = "";
        },
        // complete: () => {
        //   console.log("Server completed sending data.");

        // }
      }
    )
    
    this.userService.getInvestors().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.charitylist = data;
          if (data.length>0)this.isInvestor=false
        },
        error: (err) => {
          console.log(err);
          // this.errorMessage = "Could't Load Accounts";
          // this.message = "";
        },
      }
    )
    

    this.userService.getCharity().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.investorlist = data;
          if (data!=null)this.isCharity=false
        },
        error: (err) => {
          console.log(err);
          // this.errorMessage = "Could't Load Accounts";
          // this.message = "";
        },
        // complete: () => {
        //   console.log("Server completed sending data.");

        // }
      }
    )

  }
  mapmessage(id?:number){
    this.userService.getprofileById(id).subscribe(
      {
        next: (data) => {
          console.log(data);
        this.userService.messageuser=data;
        this.router.navigate(['messages']);
        },
        error: (err) => {
          console.log(err);
          // this.errorMessage = "Could't Load Accounts";
          // this.message = "";
        },
      }
    )
  }
 
}
