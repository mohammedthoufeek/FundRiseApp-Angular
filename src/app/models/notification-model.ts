import { Time } from "@angular/common";
import { PostModel } from "./post-model";

export class NotificationModel {
constructor( public userId?: number, public message?: string,public time?:string,public date?:string,public post?:PostModel)
 {}

}
