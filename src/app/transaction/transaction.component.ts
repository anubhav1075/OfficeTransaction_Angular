import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Model/transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  transactions: Transaction[] = [];

  constructor(private router: Router, private transactionService: TransactionService){
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions(): void{
    this.transactionService.getAllTransactions().subscribe((data: Transaction[]) => {
      this.transactions = data
    });
  }

  toAddTransaction(){
    this.router.navigate(['/addTransaction']);
  }


}
