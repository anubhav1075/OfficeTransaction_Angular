import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../Model/transaction';



@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit{
  addTransactionForm!: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private router: Router){}

  ngOnInit(): void {
      this.transactionForm();
  }

  transactionForm(): void{
    this.addTransactionForm = this.fb.group({
      transactionType: ['credit', Validators.required],
      amount: [, Validators.required],
      description: ['', Validators.required]
    });
  }

  addTransaction(): void {
    if(this.addTransactionForm.valid){
      const transactionType = this.addTransactionForm.value.transactionType;
      const isCredit = transactionType === 'credit';
      const isDebit = transactionType === 'debit';

      const transactionData: Transaction = {
        credit: isCredit,
        debit: isDebit,
        description: this.addTransactionForm.value.description,
        amount: this.addTransactionForm.value.amount,
        transactionDate: new Date(),
        balance: 0,
        id: 0
      };

      this.transactionService.addTransaction(transactionData).subscribe(response =>{
        console.log("Transaction Added Successfully", response);
        this.router.navigate(['/transaction']);
      }, error => {
        console.error('Error adding transaction', error)
      });

    }
  }

  cancel(){
    this.addTransactionForm.reset();
  }

}
