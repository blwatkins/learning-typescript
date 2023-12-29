// Student Class

import Person from "./person";

class Student extends Person {
    constructor(private readonly _studentId: string,
                _firstName: string,
                _lastName: string) {
        super(_firstName, _lastName);
    }

    public takeTest(): void {
        console.log(`${this.fullName} (${this._studentId}) is taking a test.`);
    }
}

export default Student;
