// Optional Call Notes

function testOptionalCall(): void {
    console.log('Start of testOptionalCall()');

    let myFunction: any = () => {
        console.log('calling my function');
    }

    myFunction?.();

    let value: number = 16;

    if (value === 16) {
        myFunction = null;
    }

    myFunction?.();

    console.log('End of testOptionalCall()');
}

export { testOptionalCall };
