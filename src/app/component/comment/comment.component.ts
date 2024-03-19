import { Component} from '@angular/core';
import { CommentServiceService } from '../../service/comment-service.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { CommentDto } from '../../models/comment-dto';
import { Router } from '@angular/router';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/userservice.service';
import { Usermodel } from '../../models/usermodel';
import { CommentModel } from '../../models/comment-model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { Displaycomments } from '../../models/displaycomments';
import { OnInit } from '@angular/core';
 

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule, NgFor, FormsModule,CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent  {
  commentForm:FormGroup;
  userModel:Usermodel=new Usermodel();
  commentModel:CommentDto=new CommentDto();
  displayComments:Displaycomments[]=[];
  
  comments: CommentDto[] = [];

  constructor(private commentService:CommentServiceService, private userService: UserService, private router:Router,private fb:FormBuilder){
    const currentDate = new Date();
   const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;  
    this.commentForm=this.fb.group({
        
        userId:[353],
        postId:[256],
        message:[this.commentModel.message],
        date:[formattedDate]
      });
       
  }
  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments() {
    this.commentService.getAllComments().subscribe(
      (data) => {
        console.log(data);
        this.displayComments = data.commentList;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  onSubmit(){
    const formData:CommentDto=this.commentForm.value as CommentDto;
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
