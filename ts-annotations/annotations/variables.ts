// we don't require type annotation
// if we remove all of the annotations
// the annotations will be inferred anyway if they're one on line
// i.e. this won't work
// let apples;
// let apples = 5;

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

// weird where type is the same as value
let nothingMuch: null = null;
let nothing: undefined = undefined;


// built in objects
let now: Date = new Date();


// Array of strings
let colors: string[] = ['red', 'green', 'blue'];

// Array of numbers
let myNumbers: number[] = [1, 2, 3];

// Array of booleans
let truths: boolean[] = [true, false, false];

// Classes
class Car {

}

// Instance of a car
let car: Car = new Car();

// object literal
// define the object in type declaration
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
// annotation is (i: number) => void
// holy shit
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


// When to use annotations
// 1. When a function that returns any type
// In parsing json, you could get back anything
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // Type inference `any`
console.log(coordinates); //{x: 10, y: 10}