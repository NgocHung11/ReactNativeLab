export class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }
}