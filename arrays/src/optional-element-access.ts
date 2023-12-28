// Optional Element Access Operator Notes

function testOptionalElementAccess(): void {
    const getArray = (guess: number): string[] | undefined => {
        if (guess === 100) {
            return ['apple', 'banana', 'strawberry'];
        } else {
            return undefined;
        }
    }

    let arrayA: string[] | undefined = getArray(100);

    // optional element access operator (?.)
    if (arrayA?.[1]) {
        console.log(`arrayA[1] = ${arrayA[1]}`);
    } else {
        console.log(`arrayA[1] does not exist.`);
    }

    let arrayB: string[] | undefined = getArray(5_000);

    if (arrayB?.[1]) {
        console.log(`arrayB[1] = ${arrayB[1]}`);
    } else {
        console.log(`arrayB[1] does not exist.`);
    }
}

export { testOptionalElementAccess };
