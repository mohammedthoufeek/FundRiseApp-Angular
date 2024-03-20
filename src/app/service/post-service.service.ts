import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  public getAllPosts(): Observable<any>{
    return this.http.get(
      "http://localhost:8090/posts");
  }


  public addNewPost(newPost:PostModel,id:number):Observable<any>{

    console.log(newPost);

    return this.http.post<any>(
      "http://localhost:8090/post?userId=" + id,newPost);
  }


  public getPostById(postId:number): Observable<any>{
    return this.http.get("http://localhost:8090/post/"+postId);
  }


  public deletePostById(id:number):Observable<any>{
    return this.http.delete("http://localhost:8090/post/"+id);
  }

  public updatePost(updatePost:PostModel,id:number):Observable<any>{
    console.log("Service side: ",updatePost);
    return this.http.put<any>("http://localhost:8090/post?userId=" + id,updatePost);
  }
  
}


