import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postId: number=0;
  post: PostModel=new PostModel();

  constructor(private route: ActivatedRoute,private postService: PostServiceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      if (this.postId) {
        this.getPostDetails();
      }
    });
  }

  getPostDetails() {
    this.postService.getPostById(this.postId).subscribe((data: PostModel) => {
      this.post = data;
    });
  }

}
