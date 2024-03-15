import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../service/transaction.service';



@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  transactionForm: FormGroup;
  transaction:Transaction = new Transaction();

  constructor(private transactionService: TransactionService, private router:Router, private fb: FormBuilder){
    this.transactionForm = this.fb.group({
      userId: [this.transaction.userId],
      postId: [this.transaction.postId],
      amount: [this.transaction.amount]
    })
  }

  onSubmit(){
    const transactionData: Transaction = this.transactionForm.value as Transaction

    this.transactionService.addPayment(transactionData)
    .subscribe({
      next: (data) =>{
        console.log(data)
        this.router.navigate(['transaction'])
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  

}
