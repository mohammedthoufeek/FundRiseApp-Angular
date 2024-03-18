import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(private httpClient: HttpClient) { }
  sendMessage(data:Message):Observable<any>{
    console.log("data",data)
    return this.httpClient.post("http://localhost:8090/chat",data);
  }
  getMessages(id1?:number,id2?:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/chat/get/${id1}/${id2}`);
  }
  getMessagedusers(id1?:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/messagedusers/get/${id1}`);
  }
}
