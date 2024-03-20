import { Component, OnInit } from '@angular/core';
import { NotificationModel } from '../../models/notification-model';
import { NotificationServiceService } from '../../service/notification-service.service';


import { CommonModule } from '@angular/common';
import { UserService } from '../../service/userservice.service';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
  
})
export class NotificationComponent  {
 
 
  notificationData: NotificationModel[]=[];
  constructor(private notificationService: NotificationServiceService,private userservice:UserService,private router:Router) {
   
    
    this.notificationService.getNotificationsByUserId(this.userservice.usermodel.id).subscribe(
      {
        next: (data:NotificationModel[]) => {
          console.log(data);
          this.notificationData=data;
          
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }
  getTimeParts(time: string | undefined): string[] {
    if (time) {
      return time.split(':');
    }
    return [];
  }
  viewPostDetails(id:  number|undefined ) {
    this.router.navigate(['/post',id]);
  }
}
