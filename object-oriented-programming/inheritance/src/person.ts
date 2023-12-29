// Person Class

class Person {
    public constructor(private _firstName: string,
                private _lastName: string) {
    }

    public introduction(): void {
        console.log(`Hello! I am ${this.fullName}. It's nice to meet you!`);
    }

    public get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

export default Person;
