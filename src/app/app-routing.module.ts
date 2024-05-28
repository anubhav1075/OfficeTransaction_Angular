import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/transaction',
    pathMatch: 'full'
  },
  { 
    path: 'transaction',
    component: TransactionComponent 
  },
  { 
    path: 'addTransaction',
    component: AddTransactionComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
