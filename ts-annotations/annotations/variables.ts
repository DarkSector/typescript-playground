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
const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

// easier way would be to specify stuff directly in arguments
const newLogNumber = (i: number): void => {
    console.log(i);
}


// When to use annotations
// 1. When a function that returns any type
// In parsing json, you could get back anything
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // Type inference `any`
console.log(coordinates); //{x: 10, y: 10}

// Typescript is going to fail at catching errors here
// coordinates.foobar;
// because it thinks anything is a fair game

// Better way to do this
const foobar: {x: number; y: number} = JSON.parse(json);

// 2. When we declare variable on one line and initialize on another
let words = ['red', 'green', 'blue'];
let foundWord;

// either use let foundWord: boolean;
// or use let foundWord = false;

for (let i=0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3. A variable whose type cannot be inferred directly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]; // won't work without the multiple types declared on #82

    }
}
