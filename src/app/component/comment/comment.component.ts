import { Component } from '@angular/core';
import { CommentServiceService } from '../../service/comment-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentDto } from '../../models/comment-dto';
import { Router } from '@angular/router';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/userservice.service';
import { Usermodel } from '../../models/usermodel';
import { CommentModel } from '../../models/comment-model';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,NgFor],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent  {
  commentForm:FormGroup;
  userModel:Usermodel=new Usermodel();
  commentModel:CommentDto=new CommentDto();
  fromuser:Usermodel=this.userService.usermodel;
  touser:Usermodel=this.userService.messageuser;
  comments: CommentDto[] = [];

  constructor(private commentService:CommentServiceService, private userService: UserService, private router:Router,private fb:FormBuilder){
    const currentDate = new Date();
   const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;  
    this.commentForm=this.fb.group({
        userid: [this.userModel.id],
        postid:[202],
        message:[this.commentModel.message],
        date:[formattedDate]
      });
  }
  
  onSubmit(){
    const formData:CommentModel=this.commentForm.value as CommentModel;
    this.commentService.createComment(formData)
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          

        },
        error:(err)=>{
          console.log(err);
        }
      }
    );
    
  }
}
