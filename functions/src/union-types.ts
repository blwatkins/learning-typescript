// Union Type Notes

function testUnionTypes(): void {
    // function with a union type
    // the parameter `value` can be a `number` type OR a `string` type
    const logPercentage = (value: number | string): void => {
        // type narrowing
        if (typeof value === 'number') {
            console.log('The type of `value` is number!');
            console.log(`${value * 100}%`);
        } else {
            console.log('The type of `value` is string!');
            let num: number = parseFloat(value);
            console.log(`${num * 100}%`);
        }
    }

    // calling methods defined with union types
    logPercentage(0.45);
    logPercentage('0.06');
    // logPercentage(false); // will cause a compiler error
}



export { testUnionTypes };
