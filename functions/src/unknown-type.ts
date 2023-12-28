// Unknown Type Notes

function testUnknownType(): void {
    class Person {
        public id: number;
        public firstName: string;
        constructor(id: number, firstName: string) {
            this.id = id;
            this.firstName = firstName;
        }
    }

    const doSomething = (item: unknown): void => {
        if (typeof item === 'string') {
            console.log(`Item is a string with the value '${item}'.`);
        } else if (typeof item === 'number') {
            console.log(`item is a number with the value ${item}.`);
        } else if (item instanceof Person) { // instanceof cannot be used with type aliases for objects
            console.log(`item is a Person; firstName = ${item.firstName}.`);
        } else {
            console.log('Case not handled.');
        }
    };

    doSomething('I am happy.');
    doSomething(5_235);
    doSomething(null);

    let bob: Person = new Person(3492, 'Bob');
    doSomething(bob);
}

export { testUnknownType };
