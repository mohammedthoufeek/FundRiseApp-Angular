export class CommentDto {
    constructor(
        public postId?:number,
        public userId?:number,
        public message?: String
        ) { }
}
