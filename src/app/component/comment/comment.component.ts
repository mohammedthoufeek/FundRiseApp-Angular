import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../../models/comment';
import { CommentServiceService } from '../../service/comment-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ CommonModule ,FormsModule],
 
templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  commentList:Comment[]=[];
  constructor(private router: Router,private commentService:CommentServiceService) {

  }
  ngOnInit(): void {
    this.fetchMessages();
  }
  fetchMessages() {
    let idString = localStorage.getItem("postId");
    let idNumber;
// Convert the string ID to a number using parseInt
    
if (idString !== null) {
  // Convert the string ID to a number using parseInt
  idNumber = parseInt(idString);
  console.log(idNumber); // Output: the ID as a number
}
    this.commentService.getCommentById(idNumber)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.commentList=data;
          },
          error: (err) => { 
            console.log(err);
          }
        }
      );
  }
}
