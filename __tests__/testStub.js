
const BankAccount = require('../src/bankAccount');

describe('Test Stub - BankAccount', () => {
  let account, transactionHistoryStub;

  beforeEach(() => {
    transactionHistoryStub = { record: jest.fn() };
    account = new BankAccount(null, transactionHistoryStub);
  });

  test('should record a transaction for a deposit', () => {
    account.deposit(100);
    expect(transactionHistoryStub.record).toHaveBeenCalledWith('Deposited: 100');
  });
});
