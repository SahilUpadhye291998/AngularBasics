// primitive type: number, string, boolean
// Complex type: array, objects
// Function : types, parameter

// Primitive datatype: - always start with the lower case as upper case
// will be that of the class object;
let age: number;
let username: string;
let isValid: boolean;
//union
let number: number | string;
number = 123;
number = "testing";

// more complex type for the application
let hobbies: string[]; //array;
let person: {
  name: string; //compulsory
  age: number; // compulsory
  isEmployee?: boolean; // not mandatory
};
let people: {
  name: string; //compulsory
  age: number; // compulsory
  isEmployee?: boolean; // not mandatory
}[]; // array of the object can be placed here.
person = {
  name: "test",
  age: 12,
};
