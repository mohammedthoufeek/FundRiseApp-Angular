import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { Usermodel } from '../../models/usermodel';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})

export class MessagesComponent {
  fromuser:Usermodel=this.userService.usermodel;
  touser:Usermodel=this.userService.messageuser;
  message:String="";
  constructor(private userService: UserService, private router: Router) {
    
  }

  

}
