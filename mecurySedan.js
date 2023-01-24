//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log("engine has started.")
            return this.started = true;
        } else {
            console.log("no fuel");
        }
    }

    loadPassenger() {
        if (this.passenger < this.maxPassengers) {
            console.log("enough room available")
            return this.loadPassenger = true;
        } else {
            console.log("exceded max capacity")
        }
    }
}

let newCar = ["Subaru", "WRX", "2013", "Black","85000"]
console.log(newCar.make)

newCar.checkService()
