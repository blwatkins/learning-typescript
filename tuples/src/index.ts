// Tuples Notes

/* NOTES:
** - tuple: a fixed length array where each element has a specific type.
*/

let user: [number, string] = [123, 'Carl'];
// user = ['cat', 'Billy']; // compiler error
// user = [456, 'Caroline', 5.49]; // compiler error
console.log(user);

// this will not cause a compiler error, but it will
// cause the tuple to no longer match its declaration
user.push('Row row row');
console.log(user);
