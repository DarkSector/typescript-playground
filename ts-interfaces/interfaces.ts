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