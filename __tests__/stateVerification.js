
const BankAccount = require('../src/bankAccount');

describe('State Verification - BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  test('should correctly update balance after deposit', () => {
    account.deposit(100);
    expect(account.getBalance()).toBe(100);
  });

  test('should correctly update balance after withdrawal', () => {
    account.deposit(200);
    account.withdraw(50);
    expect(account.getBalance()).toBe(150);
  });
});
