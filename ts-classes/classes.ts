class Vehicle {
    private static drive(): void {
        console.log("chugga chugga");
    }

    protected honk(): void {
        Vehicle.drive();
        console.log("Beep Beep");
    }
}

const vehicle = new Vehicle();
// vehicle.drive();  // only can be called from within the class
// vehicle.honk();   // can be called from within the class or from the child

// this is how extends works
class Car extends Vehicle {
    private carDrive(): void {  // CANNOT MODIFY The modifiers of parent class also can't have a separate private definition
        console.log("vroom");
    }

    callProtectedHonk(): void {  // can be called by child class
        this.honk();
        // Vehicle.drive();  // can't do that even with static methods as long as they're private
        this.carDrive();
    }
}

const car = new Car();
car.callProtectedHonk();


class VehicleNew {
    // color: string = 'red'; // color property that has initial value of red
    // color: string;

    /* When we assign public to the variable it creates it in the class */
    constructor(public color: string = 'red') {
        // can be private, protected as well and will follow same rules as before
        // this.color = color; // you don't need this or a variable in the class, you can just use public color
    }
}

const vehicle_new = new VehicleNew('orange');
console.log(vehicle_new.color);