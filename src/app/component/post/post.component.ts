import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  url: string |undefined;
  safeUrl: SafeResourceUrl |undefined;

  constructor(private route: ActivatedRoute,private postService: PostServiceService,private sanitizer: DomSanitizer) {
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
      this.url=data?.urlField;
      if(this.url){
        this.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      }
    });
  }

}
