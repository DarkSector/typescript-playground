interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

// long annotation; not ideal
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name} `);
    console.log(`Year: ${vehicle.year} `);
    console.log(`Broken? : ${vehicle.broken} `);
};

printVehicle(oldCivic);

// better way is to use an interface
const printVehicleWithInterface = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name} `);
    console.log(`Year: ${vehicle.year} `);
    console.log(`Broken? : ${vehicle.broken} `);
};

printVehicleWithInterface(oldCivic);

// An interface with complex type (a function)
interface NewVehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string; // a function that takes no arguments and returns a string
}

const oldAccord = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {return `Name: ${this.name}` }
};

const printVehicleWithInterfaceAndFunction = (vehicle: NewVehicle): void => {
    console.log(`Summary : ${vehicle.summary()} `);
};

printVehicleWithInterfaceAndFunction(oldAccord);


// It isn't necessary to implement everything in an interface
interface  Reportable{
    summary(): string; // a function that takes no arguments and returns a string
}

const anotherVehicle = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {return `Name: ${this.name}` }
};

// interface has only one element that needs to be implemented
const printVehicleWithSimpleVehicleInterface = (vehicle: Reportable): void => {
    console.log(`Summary : ${vehicle.summary()} `);
};

printVehicleWithSimpleVehicleInterface(anotherVehicle);
