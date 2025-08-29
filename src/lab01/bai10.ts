export class Account {
	public accountNumber: string;
	private balance: number;
	readonly createdAt: Date;

	constructor(accountNumber: string, balance: number) {
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.createdAt = new Date();
	}

	public getBalance(): number {
		return this.balance;
	}

	public deposit(amount: number): void {
		if (amount > 0) {
			this.balance += amount;
		}
	}

	public withdraw(amount: number): boolean {
		if (amount > 0 && amount <= this.balance) {
			this.balance -= amount;
			return true;
		}
		return false;
	}
}