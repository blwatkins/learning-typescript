// Variable Notes

/* NOTES:
** - We set the type of variables by annotating them
** - Valid TypScript types
**   - number
**   - string
**   - boolean
**   - null
**   - undefined
**   - object
**   - any
**   - unknown
**   - never
**   - enum
**   - tuple
** - The `any` Type
**   - Variables declared with the `any` type function as regular dynamically typed JavaScript variables.
**   - Avoid when possible
*/

let age: number = 36;
// age = 'this is the age'; // will cause compiler error

console.log(age);

let otherNumber: number = 65_342;
console.log(`otherNumber = ${otherNumber}`);

let username: string = 'Bobby';
console.log(`name = ${username}`);

let isRaining: boolean = true;
console.log(`isRaining = ${isRaining}`);

// The `any` Type
let anyValue: any = 543;
console.log(`anyValue = ${anyValue}; type = ${typeof anyValue}`);
anyValue = 'this is now a string';
console.log(`anyValue = ${anyValue}; type = ${typeof anyValue}`);
