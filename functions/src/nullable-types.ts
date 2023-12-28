// Nullable Types Notes

function testNullableTypes(): void {
    const greeting = (username: string): void => {
        console.log(`Hello, ${username}!`);
    }

    const drive = (carMake: string | null): void => {
        if (carMake) {
            console.log(`I drive a ${carMake}!`);
        } else {
            console.log(`I do not have a car.`);
        }
    }

    const driveOrWalk = (carMake: string | undefined, distance: number): void => {
        if (carMake) {
            console.log(`I drive a ${carMake}! I drove ${distance} miles today.`);
        } else {
            console.log(`I do not have a car. I walked ${distance} miles today.`);
        }
    }

    // using nullable types

    greeting('Harry');
    // greeting(null); // will cause a compiler error
    // greeting(undefined); // will cause a compiler error

    drive('Ford');
    drive('Chevy');
    drive(null);
    // drive(undefined); // will cause a compiler error

    driveOrWalk('Ford', 19);
    driveOrWalk('Chevy', 45.2);
    // driveOrWalk(null, 56); // will cause a compiler error
    driveOrWalk(undefined, 20);
}

export { testNullableTypes };
