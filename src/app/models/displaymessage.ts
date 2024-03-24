import { Time } from "@angular/common";
import { Usermodel } from "./usermodel";

export class Displaymessage {
    constructor(
        public date?:Date,
        public time?:Time,
        public message?: String,
        public user?:Usermodel,
        public userName?:String
        ) { }
}
