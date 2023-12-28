// Type Alias Notes

function testTypeAlias(): void {
    // defining a type alias for an Employee object
    type Employee = {
        readonly id: number,
        firstName: string,
        age: number
    };

    // using a type alias
    let typedEmployee: Employee = {
        id: 8493,
        firstName: 'Cathy',
        age: 34
    }

    console.log(typedEmployee);
}

export { testTypeAlias };
