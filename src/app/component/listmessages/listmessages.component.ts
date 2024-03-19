import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { MessagesService } from '../../service/messages.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usermodel } from '../../models/usermodel';
import { ListModel } from '../../models/list-model';

@Component({
  selector: 'app-listmessages',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './listmessages.component.html',
  styleUrl: './listmessages.component.css'
})
export class ListmessagesComponent {
  userlist:ListModel[]=[];
  fromuser:Usermodel=this.userService.usermodel;
  isuser:boolean=true;
  constructor(private userService: UserService, private router: Router,private messageService:MessagesService) {
    this.messageService.getMessagedusers(this.fromuser.id).subscribe(
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
