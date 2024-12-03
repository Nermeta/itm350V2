
class BankAccount {
    constructor(logger = null, transactionHistory = null) {
      this.balance = 0;
      this.logger = logger; // Optional logger for behavior verification
      this.transactionHistory = transactionHistory; // Optional transaction history
    }
  
    deposit(amount) {
      if (amount <= 0) throw new Error('Deposit amount must be positive');
      this.balance += amount;
      
      if (this.logger) this.logger.log(`Deposited: ${amount}`); // Logging on deposit
  
      if (this.transactionHistory) {
        this.transactionHistory.record(`Deposited: ${amount}`); // Record transaction
      }
    }
  
    withdraw(amount) {
      if (amount <= 0) throw new Error('Withdrawal amount must be positive');
      if (amount > this.balance) throw new Error('Insufficient funds');
      this.balance -= amount;
  
      if (this.logger) this.logger.log(`Withdrew: ${amount}`); // Logging on withdrawal
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  module.exports = BankAccount;
  
