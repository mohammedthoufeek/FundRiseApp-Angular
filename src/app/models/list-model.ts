import { Usertype } from "./usertype.enum";

export class ListModel {
    constructor(
        public id?:number,
        public name?:String,
        public usertype?: Usertype
        ) { }
}
