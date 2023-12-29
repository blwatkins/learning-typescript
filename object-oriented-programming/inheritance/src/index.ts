// Inheritance Notes

import Student from "./student";
import Teacher from "./teacher";
import { testPolymorphism } from "./polymorphism";

const student: Student = new Student('6849', 'John', 'Doe');
student.takeTest();

const teacher: Teacher = new Teacher('Professor', 'George', 'Banks');

console.log(`student full name = ${student.fullName}`);
console.log(`teacher full name = ${teacher.fullName}`);

student.introduction();
teacher.introduction();

testPolymorphism();
