import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../service/transaction.service';
import { UserService } from '../../service/userservice.service';
import { TransactionDto } from '../../models/transaction-dto';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactionDto:TransactionDto=new TransactionDto();
  transaction:Transaction = new Transaction();
  userId:number=this.userService.usermodel.id||0;
  postId: number=0;
  

  constructor(private transactionService: TransactionService, private router:Router,private userService: UserService,private route:ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      console.log("id", +params['postId'])
      this.transactionDto.postId= +params['postId'];
      this.transactionDto.userId=this.userService.usermodel.id;
    });
  }

  

  onSubmit(){
    console.log(this.transactionDto);
    this.transactionService.addPayment(this.transactionDto)
    .subscribe({
      next: (data) =>{
        console.log(data)
      //  this.router.navigate(['transaction'])
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  

}
