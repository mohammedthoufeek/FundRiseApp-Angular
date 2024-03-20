import { Time } from "@angular/common";
export class CommentDto {
    constructor(
        public postId?:number,
        public userId?:number,
        public message?:string,
        public date?:Date
        
    ){}
}
