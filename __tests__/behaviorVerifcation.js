
const BankAccount = require('../src/bankAccount');

describe('Behavior Verification - BankAccount', () => {
  let account, loggerMock;

  beforeEach(() => {
    loggerMock = { log: jest.fn() }; // Mock logger
    account = new BankAccount(loggerMock); // Pass mock logger to account
  });

  test('should log a message when depositing money', () => {
    account.deposit(100); // Call the deposit method
    expect(loggerMock.log).toHaveBeenCalledWith('Deposited: 100'); // Verify logger called
  });

  test('should log a message when withdrawing money', () => {
    account.deposit(200); // Deposit before withdrawing
    account.withdraw(50); // Call the withdraw method
    expect(loggerMock.log).toHaveBeenCalledWith('Withdrew: 50'); // Verify logger called
  });
});


