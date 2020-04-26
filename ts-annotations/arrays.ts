// self inference
const carMakers = ['ford', 'toyota', 'chevy'];

// empty arrays should have annotation
const moreCarMakers: string[] = [];

// complex types
// weird ass way of assigning annotations
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Help prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map(
    (car: string): string => {
    return car.toUpperCase();
});

