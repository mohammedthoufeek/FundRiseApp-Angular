import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usertype } from './usertype.enum';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BankAccountModule { 
  constructor(
    public balance?:Number,
    public accountName?:String,
    public accountNumber?:Number,
    public cvv?:Number,
    public bankName?:String
  ){}
}
