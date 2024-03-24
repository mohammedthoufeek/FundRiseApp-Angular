import { Component } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';
import { PostServiceService } from '../../service/post-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listpost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listpost.component.html',
  styleUrl: './listpost.component.css'
})
export class ListpostComponent {
  posts: PostModel[] = []; 

  constructor(private postService: PostServiceService,private router: Router) {};
  ngOnInit() {
    this.postService.getAllPosts().subscribe((data: PostModel[]) => {
      console.log(data)
      this.posts = data;
      console.log("Post data "+this.posts);

    });

    
  }
  viewPostDetails(id?:number ) {
    let ids=""+id;
    localStorage.setItem("postId",ids);
    this.router.navigate(['/post',id]);
  }

}

