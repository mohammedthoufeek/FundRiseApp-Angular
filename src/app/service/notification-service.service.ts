import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NotificationModel } from '../models/notification-model';


@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  constructor(private httpClient: HttpClient) { }
  notification:NotificationModel = new NotificationModel();
  getNotificationsByUserId(userId?: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8090/Notification/${userId}`);
  }
  sendNotificationToAllUsersExceptPublisher(userId?:number, postId?:number) : Observable<any> {
    return this.httpClient.get(`http://localhost:8090/Notification/${userId}/${postId}`);
  }
  
      
  
}
  

