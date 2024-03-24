import { Time } from "@angular/common";
import { Usermodel } from "./usermodel";

export class Comment {
    constructor(
        public id?:number,
        public message?:String,
        public time?: Time,
        public date?:Date,
        public user?:Usermodel
        ) { }
}
