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
    console.log(`Name: ${vehicle.name} `);
    console.log(`Year: ${vehicle.year} `);
    console.log(`Broken? : ${vehicle.broken} `);
};

printVehicleWithInterfaceAndFunction(oldAccord);