// Overloading Function Notes

/* NOTES:
** - IMPORTANT: The signature of the implementation is not visible from the outside.
** - When writing an overloaded function, you should always have two or more signatures above the implementation of the function.
*/

function greeting(): string; // signature #1
function greeting(username: string): string; // signature #2
function greeting(username: string, day: number, weather: string): string; // signature #3
function greeting(username?: string, day?: number, weather?: string): string { // implementation signature
    let message: string;
    if (username === undefined) {
        message = 'Hello!';
    } else if (day === undefined || weather === undefined) {
        message = `Hello, ${username}!`;
    } else {
        message = `Hello, ${username}. Today is day ${day} of the month! The weather is ${weather}.`;
    }

    return message;
}

function testOverloadingFunctions(): void {
    console.log(greeting());
    console.log(greeting('Cheryl'));
    // console.log(greeting('Peter', 14)); // will cause a compiler error
    console.log(greeting('Carl', 25, 'sunny'));
}

export { testOverloadingFunctions };