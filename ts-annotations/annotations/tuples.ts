const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// create a type
type Drink = [string, boolean, number];

// instead of listing it manually
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];
const sprite: Drink = ['clear', true, 40];

// a tuple doesn't show all the info at a glance
const carSpecs: [number, number] = [400, 3354];

// an object gives more info
const carStats = {
    horsepower: 400,
    weight: 3354
};