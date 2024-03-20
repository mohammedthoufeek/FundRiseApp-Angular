import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../../service/post-service.service';
import { PostModel } from '../../models/post-model';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';



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


  constructor(private route: ActivatedRoute,private postService: PostServiceService,private sanitizer: DomSanitizer, private router:Router) {
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
  transaction( id:number|undefined) {
    this.router.navigate(['/transaction',id]);
  }
  comment(id:number|undefined){
    this.router.navigate(['/comment',id])
  }
  updatePost(id:number|undefined){
    this.router.navigate(['updatePost',id])
  }

  

}
