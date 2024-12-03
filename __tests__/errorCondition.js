
const BankAccount = require('../src/bankAccount');

describe('Error Condition Testing - BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  test('should throw an error when depositing a negative amount', () => {
    expect(() => account.deposit(-100)).toThrow('Deposit amount must be positive');
  });

  test('should throw an error when withdrawing more than balance', () => {
    account.deposit(100);
    expect(() => account.withdraw(200)).toThrow('Insufficient funds');
  });
});
