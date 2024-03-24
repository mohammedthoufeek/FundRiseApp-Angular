import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { CommentDto } from '../../models/comment-dto';


import { UserService } from '../../service/userservice.service';
import { FormsModule } from '@angular/forms';
import { CommentServiceService } from '../../service/comment-service.service';
import { AppComponent } from '../../app.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FormsModule,CommentComponent],
  
templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postId: number=0;
  post: PostModel=new PostModel();
  url: string |undefined;
  safeUrl: SafeResourceUrl |undefined;
  commentDto:CommentDto=new CommentDto();
  success:string="";
  errorMessage:string="";
  constructor(private route: ActivatedRoute,private postService: PostServiceService,private sanitizer: DomSanitizer, private router:Router,private userService:UserService,private commentService:CommentServiceService) {
    
    this.commentDto.userId=this.userService.usermodel.id;
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      console.log(+params['postId'])
      this.commentDto.postId=this.postId;
      if (this.postId) {
        this.getPostDetails();
      }
    });
  }

  getPostDetails() {
    this.postService.getPostById(this.postId).pipe(
      catchError(error => {
        console.error('Error loading post:', error);
        return of(null);
      })
    ).subscribe((data: PostModel | null) => {
      if (data) {
        this.post = data;
        this.url = data.urlField;
        if (this.isValidUrl(this.url)) {
          if(this.url)
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        } else {
          
          this.safeUrl = '';
        }
      } else {
        this.safeUrl = '';
      }
    });
  }
  isValidUrl(url:string |undefined):boolean {
    if(url)
    return url.startsWith('https://www.youtube.com'); 
  return false;
  }
  transaction( id?:number) {
    this.router.navigate(['/transaction',id]);
  }
  comment(id:number|undefined){
    this.router.navigate(['/comment',id])
  }
  updatePost(id:number|undefined){
    this.router.navigate(['updatePost',id])
  }

  
sendComment(){
  this.commentService.sendComment(this.commentDto)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.success = "Comment sent successfully";
            this.errorMessage = "";
          },
          error: (err) => {
            console.log(err);
            this.errorMessage="Could't add Account";
            if (err.status == "0")
              this.errorMessage = " Network error, please try again later."
            else
              this.errorMessage =JSON.stringify(err.error);
            this.success = "";
          }
        }
      );
}
  

}
