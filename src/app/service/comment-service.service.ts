import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment-model';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient: HttpClient) { }
    private isAuthenticated:boolean=false;
    commentmodel:CommentModel=new CommentModel();
   // messagecomment:CommentModel=new CommentModel();
    createComment(data:CommentModel):Observable<any>{
      console.log("servicedata",data)
      return this.httpClient.post("http://localhost:8090/comment",data);
    }


    getCommentbyId(id?:number):Observable<any>{
      return this.httpClient.get(`http://localhost:8090/comment/356`);

    }
    public getAllComments(): Observable<any> {
      return this.httpClient.get(
        "http://localhost:8090/comments");
    }
    

  
}
