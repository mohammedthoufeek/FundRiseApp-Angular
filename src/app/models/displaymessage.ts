import { Time } from "@angular/common";

export class Displaymessage {
    constructor(
        public date?:Date,
        public time?:Time,
        public message?: String,
        public userName?:String
        ) { }
}
