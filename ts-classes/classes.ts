class Vehicle {
    drive(): void {
        console.log("chugga chugga");
    }

    honk(): void {
        console.log("Beep Beep");
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

// this is how extends works
class Car extends Vehicle {
    drive(): void {
        console.log("vroom");
    }
}

const car = new Car();
car.drive();
car.honk();