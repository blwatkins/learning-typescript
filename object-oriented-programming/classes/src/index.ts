// Classes Notes

/* NOTES:
** - Access Control Keywords (Access Modifiers): public, private, protected
*/

import { testIndexSignatures } from "./index-signature";

// class definition
class BankAccount {
    readonly id: number; // this property can only be assigned in the constructor
    owner: string;
    private _balance: number; // this property cannot be accessed outside the class
    private _nickname?: string; // this is an optional property. it's value does not have to be assigned in the constructor.
    readonly transactions: number[];
    private static _totalAccounts: number = 0;

    // constructor
    constructor(id: number,
                owner: string,
                balance: number,
                // parameter property removes the need for property declaration and assignment
                public readonly accountType: 'checking' | 'savings' | 'investment') {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.transactions = [];
        BankAccount._totalAccounts++;
    }

    // methods
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount.');
        } else {
            this.logTax(amount);
            this.transactions.push(amount);
            this._balance += amount;
        }
    }

    tryThings(): void {
        // this.id = -400; // this will cause a compiler error
        // this.transactions = [17]; // this will cause a compiler error
        console.log(`The nickname is ${this._nickname}; The account type is ${this.accountType}.`);
    }

    private logTax(amount: number): void {
        console.log(`Tax = ${amount * 0.0825}`);
    }

    // getters
    static get totalAccounts(): number {
        return BankAccount._totalAccounts;
    }

    get balance(): number {
        return this._balance;
    }

    get nickname(): string | undefined {
        return this._nickname;
    }

    // setters
    // setters should not have return type annotations
    set nickname(nickname: string) {
        this._nickname = nickname;
    }
}

// object instantiation
let account: BankAccount = new BankAccount(1234, 'Alex', 134.67, 'checking');
// let otherAccount: BankAccount = new BankAccount(1234, 'Alex', 134.67, 'other'); // this will cause a compiler error ('other' is not a valid value for accountType)

// using an object
console.log(account);
console.log(`balance = ${account.balance}`);
account.deposit(45);
console.log(`balance = ${account.balance}`);

// account._balance = 45; // this will cause a compiler error (_balance is private)

// account.id = -234; // this will cause a compiler error (id is readonly)
console.log(`The account's id = ${account.id}.`);
account.tryThings();
console.log(`The account's id = ${account.id}.`);

account.nickname = 'Checking Account';
account.tryThings();
console.log(account);
console.log(`Nickname = ${account.nickname}`);
// console.log(`Nickname = ${account._nickname}`); // this will cause a compiler error (_nickname is private)

// account.accountType = 'savings'; // this will cause a compiler error (accountType is readonly)

// BankAccount.totalAccounts = 104; // this will cause a compiler error (we cannot set totalAccounts; there is no set method)
console.log(`Total number of accounts = ${BankAccount.totalAccounts}`);
// console.log(`Total number of accounts = ${account.totalAccounts}`);  // this will cause a compiler error (the getter for totalAccounts is static)
// console.log(`Total number of accounts = ${BankAccount._totalAccounts}`); // this will cause a compiler error (_totalAccounts is private)

const savingsAccount: BankAccount = new BankAccount(4563, 'Paul', 634.67, 'savings');
savingsAccount.deposit(1_234);
console.log(`Total number of accounts = ${BankAccount.totalAccounts}`);

testIndexSignatures();
