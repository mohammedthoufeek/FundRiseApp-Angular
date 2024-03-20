import { Component} from '@angular/core';
import { CommentServiceService } from '../../service/comment-service.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/userservice.service';
import { Usermodel } from '../../models/usermodel';
import { CommentModel } from '../../models/comment-model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { Displaycomments } from '../../models/displaycomments';
import { OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { PostServiceService } from '../../service/post-service.service';
 

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule, NgFor, FormsModule,CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{
  commentForm:FormGroup;
  userModel:Usermodel=new Usermodel();
  postModel:PostModel=new PostModel();
  commentModel:CommentModel=new CommentModel();
  displayComments:Displaycomments[]=[];

  
  comments: CommentModel[] = [];

  constructor(private commentService:CommentServiceService, private userService: UserService,private postservice:PostServiceService, private router:Router,private fb:FormBuilder){
    const currentDate = new Date();
   const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;  
    this.commentForm=this.fb.group({
        userId:[this.userService.usermodel.id],
        username:[this.userService.usermodel.name],
        postId:[this.postservice.postmodel.id],
        message:[this.commentService.commentmodel.message],
        date:[formattedDate]
      });
       
  }
  ngOnInit(): void {
    this.commentService.getCommentbyId(this.postModel.id).subscribe((comment) => {
      this.comments = comment;
    });
    // this.commentService.getAllComments().subscribe((comment)=>{
    //   this.comments=comment;
    // })
  }
  
  
  
  onSubmit(){
    const formData:CommentModel=this.commentForm.value as CommentModel;
    console.log("formdtacomponent",formData);
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
