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