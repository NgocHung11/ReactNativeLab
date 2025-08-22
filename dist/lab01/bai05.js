"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.balance}`);
        }
        else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        }
        else {
            console.log("Withdrawal amount must be positive.");
        }
    }
}
exports.BankAccount = BankAccount;
