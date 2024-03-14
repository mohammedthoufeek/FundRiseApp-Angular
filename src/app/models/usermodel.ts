import { Usertype } from "./usertype.enum";


export class Usermodel {
    constructor(
        public id?:number,
        public name?: string,
        public dob?: Date,
        public address?: String,
        public phonenumber?: String,
        public age?: number,
        public usertype?: Usertype,
        public email?:String,
        public password?:String
        ) { }
}
