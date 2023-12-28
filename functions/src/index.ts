// Functions Notes

import {testOverloadingFunctions} from "./overloading-functions";
import { testUnionTypes } from "./union-types";
import { testNullableTypes } from "./nullable-types";
import { testOptionalPropertyAccess } from "./optional-property-access";
import { testOptionalCall } from "./optional-call";
import { testNullishCoalescingOperator } from "./nullish-coalescing-operator";
import { testUnknownType } from "./unknown-type";


const calculateTax = (income: number): number => {
    return income * 0.0825;
}

console.log(`Tax for 450 is ${calculateTax(450)}`);

// default parameter values in functions
const sayHello = (username: string = 'stranger'): void => {
    console.log(`Hello, ${username}!`);
}

sayHello();
sayHello('Bill');
// sayHello('Bill', 56); // this will cause a compiler error

testOverloadingFunctions();

testUnionTypes();

testNullableTypes();

testOptionalPropertyAccess();

testOptionalCall();

testNullishCoalescingOperator();

testUnknownType();
