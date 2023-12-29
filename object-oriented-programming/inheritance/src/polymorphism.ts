// Polymorphism Notes

import Person from "./person";
import Student from "./student";
import Teacher from "./teacher";

function testPolymorphism(): void {
    const printNames = (people: Person[]): void => {
        for (let person of people) {
            console.log(person.fullName);
        }
    }

    printNames([
        new Student('2345', 'Peter', 'Parker'),
        new Teacher('Mr.', 'Clark', 'Kent'),
        new Teacher("Dr.", "Everything'll", "Be-Alright")
    ]);
}

export { testPolymorphism };
