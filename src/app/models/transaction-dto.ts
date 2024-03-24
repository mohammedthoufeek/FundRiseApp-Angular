export class TransactionDto{
    constructor(
        public userId?:Number,
        public postId?:Number,
        public amount?:Number
    ){}
}