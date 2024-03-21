import { Component } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PostServiceService} from '../../service/post-service.service'
import { UserService } from '../../service/userservice.service';
import { PostType } from '../../models/posttype.enum';
import { NotificationServiceService } from '../../service/notification-service.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {

  success:string="";
  errorMessage:string="";



  newPost: PostModel =new PostModel();
  postTypes = Object.values(PostType);


  
  id:number=this.userService.usermodel.id||0;

  constructor(private userService: UserService,private postService: PostServiceService,private notificationService:NotificationServiceService,private router:Router){ 
    
   }



  addNewPost(){
    console.log(this.newPost);
    this.postService.addNewPost(this.newPost,this.id).subscribe({
      next:(data)=>{
        console.log(data);

        this.success = "Product Added Successfully.";
        this.errorMessage="";
        this.newPost=new PostModel();
        this.sendNotificationToAllUsersExceptPublisher();
      },
      error:(err)=>{
        console.log(err);
        console.log(err.error);
        this.errorMessage=err.error;
        this.success="";
      }
    })
      this.router.navigate(['post'])
    

  }
  
  sendNotificationToAllUsersExceptPublisher(){
   
    this.notificationService.sendNotificationToAllUsersExceptPublisher(this.id,this.newPost.id).subscribe({
      next:(data)=>{
        console.log(data);

        // this.success = "Product Added Successfully.";
        // this.errorMessage="";
        // this.newPost=new PostModel();
      },
      error:(err)=>{
        console.log(err);
        // console.log(err.error);
        // this.errorMessage=err.error;
        // this.success="";
      }
    })
    this.router.navigate(['/post',this.newPost.id]);
    
  }
  

  
  
}
