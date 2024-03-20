import { Component } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostServiceService } from '../../service/post-service.service';
import { UserService } from '../../service/userservice.service';
import { PostType } from '../../models/posttype.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent {
  postId:number=0;
  success:string="";
  errorMessage:string="";

  updatepost:PostModel=new PostModel();
  postTypes=Object.values(PostType);

  id:number=this.userService.usermodel.id||0;
  constructor(private userService:UserService,private postService:PostServiceService,private router:Router,private route: ActivatedRoute){}

 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      if (this.postId) {
        this.getPostDetails();
      }
    });
  }

  getPostDetails(){
    this.postService.getPostById(this.postId).pipe(
      catchError(error=>{
        console.error('Error loading post:',error);
        return of(null);
      })
    ).subscribe((data:PostModel|null)=>{
      if(data){
        this.updatepost=data;
      }
    })
  }
  


  updatePost(){
    console.log(this.updatepost);
    this.postService.updatePost(this.updatepost,this.id).subscribe({
      next:(data)=>{
        console.log("Call side:",data);
        

        this.success="Post updated successfully";
        this.errorMessage="";
      },
      error:(err)=>{
        this.errorMessage = "Error updating post: " + err.errorMessage;
        this.success = "";      }

    })
    this.router.navigate(['post']);
  }





}

