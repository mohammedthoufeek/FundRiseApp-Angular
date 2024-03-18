import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment-model';
import { Observable } from 'rxjs';
import { CommentDto } from '../models/comment-dto';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient: HttpClient) { }
    private isAuthentication:boolean=false;
    commentmodel:CommentModel=new CommentModel();
    messagecomment:CommentModel=new CommentModel();
    createComment(data:CommentDto):Observable<CommentModel>{
      return this.httpClient.post("http://localhost:8090/comment",data);
    }
    
    getCommentbyId(id?:number):Observable<CommentModel>{
      return this.httpClient.get("http://localhost:8090/comment/"+id);

    }
    

  
}
