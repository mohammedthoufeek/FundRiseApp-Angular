import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { Usermodel } from '../../models/usermodel';
import { Message } from '../../models/message';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../service/messages.service';
import { Displaymessage } from '../../models/displaymessage';
import { ListModel } from '../../models/list-model';
@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  fromuser:Usermodel=this.userService.usermodel;
  touser:Usermodel=this.userService.messageuser;
  message:String="";
  messageModel:Message=new Message();
  displayMessage:Displaymessage[]=[];

  constructor(private userService: UserService, private router: Router,private messageService:MessagesService) {
    
    // this.messageService.getMessages(this.fromuser.id,this.touser.id) .subscribe(
    //   {
    //     next: (data) => {
    //       console.log(data);
    //       this.displayMessage=data.messageList;
    //       // this.message = "Account Added.";
    //       // this.errorMessage = "";
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       // // this.errorMessage="Could't add Account";/
    //       // if (err.status == "0")
    //       //   this.errorMessage = " Network error, please try again later."
    //       // else
    //       //   this.errorMessage = err.error;
    //       // this.message = "";
    //     }
    //   }
    // );
  
  }
  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messageService.getMessages(this.fromuser.id, this.touser.id).subscribe(
      (data) => {
        console.log(data);
        this.displayMessage = data.messageList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMessage(){
    this.messageModel.userid1=this.fromuser.id;
    this.messageModel.userid2=this.touser.id;
    console.log(this.messageModel)
    this.messageService.sendMessage(this.messageModel)
    .subscribe(
      {
        next: (data) => {
          console.log(data);
          this.fetchMessages();
          // this.message = "Account Added.";
          // this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          // // this.errorMessage="Could't add Account";/
          // if (err.status == "0")
          //   this.errorMessage = " Network error, please try again later."
          // else
          //   this.errorMessage = err.error;
          // this.message = "";
        }
      }
    );
  }

}
