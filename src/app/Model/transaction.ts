export class Transaction {
    id: number = 0;
    transactionDate: Date = new Date;
    description: string = '';
    credit: boolean = false;
    debit: boolean = false;
    balance: number = 0;
    amount: number = 0;
}
