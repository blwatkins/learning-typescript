// Objects Notes

let employee: { // object type annotation
    readonly id: number, // property value cannot be changed
    firstName: string,
    age?: number, // optional property on initialization. avoid when possible.

    // method signature
    isEligibleToRetire: () => boolean;
    retire: (message: string) => void
} = { // object initialization
    id: 1234,
    firstName: 'Carl',

    isEligibleToRetire: function(): boolean {
        if (this.age !== undefined) {
            return this.age > 60;
        } else {
            return false;
        }
    },

    retire: function(message: string): void {
        if (message.length > 0) {
            console.log(`Happy Retirement, ${this.firstName}! ${message}`);
        } else {
            console.log(`Happy Retirement, ${this.firstName}!`);
        }
    }
};

console.log(employee);

employee.firstName = 'John';
employee.age = 38;
// employee.lastName = 'Doe'; // will cause a compiler error
// employee.id = 5834; // will cause a compiler error

console.log(employee);
console.log(`isEligibleForRetirement = ${employee.isEligibleToRetire()}`);

employee.age = 74;
console.log(employee);
console.log(`isEligibleForRetirement = ${employee.isEligibleToRetire()}`);

if (employee.isEligibleToRetire()) {
    employee.retire('');
    employee.retire("We'll miss you!");
} else {
    console.log('Employee is NOT eligible to retire.');
}
