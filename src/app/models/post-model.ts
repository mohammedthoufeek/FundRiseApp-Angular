import { PostType } from "./posttype.enum";

export class PostModel {
    constructor(
        public id?:number,
        public title?:string,
        public urlField?: string,
        public cause?: string,
        public details?: String,
        public amountNeeded?: number,
        public postType?: PostType,
        ) { }
}
