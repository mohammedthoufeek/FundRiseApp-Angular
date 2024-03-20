import { Usermodel } from "./usermodel";

export class CommentModel {
    constructor(
        public postId?:number,
        public userId?:number,
        public message?:string,
        public date?:Date
        
    ){}
}
