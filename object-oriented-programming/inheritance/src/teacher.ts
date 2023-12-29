// Teacher Class

import Person from "./person";

class Teacher extends Person {
    constructor(private _title: string,
                _firstName: string,
                _lastName: string) {
        super(_firstName, _lastName);
    }

    // overriding a superclass method
    public override get fullName(): string {
        return `${this._title} ${super.fullName}`;
    }
}

export default Teacher;
