import { Injectable } from '@angular/core';
import { CommentDto } from '../models/comment-dto';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient: HttpClient) { }
   
    commentmodel:Comment=new Comment();
   // messasendgecomment:CommentModel=new CommentModel();
    sendComment(data:CommentDto):Observable<any>{
      console.log("servicedata",data)
      return this.httpClient.post("http://localhost:8090/comment",data);
    }

    getCommentById(id?:number):Observable<any>{
      return this.httpClient.get(`http://localhost:8090/comment/${id}`);

    }
    // }
    // public getAllComments(): Observable<any> {
    //   return this.httpClient.get(
    //     "http://localhost:8090/comments");
    // }
}
