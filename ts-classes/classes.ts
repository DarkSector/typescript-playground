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