// Optional Property Access Notes

function testOptionalPropertyAccess(): void {
    type Person = {
        id: number;
    }

    const getPerson = (guess: number): Person | null | undefined => {
        if (guess === 40) {
            return {
                id: 4023
            };
        } else if (guess === 25) {
            return undefined;
        } else {
            return null;
        }
    }

    // using the optional property access operator
    let personA: Person | undefined | null = getPerson(40);

    if (personA?.id) {
        console.log(personA);
        console.log(`id = ${personA.id}`);
    } else {
        console.log('There is no person.');
    }

    let personB: Person | undefined | null = getPerson(25);

    if (personB?.id) {
        console.log(personB);
        console.log(`id = ${personB.id}`);
    } else {
        console.log('There is no person.');
    }

    let personC: Person | undefined | null = getPerson(70);

    if (personC?.id) {
        console.log(personC);
        console.log(`id = ${personC.id}`);
    } else {
        console.log('There is no person.');
    }
}



export { testOptionalPropertyAccess };
