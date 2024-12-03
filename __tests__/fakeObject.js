
const BankAccount = require('../src/bankAccount');

describe('Fake Object - BankAccount', () => {
  let fakeTransactionHistory, account;

  beforeEach(() => {
    fakeTransactionHistory = {
      transactions: [],
      record(transaction) {
        this.transactions.push(transaction);
      }
    };
    account = new BankAccount(null, fakeTransactionHistory);
  });

  test('should store transaction details in the fake object', () => {
    account.deposit(100);
    expect(fakeTransactionHistory.transactions).toContain('Deposited: 100');
  });
});
