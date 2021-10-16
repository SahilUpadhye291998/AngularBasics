import { createImportSpecifier } from "typescript";

function add(a: number, b: number) {
  return a + b;
}

function sub(a: number, b: number): string | number {
  return a + b;
}

/*
function concat(a: number | string, b: number | string): string {
  return a + b; // this will give us error cause we will not be knowing which input will be provide
}
*/
function concat(a: string, b: number | string): string {
  return a + b; // this will give us error cause we will not be knowing which input will be provide
}

function print(value: any) {
  console.log(value);
}

function insertAtBeginning(array: any[], value: any): any[] {
  return [value, ...array];
}

const tempArray = [1, 2, 3];
const newArray = insertAtBeginning(tempArray, -1);
console.log(newArray); // [-1, 1, 2, 3]

//Generic function - This will be much more easier to manage in the run time
function insertAtTheEnd<T>(array: T[], value: T) {
  return [...array, value];
}


